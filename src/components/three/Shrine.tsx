import { useMemo, useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Billboard, Text } from '@react-three/drei';
import * as THREE from 'three';
import type { Character } from '../../data/types';
import { FACTION_COLOR } from '../../lib/theme';
import { portraitTexture, onManifest } from '../../lib/portraits';
import { glowTexture } from './GraphNodes';

/**
 * The centrepiece of a character's inner world: a floating portrait plate,
 * three counter-rotating halo rings, and an aura of orbiting motes.
 */
const W = 28; // portrait plate, sized to clear the facet ring (72 x 46)
const H = 36.5;

export function Shrine({ character }: { character: Character }) {
  const color = FACTION_COLOR[character.faction];
  const [, bump] = useState(0);
  useEffect(() => onManifest(() => bump((n) => n + 1)), []);

  const tex = useMemo(() => portraitTexture(character.id, color, 7.2 / 9.4), [character.id, color, bump]);

  const plate = useRef<THREE.Group>(null);
  const r1 = useRef<THREE.Mesh>(null);
  const r2 = useRef<THREE.Mesh>(null);
  const r3 = useRef<THREE.Mesh>(null);
  const motes = useRef<THREE.Points>(null);

  const moteGeo = useMemo(() => auraGeometry(650, color), [color]);

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime;
    if (plate.current) plate.current.position.y = Math.sin(t * 0.55) * 0.7;
    if (r1.current) r1.current.rotation.z += dt * 0.12;
    if (r2.current) {
      r2.current.rotation.z -= dt * 0.08;
      r2.current.rotation.x = Math.PI / 2.2;
    }
    if (r3.current) {
      r3.current.rotation.y += dt * 0.16;
      r3.current.rotation.x = Math.PI / 2;
    }
    if (motes.current) {
      motes.current.rotation.y += dt * 0.05;
      (motes.current.material as THREE.PointsMaterial).opacity = 0.5 + Math.sin(t * 0.8) * 0.12;
    }
  });

  return (
    <group>
      {/* The plate billboards so the portrait and name read correctly from
          wherever the camera has wandered — including behind the shrine. */}
      <Billboard ref={plate}>
        {/* portrait */}
        <mesh position={[0, 0, 0]}>
          <planeGeometry args={[W, H]} />
          <meshBasicMaterial map={tex} toneMapped={false} />
        </mesh>
        {/* gilt border */}
        <mesh position={[0, 0, -0.06]}>
          <planeGeometry args={[W + 1.4, H + 1.4]} />
          <meshBasicMaterial color={color} toneMapped={false} transparent opacity={0.85} />
        </mesh>
        {/* backing glow */}
        <mesh position={[0, 0, -1.2]}>
          <circleGeometry args={[42, 48]} />
          <meshBasicMaterial
            color={color}
            map={glowTexture()}
            transparent
            opacity={0.3}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            toneMapped={false}
          />
        </mesh>

        <Text
          position={[0, -H / 2 - 1.6, 0.1]}
          fontSize={2.9}
          color="#f6efe2"
          anchorX="center"
          anchorY="top"
          letterSpacing={0.12}
          outlineWidth={0.12}
          outlineColor="#05060f"
          material-toneMapped={false}
        >
          {character.name.toUpperCase()}
        </Text>
        <Text
          position={[0, -H / 2 - 5.9, 0.1]}
          fontSize={1.75}
          color={color}
          anchorX="center"
          anchorY="top"
          maxWidth={44}
          material-toneMapped={false}
        >
          {character.epithets[0] ?? ''}
        </Text>
      </Billboard>

      {/* halo rings */}
      <mesh ref={r1}>
        <torusGeometry args={[25, 0.14, 8, 128]} />
        <meshBasicMaterial color={color} toneMapped={false} transparent opacity={0.6} />
      </mesh>
      <mesh ref={r2}>
        <torusGeometry args={[30, 0.1, 8, 128]} />
        <meshBasicMaterial color={'#ffcf6b'} toneMapped={false} transparent opacity={0.3} />
      </mesh>
      <mesh ref={r3}>
        <torusGeometry args={[37, 0.07, 8, 128]} />
        <meshBasicMaterial color={color} toneMapped={false} transparent opacity={0.22} />
      </mesh>

      <points ref={motes} geometry={moteGeo}>
        <pointsMaterial
          size={0.42}
          sizeAttenuation
          vertexColors
          transparent
          opacity={0.6}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

function auraGeometry(count: number, hex: string) {
  const pos = new Float32Array(count * 3);
  const col = new Float32Array(count * 3);
  const base = new THREE.Color(hex);
  const c = new THREE.Color();
  let seed = 991;
  const rnd = () => ((seed = (seed * 1664525 + 1013904223) >>> 0), seed / 4294967296);
  for (let i = 0; i < count; i++) {
    const a = rnd() * Math.PI * 2;
    const r = 24 + rnd() * 20;
    const y = (rnd() - 0.5) * 48;
    pos[i * 3] = Math.cos(a) * r;
    pos[i * 3 + 1] = y;
    pos[i * 3 + 2] = Math.sin(a) * r;
    c.copy(base).lerp(new THREE.Color('#ffffff'), rnd() * 0.5);
    const b = 0.3 + rnd() * 0.7;
    col[i * 3] = c.r * b;
    col[i * 3 + 1] = c.g * b;
    col[i * 3 + 2] = c.b * b;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return g;
}
