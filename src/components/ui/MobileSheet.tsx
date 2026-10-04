import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useStore } from '../../store';
import { characters, relations, eventsByKanda } from '../../data';
import { KANDAS, type Faction, type RelationType, type Species } from '../../data/types';
import {
  FACTION_COLOR,
  FACTION_LABEL,
  KANDA_COLOR,
  RELATION_COLOR,
  RELATION_GLOSS,
  RELATION_LABEL,
  SPECIES_LABEL,
} from '../../lib/theme';

type Tab = 'realms' | 'threads' | 'kandas';

/**
 * Everything the desktop keeps in the side rail and the legend, folded into one
 * sheet you pull up from the bottom. On a phone those panels were simply
 * `display: none`, which left filtering unreachable rather than merely cramped.
 */
export function MobileSheet() {
  const open = useStore((s) => s.showSheet);
  const st = useStore((s) => s.set);
  const [tab, setTab] = useState<Tab>('realms');

  const factions = useStore((s) => s.factions);
  const species = useStore((s) => s.species);
  const relationTypes = useStore((s) => s.relationTypes);
  const kandaLimit = useStore((s) => s.kandaLimit);
  const toggleFaction = useStore((s) => s.toggleFaction);
  const toggleSpecies = useStore((s) => s.toggleSpecies);
  const toggleRelation = useStore((s) => s.toggleRelation);
  const setKandaLimit = useStore((s) => s.setKandaLimit);
  const clearFilters = useStore((s) => s.clearFilters);
  const openCharacter = useStore((s) => s.openCharacter);

  const factionCounts = useMemo(() => {
    const m = new Map<Faction, number>();
    for (const c of characters) m.set(c.faction, (m.get(c.faction) ?? 0) + 1);
    return m;
  }, []);

  const speciesList = useMemo(() => {
    const m = new Map<Species, number>();
    for (const c of characters) m.set(c.species, (m.get(c.species) ?? 0) + 1);
    return [...m.entries()].sort((a, b) => b[1] - a[1]);
  }, []);

  const relCounts = useMemo(() => {
    const m = new Map<RelationType, number>();
    for (const r of relations) m.set(r.type, (m.get(r.type) ?? 0) + 1);
    return [...m.entries()].sort((a, b) => b[1] - a[1]);
  }, []);

  const idx = kandaLimit === 'all' ? KANDAS.length : KANDAS.findIndex((k) => k.id === kandaLimit);
  const dirty = factions.size || species.size || relationTypes.size || kandaLimit !== 'all';

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="sheet-scrim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => st({ showSheet: false })}
          />
          <motion.section
            className="sheet"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 34 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.4 }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 110 || info.velocity.y > 600) st({ showSheet: false });
            }}
          >
            <div className="sheet-grip" />

            <div className="sheet-tabs">
              {(['realms', 'threads', 'kandas'] as Tab[]).map((t) => (
                <button key={t} className="sheet-tab" data-on={t === tab} onClick={() => setTab(t)}>
                  {t === 'realms' ? 'Filter' : t === 'threads' ? 'Threads' : 'Books'}
                </button>
              ))}
              <button
                className="sheet-close"
                onClick={() => st({ showSheet: false })}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <div className="sheet-body">
              {tab === 'realms' && (
                <>
                  <h4 className="eyebrow">Realms</h4>
                  <div className="chips">
                    {(Object.keys(FACTION_LABEL) as Faction[]).map((f) => {
                      const on = factions.has(f);
                      return (
                        <button
                          key={f}
                          className="chip"
                          data-on={on}
                          style={on ? { background: FACTION_COLOR[f] } : undefined}
                          onClick={() => toggleFaction(f)}
                        >
                          <span className="chip-dot" style={{ background: FACTION_COLOR[f] }} />
                          {FACTION_LABEL[f]}
                          <span style={{ opacity: 0.55, fontSize: 10 }}>{factionCounts.get(f) ?? 0}</span>
                        </button>
                      );
                    })}
                  </div>

                  <h4 className="eyebrow" style={{ marginTop: 20 }}>
                    Kind
                  </h4>
                  <div className="chips">
                    {speciesList.map(([s, n]) => {
                      const on = species.has(s);
                      return (
                        <button
                          key={s}
                          className="chip"
                          data-on={on}
                          style={on ? { background: '#d9d2c4' } : undefined}
                          onClick={() => toggleSpecies(s)}
                        >
                          {SPECIES_LABEL[s]}
                          <span style={{ opacity: 0.55, fontSize: 10 }}>{n}</span>
                        </button>
                      );
                    })}
                  </div>

                  <h4 className="eyebrow" style={{ marginTop: 20 }}>
                    Through the kandas
                  </h4>
                  <input
                    type="range"
                    min={0}
                    max={KANDAS.length}
                    step={1}
                    value={idx}
                    onChange={(e) => {
                      const v = Number(e.target.value);
                      setKandaLimit(v >= KANDAS.length ? 'all' : KANDAS[v].id);
                    }}
                  />
                  <div className="kanda-name">{idx >= KANDAS.length ? 'The whole epic' : KANDAS[idx].name}</div>
                  <div className="kanda-theme">
                    {idx >= KANDAS.length ? 'All seven books.' : KANDAS[idx].theme}
                  </div>

                  {dirty ? (
                    <button className="rail-reset" onClick={clearFilters}>
                      Reset filters
                    </button>
                  ) : null}
                </>
              )}

              {tab === 'threads' && (
                <>
                  <h4 className="eyebrow">Tap a thread to show only that kind of bond</h4>
                  {relCounts.map(([t, n]) => {
                    const on = !relationTypes.size || relationTypes.has(t);
                    return (
                      <button
                        key={t}
                        className="sheet-rel"
                        style={{ opacity: on ? 1 : 0.38 }}
                        onClick={() => toggleRelation(t)}
                      >
                        <span
                          className="legend-line"
                          style={{ background: RELATION_COLOR[t], boxShadow: `0 0 8px ${RELATION_COLOR[t]}` }}
                        />
                        <span style={{ flex: 1, textAlign: 'left' }}>
                          <b>{RELATION_LABEL[t]}</b>
                          <span className="sheet-rel-gloss">{RELATION_GLOSS[t]}</span>
                        </span>
                        <span style={{ opacity: 0.5, fontSize: 11 }}>{n}</span>
                      </button>
                    );
                  })}
                </>
              )}

              {tab === 'kandas' && (
                <>
                  {KANDAS.map((k) => (
                    <div key={k.id} style={{ marginBottom: 18 }}>
                      <h4 className="eyebrow" style={{ color: KANDA_COLOR[k.id], marginBottom: 4 }}>
                        {k.name} · {eventsByKanda.get(k.id)?.length ?? 0} events
                      </h4>
                      <p className="kanda-theme" style={{ margin: '0 0 8px' }}>
                        {k.theme}
                      </p>
                      {(eventsByKanda.get(k.id) ?? []).slice(0, 4).map((e) => (
                        <button
                          key={e.id}
                          className="sheet-ev"
                          onClick={() => {
                            const lead = e.characterIds[0];
                            if (!lead) return;
                            st({ showSheet: false });
                            openCharacter(lead);
                            setTimeout(() => useStore.getState().setActiveEvent(e.id), 400);
                          }}
                        >
                          <span className="chip-dot" style={{ background: KANDA_COLOR[k.id] }} />
                          {e.title}
                        </button>
                      ))}
                    </div>
                  ))}
                </>
              )}
            </div>
          </motion.section>
        </>
      )}
    </AnimatePresence>
  );
}
