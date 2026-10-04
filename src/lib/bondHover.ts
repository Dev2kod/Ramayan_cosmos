import { useStore } from '../store';

/**
 * Hover intent for the relationship portals.
 *
 * The card spans two worlds — a portal inside the WebGL canvas and a DOM card
 * floating above it — and the pointer has to cross between them without the
 * card disappearing. Rather than trying to cancel a pending close at exactly
 * the right moment, this tracks two plain facts:
 *
 *     is the pointer on the portal?   is the pointer on the card?
 *
 * The card closes only once *both* have been false for CLOSE_DELAY. Entering
 * either one at any point during that grace period revives it. Nothing depends
 * on the two sides firing their events in a particular order.
 *
 * Everything writes through `useStore.getState()`, so hovering never
 * re-renders the 24 portals inside the canvas.
 */

/** Dwell required before a card opens, guarding against a brushed portal. */
export const OPEN_DELAY = 130;
/** How long the card survives after the pointer leaves both the portal and it. */
export const CLOSE_DELAY = 400;

let overPortal: string | null = null;
let overCard = false;
/** The last card shown, so re-entering one that is mid-fade brings it back. */
let last: { otherId: string; x: number; y: number } | null = null;

let openT: ReturnType<typeof setTimeout> | null = null;
let closeT: ReturnType<typeof setTimeout> | null = null;

const clearOpen = () => {
  if (openT) clearTimeout(openT);
  openT = null;
};
const clearClose = () => {
  if (closeT) clearTimeout(closeT);
  closeT = null;
};

/** Close only when the pointer is on neither the portal nor the card. */
function settle() {
  if (overPortal || overCard) {
    clearClose();
    return;
  }
  if (closeT) return; // already counting down
  closeT = setTimeout(() => {
    closeT = null;
    if (overPortal || overCard) return; // came back during the grace period
    const s = useStore.getState();
    if (s.bondHover) s.setBondHover(null);
    if (typeof document !== 'undefined') document.body.style.cursor = '';
  }, CLOSE_DELAY);
}

/** The pointer is on a portal. `x`/`y` are client coordinates. */
export function portalEnter(otherId: string, x: number, y: number) {
  overPortal = otherId;
  clearClose();

  const s = useStore.getState();
  if (s.bondHover?.otherId === otherId) return;
  clearOpen();

  // The first card waits out a short dwell so that merely sweeping the pointer
  // across the ring does not fire one; moving between portals is immediate.
  const delay = s.bondHover ? 0 : OPEN_DELAY;
  const from = s.selected;
  openT = setTimeout(() => {
    openT = null;
    const now = useStore.getState();
    // Do not open for a world we have since left, or a portal already exited.
    if (now.selected !== from || overPortal !== otherId) return;
    last = { otherId, x, y };
    now.setBondHover(last);
  }, delay);
}

/** The pointer left a portal. */
export function portalLeave(otherId: string) {
  if (overPortal === otherId) overPortal = null;
  clearOpen();
  settle();
}

/**
 * The pointer is on the card. If it had already begun fading out, bring it
 * straight back — catching a card on its way out should feel like catching it,
 * not like missing it.
 */
export function cardEnter() {
  overCard = true;
  clearClose();
  const s = useStore.getState();
  if (!s.bondHover && last) s.setBondHover(last);
}

/** The pointer left the card. */
export function cardLeave() {
  overCard = false;
  settle();
}

/** Dev-only view of the two flags, for the pointer-handoff test. */
export const _debugHover = () => ({ overPortal, overCard, closing: !!closeT });

/** Dismiss at once: Escape, travelling, opening the panel, starting a drag. */
export function cancelBondHover() {
  overPortal = null;
  overCard = false;
  last = null; // an explicit dismissal must not be revivable
  clearOpen();
  clearClose();
  const s = useStore.getState();
  if (s.bondHover) s.setBondHover(null);
  if (typeof document !== 'undefined') document.body.style.cursor = '';
}

/**
 * Re-derives both flags from where the pointer actually is. react-three-fiber
 * only raycasts while the pointer moves over its canvas, so it can miss an
 * exit — this is the ground truth that recovers from that.
 */
export function syncFromPointer(e: PointerEvent) {
  const el = e.target as HTMLElement | null;
  const onCard = !!el?.closest?.('.bondcard-wrap');
  if (onCard !== overCard) {
    overCard = onCard;
    if (onCard) clearClose();
  }
  // Leaving the canvas entirely means no portal is under the pointer.
  if (!onCard && el?.tagName !== 'CANVAS' && overPortal) overPortal = null;
  settle();
}
