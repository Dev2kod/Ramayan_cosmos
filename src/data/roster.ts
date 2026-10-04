// The canonical roster. Ids here are the ONLY valid character ids in the graph.
// Each content module must cover exactly its own slice and may reference any id
// from this list in relations and events.

export const ROSTER = {
  // --- Module A: Ayodhya & Mithila (humans of the Ikshvaku and Videha lines) ---
  ayodhyaMithila: [
    'rama', 'sita', 'lakshmana', 'bharata', 'shatrughna',
    'dasharatha', 'kausalya', 'kaikeyi', 'sumitra', 'manthara',
    'urmila', 'mandavi', 'shrutakirti',
    'janaka', 'sunayana', 'kushadhwaja', 'sumantra', 'guha',
    'lava', 'kusha', 'shanta', 'rishyasringa',
    'aja', 'raghu', 'sagara', 'bhagiratha', 'harishchandra', 'ikshvaku',
  ],
  // --- Module B: Kishkindha (vanaras & bears) ---
  kishkindha: [
    'hanuman', 'sugriva', 'vali', 'tara', 'ruma', 'angada',
    'jambavan', 'nala', 'nila', 'sushena', 'kesari', 'anjana',
    'vayu', 'riksharaja', 'dadhimukha', 'gandhamadana', 'mainda', 'dvivida',
    'svayamprabha', 'shabari', 'sampati', 'jatayu',
  ],
  // --- Module C: Lanka (rakshasas) ---
  lanka: [
    'ravana', 'kumbhakarna', 'vibhishana', 'shurpanakha', 'mandodari',
    'indrajit', 'atikaya', 'akshayakumara', 'prahasta', 'maricha',
    'subahu', 'tataka', 'khara', 'dushana', 'trishira', 'kabandha',
    'viradha', 'trijata', 'sarama', 'malyavan', 'vidyujjihva',
    'sumali', 'kaikasi', 'vishrava', 'lankini', 'surasa', 'simhika',
    'maya', 'narantaka', 'devantaka', 'mahaparshva', 'kalanemi', 'dundubhi', 'mayavi', 'nikumbha',
  ],
  // --- Module D: Sages, devas, and the wider cosmos ---
  sagesDevas: [
    'valmiki', 'vishwamitra', 'vasishtha', 'agastya', 'bharadwaja',
    'atri', 'anasuya', 'gautama', 'ahalya', 'parashurama',
    'narada', 'matanga', 'sharabhanga', 'sutikshna', 'durvasa',
    'vishnu', 'brahma', 'shiva', 'indra', 'agni', 'varuna', 'yama',
    'surya', 'kubera', 'ganga', 'bhumi', 'lakshmi', 'parvati',
    'samudra', 'garuda', 'shesha', 'kamadhenu', 'menaka',
  ],
} as const;

export type RosterKey = keyof typeof ROSTER;

export const ALL_IDS: string[] = Object.values(ROSTER).flat() as string[];
