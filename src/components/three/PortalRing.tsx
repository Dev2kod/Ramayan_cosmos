import { memo, useMemo, useRef, useState, useEffect } from 'react';
import { useFrame, type ThreeEvent } from '@react-three/fiber';
import { Billboard, Text } from '@react-three/drei';
import * as THREE from 'three';
import type { Character } from '../../data/types';
import { FACTION_COLOR, RELATION_COLOR } from '../../lib/theme';
import { portraitTexture, onManifest } from '../../lib/portraits';
import { useStore } from '../../store';
import { bondCaption, type Bond } from '../../lib/bonds';
import { portalEnter, portalLeave, cancelBondHover } from '../../lib/bondHover';
import { glowTexture } from './GraphNodes';

export interface PortalDef {
  other: Character;
  /** Every relation and shared event between the viewed character and `other`. */
  bond: Bond;
}

const R = 142;

/**
 * Doorways to neighbouring characters, ringed around the far edge of the world.
 *
 * Memoised: the scene above re-renders when a bond card opens (to still the
 * camera), and this boundary keeps that from reaching the 24 portals.
 */
export const PortalRing = memo(function PortalRing({
  portals,
  onOpen,
}: {
  portals: PortalDef[];
  onOpen: (id: string) => void;
}) {
  const grp = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (!grp.current) return;
    // Freeze the ring while a bond is being read, otherwise the portal slides
    // out from under the cursor and the card closes as you reach for it.
    // Read imperatively so hovering never re-renders the 24 portals.
    const s = useStore.getState();
    if (s.bondHover || s.bondFocus) return;
    grp.current.rotation.y += dt * 0.015;
  });
  return (
    <group ref={grp}>
      {portals.map((p, i) => {
        const a = (i / portals.length) * Math.PI * 2;
        // Three tiers, interleaved, so neighbouring portals never share a
        // height and their captions cannot collide.
        const tier = i % 3;
        const y = -48 + tier * 48;
        const r = R + tier * 12;
        return (
          <Portal
            key={p.other.id}
            def={p}
            position={[Math.cos(a) * r, y, Math.sin(a) * r]}
            onOpen={onOpen}
          />
        );
      })}
    </group>
  );
});

function Portal({
  def,
  position,
  onOpen,
}: {
  def: PortalDef;
  position: [number, number, number];
  onOpen: (id: string) => void;
}) {
  const color = FACTION_COLOR[def.other.faction];
  const primary = def.bond.primary;
  const relColor = RELATION_COLOR[primary.relation.type] ?? '#888';
  const extra = def.bond.relations.length - 1;
  const [, bump] = useState(0);
  useEffect(() => onManifest(() => bump((n) => n + 1)), []);
  const tex = useMemo(() => portraitTexture(def.other.id, color), [def.other.id, color, bump]);

  const grp = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Mesh>(null);
  const halo = useRef<THREE.Mesh>(null);
  const label = useRef<any>(null);
  const rel = useRef<any>(null);
  const hov = useRef(0);

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime;
    const k = 1 - Math.pow(0.002, dt);
    const target = hov.current;
    if (grp.current) {
      grp.current.position.y = position[1] + Math.sin(t * 0.5 + position[0]) * 1.2;
      const s = 1 + target * 0.35;
      grp.current.scale.lerp(new THREE.Vector3(s, s, s), k);
    }
    if (ring.current) ring.current.rotation.z += dt * (0.25 + target * 0.8);
    if (halo.current) (halo.current.material as THREE.MeshBasicMaterial).opacity = 0.16 + target * 0.4;
    if (label.current) label.current.fillOpacity = 0.55 + target * 0.45;
    if (rel.current) rel.current.fillOpacity = 0.2 + target * 0.8;
  });

  const RAD = 5.6;

  return (
    <group ref={grp} position={position}>
      <Billboard>
        <mesh ref={halo} position={[0, 0, -0.3]}>
          <circleGeometry args={[17, 32]} />
          <meshBasicMaterial
            color={color}
            map={glowTexture()}
            transparent
            opacity={0.16}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            toneMapped={false}
          />
        </mesh>

        <mesh
          /* These handlers talk to the hover controller imperatively rather
             than through a selector. That is deliberate: a subscription here
             would re-render all 24 portals every time the pointer crosses one,
             and the card lives outside the canvas anyway. */
          onPointerOver={(e: ThreeEvent<PointerEvent>) => {
            e.stopPropagation();
            hov.current = 1;
            if (e.pointerType !== 'mouse') return; // on touch, a tap just travels
            document.body.style.cursor = 'pointer';
            portalEnter(def.other.id, e.clientX, e.clientY);
          }}
          onPointerOut={(e: ThreeEvent<PointerEvent>) => {
            e.stopPropagation();
            hov.current = 0;
            document.body.style.cursor = '';
            if (e.pointerType !== 'mouse') return;
            portalLeave(def.other.id);
          }}
          onClick={(e) => {
            e.stopPropagation();
            cancelBondHover();
            onOpen(def.other.id);
          }}
        >
          <circleGeometry args={[RAD, 40]} />
          <meshBasicMaterial map={tex} toneMapped={false} />
        </mesh>

        <mesh ref={ring}>
          <ringGeometry args={[RAD + 0.25, RAD + 0.8, 48]} />
          <meshBasicMaterial color={relColor} transparent opacity={0.85} toneMapped={false} />
        </mesh>

        <Text
          ref={label}
          position={[0, -RAD - 2.2, 0]}
          fontSize={2.2}
          color="#f0e9dd"
          anchorX="center"
          anchorY="top"
          outlineWidth={0.1}
          outlineColor="#05060f"
          material-toneMapped={false}
        >
          {def.other.name}
        </Text>
        <Text
          ref={rel}
          position={[0, -RAD - 5.2, 0]}
          fontSize={1.35}
          color={relColor}
          anchorX="center"
          anchorY="top"
          maxWidth={34}
          letterSpacing={0.1}
          material-toneMapped={false}
        >
          {/* The "+N" tells you there is more to this bond than the headline. */}
          {(bondCaption(primary) + (extra > 0 ? `  +${extra} more` : '')).toUpperCase()}
        </Text>
      </Billboard>
    </group>
  );
}
