import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useStore } from '../../store';
import { characterById, integrityReport } from '../../data';

type Credits = Record<string, { source: string; page?: string; title?: string }>;

/** Attribution for the downloaded artwork, plus a short note on sources. */
export function About() {
  const open = useStore((s) => s.showCredits);
  const st = useStore((s) => s.set);
  const [credits, setCredits] = useState<Credits>({});

  useEffect(() => {
    if (!open || Object.keys(credits).length) return;
    fetch('images/credits.json')
      .then((r) => (r.ok ? r.json() : {}))
      .then(setCredits)
      .catch(() => setCredits({}));
  }, [open, credits]);

  const rep = integrityReport();
  const rows = Object.entries(credits);

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          className="panel"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 260, damping: 32 }}
        >
          <header className="panel-head">
            <div className="eyebrow">About this atlas</div>
            <h2 style={{ color: 'var(--gold)' }}>Sources &amp; credits</h2>
            <button className="panel-close" onClick={() => st({ showCredits: false })}>
              ×
            </button>
          </header>

          <div className="panel-body">
            <p>
              Every character, event and verse here follows <strong>Valmiki's Ramayana</strong> — the
              Sanskrit epic in seven kandas — rather than later retellings. Where a famous episode
              belongs to Tulsidas, to a regional version, or to television, the character's page says
              so instead of quietly folding it in.
            </p>
            <p>
              Verses are cited as <strong>kanda.sarga.shloka</strong>, the standard reference for the
              critical text. Transliteration is IAST.
            </p>

            <div className="hovercard-tags" style={{ margin: '18px 0 26px' }}>
              <span className="tag">{rep.characters} characters</span>
              <span className="tag">{rep.relations} bonds</span>
              <span className="tag">{rep.events} events</span>
              <span className="tag">{rep.shlokas} shlokas</span>
            </div>

            <h4 className="eyebrow" style={{ marginBottom: 12 }}>
              Artwork {rows.length ? `(${rows.length} portraits)` : ''}
            </h4>
            {rows.length === 0 ? (
              <p>
                No portraits have been downloaded. Run <code>npm run images</code> to fetch
                public-domain artwork from Wikimedia Commons; until then every character is drawn as a
                generated mandala sigil.
              </p>
            ) : (
              <>
                <p>
                  Images are public-domain or freely licensed works from Wikipedia and Wikimedia
                  Commons — largely paintings by Raja Ravi Varma and other 19th- and 20th-century
                  artists.
                </p>
                <ul className="list" style={{ gap: 7 }}>
                  {rows.map(([id, c]) => (
                    <li key={id} style={{ fontSize: 12 }}>
                      <strong style={{ color: 'var(--ink)' }}>
                        {characterById.get(id)?.name ?? id}
                      </strong>{' '}
                      —{' '}
                      <a href={c.page ?? c.source} target="_blank" rel="noreferrer" style={{ color: 'var(--saffron)' }}>
                        {c.title ?? 'Wikimedia Commons'}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
