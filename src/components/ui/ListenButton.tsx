import { useSyncExternalStore } from 'react';
import { speak, speechState, stop, subscribeSpeech, supportsSpeech, type Segment } from '../../lib/speech';

/**
 * Reads a passage aloud. `build` is lazy so the text is only assembled when
 * someone actually asks to hear it.
 */
export function ListenButton({
  build,
  title,
  compact = false,
}: {
  build: () => Segment[];
  title: string;
  compact?: boolean;
}) {
  const s = useSyncExternalStore(subscribeSpeech, speechState, speechState);
  if (!supportsSpeech()) return null;

  const isThis = s.speaking && s.title === title;

  return (
    <button
      className={compact ? 'listen listen--compact' : 'listen'}
      data-on={isThis}
      onClick={() => (isThis ? stop() : speak(build(), title))}
      aria-label={isThis ? 'Stop reading' : `Read ${title} aloud`}
      title={isThis ? 'Stop' : 'Read aloud'}
    >
      <span aria-hidden>{isThis ? '◼' : '▶'}</span>
      {!compact && <span>{isThis ? 'Stop' : 'Listen'}</span>}
    </button>
  );
}
