import { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { AnimatePresence, motion } from 'framer-motion';
import * as THREE from 'three';

import { useStore, stepEvent } from './store';
import { characterById } from './data';
import { loadManifest } from './lib/portraits';
import { FACTION_COLOR } from './lib/theme';

import { Sky } from './scenes/Sky';
import { Effects } from './scenes/Effects';
import { GraphScene } from './scenes/GraphScene';
import { CharacterScene } from './scenes/CharacterScene';

import { Intro } from './components/ui/Intro';
import { SearchBar } from './components/ui/SearchBar';
import { FilterRail } from './components/ui/FilterRail';
import { HoverCard } from './components/ui/HoverCard';
import { InfoPanel } from './components/ui/InfoPanel';
import { EventCard } from './components/ui/EventCard';
import { BottomBar } from './components/ui/BottomBar';
import { Breadcrumb } from './components/ui/Breadcrumb';
import { KandaDrawer } from './components/ui/KandaDrawer';
import { Legend } from './components/ui/Legend';
import { About } from './components/ui/About';
import { BondCard } from './components/ui/BondCard';
import { BondPanel } from './components/ui/BondPanel';
import { cancelBondHover } from './lib/bondHover';
import './components/ui/ui.css';

export default function App() {
  const layer = useStore((s) => s.layer);
  const selected = useStore((s) => s.selected);
  const back = useStore((s) => s.backToCosmos);
  const st = useStore((s) => s.set);

  useEffect(() => loadManifest(), []);

  // Deep links: #/c/hanuman
  useEffect(() => {
    const apply = () => {
      const m = window.location.hash.match(/^#\/c\/([a-z0-9-]+)$/i);
      const s = useStore.getState();
      if (m && characterById.has(m[1])) {
        if (s.selected !== m[1]) s.openCharacter(m[1]);
      } else if (s.layer === 'character') {
        s.backToCosmos();
      }
    };
    apply();
    window.addEventListener('hashchange', apply);
    return () => window.removeEventListener('hashchange', apply);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      const typing = (e.target as HTMLElement)?.tagName === 'INPUT';
      if (typing) return;
      const s = useStore.getState();
      if (e.key === 'Escape') {
        // Unwind the transient things before the deliberate ones.
        if (s.bondHover) cancelBondHover();
        else if (s.bondFocus) s.setBondFocus(null);
        else if (s.facet) s.setFacet(null);
        else if (s.activeEvent) s.setActiveEvent(null);
        else if (s.showKandaDrawer) st({ showKandaDrawer: false });
        else if (s.layer === 'character') back();
      } else if (e.key === ' ' && s.layer === 'character') {
        e.preventDefault();
        s.setStoryMode(!s.storyMode);
      } else if ((e.key === 'ArrowRight' || e.key === 'ArrowLeft') && s.layer === 'character' && s.selected) {
        e.preventDefault();
        stepEvent(s.selected, e.key === 'ArrowRight' ? 1 : -1);
      } else if (e.key === 'k' || e.key === 'K') {
        st({ showKandaDrawer: !s.showKandaDrawer });
      } else if (e.key === 'l' || e.key === 'L') {
        st({ showLegend: !s.showLegend });
      }
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [back, st]);

  const tint = selected ? dim(FACTION_COLOR[characterById.get(selected)?.faction ?? 'others']) : '#2a2170';

  return (
    <>
      <Canvas
        dpr={[1, 1.9]}
        gl={{ antialias: true, powerPreference: 'high-performance', alpha: false }}
        camera={{ position: [0, 24, 132], fov: 52, near: 0.1, far: 2200 }}
        onCreated={({ gl, scene }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.05;
          scene.fog = new THREE.FogExp2('#05060f', 0.0016);
        }}
      >
        <color attach="background" args={['#05060f']} />
        <ambientLight intensity={0.8} />
        <Suspense fallback={null}>
          <Sky tint={tint} />
          {layer === 'character' && selected ? (
            <CharacterScene key={selected} id={selected} />
          ) : (
            <GraphScene />
          )}
          <Effects />
        </Suspense>
      </Canvas>

      <AnimatePresence>{layer === 'intro' && <Intro key="intro" />}</AnimatePresence>

      {layer !== 'intro' && (
        <>
          <motion.header
            className="topbar"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="brand glass" onClick={back} title="Back to the cosmos">
              <span className="brand-om">ॐ</span>
              <span className="brand-txt">
                <b>RAMAYANA</b>
                <span>Valmiki · 3D atlas</span>
              </span>
            </div>
            {layer === 'cosmos' && <SearchBar />}
          </motion.header>

          <AnimatePresence>{layer === 'cosmos' && <FilterRail key="rail" />}</AnimatePresence>
          <AnimatePresence>{layer === 'cosmos' && <HoverCard key="hover" />}</AnimatePresence>
          {layer === 'cosmos' && <Legend />}
          {layer === 'cosmos' && <KandaDrawer />}

          <AnimatePresence>{layer === 'character' && <Breadcrumb key="crumbs" />}</AnimatePresence>
          {layer === 'character' && <InfoPanel />}
          {layer === 'character' && <BondPanel />}
          {layer === 'character' && <BondCard />}
          {layer === 'character' && <EventCard />}

          <About />
          <BottomBar />
        </>
      )}

      {/* a brief flash while the camera dives into a character */}
      <AnimatePresence>
        {layer === 'character' && (
          <motion.div
            key={selected}
            style={{
              position: 'fixed',
              inset: 0,
              pointerEvents: 'none',
              zIndex: 60,
              background: `radial-gradient(circle at 50% 50%, ${tint}cc, transparent 62%)`,
            }}
            initial={{ opacity: 0.85 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/** Pull a faction colour down into a deep sky tint. */
function dim(hex: string): string {
  const c = new THREE.Color(hex);
  c.multiplyScalar(0.3).lerp(new THREE.Color('#20185c'), 0.55);
  return `#${c.getHexString()}`;
}
