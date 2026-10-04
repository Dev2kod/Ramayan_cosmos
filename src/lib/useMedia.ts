import { useEffect, useState } from 'react';

/** Subscribes to a media query. */
export function useMedia(query: string): boolean {
  const [matches, setMatches] = useState(() =>
    typeof window === 'undefined' ? false : window.matchMedia(query).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setMatches(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}

/** Phone-sized viewport — the breakpoint the mobile layout switches at. */
export const useIsMobile = () => useMedia('(max-width: 860px)');

/**
 * True for touch-primary devices. Hover is the main way to preview a character
 * or a bond on desktop, and it simply does not exist here, so those affordances
 * need a tap equivalent.
 */
export const useIsTouch = () => useMedia('(hover: none), (pointer: coarse)');
