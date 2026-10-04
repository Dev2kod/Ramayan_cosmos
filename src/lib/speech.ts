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

/** English voices, Indian English first — it suits this material best. */
export function englishVoices(): SpeechSynthesisVoice[] {
  const en = (voices.length ? voices : loadVoices()).filter((v) => /^en(-|_|$)/i.test(v.lang));
  return en.sort((a, b) => {
    const ai = /en[-_]IN/i.test(a.lang) ? 0 : 1;
    const bi = /en[-_]IN/i.test(b.lang) ? 0 : 1;
    return ai - bi || a.name.localeCompare(b.name);
  });
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
    .map((s) => ({ ...s, text: tidy(s.text) }))
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

  let i = 0;
  const next = () => {
    if (cancelling || i >= queue.length) {
      if (!cancelling) {
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
function tidy(raw: string): string {
  return raw
    .replace(/\s+/g, ' ')
    .replace(/Vālmīki Rāmāyaṇa/gi, 'Valmiki Ramayana')
    .replace(/\b(\d)\.(\d+)\.(\d+)\b/g, 'book $1, sarga $2, verse $3')
    .replace(/\b(\d)\.(\d+)(?:-(\d+))?\b/g, (_m, k, s, e) =>
      e ? `book ${k}, sargas ${s} to ${e}` : `book ${k}, sarga ${s}`
    )
    .replace(/—/g, ', ')
    .replace(/\s*·\s*/g, '. ')
    .trim();
}
