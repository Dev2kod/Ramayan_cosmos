import { ayodhyaMithila } from '../src/data/characters/ayodhya-mithila';
import { kishkindha } from '../src/data/characters/kishkindha';
import { lanka } from '../src/data/characters/lanka';
import { sagesDevas } from '../src/data/characters/sages-devas';
import { earlyEvents } from '../src/data/events/early';
import { middleEvents } from '../src/data/events/middle';
import { lateEvents } from '../src/data/events/late';

const mods = [
  ['A', ayodhyaMithila],
  ['B', kishkindha],
  ['C', lanka],
  ['D', sagesDevas],
] as const;
for (const [k, m] of mods)
  for (const c of m.characters)
    if (c.shloka) console.log(`CHAR ${k} ${c.id} | ${c.shloka.ref} | ${c.shloka.devanagari.replace(/\n/g, ' / ')}`);
const evm = [
  ['early', earlyEvents],
  ['mid', middleEvents],
  ['late', lateEvents],
] as const;
for (const [k, evs] of evm)
  for (const e of evs)
    if (e.shloka) console.log(`EVT ${k} ${e.id} | ${e.shloka.ref} | ${e.shloka.devanagari.replace(/\n/g, ' / ')}`);
