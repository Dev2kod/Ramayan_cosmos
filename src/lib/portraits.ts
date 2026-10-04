import * as THREE from 'three';
import { sigilTexture } from './sigil';

/**
 * Which ids actually have a downloaded portrait. Populated once from
 * public/images/manifest.json (written by scripts/fetch-images.mjs); until it
 * resolves, everything falls back to a sigil, then upgrades in place.
 */
let manifest: Set<string> | null = null;
const listeners = new Set<() => void>();

export function loadManifest() {
  if (manifest) return;
  manifest = new Set();
  fetch('images/manifest.json')
    .then((r) => (r.ok ? r.json() : []))
    .then((ids: string[]) => {
      manifest = new Set(ids);
      listeners.forEach((l) => l());
    })
    .catch(() => {
      /* no portraits downloaded yet — sigils everywhere */
    });
}

export function onManifest(cb: () => void): () => void {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

export function hasPortrait(id: string): boolean {
  return manifest?.has(id) ?? false;
}

export function portraitUrl(id: string): string {
  return `images/${id}.jpg`;
}

const loader = new THREE.TextureLoader();
const texCache = new Map<string, THREE.Texture>();

/**
 * Portrait texture if one exists, otherwise the character's sigil.
 * `aspect` is the width/height of the surface it will be mapped onto; the
 * texture is centre-cropped to cover it so portraits are never stretched.
 */
export function portraitTexture(id: string, color: string, aspect = 1): THREE.Texture {
  if (!hasPortrait(id)) return sigilTexture(id, color);
  const key = `${id}@${aspect.toFixed(3)}`;
  const hit = texCache.get(key);
  if (hit) return hit;

  const t = loader.load(portraitUrl(id), (tex) => {
    const img = tex.image as { width: number; height: number };
    if (!img?.width) return;
    cover(tex, img.width / img.height, aspect);
    tex.needsUpdate = true;
  });
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  texCache.set(key, t);
  return t;
}

/** CSS `object-fit: cover`, expressed as a UV repeat/offset. */
function cover(tex: THREE.Texture, srcAspect: number, dstAspect: number) {
  if (srcAspect > dstAspect) {
    const r = dstAspect / srcAspect;
    tex.repeat.set(r, 1);
    tex.offset.set((1 - r) / 2, 0);
  } else {
    const r = srcAspect / dstAspect;
    tex.repeat.set(1, r);
    // Bias upward: faces sit in the top half of most portraits.
    tex.offset.set(0, Math.min(1 - r, (1 - r) * 0.78));
  }
}
