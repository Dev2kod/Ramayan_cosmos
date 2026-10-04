import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useStore } from '../../store';
import { characters } from '../../data';
import { FACTION_COLOR, FACTION_LABEL } from '../../lib/theme';
import type { Character } from '../../data/types';

/** Simple subsequence+substring scorer — good enough and instant for ~100 rows. */
function score(c: Character, q: string): number {
  const name = c.name.toLowerCase();
  if (name === q) return 1000;
  if (name.startsWith(q)) return 500 + c.importance * 10;
  if (name.includes(q)) return 300 + c.importance * 10;
  const ep = c.epithets.find((e) => e.toLowerCase().includes(q));
  if (ep) return 200 + c.importance * 8;
  if (c.sanskrit.includes(q)) return 180;
  if (c.summary.toLowerCase().includes(q)) return 100 + c.importance * 5;
  // subsequence match on the name, e.g. "hnmn" -> hanuman
  let i = 0;
  for (const ch of name) if (ch === q[i]) i++;
  return i === q.length ? 50 + c.importance * 4 : 0;
}

export function SearchBar() {
  const query = useStore((s) => s.query);
  const setQuery = useStore((s) => s.setQuery);
  const openCharacter = useStore((s) => s.openCharacter);
  const [focused, setFocused] = useState(false);
  const [cursor, setCursor] = useState(0);
  const input = useRef<HTMLInputElement>(null);

  const hits = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return characters
      .map((c) => ({ c, s: score(c, q) }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 9)
      .map((x) => x.c);
  }, [query]);

  useEffect(() => setCursor(0), [query]);

  // "/" focuses search from anywhere.
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement !== input.current) {
        e.preventDefault();
        input.current?.focus();
      }
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, []);

  const go = (c: Character) => {
    window.dispatchEvent(new CustomEvent('fly-to-node', { detail: c.id }));
    setQuery('');
    input.current?.blur();
    setTimeout(() => openCharacter(c.id), 650);
  };

  return (
    <div className="search">
      <span className="search-icon">⌕</span>
      <input
        ref={input}
        value={query}
        placeholder="Search characters…  ( / )"
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setTimeout(() => setFocused(false), 140)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            setCursor((i) => Math.min(hits.length - 1, i + 1));
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setCursor((i) => Math.max(0, i - 1));
          } else if (e.key === 'Enter' && hits[cursor]) {
            go(hits[cursor]);
          } else if (e.key === 'Escape') {
            setQuery('');
            input.current?.blur();
          }
        }}
      />
      {query && (
        <button className="search-clear" onClick={() => setQuery('')} aria-label="Clear search">
          ×
        </button>
      )}

      <AnimatePresence>
        {focused && hits.length > 0 && (
          <motion.div
            className="results glass"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
          >
            {hits.map((c, i) => (
              <button
                key={c.id}
                className="result"
                data-active={i === cursor}
                onMouseEnter={() => setCursor(i)}
                onClick={() => go(c)}
              >
                <span className="result-dot" style={{ background: FACTION_COLOR[c.faction], color: FACTION_COLOR[c.faction] }} />
                <span style={{ minWidth: 0 }}>
                  <span className="result-name">{c.name}</span>
                  <span className="result-sub">
                    {FACTION_LABEL[c.faction]} · {c.summary}
                  </span>
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
