#!/usr/bin/env node
// Portrait fetcher for public/images.
//
//   node scripts/fetch-images.mjs [--force] [--only=id1,id2] [--dedupe-only]
//                                 [--delay=700] [--dry-run] [--verbose]
//
// Three invariants this script exists to keep:
//
//   1. ONE IMAGE PER PICTURE.  Every file on disk is md5'd at startup into a
//      hash -> id registry.  Where several characters share identical bytes we
//      keep exactly one and delete the rest (they fall back to the app's
//      generated sigil, which is strictly better than wearing someone else's
//      face).  The registry is carried through the whole run, so a freshly
//      downloaded image whose bytes are already claimed is rejected and the
//      fetcher moves on to its next candidate.
//
//   2. SIZE DISCIPLINE.  Originals are never downloaded.  Every provider is
//      asked for an explicit render width, stepping 1000 -> 700 -> 500 px on
//      overshoot, and anything still above MAX_BYTES is dropped.
//
//   3. ATTRIBUTION OR NOTHING.  commit() is the only way bytes reach the disk,
//      and it writes the file, the credit and the hash claim together or does
//      nothing at all.  manifest.json ends up as exactly the ids that have both
//      a real file and a credit.
//
// Sources are tried in order: Wikimedia Commons (search, then category for the
// major figures), the Met, then Cleveland.  Characters with no acceptable
// candidate are simply left out — the sigil fallback handles them.

import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'public', 'images');
const CHAR_DIR = path.join(ROOT, 'src', 'data', 'characters');
const MANIFEST = path.join(OUT, 'manifest.json');
const CREDITS = path.join(OUT, 'credits.json');

// ---------------------------------------------------------------- CLI ----
const argv = process.argv.slice(2);
const flag = (name) => argv.includes(`--${name}`);
const opt = (name) => argv.find((a) => a.startsWith(`--${name}=`))?.slice(name.length + 3);

const FORCE = flag('force');
const DEDUPE_ONLY = flag('dedupe-only');
const DRY_RUN = flag('dry-run');
const VERBOSE = flag('verbose');
const DELAY = Number.isFinite(Number(opt('delay'))) && opt('delay') !== undefined
  ? Math.max(0, Number(opt('delay')))
  : 700;
const ONLY = (opt('only') ?? '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

const MIN_BYTES = 2500;
const MAX_BYTES = Math.round(1.2 * 1024 * 1024);
const WIDTH_STEPS = [1000, 700, 500];
const MIN_PIXELS = 400; // reject thumbnails / placeholders / sprite sheets

// Wikimedia 429s anonymous clients instantly; a descriptive UA with contact
// info is what their rate limiter wants, on API calls *and* image downloads.
const UA =
  'RamayanaCosmosBot/1.0 (educational Ramayana knowledge-graph; +https://github.com/; contact: ramayan-atlas@example.org) node-fetch';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const kb = (n) => `${(n / 1024).toFixed(0)}kB`;
const mib = (n) => `${(n / 1048576).toFixed(2)} MiB`;
const md5 = (buf) => createHash('md5').update(buf).digest('hex');

// --------------------------------------------------------- HTTP gateway ----
// One throttled, retrying gateway for every outbound request.  Wikimedia gets
// the full politeness delay; the museum APIs are happy with a short stagger.
const HOST_DELAY = [
  [/wikimedia\.org|wikipedia\.org/i, () => DELAY],
  [/metmuseum\.org/i, () => 150],
  [/clevelandart\.org/i, () => 150],
];
const lastCall = new Map();

function delayFor(url) {
  for (const [re, ms] of HOST_DELAY) if (re.test(url)) return ms();
  return 300;
}

async function http(url, { json = false, tries = 4 } = {}) {
  const host = new URL(url).host;
  for (let attempt = 0; attempt < tries; attempt++) {
    const gap = delayFor(url);
    const wait = Math.max(0, (lastCall.get(host) ?? 0) + gap - Date.now());
    if (wait) await sleep(wait);
    lastCall.set(host, Date.now());

    let res;
    try {
      res = await fetch(url, {
        headers: {
          'User-Agent': UA,
          'Api-User-Agent': UA,
          Accept: json ? 'application/json' : 'image/*,*/*',
          'Accept-Language': 'en',
        },
      });
    } catch (e) {
      if (attempt === tries - 1) throw e;
      await sleep(1200 * (attempt + 1));
      continue;
    }

    if (res.status === 429 || res.status >= 500) {
      const retryAfter = Number(res.headers.get('retry-after')) || 0;
      const backoff = retryAfter ? retryAfter * 1000 : 1500 * 2 ** attempt;
      if (attempt === tries - 1) throw new Error(`${res.status} after ${tries} tries`);
      await sleep(backoff);
      continue;
    }
    if (!res.ok) throw new Error(String(res.status));
    if (json) return res.json();
    return {
      buf: Buffer.from(await res.arrayBuffer()),
      type: (res.headers.get('content-type') ?? '').toLowerCase(),
    };
  }
  throw new Error('unreachable');
}

const jget = (url) => http(url, { json: true });

// ------------------------------------------------------------- roster ----
/** { id, name, wikiTitle, importance } straight out of the TS sources. */
async function readRoster() {
  const files = (await fs.readdir(CHAR_DIR)).filter((f) => f.endsWith('.ts')).sort();
  const out = [];
  const seen = new Set();
  for (const f of files) {
    const src = await fs.readFile(path.join(CHAR_DIR, f), 'utf8');
    // Character objects open at four-space indentation inside `characters: [`.
    // (If the data files are ever reformatted, this is the thing to update.)
    for (const block of src.split(/\n {4}\{/)) {
      const id = block.match(/^\s*id:\s*'([^']+)'/m)?.[1];
      const name = block.match(/^\s*name:\s*'([^']*)'/m)?.[1];
      if (!id || !name || seen.has(id)) continue;
      seen.add(id);
      out.push({
        id,
        name,
        wikiTitle: block.match(/^\s*wikiTitle:\s*'([^']*)'/m)?.[1] || name,
        importance: Number(block.match(/^\s*importance:\s*(\d+)/m)?.[1] ?? 1),
      });
    }
  }
  return markWikiOwnership(out);
}

/**
 * Flag each character's wikiTitle as owned or borrowed.  A title is borrowed
 * when two characters share it ('Vanara' for three different monkeys) or when
 * it is another character's own name ('Ravana' on the mahaparshva entry).
 * Borrowed titles are the root cause of the duplicate-portrait bug, so they are
 * excluded from both search terms and the relevance gate.
 */
function markWikiOwnership(list) {
  const names = new Set(list.map((c) => fold(c.name)));
  const titleCount = new Map();
  for (const c of list) {
    const w = fold(c.wikiTitle);
    titleCount.set(w, (titleCount.get(w) ?? 0) + 1);
  }
  for (const c of list) {
    const w = fold(c.wikiTitle);
    const n = fold(c.name);
    c.ownWiki = !!w && (w === n || (titleCount.get(w) === 1 && !names.has(w)));
  }
  return list;
}

// ------------------------------------------------------ text utilities ----
const stripTags = (s) =>
  String(s ?? '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;|&#\d+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();

/** Diacritic-insensitive, punctuation-free fold: "Rāvaṇa" -> "ravana". */
const fold = (s) =>
  String(s ?? '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

/** Noise words we never treat as an identity match. */
const STOP = new Set([
  'ramayana',
  'ramayan',
  'the',
  'of',
  'and',
  'ii',
  'iii',
  'list',
  'characters',
  'character',
  'in',
  'hindu',
  'hinduism',
  'god',
  'goddess',
  'king',
  'sage',
  'rishi',
  'vanara',
  'rakshasa',
  'asura',
  'deva',
  'epic',
]);

/**
 * Distinctive tokens that prove a candidate really depicts this character.
 *
 * wikiTitle is only trusted when the character actually *owns* that article.
 * Several entries borrow someone else's title — `mahaparshva` is filed under
 * 'Ravana', `nikumbha` under 'Kumbhakarna', three vanaras under 'Vanara' — and
 * that is precisely how ten characters ended up wearing another's portrait.  A
 * borrowed title contributes neither search terms nor identity evidence.
 */
function identityTokens(ch) {
  const toks = new Set();
  const sources = ch.ownWiki ? [ch.name, ch.wikiTitle] : [ch.name];
  for (const src of sources) {
    for (const t of fold(src).split(' ')) {
      if (t.length >= 4 && !STOP.has(t)) toks.add(t);
    }
  }
  if (!toks.size) {
    // Three-letter names (Aja) would otherwise have no evidence at all and be
    // rejected forever.  Keep them, but they match whole words only (below).
    for (const t of fold(ch.name).split(' ')) if (t.length >= 3 && !STOP.has(t)) toks.add(t);
  }
  return [...toks];
}

/**
 * Does any identity token appear in `hay` (already folded)?
 *
 * Short tokens must match a whole word: 'rama' must not be satisfied by
 * "ramayana", 'aja' must not be satisfied by "maharaja", 'sita' must not be
 * satisfied by "sitaharan".  Longer, genuinely distinctive tokens may match at
 * a word start, so 'ravana' still catches "Ravanas" and "Rāvaṇa's".
 */
function hits(tokens, hay) {
  const padded = ` ${hay} `;
  return tokens.some((t) =>
    t.length >= 6 ? padded.includes(` ${t}`) : padded.includes(` ${t} `) || padded.includes(` ${t}s `)
  );
}

const BAD =
  /(logo|icon|commons|wikidata|\bedit\b|disambig|question|\bmap\b|flag|symbol|ambox|stub|arrow|crystal|folder|nuvola|p_?vip|replace_this|coat_of_arms|barnstar|signature|stamp|banner|qr_?code)/i;
const BAD_EXT = /\.(svg|djvu|pdf|gif|webm|ogv|ogg|mid|xcf|webp)$/i;
const ART_WORDS =
  /(paint|painting|miniature|mural|folio|manuscript|illustration|drawing|sculpture|statue|relief|fresco|temple|idol|carving|lithograph|engraving|watercolou?r|art)/i;

const FREE_LICENSE = /^(pd|cc0|cc-by(-sa)?(-[\d.]+)?|public domain|no restrictions|attribution)/i;

// ------------------------------------------------------------ registry ----
// The correctness core: hash -> id (who owns these exact bytes) and id -> hash.
const claimedBy = new Map();
const hashOfId = new Map();
const sizeOfId = new Map();
// Second line of defence.  Content hashing only catches byte-identical files,
// so the *same* artwork fetched at two different render widths would slip
// through as two "unique" images.  Claiming the source page as well makes that
// impossible: one Commons File: page (or museum object page) belongs to exactly
// one character.
const claimedPage = new Map();

/** Comparable form of a source page URL: no scheme, no query, no trailing slash. */
const normPage = (u) =>
  String(u ?? '')
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/[?#].*$/, '')
    .replace(/\/+$/, '');

let credits = {};
let manifest = [];

async function readJson(file, fallback) {
  try {
    return JSON.parse(await fs.readFile(file, 'utf8'));
  } catch {
    return fallback;
  }
}

async function scanDisk() {
  await fs.mkdir(OUT, { recursive: true });
  const files = (await fs.readdir(OUT)).filter((f) => f.toLowerCase().endsWith('.jpg'));
  for (const f of files.sort()) {
    const full = path.join(OUT, f);
    const buf = await fs.readFile(full);
    const id = f.slice(0, -4);
    const hash = md5(buf);
    hashOfId.set(id, hash);
    sizeOfId.set(id, buf.length);
    if (!claimedBy.has(hash)) claimedBy.set(hash, id);
    const p = normPage(credits[id]?.page);
    if (p && !claimedPage.has(p)) claimedPage.set(p, id);
  }
}

function groupsByHash() {
  const byHash = new Map();
  for (const [id, hash] of hashOfId) {
    if (!byHash.has(hash)) byHash.set(hash, []);
    byHash.get(hash).push(id);
  }
  return byHash;
}

/**
 * Which of several ids sharing one picture actually owns it?
 *  +4  the credit names the character itself (its own name appears in the
 *      credited title / page)            -> "Kesari (Ramayana)" for `kesari`
 *  +2  the credit matches a wikiTitle this character actually owns
 *
 * A borrowed wikiTitle scores nothing: 'Vanara' shared by three monkeys only
 * proves the picture is generic, and 'Ravana' on the mahaparshva entry is the
 * very mistake we are undoing.  Ties, and groups where nobody scores, fall
 * back to alphabetical order.
 */
function pickKeeper(ids, roster) {
  const scored = ids
    .map((id) => {
      const ch = roster.get(id);
      const credit = credits[id];
      const hay = fold(`${credit?.title ?? ''} ${credit?.page ?? ''} ${credit?.source ?? ''}`);
      let score = 0;
      if (ch && credit) {
        const name = fold(ch.name);
        const wiki = fold(ch.wikiTitle);
        if (name && hits([name], hay)) score += 4;
        if (ch.ownWiki && wiki && wiki !== name && hits([wiki], hay)) score += 2;
      }
      return { id, score };
    })
    .sort((a, b) => b.score - a.score || a.id.localeCompare(b.id));
  return scored[0].id;
}

/** Step 1: one picture, one character.  Returns a report of what went. */
async function dedupe(roster) {
  const removed = [];
  const kept = [];
  for (const [hash, ids] of groupsByHash()) {
    if (ids.length < 2) continue;
    ids.sort();
    const keeper = pickKeeper(ids, roster);
    kept.push({ hash, keeper, size: sizeOfId.get(keeper) ?? 0, group: ids });
    for (const id of ids) {
      if (id === keeper) continue;
      if (!DRY_RUN) await fs.rm(path.join(OUT, `${id}.jpg`), { force: true });
      hashOfId.delete(id);
      sizeOfId.delete(id);
      delete credits[id];
      removed.push({ id, keeper, hash });
    }
    claimedBy.set(hash, keeper);
  }
  return { removed, kept };
}

// ------------------------------------------------------------- commit ----
/**
 * The single door through which bytes reach public/images.  Writes the file,
 * the credit and the hash claim together, or changes nothing.
 */
async function commit(id, buf, credit) {
  if (!Buffer.isBuffer(buf) || buf.length < MIN_BYTES) return { ok: false, why: 'too small' };
  if (buf.length > MAX_BYTES) return { ok: false, why: `too big (${kb(buf.length)})` };
  if (!credit?.source || !credit?.page || !credit?.title || !credit?.provider) {
    return { ok: false, why: 'incomplete attribution' };
  }
  const hash = md5(buf);
  const owner = claimedBy.get(hash);
  if (owner && owner !== id) return { ok: false, why: `duplicate bytes of ${owner}` };

  const page = normPage(credit.page);
  const pageOwner = page ? claimedPage.get(page) : undefined;
  if (pageOwner && pageOwner !== id) return { ok: false, why: `same artwork as ${pageOwner}` };

  if (!DRY_RUN) await fs.writeFile(path.join(OUT, `${id}.jpg`), buf);

  const prev = hashOfId.get(id);
  if (prev && prev !== hash && claimedBy.get(prev) === id) claimedBy.delete(prev);
  const prevPage = normPage(credits[id]?.page);
  if (prevPage && prevPage !== page && claimedPage.get(prevPage) === id) claimedPage.delete(prevPage);
  claimedBy.set(hash, id);
  if (page) claimedPage.set(page, id);
  hashOfId.set(id, hash);
  sizeOfId.set(id, buf.length);
  credits[id] = {
    source: credit.source,
    page: credit.page,
    title: credit.title,
    artist: tidyArtist(credit.artist),
    license: credit.license || 'Unknown',
    provider: credit.provider,
  };
  if (!DRY_RUN) await persist();
  return { ok: true, bytes: buf.length };
}

async function persist() {
  manifest = [...hashOfId.keys()].filter((id) => credits[id]).sort();
  await fs.writeFile(CREDITS, `${JSON.stringify(sortKeys(credits), null, 2)}\n`);
  await fs.writeFile(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`);
}

const sortKeys = (o) =>
  Object.fromEntries(Object.entries(o).sort(([a], [b]) => a.localeCompare(b)));

/**
 * Commons `Artist` fields are often a whole licence essay ("This Photo was
 * taken by ... please contact me before commercial use ...").  The Sources
 * panel wants a name, so keep the first sentence and cap the length.
 */
function tidyArtist(raw) {
  let s = stripTags(raw).replace(/\s+/g, ' ').trim();
  if (!s) return 'Unknown artist';
  s = s.replace(/^(photo|image|scan)(graph)?\s*(taken\s*)?by:?\s*/i, '');
  s = s.replace(/^this photo was taken by\s*/i, '');
  const stop = s.search(/[.!?](\s|$)/);
  if (stop > 8) s = s.slice(0, stop);
  if (s.length > 120) s = `${s.slice(0, 117).replace(/\s+\S*$/, '')}…`;
  return s.trim() || 'Unknown artist';
}

/** Re-derive page claims from the credits that actually survive. */
function rebuildPageClaims() {
  claimedPage.clear();
  for (const id of [...hashOfId.keys()].sort()) {
    const p = normPage(credits[id]?.page);
    if (p && !claimedPage.has(p)) claimedPage.set(p, id);
  }
}

// ------------------------------------------------- image byte sniffing ----
function imageFormat(buf) {
  if (buf.length < 12) return null;
  if (buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return 'jpeg';
  if (buf.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])))
    return 'png';
  return null;
}

// =====================================================================
//  Source adapters.  Each returns CANDIDATES, best first:
//    { url, page, title, artist, license, provider, width, height,
//      score, renderAt(width) -> url|null }
// =====================================================================

const COMMONS_API = 'https://commons.wikimedia.org/w/api.php';

/** Ask Commons for a specific render width of a known File: page. */
async function commonsRender(fileTitle, width) {
  const url =
    `${COMMONS_API}?action=query&format=json&prop=imageinfo&iiprop=url|size|mime` +
    `&iiurlwidth=${width}&titles=${encodeURIComponent(fileTitle)}`;
  const data = await jget(url);
  const page = Object.values(data?.query?.pages ?? {})[0];
  const info = page?.imageinfo?.[0];
  // Never hand-build a /thumb/ path — Commons 400s on those.  thumburl only.
  return info?.thumburl ?? null;
}

function commonsCandidate(page, ch, { bonus = 0 } = {}) {
  const info = page?.imageinfo?.[0];
  if (!info) return null;
  const title = String(page.title ?? '');
  if (BAD.test(title) || BAD_EXT.test(title)) return null;
  if ((info.width ?? 0) < MIN_PIXELS || (info.height ?? 0) < MIN_PIXELS) return null;
  if (/^image\/svg/i.test(info.mime ?? '')) return null;

  const meta = info.extmetadata ?? {};
  const val = (k) => stripTags(meta[k]?.value);
  const objectName = val('ObjectName') || title.replace(/^File:/, '').replace(/\.\w+$/, '');
  const description = val('ImageDescription');
  const categories = val('Categories');
  const licenseShort = val('LicenseShortName');
  const licenseCode = (meta.License?.value ?? '').toString();
  const artist = val('Artist') || val('Credit') || '';

  const hay = fold(`${title} ${objectName} ${description} ${categories}`);
  const titleHay = fold(`${title} ${objectName}`);
  const tokens = identityTokens(ch);
  const hitTitle = hits(tokens, titleHay);
  const hitAny = hits(tokens, hay);
  // Relevance gate: a bare-name search happily returns a Sumatran mosque.
  if (!hitAny) return null;

  let score = bonus;
  if (hitTitle) score += 6;
  if (/ramayan|\brama\b|hindu|epic/.test(hay)) score += 3;
  if (FREE_LICENSE.test(licenseCode) || FREE_LICENSE.test(licenseShort)) score += 3;
  if ((info.width ?? 0) >= 800) score += 1;
  if (ART_WORDS.test(`${title} ${description}`)) score += 2;
  if (/\.(tiff?|png)$/i.test(title)) score -= 1; // still fine, just prefer jpeg
  if (/book|scan|page \d|plate \d|cover/i.test(`${title} ${description}`)) score -= 2;

  return {
    provider: 'wikimedia',
    url: info.thumburl ?? info.url,
    width: info.width ?? 0,
    height: info.height ?? 0,
    page: info.descriptionurl ?? `https://commons.wikimedia.org/wiki/${encodeURIComponent(title)}`,
    title: objectName || title,
    artist: artist || 'Unknown artist',
    license: licenseShort || licenseCode || 'see source',
    score,
    renderAt: (w) => commonsRender(title, w),
  };
}

/** A. Commons full-text search — the workhorse for the long tail. */
async function fromCommonsSearch(ch, term, bonus = 0) {
  const url =
    `${COMMONS_API}?action=query&format=json&generator=search` +
    `&gsrsearch=${encodeURIComponent(term)}&gsrnamespace=6&gsrlimit=20` +
    `&prop=imageinfo&iiprop=url|size|extmetadata|mime&iiurlwidth=${WIDTH_STEPS[0]}`;
  let data;
  try {
    data = await jget(url);
  } catch (e) {
    if (VERBOSE) console.log(`       commons search "${term}" failed: ${e.message}`);
    return [];
  }
  // pages is an OBJECT keyed by pageid, not an array.
  const pages = Object.values(data?.query?.pages ?? {});
  return pages.map((p) => commonsCandidate(p, ch, { bonus })).filter(Boolean);
}

/**
 * B. Commons category — a second pass for the major figures only.  Category
 * names are exact-match and often carry IAST diacritics (Category:Rāvaṇa), so
 * they are resolved by search rather than hardcoded.
 */
async function fromCommonsCategory(ch) {
  let cats = [];
  try {
    const found = await jget(
      `${COMMONS_API}?action=query&format=json&list=search&srnamespace=14&srlimit=3` +
        `&srsearch=${encodeURIComponent(ch.name)}`
    );
    cats = (found?.query?.search ?? []).map((s) => s.title).filter(Boolean);
  } catch {
    return [];
  }
  const out = [];
  for (const cat of cats.slice(0, 2)) {
    if (!hits(identityTokens(ch), fold(cat))) continue;
    try {
      const data = await jget(
        `${COMMONS_API}?action=query&format=json&generator=categorymembers` +
          `&gcmtitle=${encodeURIComponent(cat)}&gcmtype=file&gcmlimit=20` +
          `&prop=imageinfo&iiprop=url|size|extmetadata|mime&iiurlwidth=${WIDTH_STEPS[0]}`
      );
      for (const p of Object.values(data?.query?.pages ?? {})) {
        // Category membership is itself evidence, so give these a head start.
        const c = commonsCandidate(p, ch, { bonus: 4 });
        if (c) out.push(c);
      }
    } catch {
      /* category may not exist; search already covered us */
    }
  }
  return out;
}

/** C. The Met.  v1.1 search (v1 was retired 2026-10-01), v1 objects. */
async function fromMet(ch, term) {
  let ids = [];
  try {
    const s = await jget(
      'https://collectionapi.metmuseum.org/public/collection/v1.1/search' +
        `?q=${encodeURIComponent(term)}&hasImages=true&limit=20&offset=0`
    );
    ids = s?.objectIDs ?? []; // null, not [], when nothing matches
  } catch {
    return [];
  }
  if (!Array.isArray(ids) || !ids.length) return [];

  const out = [];
  const tokens = identityTokens(ch);
  for (const oid of ids.slice(0, 8)) {
    let o;
    try {
      o = await jget(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${oid}`);
    } catch {
      continue;
    }
    // hasImages / isPublicDomain in search are unreliable — re-check here.
    if (o?.isPublicDomain !== true) continue;
    const small = String(o?.primaryImageSmall ?? '').trim(); // web-large, ~150kB
    if (!small || BAD.test(o.title ?? '') || BAD_EXT.test(small)) continue;
    const hay = fold(`${o.title ?? ''} ${o.objectName ?? ''} ${o.culture ?? ''} ${o.department ?? ''}`);
    if (!hits(tokens, hay)) continue;
    out.push({
      provider: 'met',
      url: small,
      width: 0,
      height: 0,
      page: o.objectURL ?? `https://www.metmuseum.org/art/collection/search/${oid}`,
      title: o.title || `Met object ${oid}`,
      artist:
        [o.artistDisplayName, o.artistDisplayBio].filter(Boolean).join(', ') ||
        o.culture ||
        'Unknown artist',
      license: 'Public Domain (CC0 / OASC)',
      score: 5 + (fold(o.title ?? '').split(' ').some((t) => tokens.includes(t)) ? 3 : 0),
      // No width control: web-large is the only sensible render.
      renderAt: (w) => (w === WIDTH_STEPS[0] ? small : null),
    });
  }
  return out;
}

/** D. Cleveland Museum of Art — uniformly CC0, cleanest metadata. */
async function fromCleveland(ch, term) {
  let data;
  try {
    data = await jget(
      'https://openaccess-api.clevelandart.org/api/artworks/' +
        `?q=${encodeURIComponent(term)}&has_image=1&limit=20&skip=0`
    );
  } catch {
    return [];
  }
  const tokens = identityTokens(ch);
  const out = [];
  for (const a of data?.data ?? []) {
    if (String(a?.share_license_status ?? '').toUpperCase() !== 'CC0') continue;
    const web = a?.images?.web; // ~900px jpeg; images.full is a 100MB TIFF
    const url = web?.url;
    if (!url) continue;
    const bytes = parseInt(web.filesize ?? '0', 10) || 0; // strings, not numbers
    if (bytes && bytes > MAX_BYTES) continue;
    if (BAD.test(a.title ?? '') || BAD_EXT.test(url)) continue;
    const hay = fold(`${a.title ?? ''} ${a.tombstone ?? ''} ${(a.culture ?? []).join(' ')}`);
    if (!hits(tokens, hay)) continue;
    out.push({
      provider: 'cleveland',
      url,
      width: parseInt(web.width ?? '0', 10) || 0,
      height: parseInt(web.height ?? '0', 10) || 0,
      page: a.url ?? 'https://www.clevelandart.org/',
      title: a.title || 'Cleveland Museum of Art',
      artist:
        (a.creators ?? []).map((c) => c.description).filter(Boolean).join(', ') ||
        (a.culture ?? [])[0] ||
        'Unknown artist',
      license: `CC0${a.creation_date ? ` · ${a.creation_date}` : ''}`,
      score: 5 + (fold(a.title ?? '').split(' ').some((t) => tokens.includes(t)) ? 3 : 0),
      renderAt: (w) => (w === WIDTH_STEPS[0] ? url : null),
    });
  }
  return out;
}

/**
 * E. Re-render what we already credit.  For an oversize file whose credit
 * already points at a Commons file, the right picture is the one we have — it
 * just needs to be smaller.  This keeps a correct portrait instead of rolling
 * the dice on a fresh search.
 */
async function fromExistingCredit(ch) {
  const credit = credits[ch.id];
  const src = credit?.source ?? '';
  if (!/wikimedia\.org|wikipedia\.org/.test(src)) return [];
  const m =
    src.match(/\/wikipedia\/[^/]+\/thumb\/[0-9a-f]\/[0-9a-f]{2}\/([^/?]+)/i) ||
    src.match(/\/wikipedia\/[^/]+\/[0-9a-f]\/[0-9a-f]{2}\/([^/?]+)/i);
  if (!m) return [];
  const fileTitle = `File:${decodeURIComponent(m[1])}`;
  let page;
  try {
    const data = await jget(
      `${COMMONS_API}?action=query&format=json&prop=imageinfo` +
        `&iiprop=url|size|extmetadata|mime&iiurlwidth=${WIDTH_STEPS[0]}` +
        `&titles=${encodeURIComponent(fileTitle)}`
    );
    page = Object.values(data?.query?.pages ?? {})[0];
    if (!page || page.missing !== undefined) return [];
  } catch {
    return [];
  }
  const cand = commonsCandidate(page, ch, { bonus: 10 });
  if (cand) return [cand];
  // The relevance gate can reject a file we already decided to trust; keep it
  // anyway, but only as a shrink-in-place of an existing, already-credited pick.
  const info = page.imageinfo?.[0];
  if (!info?.thumburl) return [];
  return [
    {
      provider: 'wikimedia',
      url: info.thumburl,
      width: info.width ?? 0,
      height: info.height ?? 0,
      page: info.descriptionurl ?? credit.page,
      title: credit.title || fileTitle.replace(/^File:/, ''),
      artist: stripTags(info.extmetadata?.Artist?.value) || credit.artist || 'Unknown artist',
      license: stripTags(info.extmetadata?.LicenseShortName?.value) || credit.license || 'see source',
      score: 10,
      renderAt: (w) => commonsRender(fileTitle, w),
    },
  ];
}

// ------------------------------------------------- candidate pipeline ----
/** Search terms, most specific first. */
function terms(ch) {
  // A borrowed wikiTitle ('Ravana' on the mahaparshva entry) would search for
  // the wrong person entirely, so only an owned title earns a query.
  const wiki = ch.ownWiki && fold(ch.wikiTitle) !== fold(ch.name) ? ch.wikiTitle : null;
  const list = [
    `${ch.name} Ramayana`,
    wiki ? `${wiki} Ramayana` : null,
    wiki,
    ch.name,
  ].filter(Boolean);
  return [...new Set(list)];
}

/**
 * Lazy chain of adapters.  Each stage is only paid for if the earlier ones
 * produced nothing usable.
 */
function* stages(ch, { needsShrink }) {
  const [t1, ...rest] = terms(ch);
  if (needsShrink) yield { label: 'existing', run: () => fromExistingCredit(ch) };
  yield { label: `commons "${t1}"`, run: () => fromCommonsSearch(ch, t1, 2) };
  for (const t of rest) yield { label: `commons "${t}"`, run: () => fromCommonsSearch(ch, t) };
  if (ch.importance >= 3) yield { label: 'commons category', run: () => fromCommonsCategory(ch) };
  yield { label: 'met', run: () => fromMet(ch, `${ch.name} Ramayana`) };
  yield { label: 'cleveland', run: () => fromCleveland(ch, `${ch.name} Ramayana`) };
  if (ch.importance >= 3) {
    yield { label: 'met (name)', run: () => fromMet(ch, ch.name) };
    yield { label: 'cleveland (name)', run: () => fromCleveland(ch, ch.name) };
  }
}

/** Download a candidate at the largest width that fits the byte budget. */
async function download(cand) {
  let lastUrl = null;
  for (const w of WIDTH_STEPS) {
    let url;
    try {
      url = w === WIDTH_STEPS[0] && cand.url ? cand.url : await cand.renderAt(w);
    } catch {
      url = null;
    }
    if (!url || url === lastUrl) continue; // original narrower than the step
    lastUrl = url;

    let res;
    try {
      res = await http(url);
    } catch (e) {
      return { err: e.message };
    }
    const fmt = imageFormat(res.buf);
    if (!fmt || !/^image\//.test(res.type || 'image/')) return { err: 'not an image' };
    if (res.buf.length < MIN_BYTES) return { err: 'too small' };
    if (res.buf.length <= MAX_BYTES) return { buf: res.buf, url, width: w };
    if (VERBOSE) console.log(`       ${kb(res.buf.length)} at ${w}px — stepping down`);
  }
  return { err: 'over budget at 500px' };
}

/** Walk the sources until something downloads, is unique and fits. */
async function fetchFor(ch, { needsShrink }) {
  const tried = new Set();
  for (const stage of stages(ch, { needsShrink })) {
    let cands;
    try {
      cands = await stage.run();
    } catch (e) {
      if (VERBOSE) console.log(`       ${stage.label}: ${e.message}`);
      continue;
    }
    cands = cands
      .filter((c) => c && c.url && !tried.has(c.url))
      .sort((a, b) => b.score - a.score)
      .slice(0, 6);
    if (!cands.length) continue;
    if (VERBOSE) console.log(`       ${stage.label}: ${cands.length} candidate(s)`);

    for (const cand of cands) {
      tried.add(cand.url);
      const got = await download(cand);
      if (got.err) {
        if (VERBOSE) console.log(`       reject ${cand.title}: ${got.err}`);
        continue;
      }
      const res = await commit(ch.id, got.buf, {
        source: got.url,
        page: cand.page,
        title: cand.title,
        artist: cand.artist,
        license: cand.license,
        provider: cand.provider,
      });
      if (res.ok) return { ...res, cand, width: got.width };
      if (VERBOSE) console.log(`       reject ${cand.title}: ${res.why}`);
    }
  }
  return null;
}

// --------------------------------------------------------------- main ----
async function main() {
  const rosterList = await readRoster();
  const roster = new Map(rosterList.map((c) => [c.id, c]));

  credits = await readJson(CREDITS, {});
  manifest = await readJson(MANIFEST, []);
  if (!Array.isArray(manifest)) manifest = [];
  await scanDisk();

  const onDisk = [...sizeOfId.values()].reduce((a, b) => a + b, 0);
  console.log(
    `${rosterList.length} characters · ${hashOfId.size} files on disk · ${mib(onDisk)}` +
      ` · ${DELAY}ms between Wikimedia calls${DRY_RUN ? ' · DRY RUN' : ''}`
  );

  // ---- step 1: one picture, one character --------------------------------
  const { removed, kept } = await dedupe(roster);
  console.log(`\n=== dedupe ===`);
  if (!kept.length) {
    console.log('  no duplicate groups — every file is unique');
  } else {
    for (const g of kept) {
      const losers = g.group.filter((id) => id !== g.keeper);
      console.log(
        `  ${g.hash.slice(0, 12)}  ${mib(g.size).padStart(9)}  x${g.group.length}  keep ${g.keeper}`
      );
      console.log(`      removed: ${losers.join(', ')}`);
    }
    console.log(
      `  -> ${kept.length} group(s), kept ${kept.length}, removed ${removed.length} file(s)` +
        ` (${mib(kept.reduce((n, g) => n + g.size * (g.group.length - 1), 0))} freed)`
    );
  }

  // Credits whose file is gone are dead weight; drop them so the manifest and
  // the Sources panel can never disagree with the disk.
  let orphanCredits = 0;
  for (const id of Object.keys(credits)) {
    if (!hashOfId.has(id)) {
      delete credits[id];
      orphanCredits++;
    }
  }
  if (orphanCredits) console.log(`  dropped ${orphanCredits} credit(s) with no file`);

  // Only now, with the survivors settled, is it safe to decide which character
  // owns which source page.
  rebuildPageClaims();
  const sharedPages = [...hashOfId.keys()].filter(
    (id) => credits[id] && claimedPage.get(normPage(credits[id].page)) !== id
  );
  if (sharedPages.length) {
    console.log(
      `  ${sharedPages.length} file(s) credit a source page already claimed by` +
        ` another character; they will be re-fetched: ${sharedPages.join(', ')}`
    );
  }

  if (!DRY_RUN) await persist();

  if (DEDUPE_ONLY) {
    console.log(`\nmanifest: ${manifest.length} ids · credits: ${Object.keys(credits).length} ids`);
    const unattributed = [...hashOfId.keys()].filter((id) => !credits[id]);
    if (unattributed.length) {
      console.log(
        `${unattributed.length} file(s) still unattributed (excluded from manifest): ${unattributed.join(', ')}`
      );
    }
    return;
  }

  // ---- step 2: decide what to fetch --------------------------------------
  let work;
  if (ONLY.length) {
    work = rosterList.filter((c) => ONLY.includes(c.id));
    const unknown = ONLY.filter((id) => !roster.has(id));
    if (unknown.length) console.log(`unknown id(s) ignored: ${unknown.join(', ')}`);
  } else if (FORCE) {
    work = rosterList;
  } else {
    work = rosterList.filter((c) => {
      const size = sizeOfId.get(c.id);
      if (size === undefined) return true; // missing
      if (size > MAX_BYTES) return true; // oversize
      if (!credits[c.id]) return true; // uncredited
      return sharedPages.includes(c.id); // same artwork as someone else
    });
  }

  console.log(`\n=== fetch (${work.length} character(s)) ===`);
  let ok = 0;
  const missed = [];
  for (const ch of work) {
    const size = sizeOfId.get(ch.id);
    // Re-rendering the picture we already credit is only right when that
    // picture is genuinely ours; otherwise we must go and find a new one.
    const needsShrink =
      !!credits[ch.id] && claimedPage.get(normPage(credits[ch.id].page)) === ch.id;
    const why =
      size === undefined
        ? 'missing'
        : size > MAX_BYTES
          ? `oversize ${mib(size)}`
          : credits[ch.id]
            ? 'shared source'
            : 'uncredited';
    process.stdout.write(`  ${ch.id.padEnd(22)} ${why.padEnd(18)}`);
    let got = null;
    try {
      got = await fetchFor(ch, { needsShrink });
    } catch (e) {
      console.log(`error: ${e.message}`);
      missed.push(ch.id);
      continue;
    }
    if (got) {
      ok++;
      console.log(`ok ${kb(got.bytes).padStart(6)} ${got.cand.provider} · ${got.cand.title}`);
    } else {
      missed.push(ch.id);
      console.log('no usable candidate -> sigil');
    }
  }

  // ---- step 3: reconcile --------------------------------------------------
  if (!DRY_RUN) await persist();
  const total = [...sizeOfId.values()].reduce((a, b) => a + b, 0);
  const unattributed = [...hashOfId.keys()].filter((id) => !credits[id]);
  console.log(
    `\n${ok}/${work.length} fetched · manifest ${manifest.length} ids · folder ${mib(total)}`
  );
  if (unattributed.length) {
    console.log(
      `${unattributed.length} file(s) on disk without attribution, excluded from manifest: ${unattributed.join(', ')}`
    );
  }
  if (missed.length) console.log(`sigil fallback (${missed.length}): ${missed.join(', ')}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
