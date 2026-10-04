import { AnimatePresence, motion } from 'framer-motion';
import { useStore } from '../../store';
import { relations } from '../../data';
import { RELATION_COLOR, RELATION_GLOSS, RELATION_LABEL } from '../../lib/theme';
import type { RelationType } from '../../data/types';

export function Legend() {
  const show = useStore((s) => s.showLegend);
  const types = useStore((s) => s.relationTypes);
  const toggle = useStore((s) => s.toggleRelation);

  const counts = new Map<RelationType, number>();
  for (const r of relations) counts.set(r.type, (counts.get(r.type) ?? 0) + 1);
  const rows = [...counts.entries()].sort((a, b) => b[1] - a[1]);

  return (
    <AnimatePresence>
      {show && (
        <motion.aside
          className="legend glass"
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 18 }}
          transition={{ duration: 0.35 }}
        >
          <h4>Threads {types.size ? `(${types.size} shown)` : ''}</h4>
          {rows.map(([t, n]) => {
            const on = !types.size || types.has(t);
            return (
              <button
                key={t}
                className="legend-row"
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '3px 0',
                  width: '100%',
                  opacity: on ? 1 : 0.35,
                }}
                onClick={() => toggle(t)}
                title={RELATION_GLOSS[t]}
              >
                <span className="legend-line" style={{ background: RELATION_COLOR[t], boxShadow: `0 0 8px ${RELATION_COLOR[t]}` }} />
                <span style={{ flex: 1, textAlign: 'left' }}>{RELATION_LABEL[t]}</span>
                <span style={{ opacity: 0.5, fontSize: 10 }}>{n}</span>
              </button>
            );
          })}
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
