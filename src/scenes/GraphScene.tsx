import { useMemo, useState, useEffect } from 'react';
import { Billboard, Text } from '@react-three/drei';
import * as THREE from 'three';
import { useStore } from '../store';
import { characters, relations, neighborsOf } from '../data';
import { KANDAS } from '../data/types';
import { resolveLayout } from '../lib/layout';
import { BAKED_NODES, BAKED_SIGNATURE } from '../data/layout.generated';
import { FACTION_ANCHOR, FACTION_COLOR, FACTION_LABEL } from '../lib/theme';
import { GraphNodes, glowTexture } from '../components/three/GraphNodes';
import { GraphEdges } from '../components/three/GraphEdges';
import { CameraRig, type FlyTarget } from '../components/three/CameraRig';
import type { Faction } from '../data/types';

// Reads the positions baked by `npm run bake` — instant. Simulating here
// instead would block the first paint for about 2.6 seconds.
export const layout = resolveLayout(characters, relations, {
  signature: BAKED_SIGNATURE,
  nodes: BAKED_NODES,
});

export function GraphScene() {
  const hovered = useStore((s) => s.hovered);
  const setHovered = useStore((s) => s.setHovered);
  const openCharacter = useStore((s) => s.openCharacter);
  const query = useStore((s) => s.query);
  const factions = useStore((s) => s.factions);
  const species = useStore((s) => s.species);
  const relationTypes = useStore((s) => s.relationTypes);
  const kandaLimit = useStore((s) => s.kandaLimit);

  // Open on a slow establishing pull-back over the whole cosmos.
  const [fly, setFly] = useState<FlyTarget | null>({
    look: [0, 0, 0],
    eye: [-40, 190, 700],
    duration: 3.4,
  });

  const kandaIndex = kandaLimit === 'all' ? KANDAS.length : KANDAS.findIndex((k) => k.id === kandaLimit);

  /** Which nodes pass the current filters. */
  const passing = useMemo(() => {
    const q = query.trim().toLowerCase();
    const set = new Set<string>();
    for (const n of layout.nodes) {
      const c = n.character;
      if (factions.size && !factions.has(c.faction)) continue;
      if (species.size && !species.has(c.species)) continue;
      if (kandaLimit !== 'all') {
        const first = Math.min(...c.kandas.map((k) => KANDAS.findIndex((x) => x.id === k)));
        if (first > kandaIndex) continue;
      }
      if (q) {
        const hay = `${c.name} ${c.sanskrit} ${c.epithets.join(' ')} ${c.summary}`.toLowerCase();
        if (!hay.includes(q)) continue;
      }
      set.add(n.id);
    }
    return set;
  }, [query, factions, species, kandaLimit, kandaIndex]);

  /** Obsidian-style focus: hovering lifts a node and its neighbours, dims the rest. */
  const nodeWeights = useMemo(() => {
    const m = new Map<string, number>();
    const focus = hovered;
    const near = focus ? neighborsOf.get(focus) : null;
    for (const n of layout.nodes) {
      let w = passing.has(n.id) ? 1 : 0.07;
      if (focus) {
        if (n.id === focus) w = 1;
        else if (near?.has(n.id)) w = Math.max(w, 0.9);
        else w *= 0.18;
      }
      m.set(n.id, w);
    }
    return m;
  }, [passing, hovered]);

  const edgeWeights = useMemo(() => {
    const out = new Float32Array(layout.edges.length);
    for (let i = 0; i < layout.edges.length; i++) {
      const e = layout.edges[i];
      const typed = !relationTypes.size || relationTypes.has(e.relation.type);
      const ends = (nodeWeights.get(e.source) ?? 0) * (nodeWeights.get(e.target) ?? 0);
      // At rest the whole web sits low so the stars read; focus lights it up.
      let w = typed ? Math.sqrt(ends) * (hovered ? 0.3 : 0.5) : 0.03;
      if (typed && relationTypes.size) w = Math.max(w, Math.sqrt(ends) * 0.9);
      if (hovered && typed && (e.source === hovered || e.target === hovered)) w = 1;
      out[i] = w;
    }
    return out;
  }, [nodeWeights, relationTypes, hovered]);

  // Flying to a search hit: when exactly one node matches, go look at it.
  useEffect(() => {
    if (!query.trim()) return;
    const hits = [...passing];
    if (hits.length === 0 || hits.length > 4) return;
    const ns = layout.nodes.filter((n) => hits.includes(n.id));
    const c = ns.reduce((a, n) => a.add(new THREE.Vector3(n.x, n.y, n.z)), new THREE.Vector3()).divideScalar(ns.length);
    setFly({ look: [c.x, c.y, c.z], dist: hits.length === 1 ? 46 : 140, duration: 1.2 });
  }, [query, passing]);

  // Listen for fly requests from the HUD (search result clicks, legend).
  useEffect(() => {
    const h = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      const n = layout.nodes.find((x) => x.id === id);
      if (n) setFly({ look: [n.x, n.y, n.z], dist: 46, duration: 1.4 });
    };
    const f = (e: Event) => {
      const fac = (e as CustomEvent<Faction>).detail;
      const a = FACTION_ANCHOR[fac];
      setFly({ look: [a[0], a[1], a[2]], dist: 185, duration: 1.6 });
    };
    window.addEventListener('fly-to-node', h);
    window.addEventListener('fly-to-faction', f);
    return () => {
      window.removeEventListener('fly-to-node', h);
      window.removeEventListener('fly-to-faction', f);
    };
  }, []);

  return (
    <group>
      <CameraRig target={fly} minDistance={12} maxDistance={900} autoRotate={!hovered && !query} />

      <FactionHalos visible={factions} />
      <GraphEdges nodes={layout.nodes} edges={layout.edges} weights={edgeWeights} />
      <GraphNodes
        nodes={layout.nodes}
        weights={nodeWeights}
        hovered={hovered}
        onHover={setHovered}
        onSelect={openCharacter}
      />
    </group>
  );
}

/** Soft coloured nebulae marking each kingdom, with a drifting title. */
function FactionHalos({ visible }: { visible: Set<Faction> }) {
  const entries = Object.entries(FACTION_ANCHOR) as [Faction, [number, number, number]][];
  return (
    <group>
      {entries.map(([f, p]) => {
        const on = !visible.size || visible.has(f);
        return (
          <Billboard key={f} position={p}>
            <mesh>
              <circleGeometry args={[128, 48]} />
              <meshBasicMaterial
                color={FACTION_COLOR[f]}
                map={glowTexture()}
                transparent
                opacity={on ? 0.085 : 0.02}
                depthWrite={false}
                depthTest={false}
                blending={THREE.AdditiveBlending}
                toneMapped={false}
              />
            </mesh>
            <Text
              position={[0, 92, 0]}
              fontSize={11}
              color={FACTION_COLOR[f]}
              anchorX="center"
              anchorY="middle"
              letterSpacing={0.34}
              fillOpacity={on ? 0.3 : 0.08}
              material-toneMapped={false}
              material-depthWrite={false}
            >
              {FACTION_LABEL[f].toUpperCase()}
            </Text>
          </Billboard>
        );
      })}
    </group>
  );
}
