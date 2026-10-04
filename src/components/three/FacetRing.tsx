import { useRef } from 'react';
import { useFrame, type ThreeEvent } from '@react-three/fiber';
import { Billboard, Text } from '@react-three/drei';
import * as THREE from 'three';
import type { Facet } from '../../store';
import { glowTexture } from './GraphNodes';

export interface FacetDef {
  key: Exclude<Facet, null>;
  label: string;
  sub: string;
  count: number;
}

const RX = 72;
const RY = 46;

/**
 * The tablets ring the shrine in the X–Y plane rather than orbiting it in X–Z.
 * A horizontal ring collapses to a line under the default camera angle; a
 * screen-parallel one always reads as a circle of six.
 */
export function facetPosition(i: number, n: number): THREE.Vector3 {
  const a = (i / n) * Math.PI * 2 - Math.PI / 2;
  return new THREE.Vector3(Math.cos(a) * RX, Math.sin(a) * RY, 16 + Math.cos(a) * 10);
}

/** The six glass tablets orbiting the shrine. */
export function FacetRing({
  facets,
  active,
  color,
  onSelect,
}: {
  facets: FacetDef[];
  active: Facet;
  color: string;
  onSelect: (f: Exclude<Facet, null>) => void;
}) {
  return (
    <group>
      {facets.map((f, i) => (
        <Tablet
          key={f.key}
          def={f}
          position={facetPosition(i, facets.length)}
          active={active === f.key}
          color={color}
          onSelect={onSelect}
        />
      ))}
    </group>
  );
}

function Tablet({
  def,
  position,
  active,
  color,
  onSelect,
}: {
  def: FacetDef;
  position: THREE.Vector3;
  active: boolean;
  color: string;
  onSelect: (f: Exclude<Facet, null>) => void;
}) {
  const grp = useRef<THREE.Group>(null);
  const panel = useRef<THREE.Mesh>(null);
  const edge = useRef<THREE.Mesh>(null);
  const glow = useRef<THREE.Mesh>(null);
  const hov = useRef(0);
  const act = useRef(0);

  useFrame((state, dt) => {
    const k = 1 - Math.pow(0.002, dt);
    act.current += ((active ? 1 : 0) - act.current) * k;
    const t = state.clock.elapsedTime;
    if (grp.current) {
      grp.current.position.y = position.y + Math.sin(t * 0.6 + position.x) * 0.3;
      const s = 1 + hov.current * 0.1 + act.current * 0.14;
      grp.current.scale.setScalar(s);
    }
    if (panel.current) {
      (panel.current.material as THREE.MeshBasicMaterial).opacity = 0.2 + hov.current * 0.12 + act.current * 0.18;
    }
    if (edge.current) {
      (edge.current.material as THREE.MeshBasicMaterial).opacity = 0.35 + hov.current * 0.3 + act.current * 0.5;
    }
    if (glow.current) {
      (glow.current.material as THREE.MeshBasicMaterial).opacity = 0.08 + hov.current * 0.16 + act.current * 0.24;
    }
  });

  const W = 29;
  const H = 16.5;

  return (
    <group ref={grp} position={position}>
      <Billboard>
        <mesh ref={glow} position={[0, 0, -0.4]}>
          <circleGeometry args={[30, 32]} />
          <meshBasicMaterial
            color={color}
            map={glowTexture()}
            transparent
            opacity={0.08}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            toneMapped={false}
          />
        </mesh>
        <mesh ref={edge} position={[0, 0, -0.04]}>
          <planeGeometry args={[W + 0.4, H + 0.4]} />
          <meshBasicMaterial color={color} transparent opacity={0.35} toneMapped={false} />
        </mesh>
        <mesh
          ref={panel}
          onPointerOver={(e: ThreeEvent<PointerEvent>) => {
            e.stopPropagation();
            hov.current = 1;
            document.body.style.cursor = 'pointer';
          }}
          onPointerOut={(e: ThreeEvent<PointerEvent>) => {
            e.stopPropagation();
            hov.current = 0;
            document.body.style.cursor = '';
          }}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(def.key);
          }}
        >
          <planeGeometry args={[W, H]} />
          <meshBasicMaterial color={'#0b0d1f'} transparent opacity={0.22} toneMapped={false} />
        </mesh>

        <Text
          position={[0, 3.4, 0.05]}
          fontSize={2.9}
          color="#f6efe2"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.16}
          material-toneMapped={false}
        >
          {def.label.toUpperCase()}
        </Text>
        <Text
          position={[0, -1.4, 0.05]}
          fontSize={1.55}
          color={color}
          anchorX="center"
          anchorY="middle"
          maxWidth={W - 3.5}
          material-toneMapped={false}
        >
          {def.sub}
        </Text>
        {def.count > 0 && (
          <Text
            position={[0, -6.2, 0.05]}
            fontSize={1.15}
            color="#8d8678"
            anchorX="center"
            anchorY="middle"
            letterSpacing={0.2}
            material-toneMapped={false}
          >
            {`${def.count} ENTR${def.count === 1 ? 'Y' : 'IES'}`}
          </Text>
        )}
      </Billboard>
    </group>
  );
}
