import { motion } from 'framer-motion';
import { useStore } from '../../store';
import { characters, relations, events } from '../../data';

export function Intro() {
  const enter = useStore((s) => s.enter);
  const shlokas = characters.filter((c) => c.shloka).length + events.filter((e) => e.shloka).length;

  return (
    <motion.div
      className="intro"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.06, filter: 'blur(14px)' }}
      transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="intro-inner">
        <motion.div
          className="intro-om"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 1 }}
        >
          ॐ
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22, letterSpacing: '0.3em' }}
          animate={{ opacity: 1, y: 0, letterSpacing: '0.1em' }}
          transition={{ delay: 0.3, duration: 1.3, ease: [0.2, 0.8, 0.2, 1] }}
        >
          RAMAYANA
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 1 }}
        >
          वाल्मीकि रामायणम्
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 1 }}
        >
          A three-dimensional atlas of Valmiki's epic. Every character is a star; every bond between
          them is a thread of light. Step into any one of them and their whole life unfolds around
          you — deeds, motives, verses, and the ending they were given.
        </motion.p>

        <motion.div
          className="intro-stats"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 1 }}
        >
          <div className="intro-stat">
            <b>{characters.length}</b>
            <span>Characters</span>
          </div>
          <div className="intro-stat">
            <b>{relations.length}</b>
            <span>Bonds</span>
          </div>
          <div className="intro-stat">
            <b>{events.length}</b>
            <span>Events</span>
          </div>
          <div className="intro-stat">
            <b>{shlokas}</b>
            <span>Shlokas</span>
          </div>
        </motion.div>

        <motion.button
          className="btn-enter"
          onClick={enter}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.9 }}
          whileTap={{ scale: 0.97 }}
        >
          Enter the cosmos
        </motion.button>
      </div>
    </motion.div>
  );
}
