// Visual smoke test: drives the dev server in a real Chrome with a GPU, walks
// the main flows, and writes screenshots + a console-error report.
//
//   node scripts/shoot.mjs [url] [outDir]

import puppeteer from 'puppeteer-core';
import fs from 'node:fs/promises';
import path from 'node:path';

const URL = process.argv[2] || 'http://localhost:5178/';
const OUT = process.argv[3] || path.join(process.cwd(), '.shots');
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: [
    '--use-gl=angle',
    '--use-angle=swiftshader',
    '--enable-unsafe-swiftshader',
    '--enable-webgl',
    '--ignore-gpu-blocklist',
    '--no-sandbox',
    '--window-size=1600,1000',
  ],
});

await fs.mkdir(OUT, { recursive: true });
const page = await browser.newPage();
await page.setViewport({ width: 1600, height: 1000, deviceScaleFactor: 1 });

const errors = [];
page.on('console', (m) => {
  if (m.type() === 'error' || m.type() === 'warning') errors.push(`[${m.type()}] ${m.text()}`);
});
page.on('pageerror', (e) => errors.push(`[pageerror] ${e.message}`));
page.on('requestfailed', (r) => errors.push(`[net] ${r.url()} ${r.failure()?.errorText}`));

const shot = async (name, ms = 2200) => {
  await wait(ms);
  await page.screenshot({ path: path.join(OUT, `${name}.png`) });
  console.log('  shot', name);
};

console.log('loading', URL);
await page.goto(URL, { waitUntil: 'networkidle2', timeout: 90000 });
await shot('1-intro', 3500);

// Enter the cosmos
await page.evaluate(() => {
  const b = [...document.querySelectorAll('button')].find((x) => /enter/i.test(x.textContent));
  b?.click();
});
await shot('2-cosmos', 6000);

// Open the kanda drawer
await page.keyboard.press('k');
await shot('3-kandas', 1800);
await page.keyboard.press('k');

// Search: type for real so the dropdown opens, then pick the first hit
await page.click('.search input');
await page.type('.search input', 'hanuman', { delay: 60 });
await wait(700);
await page.screenshot({ path: path.join(OUT, '4-search.png') });
await page.click('.result');
await shot('5-character', 8000);

// Walk the life timeline
await page.keyboard.press('ArrowRight');
await page.keyboard.press('ArrowRight');
await shot('6-event', 4000);

// Each facet panel, driven through the dev store hook
for (const f of ['who', 'motivations', 'abilities', 'deeds', 'bonds', 'ending']) {
  await page.evaluate((k) => window.__ramayana?.getState().setFacet(k), f);
  await shot(`7-facet-${f}`, 1600);
}
await page.evaluate(() => window.__ramayana?.getState().setFacet(null));

// Bond card — driven through the dev store hook, since the portal it attaches
// to lives inside the canvas and keeps moving.
await page.evaluate(() => {
  const s = window.__ramayana?.getState();
  s?.setActiveEvent(null); // clear the event card so the hover card is visible
  s?.setBondHover({ otherId: 'jambavan', x: 420, y: 330 });
});
await shot('8-bondcard', 2000);

// Bond panel, and an event selected from inside it
await page.evaluate(() => window.__ramayana?.getState().setBondFocus('jambavan'));
await shot('9-bondpanel', 2200);

// A pair Valmiki never puts in the same scene
await page.goto(URL + '#/c/shanta', { waitUntil: 'networkidle2' });
await wait(5000);
await page.evaluate(() => window.__ramayana?.getState().setBondFocus('rama'));
await shot('10-bond-noevents', 2200);

// Deep link straight into another character
await page.goto(URL + '#/c/ravana', { waitUntil: 'networkidle2' });
await shot('11-deeplink', 7000);

// Sources panel back in the cosmos
await page.evaluate(() => {
  const s = window.__ramayana?.getState();
  s?.backToCosmos();
  s?.set({ showCredits: true });
});
await shot('12-sources', 2500);

const stats = await page.evaluate(() => ({
  canvas: !!document.querySelector('canvas'),
  w: document.querySelector('canvas')?.width,
  h: document.querySelector('canvas')?.height,
  hash: location.hash,
  bodyText: document.body.innerText.slice(0, 400),
}));

console.log('\nstats:', JSON.stringify(stats, null, 2));
console.log('\nconsole output:');
const seen = new Set();
for (const e of errors) {
  const k = e.slice(0, 140);
  if (seen.has(k)) continue;
  seen.add(k);
  console.log('  ' + k);
}
if (!errors.length) console.log('  (clean)');

await browser.close();
