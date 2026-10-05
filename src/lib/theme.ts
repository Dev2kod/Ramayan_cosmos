import type { Faction, RelationType, Species, Kanda } from '../data/types';

export const FACTION_COLOR: Record<Faction, string> = {
  ayodhya: '#ffcf6b', // gold — the solar dynasty
  mithila: '#ff7fb0', // lotus — Sita, Janaka
  kishkindha: '#4fd6b0', // jade — forest, vanaras
  lanka: '#e8503a', // vermilion — rakshasas
  sages: '#ff9a3c', // saffron — ascetics
  devas: '#b07aff', // violet — the gods
  others: '#8b93b8',
};

export const FACTION_LABEL: Record<Faction, string> = {
  ayodhya: 'Ayodhya',
  mithila: 'Mithila',
  kishkindha: 'Kishkindha',
  lanka: 'Lanka',
  sages: 'Rishis',
  devas: 'Devas',
  others: 'Others',
};

/**
 * Where each faction's cluster sits in the cosmos. Loosely geographic — the
 * north-west is Ayodhya and Mithila, the forest and Kishkindha lie south, Lanka
 * is far to the south-east, and the devas sit above everything.
 */
export const FACTION_ANCHOR: Record<Faction, [number, number, number]> = {
  ayodhya: [-150, 30, 10],
  mithila: [-108, -52, -92],
  kishkindha: [18, -62, 120],
  lanka: [170, 10, -30],
  sages: [-16, 96, -112],
  devas: [14, 150, 60],
  others: [76, -110, -10],
};

export const RELATION_COLOR: Record<RelationType, string> = {
  parent: '#ffcf6b',
  sibling: '#ffd9a0',
  spouse: '#ff7fb0',
  ally: '#4fd6b0',
  enemy: '#e8503a',
  devotee: '#ff9a3c',
  guru: '#b07aff',
  servant: '#8fb0ff',
  killed: '#ff3b2f',
  cursed: '#c44dff',
  boon: '#ffe9a8',
  rescued: '#6ef0c8',
  counsel: '#9aa6d8',
};

/**
 * Every relation type, in a fixed order. The edge shader indexes a uniform
 * array by this position, so the order must stay stable.
 */
export const RELATION_TYPES: RelationType[] = [
  'parent',
  'sibling',
  'spouse',
  'ally',
  'enemy',
  'devotee',
  'guru',
  'servant',
  'killed',
  'cursed',
  'boon',
  'rescued',
  'counsel',
];

/** Plain name for a kind of bond — used in the legend and the filters. */
export const RELATION_LABEL: Record<RelationType, string> = {
  parent: 'Parent & child',
  sibling: 'Siblings',
  spouse: 'Marriage',
  ally: 'Allies',
  enemy: 'Enemies',
  devotee: 'Devotion',
  guru: 'Teaching',
  servant: 'Service',
  killed: 'Killings',
  cursed: 'Curses',
  boon: 'Boons given',
  rescued: 'Rescues',
  counsel: 'Advice',
};

/** One plain sentence explaining what each kind of bond means. */
export const RELATION_GLOSS: Record<RelationType, string> = {
  parent: 'One is the father or mother of the other.',
  sibling: 'Brothers and sisters, including half-siblings.',
  spouse: 'Husband and wife.',
  ally: 'Fought on the same side, or gave real help.',
  enemy: 'Opposed each other, in war or in feud.',
  devotee: 'One worships or is utterly loyal to the other.',
  guru: 'One taught the other — weapons, scripture or wisdom.',
  servant: 'One serves the other, as minister, charioteer or attendant.',
  killed: 'One killed the other.',
  cursed: 'One laid a curse on the other.',
  boon: 'One granted the other a boon, a weapon or a blessing.',
  rescued: 'One saved or freed the other.',
  counsel: 'One advised the other at a turning point.',
};

/**
 * Reads a relation as an English sentence: `${source} ${verbFor(type)} ${target}`.
 * The arrow form ("Rama → Ravana") is precise but tells you nothing on its own.
 */
export function verbFor(type: RelationType): string {
  switch (type) {
    case 'parent':
      return 'is the parent of';
    case 'sibling':
      return 'is a sibling of';
    case 'spouse':
      return 'is married to';
    case 'ally':
      return 'is an ally of';
    case 'enemy':
      return 'is an enemy of';
    case 'killed':
      return 'killed';
    case 'cursed':
      return 'cursed';
    case 'boon':
      return 'gave a boon to';
    case 'guru':
      return 'taught';
    case 'devotee':
      return 'is devoted to';
    case 'servant':
      return 'serves';
    case 'rescued':
      return 'rescued';
    case 'counsel':
      return 'advised';
    default:
      return 'is linked to';
  }
}

/**
 * What the *other* person is, seen from the character whose world you are
 * standing in. `out` is used when the viewed character is the relation's
 * source, `in` when they are its target.
 *
 * Getting this backwards is easy and badly misleading — if Rama killed Ravana,
 * Rama's portal inside Ravana's world must not read "slain by".
 */
export const RELATION_ROLE: Record<RelationType, { out: string; in: string }> = {
  //                 viewed character did it →         ← the other did it
  parent: { out: "{them}'s child", in: "{them}'s parent" },
  sibling: { out: 'Sibling', in: 'Sibling' },
  spouse: { out: 'Married', in: 'Married' },
  ally: { out: 'Ally', in: 'Ally' },
  enemy: { out: 'Enemy', in: 'Enemy' },
  killed: { out: 'Killed by {them}', in: 'Killed {them}' },
  cursed: { out: 'Cursed by {them}', in: 'Cursed {them}' },
  boon: { out: 'Given a boon by {them}', in: 'Gave {them} a boon' },
  guru: { out: "{them}'s student", in: "{them}'s teacher" },
  devotee: { out: 'Worshipped by {them}', in: 'Devoted to {them}' },
  servant: { out: "{them}'s master", in: 'Serves {them}' },
  rescued: { out: 'Rescued by {them}', in: 'Rescued {them}' },
  counsel: { out: 'Advised by {them}', in: 'Advised {them}' },
};

export const SPECIES_LABEL: Record<Species, string> = {
  human: 'Human',
  vanara: 'Vanara',
  bear: 'Rksha',
  rakshasa: 'Rakshasa',
  deva: 'Deva',
  rishi: 'Rishi',
  bird: 'Bird',
  gandharva: 'Gandharva',
  nature: 'Elemental',
};

/**
 * Events that happen *before* the epic opens — Ravana's boon, Hanuman's
 * childhood, Vali and Dundubhi, the curses that bind people later.
 *
 * These carry the kanda that *narrates* them, which is usually a late one:
 * Agastya tells Ravana's origins in Uttara Kanda, Jambavan tells Hanuman's in
 * Kishkindha. A life timeline runs chronologically, so colouring them by their
 * narrating book put a purple Uttara bead at the very start of Ravana's life
 * and made the whole spiral look shuffled. They get their own muted colour,
 * and the card says which book tells the story.
 */
export const PREHISTORY_COLOR = '#7b84a8';

export const KANDA_COLOR: Record<Kanda, string> = {
  bala: '#ffd98a',
  ayodhya: '#ffb05c',
  aranya: '#7fd98a',
  kishkindha: '#4fd6b0',
  sundara: '#6cc8ff',
  yuddha: '#e8503a',
  uttara: '#b07aff',
};

/** True for an episode that happens before the frame story opens. */
export const isPrehistory = (e: { order: number }) => e.order < 0;

/** The colour a timeline bead should use: era, not narrating book. */
export function eventColor(e: { kanda: Kanda; order: number }): string {
  return isPrehistory(e) ? PREHISTORY_COLOR : KANDA_COLOR[e.kanda] ?? '#ffcf6b';
}

/** #rrggbb -> [r,g,b] in 0..1 */
export function rgb(hex: string): [number, number, number] {
  const n = parseInt(hex.slice(1), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

export function withAlpha(hex: string, a: number): string {
  const [r, g, b] = rgb(hex);
  return `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a})`;
}
