import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * A procedural nebula dome + layered starfield. No textures to download:
 * the whole sky is a shader on the inside of a large sphere, plus two
 * point clouds that parallax against each other.
 */
export function Sky({ tint = '#2a2170' }: { tint?: string }) {
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const starsA = useRef<THREE.Points>(null);
  const starsB = useRef<THREE.Points>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uTint: { value: new THREE.Color(tint) },
      uTint2: { value: new THREE.Color('#5a1f4a') },
    }),
    []
  );

  useMemo(() => uniforms.uTint.value.set(tint), [tint, uniforms]);

  const near = useMemo(() => starGeometry(2600, 160, 420, 0xfff3d8), []);
  const far = useMemo(() => starGeometry(5200, 420, 700, 0xaebcff), []);

  useFrame((_, dt) => {
    uniforms.uTime.value += dt;
    if (starsA.current) starsA.current.rotation.y += dt * 0.006;
    if (starsB.current) starsB.current.rotation.y -= dt * 0.0022;
  });

  return (
    <group>
      <mesh scale={[-1, 1, 1]} renderOrder={-1000}>
        <sphereGeometry args={[900, 48, 32]} />
        <shaderMaterial
          ref={matRef}
          uniforms={uniforms}
          vertexShader={VERT}
          fragmentShader={FRAG}
          side={THREE.BackSide}
          depthWrite={false}
          depthTest={false}
          toneMapped={false}
        />
      </mesh>

      <points ref={starsA} geometry={near}>
        <pointsMaterial
          size={1.5}
          sizeAttenuation
          vertexColors
          transparent
          opacity={0.95}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
      <points ref={starsB} geometry={far}>
        <pointsMaterial
          size={1.1}
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

function starGeometry(count: number, rMin: number, rMax: number, baseHex: number) {
  const pos = new Float32Array(count * 3);
  const col = new Float32Array(count * 3);
  const base = new THREE.Color(baseHex);
  const c = new THREE.Color();
  let seed = baseHex;
  const rnd = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  for (let i = 0; i < count; i++) {
    // uniform on a spherical shell
    const u = rnd() * 2 - 1;
    const th = rnd() * Math.PI * 2;
    const s = Math.sqrt(1 - u * u);
    const r = rMin + rnd() * (rMax - rMin);
    pos[i * 3] = Math.cos(th) * s * r;
    pos[i * 3 + 1] = u * r;
    pos[i * 3 + 2] = Math.sin(th) * s * r;

    const warm = rnd();
    c.copy(base).lerp(new THREE.Color(warm > 0.82 ? '#ffd0a0' : '#dfe6ff'), rnd() * 0.6);
    const b = 0.35 + rnd() * 0.65;
    col[i * 3] = c.r * b;
    col[i * 3 + 1] = c.g * b;
    col[i * 3 + 2] = c.b * b;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return g;
}

const VERT = /* glsl */ `
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;

const FRAG = /* glsl */ `
precision highp float;
varying vec3 vDir;
uniform float uTime;
uniform vec3 uTint;
uniform vec3 uTint2;

// --- value noise / fbm ---
vec3 hash3(vec3 p){
  p = vec3(dot(p, vec3(127.1, 311.7, 74.7)),
           dot(p, vec3(269.5, 183.3, 246.1)),
           dot(p, vec3(113.5, 271.9, 124.6)));
  return fract(sin(p) * 43758.5453123) * 2.0 - 1.0;
}
float noise(vec3 p){
  vec3 i = floor(p), f = fract(p);
  vec3 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(dot(hash3(i + vec3(0,0,0)), f - vec3(0,0,0)),
                     dot(hash3(i + vec3(1,0,0)), f - vec3(1,0,0)), u.x),
                 mix(dot(hash3(i + vec3(0,1,0)), f - vec3(0,1,0)),
                     dot(hash3(i + vec3(1,1,0)), f - vec3(1,1,0)), u.x), u.y),
             mix(mix(dot(hash3(i + vec3(0,0,1)), f - vec3(0,0,1)),
                     dot(hash3(i + vec3(1,0,1)), f - vec3(1,0,1)), u.x),
                 mix(dot(hash3(i + vec3(0,1,1)), f - vec3(0,1,1)),
                     dot(hash3(i + vec3(1,1,1)), f - vec3(1,1,1)), u.x), u.y), u.z);
}
float fbm(vec3 p){
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 6; i++) { v += a * noise(p); p *= 2.03; a *= 0.5; }
  return v;
}

void main() {
  vec3 d = normalize(vDir);
  float t = uTime * 0.012;

  float n1 = fbm(d * 1.7 + vec3(t, 0.0, -t * 0.6));
  float n2 = fbm(d * 3.4 + vec3(-t * 0.5, t * 0.3, 0.0));
  float cloud = smoothstep(0.02, 0.72, n1 * 0.7 + n2 * 0.45);

  // two nebula bands, strongest near the galactic "plane"
  float band = exp(-pow(abs(d.y) * 2.3, 2.0));
  vec3 neb = mix(uTint, uTint2, clamp(n2 * 0.9 + 0.4, 0.0, 1.0));
  vec3 col = neb * cloud * (0.26 + band * 0.55);

  // deep base + subtle vertical gradient
  col += vec3(0.012, 0.013, 0.035) + vec3(0.0, 0.004, 0.02) * (1.0 - d.y);

  // faint dust filaments
  float fil = smoothstep(0.55, 0.95, fbm(d * 7.0 + vec3(0.0, t, 0.0)));
  col += neb * fil * 0.07;

  gl_FragColor = vec4(col, 1.0);
}`;
