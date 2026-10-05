import type { StoryEvent } from '../types';

/**
 * EVENT TIMELINE — Yuddha and Uttara Kandas (order 500..699).
 *
 * Grounded in Valmiki. Where a popular retelling diverges (Bharata shooting
 * Hanuman out of the sky, Kalanemi waylaying him, Rama *ordering* the fire
 * ordeal, Ravana's "ten simultaneous heads"), the divergence is stated inside
 * the description rather than narrated as if it were Valmiki.
 *
 * Shlokas here were checked against the Sanskrit text (sa.wikisource.org,
 * valmikiramayan.net). Where a verse could not be confirmed verbatim, the
 * shloka field is simply omitted.
 *
 * Cross-part cause ids referenced here and expected from the middle slice:
 *   'sundara-shout-of-victory'
 *   'sundara-lanka-burned'
 *   'sundara-chudamani-given'
 *   'kishkindha-sugriva-installed'
 *   'aranya-sita-abducted'
 *   'ayodhya-paduka-nandigrama' (expected id for Nandigrama regency)
 *   'bala-astras-conferred'
 */
export const lateEvents: StoryEvent[] = [
  // ==================================================================
  // YUDDHA KANDA — the march, the bridge, the siege
  // ==================================================================
  {
    id: 'yuddha-march-south',
    title: 'The Vanara Host Marches South',
    kanda: 'yuddha',
    sarga: '6.4',
    order: 502,
    characterIds: ['rama', 'lakshmana', 'sugriva', 'hanuman', 'angada', 'jambavan', 'nila', 'nala', 'mainda', 'dvivida', 'sushena', 'gandhamadana'],
    location: 'Kishkindha to the northern shore of the southern ocean',
    description:
      'Hanuman\'s report has turned a search into a campaign, and Sugriva empties Kishkindha. Rama rides on Hanuman\'s shoulders and Lakshmana on Angada\'s, with Nila commanding the vanguard, Gaja, Gavaya and Gavaksha holding the flanks, and Jambavan\'s bears bringing up the rear. The host moves by the Sahya and Malaya ranges, stripping the slopes of fruit and flowers as it goes, and Rama reads the omens aloud to Lakshmana: his right eye throbs, his right arm throbs, and Shukra stands bright behind him, all signs of victory. They halt at last on the northern shore of the sea, where the water is so loud that the vanaras fall silent for the first time in the march.',
    significance:
      'The moment the rescue of one woman becomes an army of millions crossing a subcontinent — the pivot from search to war.',
    causes: ['sundara-shout-of-victory', 'kishkindha-sugriva-installed'],
  },
  {
    id: 'yuddha-omens-and-sea-camp',
    title: 'Encampment on the Shore and the Reading of Omens',
    kanda: 'yuddha',
    sarga: '6.4-5',
    order: 504,
    characterIds: ['rama', 'lakshmana', 'sugriva', 'hanuman', 'sita', 'ravana'],
    location: 'The northern shore of the ocean, facing Lanka',
    description:
      'The army spreads along the beach in companies, forbidden to forage at random so that the camp cannot be infiltrated. Rama looks at the hundred yojanas of water and admits plainly to Lakshmana that he does not know how to cross it, and that the grief which had been held off by activity now returns at nightfall. In the same hours, across the strait, Ravana orders the watch doubled on the ramparts that Hanuman burned, and Sita counts the days of the two-month term that is nearly spent. Valmiki sets the two sleepless nights side by side on purpose.',
    significance:
      'Establishes the ocean as the real antagonist of the first half of the Yuddha Kanda — an obstacle no weapon has yet touched.',
    causes: ['yuddha-march-south', 'sundara-lanka-burned'],
  },
  {
    id: 'yuddha-ravana-war-council',
    title: "Ravana's Council of War",
    kanda: 'yuddha',
    sarga: '6.6-9',
    order: 506,
    characterIds: ['ravana', 'kumbhakarna', 'indrajit', 'prahasta', 'vibhishana', 'mahaparshva', 'nikumbha', 'malyavan'],
    location: 'The council hall of Lanka',
    description:
      'Ravana convenes his ministers and opens by conceding something he has never conceded before: a single monkey entered his city, killed Aksha, and burned it, and that monkey was only a messenger. The hall answers with boasting — Prahasta offers to eat the vanaras, Indrajit reminds the court that he has defeated Indra himself and calls Rama a man in bark cloth, Mahaparshva proposes simply forcing Sita. Kumbhakarna, woken briefly, rebukes his brother for taking counsel after acting rather than before, then pledges his own arm anyway. Only the aged Malyavan, Ravana\'s maternal grandfather, says aloud that the omens are against Lanka and that a king who fights the dharma loses; Ravana dismisses him with contempt.',
    significance:
      'Shows Lanka losing the war in council before a single arrow is fired: every voice of sense is shouted down or insulted.',
    causes: ['sundara-lanka-burned'],
  },
  {
    id: 'yuddha-vibhishana-counsel-rejected',
    title: 'Vibhishana Is Kicked From the Throne Steps',
    kanda: 'yuddha',
    sarga: '6.14-16',
    order: 508,
    characterIds: ['vibhishana', 'ravana', 'indrajit', 'sita', 'rama'],
    location: 'The council hall of Lanka',
    description:
      'Vibhishana argues the only case that could still save Lanka: Sita was taken by force, the rakshasa women themselves see evil omens in every courtyard, and the remedy is to return her with honour before Rama\'s arrows arrive. Indrajit sneers at his uncle for timidity, and Vibhishana answers that a nephew who talks of victory before a battle has been fought is a child. Ravana, enraged, calls his brother a traitor who has been waiting for the family to weaken, says that any other man would already be dead, and spurns him with his foot. Vibhishana rises into the air with four companions and tells Ravana to his face that he is a corpse already garlanded.',
    significance:
      'The final rejection of the one policy that could have ended the war without a siege, and the breaking of Ravana\'s own house.',
    causes: ['yuddha-ravana-war-council'],
  },
  {
    id: 'yuddha-vibhishana-defects',
    title: 'Vibhishana Crosses the Sea and Hovers Above the Vanara Camp',
    kanda: 'yuddha',
    sarga: '6.17',
    order: 510,
    characterIds: ['vibhishana', 'sugriva', 'hanuman', 'angada', 'jambavan', 'nila', 'rama', 'lakshmana'],
    location: 'The air above the vanara camp on the northern shore',
    description:
      'Four rakshasas in armour appear over the beach and the whole camp reaches for boulders. Vibhishana calls down that he is Ravana\'s younger brother, that he counselled the return of Sita and was spurned for it, and that he has come to Rama for refuge. Sugriva goes straight to Rama and advises killing him, arguing that rakshasas change shape and that a brother who abandons his brother in a crisis will abandon anyone. Rama hears him out and then asks the question that decides the war: if a man comes once asking shelter, on what grounds is he refused?',
    significance:
      'Puts the epic\'s central ethical question — sharanagati, the duty owed to one who asks refuge — directly against military prudence.',
    causes: ['yuddha-vibhishana-counsel-rejected'],
  },
  {
    id: 'yuddha-rama-grants-refuge',
    title: '"This Is My Vow": Rama Accepts Vibhishana',
    kanda: 'yuddha',
    sarga: '6.17-18',
    order: 512,
    characterIds: ['rama', 'vibhishana', 'sugriva', 'hanuman', 'lakshmana', 'angada', 'jambavan'],
    location: 'The vanara camp on the northern shore',
    description:
      'Rama polls his captains. Angada and Sharabha counsel caution and a watch; Jambavan counsels suspicion; Hanuman alone argues that Vibhishana came in daylight, praised Rama first, and named his own motive, and that a spy does none of those things. Rama then rules against the majority, citing the old verse of the dove that honoured the fowler who had eaten its mate, and declares a vow with no conditions attached to it. He ends by telling Sugriva to bring the man up, and adds that his protection would stand even if the petitioner were Ravana himself.',
    significance:
      'Rama\'s vow of refuge is the moral keystone of the Yuddha Kanda and, in later tradition, the single most quoted line of the epic.',
    shloka: {
      devanagari:
        'सकृदेव प्रपन्नाय तवास्मीति च याचते |\nअभयं सर्वभूतेभ्यो ददाम्येतद् व्रतं मम ||',
      transliteration:
        'sakṛd eva prapannāya tavāsmīti ca yācate |\nabhayaṃ sarvabhūtebhyo dadāmy etad vrataṃ mama ||',
      translation:
        'To one who has come to me but once, who begs of me saying "I am yours" — I grant him safety from all beings. This is my vow.',
      ref: '6.18.33',
      context: 'Rama overruling Sugriva and his council to accept Vibhishana as a refugee.',
    },
    causes: ['yuddha-vibhishana-defects'],
  },
  {
    id: 'yuddha-vibhishana-consecrated',
    title: 'Vibhishana Consecrated King of Lanka on the Beach',
    kanda: 'yuddha',
    sarga: '6.19',
    order: 514,
    characterIds: ['vibhishana', 'rama', 'lakshmana', 'sugriva', 'hanuman', 'samudra', 'ravana'],
    location: 'The seashore camp',
    description:
      'Rama does not merely accept Vibhishana; he has sea water brought in jars and has Lakshmana pour the abhisheka over him then and there, naming him king of Lanka while Ravana still sits on its throne. The vanaras roar their approval, and Vibhishana, asked what he wants in return, says only that he wishes to be of use. He at once begins to earn it, naming the four gates of Lanka, the commanders posted at each, the strength of the garrison, and the fact that Brahma\'s boon never covered men or monkeys. Hanuman confirms every detail from what he saw by night.',
    significance:
      'Converts a defector into a legitimate claimant, so the war becomes a war of restoration rather than conquest.',
    causes: ['yuddha-rama-grants-refuge'],
  },
  {
    id: 'yuddha-rama-fast-at-ocean',
    title: 'Rama Lies Three Nights on Darbha Grass Before the Sea',
    kanda: 'yuddha',
    sarga: '6.21',
    order: 516,
    characterIds: ['rama', 'lakshmana', 'samudra', 'vibhishana', 'sugriva'],
    location: 'The water\'s edge, northern shore',
    description:
      'On Vibhishana\'s advice that the Ocean is an ancestor of the Ikshvakus and should be petitioned rather than attacked, Rama spreads darbha grass at the tideline, touches water, and lies down facing east to fast until the sea answers. He lies there three nights and the sea does not stir. On the fourth morning Rama rises in a cold fury, tells Lakshmana that patience and courtesy are read as weakness in this world, and strings his bow, saying he will dry the channel to its bed so the vanaras can walk across on sand. The Brahmastra he fits to the string makes the waters boil and the sea-creatures rise in panic.',
    significance:
      'The only passage where Rama is shown losing his temper outright, and the one that forces the ocean to negotiate.',
    causes: ['yuddha-vibhishana-consecrated', 'yuddha-omens-and-sea-camp'],
  },
  {
    id: 'yuddha-samudra-appears',
    title: 'Samudra Rises From the Water',
    kanda: 'yuddha',
    sarga: '6.22',
    order: 518,
    characterIds: ['samudra', 'rama', 'lakshmana', 'nala', 'vibhishana'],
    location: 'The strait between the mainland and Lanka',
    description:
      'With the arrow already drawn, the Ocean himself rises out of the middle of the water, jewelled, with rivers and serpents about him, and offers Rama his palms. He pleads that he cannot simply cease to be deep without violating his own nature, as earth cannot cease to be solid — but that he will hold still and bear up whatever is laid across him. He then points out Nala, son of Vishvakarma, standing among the vanaras, and says that this one alone has the boon needed to build on water.',
    significance:
      'Supplies the engineering solution and, more importantly, lets nature submit without being destroyed — the restraint Rama will later show to Ravana\'s corpse.',
    shloka: {
      devanagari:
        'ततो मध्यात् समुद्रस्य सागरः स्वयमुत्थितः ॥',
      transliteration:
        'tato madhyāt samudrasya sāgaraḥ svayam utthitaḥ ||',
      translation:
        'Then from the midst of the sea, the Ocean himself rose up.',
      ref: '6.22.17',
      context: 'The ocean god appearing in person once Rama fits the Brahmastra to his bow.',
    },
    causes: ['yuddha-rama-fast-at-ocean'],
  },
  {
    id: 'yuddha-setu-built',
    title: 'Nala Builds the Setu in Five Days',
    kanda: 'yuddha',
    sarga: '6.22',
    order: 520,
    characterIds: ['nala', 'rama', 'samudra', 'hanuman', 'nila', 'angada', 'jambavan', 'sugriva', 'lakshmana', 'mainda', 'dvivida'],
    location: 'The hundred-yojana strait to Lanka',
    description:
      'Nala, who has his father Vishvakarma\'s boon that whatever he sets on water will float, lays out the line and the vanaras go to work. They tear up sala and ashvakarna trees, bamboo, palmyra and whole hillsides, carry them in their arms and on their heads, and drive them into the sea along measuring cords; the work advances fourteen yojanas the first day, twenty the second, twenty-one the third, twenty-two the fourth and twenty-three the fifth. The finished causeway is ten yojanas broad and a hundred long, straight as the parting in a woman\'s hair, and the gods and gandharvas come to look at it. Valmiki gives the credit to Nala\'s craft and the vanaras\' labour, not to any miracle of floating stones inscribed with a name — that detail belongs to much later retellings.',
    significance:
      'The single most famous feat of engineering in the epic, and the act that makes Lanka reachable at last.',
    shloka: {
      devanagari:
        'अयं सौम्य नलो नाम तनुजो विश्वकर्मणः |\nएष सेतुं महोत्साहः करोतु मयि वानरः ||',
      transliteration:
        'ayaṃ saumya nalo nāma tanujo viśvakarmaṇaḥ |\neṣa setuṃ mahotsāhaḥ karotu mayi vānaraḥ ||',
      translation:
        'Gentle one, this vanara is named Nala, the son of Vishvakarma; let this high-spirited one build the causeway upon me.',
      ref: '6.22.44-45',
      context: 'The Ocean naming the only builder who can bridge him, and promising to bear the causeway up.',
    },
    causes: ['yuddha-samudra-appears'],
  },
  {
    id: 'yuddha-crossing-and-suvela',
    title: 'The Crossing and the Climb of Mount Suvela',
    kanda: 'yuddha',
    sarga: '6.22-23, 6.37-39',
    order: 522,
    characterIds: ['rama', 'lakshmana', 'sugriva', 'hanuman', 'vibhishana', 'angada', 'jambavan', 'nila', 'ravana'],
    location: 'The setu, the Lankan shore, and the summit of Mount Suvela',
    description:
      'Rama crosses on Hanuman\'s shoulders and Lakshmana on Angada\'s while the host swarms over and alongside the causeway, many of them simply swimming beside it. Rama notes grim omens as he lands — a red ring around the sun, blood-coloured clouds, jackals howling toward the sunset — and says plainly that they foretell a slaughter of both armies. The vanaras overrun the groves of Lanka and camp on Mount Suvela, from whose summit Rama first sees the city itself: the moat, the seven-storeyed gatehouses, and Ravana standing on the rampart under a white parasol with fans of yak-tail moving beside him. Sugriva, seeing him, springs from the hill onto the rampart, tears the crown from Ravana\'s head and springs back, which is bravado Rama immediately scolds him for.',
    significance:
      'The two principals lay eyes on each other for the first time, and Lanka ceases to be a rumour.',
    causes: ['yuddha-setu-built'],
  },
  {
    id: 'yuddha-shuka-sarana-spies',
    title: 'Shuka and Sarana Caught Counting the Army',
    kanda: 'yuddha',
    sarga: '6.24-29',
    order: 524,
    characterIds: ['rama', 'vibhishana', 'ravana', 'hanuman', 'sugriva', 'angada', 'jambavan', 'nila', 'lakshmana', 'nala', 'sushena'],
    location: 'The vanara camp below Lanka',
    description:
      'Ravana sends his ministers Shuka and Sarana in vanara shape to count Rama\'s strength. Vibhishana, who has known them all his life, picks them out of the crowd at once and they are seized and beaten. Rama orders them released untouched, telling them to go back and look again as long as they like, since spies are only messengers and killing a messenger is beneath a king. They return and, instead of a tally, deliver a terrified roll-call of the enemy — naming Nila, Angada, Nala, Sushena, Jambavan, the sons of the wind and the sun — and advise Ravana to give Sita back. Ravana answers that he would not give her up though the gods themselves came for her, and a third spy, Shardula, fares no better.',
    significance:
      'A deliberate contrast of the two kings: Rama frees the enemy\'s spies, Ravana cannot bear the truth his own spies bring.',
    causes: ['yuddha-crossing-and-suvela', 'yuddha-vibhishana-consecrated'],
  },
  {
    id: 'yuddha-illusory-head',
    title: "Vidyujjihva's Illusion: Rama's Severed Head Shown to Sita",
    kanda: 'yuddha',
    sarga: '6.31-32',
    order: 526,
    characterIds: ['ravana', 'sita', 'vidyujjihva', 'trijata'],
    location: 'The Ashoka grove, Lanka',
    description:
      'Unable to frighten Sita with threats or buy her with a kingdom, Ravana tries grief. He has the sorcerer Vidyujjihva conjure a head with Rama\'s face and matted hair, and a great bow with it, and walks into the grove to tell her that Prahasta cut it off while the army slept, that the vanaras are scattered, and that she is now a widow with nothing left to be loyal to. Sita collapses, speaks of Kausalya and of Kaikeyi\'s success, and begs to be killed on her husband\'s body. The illusion fails only because a messenger calls Ravana away to the council and the conjured head vanishes with him.',
    significance:
      "Ravana's last attempt to win Sita by any means short of force, and the cruellest thing he does in the epic.",
    causes: ['yuddha-shuka-sarana-spies', 'aranya-sita-abducted'],
  },
  {
    id: 'yuddha-sarama-reassures-sita',
    title: 'Sarama Tells Sita the Head Was a Trick',
    kanda: 'yuddha',
    sarga: '6.33-34',
    order: 528,
    characterIds: ['sarama', 'sita', 'ravana', 'rama', 'trijata', 'mandodari'],
    location: 'The Ashoka grove, Lanka',
    description:
      'Sarama, a rakshasi who has quietly befriended Sita, comes to her where she lies on the ground and tells her the whole thing was sorcery: Rama is alive on Suvela, the head was conjured and dissolved, and the bow with it. She offers to carry a message to Rama herself, and Sita, characteristically, refuses to ask for anything beyond news. Sarama then creeps to the council hall and brings back word that Ravana\'s own queen Mandodari and his aged ministers are urging him to return Sita, and that only Ravana refuses. Shortly afterwards the drums of Rama\'s assault are heard from the walls, and Sarama tells Sita that the sound is her rescue beginning.',
    significance:
      'Keeps Sita alive through the lowest point of her captivity and shows that even inside Lanka opinion has turned against Ravana.',
    causes: ['yuddha-illusory-head'],
  },
  {
    id: 'yuddha-angada-embassy',
    title: "Angada's Embassy and the Challenge at the Gate",
    kanda: 'yuddha',
    sarga: '6.41',
    order: 530,
    characterIds: ['angada', 'rama', 'ravana', 'lakshmana', 'sugriva', 'hanuman'],
    location: 'The court of Ravana, Lanka',
    description:
      'Before the first assault Rama sends Angada over the wall with a formal last demand: come out and fight, or return Sita and live. Angada stands in the hall and calls Ravana by name, reminds him that he abducted a woman in secret because he dared not face two men in the open, and offers him Rama\'s protection if he will submit. Ravana orders him seized; four rakshasas take hold of his arms, and Angada simply leaps for the roof carrying all four with him, shakes them off, breaks the tower under his feet and jumps back over the wall. Valmiki does not narrate the famous episode in which Angada plants his foot in the hall and defies the court to lift it — that contest comes from later retellings and regional Ramayanas, not from this sarga.',
    significance:
      'The legal formality that makes the war just: Rama offers terms twice over and Ravana refuses them in front of his own court.',
    causes: ['yuddha-shuka-sarana-spies', 'yuddha-crossing-and-suvela'],
  },
  {
    id: 'yuddha-siege-of-lanka-begins',
    title: 'The Siege: Four Gates and the First Assault',
    kanda: 'yuddha',
    sarga: '6.42-44',
    order: 532,
    characterIds: ['rama', 'lakshmana', 'sugriva', 'hanuman', 'angada', 'nila', 'jambavan', 'vibhishana', 'ravana', 'prahasta', 'indrajit', 'mahaparshva'],
    location: 'The walls and four gates of Lanka',
    description:
      'Rama divides the host by Vibhishana\'s intelligence: Nila against Prahasta at the eastern gate, Angada against Mahaparshva at the south, Hanuman against Indrajit at the west, Rama and Lakshmana at the northern gate where Ravana himself commands, and Sugriva held in reserve with Jambavan. The vanaras fill the moat with trees and earth, tear the gates, and fight hand to hand through the night, when the rakshasas are strongest; Valmiki describes the fighting as so confused that the two sides can only tell each other apart by shouting Rama\'s name. Prahasta, Ravana\'s commander-in-chief and the veteran of his conquest of the worlds, comes out at last with the whole reserve and is killed by Nila with a rock to the head. Ravana himself then takes the field, drives the vanaras back, and is met by Rama, who shears off his crown and bow and sends him home with the famous line that he is tired and may return tomorrow.',
    significance:
      'Lanka loses its commander-in-chief and its king is spared and humiliated in a single day of fighting.',
    causes: ['yuddha-angada-embassy'],
  },
  {
    id: 'yuddha-naga-pasha-and-garuda',
    title: 'The Serpent-Noose and the Coming of Garuda',
    kanda: 'yuddha',
    sarga: '6.45-50',
    order: 534,
    characterIds: ['indrajit', 'rama', 'lakshmana', 'garuda', 'hanuman', 'vibhishana', 'jambavan', 'sugriva', 'sita', 'trijata', 'ravana', 'angada'],
    location: 'The battlefield before the northern gate; the Ashoka grove',
    description:
      'Indrajit, who has the art of fighting invisibly, rises into the sky and binds both brothers with the nagapasha, arrows that become serpents and coil them from head to foot; they fall and the whole army believes them dead. Ravana has Sita carried over the field in the Pushpaka to look at the bodies, meaning to break her, and only Trijata\'s insistence that living men do not lie with that light on their faces keeps her from despair. Then Garuda, the eternal enemy of serpents, descends on his own initiative, and at the touch of his wings the nooses loosen and slide away; he tells Rama their wounds are healed and their strength doubled, refuses to explain who he is beyond calling himself Rama\'s friend, and flies off. The vanaras raise such a shout that Ravana sends out Dhumraksha, who is killed by Hanuman, and then Vajradamshtra and Akampana, who are killed by Angada and Hanuman in turn.',
    significance:
      'Establishes Indrajit as a weapon no conventional valour can answer, and introduces divine intervention as something that arrives unasked.',
    causes: ['yuddha-siege-of-lanka-begins'],
  },
  {
    id: 'yuddha-kumbhakarna-woken',
    title: 'Kumbhakarna Is Woken',
    kanda: 'yuddha',
    sarga: '6.60-63',
    order: 536,
    characterIds: ['kumbhakarna', 'ravana', 'vibhishana', 'mahaparshva', 'brahma'],
    location: 'The cave-chamber of Kumbhakarna, Lanka',
    description:
      'With Prahasta dead and his own crown broken, Ravana orders his brother woken out of the six-month sleep that Brahma gave him in place of the boon he meant to ask for. It takes a thousand rakshasas: they beat drums and conches in his ears, pile heaps of meat and jars of blood and wine before him, drive elephants over his chest and strike him with maces, and at last he opens his eyes and eats. Told the situation, Kumbhakarna laughs and tells Ravana to his face that he was warned, that a king who takes another man\'s wife has already lost, and that Vibhishana spoke the truth — but that he will go and fight regardless, because he is a brother before he is a counsellor. He refuses Mahaparshva\'s wine-soaked flattery, picks up his iron pike, and walks out through the gate so large that the vanaras scatter at the sight of him.',
    significance:
      'Valmiki\'s most sympathetic enemy: a man who knows the cause is wrong, says so, and dies for it anyway.',
    causes: ['yuddha-siege-of-lanka-begins', 'yuddha-naga-pasha-and-garuda'],
  },
  {
    id: 'yuddha-kumbhakarna-slain',
    title: "Kumbhakarna's Last Battle",
    kanda: 'yuddha',
    sarga: '6.65-67',
    order: 538,
    characterIds: ['kumbhakarna', 'rama', 'lakshmana', 'hanuman', 'sugriva', 'angada', 'nila', 'jambavan', 'vibhishana', 'ravana', 'indra'],
    location: 'The field before Lanka',
    description:
      'Kumbhakarna wades into the vanara host, sweeping them up by handfuls and stuffing them into his mouth so that some crawl out of his ears and nostrils, and the army breaks. Hanuman strikes him with a hilltop and is wounded; Sugriva is seized and carried off bodily toward the city, and only tears his captor\'s ears and nose away and escapes. Vibhishana comes forward and his brother, recognising him, tells him he was right and blesses him before sending him out of reach. Rama then shears off one arm with a crescent-headed arrow, then the other, then both legs, and at last cuts off the head with the Indrastra, and the enormous trunk falls into the sea and crushes the fish and the fleet that lie there.',
    significance:
      'The death of the only rakshasa whose sheer mass could have broken the siege, and the moment Ravana begins to grieve in earnest.',
    causes: ['yuddha-kumbhakarna-woken'],
  },
  {
    id: 'yuddha-atikaya-and-ravanas-sons',
    title: 'Narantaka, Trishira, Devantaka and Atikaya Fall',
    kanda: 'yuddha',
    sarga: '6.69-71',
    order: 540,
    characterIds: ['atikaya', 'narantaka', 'devantaka', 'trishira', 'mahaparshva', 'lakshmana', 'hanuman', 'angada', 'nila', 'rama', 'ravana', 'brahma'],
    location: 'The field before Lanka',
    description:
      'Ravana sends out his younger sons and kinsmen in a body. Angada kills Narantaka and his horse with a single blow of the fist; Hanuman kills Devantaka and Trishira; Nila and Rishabha account for Mahodara and Mahaparshva. Then Atikaya comes out, so tall that the vanaras take him for a second Kumbhakarna, armoured by Brahma\'s own gift and unkillable by ordinary shafts. Lakshmana duels him through a long exchange until Vayu whispers in his ear that only the Brahmastra will serve, and the head of Ravana\'s giant son is carried away by it.',
    significance:
      'Strips Ravana of the last of his sons but Indrajit, and marks Lakshmana as the one who kills what Rama does not.',
    causes: ['yuddha-kumbhakarna-slain'],
  },
  {
    id: 'yuddha-indrajit-binds-brothers',
    title: 'Indrajit Fells Rama and Lakshmana From the Clouds',
    kanda: 'yuddha',
    sarga: '6.73',
    order: 542,
    characterIds: ['indrajit', 'rama', 'lakshmana', 'vibhishana', 'hanuman', 'jambavan', 'sugriva', 'angada', 'nila', 'brahma'],
    location: 'The field before Lanka',
    description:
      'Indrajit performs his fire rite, makes himself invisible, and shoots from inside a cloud of his own making. Rama, bound by the Brahmastra he will not insult by resisting, lets himself be struck, and both brothers go down with their bodies pierced in so many places that Valmiki says blood ran from them like water from a spring. Sixty-seven crores of vanaras fall around them; Sugriva, Angada, Jambavan, Nila, Mainda, Dvivida and Gandhamadana all lie wounded in the heap. Vibhishana and Hanuman walk the field at night with torches looking for survivors and find Jambavan, blind with blood, who asks only one question: is Hanuman alive? — because so long as Hanuman lives the army lives.',
    significance:
      'The deepest crisis of the war, and the passage that states outright that Hanuman alone is worth the whole army.',
    causes: ['yuddha-atikaya-and-ravanas-sons', 'yuddha-naga-pasha-and-garuda'],
  },
  {
    id: 'yuddha-hanuman-sanjivani-first',
    title: 'Hanuman Brings the Mountain of Herbs',
    kanda: 'yuddha',
    sarga: '6.74',
    order: 544,
    characterIds: ['hanuman', 'jambavan', 'lakshmana', 'rama', 'sushena', 'vibhishana', 'sugriva', 'angada', 'kalanemi'],
    location: 'The Himalaya between Rishabha and Kailasa, and back to Lanka',
    description:
      'Jambavan sends Hanuman north to the mountain of healing herbs that stands between Rishabha and Kailasa, and names the four he must bring: mritasanjivani which revives the dead, vishalyakarani which draws out embedded shafts, sauvarnyakarani which restores the skin, and samdhani which knits broken bone. Hanuman flies over the Vindhyas and the Himalaya, reaches the peak, and finds that the herbs have hidden themselves from him — so he tears up the entire summit and carries it back through the sky in one hand. The scent alone brings Rama, Lakshmana and the fallen vanaras to their feet, healed, though the dead rakshasas, whom Ravana has had thrown into the sea, stay dead. Hanuman then carries the mountain back and sets it where it stood; Valmiki does not narrate the ogre Kalanemi waylaying him on the way, nor Bharata shooting him out of the sky over Ayodhya, both of which come from later retellings.',
    significance:
      'The single most famous image of Hanuman in all later devotion, and the act that puts Rama\'s whole army back on its feet overnight.',
    causes: ['yuddha-indrajit-binds-brothers'],
  },
  {
    id: 'yuddha-indrajit-illusory-sita',
    title: 'Indrajit Kills an Illusion of Sita Before the Army',
    kanda: 'yuddha',
    sarga: '6.80-81',
    order: 546,
    characterIds: ['indrajit', 'hanuman', 'rama', 'lakshmana', 'vibhishana', 'sita', 'jambavan', 'sugriva'],
    location: 'Before the western gate of Lanka',
    description:
      'Seeing that the vanaras have risen again, Indrajit drives his chariot out with a weeping woman beside him who has Sita\'s face, her single braid and her soiled yellow silk. In full view of Hanuman and the host he seizes her by the hair and cuts her in two with his sword, announcing that the cause of the war is finished. Hanuman, who had sat and spoken with Sita for an afternoon, is utterly taken in; the army breaks off fighting and he carries the news to Rama, who faints. It is Vibhishana who sees through it, telling Rama that Ravana would never permit Sita to be killed, that Ravana\'s own ministers are pressing him to give her back, and that the whole display was staged to buy Indrajit time for a sacrifice at the Nikumbhila shrine.',
    significance:
      'Indrajit\'s cruellest and cleverest stroke — and the one that betrays exactly where he will be and what he needs.',
    causes: ['yuddha-hanuman-sanjivani-first'],
  },
  {
    id: 'yuddha-nikumbhila-broken',
    title: 'The Nikumbhila Sacrifice Broken and Indrajit Slain',
    kanda: 'yuddha',
    sarga: '6.84-90',
    order: 548,
    characterIds: ['lakshmana', 'indrajit', 'vibhishana', 'hanuman', 'jambavan', 'angada', 'rama', 'indra', 'agni'],
    location: 'The Nikumbhila grove at the western gate of Lanka',
    description:
      'Vibhishana explains that if Indrajit completes the fire sacrifice at Nikumbhila he will rise from it invisible and unkillable, and that the rite must be broken before the final oblation. Rama sends Lakshmana with Hanuman, Jambavan and Vibhishana through a side gate, and they find the grove, the black goat, the fire fed with bloody offerings, and Indrajit beginning. The vanaras wreck the altar; Indrajit springs up without finishing, and reproaches his uncle bitterly for guiding enemies into his own family\'s shrine, to which Vibhishana answers that the house of a wicked man is no refuge. The duel that follows lasts through a storm of divine weapons until Lakshmana fits the Aindrastra and swears on Rama\'s truth, his austerity and his own fidelity, and the arrow carries off the head of the only warrior who had ever defeated Indra.',
    significance:
      'The real turning point of the war — Valmiki has Rama say afterwards that with Indrajit dead Lanka is already taken.',
    causes: ['yuddha-indrajit-illusory-sita'],
  },
  {
    id: 'yuddha-shakti-fells-lakshmana',
    title: "Ravana's Shakti Strikes Lakshmana Down",
    kanda: 'yuddha',
    sarga: '6.100-101',
    order: 550,
    characterIds: ['ravana', 'lakshmana', 'rama', 'hanuman', 'vibhishana', 'sushena', 'maya', 'sugriva'],
    location: 'The field before Lanka',
    description:
      'Maddened by his son\'s death, Ravana first runs into the Ashoka grove meaning to kill Sita himself and is turned back by his minister Suparshva, then comes out for the last time to fight in earnest. Lakshmana puts himself between Ravana and Rama, breaks his bow and his chariot and strikes down his charioteer; in answer Ravana takes up the shakti given him by Maya, a spear burning like a great meteor, and drives it into Lakshmana\'s chest. Lakshmana falls and Rama cannot pull the weapon out until he lifts the stunned body in his own arms, at which the shaft comes free. Rama sets Hanuman and Sugriva to guard him and goes out alone, and it is here that he speaks the lament that he can find another wife and another kingdom but never another brother.',
    significance:
      'Brings Rama to the point of fighting without reserve, and sets up the second and more urgent errand for the healing herbs.',
    causes: ['yuddha-nikumbhila-broken'],
  },
  {
    id: 'yuddha-hanuman-sanjivani-second',
    title: 'Sushena Sends Hanuman for the Herbs a Second Time',
    kanda: 'yuddha',
    sarga: '6.101',
    order: 552,
    characterIds: ['sushena', 'hanuman', 'lakshmana', 'rama', 'sugriva', 'vibhishana', 'jambavan'],
    location: 'The Lankan camp and the Himalaya',
    description:
      'The vanara physician Sushena examines Lakshmana, finds breath still in him, and names the herbs again — vishalyakarani and sauvarnyakarani from the mountain between Rishabha and Kailasa — telling Hanuman he must be back before dawn. Hanuman makes the double journey in a night, bringing the peak a second time, and Sushena crushes the herbs and holds them to Lakshmana\'s nose; the spear-wound closes, the pain goes, and Lakshmana stands up free of weakness. His first words are not about himself but about finishing Ravana before the night is out. Rama embraces him and weeps, and the fighting resumes at once.',
    significance:
      'Hanuman\'s second errand is the one that actually saves a life rather than an army, and it is why he is remembered as the servant who does the impossible twice.',
    causes: ['yuddha-shakti-fells-lakshmana', 'yuddha-hanuman-sanjivani-first'],
  },
  {
    id: 'yuddha-indra-sends-matali',
    title: "Indra Sends His Chariot, and Agastya Teaches the Aditya Hridayam",
    kanda: 'yuddha',
    sarga: '6.102, 6.105',
    order: 554,
    characterIds: ['indra', 'rama', 'agastya', 'ravana', 'surya', 'lakshmana', 'hanuman', 'vibhishana', 'brahma'],
    location: 'The field before Lanka',
    description:
      'Rama is on foot and Ravana is in a chariot, and the gods will not watch the duel decided by that. Indra sends down his own war-car with Matali driving it, yoked to green horses and hung with gold, and Matali tells Rama to mount and use Indra\'s bow and the spear that Shiva gave. At the same hour the sage Agastya, standing among the gods who have come to watch, sees Rama exhausted and anxious and teaches him the hymn to the sun called the Aditya Hridayam, telling him to recite it three times and he will conquer. Rama sips water, faces the sun, recites it, and takes up the bow with his weariness gone.',
    significance:
      'Levels the field for the final duel and supplies the hymn that becomes one of the most recited passages of the epic.',
    causes: ['yuddha-hanuman-sanjivani-second'],
  },
  {
    id: 'yuddha-ravana-slain',
    title: "The Brahmastra of Agastya and Ravana's Fall",
    kanda: 'yuddha',
    sarga: '6.107-108',
    order: 556,
    characterIds: ['rama', 'ravana', 'agastya', 'indra', 'lakshmana', 'vibhishana', 'hanuman', 'brahma', 'sugriva'],
    location: 'The field before Lanka',
    description:
      'The duel runs through a day and a night without a pause, arrow answering arrow until the sky is dark with them. Rama shears off Ravana\'s heads again and again and each time another grows in its place, so that Valmiki is explicit that the famous ten heads are a thing Rama has to cut off repeatedly rather than a single stroke. At last Matali reminds him of the weapon Agastya gave: a shaft made by Brahma, with wind in its feathers, fire and sun in its head and the weight of Meru in its shaft. Rama charges it with mantras and looses it; it splits Ravana\'s heart, drinks his life, and returns of itself to the quiver, and the lord of the rakshasas falls out of his chariot as Vritra fell under the thunderbolt.',
    significance:
      'The end of the war and of the boon that made Ravana untouchable — killed, as Brahma arranged, by the one species he never bothered to name.',
    shloka: {
      devanagari:
        'गतासुर्भीमवेगस्तु नैर्ऋतेन्द्रो महाद्युतिः |\nपपात स्यन्दनाद् भूमौ वृत्रो वज्रहतो यथा ||',
      transliteration:
        'gatāsur bhīmavegas tu nairṛtendro mahādyutiḥ |\npapāta syandanād bhūmau vṛtro vajrahato yathā ||',
      translation:
        'His life gone, that lord of the rakshasas of terrible swiftness and great splendour fell from his chariot to the earth, as Vritra fell struck by the thunderbolt.',
      ref: '6.108.22',
      context: "The moment Ravana dies, struck by the Brahmastra Agastya gave Rama.",
    },
    causes: ['yuddha-indra-sends-matali', 'bala-astras-conferred'],
  },
  {
    id: 'yuddha-mandodari-lament',
    title: "Mandodari's Lament Over Ravana",
    kanda: 'yuddha',
    sarga: '6.109-111',
    order: 558,
    characterIds: ['mandodari', 'ravana', 'vibhishana', 'rama', 'lakshmana', 'sita'],
    location: 'The battlefield outside the southern gate of Lanka',
    description:
      'Vibhishana weeps over his brother and refuses at first to perform the rites for a man who stole another\'s wife; Rama answers him with the sentence that ends all enmity — vairani maranantani, hostilities end with death — and tells him Ravana is now as much Rama\'s brother as his own. Then the women of the inner apartments come out of the city, and Mandodari throws herself on the body. Her lament is the most clear-sighted speech in the epic: she says her husband was not killed by a man but by his own act, that Rama is no ordinary prince, that Sita is neither more beautiful nor more fortunate than she is herself, and that the war was lost the day Vibhishana was driven out. She ends by telling the corpse that it was not Rama\'s arrow that killed him but kama, desire.',
    significance:
      'Gives the defeated side the last word and the clearest diagnosis of why they lost.',
    causes: ['yuddha-ravana-slain'],
  },

  // ==================================================================
  // YUDDHA KANDA — the aftermath, the ordeal, and the return
  // ==================================================================
  {
    id: 'yuddha-funeral-and-vibhishana-crowned',
    title: "Ravana's Funeral and Vibhishana Enthroned in Lanka",
    kanda: 'yuddha',
    sarga: '6.112-113',
    order: 560,
    characterIds: ['vibhishana', 'rama', 'lakshmana', 'mandodari', 'ravana', 'agni', 'hanuman', 'sugriva'],
    location: 'Lanka and its cremation ground',
    description:
      'At Rama\'s insistence Vibhishana builds the pyre of sandal and padmaka wood, wraps the body in linen, and performs the full royal rite with black antelope skin, the sacrificial ladles and the chanting of the Yajurveda, while the rakshasa women circle the fire and are led back into the city. Rama then has Lakshmana consecrate Vibhishana a second time, now actually on the throne of Lanka rather than on a beach, and the new king\'s first act is to distribute food and cloth to the surviving population. Rama himself does not enter Lanka at any point; he keeps outside the walls and sends Hanuman in as his messenger. The restraint is deliberate and Valmiki says so: a man who takes a city he did not come for is no better than the man he killed.',
    significance:
      'Rama wins a kingdom and immediately gives it away, which is the whole argument of the epic in one gesture.',
    causes: ['yuddha-mandodari-lament', 'yuddha-vibhishana-consecrated'],
  },
  {
    id: 'yuddha-sita-brought-before-rama',
    title: 'Sita Is Brought From the Grove, and Rama Speaks Harshly',
    kanda: 'yuddha',
    sarga: '6.114-116',
    order: 562,
    characterIds: ['sita', 'rama', 'hanuman', 'vibhishana', 'lakshmana', 'sugriva', 'angada', 'jambavan', 'trijata'],
    location: 'Outside the gates of Lanka',
    description:
      'Hanuman carries the news to the Ashoka grove and offers, as he has offered before, to kill every rakshasi who tormented her; Sita stops him with the story of the bear and the tiger and says that a noble being does not return evil for evil, since no creature is free of wrongdoing. She is bathed and dressed and brought out in a palanquin, and when the vanaras crowd to see her Rama orders the screens taken away, saying that a woman\'s true covering is her conduct and that in calamity she may be looked upon. Then, in front of the entire army, he tells her that he fought to wipe out an insult to his line and not for her sake, that he cannot take back a woman who has lived in another man\'s house, and that she may go to Lakshmana, Bharata, Sugriva or Vibhishana as she pleases. Sita weeps, and then stops weeping.',
    significance:
      'The hardest passage in the epic, and the one that sets up both the fire ordeal and, later, the exile.',
    causes: ['yuddha-funeral-and-vibhishana-crowned', 'sundara-chudamani-given'],
  },
  {
    id: 'yuddha-agni-pariksha',
    title: 'Sita Enters the Fire',
    kanda: 'yuddha',
    sarga: '6.116-117',
    order: 564,
    characterIds: ['sita', 'rama', 'lakshmana', 'agni', 'hanuman', 'vibhishana', 'sugriva', 'jambavan', 'angada'],
    location: 'Outside the gates of Lanka',
    description:
      'Sita answers Rama as an equal: she asks why he treats a high-born woman like a common one, points out that what Ravana did to her body was not in her power but that her heart was always his, and asks bitterly why, if he meant to reject her, he did not send word by Hanuman and spare the vanaras their deaths. Then she turns to Lakshmana and tells him to build a fire, because she will not live under this accusation. It is important that in Valmiki the ordeal is her own demand and Rama never orders it — the versions in which he commands her to prove herself come from later retellings. She circumambulates Rama, salutes the gods and the brahmins, says that if her heart never moved from Raghava then let Agni protect her, and walks into the blaze while the whole army cries out.',
    significance:
      'Sita takes the initiative at the moment she is most powerless, and converts a humiliation into a public vindication on her own terms.',
    causes: ['yuddha-sita-brought-before-rama'],
  },
  {
    id: 'yuddha-agni-returns-sita',
    title: 'Agni Carries Sita Out of the Flames',
    kanda: 'yuddha',
    sarga: '6.118',
    order: 566,
    characterIds: ['agni', 'sita', 'rama', 'brahma', 'shiva', 'indra', 'lakshmana', 'vibhishana', 'hanuman'],
    location: 'Outside the gates of Lanka',
    description:
      'The fire does not burn her. Agni himself rises out of it carrying Sita in his arms, her red silk and her garlands and her ornaments untouched, and sets her down before Rama with the plain declaration that there is no sin in her — not in word, thought, mind or glance, through all her time in Ravana\'s house. Rama answers that he never doubted her for a moment, that Ravana could no more have possessed her than the ocean could overstep its shore, but that the three worlds would have called him a fool ruled by desire if he had taken her back without this. He says that her purity had to be shown, not to him, but to everyone watching.',
    significance:
      'Vindicates Sita before the gods and the army, and states the reason-of-state that will destroy their marriage all over again in the Uttara Kanda.',
    shloka: {
      devanagari:
        'अब्रवीत् तु तदा रामं साक्षी लोकस्य पावकः |\nएषा ते राम वैदेही पापमस्यां न विद्यते ||',
      transliteration:
        'abravīt tu tadā rāmaṃ sākṣī lokasya pāvakaḥ |\neṣā te rāma vaidehī pāpam asyāṃ na vidyate ||',
      translation:
        'Then Agni, the witness of all the world, said to Rama: "Here is your Vaidehi, Rama; no sin whatever is found in her."',
      ref: '6.118.5',
      context: 'The fire god restoring Sita unharmed and testifying to her innocence before the assembled army and gods.',
    },
    causes: ['yuddha-agni-pariksha'],
  },
  {
    id: 'yuddha-dasharatha-and-brahma-appear',
    title: 'Brahma Reveals Rama, and Dasharatha Comes Down From Heaven',
    kanda: 'yuddha',
    sarga: '6.119-120',
    order: 568,
    characterIds: ['brahma', 'dasharatha', 'rama', 'sita', 'lakshmana', 'shiva', 'indra', 'vishnu', 'kaikeyi', 'bharata'],
    location: 'The sky above the Lankan shore',
    description:
      'The assembled gods ask Rama how he can speak of himself as a man after what he has done, and Brahma tells him outright that he is Narayana, that Sita is Lakshmi, that Lakshmana is Shesha and that the whole incarnation was arranged to end Ravana. Then Dasharatha himself descends in a celestial car, seats Rama on his lap, and says that only now, hearing that Ravana is dead, has he been released from his own grief; he asks Rama to forgive Kaikeyi and Bharata and to remember the fourteen years are nearly done. Rama makes two requests of his dead father: that Kaikeyi and Bharata be free of the curse he laid on them, and that his own exile be acknowledged as fulfilled. Dasharatha grants both, embraces Lakshmana and Sita, and returns to Indra\'s world.',
    significance:
      'Closes the wound opened in the Ayodhya Kanda and names, for the first time inside the narrative, what Rama is.',
    causes: ['yuddha-agni-returns-sita', 'ayodhya-paduka-nandigrama'],
  },
  {
    id: 'yuddha-boons-to-the-vanaras',
    title: 'Indra Revives the Fallen Vanaras',
    kanda: 'yuddha',
    sarga: '6.120',
    order: 570,
    characterIds: ['indra', 'rama', 'sugriva', 'hanuman', 'angada', 'jambavan', 'nila', 'nala', 'mainda', 'dvivida', 'lakshmana'],
    location: 'The battlefield of Lanka',
    description:
      'Indra offers Rama any boon he likes, and Rama asks for nothing for himself: he asks that every vanara and bear killed in the war be brought back to life, and that wherever they live there be fruit and roots in season and rivers running clear even out of season. Indra protests that this is a hard boon but grants it, and the dead rise from the field as men rise from sleep, bewildered, asking what happened. Hanuman separately receives the promise of a life as long as the story of Rama is told on earth, which is why tradition holds him to be still living. Valmiki sets this immediately after Rama refuses a boon for himself, so that the contrast with Ravana, who asked only for his own invulnerability, is impossible to miss.',
    significance:
      'Rama spends the one wish he is offered on his soldiers, which is the exact inverse of the boon that started the war.',
    causes: ['yuddha-dasharatha-and-brahma-appear'],
  },
  {
    id: 'yuddha-pushpaka-flight-home',
    title: 'The Pushpaka Flight North and the Stop at Bharadwaja',
    kanda: 'yuddha',
    sarga: '6.123-125',
    order: 572,
    characterIds: ['rama', 'sita', 'lakshmana', 'hanuman', 'sugriva', 'vibhishana', 'angada', 'jambavan', 'nila', 'bharadwaja', 'kubera'],
    location: 'Lanka to Prayaga, by air',
    description:
      'Vibhishana offers the Pushpaka, the flying palace Ravana took from Kubera, and Rama takes it on condition that the whole army ride with him. On the way north he stands with Sita at the rail and names the country below — the causeway, Setubandha where he worshipped Shiva, Kishkindha where he killed Vali, Rishyamuka, Pampa, Janasthana where Jatayu fell, Chitrakuta, the Yamuna and the Ganga — so that the flight becomes a recapitulation of the entire epic in reverse. They come down at Bharadwaja\'s hermitage at Prayaga on the fifth day of the last month of exile, and the sage, who has seen everything by his own power, confirms that Bharata is alive at Nandigrama living on roots in matted hair. Bharadwaja grants a boon too: that every tree on the road to Ayodhya bear fruit and honey out of season for the army.',
    significance:
      'The homeward flight ties every location of the story together and gives the epic its geography in a single sweep.',
    causes: ['yuddha-boons-to-the-vanaras'],
  },
  {
    id: 'yuddha-hanuman-to-nandigrama',
    title: 'Hanuman Carries the News to Bharata',
    kanda: 'yuddha',
    sarga: '6.125-126',
    order: 574,
    characterIds: ['hanuman', 'bharata', 'guha', 'rama', 'sita', 'lakshmana', 'shatrughna', 'sumantra'],
    location: 'Shringaverapura and Nandigrama',
    description:
      'Rama sends Hanuman ahead in human form, first to Guha at Shringaverapura and then to Nandigrama, with instructions to watch Bharata\'s face as he hears the news — because Rama will not take back a kingdom a brother has grown used to holding. Hanuman finds Bharata thin, dressed in bark, wearing matted hair, with Rama\'s sandals set on the throne and the government conducted in their name. He tells the whole story from the beginning, and Bharata faints with joy, then gets up and orders the roads watered, the shrines garlanded and the army and the queens brought out. Hanuman reports back that there was nothing in Bharata\'s face but relief.',
    significance:
      'Settles the one political danger left — a disputed succession — and vindicates Bharata\'s fourteen-year regency.',
    causes: ['yuddha-pushpaka-flight-home', 'ayodhya-paduka-nandigrama'],
  },
  {
    id: 'yuddha-coronation-at-ayodhya',
    title: 'The Coronation of Rama',
    kanda: 'yuddha',
    sarga: '6.127-128',
    order: 576,
    characterIds: ['rama', 'sita', 'bharata', 'lakshmana', 'shatrughna', 'vasishtha', 'kausalya', 'sumitra', 'kaikeyi', 'sugriva', 'hanuman', 'vibhishana', 'angada', 'jambavan', 'nila', 'janaka', 'sumantra'],
    location: 'Ayodhya',
    description:
      'Bharata meets Rama at Nandigrama, places the sandals on his feet with his own hands and gives back a kingdom whose treasury and granaries he has increased rather than spent. Rama is shaved of his matted hair, bathed and robed, and Vasishtha and the eight ministers consecrate him with water brought from the four oceans and five hundred rivers while Shatrughna holds the parasol and Lakshmana, Bharata, Sugriva and Vibhishana hold the fans. Sita gives her own pearl necklace to Hanuman at Rama\'s glance, and Rama distributes gifts to every vanara and every brahmin. Valmiki then describes the reign itself in the lines that gave the phrase Rama-rajya to the language: no brigands, no disease, no calamity, and no parent ever performing the funeral of a child.',
    significance:
      'The formal end of the main epic and the origin of the political ideal that the Ramayana is quoted for to this day.',
    shloka: {
      devanagari:
        'निर्दस्युरभवल्लोको नानर्थः कश्चिदस्पृशत् |\nन च स्म वृद्धा बालानां प्रेतकार्याणि कुर्वते ||',
      transliteration:
        'nirdasyur abhaval loko nānarthaṃ kaścid aspṛśat |\nna ca sma vṛddhā bālānāṃ pretakāryāṇi kurvate ||',
      translation:
        'The world was free of brigands, and no one met with any calamity; nor did the old ever have to perform the funeral rites of the young.',
      ref: '6.128.100',
      context: "Valmiki's description of Rama's reign immediately after the coronation.",
    },
    causes: ['yuddha-hanuman-to-nandigrama', 'yuddha-dasharatha-and-brahma-appear'],
  },
  {
    id: 'yuddha-vanaras-dismissed',
    title: 'The Allies Are Sent Home and the Pushpaka Returned',
    kanda: 'yuddha',
    sarga: '6.128, 7.39-40',
    order: 578,
    characterIds: ['rama', 'sugriva', 'hanuman', 'vibhishana', 'angada', 'jambavan', 'nala', 'nila', 'kubera', 'sita', 'lakshmana'],
    location: 'Ayodhya',
    description:
      'The vanaras and the king of Lanka stay in Ayodhya for a year as guests before Rama can bring himself to let them go, and when he does he loads them with gold, jewels and cloth and walks out with them to the edge of the city. Vibhishana is told to rule Lanka in dharma and to keep up the worship of the family deity; Sugriva is told that Kishkindha is his and Angada\'s after him. Rama offers Hanuman anything he wants, and Hanuman asks only to stay alive on earth as long as Rama\'s story is told, which Rama grants together with Sita\'s blessing of undying fame. The Pushpaka, which has no further use, is formally released and flies back to Kubera.',
    significance:
      'Dissolves the alliance generously and fixes Hanuman\'s status as the deathless witness of the epic.',
    causes: ['yuddha-coronation-at-ayodhya', 'yuddha-boons-to-the-vanaras'],
  },

  // ==================================================================
  // UTTARA KANDA
  // ==================================================================
  {
    id: 'uttara-agastya-narrates-ravanas-birth',
    title: "Agastya Tells Rama Where Ravana Came From",
    kanda: 'uttara',
    sarga: '7.1-9',
    order: 636,
    characterIds: ['agastya', 'rama', 'ravana', 'kumbhakarna', 'vibhishana', 'shurpanakha', 'vishrava', 'kaikasi', 'sumali', 'malyavan', 'kubera', 'lakshmana'],
    location: 'The court of Ayodhya',
    description:
      'The rishis come to congratulate Rama and he asks them, almost casually, how a rakshasa came to be strong enough to defeat Indra. Agastya answers with a genealogy that reframes the whole war: the rakshasas descend from Pulastya through the sage Vishrava, so Ravana was a brahmin by birth and Kubera\'s half-brother. Sumali, driven under the earth by Vishnu, pushed his daughter Kaikasi to go to Vishrava at twilight, the worst hour, and the sage warned her that children conceived then would be cruel — which is how Ravana, Kumbhakarna and Shurpanakha were born, and why Vibhishana, conceived later at a proper hour, came out righteous. Rama listens to the account of his enemy\'s family as though it were his own history, which in Valmiki\'s telling it partly is.',
    significance:
      'Recasts Ravana from a monster into the product of a specific marriage, a specific hour and a specific grudge.',
    causes: ['yuddha-coronation-at-ayodhya'],
  },
  {
    id: 'uttara-ravanas-boon-and-conquests',
    title: "The Boon, the Conquests, and the Curse of Vedavati",
    kanda: 'uttara',
    sarga: '7.10-26',
    order: 640,
    characterIds: ['ravana', 'brahma', 'kumbhakarna', 'vibhishana', 'kubera', 'shiva', 'vali', 'indra', 'indrajit', 'mandodari', 'maya', 'agastya', 'rama', 'yama', 'varuna'],
    location: 'Narrated at Ayodhya; set in Gokarna, Lanka, Kailasa and the worlds',
    description:
      'Agastya continues: the three brothers performed austerities at Gokarna for ten thousand years, Ravana cutting off his own heads one by one into the fire until Brahma stopped him and granted invulnerability against gods, gandharvas, yakshas and rakshasas — the boon in which he contemptuously omitted men and animals, and Kumbhakarna, his tongue twisted by Saraswati, asked for sleep instead of conquest. Ravana then drove Kubera out of Lanka, seized the Pushpaka, was pinned under Kailasa by Shiva\'s toe until he sang for a thousand years and received the sword Chandrahasa, was bound and carried about for months by Vali, and married Mandodari the daughter of Maya. Agastya also tells the episode of Vedavati, an ascetic woman whom Ravana molested and who entered fire swearing to be born again to destroy him, and a second curse from Nalakubara that Ravana would die if he ever forced a woman unwilling. That second curse is why Ravana never dared touch Sita in the Ashoka grove, a point Valmiki makes explicitly.',
    significance:
      'Supplies the two constraints that decided the plot: a boon that forgot men, and a curse that kept Sita untouched.',
    causes: ['uttara-agastya-narrates-ravanas-birth'],
  },
  {
    id: 'uttara-agastya-narrates-hanumans-origins',
    title: "Hanuman's Childhood and the Curse on His Memory",
    kanda: 'uttara',
    sarga: '7.35-36',
    order: 644,
    characterIds: ['agastya', 'rama', 'hanuman', 'anjana', 'kesari', 'vayu', 'surya', 'indra', 'brahma', 'lakshmana'],
    location: 'The court of Ayodhya; set on Mount Sumeru',
    description:
      'Rama asks why, if Hanuman is what he appears to be, he did not simply pick up Lanka and bring it home. Agastya explains that Hanuman was born to Anjana and Kesari by the grace of Vayu, and that as an infant he mistook the rising sun for a ripe fruit and leapt for it; Indra struck him with the thunderbolt and broke his jaw, from which he has his name. Vayu withdrew the breath from all creatures in fury until the gods compensated the child with invulnerability and a battery of boons from Brahma, Indra, Agni, Varuna and Yama. But the boy\'s pranks on the sages of the forest earned him a curse: that he would not remember his own powers until someone reminded him of them — which is exactly why Jambavan had to stand on the shore and recite them before Hanuman could leap the sea.',
    significance:
      'Explains Hanuman\'s strange combination of limitless strength and genuine humility as a curse, not a pose.',
    causes: ['uttara-agastya-narrates-ravanas-birth', 'yuddha-vanaras-dismissed'],
  },
  {
    id: 'uttara-shatrughna-slays-lavanasura',
    title: 'Shatrughna Kills Lavanasura and Founds Mathura',
    kanda: 'uttara',
    sarga: '7.61-70',
    order: 648,
    characterIds: ['shatrughna', 'rama', 'lakshmana', 'bharata', 'valmiki', 'shiva'],
    location: 'Madhuvana on the Yamuna, which becomes Mathura',
    description:
      'Sages from the Yamuna come to Ayodhya to report that Lavana, son of Madhu, has a trident given by Shiva that no one can face while he holds it, and that he is eating the people of the region. Shatrughna, who has had no part in the war and no share of the story, asks for the commission and is given it with an arrow out of Vishnu\'s own store, with the instruction to attack when Lavana is away from his weapon. He waits at the gate, fights him unarmed of the trident, kills him, and builds the city of Madhura, later Mathura, on the spot. On the march out he stops a night at Valmiki\'s ashram — the same night, Valmiki notes, on which Sita\'s twins are born.',
    significance:
      'Gives the fourth brother his one great deed and plants Shatrughna at the ashram on the night of the birth, tying the two strands together.',
    causes: ['yuddha-coronation-at-ayodhya'],
  },
  {
    id: 'uttara-rumour-in-the-city',
    title: 'The Washerman and the Talk in Ayodhya',
    kanda: 'uttara',
    sarga: '7.42-43',
    order: 652,
    characterIds: ['rama', 'sita', 'lakshmana', 'bharata', 'shatrughna'],
    location: 'The streets of Ayodhya and the palace',
    description:
      'Sita is pregnant and Rama, asked what she wants, hears her wish to see the hermitages on the Ganga once more and promises it for the next day. That evening he asks his confidant Bhadra what the city says of him, and Bhadra, pressed, repeats the talk of the taverns and the crossroads: that Rama has taken back a wife who sat in Ravana\'s house, and that husbands in Ayodhya will now have to tolerate the same from their wives, since whatever a king does the people take as licence. Valmiki gives the gossip no supernatural origin and does not name a washerman beating his wife in the standard text — that memorable version belongs to later retellings. Rama summons his brothers, repeats what he has heard, and says that he would abandon Sita, or Lakshmana, or any of them, rather than let the house of Ikshvaku be spoken of in that way.',
    significance:
      'The ordinary, unglamorous mechanism — public opinion — that destroys what Ravana could not.',
    causes: ['yuddha-coronation-at-ayodhya', 'yuddha-agni-returns-sita'],
  },
  {
    id: 'uttara-sita-exiled',
    title: 'Lakshmana Leaves Sita on the Far Bank of the Ganga',
    kanda: 'uttara',
    sarga: '7.45-48',
    order: 656,
    characterIds: ['lakshmana', 'sita', 'rama', 'sumantra', 'ganga', 'bharata', 'shatrughna'],
    location: 'The northern bank of the Ganga, near Valmiki\'s ashram',
    description:
      'Rama orders Lakshmana to take Sita in the chariot to the hermitages she asked to see and to abandon her there, and forbids him to argue. Sita sets out happy, carrying gifts of cloth and ornaments for the sages\' wives, noticing bad omens on the road and dismissing them. On the far bank Lakshmana breaks down and tells her the truth, and her first thought is not for herself: she asks him to carry a message to Rama that she does not blame him, that she knows he is bound by what people say, and that he should go on ruling as a father to his subjects. She also tells him she would have killed herself in the Ganga but for the children she is carrying, who must be born for the Ikshvaku line.',
    significance:
      'The epic\'s second and final separation, and the one for which there is no rescue, no ally and no enemy to blame.',
    causes: ['uttara-rumour-in-the-city'],
  },
  {
    id: 'uttara-valmiki-receives-sita',
    title: "Valmiki Takes Sita Into His Ashram",
    kanda: 'uttara',
    sarga: '7.48-49',
    order: 660,
    characterIds: ['valmiki', 'sita', 'rama', 'ganga'],
    location: "Valmiki's ashram on the Tamasa, near the Ganga",
    description:
      'The boys of the hermitage find a weeping woman by the river and run to fetch Valmiki, who comes and tells her at once that he knows everything by his own vision — who she is, why she has been sent away, and that she is blameless. He takes her to the ashram, puts her in the care of the ascetic women, and tells them to treat her as a guest and a daughter and to want for nothing on her account. Sita lives there for more than a decade in bark cloth, doing the work of the ashram. Valmiki, who is composing the Ramayana at the same time, thus has his subject\'s wife living in his own house, which is the device by which the poem reaches the people inside it.',
    significance:
      'Puts the poet, the poem and its heroine under one roof and sets up the recitation that will end the story.',
    causes: ['uttara-sita-exiled'],
  },
  {
    id: 'uttara-lava-and-kusha-born',
    title: 'The Birth of Lava and Kusha',
    kanda: 'uttara',
    sarga: '7.66',
    order: 664,
    characterIds: ['lava', 'kusha', 'sita', 'valmiki', 'shatrughna', 'rama'],
    location: "Valmiki's ashram",
    description:
      'Sita bears twin sons on the night Shatrughna is camped at the ashram on his way back from killing Lavana. Valmiki performs the birth rites himself, taking a handful of kusha grass and a pinch of lava to name them with, and raises them as his own pupils. They grow up in bark cloth learning the Veda, archery and music, and Valmiki teaches them the twenty-four thousand verses of the poem he has made about their father, which they commit to memory without knowing whose story it is. Shatrughna, asleep a few huts away on the night of their birth, is forbidden by Valmiki to carry the news home.',
    significance:
      'The Ikshvaku line continues outside Ayodhya, and the epic acquires the two reciters who will perform it.',
    causes: ['uttara-valmiki-receives-sita', 'uttara-shatrughna-slays-lavanasura'],
  },
  {
    id: 'uttara-shambuka-slain',
    title: 'The Death of Shambuka',
    kanda: 'uttara',
    sarga: '7.73-76',
    order: 668,
    characterIds: ['rama', 'narada', 'lakshmana', 'agastya', 'bharata'],
    location: 'A lake on the Shaivala mountain, in the south',
    description:
      'A brahmin brings the body of his dead son to the palace gate and accuses Rama of a fault in his rule, since in a well-governed kingdom no child dies before its parents. Narada tells Rama that an ascetic of the lowest varna is performing austerities hanging head-downward in the south, that this is an offence against the order of the age, and that the boy will revive when it stops. Rama takes the Pushpaka, finds the man, asks him who he is and why he is doing penance, and when he answers that his name is Shambuka and that he seeks heaven in his own body, Rama draws his sword and beheads him; the gods rain flowers and the brahmin\'s son breathes again. Valmiki narrates it without comment, and it remains the single passage of the epic most sharply criticised in later Indian tradition, from Bhavabhuti onward.',
    significance:
      'The darkest episode of the Uttara Kanda and the one that most sharply exposes the cost of Rama\'s idea of order.',
    causes: ['yuddha-coronation-at-ayodhya'],
  },
  {
    id: 'uttara-ashvamedha-and-golden-sita',
    title: 'The Ashvamedha and the Image of Gold',
    kanda: 'uttara',
    sarga: '7.89-91',
    order: 672,
    characterIds: ['rama', 'lakshmana', 'bharata', 'shatrughna', 'vasishtha', 'vibhishana', 'sugriva', 'hanuman', 'janaka', 'valmiki', 'sita'],
    location: 'The Naimisha forest, on the Gomati',
    description:
      'Rama undertakes the horse sacrifice on the Gomati in the Naimisha forest, with Lakshmana following the horse for a year and Bharata and Shatrughna managing a rite that runs for months and feeds whoever comes. The sacrifice requires a wife beside the sacrificer, and Rama refuses to take another; instead he has a likeness of Sita made in gold and seats it at his side, and Valmiki remarks that he never married again for the rest of his life. Kings, vanaras and rakshasas come as guests — Sugriva, Vibhishana, Janaka — and Valmiki arrives with his pupils and camps in a hut of leaves at the edge of the enclosure. The golden Sita is the quietest and most eloquent detail in the Uttara Kanda.',
    significance:
      'Shows that Rama abandoned Sita without ever replacing her, and brings every surviving character into one place for the ending.',
    causes: ['uttara-shambuka-slain', 'uttara-sita-exiled'],
  },
  {
    id: 'uttara-twins-recite-the-ramayana',
    title: 'Lava and Kusha Sing the Ramayana to Rama',
    kanda: 'uttara',
    sarga: '7.93-94',
    order: 676,
    characterIds: ['lava', 'kusha', 'valmiki', 'rama', 'lakshmana', 'bharata', 'shatrughna', 'hanuman', 'sugriva', 'vibhishana'],
    location: 'The sacrificial enclosure in the Naimisha forest',
    description:
      'Valmiki sends the twins out among the assembly to sing the poem twenty sargas at a sitting, accompanied on the vina, telling them to accept nothing in payment — no gold, no cattle — because the sons of a sage living on roots have no use for it. The crowd notices first that the boys are identical, and then that they look exactly like Rama in bark cloth. Rama sits and listens to his own life sung back to him by two children, and sends Lakshmana with eighteen thousand gold pieces, which they refuse. When he asks whose sons they are and who made the poem, they answer that their teacher is Valmiki and that he will come and tell him the rest.',
    significance:
      'The epic performs itself inside itself, and Rama meets his sons without being told who they are.',
    causes: ['uttara-lava-and-kusha-born', 'uttara-ashvamedha-and-golden-sita'],
  },
  {
    id: 'uttara-sita-returns-to-bhumi',
    title: 'Sita Calls on the Earth and Is Taken',
    kanda: 'uttara',
    sarga: '7.96-97',
    order: 680,
    characterIds: ['sita', 'rama', 'valmiki', 'bhumi', 'lava', 'kusha', 'brahma', 'lakshmana', 'bharata', 'shatrughna', 'hanuman', 'sugriva', 'vibhishana'],
    location: 'The sacrificial enclosure in the Naimisha forest',
    description:
      'Rama sends word that if Sita is blameless she may come and swear it before the assembly, and he will take her back. Valmiki brings her in the next morning, walking behind him with her eyes on the ground and her hands folded, dressed in ochre, and states on the strength of his own thousands of years of austerity that the twins are Rama\'s sons and that she is pure. Sita then speaks only one sentence of her own: as she has never thought of any man but Raghava, let the goddess Madhavi open and receive her. A throne rises out of the ground borne by nagas, the Earth takes her in both arms and seats her on it, and the ground closes while flowers fall and Rama, left standing in front of an entire assembly, is refused the one thing he asked for.',
    significance:
      'Sita answers a second demand for proof by withdrawing from the world altogether — the epic\'s final and most absolute refusal.',
    shloka: {
      devanagari:
        'यथाहं राघवादन्यं मनसापि न चिन्तये |\nतथा मे माधवी देवी विवरं दातुमर्हति ||',
      transliteration:
        'yathāhaṃ rāghavād anyaṃ manasāpi na cintaye |\ntathā me mādhavī devī vivaraṃ dātum arhati ||',
      translation:
        'As I have never thought of any man but Raghava, even in my mind, so let the goddess Madhavi open and grant me entrance.',
      ref: '7.97.15',
      context: "Sita's oath in the assembly, immediately before the Earth opens and receives her.",
    },
    causes: ['uttara-twins-recite-the-ramayana'],
  },
  {
    id: 'uttara-durvasa-and-kala',
    title: 'Kala at the Door and the Arrival of Durvasa',
    kanda: 'uttara',
    sarga: '7.103-105',
    order: 684,
    characterIds: ['durvasa', 'rama', 'lakshmana', 'brahma', 'yama', 'bharata', 'shatrughna'],
    location: 'The palace of Ayodhya',
    description:
      'An ascetic comes to the gate claiming to be a messenger from Brahma and demands a private audience on the condition that anyone who interrupts it must be put to death; Rama agrees and sets Lakshmana on the door. The visitor reveals himself as Kala, Time itself, come to say that Rama\'s work on earth is finished and that he may return whenever he wishes. While they are speaking Durvasa arrives, hungry and in the mood he is famous for, and tells Lakshmana that if he is not announced at once he will curse Rama, Bharata, the whole house and the kingdom. Lakshmana weighs a certain curse on everyone against a certain death for himself, opens the door, and announces him.',
    significance:
      'Sets up the deliberate, knowing self-sacrifice by which Lakshmana leaves the story first.',
    causes: ['uttara-sita-returns-to-bhumi'],
  },
  {
    id: 'uttara-lakshmana-banished-and-ends',
    title: 'Lakshmana Is Abandoned and Enters the Sarayu',
    kanda: 'uttara',
    sarga: '7.105-106',
    order: 688,
    characterIds: ['lakshmana', 'rama', 'vasishtha', 'indra', 'bharata', 'shatrughna', 'durvasa'],
    location: 'The bank of the Sarayu at Ayodhya',
    description:
      'Rama is bound by his own word and cannot pardon the breach, yet cannot kill his brother either. Vasishtha and the ministers advise that for the virtuous, abandonment is equivalent to death, and Rama accordingly renounces Lakshmana in open court — the same formula, Valmiki notes, with which he renounced Sita. Lakshmana does not argue; he goes straight to the Sarayu, stops his breath by yoga standing in the water, and Indra carries him away bodily to heaven, at which the gods rejoice and the people of Ayodhya do not. From that day Rama is visibly a man waiting to leave.',
    significance:
      'The brother who never once left Rama\'s side is the first of the four to go, and he goes because Rama kept a promise.',
    causes: ['uttara-durvasa-and-kala'],
  },
  {
    id: 'uttara-kingdom-divided',
    title: 'The Kingdom Is Divided Among the Sons',
    kanda: 'uttara',
    sarga: '7.107-108',
    order: 692,
    characterIds: ['rama', 'kusha', 'lava', 'bharata', 'shatrughna', 'angada', 'vasishtha', 'hanuman', 'sugriva', 'vibhishana', 'jambavan'],
    location: 'Ayodhya and the territories of Kosala',
    description:
      'With Lakshmana gone Rama sets his affairs in order. Kusha is given the new city of Kushavati in the southern hills and Lava the city of Shravasti to the north, each with its own treasury, army and chariots; Bharata\'s sons Taksha and Pushkala receive Takshashila and Pushkalavati in the Gandhara country, and Lakshmana\'s sons Angada and Chandraketu receive Angadiya and Chandrakanta. Bharata and Shatrughna announce that they will not stay behind and will go wherever Rama goes. Rama sends word to Sugriva and Vibhishana, and tells Hanuman alone that he must remain on earth as long as the story is told, which Hanuman accepts as a duty rather than a gift.',
    significance:
      'Winds up the dynasty in an orderly way so that the departure is an abdication, not a collapse.',
    causes: ['uttara-lakshmana-banished-and-ends', 'uttara-sita-returns-to-bhumi'],
  },
  {
    id: 'uttara-rama-enters-sarayu',
    title: 'Rama Walks Into the Sarayu',
    kanda: 'uttara',
    sarga: '7.109-110',
    order: 696,
    characterIds: ['rama', 'bharata', 'shatrughna', 'brahma', 'vasishtha', 'hanuman', 'sugriva', 'vibhishana', 'jambavan', 'vishnu', 'indra'],
    location: 'The Sarayu, a yojana and a half west of Ayodhya',
    description:
      'Rama walks out of the city in a single garment, carrying darbha grass, with Shri on his right and Bhumi on his left and the Vedas in the form of brahmins going before him; Bharata and Shatrughna walk behind with their families, and then the whole population of Ayodhya follows, and after them the animals and the birds, so that the city empties completely. Sugriva has already installed Angada and comes himself; Hanuman, Jambavan and Vibhishana are told to remain on earth as long as the age lasts. At the river Brahma speaks from the sky, calling him Vishnu and welcoming him home, and Rama enters the water with his brothers and resumes his own form. Valmiki ends by saying that everyone who entered the Sarayu that day — men, animals and birds alike — went to the world called Santanaka.',
    significance:
      'The end of the avatara and of the epic, and the only departure in the story that nobody is left out of.',
    shloka: {
      devanagari:
        'ततः पितामहो वाणीमन्तरिक्षादभाषत |\nआगच्छ विष्णो भद्रं ते दिष्ट्या प्राप्तोऽसि राघव ||',
      transliteration:
        'tataḥ pitāmaho vāṇīm antarikṣād abhāṣata |\nāgaccha viṣṇo bhadraṃ te diṣṭyā prāpto \'si rāghava ||',
      translation:
        'Then the Grandsire spoke from the sky: "Come, Vishnu! Blessings upon you. By good fortune you have arrived, Raghava."',
      ref: '7.110.8',
      context: 'Brahma addressing Rama as he enters the waters of the Sarayu at the end of the epic.',
    },
    causes: ['uttara-kingdom-divided', 'uttara-durvasa-and-kala'],
  },
];
