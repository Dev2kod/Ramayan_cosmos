import { motion } from 'framer-motion';
import { useStore, stepEvent } from '../../store';
import { characterById, eventsByCharacter } from '../../data';

export function BottomBar() {
  const layer = useStore((s) => s.layer);
  const selected = useStore((s) => s.selected);
  const back = useStore((s) => s.backToCosmos);
  const storyMode = useStore((s) => s.storyMode);
  const setStoryMode = useStore((s) => s.setStoryMode);
  const activeEvent = useStore((s) => s.activeEvent);
  const setActiveEvent = useStore((s) => s.setActiveEvent);
  const showKandaDrawer = useStore((s) => s.showKandaDrawer);
  const showLegend = useStore((s) => s.showLegend);
  const st = useStore((s) => s.set);

  const evs = selected ? (eventsByCharacter.get(selected) ?? []).slice().sort((a, b) => a.order - b.order) : [];
  const i = evs.findIndex((e) => e.id === activeEvent);

  const step = (d: number) => selected && stepEvent(selected, d);

  return (
    <motion.nav
      className="bottombar glass"
      initial={{ opacity: 0, x: '-50%', y: 18 }}
      animate={{ opacity: 1, x: '-50%', y: 0 }}
      transition={{ duration: 0.45, delay: 0.15 }}
    >
      {layer === 'character' && (
        <>
          <button className="bb" onClick={back} title="Esc">
            ← Cosmos
          </button>
          <span className="bb-sep" />
          <button className="bb" onClick={() => step(-1)} disabled={!evs.length} title="←">
            ◀ Prev
          </button>
          <button className="bb" data-on={storyMode} onClick={() => setStoryMode(!storyMode)} title="Space">
            {storyMode ? '❚❚ Pause' : '▶ Story'}
            <span className="bb-count">
              {evs.length ? `${i >= 0 ? i + 1 : 0}/${evs.length}` : '0'}
            </span>
          </button>
          <button className="bb" onClick={() => step(1)} disabled={!evs.length} title="→">
            Next ▶
          </button>
          <span className="bb-sep" />
          <span className="bb" style={{ cursor: 'default', color: 'var(--ink-faint)' }}>
            {selected ? characterById.get(selected)?.sanskrit : ''}
          </span>
        </>
      )}

      {layer === 'cosmos' && (
        <>
          <button className="bb" data-on={showKandaDrawer} onClick={() => st({ showKandaDrawer: !showKandaDrawer })} title="K">
            ☰ The seven kandas
          </button>
          <span className="bb-sep" />
          <button className="bb" data-on={showLegend} onClick={() => st({ showLegend: !showLegend })} title="L">
            ◈ Legend
          </button>
          <span className="bb-sep" />
          <button className="bb" onClick={() => st({ showCredits: true })}>
            ⓘ Sources
          </button>

          <span className="bb-sep" />
          <span className="bb" style={{ cursor: 'default', color: 'var(--ink-faint)' }}>
            Drag to orbit · Scroll to zoom · Click a star
          </span>
        </>
      )}
    </motion.nav>
  );
}
