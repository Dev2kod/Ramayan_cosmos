#!/usr/bin/env node
// Audit public/images: duplicates, oversize, credits/manifest integrity, missing portraits.
// Dependency-free. Always exits 0 — this is a report, not a gate.

import { createHash } from 'node:crypto';
import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const IMG_DIR = path.join(ROOT, 'public', 'images');
const CHAR_DIR = path.join(ROOT, 'src', 'data', 'characters');
const OVERSIZE_LIMIT = 1.2 * 1024 * 1024;

const mib = (b) => `${(b / 1048576).toFixed(2)} MiB`;
const kib = (b) => (b < 1048576 ? `${(b / 1024).toFixed(0)} KiB` : mib(b));
const h1 = (s) => console.log(`\n${'='.repeat(72)}\n${s}\n${'='.repeat(72)}`);

async function readJson(file, fallback) {
  try { return JSON.parse(await readFile(file, 'utf8')); } catch { return fallback; }
}

// ---- gather -----------------------------------------------------------
const entries = await readdir(IMG_DIR, { withFileTypes: true });
const jpgs = entries.filter((e) => e.isFile() && e.name.toLowerCase().endsWith('.jpg')).map((e) => e.name);
const allFiles = entries.filter((e) => e.isFile()).map((e) => e.name);

let totalBytes = 0;
const sizes = new Map();   // id -> bytes
const hashes = new Map();  // id -> md5
for (const name of allFiles) {
  const full = path.join(IMG_DIR, name);
  const { size } = await stat(full);
  totalBytes += size;
  if (!name.toLowerCase().endsWith('.jpg')) continue;
  const id = name.slice(0, -4);
  sizes.set(id, size);
  hashes.set(id, createHash('md5').update(await readFile(full)).digest('hex'));
}

const manifest = await readJson(path.join(IMG_DIR, 'manifest.json'), []);
const credits = await readJson(path.join(IMG_DIR, 'credits.json'), {});
const manifestIds = new Set(Array.isArray(manifest) ? manifest : []);
const creditIds = new Set(Object.keys(credits));
const diskIds = new Set(sizes.keys());

// characters from TS sources (regex — no transpile needed)
const characters = new Map(); // id -> {name, importance, file}
for (const file of (await readdir(CHAR_DIR)).filter((f) => f.endsWith('.ts'))) {
  const src = await readFile(path.join(CHAR_DIR, file), 'utf8');
  const re = /\n\s{6}id:\s*'([^']+)',\s*\n\s*name:\s*'([^']*)'/g;
  for (const m of src.matchAll(re)) {
    const tail = src.slice(m.index, m.index + 4000);
    const imp = tail.match(/\n\s*importance:\s*(\d+)/);
    characters.set(m[1], { name: m[2],importance: imp ? Number(imp[1]) : null, file });
  }
}

// ---- 1. totals --------------------------------------------------------
h1('1. TOTALS — public/images');
console.log(`  files:      ${allFiles.length} (${jpgs.length} .jpg, ${allFiles.length - jpgs.length} other)`);
console.log(`  total size: ${mib(totalBytes)} (${totalBytes.toLocaleString('en-US')} bytes)`);
console.log(`  manifest:   ${manifestIds.size} ids    credits: ${creditIds.size} ids    characters: ${characters.size}`);

// ---- 2. duplicates ----------------------------------------------------
h1('2. DUPLICATES — identical image bytes shared by 2+ character ids');
const byHash = new Map();
for (const [id, hash] of hashes) {
  if (!byHash.has(hash)) byHash.set(hash, []);
  byHash.get(hash).push(id);
}
const dupGroups = [...byHash.entries()].filter(([, ids]) => ids.length > 1)
  .sort((a, b) => b[1].length - a[1].length);
const dupIdCount = dupGroups.reduce((n, [, ids]) => n + ids.length, 0);
if (!dupGroups.length) console.log('  none');
for (const [hash, ids] of dupGroups) {
  ids.sort();
  console.log(`  ${hash}  ${kib(sizes.get(ids[0])).padStart(9)}  x${ids.length}`);
  console.log(`      ${ids.join(', ')}`);
}
console.log(`  -> ${dupGroups.length} duplicate group(s) covering ${dupIdCount} ids ` +
  `(${dupIdCount - dupGroups.length} wrong portraits)`);

// ---- 3. oversize ------------------------------------------------------
h1(`3. OVERSIZE — files larger than ${mib(OVERSIZE_LIMIT)}`);
const oversize = [...sizes.entries()].filter(([, s]) => s > OVERSIZE_LIMIT).sort((a, b) => b[1] - a[1]);
if (!oversize.length) console.log('  none');
for (const [id, s] of oversize) console.log(`  ${mib(s).padStart(10)}  ${id}.jpg`);
console.log(`  -> ${oversize.length} file(s), ${mib(oversize.reduce((n, [, s]) => n + s, 0))} total`);

// ---- 4. uncredited ----------------------------------------------------
h1('4. UNCREDITED — has an image / manifest entry but no credits.json entry');
const needCredit = [...new Set([...manifestIds, ...diskIds])].filter((id) => !creditIds.has(id)).sort();
if (!needCredit.length) console.log('  none');
for (const id of needCredit) {
  const where = [diskIds.has(id) ? 'on disk' : null, manifestIds.has(id) ? 'in manifest' : null].filter(Boolean).join(' + ');
  console.log(`  ${id.padEnd(22)} (${where})`);
}
console.log(`  -> ${needCredit.length}`);

// ---- 5. orphans -------------------------------------------------------
h1('5. ORPHANS — references with no backing file');
const creditOrphans = [...creditIds].filter((id) => !diskIds.has(id)).sort();
const manifestOrphans = [...manifestIds].filter((id) => !diskIds.has(id)).sort();
const unlisted = [...diskIds].filter((id) => !manifestIds.has(id)).sort();
console.log(`  credits.json without a .jpg (${creditOrphans.length}): ${creditOrphans.join(', ') || 'none'}`);
console.log(`  manifest.json without a .jpg (${manifestOrphans.length}): ${manifestOrphans.join(', ') || 'none'}`);
console.log(`  (fyi) .jpg on disk not in manifest (${unlisted.length}): ${unlisted.join(', ') || 'none'}`);
const orphanTotal = creditOrphans.length + manifestOrphans.length;
console.log(`  -> ${orphanTotal}`);

// ---- 6. missing -------------------------------------------------------
h1('6. MISSING — characters with no portrait at all');
const missing = [...characters.entries()].filter(([id]) => !diskIds.has(id))
  .sort((a, b) => (b[1].importance ?? 0) - (a[1].importance ?? 0) || a[0].localeCompare(b[0]));
if (!missing.length) console.log('  none');
for (const [id, c] of missing) {
  console.log(`  imp ${String(c.importance ?? '?').padStart(2)}  ${id.padEnd(22)} ${c.name}`);
}
console.log(`  -> ${missing.length} of ${characters.size} characters have no image ` +
  `(${characters.size - missing.length} covered)`);

// ---- 7. summary -------------------------------------------------------
const fails = [
  dupGroups.length && `duplicates=${dupGroups.length} (${dupIdCount} ids)`,
  oversize.length && `oversize=${oversize.length}`,
  needCredit.length && `uncredited=${needCredit.length}`,
  orphanTotal && `orphans=${orphanTotal}`,
].filter(Boolean);
console.log(`\n${'='.repeat(72)}`);
console.log(fails.length
  ? `FAIL — ${fails.join(', ')}; missing=${missing.length}, total=${mib(totalBytes)}`
  : `PASS — 0 duplicates, 0 oversize, 0 uncredited, 0 orphans; missing=${missing.length}, total=${mib(totalBytes)}`);
console.log('='.repeat(72));
