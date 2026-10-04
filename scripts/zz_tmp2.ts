import { writeFileSync } from 'fs';
import { earlyEvents } from '../src/data/events/early';
import { middleEvents } from '../src/data/events/middle';
import { lateEvents } from '../src/data/events/late';
const events = [...earlyEvents, ...middleEvents, ...lateEvents].sort((a,b)=>a.order-b.order);
writeFileSync('C:/Users/Admin/AppData/Local/Temp/claude/events.txt', events.map(e=>`${e.order}\t${e.kanda}\t${e.sarga??'-'}\t${e.id}\t${e.title}\t[${e.characterIds.join(',')}]`).join('\n'));
