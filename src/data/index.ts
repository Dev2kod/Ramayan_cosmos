import type { Character, Relation, StoryEvent, Kanda, DataModule } from './types';
import { KANDAS } from './types';
import { ayodhyaMithila } from './characters/ayodhya-mithila';
import { kishkindha } from './characters/kishkindha';
import { lanka } from './characters/lanka';
import { sagesDevas } from './characters/sages-devas';
import { earlyEvents } from './events/early';
import { middleEvents } from './events/middle';
import { lateEvents } from './events/late';

const MODULES: DataModule[] = [ayodhyaMithila, kishkindha, lanka, sagesDevas];

/* ---------------- assembly ---------------- */

const charMap = new Map<string, Character>();
for (const m of MODULES) for (const c of m.characters) if (!charMap.has(c.id)) charMap.set(c.id, c);

export const characters: Character[] = [...charMap.values()].sort(
  (a, b) => b.importance - a.importance || a.name.localeCompare(b.name)
);
export const characterById = charMap;

const relSeen = new Set<string>();
export const relations: Relation[] = MODULES.flatMap((m) => m.relations).filter((r) => {
  if (!charMap.has(r.source) || !charMap.has(r.target) || r.source === r.target) return false;
  const k = `${r.source}>${r.target}:${r.type}`;
  if (relSeen.has(k)) return false;
  relSeen.add(k);
  return true;
});

const evSeen = new Set<string>();
export const events: StoryEvent[] = [...earlyEvents, ...middleEvents, ...lateEvents]
  .filter((e) => (evSeen.has(e.id) ? false : (evSeen.add(e.id), true)))
  .map((e) => ({ ...e, characterIds: e.characterIds.filter((id) => charMap.has(id)) }))
  .sort((a, b) => a.order - b.order);

export const eventById = new Map(events.map((e) => [e.id, e]));

// Drop causal links to events that did not survive assembly.
for (const e of events) e.causes = e.causes.filter((c) => eventById.has(c) && c !== e.id);

/* ---------------- derived indexes ---------------- */

export const eventsByCharacter = new Map<string, StoryEvent[]>();
for (const c of characters) eventsByCharacter.set(c.id, []);
for (const e of events) for (const id of e.characterIds) eventsByCharacter.get(id)?.push(e);

export const relationsByCharacter = new Map<string, Relation[]>();
for (const c of characters) relationsByCharacter.set(c.id, []);
for (const r of relations) {
  relationsByCharacter.get(r.source)?.push(r);
  relationsByCharacter.get(r.target)?.push(r);
}

export const neighborsOf = new Map<string, Set<string>>();
for (const c of characters) neighborsOf.set(c.id, new Set());
for (const r of relations) {
  neighborsOf.get(r.source)!.add(r.target);
  neighborsOf.get(r.target)!.add(r.source);
}

export const eventsByKanda = new Map<Kanda, StoryEvent[]>();
for (const k of KANDAS) eventsByKanda.set(k.id, []);
for (const e of events) eventsByKanda.get(e.kanda)?.push(e);

export const degreeOf = new Map<string, number>(
  characters.map((c) => [c.id, neighborsOf.get(c.id)!.size])
);

export { KANDAS };
export type { Character, Relation, StoryEvent, Kanda };

/* ---------------- integrity report (dev aid) ---------------- */

export function integrityReport() {
  const danglingRel = MODULES.flatMap((m) => m.relations).filter(
    (r) => !charMap.has(r.source) || !charMap.has(r.target)
  );
  const orphanChars = characters.filter((c) => (eventsByCharacter.get(c.id)?.length ?? 0) === 0);
  const isolated = characters.filter((c) => neighborsOf.get(c.id)!.size === 0);
  return {
    characters: characters.length,
    relations: relations.length,
    events: events.length,
    shlokas: characters.filter((c) => c.shloka).length + events.filter((e) => e.shloka).length,
    danglingRelations: danglingRel.map((r) => `${r.source}->${r.target}`),
    charactersWithNoEvents: orphanChars.map((c) => c.id),
    isolatedCharacters: isolated.map((c) => c.id),
  };
}
