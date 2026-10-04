import { motion } from 'framer-motion';
import { useStore } from '../../store';
import { characterById } from '../../data';
import { FACTION_COLOR } from '../../lib/theme';

export function Breadcrumb() {
  const trail = useStore((s) => s.trail);
  const selected = useStore((s) => s.selected);
  const open = useStore((s) => s.openCharacter);
  const back = useStore((s) => s.backToCosmos);

  if (!selected) return null;
  const path = [...trail, selected];

  return (
    <motion.nav
      className="crumbs glass"
      initial={{ opacity: 0, x: '-50%', y: -12 }}
      animate={{ opacity: 1, x: '-50%', y: 0 }}
      exit={{ opacity: 0, x: '-50%', y: -12 }}
      transition={{ duration: 0.35 }}
    >
      <button className="crumb" onClick={back}>
        Cosmos
      </button>
      {path.map((id, i) => {
        const c = characterById.get(id);
        if (!c) return null;
        const cur = i === path.length - 1;
        return (
          <span key={id + i} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <span className="crumb-sep">›</span>
            <button
              className="crumb"
              data-cur={cur}
              style={cur ? { color: FACTION_COLOR[c.faction] } : undefined}
              onClick={() => !cur && open(id)}
            >
              {c.name}
            </button>
          </span>
        );
      })}
    </motion.nav>
  );
}
