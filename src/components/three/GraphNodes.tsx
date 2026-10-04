import { useMemo, useRef } from 'react';
import { useFrame, type ThreeEvent } from '@react-three/fiber';
import { Billboard, Text } from '@react-three/drei';
import * as THREE from 'three';
import type { LaidOutNode } from '../../lib/layout';
import { FACTION_COLOR } from '../../lib/theme';

interface Props {
  nodes: LaidOutNode[];
  /** 0..1 per node id: 1 = focused, ~0.12 = dimmed out */
  weights: Map<string, number>;
  hovered: string | null;
  onHover: (id: string | null) => void;
  onSelect: (id: string) => void;
}

export function GraphNodes({ nodes, weights, hovered, onHover, onSelect }: Props) {
  return (
    <group>
      {nodes.map((n) => (
        <Node
          key={n.id}
          node={n}
          weight={weights.get(n.id) ?? 1}
          hovered={hovered === n.id}
          onHover={onHover}
          onSelect={onSelect}
        />
      ))}
    </group>
  );
}

function Node({
  node,
  weight,
  hovered,
  onHover,
  onSelect,
}: {
  node: LaidOutNode;
  weight: number;
  hovered: boolean;
  onHover: (id: string | null) => void;
  onSelect: (id: string) => void;
}) {
  const core = useRef<THREE.Mesh>(null);
  const halo = useRef<THREE.Mesh>(null);
  const ring = useRef<THREE.Mesh>(null);
  const label = useRef<any>(null);
  const grp = useRef<THREE.Group>(null);

  const color = FACTION_COLOR[node.character.faction];
  const c = useMemo(() => new THREE.Color(color), [color]);
  const phase = useMemo(() => (node.id.charCodeAt(0) * 7919) % 100, [node.id]);

  // Smoothed state so dimming and hover never pop.
  const s = useRef({ w: 1, h: 0 });

  useFrame((state, dt) => {
    const k = 1 - Math.pow(0.001, dt);
    s.current.w += (weight - s.current.w) * k;
    s.current.h += ((hovered ? 1 : 0) - s.current.h) * k;
    const w = s.current.w;
    const h = s.current.h;
    const t = state.clock.elapsedTime;

    const pulse = 1 + Math.sin(t * 1.1 + phase) * 0.035 * node.character.importance * 0.3;
    const scale = pulse * (1 + h * 0.42);

    if (core.current) {
      core.current.scale.setScalar(scale);
      const m = core.current.material as THREE.MeshBasicMaterial;
      m.color.copy(c).multiplyScalar(0.35 + w * 0.85 + h * 0.5);
      m.opacity = 0.25 + w * 0.75;
    }
    if (halo.current) {
      halo.current.scale.setScalar(scale * (3.1 + h * 1.0));
      (halo.current.material as THREE.MeshBasicMaterial).opacity = (0.12 + w * 0.3 + h * 0.3) * 0.85;
    }
    if (ring.current) {
      ring.current.scale.setScalar(scale * (1 + h * 0.2));
      ring.current.rotation.z += dt * 0.4;
      (ring.current.material as THREE.MeshBasicMaterial).opacity = h * 0.75;
    }
    if (label.current) {
      const base = node.character.importance >= 4 ? 1 : node.character.importance >= 3 ? 0.72 : 0.45;
      label.current.fillOpacity = Math.min(1, (base * w + h) * (0.25 + w * 0.9));
      label.current.outlineOpacity = label.current.fillOpacity * 0.8;
    }
    if (grp.current) grp.current.position.y = node.y + Math.sin(t * 0.5 + phase) * 0.12;
  });

  const stop = (e: ThreeEvent<PointerEvent>) => e.stopPropagation();

  return (
    <group ref={grp} position={[node.x, node.y, node.z]}>
      {/* generous invisible hit target */}
      <mesh
        onPointerOver={(e) => {
          stop(e);
          onHover(node.id);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={(e) => {
          stop(e);
          onHover(null);
          document.body.style.cursor = '';
        }}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(node.id);
        }}
      >
        <sphereGeometry args={[node.radius * 2.1, 12, 8]} />
        <meshBasicMaterial visible={false} />
      </mesh>

      <mesh ref={core}>
        <sphereGeometry args={[node.radius, 24, 18]} />
        <meshBasicMaterial color={color} transparent toneMapped={false} />
      </mesh>

      <Billboard>
        <mesh ref={halo}>
          <circleGeometry args={[node.radius, 32]} />
          <meshBasicMaterial
            color={color}
            transparent
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            toneMapped={false}
            map={glowTexture()}
          />
        </mesh>
        <mesh ref={ring}>
          <ringGeometry args={[node.radius * 1.7, node.radius * 1.85, 48]} />
          <meshBasicMaterial
            color={'#ffffff'}
            transparent
            opacity={0}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            toneMapped={false}
          />
        </mesh>
        <Text
          ref={label}
          position={[0, -node.radius - 2.6, 0]}
          fontSize={1.9 + node.character.importance * 0.72}
          color="#f3ece0"
          anchorX="center"
          anchorY="top"
          outlineWidth={0.07}
          outlineColor="#05060f"
          maxWidth={46}
          letterSpacing={0.04}
          material-toneMapped={false}
          material-depthWrite={false}
        >
          {node.character.name}
        </Text>
      </Billboard>
    </group>
  );
}

/* A soft radial falloff used for every glow sprite in the app. */
let _glow: THREE.CanvasTexture | null = null;
export function glowTexture(): THREE.CanvasTexture {
  if (_glow) return _glow;
  const size = 128;
  const cv = document.createElement('canvas');
  cv.width = cv.height = size;
  const g = cv.getContext('2d')!;
  const grad = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.18, 'rgba(255,255,255,0.55)');
  grad.addColorStop(0.45, 'rgba(255,255,255,0.14)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, size, size);
  _glow = new THREE.CanvasTexture(cv);
  return _glow;
}
