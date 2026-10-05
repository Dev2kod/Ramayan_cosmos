/**
 * Pulls Yuddha Kanda back inside its own order band.
 *
 * `order` is chronological and each kanda owns a 100-wide band (yuddha
 * 500-599, uttara 600-699). The last ten Yuddha episodes — the funeral, the
 * agni-pariksha, the flight home, the coronation — had spilled past 600 into
 * Uttara's range. Nothing collided, because Uttara happens to start at 636,
 * but the convention was broken and any Uttara event added below 636 would
 * have interleaved with the war.
 *
 * Renumbers the whole kanda evenly across 502..578 in its existing narrative
 * sequence, which leaves room on both sides and cannot collide. Safe to re-run:
 * `causes` reference ids, never orders.
 */
import { readFileSync, writeFileSync } from 'node:fs';

const FILE = 'src/data/events/late.ts';
let src = readFileSync(FILE, 'utf8');

// The tail, in narrative sequence, after `yuddha-mandodari-lament`. These are
// the ten that had escaped the band; everything before them keeps its place.
const TAIL = [
  'yuddha-funeral-and-vibhishana-crowned',
  'yuddha-sita-brought-before-rama',
  'yuddha-agni-pariksha',
  'yuddha-agni-returns-sita',
  'yuddha-dasharatha-and-brahma-appear',
  'yuddha-boons-to-the-vanaras',
  'yuddha-pushpaka-flight-home',
  'yuddha-hanuman-to-nandigrama',
  'yuddha-coronation-at-ayodhya',
  'yuddha-vanaras-dismissed',
];

/** Every yuddha event in the file, as [id, order], in source order. */
function readEvents(text) {
  const out = [];
  const re = /id: '([^']+)',[\s\S]{0,600}?order: (-?\d+)/g;
  let m;
  while ((m = re.exec(text))) out.push([m[1], Number(m[2])]);
  return out.filter(([id]) => id.startsWith('yuddha-'));
}

const found = readEvents(src);
const tailSet = new Set(TAIL);

// Sequence = everything not in the tail (by current order), then the tail in
// its canonical order. That reconstructs the true narrative line even if a
// previous run left the tail renumbered into the middle.
const head = found
  .filter(([id]) => !tailSet.has(id))
  .sort((a, b) => a[1] - b[1])
  .map(([id]) => id);
const sequence = [...head, ...TAIL.filter((id) => found.some(([f]) => f === id))];

const START = 502;
const STEP = 2;
let changed = 0;

sequence.forEach((id, i) => {
  const want = START + i * STEP;
  if (want > 599) throw new Error(`sequence overflows the yuddha band at ${id}`);
  const re = new RegExp(`(id: '${id}',[\\s\\S]{0,600}?order: )(-?\\d+)`);
  const m = src.match(re);
  if (!m) {
    console.log(`  !! not found: ${id}`);
    return;
  }
  if (Number(m[2]) === want) return;
  src = src.replace(re, `$1${want}`);
  console.log(`  ${id.padEnd(42)} ${m[2]} -> ${want}`);
  changed++;
});

if (changed) {
  writeFileSync(FILE, src);
  console.log(`\nrenumbered ${changed} of ${sequence.length} yuddha events (${START}..${START + (sequence.length - 1) * STEP})`);
} else {
  console.log('already in band — nothing to do');
}
