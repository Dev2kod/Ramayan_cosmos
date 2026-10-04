import { useMemo, useRef } from 'react';
import { useFrame, type ThreeEvent } from '@react-three/fiber';
import { Billboard, Text } from '@react-three/drei';
import * as THREE from 'three';
import type { StoryEvent } from '../../data/types';
import { KANDA_COLOR } from '../../lib/theme';
import { glowTexture } from './GraphNodes';

export interface HelixPoint {
  event: StoryEvent;
  pos: THREE.Vector3;
}

/**
 * The spiral sits well outside the shrine and its facet ring, so a long life
 * wraps around the character rather than through them.
 */
const RADIUS = 74;
const MAX_HEIGHT = 130;

export function helixPositions(events: StoryEvent[]): HelixPoint[] {
  const n = events.length;
  if (!n) return [];
  // Short lives get generous spacing; long ones compress so the whole spiral
  // still fits in frame, and turn more slowly so beads never stack vertically.
  const rise = n <= 1 ? 0 : Math.min(5.5, MAX_HEIGHT / (n - 1));
  const turn = Math.max(0.3, Math.min(0.9, 16 / Math.max(8, n)));
  const grow = Math.min(0.3, 22 / Math.max(1, n));
  const half = ((n - 1) * rise) / 2;

  return events.map((e, i) => {
    const a = i * turn - Math.PI / 2;
    const r = RADIUS + i * grow; // the spiral widens as a life unfolds
    return {
      event: e,
      pos: new THREE.Vector3(Math.cos(a) * r, -half + i * rise, Math.sin(a) * r),
    };
  });
}

/**
 * A character's life as a rising spiral: one glowing bead per event, coloured
 * by kanda, with a ribbon through them and causal threads arcing between.
 */
export function TimelineHelix({
  points,
  activeId,
  onSelect,
  onHover,
}: {
  points: HelixPoint[];
  activeId: string | null;
  onSelect: (id: string) => void;
  onHover: (id: string | null) => void;
}) {
  const ribbon = useMemo(() => {
    if (points.length < 2) return null;
    const curve = new THREE.CatmullRomCurve3(points.map((p) => p.pos));
    const geo = new THREE.TubeGeometry(curve, Math.max(24, points.length * 8), 0.3, 8, false);
    // colour the tube by kanda along its length
    const count = geo.attributes.position.count;
    const col = new Float32Array(count * 3);
    const c = new THREE.Color();
    for (let i = 0; i < count; i++) {
      const t = i / count;
      const idx = Math.min(points.length - 1, Math.floor(t * points.length));
      c.set(KANDA_COLOR[points[idx].event.kanda] ?? '#ffcf6b');
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    return geo;
  }, [points]);

  const activeIdx = points.findIndex((p) => p.event.id === activeId);

  const causal = useMemo(() => {
    const byId = new Map(points.map((p) => [p.event.id, p]));
    const segs: number[] = [];
    const cols: number[] = [];
    const c = new THREE.Color();
    for (const p of points) {
      for (const cause of p.event.causes) {
        const from = byId.get(cause);
        if (!from) continue;
        // arc outward so threads do not hide inside the ribbon
        const mid = from.pos.clone().add(p.pos).multiplyScalar(0.5);
        const out = new THREE.Vector3(mid.x, 0, mid.z).normalize().multiplyScalar(18);
        mid.add(out);
        const curve = new THREE.QuadraticBezierCurve3(from.pos, mid, p.pos);
        const pts = curve.getPoints(18);
        c.set(KANDA_COLOR[p.event.kanda] ?? '#ffcf6b');
        for (let i = 0; i < pts.length - 1; i++) {
          segs.push(pts[i].x, pts[i].y, pts[i].z, pts[i + 1].x, pts[i + 1].y, pts[i + 1].z);
          const f = Math.sin((i / pts.length) * Math.PI) * 0.75 + 0.1;
          cols.push(c.r * f, c.g * f, c.b * f, c.r * f, c.g * f, c.b * f);
        }
      }
    }
    if (!segs.length) return null;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(segs), 3));
    g.setAttribute('color', new THREE.BufferAttribute(new Float32Array(cols), 3));
    return g;
  }, [points]);

  return (
    <group>
      {ribbon && (
        <mesh geometry={ribbon} renderOrder={1}>
          <meshBasicMaterial
            vertexColors
            transparent
            opacity={0.5}
            toneMapped={false}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      )}
      {causal && (
        <lineSegments geometry={causal} renderOrder={1}>
          <lineBasicMaterial
            vertexColors
            transparent
            opacity={0.42}
            toneMapped={false}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </lineSegments>
      )}
      {points.map((p, i) => (
        <Bead
          key={p.event.id}
          point={p}
          index={i}
          active={activeId === p.event.id}
          /* With up to ~90 beads, showing every title at once is unreadable:
             only the neighbourhood of the current event is labelled, and
             anything else reveals its title on hover. */
          labelled={activeIdx < 0 ? points.length <= 14 : Math.abs(i - activeIdx) <= 2}
          onSelect={onSelect}
          onHover={onHover}
        />
      ))}
    </group>
  );
}

function Bead({
  point,
  index,
  active,
  labelled,
  onSelect,
  onHover,
}: {
  point: HelixPoint;
  index: number;
  active: boolean;
  labelled: boolean;
  onSelect: (id: string) => void;
  onHover: (id: string | null) => void;
}) {
  const core = useRef<THREE.Mesh>(null);
  const halo = useRef<THREE.Mesh>(null);
  const label = useRef<any>(null);
  const hov = useRef(0);
  const act = useRef(0);
  const lab = useRef(0);
  const color = KANDA_COLOR[point.event.kanda] ?? '#ffcf6b';

  useFrame((state, dt) => {
    const k = 1 - Math.pow(0.0015, dt);
    act.current += ((active ? 1 : 0) - act.current) * k;
    lab.current += ((labelled || hov.current > 0.5 ? 1 : 0) - lab.current) * k;
    const t = state.clock.elapsedTime;
    const pulse = 1 + Math.sin(t * 1.5 + index) * 0.06;
    const s = pulse * (1.5 + hov.current * 1.1 + act.current * 2.4);
    core.current?.scale.setScalar(s);
    if (halo.current) {
      halo.current.scale.setScalar(s * (4.5 + act.current * 3));
      (halo.current.material as THREE.MeshBasicMaterial).opacity = 0.18 + hov.current * 0.25 + act.current * 0.4;
    }
    if (label.current) {
      label.current.fillOpacity = lab.current * (0.4 + hov.current * 0.6 + act.current * 0.6);
      label.current.outlineOpacity = label.current.fillOpacity;
      label.current.visible = lab.current > 0.02;
    }
  });

  return (
    <group position={point.pos}>
      <mesh
        onPointerOver={(e: ThreeEvent<PointerEvent>) => {
          e.stopPropagation();
          hov.current = 1;
          onHover(point.event.id);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={(e: ThreeEvent<PointerEvent>) => {
          e.stopPropagation();
          hov.current = 0;
          onHover(null);
          document.body.style.cursor = '';
        }}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(point.event.id);
        }}
      >
        <sphereGeometry args={[4.2, 10, 8]} />
        <meshBasicMaterial visible={false} />
      </mesh>

      <mesh ref={core}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>

      <Billboard>
        <mesh ref={halo}>
          <circleGeometry args={[1, 24]} />
          <meshBasicMaterial
            color={color}
            map={glowTexture()}
            transparent
            opacity={0.2}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            toneMapped={false}
          />
        </mesh>
        <Text
          ref={label}
          position={[4.6, 0, 0]}
          fontSize={2.1}
          color="#efe8dc"
          anchorX="left"
          anchorY="middle"
          maxWidth={44}
          outlineWidth={0.1}
          outlineColor="#05060f"
          material-toneMapped={false}
          material-depthWrite={false}
        >
          {point.event.title}
        </Text>
      </Billboard>
    </group>
  );
}
