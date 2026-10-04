import type { Character, Relation, RelationType, StoryEvent } from '../data/types';
import { characterById, relationsByCharacter, eventsByCharacter } from '../data';
import { RELATION_LABEL, RELATION_ROLE } from './theme';

/** One relation between two characters, read from `a`'s point of view. */
export interface BondRelation {
  relation: Relation;
  /** true when the character whose world we are standing in is the relation's source */
  outgoing: boolean;
  source: Character;
  target: Character;
  /** Short, direction-correct chip text. */
  chip: string;
}

/** Everything the epic records about a pair of characters. */
export interface Bond {
  /** The character whose world we are standing in. */
  a: Character;
  /** The character on the other end — the portal. */
  b: Character;
  /** Every relation between them, both directions, most defining first. */
  relations: BondRelation[];
  /** `relations[0]` — drives the 3D caption and the panel title. */
  primary: BondRelation;
  /** Events both of them appear in, in story order. May be empty. */
  sharedEvents: StoryEvent[];
}

/**
 * How defining each kind of bond is. When two people are linked several ways —
 * Vali both *killed* Dundubhi and was his *enemy* — the lowest rank wins the
 * headline, because "slew him" says more than "disliked him".
 */
export const RELATION_RANK: Record<RelationType, number> = {
  killed: 0,
  spouse: 1,
  parent: 2,
  sibling: 3,
  cursed: 4,
  enemy: 5,
  guru: 6,
  rescued: 7,
  boon: 8,
  devotee: 9,
  servant: 10,
  ally: 11,
  counsel: 12,
};

/**
 * What the other person is, named from where you are standing — inside
 * Ravana's world Rama's portal reads "Killed Ravana", and inside Vali's world
 * Dundubhi's reads "Killed by Vali". Naming the viewer rather than saying
 * "them" matters: on a portal showing one person and describing another,
 * a pronoun is read as whichever name is closest.
 */
export function roleLabel(br: BondRelation): string {
  const role = RELATION_ROLE[br.relation.type];
  if (!role) return RELATION_LABEL[br.relation.type] ?? br.relation.label;
  // The viewed character is whichever end of the relation is *not* `b`.
  const viewer = br.outgoing ? br.source.name : br.target.name;
  return (br.outgoing ? role.out : role.in).replace(/\{them\}/g, viewer);
}

/**
 * The short caption shown under a portal in 3D.
 *
 * Deliberately always the role, never the authored label: labels are written
 * from the relation's source outward ("Father of Meghanada"), so printing one
 * under the *target's* portrait says the opposite of what is true. The
 * authored prose is shown in the bond card instead, under an explicit
 * "X killed Y" line that fixes its direction.
 */
export function bondCaption(br: BondRelation): string {
  return roleLabel(br);
}

// Every input here is immutable after module load, so bonds can be cached
// forever. Hovering the same portal repeatedly costs nothing after the first.
const cache = new Map<string, Bond | null>();

/**
 * Everything linking two characters: all their relations in both directions,
 * plus every event they both appear in. Returns null if they are not linked.
 */
export function bondBetween(aId: string, bId: string): Bond | null {
  const key = `${aId}|${bId}`;
  if (cache.has(key)) return cache.get(key)!;

  const a = characterById.get(aId);
  const b = characterById.get(bId);
  if (!a || !b || aId === bId) {
    cache.set(key, null);
    return null;
  }

  // `relationsByCharacter` files each relation under BOTH endpoints, so this
  // one lookup already contains the incoming and outgoing sides of the pair.
  const raw = (relationsByCharacter.get(aId) ?? []).filter(
    (r) =>
      (r.source === aId && r.target === bId) || (r.source === bId && r.target === aId)
  );
  if (!raw.length) {
    cache.set(key, null);
    return null;
  }

  const relations: BondRelation[] = raw
    .map((relation) => {
      const outgoing = relation.source === aId;
      return {
        relation,
        outgoing,
        source: outgoing ? a : b,
        target: outgoing ? b : a,
        chip: '', // filled below, once the BondRelation exists
      };
    })
    .map((br) => ({ ...br, chip: roleLabel(br) }))
    .sort(
      (x, y) =>
        RELATION_RANK[x.relation.type] - RELATION_RANK[y.relation.type] ||
        Number(y.outgoing) - Number(x.outgoing)
    );

  // eventsByCharacter is built in insertion order, not story order.
  const sharedEvents = (eventsByCharacter.get(aId) ?? [])
    .filter((e) => e.characterIds.includes(bId))
    .sort((x, y) => x.order - y.order);

  const bond: Bond = { a, b, relations, primary: relations[0], sharedEvents };
  cache.set(key, bond);
  return bond;
}
