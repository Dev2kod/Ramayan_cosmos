import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { useStore } from '../../store';
import { characters } from '../../data';
import { KANDAS } from '../../data/types';
import type { Faction, Species } from '../../data/types';
import { FACTION_COLOR, FACTION_LABEL, SPECIES_LABEL } from '../../lib/theme';

export function FilterRail() {
  const factions = useStore((s) => s.factions);
  const species = useStore((s) => s.species);
  const toggleFaction = useStore((s) => s.toggleFaction);
  const toggleSpecies = useStore((s) => s.toggleSpecies);
  const kandaLimit = useStore((s) => s.kandaLimit);
  const setKandaLimit = useStore((s) => s.setKandaLimit);
  const clearFilters = useStore((s) => s.clearFilters);

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

  const idx = kandaLimit === 'all' ? KANDAS.length : KANDAS.findIndex((k) => k.id === kandaLimit);
  const kanda = kandaLimit === 'all' ? null : KANDAS[idx];
  const dirty = factions.size || species.size || kandaLimit !== 'all';

  return (
    <motion.aside
      className="rail glass"
      initial={{ opacity: 0, x: -18 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -18 }}
      transition={{ duration: 0.45, delay: 0.1 }}
    >
      <section>
        <h4>Realms</h4>
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
                onDoubleClick={() => window.dispatchEvent(new CustomEvent('fly-to-faction', { detail: f }))}
                title={`${factionCounts.get(f) ?? 0} characters — double-click to fly there`}
              >
                <span className="chip-dot" style={{ background: FACTION_COLOR[f] }} />
                {FACTION_LABEL[f]}
                <span style={{ opacity: 0.55, fontSize: 10 }}>{factionCounts.get(f) ?? 0}</span>
              </button>
            );
          })}
        </div>
      </section>

      <section>
        <h4>Kind</h4>
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
      </section>

      <section>
        <h4>Through the kandas</h4>
        <div className="slider-row">
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
        </div>
        <div className="kanda-name">{kanda ? kanda.name : 'The whole epic'}</div>
        <div className="kanda-theme">
          {kanda ? kanda.theme : 'All seven books, every character who ever appears.'}
        </div>
      </section>

      {dirty ? (
        <button className="rail-reset" onClick={clearFilters}>
          Reset filters
        </button>
      ) : null}
    </motion.aside>
  );
}
