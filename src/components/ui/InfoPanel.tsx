import { AnimatePresence, motion } from 'framer-motion';
import { useStore, type Facet } from '../../store';
import { characterById, relationsByCharacter, eventsByCharacter } from '../../data';
import { FACTION_COLOR, FACTION_LABEL, RELATION_COLOR, RELATION_LABEL, SPECIES_LABEL } from '../../lib/theme';
import { ShlokaBlock } from './ShlokaBlock';
import { KANDAS, type RelationType } from '../../data/types';

const TITLES: Record<Exclude<Facet, null>, string> = {
  who: 'Who they are',
  motivations: 'What drove them',
  abilities: 'Powers, weapons & boons',
  deeds: 'What they accomplished',
  bonds: 'Who they were bound to',
  ending: 'How their story closes',
};

export function InfoPanel() {
  const facet = useStore((s) => s.facet);
  const setFacet = useStore((s) => s.setFacet);
  const selected = useStore((s) => s.selected);
  const openCharacter = useStore((s) => s.openCharacter);
  const setBondFocus = useStore((s) => s.setBondFocus);

  const c = selected ? characterById.get(selected) : null;

  return (
    <AnimatePresence>
      {facet && c && (
        <motion.aside
          className="panel"
          key={facet + c.id}
          initial={{ x: '100%', opacity: 0.4 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0.2 }}
          transition={{ type: 'spring', stiffness: 260, damping: 32 }}
        >
          <header className="panel-head">
            <div className="eyebrow">
              {c.name} · {FACTION_LABEL[c.faction]} · {SPECIES_LABEL[c.species]}
            </div>
            <h2 style={{ color: FACTION_COLOR[c.faction] }}>{TITLES[facet]}</h2>
            <button className="panel-close" onClick={() => setFacet(null)} aria-label="Close">
              ×
            </button>
          </header>

          <div className="panel-body" style={{ ['--accent' as any]: FACTION_COLOR[c.faction] }}>
            {facet === 'who' && (
              <>
                <p style={{ fontSize: 15, color: 'var(--ink)' }}>{c.summary}</p>
                {c.epithets.length > 0 && (
                  <div className="hovercard-tags" style={{ margin: '14px 0 20px' }}>
                    {c.epithets.map((e) => (
                      <span key={e} className="tag" style={{ color: FACTION_COLOR[c.faction], background: `${FACTION_COLOR[c.faction]}1a` }}>
                        {e}
                      </span>
                    ))}
                  </div>
                )}
                {c.bio.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
                {c.shloka && <ShlokaBlock shloka={c.shloka} />}
                {c.trivia && c.trivia.length > 0 && (
                  <>
                    <h4 className="eyebrow" style={{ margin: '26px 0 12px' }}>
                      In Valmiki, and in later tellings
                    </h4>
                    <ul className="list">
                      {c.trivia.map((t, i) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                  </>
                )}
                <Appearances id={c.id} />
              </>
            )}

            {facet === 'motivations' && <Bullets items={c.motivations} />}

            {facet === 'abilities' && (
              <>
                <Bullets items={c.abilities} />
                {c.weapons && c.weapons.length > 0 && (
                  <>
                    <h4 className="eyebrow" style={{ margin: '26px 0 12px' }}>
                      Weapons
                    </h4>
                    <div className="hovercard-tags">
                      {c.weapons.map((w) => (
                        <span key={w} className="tag" style={{ color: 'var(--gold)', background: 'rgba(255,207,107,0.1)' }}>
                          {w}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </>
            )}

            {facet === 'deeds' && <Bullets items={c.accomplishments} />}

            {facet === 'bonds' && <Bonds id={c.id} onOpen={openCharacter} onRead={setBondFocus} />}

            {facet === 'ending' && (
              <>
                <div className="eyebrow" style={{ marginBottom: 12 }}>
                  {c.ending.type}
                </div>
                <p style={{ fontSize: 14.5, color: 'var(--ink)' }}>{c.ending.description}</p>
                {c.ending.killedBy && characterById.get(c.ending.killedBy) && (
                  <button
                    className="who"
                    style={{ marginTop: 14 }}
                    onClick={() => openCharacter(c.ending.killedBy!)}
                  >
                    <span
                      className="chip-dot"
                      style={{ background: FACTION_COLOR[characterById.get(c.ending.killedBy)!.faction] }}
                    />
                    At the hand of {characterById.get(c.ending.killedBy)!.name} →
                  </button>
                )}
              </>
            )}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

function Bullets({ items }: { items: string[] }) {
  if (!items.length) return <p>Valmiki leaves this unspoken.</p>;
  return (
    <ul className="list">
      {items.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </ul>
  );
}

function Appearances({ id }: { id: string }) {
  const evs = eventsByCharacter.get(id) ?? [];
  if (!evs.length) return null;
  const counts = KANDAS.map((k) => ({ k, n: evs.filter((e) => e.kanda === k.id).length })).filter((x) => x.n);
  return (
    <>
      <h4 className="eyebrow" style={{ margin: '26px 0 12px' }}>
        Appears across {evs.length} events
      </h4>
      <div className="hovercard-tags">
        {counts.map(({ k, n }) => (
          <span key={k.id} className="tag">
            {k.name} · {n}
          </span>
        ))}
      </div>
    </>
  );
}

/**
 * Every bond, not just the 24 that fit on the portal ring. Each row offers the
 * same two choices the hover card does — read, or travel — which is also the
 * only path to a bond's detail by keyboard or on a touch screen.
 */
function Bonds({
  id,
  onOpen,
  onRead,
}: {
  id: string;
  onOpen: (id: string) => void;
  onRead: (id: string) => void;
}) {
  const rels = relationsByCharacter.get(id) ?? [];
  if (!rels.length) return <p>No recorded bonds.</p>;

  const groups = new Map<RelationType, typeof rels>();
  for (const r of rels) {
    if (!groups.has(r.type)) groups.set(r.type, []);
    groups.get(r.type)!.push(r);
  }

  return (
    <>
      {[...groups.entries()].map(([type, list]) => (
        <div key={type} style={{ marginBottom: 22 }}>
          <h4 className="eyebrow" style={{ color: RELATION_COLOR[type], marginBottom: 10 }}>
            {RELATION_LABEL[type]}
          </h4>
          <div className="who-row">
            {list.map((r, i) => {
              const otherId = r.source === id ? r.target : r.source;
              const other = characterById.get(otherId);
              if (!other) return null;
              return (
                <span key={otherId + i} className="who-pair">
                  <button className="who" onClick={() => onOpen(otherId)} title={r.label}>
                    <span className="chip-dot" style={{ background: FACTION_COLOR[other.faction] }} />
                    {other.name}
                  </button>
                  <button
                    className="who-read"
                    onClick={() => onRead(otherId)}
                    title={`Why ${other.name}?`}
                    aria-label={`Read about the bond with ${other.name}`}
                  >
                    ?
                  </button>
                </span>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
}
