import { create } from 'zustand';
import { eventsByCharacter } from './data';
import type { Faction, Kanda, RelationType, Species } from './data/types';

export type Layer = 'intro' | 'cosmos' | 'character';
export type Facet = 'who' | 'motivations' | 'abilities' | 'deeds' | 'bonds' | 'ending' | null;

interface State {
  layer: Layer;
  selected: string | null; // character id when layer === 'character'
  hovered: string | null;
  trail: string[]; // breadcrumb of visited characters

  query: string;
  factions: Set<Faction>; // empty = all
  species: Set<Species>;
  relationTypes: Set<RelationType>;
  kandaLimit: Kanda | 'all';

  facet: Facet;
  activeEvent: string | null;
  storyMode: boolean;

  /**
   * The portal the pointer is dwelling on. x/y are the client coordinates of
   * the pointerover that opened it — the card anchors there and stays put,
   * because the ring, the portals and the camera are all moving.
   */
  bondHover: { otherId: string; x: number; y: number } | null;
  /** Other-character id whose full bond panel is open; pairs with `selected`. */
  bondFocus: string | null;

  showLegend: boolean;
  showKandaDrawer: boolean;
  showCredits: boolean;

  enter: () => void;
  openCharacter: (id: string) => void;
  backToCosmos: () => void;
  setHovered: (id: string | null) => void;
  setQuery: (q: string) => void;
  toggleFaction: (f: Faction) => void;
  toggleSpecies: (s: Species) => void;
  toggleRelation: (r: RelationType) => void;
  setKandaLimit: (k: Kanda | 'all') => void;
  clearFilters: () => void;
  setFacet: (f: Facet) => void;
  setBondHover: (h: { otherId: string; x: number; y: number } | null) => void;
  setBondFocus: (id: string | null) => void;
  setActiveEvent: (id: string | null) => void;
  setStoryMode: (on: boolean) => void;
  set: (p: Partial<State>) => void;
}

function toggle<T>(s: Set<T>, v: T): Set<T> {
  const n = new Set(s);
  n.has(v) ? n.delete(v) : n.add(v);
  return n;
}

export const useStore = create<State>((set, get) => ({
  layer: 'intro',
  selected: null,
  hovered: null,
  trail: [],

  query: '',
  factions: new Set(),
  species: new Set(),
  relationTypes: new Set(),
  kandaLimit: 'all',

  facet: null,
  activeEvent: null,
  storyMode: false,
  bondHover: null,
  bondFocus: null,
  showLegend: true,
  showKandaDrawer: false,
  showCredits: false,


  enter: () => set({ layer: 'cosmos' }),

  openCharacter: (id) => {
    const { selected, trail } = get();
    const nextTrail = selected && selected !== id ? [...trail, selected].slice(-8) : trail;
    set({
      layer: 'character',
      selected: id,
      trail: nextTrail,
      facet: null,
      activeEvent: null,
      storyMode: false,
      hovered: null,
      bondHover: null,
      bondFocus: null,
    });
    if (typeof window !== 'undefined') window.location.hash = `#/c/${id}`;
  },

  backToCosmos: () => {
    set({
      layer: 'cosmos',
      selected: null,
      facet: null,
      activeEvent: null,
      storyMode: false,
      trail: [],
      bondHover: null,
      bondFocus: null,
    });
    if (typeof window !== 'undefined') window.location.hash = '#/';
  },

  setHovered: (id) => set({ hovered: id }),
  setQuery: (q) => set({ query: q }),
  toggleFaction: (f) => set({ factions: toggle(get().factions, f) }),
  toggleSpecies: (s) => set({ species: toggle(get().species, s) }),
  toggleRelation: (r) => set({ relationTypes: toggle(get().relationTypes, r) }),
  setKandaLimit: (k) => set({ kandaLimit: k }),
  clearFilters: () =>
    set({ factions: new Set(), species: new Set(), relationTypes: new Set(), kandaLimit: 'all', query: '' }),
  // There is one panel slot on the right edge, so a facet and a bond panel are
  // mutually exclusive — opening either closes the other.
  setFacet: (f) => set({ facet: f, bondFocus: f ? null : get().bondFocus }),
  setBondHover: (h) => set({ bondHover: h }),
  setBondFocus: (id) => set({ bondFocus: id, facet: id ? null : get().facet, bondHover: null }),

  setActiveEvent: (id) => set({ activeEvent: id }),
  setStoryMode: (on) => set({ storyMode: on }),
  set: (p) => set(p as any),
}));

/**
 * Move one step along a character's life timeline, wrapping at both ends.
 * Shared by the arrow keys and the Prev/Next buttons.
 */
export function stepEvent(characterId: string, delta: number) {
  const s = useStore.getState();
  const evs = (eventsByCharacter.get(characterId) ?? []).slice().sort((a, b) => a.order - b.order);
  if (!evs.length) return;
  const i = evs.findIndex((e) => e.id === s.activeEvent);
  const next = i < 0 ? (delta > 0 ? 0 : evs.length - 1) : (i + delta + evs.length) % evs.length;
  s.setStoryMode(false);
  s.setActiveEvent(evs[next].id);
}

// Handy for poking at the app from the console, and how the visual smoke test
// in scripts/shoot.mjs drives panels that live inside the WebGL canvas.
if (import.meta.env?.DEV && typeof window !== 'undefined') {
  (window as any).__ramayana = useStore;
  // The hover-intent flags live in a module singleton; expose them lazily so
  // the pointer-handoff test can see why a card stayed or went.
  import('./lib/bondHover').then((m) => {
    (window as any).__hoverDebug = m._debugHover;
  });
}
