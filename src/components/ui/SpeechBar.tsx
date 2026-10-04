import { useSyncExternalStore, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  englishVoices,
  setRate,
  setVoice,
  speechState,
  stop,
  subscribeSpeech,
  togglePause,
} from '../../lib/speech';

const RATES = [0.75, 0.95, 1.2, 1.45];

/**
 * Now-playing bar. Reading a character's life takes a while, and you should be
 * able to wander the graph while it plays — so the controls live here rather
 * than inside whichever panel started it.
 */
export function SpeechBar() {
  const s = useSyncExternalStore(subscribeSpeech, speechState, speechState);
  const [showVoices, setShowVoices] = useState(false);
  const voices = englishVoices();

  return (
    <AnimatePresence>
      {s.speaking && (
        <motion.div
          className="speechbar glass"
          initial={{ opacity: 0, y: 16, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 16, x: '-50%' }}
          transition={{ duration: 0.22 }}
        >
          <button className="speechbtn" onClick={togglePause} aria-label={s.paused ? 'Resume' : 'Pause'}>
            {s.paused ? '▶' : '❚❚'}
          </button>

          <div className="speech-meta">
            <b>{s.title}</b>
            <span>
              {s.paused ? 'Paused' : 'Reading'} · {s.index + 1} of {s.total}
            </span>
          </div>

          <button
            className="speechbtn speechbtn--text"
            onClick={() => {
              const i = RATES.indexOf(s.rate);
              setRate(RATES[(i + 1) % RATES.length] ?? 0.95);
            }}
            title="Reading speed"
          >
            {s.rate.toFixed(2).replace(/0$/, '')}×
          </button>

          {voices.length > 1 && (
            <div className="speech-voice">
              <button
                className="speechbtn speechbtn--text"
                onClick={() => setShowVoices((v) => !v)}
                title="Choose a voice"
              >
                Voice
              </button>
              {showVoices && (
                <div className="speech-voices glass">
                  {voices.slice(0, 12).map((v) => (
                    <button
                      key={v.voiceURI}
                      data-on={v.voiceURI === s.voiceURI}
                      onClick={() => {
                        setVoice(v.voiceURI);
                        setShowVoices(false);
                      }}
                    >
                      {v.name.replace(/Microsoft |Google /, '')}
                      <em>{v.lang}</em>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          <button className="speechbtn" onClick={stop} aria-label="Stop reading">
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
