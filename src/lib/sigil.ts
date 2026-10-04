import * as THREE from 'three';

const cache = new Map<string, THREE.CanvasTexture>();

/**
 * A deterministic mandala "sigil" used wherever a character has no portrait.
 * Seeded from the character id, tinted with the faction colour.
 */
export function sigilTexture(id: string, color: string, size = 512): THREE.CanvasTexture {
  const key = `${id}|${color}|${size}`;
  const hit = cache.get(key);
  if (hit) return hit;

  const cv = document.createElement('canvas');
  cv.width = cv.height = size;
  const g = cv.getContext('2d')!;
  const rnd = mulberry(hashStr(id));
  const c = size / 2;

  // Backdrop
  const bg = g.createRadialGradient(c, c, 0, c, c, c);
  bg.addColorStop(0, '#15172e');
  bg.addColorStop(0.65, '#0b0c1c');
  bg.addColorStop(1, '#05060f');
  g.fillStyle = bg;
  g.fillRect(0, 0, size, size);

  g.translate(c, c);
  g.lineCap = 'round';

  const petals = 6 + Math.floor(rnd() * 8);
  const rings = 3 + Math.floor(rnd() * 3);

  for (let r = 0; r < rings; r++) {
    const t = (r + 1) / (rings + 1);
    const radius = t * c * 0.82;
    const alpha = 0.18 + 0.4 * (1 - t);
    g.strokeStyle = color;
    g.globalAlpha = alpha;
    g.lineWidth = Math.max(1, (1 - t) * size * 0.012);

    // ring
    g.beginPath();
    g.arc(0, 0, radius, 0, Math.PI * 2);
    g.stroke();

    // petals
    const n = petals * (r % 2 === 0 ? 1 : 2);
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 + r * 0.21;
      const px = Math.cos(a) * radius;
      const py = Math.sin(a) * radius;
      const pr = size * 0.035 * (1 - t * 0.5);
      g.beginPath();
      g.arc(px, py, pr, 0, Math.PI * 2);
      g.stroke();
    }

    // spokes
    if (r === rings - 1) {
      for (let i = 0; i < petals; i++) {
        const a = (i / petals) * Math.PI * 2;
        g.globalAlpha = 0.14;
        g.beginPath();
        g.moveTo(0, 0);
        g.lineTo(Math.cos(a) * radius, Math.sin(a) * radius);
        g.stroke();
      }
    }
  }

  // Core bindu
  g.globalAlpha = 1;
  const core = g.createRadialGradient(0, 0, 0, 0, 0, size * 0.13);
  core.addColorStop(0, '#ffffff');
  core.addColorStop(0.3, color);
  core.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = core;
  g.beginPath();
  g.arc(0, 0, size * 0.13, 0, Math.PI * 2);
  g.fill();

  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  cache.set(key, tex);
  return tex;
}

function hashStr(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
