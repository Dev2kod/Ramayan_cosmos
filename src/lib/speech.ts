/**
 * Read-aloud, built on the browser's own speech synthesis.
 *
 * Deliberately no cloud TTS: this is a static site with no backend, and the
 * Web Speech API costs nothing, needs no key, and works offline. Voice quality
 * varies by platform, which is the trade.
 *
 * Text is queued as *segments* rather than one blob, so a passage can switch
 * language mid-flow — the translation of a shloka in English, the Devanagari
 * in a Hindi voice when the device has one.
 */

export interface Segment {
  text: string;
  /** BCP-47 tag. Devanagari is read far better by a hi-IN voice. */
  lang?: string;
  /** A short label shown in the now-playing bar. */
  label?: string;
}

export interface SpeechState {
  speaking: boolean;
  paused: boolean;
  /** What is being read, for the now-playing bar. */
  title: string;
  /** Index of the segment currently being spoken. */
  index: number;
  total: number;
  rate: number;
  voiceURI: string | null;
}

const RATE_KEY = 'ramayana.speech.rate';
const VOICE_KEY = 'ramayana.speech.voice';

const read = (k: string) => {
  try {
    return localStorage.getItem(k);
  } catch {
    return null;
  }
};
const write = (k: string, v: string) => {
  try {
    localStorage.setItem(k, v);
  } catch {
    /* private mode — the preference just won't persist */
  }
};

export const supportsSpeech = () =>
  typeof window !== 'undefined' && 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;

const state: SpeechState = {
  speaking: false,
  paused: false,
  title: '',
  index: 0,
  total: 0,
  rate: Number(read(RATE_KEY)) || 0.95,
  voiceURI: read(VOICE_KEY),
};

const listeners = new Set<() => void>();

/**
 * React's useSyncExternalStore compares snapshots with Object.is, so handing
 * back the same mutable object would mean it never re-renders. Each emit
 * publishes a fresh frozen copy.
 */
let snapshot: SpeechState = { ...state };
const emit = () => {
  snapshot = { ...state };
  listeners.forEach((f) => f());
};

export function subscribeSpeech(fn: () => void) {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

export const speechState = () => snapshot;

/* ---------------- voices ---------------- */

let voices: SpeechSynthesisVoice[] = [];

export function loadVoices(): SpeechSynthesisVoice[] {
  if (!supportsSpeech()) return [];
  voices = window.speechSynthesis.getVoices();
  return voices;
}

if (supportsSpeech()) {
  loadVoices();
  // Chrome populates the list asynchronously.
  window.speechSynthesis.addEventListener('voiceschanged', () => {
    loadVoices();
    emit();
  });
}

/**
 * Ranks a voice by how good it is likely to sound.
 *
 * The decisive factor is *not* locale but whether the voice is neural. A
 * device's old local SAPI/eSpeak voices (Microsoft David, Ravi, Heera) are
 * unmistakably robotic, while the network-backed ones (Google, Microsoft
 * Natural/Online, Apple's Siri voices) are close to natural speech. So prefer
 * neural first, and only then favour Indian English, which suits this material.
 */
function voiceScore(v: SpeechSynthesisVoice): number {
  let s = 0;
  const n = v.name.toLowerCase();
  if (/natural|neural|online|premium|enhanced|siri/.test(n)) s -= 100;
  if (!v.localService) s -= 60; // network voices are the good ones
  if (/^google/.test(n)) s -= 40;
  if (/^microsoft (david|mark|zira|ravi|heera|hazel|george)\b/.test(n)) s += 50; // legacy SAPI
  if (/espeak|compact/.test(n)) s += 80;
  if (/en[-_]IN/i.test(v.lang)) s -= 25;
  else if (/en[-_](GB|AU)/i.test(v.lang)) s -= 8;
  return s;
}

/** English voices, best-sounding first. */
export function englishVoices(): SpeechSynthesisVoice[] {
  const en = (voices.length ? voices : loadVoices()).filter((v) => /^en(-|_|$)/i.test(v.lang));
  return en.sort((a, b) => voiceScore(a) - voiceScore(b) || a.name.localeCompare(b.name));
}

/** True when every available voice is a legacy robotic one. */
export function onlyRoboticVoices(): boolean {
  const en = englishVoices();
  return en.length > 0 && voiceScore(en[0]) >= 0;
}

function pickVoice(lang: string | undefined): SpeechSynthesisVoice | null {
  const all = voices.length ? voices : loadVoices();
  if (!all.length) return null;

  if (lang && /^hi/i.test(lang)) {
    // Sanskrit has no voice anywhere; Hindi reads Devanagari correctly.
    const hi = all.find((v) => /^hi/i.test(v.lang));
    if (hi) return hi;
    return null; // no Hindi voice — caller should skip the Devanagari
  }
  if (state.voiceURI) {
    const chosen = all.find((v) => v.voiceURI === state.voiceURI);
    if (chosen) return chosen;
  }
  return englishVoices()[0] ?? all[0] ?? null;
}

/** True when the device can actually pronounce Devanagari. */
export const hasDevanagariVoice = () =>
  (voices.length ? voices : loadVoices()).some((v) => /^hi/i.test(v.lang));

/* ---------------- playback ---------------- */

let queue: Segment[] = [];
let cancelling = false;
let keepAlive: ReturnType<typeof setInterval> | null = null;

/**
 * Chrome silently stops synthesis after roughly fifteen seconds. Pausing and
 * immediately resuming resets its timer; this is the long-standing workaround.
 */
function startKeepAlive() {
  stopKeepAlive();
  keepAlive = setInterval(() => {
    const s = window.speechSynthesis;
    if (!state.speaking || state.paused) return;
    if (s.speaking) {
      s.pause();
      s.resume();
    }
  }, 9000);
}

function stopKeepAlive() {
  if (keepAlive) clearInterval(keepAlive);
  keepAlive = null;
}

export function setRate(r: number) {
  state.rate = Math.min(1.6, Math.max(0.6, r));
  write(RATE_KEY, String(state.rate));
  emit();
  if (state.speaking) {
    // Rate cannot change mid-utterance; restart from the current segment.
    const from = state.index;
    const title = state.title;
    const rest = queue.slice(from);
    stop();
    speak(rest, title);
  }
}

export function setVoice(uri: string) {
  state.voiceURI = uri;
  write(VOICE_KEY, uri);
  emit();
}

export function stop() {
  if (!supportsSpeech()) return;
  cancelling = true;
  stopKeepAlive();
  window.speechSynthesis.cancel();
  queue = [];
  state.speaking = false;
  state.paused = false;
  state.index = 0;
  state.total = 0;
  state.title = '';
  emit();
  cancelling = false;
}

export function togglePause() {
  if (!supportsSpeech() || !state.speaking) return;
  const s = window.speechSynthesis;
  if (state.paused) {
    s.resume();
    state.paused = false;
  } else {
    s.pause();
    state.paused = true;
  }
  emit();
}

/** Starts reading a passage, replacing anything already playing. */
export function speak(segments: Segment[], title: string) {
  if (!supportsSpeech()) return;
  stop();

  queue = segments
    .flatMap((s) => {
      const text = tidy(s.text);
      if (!text) return [];
      // Devanagari is left whole — sentence rules do not apply to it.
      if (/[ऀ-ॿ]/.test(text)) return [{ ...s, text }];
      return toSentences(text, s.lang).map((seg) => ({ ...s, ...seg }));
    })
    .filter((s) => s.text.length > 0)
    // Drop Devanagari when the device has no voice for it; an English voice
    // reads it as a stream of nonsense.
    .filter((s) => !(/^hi/i.test(s.lang ?? '') && !hasDevanagariVoice()));

  if (!queue.length) return;

  state.speaking = true;
  state.paused = false;
  state.index = 0;
  state.total = queue.length;
  state.title = title;
  emit();
  startKeepAlive();

  let i = 0;
  const next = () => {
    if (cancelling || i >= queue.length) {
      if (!cancelling) {
        stopKeepAlive();
        state.speaking = false;
        state.title = '';
        state.index = 0;
        state.total = 0;
        emit();
      }
      return;
    }
    const seg = queue[i];
    state.index = i;
    emit();

    const u = new SpeechSynthesisUtterance(seg.text);
    const v = pickVoice(seg.lang);
    if (v) u.voice = v;
    u.lang = seg.lang ?? v?.lang ?? 'en-IN';
    u.rate = state.rate;
    u.pitch = 1;
    u.onend = () => {
      i++;
      next();
    };
    u.onerror = () => {
      i++;
      next();
    };
    window.speechSynthesis.speak(u);
  };
  next();
}

/**
 * Normalises text for the ear rather than the eye: expands the abbreviations
 * and reference formats that a synthesiser would otherwise spell out.
 */
/**
 * Respellings for words an English synthesiser reliably mangles. Kept small
 * and only where the default is plainly wrong — over-respelling backfires,
 * because a good neural voice often handles the plain form better than a
 * phonetic hack.
 */
const SAY: [RegExp, string][] = [
  [/\bVālmīki\b/gi, 'Valmeeki'],
  [/\bVālmiki\b/gi, 'Valmeeki'],
  [/\bValmiki\b/g, 'Valmeeki'],
  [/\bRāmāyaṇa\b/gi, 'Ramayana'],
  [/\bkāṇḍa\b/gi, 'kaanda'],
  [/\bKanda\b/g, 'Kaanda'],
  [/\bkanda\b/g, 'kaanda'],
  [/\bsarga\b/gi, 'sarga'],
  [/\bshloka\b/gi, 'shloka'],
  [/\brishi(s?)\b/gi, 'rishee$1'],
  [/\brakshasa(s?)\b/gi, 'raakshasa$1'],
  [/\bvanara(s?)\b/gi, 'vaanara$1'],
  [/\byojana(s?)\b/gi, 'yojana$1'],
  [/\bbrahmastra\b/gi, 'brahma-astra'],
  [/\bastra(s?)\b/gi, 'astra$1'],
  [/\bAyodhya\b/g, 'Ayodh-ya'],
  [/\bKishkindha\b/g, 'Kish-kindha'],
  [/\bKaikeyi\b/g, 'Kaikeyee'],
  [/\bSugriva\b/g, 'Sugreeva'],
  [/\bVibhishana\b/g, 'Vibheeshana'],
  [/\bShurpanakha\b/g, 'Shoorpanakha'],
  [/\bJatayu\b/g, 'Jataayu'],
  [/\bRishyasringa\b/g, 'Rishya-shringa'],
  [/\bMandodari\b/g, 'Mandodaree'],
  [/\bSita\b/g, 'Seeta'],
];

/** IAST diacritics, flattened to something an English voice can pronounce. */
function deIast(s: string): string {
  return s
    .replace(/[āĀ]/g, 'aa')
    .replace(/[īĪ]/g, 'ee')
    .replace(/[ūŪ]/g, 'oo')
    .replace(/[ṛṚṝ]/g, 'ri')
    .replace(/[ḷḶ]/g, 'li')
    .replace(/[ṅṄñÑṇṆ]/g, 'n')
    .replace(/[ṣṢśŚ]/g, 'sh')
    .replace(/[ṭṬ]/g, 't')
    .replace(/[ḍḌ]/g, 'd')
    .replace(/[ṃṀṁ]/g, 'm')
    .replace(/[ḥḤ]/g, '')
    .replace(/[’‘]/g, "'");
}

/**
 * Normalises text for the ear rather than the eye: expands the abbreviations
 * and reference formats a synthesiser would otherwise spell out character by
 * character, and flattens the diacritics it cannot pronounce.
 */
function tidy(raw: string): string {
  let s = raw
    .replace(/\s+/g, ' ')
    .replace(/Vālmīki Rāmāyaṇa/gi, 'Valmiki Ramayana')
    .replace(/\b(\d)\.(\d+)\.(\d+)\b/g, 'book $1, sarga $2, verse $3')
    .replace(/\b(\d)\.(\d+)(?:-(\d+))?\b/g, (_m, k, e1, e2) =>
      e2 ? `book ${k}, sargas ${e1} to ${e2}` : `book ${k}, sarga ${e1}`
    )
    .replace(/—/g, ', ')
    .replace(/\s*·\s*/g, '. ');

  // Devanagari is handed to a Hindi voice untouched; everything else is
  // flattened so an English voice does not spell out the diacritics.
  if (!/[ऀ-ॿ]/.test(s)) {
    s = deIast(s);
    for (const [re, to] of SAY) s = s.replace(re, to);
  }
  return s.trim();
}

/**
 * Splits a passage into sentence-sized utterances.
 *
 * Two reasons. Long paragraphs read as a breathless monotone, where
 * sentence-sized chunks get a natural beat between them. And Chrome stops
 * speaking after roughly fifteen seconds of a single utterance, which a
 * paragraph easily exceeds.
 */
export function toSentences(text: string, lang?: string): Segment[] {
  const parts = text
    .split(/(?<=[.!?])\s+(?=[A-Z“"'(]|$)/)
    .map((t) => t.trim())
    .filter(Boolean);

  // Re-join anything too short to stand alone, and split anything too long.
  const out: string[] = [];
  for (const p of parts) {
    if (out.length && (p.length < 36 || out[out.length - 1].length < 36)) {
      out[out.length - 1] += ' ' + p;
    } else if (p.length > 260) {
      // No sentence break available — fall back to clause breaks.
      let buf = '';
      for (const clause of p.split(/(?<=[;:,])\s+/)) {
        if ((buf + ' ' + clause).length > 220 && buf) {
          out.push(buf.trim());
          buf = clause;
        } else buf += ' ' + clause;
      }
      if (buf.trim()) out.push(buf.trim());
    } else {
      out.push(p);
    }
  }
  return out.map((t) => ({ text: t, lang }));
}
