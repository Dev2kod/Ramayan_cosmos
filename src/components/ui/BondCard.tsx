import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../../store';
import { bondBetween } from '../../lib/bonds';
import { cardEnter, cardLeave, cancelBondHover, syncFromPointer } from '../../lib/bondHover';
import {
  FACTION_COLOR,
  FACTION_LABEL,
  KANDA_COLOR,
  RELATION_COLOR,
  RELATION_GLOSS,
  SPECIES_LABEL,
  verbFor,
} from '../../lib/theme';
import { hasPortrait, portraitUrl } from '../../lib/portraits';

const W = 340;
const H = 430;
const MAX_RELATIONS = 3;
const MAX_EVENTS = 3;

/**
 * Explains a relationship when you hover its portal: who the other character
 * is, every bond between them in the epic's own words, and the moments they
 * share — with the choice to read further or travel there.
 *
 * Unlike {@link HoverCard} this is interactive, so it cannot be
 * `pointer-events: none`; see the wrapper's padding for how the pointer
 * crosses the gap without dismissing it.
 */
export function BondCard() {
  const bondHover = useStore((s) => s.bondHover);
  const selected = useStore((s) => s.selected);
  const setBondFocus = useStore((s) => s.setBondFocus);
  const openCharacter = useStore((s) => s.openCharacter);

  const otherId = bondHover?.otherId ?? null;
  const wrapRef = useRef<HTMLDivElement>(null);

  // react-three-fiber only raycasts while the pointer moves, so if a portal
  // slides out from under a still cursor no pointerout ever fires. This is the
  // backstop that closes the card in that case — but it must never fire while
  // the pointer is travelling from the portal to the card, so it measures
  // against the card's real rectangle, not just a radius around the anchor.
  useEffect(() => {
    if (!bondHover) return;
    const onMove = (e: PointerEvent) => syncFromPointer(e);
    const onDown = (e: PointerEvent) => {
      const el = e.target as HTMLElement | null;
      if (el?.closest?.('.bondcard-wrap')) return;
      // Starting an orbit drag on the canvas means you are done reading.
      if (el?.tagName === 'CANVAS') cancelBondHover();
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerdown', onDown);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
    };
  }, [bondHover]);

  const bond = selected && otherId ? bondBetween(selected, otherId) : null;
  const open = !!(bond && bondHover);

  // Everything below is derived defensively, because the single
  // <AnimatePresence> tree below must keep rendering while the card fades out.
  const b = bond?.b;
  const color = b ? FACTION_COLOR[b.faction] : '#888';

  // Anchored where the pointer entered and then frozen: the ring, the portals
  // and the camera are all in motion, and a card that drifts while you reach
  // for a button inside it is worse than one that stays put.
  // Sits close to the cursor — the wrapper's 22px padding then overlaps the
  // pointer's starting point, so there is no dead space to cross at all.
  const GAP = 10;
  const ax = bondHover?.x ?? 0;
  const ay = bondHover?.y ?? 0;
  const flip = ax + GAP + W > window.innerWidth - 14;
  const left = flip
    ? Math.max(14, ax - GAP - W)
    : Math.min(ax + GAP, window.innerWidth - W - 14);
  const top = Math.min(Math.max(14, ay - 72), Math.max(14, window.innerHeight - H - 14));

  const shown = bond?.relations.slice(0, MAX_RELATIONS) ?? [];
  const moreRelations = (bond?.relations.length ?? 0) - shown.length;
  const events = bond?.sharedEvents.slice(0, MAX_EVENTS) ?? [];
  const moreEvents = (bond?.sharedEvents.length ?? 0) - events.length;

  if (!open || !b) return null;

  return (
    <>
      <motion.div
        key={b.id}
        ref={wrapRef}
        className="bondcard-wrap"
        style={{ left: left - 22, top: top - 22 }}
        onPointerEnter={cardEnter}
        onPointerMove={cardEnter}
        onPointerLeave={cardLeave}
        initial={{ opacity: 0, scale: 0.96, y: 6 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        /* Deliberately no AnimatePresence/exit here. With one, framer-motion
           kept the exiting child mounted indefinitely — the card went invisible
           but its rectangle stayed over the scene, swallowing pointer events.
           A card that reliably disappears beats one that fades out. */
        transition={{ duration: 0.16, ease: 'easeOut' }}
      >
        <div className="bondcard glass" style={{ borderColor: `${color}44` }}>
          <header className="bondcard-head">
            {hasPortrait(b.id) ? (
              <img
                className="bondcard-face"
                src={portraitUrl(b.id)}
                alt={`Portrait of ${b.name}`}
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div
                className="bondcard-face"
                style={{
                  background: `radial-gradient(circle at 50% 40%, ${color}44, #0a0b1c 72%)`,
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                <span className="deva" style={{ fontSize: 15, color }}>
                  {b.sanskrit.slice(0, 2)}
                </span>
              </div>
            )}
            <div style={{ minWidth: 0 }}>
              <h3 style={{ color }}>{b.name}</h3>
              <div className="bondcard-tags">
                <span className="tag" style={{ color, background: `${color}1f` }}>
                  {FACTION_LABEL[b.faction]}
                </span>
                <span className="tag">{SPECIES_LABEL[b.species]}</span>
              </div>
            </div>
          </header>

          <div className="bondcard-scroll">
            {shown.map((br, i) => (
              <div className="bondcard-rel" key={i}>
                <span
                  className="tag"
                  style={{
                    color: RELATION_COLOR[br.relation.type],
                    background: `${RELATION_COLOR[br.relation.type]}1f`,
                  }}
                  title={RELATION_GLOSS[br.relation.type]}
                >
                  {br.chip}
                </span>
                {/* Spelled out in full, so the short chip above is never the
                    only thing standing between you and the meaning. */}
                <div className="bondcard-dir">
                  {br.source.name} {verbFor(br.relation.type)} {br.target.name}
                </div>
                <p>{br.relation.label}</p>
              </div>
            ))}
            {moreRelations > 0 && (
              <div className="bondcard-more">
                +{moreRelations} more bond{moreRelations === 1 ? '' : 's'}
              </div>
            )}

            {bond.sharedEvents.length === 0 ? (
              <div className="bondcard-dir" style={{ marginTop: 14 }}>
                Valmiki never sets them in the same scene.
              </div>
            ) : (
              <>
                <div className="eyebrow" style={{ margin: '14px 0 7px' }}>
                  Together in {bond.sharedEvents.length} moment
                  {bond.sharedEvents.length === 1 ? '' : 's'}
                </div>
                {events.map((e) => (
                  <div className="bondcard-ev" key={e.id}>
                    <span className="chip-dot" style={{ background: KANDA_COLOR[e.kanda] }} />
                    <span style={{ flex: 1 }}>{e.title}</span>
                    {e.sarga && <span className="bondcard-more">{e.sarga}</span>}
                  </div>
                ))}
                {moreEvents > 0 && <div className="bondcard-more">+{moreEvents} more</div>}
              </>
            )}
          </div>

          <footer className="bondcard-actions">
            <button className="bondbtn" onClick={() => setBondFocus(b.id)}>
              Read this bond
            </button>
            <button
              className="bondbtn bondbtn--primary"
              style={{ background: color }}
              onClick={() => {
                cancelBondHover();
                openCharacter(b.id);
              }}
            >
              Travel there &rarr;
            </button>
          </footer>
        </div>
      </motion.div>
    </>
  );
}
