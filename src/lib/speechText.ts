import type { Character, Shloka, StoryEvent } from '../data/types';
import { KANDAS } from '../data/types';
import { characterById } from '../data';
import type { Bond } from './bonds';
import { verbFor } from './theme';
import type { Segment } from './speech';
import { hasDevanagariVoice } from './speech';

export type { Segment };

const KANDA_NAME = (id: string) => KANDAS.find((k) => k.id === id)?.name ?? id;

/**
 * A verse, spoken. The Devanagari is only attempted when the device has a
 * Hindi voice — otherwise an English synthesiser reads it as noise. The
 * translation and the citation always get read.
 */
export function shlokaSegments(sh: Shloka, intro = 'A verse from Valmiki.'): Segment[] {
  const out: Segment[] = [{ text: intro }];
  if (hasDevanagariVoice()) out.push({ text: sh.devanagari, lang: 'hi-IN' });
  out.push({ text: `Which means: ${sh.translation}` });
  if (sh.context) out.push({ text: sh.context });
  out.push({ text: `Valmiki Ramayana, ${sh.ref}` });
  return out;
}

/** One facet of a character, as the panel presents it. */
export function facetSegments(c: Character, facet: string): Segment[] {
  const out: Segment[] = [];
  const list = (label: string, items: string[]) => {
    if (!items.length) return;
    out.push({ text: label });
    items.forEach((t, i) => out.push({ text: `${i + 1}. ${t}` }));
  };

  switch (facet) {
    case 'who': {
      out.push({ text: `${c.name}. ${c.summary}` });
      if (c.epithets.length) out.push({ text: `Also called ${c.epithets.join(', ')}.` });
      c.bio.split('\n\n').forEach((para) => out.push({ text: para }));
      if (c.shloka) out.push(...shlokaSegments(c.shloka, `A verse associated with ${c.name}.`));
      if (c.trivia?.length) {
        out.push({ text: 'In Valmiki, and in later tellings.' });
        c.trivia.forEach((t) => out.push({ text: t }));
      }
      break;
    }
    case 'motivations':
      list(`What drove ${c.name}.`, c.motivations);
      break;
    case 'abilities':
      list(`The powers of ${c.name}.`, c.abilities);
      if (c.weapons?.length) out.push({ text: `Weapons: ${c.weapons.join(', ')}.` });
      break;
    case 'deeds':
      list(`What ${c.name} accomplished.`, c.accomplishments);
      break;
    case 'ending':
      out.push({ text: `How the story of ${c.name} closes.` });
      out.push({ text: c.ending.description });
      if (c.ending.killedBy) {
        const by = characterById.get(c.ending.killedBy);
        if (by) out.push({ text: `At the hand of ${by.name}.` });
      }
      break;
    case 'bonds':
      out.push({ text: `Who ${c.name} was bound to. Open a bond to hear its story.` });
      break;
  }
  return out;
}

/** The whole character, head to tail — the "read me this person" experience. */
export function characterSegments(c: Character): Segment[] {
  return [
    ...facetSegments(c, 'who'),
    ...facetSegments(c, 'motivations'),
    ...facetSegments(c, 'abilities'),
    ...facetSegments(c, 'deeds'),
    ...facetSegments(c, 'ending'),
  ];
}

export function eventSegments(e: StoryEvent): Segment[] {
  const out: Segment[] = [
    { text: `${e.title}. ${KANDA_NAME(e.kanda)}${e.location ? `, at ${e.location}` : ''}.` },
    { text: e.description },
  ];
  if (e.significance) out.push({ text: `Why it matters: ${e.significance}` });
  if (e.shloka) out.push(...shlokaSegments(e.shloka, 'The verse that tells it.'));
  const who = e.characterIds
    .map((id) => characterById.get(id)?.name)
    .filter(Boolean)
    .slice(0, 8);
  if (who.length) out.push({ text: `Present: ${who.join(', ')}.` });
  return out;
}

export function bondSegments(bond: Bond): Segment[] {
  const out: Segment[] = [
    { text: `${bond.a.name} and ${bond.b.name}.` },
  ];
  for (const br of bond.relations) {
    out.push({
      text: `${br.source.name} ${verbFor(br.relation.type)} ${br.target.name}. ${br.relation.label}.`,
    });
  }
  if (!bond.sharedEvents.length) {
    out.push({ text: 'Valmiki never sets them in the same scene.' });
  } else {
    out.push({
      text: `They appear together in ${bond.sharedEvents.length} ${
        bond.sharedEvents.length === 1 ? 'moment' : 'moments'
      }.`,
    });
    bond.sharedEvents.slice(0, 10).forEach((e) => out.push({ text: e.title }));
  }
  return out;
}
