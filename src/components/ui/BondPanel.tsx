import { AnimatePresence, motion } from 'framer-motion';
import { useStore } from '../../store';
import { bondBetween, bondCaption } from '../../lib/bonds';
import {
  FACTION_COLOR,
  FACTION_LABEL,
  KANDA_COLOR,
  RELATION_COLOR,
  SPECIES_LABEL,
  verbFor,
} from '../../lib/theme';
import { hasPortrait, portraitUrl } from '../../lib/portraits';

/**
 * The full story of one relationship: both faces, every bond between the two
 * in the epic's own words, and every scene they share — each clickable, so you
 * can read the relationship as a sequence without leaving the character.
 */
export function BondPanel() {
  const selected = useStore((s) => s.selected);
  const bondFocus = useStore((s) => s.bondFocus);
  const activeEvent = useStore((s) => s.activeEvent);
  const setBondFocus = useStore((s) => s.setBondFocus);
  const setActiveEvent = useStore((s) => s.setActiveEvent);
  const openCharacter = useStore((s) => s.openCharacter);

  const bond = selected && bondFocus ? bondBetween(selected, bondFocus) : null;

  return (
    <AnimatePresence>
      {bond && (
        <motion.aside
          className="panel"
          key={`bond-${bond.a.id}-${bond.b.id}`}
          initial={{ x: '100%', opacity: 0.4 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0.2 }}
          transition={{ type: 'spring', stiffness: 260, damping: 32 }}
        >
          <header className="panel-head">
            <div className="eyebrow">
              {bond.a.name} &middot; {bond.b.name}
            </div>
            <h2 style={{ color: RELATION_COLOR[bond.primary.relation.type] }}>
              {bondCaption(bond.primary)}
            </h2>
            <button className="panel-close" onClick={() => setBondFocus(null)} aria-label="Close">
              ×
            </button>
          </header>

          <div className="panel-body">
            <div className="bondpanel-faces">
              <Face id={bond.a.id} sanskrit={bond.a.sanskrit} color={FACTION_COLOR[bond.a.faction]} />
              <span className="bondpanel-arrow">&harr;</span>
              <Face id={bond.b.id} sanskrit={bond.b.sanskrit} color={FACTION_COLOR[bond.b.faction]} />
            </div>

            <div className="hovercard-tags" style={{ marginBottom: 24 }}>
              <span
                className="tag"
                style={{
                  color: FACTION_COLOR[bond.b.faction],
                  background: `${FACTION_COLOR[bond.b.faction]}1a`,
                }}
              >
                {FACTION_LABEL[bond.b.faction]}
              </span>
              <span className="tag">{SPECIES_LABEL[bond.b.species]}</span>
              <span className="tag">
                {bond.relations.length} bond{bond.relations.length === 1 ? '' : 's'}
              </span>
              <span className="tag">{bond.sharedEvents.length} shared events</span>
            </div>

            {bond.relations.map((br, i) => (
              <div key={i} style={{ marginBottom: 20 }}>
                <h4 className="eyebrow" style={{ color: RELATION_COLOR[br.relation.type], marginBottom: 6 }}>
                  {br.chip}
                </h4>
                <div className="bondcard-dir">
                  {br.source.name} {verbFor(br.relation.type)} {br.target.name}
                </div>
                <p style={{ marginTop: 6 }}>{br.relation.label}</p>
              </div>
            ))}

            <h4 className="eyebrow" style={{ margin: '28px 0 12px' }}>
              {bond.sharedEvents.length
                ? `Where their paths cross (${bond.sharedEvents.length})`
                : 'Where their paths cross'}
            </h4>

            {bond.sharedEvents.length === 0 ? (
              <p>
                Valmiki never sets them in the same scene — this bond is recorded, but never
                dramatised.
              </p>
            ) : (
              bond.sharedEvents.map((e) => (
                <button
                  key={e.id}
                  className="ev-row"
                  style={
                    e.id === activeEvent
                      ? { background: `${KANDA_COLOR[e.kanda]}1a`, boxShadow: `inset 2px 0 0 ${KANDA_COLOR[e.kanda]}` }
                      : undefined
                  }
                  onClick={() => setActiveEvent(e.id === activeEvent ? null : e.id)}
                >
                  <span className="ev-ref">{e.sarga ?? '—'}</span>
                  <span>
                    <span className="ev-title">{e.title}</span>
                    <span className="ev-desc">{e.description}</span>
                  </span>
                </button>
              ))
            )}

            <button
              className="bondbtn bondbtn--primary"
              style={{ background: FACTION_COLOR[bond.b.faction], width: '100%', marginTop: 26 }}
              onClick={() => openCharacter(bond.b.id)}
            >
              Travel to {bond.b.name} &rarr;
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

function Face({ id, sanskrit, color }: { id: string; sanskrit: string; color: string }) {
  if (hasPortrait(id)) {
    return <img
        src={portraitUrl(id)}
        alt=""
        loading="lazy"
        decoding="async"
        style={{ borderColor: color }}
      />;
  }
  return (
    <div
      style={{
        width: 68,
        height: 68,
        borderRadius: '50%',
        border: `2px solid ${color}`,
        background: `radial-gradient(circle at 50% 40%, ${color}44, #0a0b1c 72%)`,
        display: 'grid',
        placeItems: 'center',
        flex: 'none',
      }}
    >
      <span className="deva" style={{ fontSize: 22, color }}>
        {sanskrit.slice(0, 2)}
      </span>
    </div>
  );
}
