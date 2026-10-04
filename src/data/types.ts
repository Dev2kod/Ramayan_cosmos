// Shared schema for the Valmiki Ramayana knowledge graph.

export type Kanda =
  | 'bala'
  | 'ayodhya'
  | 'aranya'
  | 'kishkindha'
  | 'sundara'
  | 'yuddha'
  | 'uttara';

export const KANDAS: { id: Kanda; name: string; sanskrit: string; theme: string }[] = [
  { id: 'bala', name: 'Bala Kanda', sanskrit: 'बालकाण्ड', theme: 'Childhood, Vishwamitra, marriage to Sita' },
  { id: 'ayodhya', name: 'Ayodhya Kanda', sanskrit: 'अयोध्याकाण्ड', theme: 'Coronation thwarted, exile, death of Dasharatha' },
  { id: 'aranya', name: 'Aranya Kanda', sanskrit: 'अरण्यकाण्ड', theme: 'Forest life, Shurpanakha, abduction of Sita' },
  { id: 'kishkindha', name: 'Kishkindha Kanda', sanskrit: 'किष्किन्धाकाण्ड', theme: 'Alliance with Sugriva, slaying of Vali, the search' },
  { id: 'sundara', name: 'Sundara Kanda', sanskrit: 'सुन्दरकाण्ड', theme: "Hanuman's leap, finding Sita, burning of Lanka" },
  { id: 'yuddha', name: 'Yuddha Kanda', sanskrit: 'युद्धकाण्ड', theme: 'The bridge, the war, fall of Ravana, coronation' },
  { id: 'uttara', name: 'Uttara Kanda', sanskrit: 'उत्तरकाण्ड', theme: 'Origins of Ravana, exile of Sita, Lava-Kusha, departure' },
];

export type Faction = 'ayodhya' | 'mithila' | 'kishkindha' | 'lanka' | 'sages' | 'devas' | 'others';

export type Species =
  | 'human'
  | 'vanara'
  | 'bear'
  | 'rakshasa'
  | 'deva'
  | 'rishi'
  | 'bird'
  | 'gandharva'
  | 'nature'; // mountains, oceans, rivers personified

export type RelationType =
  | 'parent' // source is parent of target
  | 'sibling'
  | 'spouse'
  | 'ally'
  | 'enemy'
  | 'devotee' // source is devoted to target
  | 'guru' // source is teacher/preceptor of target
  | 'servant' // source serves target
  | 'killed' // source killed target
  | 'cursed' // source cursed target
  | 'boon' // source granted boon/weapon to target
  | 'rescued' // source rescued / liberated target
  | 'counsel'; // source advised target

export interface Ending {
  type: 'death' | 'ascension' | 'liberation' | 'immortal' | 'retirement' | 'unknown';
  description: string;
  killedBy?: string; // character id
}

/** A verse. `ref` is a Valmiki Ramayana citation like "2.30.30" (kanda.sarga.shloka). */
export interface Shloka {
  devanagari: string;
  transliteration: string; // IAST
  translation: string;
  ref: string;
  context: string; // one line on when/why it is spoken
}

export interface Character {
  id: string; // kebab-case, must be in ROSTER
  name: string;
  sanskrit: string; // Devanagari
  epithets: string[];
  faction: Faction;
  species: Species;
  gender: 'male' | 'female' | 'other';
  kandas: Kanda[]; // kandas where they appear
  importance: 1 | 2 | 3 | 4 | 5; // 5 = Rama/Sita/Ravana/Hanuman tier
  summary: string; // one line
  bio: string; // 2-4 paragraphs separated by \n\n
  motivations: string[];
  abilities: string[];
  accomplishments: string[];
  weapons?: string[];
  ending: Ending;
  shloka?: Shloka; // a verse from Valmiki associated with this character
  trivia?: string[]; // incl. notes on where popular retellings differ from Valmiki
  wikiTitle: string; // English Wikipedia article title used to fetch an image
}

export interface Relation {
  source: string;
  target: string;
  type: RelationType;
  label: string; // short human label, e.g. "Elder brother", "Slew in battle"
}

export interface StoryEvent {
  id: string; // kebab-case, globally unique
  title: string;
  kanda: Kanda; // where it is narrated in Valmiki
  sarga?: string; // approximate sarga reference, e.g. "1.18" or "6.108-110"
  order: number; // global chronological order, see ORDER RANGES below
  characterIds: string[]; // every character meaningfully involved
  location: string;
  description: string; // 2-5 sentences
  significance?: string; // why it matters for the story
  shloka?: Shloka; // a verse from the passage that narrates this event
  causes: string[]; // ids of events that directly lead to this one
}

/*
ORDER RANGES (chronological, not narrative):
  -1000..-1  prehistory (Ravana's boons, Vishwamitra's past, Ahalya's curse, Vali vs Dundubhi, Hanuman's childhood...)
  0..99      Bala Kanda era
  100..199   Ayodhya Kanda era
  200..299   Aranya Kanda era
  300..399   Kishkindha Kanda era
  400..499   Sundara Kanda era
  500..599   Yuddha Kanda era
  600..699   Uttara Kanda era (after coronation)
Decimals are allowed to slot events between others.
*/

export interface DataModule {
  characters: Character[];
  relations: Relation[];
  events: StoryEvent[];
}
