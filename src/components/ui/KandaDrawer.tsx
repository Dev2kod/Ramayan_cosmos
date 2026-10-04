import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useStore } from '../../store';
import { eventsByKanda, characterById } from '../../data';
import { KANDAS, type Kanda } from '../../data/types';
import { KANDA_COLOR, FACTION_COLOR } from '../../lib/theme';

/** A browsable index of the epic, book by book. */
export function KandaDrawer() {
  const open = useStore((s) => s.showKandaDrawer);
  const st = useStore((s) => s.set);
  const openCharacter = useStore((s) => s.openCharacter);
  const [tab, setTab] = useState<Kanda>('bala');

  const kanda = KANDAS.find((k) => k.id === tab)!;
  const evs = eventsByKanda.get(tab) ?? [];
  const color = KANDA_COLOR[tab];

  return (
    <AnimatePresence>
      {open && (
        <motion.section
          className="drawer"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', stiffness: 240, damping: 30 }}
        >
          <header className="drawer-head">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <div>
                <div className="eyebrow">The seven books</div>
                <h2 className="display" style={{ margin: '6px 0 0', fontSize: 22, color }}>
                  {kanda.name} <span className="deva" style={{ color: 'var(--ink-faint)', fontSize: 16 }}>{kanda.sanskrit}</span>
                </h2>
              </div>
              <button className="panel-close" style={{ position: 'static' }} onClick={() => st({ showKandaDrawer: false })}>
                ×
              </button>
            </div>
            <div className="drawer-tabs">
              {KANDAS.map((k) => {
                const on = k.id === tab;
                return (
                  <button
                    key={k.id}
                    className="dtab"
                    data-on={on}
                    style={on ? { background: KANDA_COLOR[k.id] } : undefined}
                    onClick={() => setTab(k.id)}
                  >
                    {k.name.replace(' Kanda', '')}
                    <span style={{ opacity: 0.6, marginLeft: 7, fontSize: 10 }}>
                      {eventsByKanda.get(k.id)?.length ?? 0}
                    </span>
                  </button>
                );
              })}
            </div>
          </header>

          <div className="drawer-body">
            <p className="drawer-theme">{kanda.theme}</p>
            {evs.map((e) => (
              <button
                key={e.id}
                className="ev-row"
                onClick={() => {
                  const lead = e.characterIds[0];
                  if (!lead) return;
                  st({ showKandaDrawer: false });
                  openCharacter(lead);
                  setTimeout(() => useStore.getState().setActiveEvent(e.id), 400);
                }}
              >
                <span className="ev-ref">{e.sarga ?? '—'}</span>
                <span>
                  <span className="ev-title">{e.title}</span>
                  <span className="ev-desc">{e.description}</span>
                  <span className="who-row" style={{ marginTop: 7 }}>
                    {e.characterIds.slice(0, 6).map((id) => {
                      const c = characterById.get(id);
                      if (!c) return null;
                      return (
                        <span key={id} className="tag" style={{ color: FACTION_COLOR[c.faction], background: `${FACTION_COLOR[c.faction]}18` }}>
                          {c.name}
                        </span>
                      );
                    })}
                  </span>
                </span>
              </button>
            ))}
            {!evs.length && <p className="drawer-theme">No events recorded for this kanda yet.</p>}
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
