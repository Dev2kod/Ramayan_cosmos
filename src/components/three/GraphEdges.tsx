import { useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import type { LaidOutEdge, LaidOutNode } from '../../lib/layout';
import { RELATION_COLOR, rgb } from '../../lib/theme';

const SEG = 14; // samples per edge curve

interface Props {
  nodes: LaidOutNode[];
  edges: LaidOutEdge[];
  /** 0..1 per edge: 1 = fully lit, low = dimmed by filter/focus */
  weights: Float32Array;
}

/**
 * All relationship edges as one additive line mesh plus one particle system.
 * Curves are quadratic beziers bowed away from the origin so overlapping
 * pairs separate visually, as in Obsidian's graph.
 */
export function GraphEdges({ nodes, edges, weights }: Props) {
  const pos = useMemo(() => new Map(nodes.map((n) => [n.id, n])), [nodes]);

  const { lineGeo, lineMat, dotGeo, dotMat } = useMemo(() => {
    const n = edges.length;
    const verts = new Float32Array(n * SEG * 2 * 3); // line segments
    const cols = new Float32Array(n * SEG * 2 * 3);
    const alphaAttr = new Float32Array(n * SEG * 2);
    const ctrl = new Float32Array(n * 9); // a, b, c per edge (for particles)

    const a = new THREE.Vector3();
    const b = new THREE.Vector3();
    const c = new THREE.Vector3();
    const p = new THREE.Vector3();
    const q = new THREE.Vector3();

    edges.forEach((e, i) => {
      const s = pos.get(e.source)!;
      const t = pos.get(e.target)!;
      a.set(s.x, s.y, s.z);
      b.set(t.x, t.y, t.z);
      // bow the control point outward from the midpoint
      c.copy(a).add(b).multiplyScalar(0.5);
      const bow = a.distanceTo(b) * 0.16;
      const away = c.clone().normalize().multiplyScalar(bow);
      // deterministic lateral offset so parallel edges fan out
      const lat = new THREE.Vector3()
        .subVectors(b, a)
        .cross(new THREE.Vector3(0, 1, 0))
        .normalize()
        .multiplyScalar(((hash(e.source + e.target + e.relation.type) % 100) / 100 - 0.5) * bow * 1.1);
      c.add(away).add(lat);

      ctrl.set([a.x, a.y, a.z, c.x, c.y, c.z, b.x, b.y, b.z], i * 9);

      const [r, g, bl] = rgb(RELATION_COLOR[e.relation.type] ?? '#888');

      for (let k = 0; k < SEG; k++) {
        bezier(a, c, b, k / SEG, p);
        bezier(a, c, b, (k + 1) / SEG, q);
        const base = (i * SEG + k) * 6;
        verts.set([p.x, p.y, p.z, q.x, q.y, q.z], base);
        cols.set([r, g, bl, r, g, bl], base);
        // fade the ends into the node glow
        const f0 = taper(k / SEG);
        const f1 = taper((k + 1) / SEG);
        alphaAttr[(i * SEG + k) * 2] = f0;
        alphaAttr[(i * SEG + k) * 2 + 1] = f1;
      }
    });

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(verts, 3));
    lineGeo.setAttribute('color', new THREE.BufferAttribute(cols, 3));
    lineGeo.setAttribute('aTaper', new THREE.BufferAttribute(alphaAttr, 1));
    lineGeo.setAttribute('aWeight', new THREE.BufferAttribute(new Float32Array(n * SEG * 2).fill(1), 1));

    const lineMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: /* glsl */ `
        attribute float aTaper;
        attribute float aWeight;
        varying vec3 vColor;
        varying float vA;
        void main() {
          vColor = color;
          vA = aTaper * aWeight;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: /* glsl */ `
        varying vec3 vColor;
        varying float vA;
        void main() {
          if (vA < 0.004) discard;
          // Kept deliberately faint: with ~600 threads, anything brighter
          // reads as a hairball. Focus (hover/filter) is what lights them up.
          gl_FragColor = vec4(vColor * (0.35 + vA * 0.9), vA * 0.2);
        }`,
      vertexColors: true,
      toneMapped: false,
    });

    // --- flowing particles: 3 per edge, offset in phase ---
    const PER = 3;
    const pc = n * PER;
    const dPos = new Float32Array(pc * 3);
    const dA = new Float32Array(pc * 9);
    const dCol = new Float32Array(pc * 3);
    const dPhase = new Float32Array(pc);
    const dW = new Float32Array(pc).fill(1);
    for (let i = 0; i < n; i++) {
      const [r, g, bl] = rgb(RELATION_COLOR[edges[i].relation.type] ?? '#888');
      for (let j = 0; j < PER; j++) {
        const idx = i * PER + j;
        dA.set(ctrl.subarray(i * 9, i * 9 + 9), idx * 9);
        dCol.set([r, g, bl], idx * 3);
        dPhase[idx] = (j / PER + ((hash(edges[i].source + j) % 100) / 100) * 0.3) % 1;
      }
    }
    const dotGeo = new THREE.BufferGeometry();
    dotGeo.setAttribute('position', new THREE.BufferAttribute(dPos, 3));
    dotGeo.setAttribute('aP0', new THREE.BufferAttribute(sub(dA, 0), 3));
    dotGeo.setAttribute('aP1', new THREE.BufferAttribute(sub(dA, 3), 3));
    dotGeo.setAttribute('aP2', new THREE.BufferAttribute(sub(dA, 6), 3));
    dotGeo.setAttribute('aColor', new THREE.BufferAttribute(dCol, 3));
    dotGeo.setAttribute('aPhase', new THREE.BufferAttribute(dPhase, 1));
    dotGeo.setAttribute('aWeight', new THREE.BufferAttribute(dW, 1));

    const dotMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      toneMapped: false,
      uniforms: { uTime: { value: 0 }, uSize: { value: 42 } },
      vertexShader: /* glsl */ `
        attribute vec3 aP0; attribute vec3 aP1; attribute vec3 aP2;
        attribute vec3 aColor; attribute float aPhase; attribute float aWeight;
        uniform float uTime; uniform float uSize;
        varying vec3 vColor; varying float vA;
        void main() {
          float t = fract(aPhase + uTime * 0.10);
          float u = 1.0 - t;
          vec3 p = u*u*aP0 + 2.0*u*t*aP1 + t*t*aP2;
          vColor = aColor;
          // bright in the middle of the run, invisible at the endpoints
          vA = aWeight * sin(t * 3.14159);
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = (uSize * aWeight) / max(-mv.z, 1.0);
        }`,
      fragmentShader: /* glsl */ `
        varying vec3 vColor; varying float vA;
        void main() {
          if (vA < 0.02) discard;
          vec2 d = gl_PointCoord - 0.5;
          float r = dot(d, d);
          if (r > 0.25) discard;
          float f = smoothstep(0.25, 0.0, r);
          gl_FragColor = vec4(vColor + f * 0.5, f * vA * 0.9);
        }`,
    });

    return { lineGeo, lineMat, dotGeo, dotMat };
  }, [edges, pos]);

  // Push per-edge weights into both geometries when the filter/focus changes.
  useEffect(() => {
    const la = lineGeo.getAttribute('aWeight') as THREE.BufferAttribute;
    const da = dotGeo.getAttribute('aWeight') as THREE.BufferAttribute;
    for (let i = 0; i < edges.length; i++) {
      const w = weights[i] ?? 1;
      for (let k = 0; k < SEG * 2; k++) la.setX(i * SEG * 2 + k, w);
      for (let j = 0; j < 3; j++) da.setX(i * 3 + j, w);
    }
    la.needsUpdate = true;
    da.needsUpdate = true;
  }, [weights, edges.length, lineGeo, dotGeo]);

  useEffect(
    () => () => {
      lineGeo.dispose();
      lineMat.dispose();
      dotGeo.dispose();
      dotMat.dispose();
    },
    [lineGeo, lineMat, dotGeo, dotMat]
  );

  useFrame((_, dt) => {
    dotMat.uniforms.uTime.value += dt;
  });

  return (
    <group>
      <lineSegments geometry={lineGeo} material={lineMat} frustumCulled={false} renderOrder={1} />
      <points geometry={dotGeo} material={dotMat} frustumCulled={false} renderOrder={2} />
    </group>
  );
}

function sub(src: Float32Array, off: number): Float32Array {
  const n = src.length / 9;
  const out = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    out[i * 3] = src[i * 9 + off];
    out[i * 3 + 1] = src[i * 9 + off + 1];
    out[i * 3 + 2] = src[i * 9 + off + 2];
  }
  return out;
}

function bezier(a: THREE.Vector3, c: THREE.Vector3, b: THREE.Vector3, t: number, out: THREE.Vector3) {
  const u = 1 - t;
  out.set(
    u * u * a.x + 2 * u * t * c.x + t * t * b.x,
    u * u * a.y + 2 * u * t * c.y + t * t * b.y,
    u * u * a.z + 2 * u * t * c.z + t * t * b.z
  );
  return out;
}

/** Fade an edge out near its endpoints so it melts into the node glow. */
function taper(t: number) {
  return Math.min(1, Math.sin(t * Math.PI) * 1.9);
}

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
