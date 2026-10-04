import {
  forceSimulation,
  forceLink,
  forceManyBody,
  forceCollide,
  forceX,
  forceY,
  forceZ,
} from 'd3-force-3d';
import type { Character, Relation } from '../data/types';
import { FACTION_ANCHOR } from './theme';

export interface LaidOutNode {
  id: string;
  x: number;
  y: number;
  z: number;
  radius: number;
  character: Character;
}

export interface LaidOutEdge {
  source: string;
  target: string;
  relation: Relation;
}

/**
 * Identifies the inputs a baked layout was computed from, so a stale bake can
 * be detected and recomputed rather than silently drawing the wrong graph.
 */
export function layoutSignature(characters: Character[], relations: Relation[]): string {
  let h = 2166136261;
  const mix = (s: string) => {
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
  };
  mix(`${characters.length}:${relations.length}`);
  for (const c of characters) mix(`${c.id}|${c.faction}|${c.importance}`);
  for (const r of relations) mix(`${r.source}>${r.target}:${r.type}`);
  return (h >>> 0).toString(36);
}

export function nodeRadius(importance: number): number {
  // 1 -> ~1.4, 5 -> ~6.3; superlinear so the protagonists read as suns
  return 1.1 + Math.pow(importance, 1.5) * 0.46;
}

/**
 * Runs a 3-D force layout to completion synchronously (no ticking in render),
 * with each faction gently pulled toward its own anchor so the kingdoms read
 * as separate constellations.
 */
export function computeLayout(
  characters: Character[],
  relations: Relation[]
): { nodes: LaidOutNode[]; edges: LaidOutEdge[] } {
  const byId = new Map(characters.map((c) => [c.id, c]));
  const edges = relations.filter((r) => byId.has(r.source) && byId.has(r.target));

  // Deterministic seeding: d3 seeds by index via a phyllotaxis, so a stable
  // input order gives a stable layout across reloads.
  const nodes = characters.map((c, i) => {
    const anchor = FACTION_ANCHOR[c.faction];
    const spread = 34;
    // A cheap deterministic jitter so co-located nodes do not start identical.
    const h = hash(c.id);
    return {
      id: c.id,
      index: i,
      x: anchor[0] + (frac(h) - 0.5) * spread,
      y: anchor[1] + (frac(h * 1.7) - 0.5) * spread,
      z: anchor[2] + (frac(h * 2.9) - 0.5) * spread,
      character: c,
      radius: nodeRadius(c.importance),
    };
  });

  const links = edges.map((r) => ({ source: r.source, target: r.target, relation: r }));

  const sim = forceSimulation(nodes, 3)
    .numDimensions(3)
    .force(
      'link',
      forceLink(links)
        .id((d: any) => d.id)
        .distance((l: any) => {
          const a = (l.source.character ?? byId.get(l.source))!;
          const b = (l.target.character ?? byId.get(l.target))!;
          const same = a.faction === b.faction;
          const close = l.relation.type === 'spouse' || l.relation.type === 'sibling' || l.relation.type === 'parent';
          return (same ? 26 : 90) * (close ? 0.6 : 1);
        })
        .strength((l: any) => {
          const a = (l.source.character ?? byId.get(l.source))!;
          const b = (l.target.character ?? byId.get(l.target))!;
          // Cross-realm links are plentiful (Rama knows everyone); keep them
          // weak or they drag the kingdoms into one blob.
          return a.faction === b.faction ? 0.5 : 0.035;
        })
    )
    .force(
      'charge',
      forceManyBody()
        .strength((d: any) => -420 - d.character.importance * 190)
        .distanceMax(260)
    )
    .force('collide', forceCollide((d: any) => d.radius * 3.4 + 5).iterations(3))
    .force('fx', forceX((d: any) => anchorOf(d)[0]).strength(0.12))
    .force('fy', forceY((d: any) => anchorOf(d)[1]).strength(0.12))
    .force('fz', forceZ((d: any) => anchorOf(d)[2]).strength(0.12))
    .stop();

  for (let i = 0; i < 500; i++) sim.tick();

  const laid: LaidOutNode[] = nodes.map((n: any) => ({
    id: n.id,
    x: n.x,
    y: n.y,
    z: n.z,
    radius: n.radius,
    character: n.character,
  }));

  return {
    nodes: laid,
    edges: edges.map((r) => ({ source: r.source, target: r.target, relation: r })),
  };
}

/**
 * The layout the app actually draws. Uses the positions baked at build time
 * (instant) and falls back to simulating only if the data has changed since —
 * which, at ~2.6s of blocking work, should never happen in a shipped build.
 */
export function resolveLayout(
  characters: Character[],
  relations: Relation[],
  baked: { signature: string; nodes: [string, number, number, number][] }
): { nodes: LaidOutNode[]; edges: LaidOutEdge[]; fromCache: boolean } {
  const byId = new Map(characters.map((c) => [c.id, c]));
  const edges = relations.filter((r) => byId.has(r.source) && byId.has(r.target));

  if (baked.signature === layoutSignature(characters, relations)) {
    const nodes: LaidOutNode[] = [];
    for (const [id, x, y, z] of baked.nodes) {
      const character = byId.get(id);
      if (character) nodes.push({ id, x, y, z, radius: nodeRadius(character.importance), character });
    }
    if (nodes.length === characters.length) {
      return {
        nodes,
        edges: edges.map((r) => ({ source: r.source, target: r.target, relation: r })),
        fromCache: true,
      };
    }
  }

  if (import.meta.env?.DEV) {
    console.warn('[layout] baked positions are stale — simulating. Run `npm run bake`.');
  }
  return { ...computeLayout(characters, relations), fromCache: false };
}

function anchorOf(d: { character: Character }): [number, number, number] {
  return FACTION_ANCHOR[d.character.faction] ?? FACTION_ANCHOR.others;
}

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function frac(n: number): number {
  const x = Math.sin(n) * 43758.5453;
  return x - Math.floor(x);
}
