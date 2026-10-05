/**
 * Data integrity check.  `npm run validate`
 *
 * Fails loudly on anything that would silently degrade the graph: unknown ids,
 * duplicate events, dangling causal links, characters with no bonds.
 */
import { ALL_IDS } from '../src/data/roster';
import { ayodhyaMithila } from '../src/data/characters/ayodhya-mithila';
import { kishkindha } from '../src/data/characters/kishkindha';
import { lanka } from '../src/data/characters/lanka';
import { sagesDevas } from '../src/data/characters/sages-devas';
import { earlyEvents } from '../src/data/events/early';
import { middleEvents } from '../src/data/events/middle';
import { lateEvents } from '../src/data/events/late';

const modules = { ayodhyaMithila, kishkindha, lanka, sagesDevas };
const chars = Object.values(modules).flatMap((m) => m.characters);
const rels = Object.values(modules).flatMap((m) => m.relations);
const events = [...earlyEvents, ...middleEvents, ...lateEvents];

const ids = new Set(chars.map((c) => c.id));
const roster = new Set(ALL_IDS);
const evIds = new Set(events.map((e) => e.id));

const problems: string[] = [];
const warn: string[] = [];

/* --- characters --- */
const seen = new Set<string>();
for (const c of chars) {
  if (seen.has(c.id)) problems.push(`duplicate character: ${c.id}`);
  seen.add(c.id);
  if (!roster.has(c.id)) problems.push(`character not in roster: ${c.id}`);
  if (!c.bio || c.bio.length < 200) warn.push(`thin bio: ${c.id} (${c.bio?.length ?? 0} chars)`);
  if (!c.wikiTitle) warn.push(`no wikiTitle: ${c.id}`);
  if (c.importance >= 3 && !c.shloka) warn.push(`no shloka: ${c.id}`);
}
for (const id of roster) if (!ids.has(id)) problems.push(`roster id missing a character: ${id}`);

/* --- relations --- */
const relSeen = new Set<string>();
for (const r of rels) {
  if (!ids.has(r.source)) problems.push(`relation source unknown: ${r.source} -> ${r.target}`);
  if (!ids.has(r.target)) problems.push(`relation target unknown: ${r.source} -> ${r.target}`);
  if (r.source === r.target) problems.push(`self relation: ${r.source}`);
  const k = `${r.source}>${r.target}:${r.type}`;
  if (relSeen.has(k)) warn.push(`duplicate relation: ${k}`);
  relSeen.add(k);
}

/* --- events --- */
const orders = new Map<number, string>();
const evSeen = new Set<string>();
for (const e of events) {
  if (evSeen.has(e.id)) problems.push(`duplicate event id: ${e.id}`);
  evSeen.add(e.id);
  if (orders.has(e.order)) warn.push(`order collision ${e.order}: ${orders.get(e.order)} / ${e.id}`);
  orders.set(e.order, e.id);
  if (!e.characterIds.length) warn.push(`event with no characters: ${e.id}`);
  for (const id of e.characterIds) if (!ids.has(id)) problems.push(`event ${e.id} references unknown character: ${id}`);
  for (const c of e.causes) {
    if (c === e.id) problems.push(`event causes itself: ${e.id}`);
    else if (!evIds.has(c)) problems.push(`event ${e.id} has dangling cause: ${c}`);
  }
}

/* --- chronology --- */
// `order` is chronological and `kanda` is where Valmiki narrates it. Those
// agree for everything except prehistory, which a later book recounts. Any
// other disagreement means a timeline will render with its colours shuffled.
const BAND: Record<string, [number, number]> = {
  bala: [0, 99],
  ayodhya: [100, 199],
  aranya: [200, 299],
  kishkindha: [300, 399],
  sundara: [400, 499],
  yuddha: [500, 599],
  uttara: [600, 699],
};
for (const e of events) {
  if (e.order < 0) continue; // prehistory, narrated out of sequence by design
  const band = BAND[e.kanda];
  if (!band) continue;
  if (e.order < band[0] || e.order > band[1]) {
    warn.push(`order ${e.order} is outside the ${e.kanda} band ${band[0]}-${band[1]}: ${e.id}`);
  }
}

// Within one character's life the kandas must not run backwards once the
// prehistory is past, or the helix reads as shuffled.
const KORDER = ['bala', 'ayodhya', 'aranya', 'kishkindha', 'sundara', 'yuddha', 'uttara'];
const timelines = new Map<string, typeof events>();
for (const e of events) for (const id of e.characterIds) {
  if (!timelines.has(id)) timelines.set(id, []);
  timelines.get(id)!.push(e);
}
for (const [id, evs] of timelines) {
  const seq = evs.filter((e) => e.order >= 0).sort((a, b) => a.order - b.order);
  let prev = -1;
  for (const e of seq) {
    const k = KORDER.indexOf(e.kanda);
    if (k < prev) {
      warn.push(`${id}'s timeline goes backwards into ${e.kanda} at ${e.id}`);
      break;
    }
    prev = k;
  }
}

/* --- connectivity --- */
const degree = new Map<string, number>(chars.map((c) => [c.id, 0]));
for (const r of rels) {
  degree.set(r.source, (degree.get(r.source) ?? 0) + 1);
  degree.set(r.target, (degree.get(r.target) ?? 0) + 1);
}
for (const [id, d] of degree) if (d === 0) warn.push(`isolated character (no bonds): ${id}`);

const inEvents = new Set(events.flatMap((e) => e.characterIds));
for (const id of ids) if (!inEvents.has(id)) warn.push(`character appears in no event: ${id}`);

/* --- report --- */
const shlokas = chars.filter((c) => c.shloka).length + events.filter((e) => e.shloka).length;
console.log(`characters ${chars.length} / roster ${roster.size}`);
console.log(`relations  ${rels.length}`);
console.log(`events     ${events.length}`);
console.log(`shlokas    ${shlokas}`);
console.log('');

if (warn.length) {
  console.log(`${warn.length} warnings:`);
  for (const w of warn) console.log('  ! ' + w);
  console.log('');
}
if (problems.length) {
  console.log(`${problems.length} ERRORS:`);
  for (const p of problems) console.log('  x ' + p);
  process.exit(1);
}
console.log('No errors.');
