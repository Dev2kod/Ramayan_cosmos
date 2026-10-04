import { useEffect, useMemo, useState } from 'react';
import * as THREE from 'three';
import { useStore } from '../store';
import { characterById, eventsByCharacter, relationsByCharacter } from '../data';
import { FACTION_COLOR } from '../lib/theme';
import { bondBetween } from '../lib/bonds';
import { Shrine } from '../components/three/Shrine';
import { FacetRing, facetPosition, type FacetDef } from '../components/three/FacetRing';
import { PortalRing, type PortalDef } from '../components/three/PortalRing';
import { TimelineHelix, helixPositions } from '../components/three/TimelineHelix';
import { CameraRig, type FlyTarget } from '../components/three/CameraRig';

export function CharacterScene({ id }: { id: string }) {
  const character = characterById.get(id)!;
  const facet = useStore((s) => s.facet);
  const setFacet = useStore((s) => s.setFacet);
  const activeEvent = useStore((s) => s.activeEvent);
  const setActiveEvent = useStore((s) => s.setActiveEvent);
  const storyMode = useStore((s) => s.storyMode);
  const setStoryMode = useStore((s) => s.setStoryMode);
  const openCharacter = useStore((s) => s.openCharacter);
  const bondHover = useStore((s) => s.bondHover);
  const bondFocus = useStore((s) => s.bondFocus);

  const [fly, setFly] = useState<FlyTarget | null>(null);

  const events = useMemo(
    () => (eventsByCharacter.get(id) ?? []).slice().sort((a, b) => a.order - b.order),
    [id]
  );
  const points = useMemo(() => helixPositions(events), [events]);

  // One portal per person — but each now carries every relation between the
  // two, so a pair linked more than one way no longer loses all but the first.
  const portals = useMemo<PortalDef[]>(() => {
    const seen = new Set<string>();
    const out: PortalDef[] = [];
    for (const r of relationsByCharacter.get(id) ?? []) {
      const otherId = r.source === id ? r.target : r.source;
      const other = characterById.get(otherId);
      if (!other || seen.has(otherId)) continue;
      seen.add(otherId);
      const bond = bondBetween(id, otherId);
      if (bond) out.push({ other, bond });
    }
    return out.sort((a, b) => b.other.importance - a.other.importance).slice(0, 24);
  }, [id]);

  const facets = useMemo<FacetDef[]>(
    () => [
      // Keep `sub` to a few words — these are 3D labels, not prose. The real
      // writing lives in the side panel the tablet opens.
      { key: 'who', label: 'Who', sub: 'Life, titles, the verse', count: 0 },
      { key: 'motivations', label: 'Motives', sub: 'What drove them', count: character.motivations.length },
      { key: 'abilities', label: 'Powers', sub: 'Gifts, weapons, boons', count: character.abilities.length },
      { key: 'deeds', label: 'Deeds', sub: 'What they accomplished', count: character.accomplishments.length },
      { key: 'bonds', label: 'Bonds', sub: 'Who they were tied to', count: portals.length },
      { key: 'ending', label: 'Ending', sub: endingSub(character.ending.type), count: 0 },
    ],
    [character, portals.length]
  );

  // Reset the camera when the character changes.
  useEffect(() => {
    setFly({ look: [0, 0, 0], eye: [0, 52, 255], duration: 1.7 });
  }, [id]);

  // Focusing a facet dollies out to that tablet.
  useEffect(() => {
    if (!facet) return;
    const i = facets.findIndex((f) => f.key === facet);
    if (i < 0) return;
    // The tablets sit in a screen-parallel ring, so approach from the front
    // and slide sideways rather than orbiting round to them.
    const p = facetPosition(i, facets.length);
    setFly({
      look: [p.x * 0.55, p.y * 0.55, p.z],
      eye: [p.x * 0.75, p.y * 0.75 + 6, p.z + 112],
      duration: 1.1,
    });
  }, [facet]);

  // Selecting an event travels the camera along the helix.
  useEffect(() => {
    if (!activeEvent) return;
    const p = points.find((x) => x.event.id === activeEvent);
    if (!p) return;
    // Stand well off the spiral and look back at it: close in, the 3D titles
    // of neighbouring beads swell up and swamp the view.
    const out = new THREE.Vector3(p.pos.x, 0, p.pos.z).normalize().multiplyScalar(120);
    setFly({
      look: [p.pos.x * 0.55, p.pos.y * 0.75, p.pos.z * 0.55],
      eye: [p.pos.x + out.x, p.pos.y + 42, p.pos.z + out.z],
      duration: 1.2,
    });
  }, [activeEvent, points]);

  // Story mode: walk the timeline on a timer.
  useEffect(() => {
    if (!storyMode || !points.length) return;
    const step = () => {
      const cur = useStore.getState().activeEvent;
      const i = points.findIndex((p) => p.event.id === cur);
      const next = points[(i + 1) % points.length];
      useStore.getState().setActiveEvent(next.event.id);
    };
    if (!useStore.getState().activeEvent) step();
    const t = window.setInterval(step, 7000);
    return () => window.clearInterval(t);
  }, [storyMode, points]);

  const color = FACTION_COLOR[character.faction];

  return (
    <group>
      {/* Hold the camera still while anything is being read. */}
      <CameraRig
        target={fly}
        minDistance={18}
        maxDistance={620}
        autoRotate={!facet && !activeEvent && !bondHover && !bondFocus}
      />

      <Shrine character={character} />
      <FacetRing facets={facets} active={facet} color={color} onSelect={(f) => setFacet(facet === f ? null : f)} />
      <group position={[0, 0, 0]}>
        <TimelineHelix
          points={points}
          activeId={activeEvent}
          onSelect={(eid) => {
            setStoryMode(false);
            setActiveEvent(eid === activeEvent ? null : eid);
          }}
          onHover={() => {}}
        />
      </group>
      <PortalRing portals={portals} onOpen={openCharacter} />
    </group>
  );
}

function endingSub(t: string) {
  switch (t) {
    case 'death':
      return 'How they died';
    case 'ascension':
      return 'How they ascended';
    case 'liberation':
      return 'How they were freed';
    case 'immortal':
      return 'Why they never ended';
    case 'retirement':
      return 'How they withdrew';
    default:
      return 'How their story closes';
  }
}
