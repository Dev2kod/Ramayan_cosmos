import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useStore } from '../../store';
import { useIsTouch } from '../../lib/useMedia';
import { characterById, degreeOf, eventsByCharacter } from '../../data';
import { FACTION_COLOR, FACTION_LABEL, SPECIES_LABEL } from '../../lib/theme';
import { hasPortrait, portraitUrl } from '../../lib/portraits';

export function HoverCard() {
  const hovered = useStore((s) => s.hovered);
  const openCharacter = useStore((s) => s.openCharacter);
  const setHovered = useStore((s) => s.setHovered);
  const isTouch = useIsTouch();
  const [pt, setPt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const h = (e: PointerEvent) => setPt({ x: e.clientX, y: e.clientY });
    window.addEventListener('pointermove', h);
    return () => window.removeEventListener('pointermove', h);
  }, []);

  const c = hovered ? characterById.get(hovered) : null;
  if (!c) return <AnimatePresence />;

  const W = Math.min(290, window.innerWidth - 24);
  const H = 300;
  const left = isTouch
    ? Math.max(12, (window.innerWidth - W) / 2)
    : Math.min(Math.max(14, pt.x + 22), window.innerWidth - W - 14);
  // The touch card is taller than the desktop one (it carries buttons) and has
  // to clear the bottom bar, so it is measured from the bottom edge.
  const top = isTouch
    ? Math.max(12, window.innerHeight - 384 - 120)
    : Math.min(Math.max(14, pt.y - 40), window.innerHeight - H - 14);
  const color = FACTION_COLOR[c.faction];

  return (
    <AnimatePresence>
      <motion.div
        key={c.id}
        className="hovercard glass"
        style={{ left, top, borderColor: `${color}44` }}
        initial={{ opacity: 0, scale: 0.96, y: 6 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.16, ease: 'easeOut' }}
      >
        {hasPortrait(c.id) ? (
          <img
            className="hovercard-img"
            src={portraitUrl(c.id)}
            alt={`Portrait of ${c.name}`}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div
            className="hovercard-img"
            style={{
              background: `radial-gradient(ellipse at 50% 40%, ${color}3a, #0a0b1c 72%)`,
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <span className="deva" style={{ fontSize: 34, color, opacity: 0.8 }}>
              {c.sanskrit.slice(0, 2)}
            </span>
          </div>
        )}

        <div className="hovercard-body">
          <div className="hovercard-top">
            <h3 style={{ color }}>{c.name}</h3>
            <span className="deva-name">{c.sanskrit}</span>
          </div>

          <div className="hovercard-tags">
            <span className="tag" style={{ color, background: `${color}1f` }}>
              {FACTION_LABEL[c.faction]}
            </span>
            <span className="tag">{SPECIES_LABEL[c.species]}</span>
            <span className="tag">{degreeOf.get(c.id) ?? 0} bonds</span>
            <span className="tag">{eventsByCharacter.get(c.id)?.length ?? 0} events</span>
          </div>

          <p>{c.summary}</p>
          {isTouch ? (
            <div className="hovercard-actions">
              <button className="bondbtn" onClick={() => setHovered(null)}>
                Close
              </button>
              <button
                className="bondbtn bondbtn--primary"
                style={{ background: color }}
                onClick={() => openCharacter(c.id)}
              >
                Enter &rarr;
              </button>
            </div>
          ) : (
            <div className="hovercard-hint">Click to enter</div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
