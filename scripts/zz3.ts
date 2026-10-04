import { writeFileSync } from 'fs';
import { ayodhyaMithila } from '../src/data/characters/ayodhya-mithila';
import { kishkindha } from '../src/data/characters/kishkindha';
import { lanka } from '../src/data/characters/lanka';
import { sagesDevas } from '../src/data/characters/sages-devas';
const chars = [ayodhyaMithila,kishkindha,lanka,sagesDevas].flatMap(m=>m.characters);
const out: string[] = [];
const wt = new Map<string,string[]>();
for (const c of chars){ if(!wt.has(c.wikiTitle)) wt.set(c.wikiTitle,[]); wt.get(c.wikiTitle)!.push(c.id); }
out.push('=== DUPLICATE wikiTitle ===');
for (const [k,v] of wt) if (v.length>1) out.push(`  "${k}" <- ${v.join(', ')}`);
out.push('=== wikiTitle vs name mismatch (heuristic) ===');
for (const c of chars) if (!c.wikiTitle.toLowerCase().includes(c.name.toLowerCase().split(' ')[0]) && !c.name.toLowerCase().includes(c.wikiTitle.toLowerCase().split(' ')[0])) out.push(`  ${c.id}: name="${c.name}" wikiTitle="${c.wikiTitle}"`);
out.push('=== SHLOKA REFS (char) ===');
for (const c of chars) if (c.shloka) out.push(`  ${c.id}\t${c.shloka.ref}\t${c.shloka.transliteration.replace(/\n/g,' ').slice(0,80)}`);
writeFileSync('C:/Users/Admin/AppData/Local/Temp/claude/w.txt', out.join('\n'));
