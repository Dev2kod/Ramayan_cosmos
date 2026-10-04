import { AnimatePresence, motion } from 'framer-motion';
import { useStore } from '../../store';
import { eventById, characterById, eventsByCharacter } from '../../data';
import { KANDAS } from '../../data/types';
import { FACTION_COLOR, KANDA_COLOR } from '../../lib/theme';
import { ShlokaBlock } from './ShlokaBlock';
import { ListenButton } from './ListenButton';
import { eventSegments } from '../../lib/speechText';

export function EventCard() {
  const activeEvent = useStore((s) => s.activeEvent);
  const setActiveEvent = useStore((s) => s.setActiveEvent);
  const openCharacter = useStore((s) => s.openCharacter);
  const selected = useStore((s) => s.selected);

  const e = activeEvent ? eventById.get(activeEvent) : null;
  if (!e) return <AnimatePresence />;

  const kanda = KANDAS.find((k) => k.id === e.kanda);
  const color = KANDA_COLOR[e.kanda];

  const siblings = selected ? (eventsByCharacter.get(selected) ?? []).slice().sort((a, b) => a.order - b.order) : [];
  const i = siblings.findIndex((x) => x.id === e.id);

  return (
    <AnimatePresence mode="wait">
      <motion.article
        key={e.id}
        className="eventcard glass"
        initial={{ opacity: 0, x: '-50%', y: 26, scale: 0.98 }}
        animate={{ opacity: 1, x: '-50%', y: 0, scale: 1 }}
        exit={{ opacity: 0, x: '-50%', y: 18, scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
        style={{ borderColor: `${color}3a` }}
      >
        <header className="eventcard-head">
          <span className="eventcard-kanda" style={{ background: `${color}22`, color }}>
            {kanda?.name ?? e.kanda}
          </span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h3>{e.title}</h3>
            <div className="eventcard-loc">
              {e.location}
              {e.sarga ? ` · Vālmīki Rāmāyaṇa ${e.sarga}` : ''}
              {i >= 0 ? ` · ${i + 1} of ${siblings.length} in this life` : ''}
            </div>
          </div>
          <ListenButton compact title={e.title} build={() => eventSegments(e)} />
          <button className="panel-close" style={{ position: 'static' }} onClick={() => setActiveEvent(null)}>
            ×
          </button>
        </header>

        <div className="eventcard-body">
          <p>{e.description}</p>
          {e.significance && <div className="eventcard-sig">{e.significance}</div>}
          {e.shloka && <ShlokaBlock shloka={e.shloka} />}

          {e.causes.length > 0 && (
            <>
              <div className="eyebrow" style={{ marginTop: 6, marginBottom: 8 }}>
                Because of
              </div>
              <div className="who-row">
                {e.causes.map((cid) => {
                  const c = eventById.get(cid);
                  if (!c) return null;
                  return (
                    <button key={cid} className="who" onClick={() => setActiveEvent(cid)}>
                      <span className="chip-dot" style={{ background: KANDA_COLOR[c.kanda] }} />
                      {c.title}
                    </button>
                  );
                })}
              </div>
            </>
          )}

          <div className="eyebrow" style={{ marginTop: 16, marginBottom: 8 }}>
            Present
          </div>
          <div className="who-row">
            {e.characterIds.map((id) => {
              const c = characterById.get(id);
              if (!c) return null;
              return (
                <button
                  key={id}
                  className="who"
                  onClick={() => id !== selected && openCharacter(id)}
                  style={id === selected ? { borderColor: FACTION_COLOR[c.faction], color: 'var(--ink)' } : undefined}
                >
                  <span className="chip-dot" style={{ background: FACTION_COLOR[c.faction] }} />
                  {c.name}
                </button>
              );
            })}
          </div>
        </div>
      </motion.article>
    </AnimatePresence>
  );
}
