import { characters, relations, events, relationsByCharacter, eventsByCharacter } from '../src/data/index';
import { bondBetween } from '../src/lib/bonds';

const key = (r: any) => `${r.source}>${r.target}:${r.type}`;
const set = new Set(relations.map(key));
const recip = relations.filter((r) => set.has(`${r.target}>${r.source}:${r.type}`));
console.log('reciprocal-duplicate relations:', recip.length, recip.slice(0, 12).map(key));

const iso = characters.filter((c) => (relationsByCharacter.get(c.id) ?? []).length === 0);
console.log('isolated chars:', iso.length, iso.map((c) => c.id));

const noev = characters.filter((c) => (eventsByCharacter.get(c.id) ?? []).length === 0);
console.log('chars with no events:', noev.length, noev.map((c) => c.id).slice(0, 25));

const pairCount = new Map<string, number>();
for (const r of relations) {
  const k = [r.source, r.target].sort().join('|');
  pairCount.set(k, (pairCount.get(k) ?? 0) + 1);
}
const multi = [...pairCount.entries()].filter(([, n]) => n > 1);
console.log('pairs with >1 relation:', multi.length, multi.slice(0, 10));

let bad = 0;
for (const r of relations) {
  const ab = bondBetween(r.source, r.target);
  const ba = bondBetween(r.target, r.source);
  if (!ab || !ba) {
    bad++;
    continue;
  }
  if (ab.relations.length !== ba.relations.length) console.log('ASYM', r.source, r.target, ab.relations.length, ba.relations.length);
  if (ab.sharedEvents.length !== ba.sharedEvents.length) console.log('ASYM-EV', r.source, r.target, ab.sharedEvents.length, ba.sharedEvents.length);
  if (ab.primary.relation !== ba.primary.relation) console.log('ASYM-PRIMARY', r.source, r.target, ab.primary.relation.type, ba.primary.relation.type, ab.primary.outgoing, ba.primary.outgoing);
}
console.log('bond null count', bad);

console.log('chars with empty kandas:', characters.filter((c) => !c.kandas.length).map((c) => c.id));
const KID = new Set(['bala', 'ayodhya', 'aranya', 'kishkindha', 'sundara', 'yuddha', 'uttara']);
console.log('chars with unknown kanda:', characters.filter((c) => c.kandas.some((k) => !KID.has(k as any))).map((c) => c.id));
console.log('events with unknown kanda:', events.filter((e) => !KID.has(e.kanda as any)).map((e) => e.id));

const byOrder = new Map<number, string[]>();
for (const e of events) {
  if (!byOrder.has(e.order)) byOrder.set(e.order, []);
  byOrder.get(e.order)!.push(e.id);
}
console.log('order collisions:', [...byOrder.entries()].filter(([, v]) => v.length > 1).length);
console.log('events total', events.length, 'with causes', events.filter((e) => e.causes.length).length);

const m = characters.map((c) => [c.id, (eventsByCharacter.get(c.id) ?? []).length] as const).sort((a, b) => b[1] - a[1]);
console.log('top events per char', m.slice(0, 5), 'min', m.slice(-3));
const d = characters.map((c) => [c.id, (relationsByCharacter.get(c.id) ?? []).length] as const).sort((a, b) => b[1] - a[1]);
console.log('top degree', d.slice(0, 5));
console.log('relations:', relations.length, 'characters:', characters.length);
