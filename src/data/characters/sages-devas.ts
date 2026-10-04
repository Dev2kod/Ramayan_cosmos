// Module D: Sages, devas, and the wider cosmos of the Valmiki Ramayana.
// Every shloka below was checked against the Sanskrit text hosted at
// valmikiramayan.net. Where a verse could not be confirmed verbatim, the
// `shloka` field is omitted rather than invented.

import type { DataModule } from '../types';

export const sagesDevas: DataModule = {
  characters: [
    {
      id: 'valmiki',
      name: 'Valmiki',
      sanskrit: 'वाल्मीकि',
      epithets: ['Adi Kavi', 'Maharshi', 'Pracetasa', 'Bhargava'],
      faction: 'sages',
      species: 'rishi',
      gender: 'male',
      kandas: ['bala', 'uttara'],
      importance: 4,
      summary: 'The first poet, who turned grief into metre and composed the twenty-four thousand verses of the Ramayana.',
      bio: `Valmiki lives in an ashrama on the bank of the Tamasa, a short walk from the Ganga, and the epic opens inside his hermitage rather than inside Ayodhya. In Bala Kanda sarga 1 he asks the wandering Narada a single question — is there a man alive who is at once virtuous, valorous, grateful, truthful and firm in vow? — and Narada answers with a compressed hundred-verse Ramayana, the samkshepa Ramayana. That conversation is the seed of the poem; everything else grows from it.

The poem's metre is born the next morning. Walking to the Tamasa to bathe, Valmiki watches a hunter shoot the male of a pair of mating krauncha birds. The female's cry pulls a curse out of him in perfectly balanced syllables — "maa nishhaada" — and he realises with astonishment that his sorrow (shoka) has fallen into verse (shloka). Brahma appears, tells him the speech was no accident but the god's own will, and commissions him to narrate Rama's story in that metre, promising that nothing he writes will be untrue. The epic is then composed in twenty-four thousand verses across six kandas and five hundred sargas.

In the Uttara Kanda Valmiki stops being the narrator and becomes a character. When Lakshmana abandons the pregnant Sita near his hermitage on Rama's orders, Valmiki goes to her, tells her he knew by his ascetic sight that she was blameless, and takes her in. He names and raises her twin sons, Kusha and Lava, teaches them the poem he has written, and sends them to sing it in twenty sargas a day at Rama's ashvamedha sacrifice — the only time in literature a poem is recited to its own protagonist by his unrecognised children.

At the climax he leads Sita into Rama's assembly and swears before the kings and sages, on the merit of his many thousand years of austerity, that the twins are Rama's sons and Sita is pure. When Sita instead calls on the Earth to take her back, Valmiki is the witness who is neither surprised nor consoled; his poem ends with the woman he sheltered gone and the king he praised left alone.`,
      motivations: [
        'To find and record the one living man in whom dharma, valour and truth are complete, which is the question he puts to Narada in the first verse of the epic.',
        'To obey Brahma\'s direct commission to compose Rama\'s life in the new shloka metre and to see the whole of it, public and hidden, by yogic sight.',
        'To shelter the defenceless: he takes in an abandoned, pregnant and unknown woman without asking her to justify herself.',
        'To force the truth about Sita into the open by training her sons to sing it in front of her husband\'s court.',
      ],
      abilities: [
        'Composed the first kavya in Sanskrit and invented the anushtubh shloka as a narrative metre, earning the title Adi Kavi.',
        'Possesses the yogic vision by which he perceives, without being told, that Sita is innocent and that she carries Rama\'s sons.',
        'Commands the merit of many thousand years of tapas, which he is willing to stake as a formal oath in Rama\'s assembly.',
        'Trains Kusha and Lava into perfect reciters able to sing the entire epic from memory, twenty sargas at a sitting, with accompaniment.',
      ],
      accomplishments: [
        'Composed the Ramayana in twenty-four thousand shlokas, six kandas and five hundred sargas, framed by his own dialogue with Narada.',
        'Uttered the maa nishhaada verse on the Tamasa bank, the first shloka in Sanskrit literature.',
        'Gave Sita refuge after her exile and performed the birth rites for Kusha and Lava in his ashrama.',
        'Sent the twins to Rama\'s ashvamedha, where their recital reveals their parentage and brings Rama face to face with what he did.',
        'Publicly vouched for Sita\'s purity on the strength of his accumulated austerity at the final assembly.',
      ],
      ending: {
        type: 'retirement',
        description: 'Valmiki remains in his hermitage; the epic leaves him after he has delivered both the poem and Sita\'s sons to Rama.',
      },
      shloka: {
        devanagari: 'मा निषाद प्रतिष्ठां त्वमगमः शाश्वतीः समाः ।\nयत्क्रौञ्चमिथुनादेकमवधीः काममोहितम् ॥',
        transliteration: 'mā niṣāda pratiṣṭhāṁ tvam agamaḥ śāśvatīḥ samāḥ |\nyat krauñca-mithunād ekam avadhīḥ kāma-mohitam ||',
        translation: 'Hunter, may you never find rest through all the endless years, for you killed one of this pair of krauncha birds while it was lost in love.',
        ref: '1.2.15',
        context: 'The first shloka ever spoken, uttered involuntarily when Valmiki sees a hunter shoot a mating krauncha bird by the Tamasa.',
      },
      trivia: [
        'Valmiki does not narrate his own past as a highway robber named Ratnakara who was reformed by the seven sages; that famous story comes from later Puranic and vernacular retellings, not from the Valmiki Ramayana.',
        'The epic is self-referential: in the Uttara Kanda the characters listen to the very poem the reader is reading, sung by Rama\'s own sons.',
        'Valmiki tells Sita that he knows by ascetic perception that she is innocent — he never asks her to prove it, unlike Rama.',
      ],
      wikiTitle: 'Valmiki',
    },
    {
      id: 'narada',
      name: 'Narada',
      sanskrit: 'नारद',
      epithets: ['Devarshi', 'Muni-pungava', 'Brahmaputra'],
      faction: 'sages',
      species: 'rishi',
      gender: 'male',
      kandas: ['bala', 'uttara'],
      importance: 3,
      summary: 'The divine sage whose answer to Valmiki\'s question is the compressed seed of the entire Ramayana.',
      bio: `Narada is the wandering brahmarshi who moves freely between the worlds and arrives at Valmiki's hermitage at the exact moment the poem needs to begin. Valmiki, described in the opening verse as devoted to austerity and recitation, asks him who in the present world is endowed with virtue, prowess, knowledge of dharma, gratitude, truthfulness and firmness of vow — sixteen qualities in all. Narada does not hesitate: such a man is rare, but he exists, and his name is Rama of the Ikshvaku line.

What follows across the first sarga is the samkshepa Ramayana, a hundred-verse summary of the whole epic from Rama's birth to his reign, delivered before a single event of the main narrative has been shown. It is the structural key to Valmiki's poem: the audience is told the ending — the exile, the abduction, the bridge, Ravana's death, the eleven thousand years of Rama's rule — before the story starts, so that the poem's interest lies in how rather than what.

Narada reappears in the Uttara Kanda as the sage who supplies Rama with the backstory of his enemies and with the cosmology of the kingdom he now rules. It is also Narada who, in the epic's closing movement, is associated with the sequence of events that draws Rama out of the world. His role throughout is that of an informant with perfect knowledge and no stake of his own.

He is the one figure in the epic who stands entirely outside its causality. He fights nothing, loses nothing and wants nothing; he arrives, tells the truth, and leaves by the sky path to the world of the gods.`,
      motivations: [
        'To answer truthfully any question of dharma put to him, which is why Valmiki, seeking the perfect man, goes to him rather than to anyone else.',
        'To circulate knowledge between the three worlds, carrying news and genealogy from the devas to the rishis and back.',
        'To set in motion the composition of the Ramayana by naming Rama as the answer to Valmiki\'s question.',
      ],
      abilities: [
        'Travels at will between the mortal world and the world of the gods by the sky path.',
        'Possesses complete knowledge of past and future, enabling him to summarise events that have not yet happened in the epic\'s own chronology.',
        'Is a master of speech and the veena, able to compress an epic of twenty-four thousand verses into roughly a hundred.',
      ],
      accomplishments: [
        'Delivered the samkshepa Ramayana to Valmiki, the hundred-verse abstract that frames and seeds the entire poem.',
        'Named Rama as the one man in the world complete in the sixteen virtues Valmiki enumerated.',
        'Served throughout the epic as the sages\' and gods\' messenger, supplying genealogies and past histories that the narrative needs.',
      ],
      ending: {
        type: 'immortal',
        description: 'A deathless devarshi; he departs the hermitage by the sky path and continues his wandering between the worlds.',
      },
      shloka: {
        devanagari: 'तपःस्वाध्यायनिरतं तपस्वी वाग्विदां वरम् ।\nनारदं परिपप्रच्छ वाल्मीकिर्मुनिपुङ्गवम् ॥',
        transliteration: 'tapaḥ-svādhyāya-nirataṁ tapasvī vāgvidāṁ varam |\nnāradaṁ paripapraccha vālmīkir muni-puṅgavam ||',
        translation: 'The ascetic Valmiki questioned Narada, best among the eloquent, bull among sages, who was ever devoted to austerity and to the study of scripture.',
        ref: '1.1.1',
        context: 'The very first verse of the Ramayana, in which the poem begins as a question put by one sage to another.',
      },
      trivia: [
        'The Ramayana opens not with Rama but with Narada being asked a question, so the entire epic is formally an answer.',
        'Narada\'s hundred-verse summary gives away the ending in sarga 1, which tells us Valmiki never intended suspense to be the poem\'s engine.',
      ],
      wikiTitle: 'Narada',
    },
    {
      id: 'vishwamitra',
      name: 'Vishwamitra',
      sanskrit: 'विश्वामित्र',
      epithets: ['Kaushika', 'Brahmarshi', 'Gadhi-putra', 'Maharshi'],
      faction: 'sages',
      species: 'rishi',
      gender: 'male',
      kandas: ['bala'],
      importance: 4,
      summary: 'The warrior-king who clawed his way to brahmarshi-hood by austerity, and who takes the boy Rama out of Ayodhya to make him a hero.',
      bio: `Vishwamitra was born Kaushika, son of Gadhi and king of a wide kingdom, and his transformation is the longest personal history Valmiki gives any sage. Marching with his army, he was entertained at Vasishtha's hermitage, where the wish-fulfilling cow Shabala produced a feast for the entire host. Kaushika demanded the cow, was refused, and tried to seize her; Shabala brought forth armies of Pahlavas, Shakas and Yavanas from her own body and destroyed his force, and Vasishtha's brahma-danda consumed every celestial weapon Kaushika could throw. The lesson he drew was absolute: "dhik balaṁ kṣatriya-balam" — a curse upon the strength of kshatriyas; brahminical power alone is strength. He abdicated and went into the forest to earn it.

The road was long and twice derailed. He first won the rank of rajarshi, then undertook to send king Trishanku to heaven in his mortal body; when the gods flung Trishanku back down, Vishwamitra froze him mid-fall and began constructing a rival southern heaven with its own constellations, forcing the devas to compromise. Later, at Pushkara, the apsara Menaka came to bathe in front of him and he lived with her for ten years, losing everything he had accumulated. He began again in the east, stood with arms raised and lived on air for a thousand years, refused to speak to Rambha except to curse her to stone, and finally held his breath and his tongue until smoke poured from his head and the three worlds burned. Brahma and the gods came to him and greeted him with the word he had spent lifetimes to hear: brahmarshi.

His entry into the main story is abrupt and decisive. He walks into Dasharatha's court and asks for Rama — a boy not yet sixteen — to guard his sacrifice from the rakshasas Maricha and Subahu. Dasharatha offers his whole army instead and is nearly cursed for it; Vasishtha has to tell him to let the boy go. On the road Vishwamitra gives Rama the mantras Bala and Atibala so that hunger, thirst and fatigue will never touch him, and then the whole arsenal of divine astras with their recall mantras. He makes Rama kill Tataka, a woman, over Rama's hesitation — the first hard moral instruction of the epic.

He then takes the brothers through Siddhashrama, tells them the stories of Ganga, Kartikeya, Sagara's sons and his own past, brings them to Ahalya for her liberation, and finally into Mithila, where he asks Janaka to show Rama the bow of Shiva. When the bow breaks he arranges the marriages of all four brothers, and then, his work complete, departs north to the Himalaya and out of the epic entirely.`,
      motivations: [
        'To obtain brahminical power after Vasishtha\'s brahma-danda annihilated his army, a humiliation he answers with millennia of austerity rather than war.',
        'To be acknowledged specifically as brahmarshi — nothing less satisfies him, and he rejects the ranks of rajarshi and maharshi along the way.',
        'To complete his sacrifice at Siddhashrama undisturbed, which requires a protector who can kill rakshasas without himself breaking his vow of non-violence.',
        'To forge Rama into the weapon the gods need against Ravana by arming him, training him and placing him in front of Shiva\'s bow at Mithila.',
      ],
      abilities: [
        'Possesses and can transfer the complete arsenal of divine astras, which he hands to Rama along with the mantras that recall them.',
        'Grants the mantras Bala and Atibala, which make their holder immune to hunger, thirst, fatigue and disfigurement in sleep.',
        'Built a parallel southern heaven with its own stars for the sake of Trishanku, compelling the devas to negotiate.',
        'Can curse with instant effect: he turned the apsara Rambha to stone for a thousand years for interrupting his penance.',
        'Sustained austerity standing with arms raised, living on air alone, for a thousand years at a stretch.',
      ],
      accomplishments: [
        'Won the title brahmarshi from Brahma himself and the acknowledgement of Vasishtha, the only kshatriya-born sage to do so.',
        'Took Rama and Lakshmana from Ayodhya, armed them with divine weapons, and oversaw the killing of Tataka, Subahu and the rout of Maricha.',
        'Brought Rama to Ahalya\'s ashrama, ending her long curse, and narrated to the brothers the histories of Ganga, Sagara and Kartikeya.',
        'Arranged the showing of Shiva\'s bow at Mithila and, after Rama broke it, negotiated the fourfold marriage of Dasharatha\'s sons to Janaka\'s and Kushadhwaja\'s daughters.',
        'Created the southern constellations and the alternative heaven in which Trishanku still hangs.',
      ],
      weapons: ['The full corpus of divine astras', 'Brahmastra', 'The mantras Bala and Atibala'],
      ending: {
        type: 'retirement',
        description: 'After the weddings at Mithila he blesses the party, takes leave of Dasharatha and Janaka, and departs north to the Himalaya; he does not appear again.',
      },
      shloka: {
        devanagari: 'कौसल्या सुप्रजा राम पूर्वा संध्या प्रवर्तते ।\nउत्तिष्ठ नरशार्दूल कर्तव्यं दैवमाह्निकम् ॥',
        transliteration: 'kausalyā suprajā rāma pūrvā sandhyā pravartate |\nuttiṣṭha nara-śārdūla kartavyaṁ daivam āhnikam ||',
        translation: 'Rama, Kausalya has a fine son in you. The eastern twilight is breaking. Rise, tiger among men, the morning rites must be performed.',
        ref: '1.23.2',
        context: 'Vishwamitra wakes Rama on the bank of the Sarayu on the first morning of the journey; the verse is recited daily as the Suprabhatam.',
      },
      trivia: [
        'Valmiki gives Vishwamitra a far longer backstory than he gives most of the devas: sargas 51 to 65 of the Bala Kanda are essentially his biography.',
        'His conflict with Vasishtha begins over a cow, Shabala, and ends with Vasishtha voluntarily calling him brahmarshi and making friendship.',
        'He orders Rama to kill Tataka despite her being a woman, arguing that a king must protect the people even at the cost of apparent cruelty — the epic\'s first ethical dilemma.',
      ],
      wikiTitle: 'Vishvamitra',
    },
    {
      id: 'vasishtha',
      name: 'Vasishtha',
      sanskrit: 'वसिष्ठ',
      epithets: ['Brahmarshi', 'Kulaguru', 'Purohita of the Ikshvakus', 'Maitravaruni'],
      faction: 'sages',
      species: 'rishi',
      gender: 'male',
      kandas: ['bala', 'ayodhya', 'yuddha', 'uttara'],
      importance: 4,
      summary: 'The hereditary preceptor of the Ikshvaku dynasty, whose counsel holds Ayodhya together through every crisis.',
      bio: `Vasishtha is the kulaguru of the Ikshvakus, a brahmarshi whose authority in Ayodhya is institutional rather than occasional. He officiates at Dasharatha's ashvamedha and putrakameshti, the sacrifices that produce Rama and his brothers; he performs the brothers' naming and initiation; and he is the voice the king turns to whenever the law is unclear. When Dasharatha refuses to send the boy Rama with Vishwamitra, it is Vasishtha who tells him plainly that Vishwamitra is not to be refused, that Rama is safer with him than with an army, and that the boy will come back greater than he went.

His long feud with Vishwamitra is the epic's most sustained portrait of brahminical power. When king Kaushika tried to take his cow Shabala by force, Vasishtha did not fight: he told the cow to create armies, and when Kaushika's hundred sons attacked, the sage reduced them to ash with a syllable. Kaushika's every divine missile — agneya, varuna, brahma — was swallowed by Vasishtha's staff, and this defeat is what sent Kaushika into the forest. Centuries later, when the gods ask Vasishtha to accept the man he humbled, he propitiates willingly, calls Vishwamitra brahmarshi without reservation, and makes friendship with him. The feud ends because the elder man concedes with grace.

In the Ayodhya Kanda he is the still point in a collapsing court. He manages Dasharatha's funeral rites, holds the kingdom in trust, and then confronts Bharata, who refuses the throne. At Chitrakuta he argues with Rama directly, citing dynastic law and the authority of ancestors, and loses — Rama will not break his father's word. It is Vasishtha who then regulates the arrangement by which Rama's sandals rule Ayodhya from Nandigrama.

He returns at the end to crown Rama, to officiate at the ashvamedha where Kusha and Lava sing, and to urge Rama to accept Sita back when Valmiki vouches for her. Across four kandas he is never wrong about the law and never once able to prevent the suffering it produces.`,
      motivations: [
        'To preserve the unbroken dharma and continuity of the Ikshvaku line, which he has served as priest for generations.',
        'To demonstrate that brahminical power needs no army, which he proves by annihilating Vishwamitra\'s forces without raising a weapon.',
        'To keep Ayodhya from dissolving into lawlessness after Dasharatha\'s death by holding the throne in trust and managing the succession.',
        'To reconcile rather than to win: he accepts Vishwamitra as an equal the moment the gods ask it of him.',
      ],
      abilities: [
        'Wields the brahma-danda, the brahmin\'s staff, which absorbs every divine astra directed at it including the brahmastra.',
        'Owns Shabala (Kamadhenu\'s daughter), the wish-fulfilling cow who can produce food for an army or armies themselves.',
        'Master of every Vedic sacrificial rite, including the ashvamedha and the putrakameshti that gave Dasharatha his sons.',
        'Can reduce opponents to ash by utterance alone, as he did to Vishwamitra\'s hundred sons.',
        'Commands the moral authority to overrule the king of Ayodhya in open court.',
      ],
      accomplishments: [
        'Conducted the putrakameshti sacrifice through which Rama, Bharata, Lakshmana and Shatrughna were born.',
        'Overruled Dasharatha and sent Rama away with Vishwamitra, the decision that begins the hero\'s career.',
        'Defeated king Kaushika\'s entire army and arsenal with the brahma-danda, and later conferred on him the title brahmarshi.',
        'Held the kingdom of Ayodhya in trust after Dasharatha\'s death and installed Rama\'s sandals at Nandigrama as the legal sovereign.',
        'Performed Rama\'s coronation after the return from Lanka and officiated at the ashvamedha in the Uttara Kanda.',
      ],
      ending: {
        type: 'retirement',
        description: 'He outlives the generation he serves, officiating at Rama\'s last sacrifices; Valmiki gives him no death.',
      },
      shloka: {
        devanagari: 'ततः प्रसादितो देवैर्वसिष्ठो जपतां वरः ।\nसख्यं चकार ब्रह्मर्षिरेवमस्त्विति चाब्रवीत् ॥',
        transliteration: 'tataḥ prasādito devair vasiṣṭho japatāṁ varaḥ |\nsakhyaṁ cakāra brahmarṣir evam astv iti cābravīt ||',
        translation: 'Then Vasishtha, best of those who chant, being propitiated by the gods, made friendship with the brahmarshi and said, "So be it."',
        ref: '1.65.25',
        context: 'The end of the long Vasishtha-Vishwamitra feud, when Vasishtha accepts his old enemy as a brahmarshi and an equal.',
      },
      trivia: [
        'Vasishtha wins his war with Vishwamitra without ever striking a blow; his only weapon is a wooden staff.',
        'He is the one person in the Ayodhya Kanda who argues Rama out of nothing — Rama refuses even his guru rather than break Dasharatha\'s word.',
      ],
      wikiTitle: 'Vasishtha',
    },
    {
      id: 'agastya',
      name: 'Agastya',
      sanskrit: 'अगस्त्य',
      epithets: ['Kumbhayoni', 'Maitravaruni', 'Drinker of the Ocean', 'Lord of the South'],
      faction: 'sages',
      species: 'rishi',
      gender: 'male',
      kandas: ['aranya', 'yuddha', 'uttara'],
      importance: 4,
      summary: 'The sage who tamed the Dandaka forest and armed Rama with Vishnu\'s bow, inexhaustible quivers and the Brahmastra.',
      bio: `Agastya holds the south the way Vasishtha holds Ayodhya. Before Rama ever enters the Dandaka, the sage has already made it habitable: he destroyed the rakshasas Vatapi and Ilvala, who killed brahmins by serving one of them as a goat-meal and then calling him out of the guest's belly — Agastya digested Vatapi before he could be summoned, and burned Ilvala with a glance. By his power the forest south of the Vindhyas became a place where ascetics could live, and by his command the Vindhya mountain itself stopped growing and bowed, holding that posture until he should return.

Rama, Sita and Lakshmana reach his ashrama in the Aranya Kanda after passing through his brother's hermitage. Agastya receives them, speaks of Sita's devotion with unusual warmth, and then does the single most consequential thing any sage does for Rama: he arms him. He gives him the great bow of Vishnu, gold-and-diamond adorned, made by Vishvakarma; the unfailing arrow of Brahma, bright as the sun; two quivers given by Indra whose arrows never run out; and a golden-hilted sword in a silver scabbard. He tells Rama to accept them for victory as Indra accepts the thunderbolt. It is Agastya who then directs the three of them to Panchavati on the Godavari — the place where Shurpanakha will find them and the abduction will begin.

In the Yuddha Kanda Agastya returns at the decisive moment. Rama, exhausted and facing Ravana, is taught by him the Aditya-hridaya, the hymn to the sun, and told to recite it to destroy his enemy. Rama does so and kills Ravana that day. After the war it is Agastya again who narrates to Rama the long prehistory of the rakshasas — Sumali, Malyavan, Vishrava, Ravana's boons and crimes — and the childhood of Hanuman, filling in everything the main narrative withheld.

He is the only figure who functions as armourer, strategist, historian and chaplain to Rama at different points, and he does all of it without ever leaving the south.`,
      motivations: [
        'To make the southern forests safe for ascetics, which is why he destroyed Vatapi and Ilvala and curbed the Vindhya range.',
        'To place in Rama\'s hands the specific weapons that the killing of Ravana will require, having foreseen the need.',
        'To preserve and transmit the true history of the rakshasa clans, which he alone narrates to Rama after the war.',
        'To uphold the hospitality and protection owed to those who enter his region, which he extends to Rama, Sita and Lakshmana immediately.',
      ],
      abilities: [
        'Drank the entire ocean dry so the gods could find the Kalakeya asuras hiding in it.',
        'Digested the rakshasa Vatapi before he could resurrect inside his stomach, and destroyed Ilvala with his anger.',
        'Commanded the Vindhya mountain to cease growing and bow down, which it has not undone.',
        'Holds and can bestow the celestial arsenal: Vishnu\'s bow, Brahma\'s unfailing arrow, Indra\'s inexhaustible quivers.',
        'Taught Rama the Aditya-hridaya, the solar hymn recited immediately before Ravana\'s death.',
      ],
      accomplishments: [
        'Gave Rama the Vaishnava bow, the Brahmastra arrow, two inexhaustible quivers and a golden sword at his Dandaka hermitage.',
        'Directed Rama to settle at Panchavati on the Godavari, the hinge on which the entire abduction turns.',
        'Instructed Rama in the Aditya-hridaya on the final day of the war with Ravana.',
        'Narrated to Rama in the Uttara Kanda the origins of Ravana, the Pulastya line and the boons that made the rakshasas invincible.',
        'Cleared the Dandaka of Vatapi and Ilvala and made the south habitable for ascetics.',
      ],
      weapons: ['Vishnu\'s bow', 'Brahmastra', 'Indra\'s inexhaustible quivers'],
      ending: {
        type: 'immortal',
        description: 'Remains in his southern hermitage and in the sky as the star Canopus; he outlasts the narrative.',
      },
      shloka: {
        devanagari: 'इदं दिव्यं महच्चापं हेमवज्रविभूषितम् ।\nवैष्णवं पुरुषव्याघ्र निर्मितं विश्वकर्मणा ॥',
        transliteration: 'idaṁ divyaṁ mahac cāpaṁ hema-vajra-vibhūṣitam |\nvaiṣṇavaṁ puruṣa-vyāghra nirmitaṁ viśvakarmaṇā ||',
        translation: 'Tiger among men, this is the great celestial bow of Vishnu, adorned with gold and diamond, fashioned by Vishvakarma.',
        ref: '3.12.32',
        context: 'Agastya hands Rama the Vaishnava bow at his hermitage in the Dandaka, arming him for everything that follows.',
      },
      trivia: [
        'In Valmiki the ocean-drinking and the Vindhya episode are told as established reputation, not narrated as scenes — the epic assumes you already know who Agastya is.',
        'Agastya is the source of the Uttara Kanda\'s rakshasa genealogy; without him the epic would never explain where Ravana came from.',
      ],
      wikiTitle: 'Agastya',
    },
    {
      id: 'bharadwaja',
      name: 'Bharadwaja',
      sanskrit: 'भरद्वाज',
      epithets: ['Sage of Prayaga', 'Son of Brihaspati'],
      faction: 'sages',
      species: 'rishi',
      gender: 'male',
      kandas: ['ayodhya', 'uttara'],
      importance: 3,
      summary: 'The sage of Prayaga who sends Rama to Chitrakuta and later feasts Bharata\'s whole army with a miracle.',
      bio: `Bharadwaja's hermitage stands at Prayaga, where the Ganga and Yamuna meet, and it is the first real waystation of the exile. Rama, Sita and Lakshmana arrive there after crossing the Ganga with Guha's help. Bharadwaja receives Rama with the madhuparka and water of formal welcome, tells him he has long known of his coming, and offers him the hermitage itself as a place to spend the fourteen years. Rama declines — it is too close to Ayodhya, and the citizens would find him. The sage then names the place that will define the next stage of the story: go to Chitrakuta, he says, a mountain rich in honey, roots and fruit, ten kroshas from here, haunted by peacocks and elephants and loved by sages.

His second appearance is the epic's one scene of pure abundance. Bharata comes south with the entire population of Ayodhya — the army, the elephants, the ministers, the three queens — to beg Rama to return. Bharadwaja, having satisfied himself that Bharata's intention is honest and not fratricidal, invites that whole host to stay the night and, by the power of his austerity, produces a reception for them: palaces, couches, food, drink, music and attendants conjured out of nothing. The army wakes the next morning unable to tell whether it happened.

He also fills a navigational role no one else does: it is Bharadwaja who describes to Bharata the exact route to Chitrakuta, and in the Yuddha Kanda it is at his hermitage that Rama halts on the return flight, sends Hanuman ahead to Nandigrama, and learns that the fourteen years have been fulfilled to the day.

Of all the forest sages he is the one most clearly a householder of great resources, a host rather than an ascetic of extremities.`,
      motivations: [
        'To offer hospitality of the highest order to anyone who reaches Prayaga, whether a lone exile or an army of thousands.',
        'To test and then vindicate Bharata\'s motives, satisfying himself that he comes to restore Rama and not to harm him.',
        'To guide Rama to a dwelling place far enough from Ayodhya to make the exile real.',
      ],
      abilities: [
        'Can conjure, by the merit of his austerities, a complete royal reception — buildings, food, drink, music and attendants — for an entire army.',
        'Possesses foreknowledge; he tells Rama he already knew of his banishment and arrival.',
        'Keeps exact account of time, informing Rama on the return journey that the fourteenth year has just ended.',
      ],
      accomplishments: [
        'Received Rama at Prayaga on the first stage of the exile and directed him to Chitrakuta.',
        'Entertained Bharata\'s entire army and the court of Ayodhya for a night through miraculous hospitality.',
        'Gave Bharata precise directions to Rama\'s hermitage at Chitrakuta.',
        'Granted Rama a boon on the return from Lanka — that the trees along the road to Ayodhya bear fruit and honey out of season.',
      ],
      ending: {
        type: 'retirement',
        description: 'Remains at his hermitage at Prayaga, outside the violence of the narrative.',
      },
      shloka: {
        devanagari: 'रात्र्यां तु तस्यां व्युष्टायां भरद्वाजोऽब्रवीदिदम् ।\nमधुमूलफलोपेतं चित्रकूटं व्रजेति ह ॥',
        transliteration: 'rātryāṁ tu tasyāṁ vyuṣṭāyāṁ bharadvājo \'bravīd idam |\nmadhu-mūla-phalopetaṁ citrakūṭaṁ vrajeti ha ||',
        translation: 'When that night had passed, Bharadwaja said this: go to Chitrakuta, which abounds in honey, roots and fruit.',
        ref: '2.54.38',
        context: 'Bharadwaja sends Rama from Prayaga to the mountain where the exile will properly begin.',
      },
      trivia: [
        'Bharadwaja\'s feast for Bharata\'s army is the single largest display of ascetic power in the epic, and it is used for hospitality rather than war.',
      ],
      wikiTitle: 'Bharadwaja',
    },
    {
      id: 'atri',
      name: 'Atri',
      sanskrit: 'अत्रि',
      epithets: ['Saptarshi', 'Brahma-manasa-putra', 'Husband of Anasuya'],
      faction: 'sages',
      species: 'rishi',
      gender: 'male',
      kandas: ['ayodhya', 'aranya'],
      importance: 2,
      summary: 'One of the seven great sages, aged and radiant, whose hermitage is the last stop before the Dandaka.',
      bio: `Atri is one of the saptarshis and one of Brahma's mind-born sons, and when Rama reaches him at the close of the Ayodhya Kanda he is extremely old — Valmiki describes him as worn by age and austerity, honoured as a father by the three travellers. His hermitage marks the boundary between the settled country and the true wilderness: everything beyond it is Dandaka.

He receives Rama as a guest with full honours and then does something unusual. He calls his wife Anasuya and tells Rama about her at length: that she had once ended a drought of ten years by her own power, producing roots and fruit and making the Jahnavi flow; that she had compressed ten nights into one for the sake of the gods' work. Having established who she is, he sends Sita to her. The meeting that follows is the only extended conversation between two women in the epic, and it produces the celestial garments and ornaments that Sita will be wearing when Ravana takes her.

Atri's own role is brief and entirely framing. He hosts, he vouches for his wife, he blesses the departure. But the placement matters: Valmiki puts a very old, very holy married couple directly before the forest where a marriage will be broken.`,
      motivations: [
        'To extend the full honour of hospitality to Rama as the son of Dasharatha and as a man walking into danger.',
        'To bring Sita into Anasuya\'s company, knowing what his wife can give her.',
        'To maintain a hermitage of refuge at the edge of the Dandaka for those entering the deep forest.',
      ],
      abilities: [
        'One of the seven rishis, holding the accumulated power of an entire lifetime of austerity.',
        'Commands the reverence of the gods, who treat his hermitage as sacred ground.',
        'Possesses the discernment to recognise Rama\'s nature and Sita\'s worth on sight.',
      ],
      accomplishments: [
        'Hosted Rama, Sita and Lakshmana at the threshold of the Dandaka forest and blessed their journey.',
        'Introduced Sita to Anasuya, leading to the gift of the unfading garments and ornaments.',
        'Sustained a hermitage that the ascetics of the region treat as a centre of refuge.',
      ],
      ending: {
        type: 'retirement',
        description: 'Left in his hermitage at the forest\'s edge, already very old when the epic meets him.',
      },
      trivia: [
        'Valmiki introduces Anasuya through Atri\'s own praise of her, a rare instance of a sage describing his wife\'s powers as greater than his own achievements.',
      ],
      wikiTitle: 'Atri',
    },
    {
      id: 'anasuya',
      name: 'Anasuya',
      sanskrit: 'अनसूया',
      epithets: ['Pativrata', 'Wife of Atri', 'The Enviless One'],
      faction: 'sages',
      species: 'rishi',
      gender: 'female',
      kandas: ['ayodhya'],
      importance: 3,
      summary: 'Atri\'s wife, who ended a ten-year drought by her own power and gave Sita garments and ornaments that never fade.',
      bio: `Anasuya — the name means "free from envy" — is old, wrinkled, her limbs shaking with age, and she is one of the most powerful beings Rama's party encounters. Atri tells Rama her history before the meeting: when the world suffered a drought of ten years and all life was failing, she produced roots and fruit by her austerity and caused the Jahnavi to flow again; and once, for the sake of a divine purpose, she compressed ten nights into a single night. She is a pativrata of the highest order, and Valmiki uses her to state the epic's ideal of wifely dharma directly rather than through plot.

Sita comes to her, bows, and introduces herself. Anasuya speaks to her about the duty of a wife to her husband and then asks Sita to tell the story of her own marriage — the svayamvara, the bow, Janaka's conditions. Sita narrates it, and it is the only time in the epic that Sita gives her own account of her life in her own voice at length.

Then Anasuya gives her gifts: a celestial garland, a garment, ornaments, and a fragrant unguent. She tells Sita these are divine, that they will remain unfading and ever-fresh, and that anointed with them she will attend upon her husband in the forest as Lakshmi attends Vishnu. Sita puts them on. She is still wearing those unfading ornaments when Ravana carries her away, and it is ornaments of this kind that she drops from the sky onto the Rishyamuka hill, which Sugriva later shows to Rama — the gift becomes the thread by which she is found.

Anasuya then asks her to stay the night, and in the morning blesses the three of them into the forest. She never appears again.`,
      motivations: [
        'To uphold and transmit the dharma of a devoted wife, which she teaches Sita directly rather than by example alone.',
        'To equip Sita for a forest life that will strip her of every comfort, with gifts that cannot wear out.',
        'To hear Sita\'s own story, which she asks for and listens to without interruption.',
      ],
      abilities: [
        'Ended a ten-year universal drought by her austerity, producing roots and fruit and causing the Jahnavi to flow.',
        'Compressed ten nights into a single night for the purpose of the gods.',
        'Can produce celestial garments, ornaments and unguents that never fade, soil or wither.',
      ],
      accomplishments: [
        'Gave Sita the divine garland, garment, ornaments and body-unguent that she wears for the rest of the epic.',
        'Drew from Sita the full narration of her marriage, the only such account in Sita\'s own voice.',
        'Relieved a decade-long drought that threatened all living beings.',
      ],
      ending: {
        type: 'retirement',
        description: 'Blesses Sita and the brothers at dawn and remains at Atri\'s hermitage; the epic does not return to her.',
      },
      shloka: {
        devanagari: 'इदं दिव्यं वरं माल्यं वस्त्रमाभरणानि च ।\nअङ्गरागं च वैदेहि महार्हमनुलेपनम् ॥',
        transliteration: 'idaṁ divyaṁ varaṁ mālyaṁ vastram ābharaṇāni ca |\naṅgarāgaṁ ca vaidehi mahārham anulepanam ||',
        translation: 'This divine and excellent garland, these garments and ornaments, and this costly body-cream and unguent, O Vaidehi, are for you.',
        ref: '2.118.18',
        context: 'Anasuya gives Sita the unfading celestial gifts she will still be wearing when Ravana abducts her.',
      },
      trivia: [
        'Valmiki does not tell the famous story of Anasuya reducing the trinity to infants when they came to test her chastity; that episode belongs to Puranic and later devotional literature, not to the Ramayana.',
        'The ornaments Anasuya gives are the physical link that later leads Rama to Sugriva: jewels Sita drops are the only trace of her abduction.',
      ],
      wikiTitle: 'Anasuya',
    },
    {
      id: 'gautama',
      name: 'Gautama',
      sanskrit: 'गौतम',
      epithets: ['Maharshi', 'Husband of Ahalya', 'Sage of the Mithila forest'],
      faction: 'sages',
      species: 'rishi',
      gender: 'male',
      kandas: ['bala'],
      importance: 3,
      summary: 'The sage who caught Indra in his own form, unmanned him with a curse, and condemned Ahalya to invisibility.',
      bio: `Gautama's hermitage stands in a beautiful, long-abandoned grove on the road from Siddhashrama to Mithila, and Vishwamitra tells its story as the brothers pass. Indra, knowing the sage's hours, took Gautama's exact form and came to Ahalya while her husband was away performing his rites. Valmiki is blunt about what followed: Ahalya recognised the king of the gods in the disguise and consented out of curiosity about the lord of the devas, and afterwards told him to leave quickly and protect her from her husband.

Gautama returned, blazing with the power of his austerity, and met Indra leaving. His curse on Indra is the bitterest line in the Bala Kanda: because you took my form and did what must not be done, you shall be fruitless — and Indra's testicles fell to the ground on the spot. Then he turned to his wife. She would live there for many thousands of years, eating air, without food, lying in ashes, burning with remorse, and — crucially — unseen by all living beings. He abandoned the hermitage and went to the Himalaya to practise austerity.

The curse carries its own release. Gautama tells her that when Rama, Dasharatha's son, comes to that terrible forest, she will be purified by receiving him as a guest, and that free of greed and delusion she will regain her own form in his presence. That is exactly what happens: Vishwamitra brings Rama and Lakshmana, Rama enters the grove, Ahalya becomes visible and the brothers take her feet with joy. Gautama returns from the Himalaya, accepts her, and the two of them worship Rama together before resuming their life.

Gautama is thus both the harshest judge in the epic and the one who writes the terms of his own reconciliation into the sentence.`,
      motivations: [
        'To punish the violation of his household and the theft of his own form, which he treats as a crime against dharma itself.',
        'To impose a penance on Ahalya proportionate to her consent rather than to kill or abandon her outright.',
        'To leave a door open: the curse is written from the start to end at Rama\'s arrival.',
        'To return and resume his marriage once the term is served, which he does without further reproach.',
      ],
      abilities: [
        'Commands a curse of immediate physical effect, as shown when Indra is unmanned at the instant of the utterance.',
        'Can render a person invisible to all living beings and sustain them for thousands of years on air alone.',
        'Possesses the foresight to specify the precise future circumstance of release.',
        'Holds austerity powerful enough that Indra had to disguise himself rather than face him.',
      ],
      accomplishments: [
        'Cursed Indra, king of the gods, into fruitlessness for violating his household.',
        'Bound Ahalya in an invisible penance of many thousand years, with release conditioned on Rama\'s arrival.',
        'Returned from the Himalaya at the appointed time, accepted Ahalya back, and honoured Rama alongside her.',
      ],
      ending: {
        type: 'retirement',
        description: 'Reunited with Ahalya after her release, he resumes life in the restored hermitage.',
      },
      shloka: {
        devanagari: 'मम रूपं समास्थाय कृतवानसि दुर्मते ।\nअकर्तव्यमिदं यस्माद्विफलस्त्वं भविष्यति ॥',
        transliteration: 'mama rūpaṁ samāsthāya kṛtavān asi durmate |\nakartavyam idaṁ yasmād viphalas tvaṁ bhaviṣyati ||',
        translation: 'Evil-minded one, since you assumed my form and did this thing that must not be done, you shall become fruitless.',
        ref: '1.48.27',
        context: 'Gautama curses Indra at the door of his own hermitage, moments after catching him leaving.',
      },
      trivia: [
        'Valmiki is explicit that Ahalya recognised Indra and consented; the version in which she is wholly deceived is a later softening.',
      ],
      wikiTitle: 'Gautama Maharishi',
    },
    {
      id: 'ahalya',
      name: 'Ahalya',
      sanskrit: 'अहल्या',
      epithets: ['Wife of Gautama', 'The Invisible One'],
      faction: 'sages',
      species: 'human',
      gender: 'female',
      kandas: ['bala'],
      importance: 3,
      summary: 'Gautama\'s wife, condemned to invisibility and ashes for thousands of years, restored by Rama\'s arrival.',
      bio: `Ahalya was made by Brahma and was, Valmiki says, unequalled in the world for beauty. Indra desired her, and knowing that Gautama had gone out for the morning rites, came to her wearing the sage's exact form. Valmiki does not excuse her: she knew it was the lord of the gods and, curious about him, consented; afterwards she told him to go quickly and to protect her and himself from her husband.

Gautama caught Indra leaving and cursed them both. Ahalya's sentence was to live in that hermitage for many thousands of years, eating nothing but air, lying in ashes, burning with remorse and invisible to every living being — not stone, but unseen. The grove emptied; Gautama went to the Himalaya; and for an age Ahalya existed there without a body anyone could perceive, doing penance in a place nobody entered.

Vishwamitra brings Rama and Lakshmana to that grove on the way to Mithila and tells them to enter. Rama goes in. The term of the curse ends, Ahalya becomes visible to them, and in a gesture that reverses every expectation of rank and shame, the two princes take the dust of her feet. The gods rain flowers; the gandharvas play; Gautama returns from the Himalaya and accepts her, free of greed and delusion, and the two of them honour Rama and resume their life together.

Her episode is placed deliberately. It is the first time in the epic that Rama's mere presence restores someone, and it is the first statement of a theme that will shape the ending: a woman whose purity is doubted, a husband who withdraws, and a public restoration.`,
      motivations: [
        'In the fateful moment, curiosity about Indra, the lord of the gods, which Valmiki names as her reason.',
        'Afterwards, to burn through the curse by continuous remorse and austerity rather than to escape it.',
        'To be restored to her husband, which is the single condition on which the whole penance is framed.',
      ],
      abilities: [
        'Survived many thousands of years without food, sustained by air alone and lying in ashes.',
        'Endured complete invisibility to all living beings without losing her ascetic resolve.',
        'Was fashioned by Brahma with a beauty described as having no equal in any world.',
      ],
      accomplishments: [
        'Completed a penance of many thousand years and emerged purified at the exact term her husband had set.',
        'Was the first being liberated by Rama in the epic, before any rakshasa was killed.',
        'Received the reverence of Rama and Lakshmana, who touched her feet, and was taken back by Gautama without reproach.',
      ],
      ending: {
        type: 'liberation',
        description: 'Freed from Gautama\'s curse by Rama\'s arrival, she regains her form and is reunited with her husband.',
      },
      shloka: {
        devanagari: 'वायुभक्षा निराहारा तप्यन्ती भस्मशायिनी ।\nअदृश्या सर्वभूतानामाश्रमेऽस्मिन्निवत्स्यसि ॥',
        transliteration: 'vāyu-bhakṣā nirāhārā tapyantī bhasma-śāyinī |\nadṛśyā sarva-bhūtānām āśrame \'smin nivatsyasi ||',
        translation: 'Living on air, without food, burning in penance, lying in ashes, unseen by all beings, you shall dwell in this hermitage.',
        ref: '1.48.30',
        context: 'Gautama pronounces the terms of Ahalya\'s curse — invisibility, not petrification.',
      },
      trivia: [
        'Valmiki does not narrate Ahalya being turned to stone and revived by the touch of Rama\'s foot; in the Bala Kanda she is made invisible and lives on air, and it is Rama\'s arrival, not his foot, that releases her. The stone version comes from later retellings.',
        'Rama and Lakshmana touch her feet, not the other way round — the epic restores her status completely.',
      ],
      wikiTitle: 'Ahalya',
    },
    {
      id: 'parashurama',
      name: 'Parashurama',
      sanskrit: 'परशुराम',
      epithets: ['Bhargava', 'Jamadagnya', 'Rama with the Axe', 'Destroyer of the Kshatriyas'],
      faction: 'sages',
      species: 'rishi',
      gender: 'male',
      kandas: ['bala'],
      importance: 3,
      summary: 'The brahmin-warrior who blocked the wedding party with Vishnu\'s bow and was emptied of his power by Rama.',
      bio: `Parashurama arrives on the road back from Mithila like a storm front. The wedding party of Dasharatha is travelling home when the wind turns violent, the earth shakes, the trees fall, and the sages see Jamadagni's son standing in the way with matted hair, the axe on his shoulder and a bow in his hand, terrible as Shiva at the burning of Tripura. He had taken a vow after Kartavirya killed his father and had, Valmiki records, cleared the earth of kshatriyas twenty-one times, giving the conquered world away to Kashyapa and retiring to Mahendra.

He has heard that a bow was broken at Mithila. He brings the other one. The two bows, he tells Rama, were made by Vishvakarma: one was Shiva's, which Rama has just destroyed, and the other is Vishnu's, which Parashurama's family holds. He challenges Rama to string it and fit an arrow, and if he can, to fight. Dasharatha begs him to spare his son; Parashurama ignores the king entirely and speaks only to Rama.

Rama takes the bow and the arrow from his hand. He strings it — the text says angrily, and with the ease of a man who has done it before — and nocks the shaft. The world goes numb; and before Rama has released anything, the Bhargava is already drained. Valmiki's phrase is precise: nirviryo jamadagnyo 'sau, "that son of Jamadagni became powerless," and he simply looked at Rama. Rama then asks where to discharge the unstoppable arrow, since it may not be wasted; Parashurama offers his own accumulated ascetic worlds, and Rama destroys those instead of his life. The brahmin bows, circumambulates him, and leaves for Mahendra.

It is the epic's quietest transfer of power. No blow is struck. One Rama puts down a bow and another picks it up.`,
      motivations: [
        'To avenge his father Jamadagni\'s killing, the vow that led him to clear the earth of kshatriyas twenty-one times.',
        'To test whether the breaking of Shiva\'s bow at Mithila was real power or an accident, by producing Vishnu\'s bow as a counter-trial.',
        'To preserve brahminical supremacy over the warrior order, the principle his entire career asserts.',
        'When defeated, to yield the merit of his austerities rather than his life, so that he may continue in penance.',
      ],
      abilities: [
        'Wields the great axe given him by Shiva and is counted unmatched among armed beings.',
        'Carries the Vaishnava bow, the twin of the bow Rama broke, both made by Vishvakarma.',
        'Destroyed the kshatriya order twenty-one times over and conquered the whole earth, which he then gifted to Kashyapa.',
        'Possesses accumulated ascetic worlds — merit so solid it can be targeted and destroyed by a weapon.',
      ],
      accomplishments: [
        'Cleared the earth of kshatriyas twenty-one times and gave the conquered world to Kashyapa.',
        'Confronted Rama on the road from Mithila with Vishnu\'s bow and the challenge to string it.',
        'Recognised Rama\'s divinity the moment he was drained of his power, and withdrew without fighting.',
        'Surrendered the worlds won by his austerity to Rama\'s arrow and retired to Mahendra.',
      ],
      weapons: ['Parashu (the axe of Shiva)', 'The Vaishnava bow'],
      ending: {
        type: 'retirement',
        description: 'Stripped of his ascetic worlds by Rama\'s arrow, he circumambulates Rama in respect and withdraws to the Mahendra mountain.',
      },
      shloka: {
        devanagari: 'जडीकृते तदा लोके रामे वरधनुर्धरे ।\nनिर्वीर्यो जामदग्न्योऽसौ रामो राममुदैक्षत ॥',
        transliteration: 'jaḍīkṛte tadā loke rāme vara-dhanur-dhare |\nnirvīryo jāmadagnyo \'sau rāmo rāmam udaikṣata ||',
        translation: 'When the world was stunned and Rama held that great bow, the son of Jamadagni, that Rama, stripped of his strength, looked up at Rama.',
        ref: '1.76.11',
        context: 'The moment Parashurama loses his power — not in combat, but simply because Rama has strung the Vaishnava bow.',
      },
      trivia: [
        'Valmiki gives Parashurama no verbal duel with Lakshmana; the long exchange of taunts between them is a feature of Tulsidas\'s Ramcharitmanas, not of the Valmiki Ramayana.',
        'Rama never strikes him. Parashurama is defeated at the instant the bow is strung, before the arrow is released.',
      ],
      wikiTitle: 'Parashurama',
    },
    {
      id: 'matanga',
      name: 'Matanga',
      sanskrit: 'मतंग',
      epithets: ['Sage of Rishyamuka', 'Guru of Shabari'],
      faction: 'sages',
      species: 'rishi',
      gender: 'male',
      kandas: ['kishkindha', 'aranya'],
      importance: 2,
      summary: 'The sage whose curse makes Rishyamuka the one place in the world Vali cannot enter.',
      bio: `Matanga does not appear alive in the narrative, but his curse determines the entire geography of the Kishkindha Kanda. When Vali killed the buffalo-demon Dundubhi, he flung the enormous carcass away with such force that it sailed a yojana through the air and fell near Matanga's hermitage on the Rishyamuka hill, and drops of blood from the body spattered the sage's grove and the sage's own person.

Matanga, finding his ashrama defiled, cursed the unknown thrower: whoever had done this would die the instant he set foot on Rishyamuka, and so would any of his followers — and he told the vanaras living there to leave on pain of becoming stone. That is why Sugriva, hunted across the world by his brother, is safe on exactly one hill, and why Vali, who can go anywhere and defeat anyone, stops at its boundary. The alliance that wins the war exists because of that curse: Rama finds Sugriva on Rishyamuka precisely because it is the only place Sugriva can stand.

Matanga is also the preceptor of Shabari. Rama and Lakshmana, directed by Kabandha, come to her ashrama on the Pampa, where she has been waiting for them since her teachers ascended to heaven. She shows them the groves and waters that Matanga's disciples made, tells them the sages left their bodies and went up by the power of their austerity, and having at last served Rama, enters the fire and follows them.

A sage who never speaks on stage thus provides the hero with both his key ally and his last forest host.`,
      motivations: [
        'To protect the sanctity of his hermitage, which the blood of Dundubhi\'s carcass defiled.',
        'To punish the unknown strongman whose violence reached into an ascetic\'s grove.',
        'To leave behind a community of disciples, including Shabari, who would maintain the Pampa hermitage after him.',
      ],
      abilities: [
        'Pronounced a curse so binding that Vali, who defeats everyone in the epic, will not step over its line.',
        'Could threaten the resident vanaras with petrification, clearing the hill entirely.',
        'Raised disciples whose austerity carried them bodily to heaven.',
      ],
      accomplishments: [
        'Made the Rishyamuka hill permanently forbidden to Vali, creating the sanctuary where Sugriva survives his exile.',
        'Founded the Pampa hermitage whose groves and waters Shabari shows to Rama.',
        'Was the guru of Shabari, who waited years at his ashrama for Rama\'s arrival.',
      ],
      ending: {
        type: 'ascension',
        description: 'He and his disciples left their bodies by the power of their austerity and went to heaven before Rama reached the Pampa.',
      },
      trivia: [
        'Matanga never appears as a living character, yet his curse is the structural reason Rama and Sugriva ever meet.',
      ],
      wikiTitle: 'Matanga (sage)',
    },
    {
      id: 'sharabhanga',
      name: 'Sharabhanga',
      sanskrit: 'शरभंग',
      epithets: ['Sage of the Dandaka', 'The Fire-Entering Ascetic'],
      faction: 'sages',
      species: 'rishi',
      gender: 'male',
      kandas: ['aranya'],
      importance: 2,
      summary: 'The sage who refused Indra\'s chariot until he had seen Rama, then burned his body in his own sacrificial fire.',
      bio: `Rama, Sita and Lakshmana come to Sharabhanga's hermitage in the Dandaka straight after killing Viradha, who with his dying breath told them to go there. They arrive to find Indra himself present, mounted in a chariot that does not touch the ground, attended by gandharvas and apsaras, conversing with the sage. Indra withdraws before Rama comes close, telling the gods he will see him later, after his task is accomplished.

Sharabhanga explains what they interrupted. Indra had come to take him to the world of Brahma, which his austerities had won, but he had refused to go — because he had heard that Rama was near, and he would not leave until he had seen him. Having seen him, he tells Rama that he now gives him all the worlds his penance has earned, and that his own business is finished.

Then he does the thing the episode is remembered for. He kindles the sacrificial fire, makes the offering of ghee with the proper mantras, and walks into it. The fire takes his hair, his skin, his aged bones, his flesh and his blood; and out of the ash-heap rises a youth, radiant as flame, who passes upward through the worlds of the sages and the gods and reaches Brahma. Valmiki describes the whole transformation in three verses without a word of lament.

Before leaving he directs Rama to Sutikshna, and the ascetics of the Dandaka immediately come to Rama in a body to ask for protection from the rakshasas — the appeal that commits Rama to the war in the forest.`,
      motivations: [
        'To see Rama before departing the world, a wish strong enough to make him refuse Indra\'s chariot to Brahma-loka.',
        'To transfer the worlds won by his austerity to Rama rather than enjoy them himself.',
        'To leave the body deliberately and by fire, at the moment of his own choosing, once his last purpose was served.',
      ],
      abilities: [
        'Earned by austerity the right of entry to the world of Brahma, which Indra came personally to deliver.',
        'Could give away accumulated ascetic worlds as a gift.',
        'Entered the sacrificial fire and emerged from the ashes in a young, radiant body fit to ascend.',
      ],
      accomplishments: [
        'Refused Indra\'s invitation to heaven in order to wait for Rama.',
        'Bestowed on Rama all the worlds his penance had won.',
        'Directed Rama onward to Sutikshna, continuing the chain of sages that guides the exile.',
        'Ascended through the worlds of the rishis to Brahma\'s abode in a body renewed from his own funeral fire.',
      ],
      ending: {
        type: 'ascension',
        description: 'Entered his own sacrificial fire in Rama\'s presence, rose from the ashes as a youth of flame, and ascended to the world of Brahma.',
      },
      shloka: {
        devanagari: 'ततोऽग्निं सुसमाधाय हुत्वा चाज्येन मन्त्रवित् ।\nशरभंगो महातेजाः प्रविवेश हुताशनम् ॥',
        transliteration: 'tato \'gniṁ susamādhāya hutvā cājyena mantra-vit |\nśarabhaṅgo mahātejāḥ praviveśa hutāśanam ||',
        translation: 'Then, having duly kindled the fire and offered ghee into it, the knower of mantras, the greatly lustrous Sharabhanga, entered the flame.',
        ref: '3.5.39',
        context: 'Sharabhanga leaves his body by fire in front of Rama, having waited only to see him.',
      },
      trivia: [
        'This is the only onstage self-immolation of an ascetic in the Ramayana, and it is presented as a triumph, not a tragedy.',
      ],
      wikiTitle: 'Sharabhanga',
    },
    {
      id: 'sutikshna',
      name: 'Sutikshna',
      sanskrit: 'सुतीक्ष्ण',
      epithets: ['Disciple of Agastya', 'Sage of the Dandaka'],
      faction: 'sages',
      species: 'rishi',
      gender: 'male',
      kandas: ['aranya'],
      importance: 2,
      summary: 'The forest ascetic who offers Rama heaven, is refused, and sends him on to Agastya.',
      bio: `Sharabhanga's last instruction sends Rama to Sutikshna, and the brothers find him seated on an altar, matted-haired, covered in dirt, deep in meditation. He receives Rama with evident delight and says that he has been waiting: by his own austerities he had won the highest worlds, including Indra's, and he had refused to go up to them because he wanted Rama to come first. Now, he says, take these worlds; they are yours, with all the regions that my penance has gained.

Rama declines, in the courteous formula he uses throughout the Dandaka — he will win his own worlds — and asks instead for somewhere to stay. Sutikshna warns him about the hermitage: the beasts of the forest come at night and frighten those who sleep there. Rama, undisturbed, stays the night anyway, and in the morning takes leave.

His second appearance is the pivot of the forest chapters. After Rama has spent ten years touring the hermitages of the Dandaka, he returns to Sutikshna and asks where Agastya lives. Sutikshna gives him the directions — first to Agastya's brother's ashrama, then onward — and it is that road that leads Rama to the bow of Vishnu and then to Panchavati.

Sutikshna is also the sage in whose presence the famous exchange occurs where Sita, uneasy, warns Rama about carrying weapons among ascetics, foreseeing that arms attract violence. The scene is placed right after they leave him.`,
      motivations: [
        'To meet Rama before leaving the world, for which he postponed entry into the heavens he had already won.',
        'To give Rama the fruit of his austerities, which Rama refuses.',
        'To direct Rama safely through a forest whose dangers he knows intimately, and onward to Agastya.',
      ],
      abilities: [
        'Won by austerity the highest worlds, including Indra\'s, and could transfer them at will.',
        'Lives unharmed among the predators of the Dandaka, which trouble visitors but not him.',
        'Holds detailed knowledge of the forest\'s hermitages and routes, which he gives to Rama.',
      ],
      accomplishments: [
        'Deferred his own ascent to heaven in order to receive Rama at his hermitage.',
        'Offered Rama all the worlds won by his penance.',
        'Directed Rama to Agastya, setting up the arming of Rama with the Vaishnava bow.',
      ],
      ending: {
        type: 'retirement',
        description: 'Remains at his Dandaka hermitage with the worlds he has won still waiting for him.',
      },
      trivia: [
        'Three sages in a row — Sharabhanga, Sutikshna and others — offer Rama their accumulated heavens, and he refuses every one.',
      ],
      wikiTitle: 'Sutikshna',
    },
    {
      id: 'durvasa',
      name: 'Durvasa',
      sanskrit: 'दुर्वास',
      epithets: ['The Irascible Sage', 'Atreya'],
      faction: 'sages',
      species: 'rishi',
      gender: 'male',
      kandas: ['uttara'],
      importance: 2,
      summary: 'The short-tempered sage whose demand to see Rama at once forces Lakshmana to break a vow and die.',
      bio: `Durvasa appears once, at the very end, and his visit is the mechanism by which the epic kills Lakshmana. Time himself, in the form of an ascetic, had come to Rama with a message from Brahma and had imposed a single condition before delivering it: whoever interrupted their private conversation must be executed. Rama agreed and posted Lakshmana at the door as the guard who would let no one in.

Durvasa arrived while the two were still talking and demanded to see Rama immediately. Lakshmana explained the situation and asked him to wait. Durvasa, whose anger in the tradition is instantaneous, told him that if he were not announced that very moment he would curse Rama, Bharata, the whole Raghu line and the entire kingdom to destruction on the spot. Lakshmana weighed one life against a dynasty and a people, went in, and announced him.

Rama heard the sage, satisfied him, and then had to face what his own guard had done. Vasishtha and the ministers advised that abandonment is equivalent to death for the righteous, and Rama accordingly cast Lakshmana off rather than execute him. Lakshmana went to the Sarayu, stopped his breath in yoga, and was taken up bodily to heaven by Indra — and from that moment Rama has no reason left to remain in the world. The departure of the whole Ikshvaku house follows within a few sargas.

Durvasa never intends any of this. He simply wants his meal and his audience, and the kingdom nearly ends because of it.`,
      motivations: [
        'To be received immediately upon arrival, which he regards as the minimum owed to a sage.',
        'To break a thousand-year fast at Rama\'s house, having completed an immense austerity.',
        'To punish any perceived slight at once, without weighing consequence.',
      ],
      abilities: [
        'Carries a curse of such potency that the threat alone forces the second man of the kingdom to choose death.',
        'Capable of austerity lasting a thousand years, which is what he has just completed when he arrives.',
        'His displeasure is understood by everyone present to be capable of destroying an entire dynasty and its people.',
      ],
      accomplishments: [
        'Forced Lakshmana to break the condition imposed by Kala and thereby set in motion the end of Rama\'s reign.',
        'Was received and satisfied by Rama despite the catastrophe his arrival caused.',
      ],
      ending: {
        type: 'immortal',
        description: 'Leaves Ayodhya satisfied; he has no end within the epic.',
      },
      trivia: [
        'Durvasa does nothing hostile in the Ramayana — he merely insists on being announced, and that insistence costs Lakshmana his life.',
      ],
      wikiTitle: 'Durvasa',
    },
    {
      id: 'vishnu',
      name: 'Vishnu',
      sanskrit: 'विष्णु',
      epithets: ['Narayana', 'Chakrayudha', 'Padmanabha', 'Purushottama'],
      faction: 'devas',
      species: 'deva',
      gender: 'male',
      kandas: ['bala', 'yuddha', 'uttara'],
      importance: 4,
      summary: 'The god who agrees to divide himself fourfold and be born as Dasharatha\'s sons in order to kill Ravana.',
      bio: `The whole plot of the Ramayana begins with a loophole. Ravana had asked Brahma for immunity from gods, danavas, gandharvas, yakshas and rakshasas, and had not bothered to name men or animals, considering them beneath contempt. When the oppressed devas come to Brahma, he points out the omission, and at that moment Vishnu arrives on Garuda, conch and discus and mace in hand, clothed in yellow. The gods ask him directly to take on the work: be born as the son of Dasharatha, lord of Ayodhya, dividing yourself fourfold among his three wives, and become a man to kill the thorn of the worlds.

Vishnu agrees in the plainest possible words — put away fear, it is well with you; I shall kill Ravana in battle with his sons and grandsons, his ministers, kinsmen and allies — and promises to live in the world of men for eleven thousand years. Then, lotus-eyed, he makes himself fourfold and chooses Dasharatha as his father. The divine payasa that comes out of Dasharatha's putrakameshti fire and is shared among Kausalya, Kaikeyi and Sumitra is the vehicle of that descent.

The epic then almost entirely forgets this. Through six kandas Rama is a man: he grieves, doubts, exhausts himself, weeps for Sita, is wounded, and never claims divinity. Only after Ravana falls, in the Yuddha Kanda, do the gods assemble and Brahma tell him to his face what he is — Narayana, the wielder of the discus, the boar of the single tusk, the refuge of all beings — and Rama answers that he has always thought of himself as a man, Rama son of Dasharatha.

Vishnu is thus the epic's premise rather than its presence. He is also the owner of the two bows made by Vishvakarma — one entrusted to Shiva and broken at Mithila, one kept in the Bhargava line and strung by Rama on the road home.`,
      motivations: [
        'To relieve the worlds of Ravana, whose boon made him invulnerable to every class of being except men and beasts.',
        'To honour the devas\' request, made at Brahma\'s prompting, by accepting mortal birth and its full limitations.',
        'To uphold dharma in person, taking on grief, exile and loss rather than destroying Ravana from outside.',
      ],
      abilities: [
        'Can divide himself into four portions and be born simultaneously as four brothers.',
        'Bears the conch, discus and mace, and rides Garuda.',
        'Rests on the serpent Shesha, who descends with him as Lakshmana.',
        'Accepts mortal birth so completely that the incarnation does not know what it is until told.',
      ],
      accomplishments: [
        'Accepted the devas\' petition and took birth as Rama, Bharata, Lakshmana and Shatrughna.',
        'Destroyed Ravana with his sons, kinsmen, ministers and allies, exactly as promised before the descent.',
        'Lived among men for eleven thousand years as he had undertaken to the gods.',
        'Owner of the Vaishnava bow with which Parashurama was stripped of his ascetic worlds.',
      ],
      weapons: ['Sudarshana Chakra', 'Panchajanya conch', 'Kaumodaki mace', 'The Vaishnava bow'],
      ending: {
        type: 'immortal',
        description: 'The avatara returns at the close of the Uttara Kanda when Rama enters the Sarayu and reassumes his Vaishnava form.',
      },
      shloka: {
        devanagari: 'त्वां नियोक्ष्यामहे विष्णो लोकानां हितकाम्यया ।\nराज्ञो दशरथस्य त्वमयोध्याधिपतेर्विभोः ॥',
        transliteration: 'tvāṁ niyokṣyāmahe viṣṇo lokānāṁ hita-kāmyayā |\nrājño daśarathasya tvam ayodhyādhipater vibhoḥ ||',
        translation: 'Vishnu, for the welfare of the worlds we appoint you to this task: become the son of king Dasharatha, the mighty lord of Ayodhya.',
        ref: '1.15.19',
        context: 'The devas petition Vishnu to incarnate as Dasharatha\'s son because Ravana\'s boon left men out.',
      },
      trivia: [
        'Rama does not know he is Vishnu for most of the epic; when Brahma tells him in Yuddha Kanda 117 he replies that he considers himself a man, the son of Dasharatha.',
        'Ravana\'s invulnerability omits humans and animals, which is why the army that destroys him is made of men, vanaras and bears.',
      ],
      wikiTitle: 'Vishnu',
    },
    {
      id: 'brahma',
      name: 'Brahma',
      sanskrit: 'ब्रह्मा',
      epithets: ['Pitamaha', 'Svayambhu', 'Chaturmukha', 'Prajapati'],
      faction: 'devas',
      species: 'deva',
      gender: 'male',
      kandas: ['bala', 'aranya', 'yuddha', 'uttara'],
      importance: 4,
      summary: 'The grandfather of the worlds, whose boons create the epic\'s monsters and whose words close its last doubt.',
      bio: `Brahma is the source of nearly every problem in the Ramayana and of its solutions. He granted Ravana, after ten thousand years of austerity culminating in the offering of nine of his own heads, immunity from gods, danavas, gandharvas, yakshas, rakshasas and serpents; he put Kumbhakarna to sleep for six months at a stretch when Saraswati, at the devas' request, twisted his request for indra-asana into nidra-asana; he gave Indrajit the Brahmastra and the chariot that vanishes; he gave Maricha, Khara and Kabandha their forms or their terms. When the gods complain about Ravana, it is Brahma who notices the omission in the boon and sends them to Vishnu.

He is also the one who commissions the poem. After the krauncha incident he appears in Valmiki's hermitage, tells him the verse came by his own will, and instructs him to compose Rama's story — guaranteeing that whatever he writes, known or unknown, will be true, and that the Ramayana will last as long as mountains and rivers remain on earth.

His decisive intervention comes after Ravana's death. Rama, having recovered Sita, repudiates her in front of the army, and she enters the fire. Brahma then leads the assembled gods and speaks the speech that ends the ambiguity: you are Narayana, the glorious lord who wields the discus, the single-tusked boar, the imperishable Brahman, the refuge of all beings — and Sita is Lakshmi, and you are Vishnu. Agni rises from the flames with Sita unburnt, and Rama takes her back.

Brahma appears once more at the end, at the bank of the Sarayu, to receive Rama into the heavens with his brothers and the whole of Ayodhya behind him.`,
      motivations: [
        'To honour austerity wherever it is performed, which obliges him to grant boons to rakshasas as readily as to sages.',
        'To preserve the order of the worlds, which he does by engineering loopholes into the very boons he grants.',
        'To ensure Rama\'s story is composed and preserved, for which he commissions Valmiki directly.',
        'To reveal Rama\'s nature to Rama himself at the moment the revelation is most needed.',
      ],
      abilities: [
        'Grants boons that no other power can revoke, including Ravana\'s immunity and Indrajit\'s weapons.',
        'Is the source of the Brahmastra, the weapon of last resort used by Indrajit, Rama and others.',
        'Guarantees the truth of Valmiki\'s poem, including events Valmiki did not witness.',
        'Can reveal the divine identity of an incarnation and be believed.',
      ],
      accomplishments: [
        'Granted Ravana the boon that makes the entire plot necessary, and spotted the omission of men that makes it possible.',
        'Commissioned the Ramayana from Valmiki and guaranteed its truth and permanence.',
        'Declared Rama to be Narayana and Sita to be Lakshmi before the assembled armies after the war.',
        'Received Rama and his brothers into heaven at the Sarayu at the end of the Uttara Kanda.',
      ],
      ending: {
        type: 'immortal',
        description: 'Presides to the end of the epic, receiving Rama back into his Vishnu-nature at the Sarayu.',
      },
      shloka: {
        devanagari: 'भवान्नारायणो देवः श्रीमांश्चक्रायुधः प्रभुः ।\nएकशृङ्गो वराहस्त्वं भूतभव्यसपत्नजित् ॥',
        transliteration: 'bhavān nārāyaṇo devaḥ śrīmāṁś cakrāyudhaḥ prabhuḥ |\nekaśṛṅgo varāhas tvaṁ bhūtabhavya-sapatnajit ||',
        translation: 'You are the god Narayana, the glorious lord who wields the discus; you are the single-tusked boar, conqueror of the foes of what has been and what will be.',
        ref: '6.117.13',
        context: 'Brahma tells Rama who he is, immediately after the fire ordeal and before Agni returns Sita.',
      },
      trivia: [
        'Brahma grants the boons that create Ravana, Kumbhakarna and Indrajit, and then has to arrange their destruction — the epic treats his impartiality as a structural flaw in the cosmos.',
      ],
      wikiTitle: 'Brahma',
    },
    {
      id: 'shiva',
      name: 'Shiva',
      sanskrit: 'शिव',
      epithets: ['Mahadeva', 'Rudra', 'Tryambaka', 'Pinakin', 'Nilakantha'],
      faction: 'devas',
      species: 'deva',
      gender: 'male',
      kandas: ['bala', 'yuddha', 'uttara'],
      importance: 3,
      summary: 'The god whose bow nobody could lift until Rama broke it, and whose head caught the falling Ganga.',
      bio: `Shiva enters the Ramayana mostly through objects and consequences. The bow that decides Sita's marriage is his: a weapon given long ago to Janaka's ancestor Devarata after Shiva, enraged at being left out of Daksha's sacrifice, had terrified the gods with it and then been pacified. By Janaka's time it was kept in an eight-wheeled iron chest that five thousand men dragged into the assembly. Janaka set it as the bride-price for Sita, and kings came and could not stir it. Rama lifted it as if in play, bent it, strung it, and broke it at the middle with a crack that sounded like a mountain splitting and felled everyone present except Janaka, Vishwamitra and the two brothers.

The other great Shiva episode is the descent of the Ganga, narrated by Vishwamitra on the road to Mithila. Bhagiratha's austerity brought the river down from heaven, but the earth could not take the impact. Shiva stood and received her on his head; the proud river, who had meant to sweep him into the underworld, was lost in the thickets of his matted hair for years until he released her in seven streams. Only then could the waters reach the ashes of Sagara's sixty thousand sons.

In the war Shiva's presence is indirect but constant: the Pashupata, the weapons his line supplies to Ravana, and the pillar of ascetic merit that stands behind Ravana's power — Ravana is his devotee, and the shaking of Kailasa is told in the Uttara Kanda, where Shiva pins him under the mountain with a toe and later releases him, giving him the sword Chandrahasa and the name "Ravana," the one who made the worlds scream.

He is a god the epic treats with enormous respect and rarely puts on stage.`,
      motivations: [
        'To absorb what the world cannot survive, whether the Ganga\'s fall or the poison of the churning.',
        'To honour genuine devotion regardless of the devotee\'s nature, which is why Ravana receives both his sword and his name from him.',
        'To test, through the bow entrusted to the Videha line, who is fit to be called the greatest of archers.',
      ],
      abilities: [
        'Bore the entire descending Ganga on his head and held her in his matted hair until she submitted.',
        'Owns the Pinaka bow, so heavy that no king of the earth could lift it from its chest.',
        'Pinned the Kailasa-shaking Ravana beneath the mountain with the pressure of one toe.',
        'Grants the Chandrahasa sword and the unmatched astras of his own line.',
      ],
      accomplishments: [
        'Received the falling Ganga and released her in seven streams, making Bhagiratha\'s mission possible.',
        'Entrusted the Pinaka to the ancestors of Janaka, where it became the test that won Sita for Rama.',
        'Subdued Ravana under Kailasa and afterwards gave him the sword Chandrahasa and his name.',
      ],
      weapons: ['Pinaka', 'Trishula', 'Pashupatastra', 'Chandrahasa (given to Ravana)'],
      ending: {
        type: 'immortal',
        description: 'Eternal; present among the gods who attend Rama after the war.',
      },
      shloka: {
        devanagari: 'आरोपयित्वा मौर्वीं च पूरयामास वीर्यवान् ।\nतद्बभञ्ज धनुर्मध्ये नरश्रेष्ठो महायशाः ॥',
        transliteration: 'āropayitvā maurvīṁ ca pūrayām āsa vīryavān |\ntad babhañja dhanur madhye nara-śreṣṭho mahāyaśāḥ ||',
        translation: 'Having fastened the string and drawn it, the mighty one, best of men and of great renown, broke that bow in the middle.',
        ref: '1.67.17',
        context: 'Rama breaks Shiva\'s Pinaka in Janaka\'s assembly, winning Sita.',
      },
      trivia: [
        'Valmiki does not have Rama worship Shiva before building the bridge or establish a lingam at Rameshwaram; that episode belongs to later Puranic and regional tradition.',
        'The bow is not broken by strength alone — Rama strings it first, which nobody else had managed even to lift.',
      ],
      wikiTitle: 'Shiva',
    },
    {
      id: 'indra',
      name: 'Indra',
      sanskrit: 'इन्द्र',
      epithets: ['Shakra', 'Sahasraksha', 'Vajrapani', 'Purandara', 'Devaraja'],
      faction: 'devas',
      species: 'deva',
      gender: 'male',
      kandas: ['bala', 'aranya', 'kishkindha', 'yuddha', 'uttara'],
      importance: 3,
      summary: 'King of the gods: Vali\'s father, Ahalya\'s seducer, Indrajit\'s defeated captive, and the one who revives Rama\'s army.',
      bio: `Indra is the most compromised god in the epic and the most useful. He is the father of Vali, whom he gave the golden chain that halved any opponent's strength in battle, and the husband-figure behind the Ahalya disaster: he took Gautama's form to lie with her, was caught leaving, and was cursed to fruitlessness on the spot, his testicles falling to the earth. The gods had to graft a ram's into him to restore him. Valmiki tells this story in full, through Vishwamitra, as a warning placed at the door of Mithila.

He is beaten badly, twice. Ravana's son Meghanada fought him in the sky, bound him with maya and carried him to Lanka as a prisoner; Brahma had to come and ransom him, and it is from that victory that Meghanada took the name Indrajit, conqueror of Indra. Indra's reputation never recovers — the epic measures Indrajit's power by what he did to Indra, not the reverse.

Yet in the war he is indispensable. He sends his own chariot with Matali as charioteer so that Rama, fighting on foot, can face Ravana mounted; he sends the celestial armour and the Brahma-weapon; and when the war ends he grants Rama a boon and uses it to raise every vanara and bear killed in the fighting, restoring them whole and healed. He also carries Lakshmana bodily to heaven at the end, and he is the god to whom Sharabhanga and Sutikshna refuse the heavens they have earned.

The quivers Agastya gives Rama are Indra's, and the inexhaustibility of Rama's arrows is therefore Indra's gift too.`,
      motivations: [
        'To preserve the sovereignty of the devas, which Ravana\'s boon has effectively suspended.',
        'To support Rama materially in the war, since the gods cannot fight Ravana themselves.',
        'Desire, which in the Ahalya episode overrides every consideration of dharma and costs him his potency.',
        'To protect his son Vali, for which he gives him the golden chain that drains his opponents\' strength.',
      ],
      abilities: [
        'Wields the vajra and commands the storm.',
        'Can grant chariots, armour, charioteers and inexhaustible quivers to mortals.',
        'Used his boon after the war to resurrect every slain vanara and bear in Rama\'s army at once.',
        'Can bestow protective talismans such as Vali\'s golden chain, which transfers half an opponent\'s strength.',
      ],
      accomplishments: [
        'Sent Matali with his own celestial chariot to Rama for the final duel with Ravana.',
        'Restored to life all the vanaras and bears killed in the war against Lanka.',
        'Fathered Vali and equipped him with the chain that made him unbeatable in single combat.',
        'Supplied the two inexhaustible quivers that Agastya later gave to Rama.',
        'Carried Lakshmana to heaven in his own body after his death by the Sarayu.',
      ],
      weapons: ['Vajra', 'Airavata', 'The celestial chariot driven by Matali'],
      ending: {
        type: 'immortal',
        description: 'Continues as king of the gods, his sovereignty restored by Ravana\'s death.',
      },
      shloka: {
        devanagari: 'गौतमेनैवमुक्तस्य स रोषेण महात्मना ।\nपेततुर्वृषणौ भूमौ सहस्राक्षस्य तत्क्षणात् ॥',
        transliteration: 'gautamenaivam uktasya sa roṣeṇa mahātmanā |\npetatur vṛṣaṇau bhūmau sahasrākṣasya tat-kṣaṇāt ||',
        translation: 'Spoken to thus in fury by the great-souled Gautama, the testicles of the thousand-eyed one fell to the earth that very instant.',
        ref: '1.48.28',
        context: 'Indra pays for the Ahalya episode immediately, in the harshest curse in the Bala Kanda.',
      },
      trivia: [
        'Indrajit gets his name from defeating and capturing Indra; the king of the gods is a benchmark of weakness in the war chapters and a benefactor outside them.',
      ],
      wikiTitle: 'Indra',
    },
    {
      id: 'agni',
      name: 'Agni',
      sanskrit: 'अग्नि',
      epithets: ['Pavaka', 'Hutashana', 'Jataveda', 'Witness of the Worlds'],
      faction: 'devas',
      species: 'deva',
      gender: 'male',
      kandas: ['bala', 'aranya', 'yuddha'],
      importance: 3,
      summary: 'The fire-god who carries every sacrifice, declines to burn Sita, and hands her back to Rama declaring her blameless.',
      bio: `Agni is the mouth of every sacrifice in the epic — the putrakameshti that produces Rama, Dasharatha's ashvamedha, Sharabhanga's self-immolation, the daily rites of the forest hermitages — and the medium by which anything offered reaches the gods. Valmiki calls him the witness of the worlds, the one being present at every oath and every falsehood.

His decisive moment comes after Ravana's death. Rama, having retaken Lanka and recovered Sita, speaks to her publicly and coldly: he has fought for his honour, not for her; she has lived in another man's house; she may go where she pleases. Sita asks Lakshmana to build a pyre, circumambulates Rama, calls on Agni as the witness who knows the conduct of all beings and asks him to protect her if she has never turned her mind from Rama, and walks into the fire in front of the whole army.

Agni will not take her. He rises out of the pyre in his own body, carrying her, unscorched, her garlands and ornaments unburnt and her red garment undimmed, and sets her before Rama with a sentence that is the shortest vindication in the poem: eshaa te raama vaidehii paapam asyaam na vidyate — here is your Vaidehi, Rama; there is no sin in her. He then recites her conduct in Lanka under Ravana, under threat and under temptation, and tells Rama she must be taken back and never reproached. Rama accepts her and says he had never doubted her, but that the world needed to see it.

In the Aranya Kanda Agni is also the keeper of the real Sita: before the abduction Rama is said to have entrusted her to Fire and left an illusory Sita in her place — which is why the fire returns the one he received.`,
      motivations: [
        'To carry every offering to its destination and so sustain the mechanism of sacrifice.',
        'To act as the impartial witness of all conduct, which is precisely what Sita appeals to.',
        'To refuse to injure the blameless, even when a public ordeal demands it.',
      ],
      abilities: [
        'Consumes and conveys every sacrificial offering to the gods.',
        'Perceives the inner conduct of all beings, being present in every hearth and every rite.',
        'Can appear in bodily form, step out of a pyre and carry a person unharmed from it.',
        'Burned the whole of Lanka when Hanuman\'s tail was set alight, sparing only Sita and Vibhishana\'s house.',
      ],
      accomplishments: [
        'Returned Sita unburnt to Rama and declared publicly that there was no sin in her.',
        'Delivered the divine payasa from Dasharatha\'s putrakameshti that brought about Rama\'s birth.',
        'Spared Hanuman from his own flames in Lanka while consuming the city.',
        'Received Sharabhanga\'s body and returned him as a radiant youth fit for Brahma\'s world.',
      ],
      ending: {
        type: 'immortal',
        description: 'Eternal; withdraws after restoring Sita and returning to his place among the gods.',
      },
      shloka: {
        devanagari: 'अब्रवीत्तु तदा रामं साक्षी लोकस्य पावकः ।\nएषा ते राम वैदेही पापमस्यां न विद्यते ॥',
        transliteration: 'abravīt tu tadā rāmaṁ sākṣī lokasya pāvakaḥ |\neṣā te rāma vaidehī pāpam asyāṁ na vidyate ||',
        translation: 'Then the fire, the witness of the world, said to Rama: here is your Vaidehi, Rama; no sin is found in her.',
        ref: '6.118.5',
        context: 'Agni rises bodily from the pyre carrying Sita unharmed and returns her to Rama.',
      },
      trivia: [
        'In Valmiki the fire does not test Sita at all — it simply refuses to touch her, and Agni carries her out himself. The ordeal proves nothing to the gods; it is staged for the army and the world.',
        'Rama says afterwards that he never doubted her and acted only so that the people would not say he took back a woman out of attachment.',
      ],
      wikiTitle: 'Agni',
    },
    {
      id: 'varuna',
      name: 'Varuna',
      sanskrit: 'वरुण',
      epithets: ['Lord of the Waters', 'Pashi', 'Jaleshvara', 'Guardian of the West'],
      faction: 'devas',
      species: 'deva',
      gender: 'male',
      kandas: ['bala', 'yuddha', 'uttara'],
      importance: 2,
      summary: 'Lord of the waters and of oaths, whose noose binds and whose domain Rama threatens to dry up.',
      bio: `Varuna is the sovereign of the waters and the guardian of the western quarter, and in the epic's logic he is the deity behind the sea that stands between Rama and Lanka. When Rama lies for three nights in prayopavesha on the shore, fasting on a bed of darbha grass to compel a passage, it is the lordship of the waters he is petitioning; when no answer comes he rises in fury, tells Lakshmana to bring his bow and his venom-like arrows, and declares that he will dry the ocean up so the vanaras can walk across on foot. The sea only yields at that point.

Varuna is also the possessor of the Varunastra, one of the great elemental weapons that Vishwamitra transfers to Rama in the Bala Kanda along with the Agneya, the Vayavya and the rest, each with the mantra that recalls it. In the war these weapons are used on both sides; the rain-weapon and the fire-weapon answer each other across the battlefield.

He has a further significance for the sages: Vasishtha and Agastya are both called Maitravaruni, born of Mitra and Varuna. And he is the lord of the noose, the pasha, which makes him the god of binding oaths — the instrument with which transgressors of truth are held.

In the Uttara Kanda he is among the world-guardians whom Ravana fought during his conquest of the quarters, and one of those from whom Ravana extracted tribute or submission.`,
      motivations: [
        'To maintain the order of the waters and the boundaries they impose on land-dwelling beings.',
        'To uphold oaths and bind those who break them, which is the function of his noose.',
        'To preserve the dignity of his domain even under threat, yielding to Rama only when the alternative is annihilation.',
      ],
      abilities: [
        'Commands all waters, rivers, rains and the ocean, and the Varunastra that bears his name.',
        'Wields the pasha, the noose that binds transgressors and cannot be slipped.',
        'Guards the western quarter as one of the lokapalas.',
      ],
      accomplishments: [
        'Source of the Varunastra, among the astras Vishwamitra conferred on Rama before the Mithila journey.',
        'Lord of the sea that Rama compelled to permit the building of the bridge.',
        'Father, with Mitra, of the sages Vasishtha and Agastya in the Maitravaruni lineage.',
      ],
      weapons: ['Varunastra', 'Pasha (noose)'],
      ending: {
        type: 'immortal',
        description: 'Continues as guardian of the western quarter and lord of the waters.',
      },
      trivia: [
        'Rama\'s three-day fast on the shore is aimed at the lordship of the waters, and it fails; the sea responds only to the threat of the Brahmastra.',
      ],
      wikiTitle: 'Varuna',
    },
    {
      id: 'yama',
      name: 'Yama',
      sanskrit: 'यम',
      epithets: ['Dharmaraja', 'Antaka', 'Kala', 'Vaivasvata', 'Guardian of the South'],
      faction: 'devas',
      species: 'deva',
      gender: 'male',
      kandas: ['yuddha', 'uttara'],
      importance: 2,
      summary: 'The god of death and of law, defeated once by Ravana, who comes in person as Kala to end Rama\'s reign.',
      bio: `Yama is death and he is also dharma, and the epic uses him as a measure of scale. When Valmiki wants to convey how terrible a warrior looks he compares him to Yama with his noose; when he wants to show how far Ravana's conquest went, he narrates Ravana's assault on Yama's own city. In the Uttara Kanda, Ravana invaded the realm of the dead and fought Yama directly; Yama raised the Kaladanda, the staff of time, which no being survives, and Brahma intervened to stop him from using it — because its use would have falsified Ravana's boon. Yama withdrew rather than break the word of Brahma, and Ravana claimed the victory.

He is the guardian of the southern quarter, and the direction in which the search parties are sent toward Lanka is his. Hanuman's southward leap is, in the epic's symbolic geography, a journey into death's own quarter to find a woman who is as good as lost.

His final appearance is the most consequential. At the end of the Uttara Kanda, Kala — time, death — comes to Ayodhya in the form of an ascetic bearing a message from Brahma, and tells Rama that his work in the world is finished and he may return to his own nature. The condition he sets, that anyone interrupting their conversation must die, is what destroys Lakshmana when Durvasa forces his way in. Rama's reign ends because Death came politely, with a message, and asked for privacy.`,
      motivations: [
        'To administer the law of death impartially, without exception for rank, merit or devotion.',
        'To obey Brahma\'s word even at the cost of a victory, as he does when ordered not to use the Kaladanda on Ravana.',
        'To deliver Brahma\'s message that Rama\'s term in the world is complete.',
      ],
      abilities: [
        'Wields the Kaladanda, the staff of time, from which no being in any world can escape.',
        'Carries the noose with which the dead are drawn out of their bodies.',
        'Rules the southern quarter and the city of the dead.',
        'Can take any form, appearing to Rama as an ascetic messenger.',
      ],
      accomplishments: [
        'Confronted Ravana in his own realm and would have destroyed him but for Brahma\'s prohibition.',
        'Guards the southern quarter into which Rama\'s search for Sita is directed.',
        'Came to Ayodhya as Kala to tell Rama his work was done, initiating the end of the Ikshvaku line\'s stay on earth.',
      ],
      weapons: ['Kaladanda', 'Pasha (noose of death)'],
      ending: {
        type: 'immortal',
        description: 'Continues as lord of the dead; the epic ends with his message delivered and accepted.',
      },
      trivia: [
        'Ravana\'s "victory" over Yama is a technicality: Brahma stops Yama from using the one weapon that would have worked, to keep his own boon intact.',
      ],
      wikiTitle: 'Yama',
    },
    {
      id: 'surya',
      name: 'Surya',
      sanskrit: 'सूर्य',
      epithets: ['Aditya', 'Vivasvan', 'Bhaskara', 'Savitr'],
      faction: 'devas',
      species: 'deva',
      gender: 'male',
      kandas: ['bala', 'kishkindha', 'sundara', 'yuddha'],
      importance: 3,
      summary: 'The sun: ancestor of Rama\'s own solar dynasty, father of Sugriva, teacher of Hanuman, and the hymn that precedes Ravana\'s death.',
      bio: `Surya stands at the head of Rama's lineage. The Ikshvakus are the suryavamsha, the solar line, descending from Vivasvan through Manu to Ikshvaku and so to Raghu, Aja, Dasharatha and Rama; the dynasty's authority is literally traced to the sun. Every time Valmiki calls Rama a descendant of the sun, he is invoking Surya.

He is also a father twice over in the vanara story. Sugriva is Surya's son, which is why Rama's alliance with him is so often described in solar terms, and why Sugriva's own radiance is remarked on. And he is Hanuman's teacher: the infant Hanuman, hungry at sunrise, leapt into the sky mistaking the rising sun for a fruit and flew hundreds of yojanas toward it — the episode that ends with Indra's vajra breaking his jaw and the gods heaping compensatory boons on him. Later, Hanuman studied the whole of grammar and the sciences from Surya while flying alongside him, keeping pace face to face as the sun crossed the sky, which is why he can speak flawless Sanskrit to Sita in Lanka and why he is called the best of the learned.

Surya's last and most dramatic role is in the Yuddha Kanda. On the final day of the war, Rama is exhausted and the duel with Ravana is going badly. Agastya comes to him and teaches him the Aditya-hridaya, the heart of the sun, telling him to recite it to destroy his enemy. Rama recites it three times, looks at the sun, takes up his bow, and kills Ravana.`,
      motivations: [
        'To sustain the solar dynasty from which Rama descends and to see its greatest son prevail.',
        'To protect and instruct Hanuman, who was given to him as a pupil after the childhood injury.',
        'To support his son Sugriva and, through him, Rama\'s cause.',
      ],
      abilities: [
        'Illuminates and sustains the worlds; his hymn, the Aditya-hridaya, is itself a weapon.',
        'Taught Hanuman the entire body of grammar, scripture and the sciences while in motion across the sky.',
        'Withholds his own heat at will, as he did for Hanuman and when traversing hostile regions.',
      ],
      accomplishments: [
        'Progenitor of the solar dynasty that produced Ikshvaku, Raghu, Dasharatha and Rama.',
        'Fathered Sugriva, the vanara king whose alliance wins the war.',
        'Taught Hanuman the sciences, giving him the learning for which Sita and Rama both praise him.',
        'Supplied, through Agastya, the Aditya-hridaya that Rama recited immediately before killing Ravana.',
      ],
      ending: {
        type: 'immortal',
        description: 'Eternal; continues his course, having seen the solar line vindicated.',
      },
      trivia: [
        'Hanuman studied with Surya face to face while flying backwards to keep the sun in view, which is why he masters grammar so completely that he chooses his register carefully before speaking to Sita.',
      ],
      wikiTitle: 'Surya',
    },
    {
      id: 'kubera',
      name: 'Kubera',
      sanskrit: 'कुबेर',
      epithets: ['Vaishravana', 'Dhanada', 'Lord of the Yakshas', 'Guardian of the North'],
      faction: 'devas',
      species: 'deva',
      gender: 'male',
      kandas: ['aranya', 'yuddha', 'uttara'],
      importance: 3,
      summary: 'Ravana\'s half-brother and the original king of Lanka, driven out and robbed of the Pushpaka chariot.',
      bio: `Kubera is the god of wealth, the lord of the yakshas, guardian of the northern quarter — and, crucially for the plot, Ravana's elder half-brother. Both are sons of the sage Vishrava: Kubera by Devavarnini, Ravana by the rakshasi Kaikasi. Brahma gave Kubera lordship over wealth and the city of Lanka, which Vishvakarma had built, and the flying chariot Pushpaka, which goes wherever its owner wills.

Kaikasi, seeing Kubera in his glory, goaded her own sons into matching him, and that envy is the engine of Ravana's austerities. When Ravana returned from Brahma with his boon, Kubera sent a messenger counselling restraint; Ravana killed the messenger, ate him, invaded Lanka and drove Kubera out, taking the city and the Pushpaka. Kubera retreated north to Alaka on Kailasa. Later Ravana attacked him there too, fought the yaksha army, struck his brother down with a mace and carried off the chariot a second time, and it was on that return flight that his vehicle snagged on Kailasa and the shaking of the mountain earned him Shiva's punishment and his name.

Kubera recovers nothing by force, but he recovers it by law. After the war Rama gives Lanka to Vibhishana, and the Pushpaka — which Rama uses to fly the whole party back to Ayodhya — is afterwards returned to Kubera, its rightful owner, on Rama's instruction. Kubera then tells it to remain at Rama's service whenever he calls.

He is also behind one of the forest monsters: Viradha and the gandharva Tumburu were cursed by him, and the curse ends when Rama kills the rakshasa form.`,
      motivations: [
        'To hold and administer the wealth of the worlds as their appointed treasurer.',
        'To restrain his brother Ravana by counsel rather than war, which costs him his messenger\'s life.',
        'To recover his city and his chariot legitimately, which only happens through Rama\'s judgment.',
      ],
      abilities: [
        'Lord of all wealth and of the yaksha hosts, with Alaka on Kailasa as his capital.',
        'Original owner of the Pushpaka, the self-willed flying chariot built by Vishvakarma.',
        'Can curse: Tumburu was made the rakshasa Viradha by his word, with release conditioned on death at Rama\'s hands.',
        'Guards the northern quarter as a lokapala.',
      ],
      accomplishments: [
        'Received Lanka and the Pushpaka from Brahma as the first lord of the city.',
        'Warned Ravana against his course even after losing Lanka to him.',
        'Regained the Pushpaka when Rama returned it after the flight to Ayodhya, and placed it at Rama\'s permanent disposal.',
      ],
      ending: {
        type: 'immortal',
        description: 'Restored to his wealth and chariot after Ravana\'s death, he continues as lord of the north.',
      },
      trivia: [
        'The Pushpaka in which Rama, Sita and the vanaras fly home is stolen property twice over; Rama sends it back to Kubera as a point of law.',
      ],
      wikiTitle: 'Kubera',
    },
    {
      id: 'ganga',
      name: 'Ganga',
      sanskrit: 'गङ्गा',
      epithets: ['Bhagirathi', 'Jahnavi', 'Tripathaga', 'Haimavati'],
      faction: 'devas',
      species: 'nature',
      gender: 'female',
      kandas: ['bala', 'ayodhya'],
      importance: 3,
      summary: 'The river brought down from heaven by Bhagiratha, caught on Shiva\'s head, who redeemed Sagara\'s sixty thousand sons.',
      bio: `Vishwamitra narrates Ganga's descent to Rama and Lakshmana on the road to Mithila, and it is one of the longest embedded stories in the Bala Kanda. She is the elder daughter of Himavan, revered in all the worlds, and she was in heaven when Bhagiratha, last of Sagara's line, undertook austerities to bring her down. Sagara's sixty thousand sons, digging the earth in search of a sacrificial horse, had been reduced to ash by Kapila's glance, and nothing but Ganga's waters could grant them the funeral rite that would release them.

The descent nearly destroyed the world. Ganga came down in an enormous form and with an unbearable speed — and, proud of her force, intending to sweep Shiva himself down into the underworld. Shiva stood and took her on his head, and she was lost in the labyrinth of his matted hair for years, unable to find the earth at all. Only when Bhagiratha propitiated him again did Shiva release her, in streams, toward the plain.

She followed Bhagiratha's chariot across the land, flooded the sacrificial ground of the sage Jahnu, who drank her entire volume in anger and then released her through his ear — which is why she is called Jahnavi — and at last reached the sea and the ash of the sixty thousand, who rose to heaven. For that she is called Bhagirathi after the man who spent a lifetime bringing her.

In the Ayodhya Kanda she is the border the exile crosses: Guha ferries Rama, Sita and Lakshmana over her, and Sita prays to her for a safe return, promising offerings she never lives in Ayodhya long enough to make. Ganga is also the mother of Bhishma in other traditions, but in Valmiki her maternal role is Kartikeya's, whose birth from the fire she carried Vishwamitra also narrates.`,
      motivations: [
        'To descend from heaven at Bhagiratha\'s petition and redeem the ashes of Sagara\'s sons.',
        'To assert her own force, which she tries to do against Shiva and loses.',
        'To purify whatever she touches, which is her nature rather than a choice.',
      ],
      abilities: [
        'Her water grants the funeral rite that releases even those destroyed by a sage\'s curse.',
        'Descends in a volume and velocity the earth cannot withstand without Shiva\'s intervention.',
        'Flows in three courses — heaven, earth and the underworld — hence Tripathaga.',
        'Bore the fiery seed of Shiva that became Kartikeya, commander of the gods\' army.',
      ],
      accomplishments: [
        'Descended from heaven onto Shiva\'s head and from there to earth, following Bhagiratha to the sea.',
        'Liberated the sixty thousand sons of Sagara from the ash into which Kapila\'s glance had reduced them.',
        'Carried and transferred the conception of Kartikeya.',
        'Was crossed by Rama, Sita and Lakshmana at the start of the exile, with Guha\'s boat and Sita\'s prayer.',
      ],
      ending: {
        type: 'immortal',
        description: 'Flows perpetually in three worlds; her course is her existence.',
      },
      shloka: {
        devanagari: 'ततो हैमवती ज्येष्ठा सर्वलोकनमस्कृता ।\nतदा सातिमहद्रूपं कृत्वा वेगं च दुःसहम् ॥',
        transliteration: 'tato haimavatī jyeṣṭhā sarva-loka-namaskṛtā |\ntadā sātimahad rūpaṁ kṛtvā vegaṁ ca duḥsaham ||',
        translation: 'Then the eldest daughter of Himavan, revered by all the worlds, assumed an immense form and an unbearable speed.',
        ref: '1.43.4',
        context: 'Ganga begins her descent from the sky, which only Shiva\'s head can absorb.',
      },
      trivia: [
        'Ganga descends intending to sweep Shiva into the underworld; Valmiki is explicit that her fall is an act of pride, not of grace.',
      ],
      wikiTitle: 'Ganges in Hinduism',
    },
    {
      id: 'bhumi',
      name: 'Bhumi',
      sanskrit: 'भूमि',
      epithets: ['Madhavi', 'Dharani', 'Vasundhara', 'Mother Earth'],
      faction: 'devas',
      species: 'nature',
      gender: 'female',
      kandas: ['bala', 'uttara'],
      importance: 3,
      summary: 'The Earth, Sita\'s mother, who gave her to Janaka from a furrow and took her back when she was doubted twice.',
      bio: `Sita's name means "furrow," and her origin is literal. Janaka, ploughing a field while consecrating ground for a sacrifice at Mithila, turned up a girl from the earth, and he tells Rama and the assembly plainly that she rose from the soil, that she is ayonija — not born of a womb — and that he raised her as his daughter. Bhumi is therefore the only parent Sita has who is not adoptive, and she is a silent presence behind every reference to Sita as the daughter of the Earth.

She is also the one being in the epic who can take a person out of it. At the end of the Uttara Kanda, after Valmiki has brought Sita to Rama's assembly and sworn on his accumulated austerity that she is blameless and that Kusha and Lava are Rama's sons, Rama asks her to give proof of her purity again in front of the gathered kings and sages. Sita has already given it once, in the fire at Lanka. She does not refuse; she reframes. Standing with her eyes lowered and her palms joined, she calls on Madhavi, the Earth, and swears that if she has never in thought, word or deed turned to anyone but Rama, then the Earth should open and receive her.

The ground splits. A throne borne by nagas rises out of it, and Bhumi, in her own form, takes Sita in her arms, seats her beside her and carries her down while flowers fall from the sky. Rama is left in front of the assembly with his sons and without his wife, and nothing he says or threatens afterward brings her back.

It is the only oath in the Ramayana that is answered by a departure rather than a vindication.`,
      motivations: [
        'To give her daughter to a king who would raise her, which she does through Janaka\'s ploughshare.',
        'To bear and sustain all beings, which is her defining function.',
        'To take Sita back rather than let her be asked a second time to prove what has already been proven.',
      ],
      abilities: [
        'Produces life directly from her substance, as she did with Sita in the furrow at Mithila.',
        'Can open and receive a person bodily, withdrawing them permanently from the world.',
        'Appears in person on a naga-borne throne when called by a true oath.',
      ],
      accomplishments: [
        'Gave Sita to Janaka from the furrow, making her ayonija and the Earth\'s own daughter.',
        'Answered Sita\'s final oath by opening and taking her back, ending her trials.',
        'Bore the whole burden of beings throughout the epic, a weight repeatedly described as increased by Ravana\'s oppression.',
      ],
      ending: {
        type: 'immortal',
        description: 'Withdraws underground with Sita in her arms at the close of the Uttara Kanda.',
      },
      trivia: [
        'Sita\'s final oath is the only one in the epic that is answered by the oath-taker being removed from the world rather than restored to her place in it.',
        'Rama never sees her again; the epic offers no reunion before his own entry into the Sarayu.',
      ],
      wikiTitle: 'Bhumi (goddess)',
    },
    {
      id: 'lakshmi',
      name: 'Lakshmi',
      sanskrit: 'लक्ष्मी',
      epithets: ['Shri', 'Padma', 'Kamala', 'Consort of Narayana'],
      faction: 'devas',
      species: 'deva',
      gender: 'female',
      kandas: ['bala', 'yuddha'],
      importance: 3,
      summary: 'The goddess of fortune, declared by Brahma to be Sita as Rama is Vishnu.',
      bio: `Lakshmi is in the Ramayana almost entirely by implication, and the implication is made explicit exactly once, at the most charged moment in the poem. After Sita has walked into the fire and Agni has carried her out unburnt, Brahma addresses Rama before the assembled armies and gods and tells him what he is — Narayana, the discus-bearer, the imperishable — and in the same speech identifies Sita with Lakshmi and Rama with Vishnu. The repudiation and the ordeal are retrospectively reframed as a divine couple’s play.

Her presence elsewhere is through comparison. Anasuya, giving Sita the unfading garments, tells her she will attend her husband in the forest as Lakshmi attends Vishnu. Valmiki repeatedly describes Sita in Ravana's ashoka grove as Shri fallen from her place, dimmed like fortune withdrawn from a doomed house, and Lanka's prosperity is described as Lakshmi preparing to abandon it. When Hanuman first sees Sita, the comparison is to a Shri without her lotus.

She is also present in the Bala Kanda as one of the treasures that emerged from the churning of the milk ocean, in the version Vishwamitra relates, and she is the standard against which the beauty and auspiciousness of every queen in the epic is measured — Kausalya, Tara and Mandodari are each compared to her.

Unlike Bhumi, who intervenes physically, Lakshmi never acts in her own person. She is the thing Sita turns out to have been all along.`,
      motivations: [
        'To accompany Narayana in each of his descents, which is why she takes birth as Sita when he takes birth as Rama.',
        'To embody and confer prosperity, which withdraws from Lanka as Ravana\'s destruction approaches.',
      ],
      abilities: [
        'Confers or withdraws fortune from kingdoms, households and persons.',
        'Takes mortal birth alongside Vishnu without memory of her nature, as Sita.',
        'Arose from the churning of the ocean of milk among its greatest treasures.',
      ],
      accomplishments: [
        'Incarnated as Sita for the duration of Rama\'s mortal life.',
        'Was publicly identified as Sita by Brahma in front of the armies after the fire ordeal.',
        'Serves throughout the epic as the measure of auspiciousness for its queens.',
      ],
      ending: {
        type: 'immortal',
        description: 'Eternal consort of Vishnu; her mortal portion returns with Sita into the Earth.',
      },
      trivia: [
        'Sita is identified as Lakshmi only once, by Brahma, and only after she has been repudiated and has walked into fire.',
      ],
      wikiTitle: 'Lakshmi',
    },
    {
      id: 'parvati',
      name: 'Parvati',
      sanskrit: 'पार्वती',
      epithets: ['Uma', 'Haimavati', 'Girija', 'Consort of Shiva'],
      faction: 'devas',
      species: 'deva',
      gender: 'female',
      kandas: ['bala'],
      importance: 2,
      summary: 'Himavan\'s younger daughter and Shiva\'s wife, whose curse of barrenness shaped the birth of Kartikeya.',
      bio: `Parvati appears in the Bala Kanda in Vishwamitra's narration of the Himavan family, told as the brothers rest on the Ganga's bank. Himavan, lord of mountains, had two daughters by Mena: the elder, Ganga, whom the gods asked for and received for the sake of the three worlds, and the younger, Uma, who practised fierce austerity and was given to the great god Rudra as his wife.

Her story turns on an interruption. Shiva and Uma remained in union for a hundred divine years, and the gods, alarmed at what offspring from that union would be like and at the shaking of the worlds, sent Agni to break it off and asked that the seed be placed elsewhere. Shiva complied and cast the seed into the fire. Uma, humiliated at being deprived of a child in her own body, cursed the gods that none of their wives would bear offspring — a curse that permanently reshaped the divine order — and she also cursed the earth, who had been asked to receive the seed, to become many-formed and the wife of many.

The seed, carried by Agni and then by Ganga, was finally deposited on the White Mountain among the reeds, where Kartikeya was born and nursed by the Krittikas, and became the commander of the army of the gods — the very outcome the devas had wanted, obtained in the one way that cost Parvati her motherhood.

Valmiki tells the story to explain why Kumara is Ganga's son rather than Uma's, and in doing so gives Parvati the epic's sharpest divine grievance.`,
      motivations: [
        'To win Shiva by austerity, which she undertakes before the marriage.',
        'To bear a child in her own body, the desire the gods deliberately frustrate.',
        'To make the gods pay for that interference, which she does by cursing their wives to barrenness.',
      ],
      abilities: [
        'Austerity powerful enough to obtain Shiva himself as husband.',
        'Pronounces curses binding on the entire deva order, including the fertility of their wives.',
        'Shares Shiva\'s union for a hundred divine years without the worlds being able to bear the result.',
      ],
      accomplishments: [
        'Became the consort of Shiva through her own penance.',
        'Cursed the gods\' wives with barrenness and the earth with many forms after being denied a child.',
        'Is, through the diverted conception, the cause of Kartikeya\'s existence as commander of the divine army.',
      ],
      ending: {
        type: 'immortal',
        description: 'Eternal consort of Shiva; the epic leaves her at Kailasa.',
      },
      trivia: [
        'In Valmiki\'s telling Parvati never bears Kartikeya herself — Agni and Ganga carry the conception, and her curse on the gods is her response to the theft.',
      ],
      wikiTitle: 'Parvati',
    },
    {
      id: 'samudra',
      name: 'Samudra',
      sanskrit: 'समुद्र',
      epithets: ['Sagara', 'Ratnakara', 'Lord of Rivers', 'The Ocean'],
      faction: 'devas',
      species: 'nature',
      gender: 'male',
      kandas: ['bala', 'yuddha'],
      importance: 3,
      summary: 'The ocean personified, who ignores three days of Rama\'s prayer and yields only to a drawn Brahmastra.',
      bio: `The hundred yojanas of sea between the southern shore and Lanka is the last obstacle in the epic and the only one that cannot be fought. Vibhishana advises Rama to petition the ocean, since Sagara is an ancestor of the Ikshvakus — the sea bears that name because Sagara's sixty thousand sons dug the pit that became it. Rama spreads darbha grass on the shore and lies down in prayopavesha, fasting, for three nights, approaching the sea with the humility due to a forefather.

Nothing happens. On the fourth day Rama's patience breaks and the epic produces one of its hardest speeches: gentleness is wasted on the gentle-natured, the world honours only force, and the ocean has shown him no respect. He calls for his bow and his serpent-like arrows and declares that he will dry the sea to its bed so the vanaras can cross on foot. He fits the Brahmastra. The waters boil, the creatures of the deep cry out, the mountains shake.

Only then does Sagara rise from the middle of his own waters, in person, radiant, with the rivers around him, and approach Rama with joined palms. He explains that he cannot by his own nature abandon his depth — earth, water, fire, air and space hold to their natures — but that he will bear the bridge. He tells Rama that Nala, son of Vishvakarma, is in his army and can build it, and that the ocean will hold whatever Nala sets on him. He also asks Rama to discharge the already-fitted weapon somewhere else, and Rama sends it north to the Drumakulya region.

The bridge is built in five days, a hundred yojanas long and ten wide, and the army crosses.`,
      motivations: [
        'To preserve his own nature and depth, which he tells Rama he cannot alter even under threat.',
        'To avoid annihilation by the Brahmastra, which is what finally moves him to appear.',
        'To find a solution that satisfies Rama without requiring the sea to cease being the sea, which is the bridge.',
      ],
      abilities: [
        'Holds a hundred yojanas of fathomless water between the mainland and Lanka.',
        'Can appear in bodily form, attended by the rivers, and speak.',
        'Bears up whatever Nala constructs on his surface, making the setu possible.',
        'Houses all the creatures of the deep, including the rakshasas and nagas who harry the crossing.',
      ],
      accomplishments: [
        'Resisted three days of Rama\'s austerity and yielded only to the nocked Brahmastra.',
        'Named Nala as the builder and undertook to hold the bridge, making the invasion of Lanka possible.',
        'Received the sons of Sagara\'s excavation and the waters of Ganga that redeemed them.',
      ],
      ending: {
        type: 'immortal',
        description: 'Continues as the ocean, bearing the bridge Nala built on his surface.',
      },
      shloka: {
        devanagari: 'ततो मध्यात् समुद्रस्य सागरः स्वयमुत्थितः ॥',
        transliteration: 'tato madhyāt samudrasya sāgaraḥ svayam utthitaḥ ||',
        translation: 'Then from the midst of the sea, the Ocean himself rose up.',
        ref: '6.22.17',
        context: 'Sagara finally appears in person, after Rama fits the Brahmastra to his bow.',
      },
      trivia: [
        'Rama\'s three days of prayer fail completely; the sea responds only to a weapon. Valmiki gives Rama an explicit speech about the uselessness of patience with the unresponsive.',
        'The arrow Rama had already fitted could not be withdrawn, so he discharged it to the north, which Valmiki says created the desert region of Drumakulya.',
      ],
      wikiTitle: 'Samudra (Hinduism)',
    },
    {
      id: 'garuda',
      name: 'Garuda',
      sanskrit: 'गरुड',
      epithets: ['Vainateya', 'Suparna', 'Enemy of Serpents', 'Vishnu\'s mount'],
      faction: 'devas',
      species: 'bird',
      gender: 'male',
      kandas: ['yuddha', 'uttara'],
      importance: 3,
      summary: 'Vishnu\'s eagle, whose arrival scatters the naga-pasha and heals Rama and Lakshmana on the battlefield.',
      bio: `Garuda's single appearance in the main narrative is one of the most dramatic rescues in the epic. Early in the war Indrajit, fighting invisible from the sky, binds Rama and Lakshmana with the nagapasha — serpent-arrows that become living snakes, coiling and tightening around them until both brothers lie bleeding and unconscious on the field, pierced beyond counting. The vanara army believes them dead. Sugriva, Vibhishana, Hanuman and Jambavan stand over them helpless; Vibhishana, who understands the weapon, says only a greater power can undo it.

Then, after a muhurta, a wind rises, the sea churns, the mountains tremble, and Garuda comes, blazing like fire. The serpents do not wait to be fought: the instant they see him they flee in every direction, because he is their eater by nature and nothing of the naga kind can remain in his presence. He takes the two brothers by their faces with his hands, touches their wounds, and the wounds close; their bodies become whole, their strength and radiance return greater than before, and both stand up healed.

Rama asks who he is. Garuda names himself as his friend, dearer than life itself, and refuses to explain further — you will know, he says, when you have done what you have come to do — embraces Rama, circumambulates him, and flies away as quickly as he came. The vanaras roar and the war resumes.

He is Vishnu's own vehicle, which is the unspoken point of the scene: the mount arrives to save the rider who does not yet know he is the rider.`,
      motivations: [
        'To save Rama and Lakshmana from a weapon that only a serpent-devourer can undo.',
        'To act on an ancient friendship with Vishnu which Rama, still believing himself a man, does not understand.',
        'Enmity with the naga race, which is his nature and the reason his mere presence breaks the weapon.',
      ],
      abilities: [
        'Serpents flee at the sight of him; no naga weapon can hold in his presence.',
        'Heals mortal wounds by touch, restoring strength and radiance beyond the original.',
        'Flies with a speed that stirs the ocean and shakes the mountains.',
        'Carries Vishnu as his mount.',
      ],
      accomplishments: [
        'Freed Rama and Lakshmana from Indrajit\'s nagapasha when the entire vanara army was powerless.',
        'Healed both brothers\' wounds instantly and restored them to greater strength than before.',
        'Declared himself Rama\'s friend without disclosing the reason, foreshadowing the revelation at the war\'s end.',
      ],
      ending: {
        type: 'immortal',
        description: 'Departs as swiftly as he arrived, returning to Vishnu\'s service.',
      },
      trivia: [
        'Garuda never fights in the Ramayana; the serpents disperse simply because he has arrived.',
      ],
      wikiTitle: 'Garuda',
    },
    {
      id: 'shesha',
      name: 'Shesha',
      sanskrit: 'शेष',
      epithets: ['Ananta', 'Adishesha', 'The Thousand-Hooded', 'Vishnu\'s couch'],
      faction: 'devas',
      species: 'deva',
      gender: 'male',
      kandas: ['bala', 'uttara'],
      importance: 2,
      summary: 'The thousand-hooded serpent on whom Vishnu rests, held by tradition to descend as Lakshmana.',
      bio: `Shesha is the cosmic serpent, Ananta the endless, who holds the earth on his hoods and on whom Vishnu reclines between the cycles of creation. In the Ramayana he is not a character who speaks, but he is structurally present in every description of Vishnu: when the gods come to petition Vishnu for the incarnation, they come to the lord of the serpent couch, and when Rama finally enters the Sarayu and resumes his Vaishnava form, it is that form he resumes.

The identification of Lakshmana with Shesha belongs to the epic's traditional interpretation and to the Uttara Kanda's handling of Lakshmana's end. Lakshmana is the brother who never sleeps, who never leaves Rama's side, who supports him through exile and war the way the serpent supports the god; and when his time comes he does not die in battle but leaves his body by yoga at the river and is carried to heaven in his own form by Indra, ahead of Rama. The portion returns before the whole.

Shesha's other function in the epic's cosmology is as the ruler of the nagas, which is why Indrajit's nagapasha is a weapon of his kind and why Garuda's arrival breaks it. The serpent world is a real power in the Ramayana: nagas bear the throne on which Bhumi receives Sita, and naga weapons nearly end the war in Ravana's favour.`,
      motivations: [
        'To support Vishnu in every form and every descent, which he does as couch, canopy and brother.',
        'To bear the weight of the earth and keep the worlds stable between cycles.',
      ],
      abilities: [
        'Holds the earth and the worlds upon his thousand hoods.',
        'Serves as the couch and canopy of Vishnu across the cosmic cycles.',
        'Lord of the naga race, whose weapons and thrones appear at several turns of the epic.',
      ],
      accomplishments: [
        'Bears the earth without interruption through the cycles of creation.',
        'Is identified by the epic\'s tradition with Lakshmana, who accompanies Rama through exile and war and departs before him.',
      ],
      ending: {
        type: 'immortal',
        description: 'Endless by definition; his portion returns when Lakshmana leaves his body at the Sarayu.',
      },
      trivia: [
        'Valmiki does not state outright in the main narrative that Lakshmana is Shesha; the identification rests on the Uttara Kanda and on the long commentarial tradition, and is worth flagging as interpretation rather than plain text.',
      ],
      wikiTitle: 'Shesha',
    },
    {
      id: 'kamadhenu',
      name: 'Kamadhenu',
      sanskrit: 'कामधेनु',
      epithets: ['Surabhi', 'Shabala', 'The Wish-Fulfilling Cow', 'Mother of Cows'],
      faction: 'devas',
      species: 'nature',
      gender: 'female',
      kandas: ['bala'],
      importance: 2,
      summary: 'The wish-granting cow whose seizure by king Kaushika begins the Vishwamitra-Vasishtha feud and creates armies from her own body.',
      bio: `Shabala, the dappled cow of Vasishtha, is Kamadhenu's daughter and the cause of the longest feud in the Bala Kanda. King Kaushika, marching with his full army, was entertained at Vasishtha's hermitage, and the sage asked Shabala to provide a meal. She produced, on demand, sugarcane and honey and parched grain, wines and sweets, rice heaped like hills, curds, soups and every delicacy, until the entire army had eaten to satiety and more.

Kaushika then demanded the cow. He offered a hundred thousand ordinary cows, then fourteen thousand elephants, chariots of gold, horses — and finally said that a jewel of the kingdom belongs by right to the king. Vasishtha refused each time: she is the cow of my sacrifices, my oblations and my guests, and I will not give her. Kaushika had her dragged away by force, and Shabala, weeping, broke free and asked Vasishtha why he had abandoned her. He had not, he said; she was taken.

She then asked permission to act, and with his word produced out of her own body armies in waves: Pahlavas from her bellowing, then Shakas and Yavanas from her foam and her udder, then Kambojas, Barbaras, Mlecchas and Kiratas, who annihilated Kaushika's forces. The king's hundred sons attacked Vasishtha and were reduced to ash by a syllable. Every astra Kaushika hurled — agneya, varuna, vayavya, brahma itself — was swallowed by the sage's staff.

That total defeat is the reason Kaushika abdicated, declared the strength of kshatriyas worthless, and went into the forest to become Vishwamitra. A cow's refusal to change hands sets in motion the career of the sage who brings Rama out of Ayodhya.`,
      motivations: [
        'To remain with Vasishtha, whose sacrifices and guests she sustains.',
        'To defend herself and her keeper when seized by force, which she does by producing armies.',
        'To fulfil any desire asked of her, which is her nature as the wish-granting cow.',
      ],
      abilities: [
        'Produces on demand food, drink and every delicacy sufficient to feed an entire army.',
        'Generates whole armed nations — Pahlavas, Shakas, Yavanas, Kambojas, Barbaras, Kiratas — from her own body.',
        'Supplies the materials of sacrifice and the oblations of a brahmarshi\'s daily rites.',
      ],
      accomplishments: [
        'Fed king Kaushika\'s entire army at Vasishtha\'s hermitage from her own substance.',
        'Destroyed that same army when Kaushika tried to take her by force.',
        'Triggered, by her refusal to be seized, the abdication of Kaushika and his transformation into Vishwamitra.',
      ],
      ending: {
        type: 'immortal',
        description: 'Remains with Vasishtha as the cow of his sacrifices.',
      },
      trivia: [
        'The whole of Vishwamitra\'s career — his austerity, Trishanku\'s heaven, Menaka, and ultimately his bringing Rama out of Ayodhya — begins with a dispute over one cow.',
      ],
      wikiTitle: 'Kamadhenu',
    },
    {
      id: 'menaka',
      name: 'Menaka',
      sanskrit: 'मेनका',
      epithets: ['Apsara', 'Paramapsara', 'The Dancer of Pushkara'],
      faction: 'devas',
      species: 'gandharva',
      gender: 'female',
      kandas: ['bala'],
      importance: 2,
      summary: 'The foremost apsara, whose bathing at Pushkara cost Vishwamitra ten years of accumulated austerity.',
      bio: `Vishwamitra, having won the rank of rajarshi and exhausted himself in the Trishanku affair, went to Pushkara and practised austerity there for a long period. Then, Valmiki says, after a great length of time, Menaka — the foremost of apsaras — came to bathe in the waters of Pushkara. The sage saw her, and the man who had burned through kingdoms and heavens was undone by a single sight: he came under the power of Kandarpa and said to her, welcome, apsara; stay here in my hermitage; be gracious to me.

She stayed, and he lived with her for ten years, and the whole of that time passed like a single day. When he came out of it he was appalled — not at her, but at himself. Valmiki gives him a moment of exact self-knowledge: he reflects that all his accumulated austerity has been destroyed, that the ten years passed as though a night, and that this is anger and desire together defeating the mind. He does not curse Menaka. He speaks to her gently, dismisses her, and goes north to the Himalaya to begin again on the Kaushiki river.

The contrast with what follows is the point. When the apsara Rambha is later sent by Indra to do the same thing, Vishwamitra sees through it at once and curses her to stand as stone for a thousand years — and then has to spend further ages atoning for the anger that curse revealed. Menaka got ten years of his life and no curse; Rambha got a curse and cost him more than Menaka did.

Menaka's own role ends there. She is the epic's demonstration that desire, unlike every enemy Vishwamitra fought, cannot be defeated by force.`,
      motivations: [
        'To be welcomed and sheltered, which she is, at Vishwamitra\'s own invitation.',
        'To live as an apsara of the highest rank, bathing and dwelling where she pleases.',
        'To depart gracefully when the sage recovers himself and asks her to go.',
      ],
      abilities: [
        'The foremost of apsaras in beauty, able to break a thousand-year austerity by being seen.',
        'Dwelt ten years with a sage of immense power without his noticing the passage of time.',
      ],
      accomplishments: [
        'Destroyed the accumulated merit of Vishwamitra\'s austerity at Pushkara without doing anything but bathing.',
        'Lived ten years in his hermitage and left it without incurring a curse, unlike Rambha after her.',
      ],
      ending: {
        type: 'unknown',
        description: 'Dismissed gently by Vishwamitra after ten years, she leaves the narrative and is not heard of again.',
      },
      shloka: {
        devanagari: 'ततः कालेन महता मेनका परमाप्सराः ।\nपुष्करेषु नरश्रेष्ठ स्नातुं समुपचक्रमे ॥',
        transliteration: 'tataḥ kālena mahatā menakā paramāpsarāḥ |\npuṣkareṣu nara-śreṣṭha snātuṁ samupacakrame ||',
        translation: 'Then after a long time, best of men, Menaka, the foremost of apsaras, came to bathe in the waters of Pushkara.',
        ref: '1.63.4',
        context: 'The sentence that destroys ten years of Vishwamitra\'s austerity; Valmiki does not say Indra sent her.',
      },
      trivia: [
        'Valmiki does not say Indra sent Menaka to seduce Vishwamitra — she simply comes to bathe, and he invites her. Indra is explicitly named only in the later Rambha episode.',
        'Vishwamitra blames himself rather than Menaka and lets her go without a curse, which is exactly what he fails to do with Rambha.',
      ],
      wikiTitle: 'Menaka',
    },
  ],

  relations: [
    // --- Valmiki ---
    { source: 'valmiki', target: 'sita', type: 'rescued', label: 'Sheltered her after exile' },
    { source: 'valmiki', target: 'lava', type: 'guru', label: 'Raised and taught him' },
    { source: 'valmiki', target: 'kusha', type: 'guru', label: 'Raised and taught him' },
    { source: 'valmiki', target: 'rama', type: 'counsel', label: 'Vouched for Sita before him' },
    { source: 'valmiki', target: 'narada', type: 'devotee', label: 'Questioned him to begin the epic' },
    { source: 'valmiki', target: 'brahma', type: 'devotee', label: 'Composed at his command' },

    // --- Narada ---
    { source: 'narada', target: 'valmiki', type: 'guru', label: 'Narrated the seed Ramayana' },
    { source: 'narada', target: 'rama', type: 'devotee', label: 'Named him the perfect man' },
    { source: 'narada', target: 'brahma', type: 'servant', label: "Brahma's son and messenger" },

    // --- Vishwamitra ---
    { source: 'vishwamitra', target: 'rama', type: 'guru', label: 'Armed and trained him' },
    { source: 'vishwamitra', target: 'lakshmana', type: 'guru', label: 'Taught him the astras' },
    { source: 'vishwamitra', target: 'rama', type: 'boon', label: 'Gave Bala and Atibala mantras' },
    { source: 'vishwamitra', target: 'vasishtha', type: 'enemy', label: 'Feud over the cow Shabala' },
    { source: 'vishwamitra', target: 'dasharatha', type: 'counsel', label: 'Demanded Rama for his sacrifice' },
    { source: 'vishwamitra', target: 'janaka', type: 'counsel', label: "Asked to show Shiva's bow" },
    { source: 'vishwamitra', target: 'tataka', type: 'enemy', label: 'Ordered her destruction' },
    { source: 'vishwamitra', target: 'ahalya', type: 'rescued', label: 'Brought Rama to her grove' },
    { source: 'vishwamitra', target: 'menaka', type: 'spouse', label: 'Lived with her ten years' },
    { source: 'vishwamitra', target: 'kamadhenu', type: 'enemy', label: 'Tried to seize Shabala by force' },
    { source: 'vishwamitra', target: 'brahma', type: 'devotee', label: 'Won brahmarshi-hood from him' },

    // --- Vasishtha ---
    { source: 'vasishtha', target: 'rama', type: 'guru', label: 'Family preceptor' },
    { source: 'vasishtha', target: 'bharata', type: 'guru', label: 'Preceptor and regent-adviser' },
    { source: 'vasishtha', target: 'lakshmana', type: 'guru', label: 'Family preceptor' },
    { source: 'vasishtha', target: 'shatrughna', type: 'guru', label: 'Family preceptor' },
    { source: 'vasishtha', target: 'dasharatha', type: 'counsel', label: 'Told him to release Rama' },
    { source: 'vasishtha', target: 'ikshvaku', type: 'guru', label: 'Priest of the solar line' },
    { source: 'vasishtha', target: 'vishwamitra', type: 'enemy', label: 'Destroyed his army with the brahma-danda' },
    { source: 'vasishtha', target: 'kamadhenu', type: 'ally', label: 'Keeper of Shabala' },
    { source: 'vasishtha', target: 'sita', type: 'counsel', label: 'Urged Rama to take her back' },

    // --- Agastya ---
    { source: 'agastya', target: 'rama', type: 'boon', label: "Gave Vishnu's bow and Brahmastra" },
    { source: 'agastya', target: 'rama', type: 'guru', label: 'Taught the Aditya-hridaya' },
    { source: 'agastya', target: 'rama', type: 'counsel', label: 'Sent him to Panchavati' },
    { source: 'agastya', target: 'sutikshna', type: 'guru', label: 'His disciple in the Dandaka' },
    { source: 'agastya', target: 'ravana', type: 'enemy', label: 'Narrated and opposed his line' },
    { source: 'agastya', target: 'samudra', type: 'enemy', label: 'Drank the ocean dry' },
    { source: 'agastya', target: 'indra', type: 'ally', label: "Kept Indra's quivers for Rama" },

    // --- Bharadwaja ---
    { source: 'bharadwaja', target: 'rama', type: 'counsel', label: 'Directed him to Chitrakuta' },
    { source: 'bharadwaja', target: 'bharata', type: 'ally', label: "Feasted Bharata's whole army" },
    { source: 'bharadwaja', target: 'rama', type: 'boon', label: 'Blessed the homeward road with fruit' },
    { source: 'bharadwaja', target: 'sita', type: 'ally', label: 'Hosted her at Prayaga' },

    // --- Atri & Anasuya ---
    { source: 'atri', target: 'anasuya', type: 'spouse', label: 'Husband' },
    { source: 'atri', target: 'rama', type: 'ally', label: 'Hosted him at the forest edge' },
    { source: 'atri', target: 'sita', type: 'counsel', label: 'Sent her to Anasuya' },
    { source: 'anasuya', target: 'atri', type: 'spouse', label: 'Wife' },
    { source: 'anasuya', target: 'sita', type: 'boon', label: 'Gave unfading garments and ornaments' },
    { source: 'anasuya', target: 'sita', type: 'guru', label: 'Taught her the dharma of a wife' },

    // --- Gautama & Ahalya ---
    { source: 'gautama', target: 'ahalya', type: 'spouse', label: 'Husband' },
    { source: 'gautama', target: 'ahalya', type: 'cursed', label: 'Cursed her to invisibility' },
    { source: 'gautama', target: 'indra', type: 'cursed', label: 'Cursed him to fruitlessness' },
    { source: 'gautama', target: 'rama', type: 'devotee', label: 'Honoured him after the release' },
    { source: 'ahalya', target: 'gautama', type: 'spouse', label: 'Wife' },
    { source: 'ahalya', target: 'rama', type: 'devotee', label: 'Freed by his arrival' },
    { source: 'ahalya', target: 'indra', type: 'enemy', label: 'Ruined by his deception' },

    // --- Parashurama ---
    { source: 'parashurama', target: 'rama', type: 'enemy', label: 'Challenged him on the Mithila road' },
    { source: 'parashurama', target: 'rama', type: 'boon', label: "Yielded the Vaishnava bow and his worlds" },
    { source: 'parashurama', target: 'dasharatha', type: 'enemy', label: 'Ignored his plea for his son' },
    { source: 'parashurama', target: 'shiva', type: 'devotee', label: 'Received the axe from him' },

    // --- Matanga ---
    { source: 'matanga', target: 'vali', type: 'cursed', label: 'Barred him from Rishyamuka on pain of death' },
    { source: 'matanga', target: 'sugriva', type: 'rescued', label: 'His curse made Rishyamuka a sanctuary' },
    { source: 'matanga', target: 'shabari', type: 'guru', label: 'Her preceptor at the Pampa' },

    // --- Sharabhanga & Sutikshna ---
    { source: 'sharabhanga', target: 'rama', type: 'boon', label: 'Gave him his accumulated worlds' },
    { source: 'sharabhanga', target: 'rama', type: 'counsel', label: 'Sent him on to Sutikshna' },
    { source: 'sharabhanga', target: 'indra', type: 'enemy', label: 'Refused his chariot to heaven' },
    { source: 'sutikshna', target: 'rama', type: 'counsel', label: 'Directed him to Agastya' },
    { source: 'sutikshna', target: 'rama', type: 'boon', label: 'Offered him the worlds he had won' },
    { source: 'sutikshna', target: 'agastya', type: 'devotee', label: 'His disciple' },

    // --- Durvasa ---
    { source: 'durvasa', target: 'lakshmana', type: 'enemy', label: 'Forced him to break the vow' },
    { source: 'durvasa', target: 'rama', type: 'counsel', label: 'Demanded immediate audience' },
    { source: 'durvasa', target: 'atri', type: 'sibling', label: 'Of the Atreya line' },

    // --- Vishnu ---
    { source: 'vishnu', target: 'rama', type: 'parent', label: 'Incarnated as him' },
    { source: 'vishnu', target: 'lakshmana', type: 'parent', label: 'A fourth portion of himself' },
    { source: 'vishnu', target: 'bharata', type: 'parent', label: 'A fourth portion of himself' },
    { source: 'vishnu', target: 'shatrughna', type: 'parent', label: 'A fourth portion of himself' },
    { source: 'vishnu', target: 'lakshmi', type: 'spouse', label: 'Eternal consort' },
    { source: 'vishnu', target: 'ravana', type: 'enemy', label: 'Descended to destroy him' },
    { source: 'vishnu', target: 'garuda', type: 'ally', label: 'His mount' },
    { source: 'vishnu', target: 'shesha', type: 'ally', label: 'Rests upon him' },
    { source: 'vishnu', target: 'brahma', type: 'ally', label: 'Accepted his petition to incarnate' },

    // --- Brahma ---
    { source: 'brahma', target: 'ravana', type: 'boon', label: 'Granted immunity from gods and rakshasas' },
    { source: 'brahma', target: 'kumbhakarna', type: 'cursed', label: 'Bound him to six months of sleep' },
    { source: 'brahma', target: 'indrajit', type: 'boon', label: 'Gave the Brahmastra and vanishing chariot' },
    { source: 'brahma', target: 'valmiki', type: 'boon', label: 'Commissioned the Ramayana' },
    { source: 'brahma', target: 'rama', type: 'counsel', label: 'Revealed him to be Narayana' },
    { source: 'brahma', target: 'vishnu', type: 'counsel', label: 'Sent the gods to petition him' },
    { source: 'brahma', target: 'vishwamitra', type: 'boon', label: 'Conferred the title brahmarshi' },
    { source: 'brahma', target: 'ahalya', type: 'parent', label: 'Fashioned her' },
    { source: 'brahma', target: 'kubera', type: 'boon', label: 'Gave him Lanka and the Pushpaka' },
    { source: 'brahma', target: 'indra', type: 'rescued', label: 'Ransomed him from Indrajit' },
    { source: 'brahma', target: 'narada', type: 'parent', label: 'His mind-born son' },
    { source: 'brahma', target: 'atri', type: 'parent', label: 'His mind-born son' },

    // --- Shiva ---
    { source: 'shiva', target: 'parvati', type: 'spouse', label: 'Husband' },
    { source: 'shiva', target: 'ganga', type: 'rescued', label: 'Broke her fall on his head' },
    { source: 'shiva', target: 'janaka', type: 'boon', label: 'His bow kept in the Videha line' },
    { source: 'shiva', target: 'ravana', type: 'boon', label: 'Gave him Chandrahasa and his name' },
    { source: 'shiva', target: 'ravana', type: 'enemy', label: 'Pinned him under Kailasa' },
    { source: 'shiva', target: 'parashurama', type: 'boon', label: 'Gave him the axe' },
    { source: 'shiva', target: 'bhagiratha', type: 'ally', label: 'Received Ganga for his sake' },

    // --- Indra ---
    { source: 'indra', target: 'vali', type: 'parent', label: 'Father' },
    { source: 'indra', target: 'vali', type: 'boon', label: 'Gave the strength-draining golden chain' },
    { source: 'indra', target: 'ahalya', type: 'enemy', label: 'Seduced her in her husband\'s form' },
    { source: 'indra', target: 'gautama', type: 'enemy', label: 'Violated his household' },
    { source: 'indra', target: 'rama', type: 'boon', label: 'Sent chariot, armour and Matali' },
    { source: 'indra', target: 'hanuman', type: 'enemy', label: 'Struck him with the vajra as a child' },
    { source: 'indra', target: 'hanuman', type: 'boon', label: 'Gave him invulnerability in compensation' },
    { source: 'indra', target: 'sugriva', type: 'ally', label: 'Revived his fallen army' },
    { source: 'indra', target: 'indrajit', type: 'enemy', label: 'Defeated and captured by him' },
    { source: 'indra', target: 'lakshmana', type: 'rescued', label: 'Carried him to heaven' },

    // --- Agni ---
    { source: 'agni', target: 'sita', type: 'rescued', label: 'Returned her unburnt from the pyre' },
    { source: 'agni', target: 'rama', type: 'counsel', label: 'Declared Sita blameless' },
    { source: 'agni', target: 'dasharatha', type: 'boon', label: 'Delivered the payasa of the sacrifice' },
    { source: 'agni', target: 'hanuman', type: 'ally', label: 'Spared his tail while burning Lanka' },
    { source: 'agni', target: 'sharabhanga', type: 'ally', label: 'Received and renewed his body' },
    { source: 'agni', target: 'parvati', type: 'enemy', label: 'Interrupted her union with Shiva' },

    // --- Varuna ---
    { source: 'varuna', target: 'rama', type: 'boon', label: 'Source of the Varunastra' },
    { source: 'varuna', target: 'vasishtha', type: 'parent', label: 'Father in the Maitravaruni line' },
    { source: 'varuna', target: 'agastya', type: 'parent', label: 'Father in the Maitravaruni line' },
    { source: 'varuna', target: 'ravana', type: 'enemy', label: 'Fought in the conquest of the quarters' },

    // --- Yama ---
    { source: 'yama', target: 'ravana', type: 'enemy', label: 'Fought him in the realm of the dead' },
    { source: 'yama', target: 'rama', type: 'counsel', label: "Came as Kala with Brahma's message" },
    { source: 'yama', target: 'lakshmana', type: 'enemy', label: 'His condition doomed him' },
    { source: 'yama', target: 'surya', type: 'sibling', label: "Vaivasvata, the sun's son" },

    // --- Surya ---
    { source: 'surya', target: 'sugriva', type: 'parent', label: 'Father' },
    { source: 'surya', target: 'hanuman', type: 'guru', label: 'Taught him the sciences' },
    { source: 'surya', target: 'ikshvaku', type: 'parent', label: 'Head of the solar dynasty' },
    { source: 'surya', target: 'rama', type: 'boon', label: 'The Aditya-hridaya before Ravana\'s death' },
    { source: 'surya', target: 'yama', type: 'parent', label: 'Father of Vaivasvata' },

    // --- Kubera ---
    { source: 'kubera', target: 'ravana', type: 'sibling', label: 'Elder half-brother' },
    { source: 'kubera', target: 'ravana', type: 'enemy', label: 'Driven from Lanka by him' },
    { source: 'kubera', target: 'vishrava', type: 'devotee', label: 'His son by Devavarnini' },
    { source: 'kubera', target: 'viradha', type: 'cursed', label: 'Cursed Tumburu into rakshasa form' },
    { source: 'kubera', target: 'rama', type: 'boon', label: 'Left the Pushpaka at his service' },
    { source: 'kubera', target: 'vibhishana', type: 'sibling', label: 'Half-brother' },
    { source: 'kubera', target: 'kumbhakarna', type: 'sibling', label: 'Half-brother' },

    // --- Ganga ---
    { source: 'ganga', target: 'bhagiratha', type: 'rescued', label: 'Redeemed his ancestors' },
    { source: 'ganga', target: 'sagara', type: 'rescued', label: "Freed his sixty thousand sons" },
    { source: 'ganga', target: 'shiva', type: 'enemy', label: 'Fell on him meaning to sweep him away' },
    { source: 'ganga', target: 'parvati', type: 'sibling', label: 'Elder daughter of Himavan' },
    { source: 'ganga', target: 'rama', type: 'ally', label: 'Crossed at the start of the exile' },

    // --- Bhumi ---
    { source: 'bhumi', target: 'sita', type: 'parent', label: 'Mother' },
    { source: 'bhumi', target: 'sita', type: 'rescued', label: 'Took her back at the final oath' },
    { source: 'bhumi', target: 'janaka', type: 'boon', label: 'Gave him Sita from the furrow' },
    { source: 'bhumi', target: 'ravana', type: 'enemy', label: 'Burdened by his oppression' },

    // --- Lakshmi ---
    { source: 'lakshmi', target: 'sita', type: 'parent', label: 'Incarnated as her' },
    { source: 'lakshmi', target: 'vishnu', type: 'spouse', label: 'Eternal consort' },
    { source: 'lakshmi', target: 'rama', type: 'ally', label: 'Accompanies his descent' },

    // --- Parvati ---
    { source: 'parvati', target: 'shiva', type: 'spouse', label: 'Wife' },
    { source: 'parvati', target: 'ganga', type: 'sibling', label: 'Younger daughter of Himavan' },
    { source: 'parvati', target: 'indra', type: 'cursed', label: "Cursed the gods' wives to barrenness" },
    { source: 'parvati', target: 'agni', type: 'cursed', label: 'Cursed him for taking the seed' },

    // --- Samudra ---
    { source: 'samudra', target: 'rama', type: 'ally', label: 'Agreed to bear the bridge' },
    { source: 'samudra', target: 'nala', type: 'counsel', label: 'Named him as the builder' },
    { source: 'samudra', target: 'sagara', type: 'ally', label: 'Bears his name and his sons\' excavation' },
    { source: 'samudra', target: 'hanuman', type: 'ally', label: 'Raised Mainaka for his rest' },

    // --- Garuda ---
    { source: 'garuda', target: 'rama', type: 'rescued', label: 'Freed him from the nagapasha' },
    { source: 'garuda', target: 'lakshmana', type: 'rescued', label: 'Healed his wounds by touch' },
    { source: 'garuda', target: 'vishnu', type: 'servant', label: 'His mount' },
    { source: 'garuda', target: 'indrajit', type: 'enemy', label: 'Undid his serpent-weapon' },
    { source: 'garuda', target: 'shesha', type: 'enemy', label: 'Hereditary enemy of the nagas' },

    // --- Shesha ---
    { source: 'shesha', target: 'vishnu', type: 'servant', label: 'His couch and canopy' },
    { source: 'shesha', target: 'lakshmana', type: 'parent', label: 'Descended as him by tradition' },
    { source: 'shesha', target: 'bhumi', type: 'ally', label: 'Bears her on his hoods' },

    // --- Kamadhenu ---
    { source: 'kamadhenu', target: 'vasishtha', type: 'servant', label: 'Cow of his sacrifices' },
    { source: 'kamadhenu', target: 'vishwamitra', type: 'enemy', label: 'Destroyed his army' },
    { source: 'kamadhenu', target: 'vasishtha', type: 'boon', label: 'Fed an entire army at his word' },

    // --- Menaka ---
    { source: 'menaka', target: 'vishwamitra', type: 'spouse', label: 'Lived with him ten years' },
    { source: 'menaka', target: 'indra', type: 'servant', label: 'An apsara of his court' },
  ],

  events: [],
};
