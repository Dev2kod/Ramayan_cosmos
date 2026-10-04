import type { DataModule } from '../types';

// Module B — Kishkindha: the vanara realm, the bears, and the forest beings who
// help Rama. Everything below follows Valmiki's text; divergences found in later
// retellings are flagged explicitly in the `trivia` arrays.

export const kishkindha: DataModule = {
  characters: [
    {
      id: 'hanuman',
      name: 'Hanuman',
      sanskrit: 'हनुमान्',
      epithets: [
        'Maruti',
        'Anjaneya',
        'Vayuputra',
        'Kesarinandana',
        'Pavanasuta',
        'Mahavira',
        'Plavaga-rishabha',
      ],
      faction: 'kishkindha',
      species: 'vanara',
      gender: 'male',
      kandas: ['kishkindha', 'sundara', 'yuddha', 'uttara'],
      importance: 5,
      summary:
        "Sugriva's minister, son of the Wind, who leaped a hundred yojanas to Lanka, found Sita in the Ashoka grove, and carried the healing herbs that saved Lakshmana.",
      bio:
        "Hanuman was born on the slopes of the Malyavan range to Anjana, an apsara named Punjikasthala who had been cursed into vanara form, and Kesari, lord of monkeys; the Wind-god Vayu, catching her garment on a mountain crest, became his divine father. Jambavan narrates the childhood (Kishkindha 66): the infant mistook the rising sun for a ripe fruit and sprang three hundred yojanas into the sky toward it. Indra struck him with the vajra, breaking his left jaw (hanu) on a mountain peak — the injury that gave him the name Hanuman. Vayu, enraged, withdrew himself from the three worlds until the gods relented and heaped boons on the child: Brahma made him immune to brahmastra, Indra gave him invulnerability to his own thunderbolt, Agni, Varuna and Yama made him proof against their weapons. Because the boy then tormented the ashrams of sages at play, they laid on him a curse of forgetting: he would not recall his own strength until someone recounted it to him.\n\nHe enters the narrative in Kishkindha 3, sent down from Rishyamuka in the disguise of a mendicant to learn who the two armed strangers are. His speech so impresses Rama that Rama tells Lakshmana that no one untrained in the Rig, Yajur and Sama Vedas and in the whole of grammar could speak like this, and that in a long address not one word was ill-formed. Hanuman carries Rama and Lakshmana on his shoulders up to Sugriva's hiding place on Rishyamuka, brokers the fire-witnessed alliance between Rama and Sugriva, and later goes to Kishkindha to remind a pleasure-drowned Sugriva of his oath when Lakshmana arrives in fury during the rains. Among the four search parties, it is the southern one under Angada that carries Rama's signet ring, and Rama gives the ring to Hanuman alone — the one searcher he believes will succeed.\n\nTrapped with the others in Svayamprabha's cave and then condemned to fast to death on the southern shore, the party is saved by Sampati's news that Sita is in Lanka a hundred yojanas across the sea. No vanara claims he can make the crossing. Jambavan then recites Hanuman's own birth and boons back to him, dissolving the sages' curse of forgetting, and Hanuman swells to enormous size on Mount Mahendra and launches himself. The Sundara Kanda opens with his flight: he evades Surasa by shrinking to a thumb's size and darting through her mouth, kills Simhika who seizes his shadow, strikes down Lankini at the gate, searches Ravana's palace and the Pushpaka, and at last finds Sita under a shimshapa tree in the Ashoka grove. He gives her Rama's ring, refuses her request to confirm nothing and offers to carry her away — which she declines, both for her own honour and so that Rama's glory not be stolen. He then destroys the Pramadavana, kills Jambumali, Akshayakumara and five generals, submits deliberately to Indrajit's brahmastra to be brought before Ravana, and when his tail is set alight burns the city before quenching the fire in the sea.\n\nIn the war he carries Rama on his shoulders against Ravana's chariot-borne charges, fells Dhumraksha and Akampana, and twice crosses to the Himalaya for the herb-bearing mountain between Rishabha and Kailasa when Indrajit's weapons lay Rama and Lakshmana low — in Valmiki he lifts the whole peak because he cannot identify the four glowing herbs, and returns it afterwards. At the end Rama gives him an embrace and Sita a pearl necklace. Valmiki's Uttara Kanda leaves him a chiranjivi, one of the long-lived, to remain on earth as long as Rama's story is told.",
      motivations: [
        'Absolute, unasked-for devotion to Rama, whom he recognises as his lord within minutes of their first conversation on Rishyamuka.',
        'Loyalty to Sugriva as a sworn minister, which includes the harder duty of publicly reminding his king when the king forgets his word.',
        'A craftsman-like pride in a difficult task well executed — he reasons aloud about how to enter Lanka, what size to assume, and what to say to Sita before he does any of it.',
        'Protection of the weak and of ascetics: he restrains his own strength constantly and apologises to Sita for frightening her.',
        'A fear of being misunderstood that shapes his tactics — he speaks to Sita in Sanskrit rather than refined court speech lest she mistake him for Ravana in disguise.',
      ],
      abilities: [
        'Kamarupa — he changes size at will, from a cat small enough to slip into Lanka at night to a form as tall as a mountain on Mahendra before the leap.',
        'Flight and the hundred-yojana leap across the southern ocean, performed in a single bound with Mount Mahendra pressed flat beneath his feet.',
        'Immunity, by layered boons, to the brahmastra, Indra\'s vajra, and the weapons of Agni, Varuna and Yama; he submits to Indrajit\'s brahmastra only out of courtesy to Brahma.',
        'Mastery of grammar and of the three Vedas, praised at length by Rama himself in Kishkindha 3 as faultless in word, tone and bearing.',
        'Prodigious physical strength used without weapons — he fights with uprooted trees, iron pillars torn from palaces, and his own fists.',
        'The capacity to uproot and carry an entire Himalayan peak through the air, twice, within a single night.',
      ],
      accomplishments: [
        'Brokered the alliance between Rama and Sugriva before the witnessing fire, the pivot on which the whole southern campaign turns.',
        'Crossed a hundred yojanas of ocean, defeated Surasa, Simhika and Lankini, and located Sita in the Ashoka grove when every other search had failed.',
        'Delivered Rama\'s signet ring to Sita and carried back her chudamani jewel and the crow-and-breast token that only Rama could verify.',
        'Killed Akshayakumara, Jambumali and five of Ravana\'s commanders single-handed inside Lanka, and burned the city with his blazing tail.',
        'Brought the herb-bearing mountain from the Himalaya so that Sushena could revive Lakshmana, and again later for the fallen army.',
        'Carried Rama on his shoulders in the final battle so that Rama, on foot, could fight Ravana in his chariot on even terms.',
      ],
      weapons: ['Uprooted trees and boulders', 'Iron pillars seized in Lanka', 'His own fists and tail'],
      ending: {
        type: 'immortal',
        description:
          'Valmiki leaves Hanuman among the chiranjivis — the long-lived. Unlike the other vanaras he does not ascend with Rama but remains on earth, honoured with Sita\'s pearl necklace and Rama\'s embrace, for as long as the Ramayana is recited.',
      },
      shloka: {
        devanagari:
          'ततो रावणनीतायाः सीतायाः शत्रुकर्शनः ।\nइयेष पदमन्वेष्टुं चारणाचरिते पथि ॥',
        transliteration:
          'tato rāvaṇanītāyāḥ sītāyāḥ śatrukarśanaḥ |\niyeṣa padam anveṣṭuṃ cāraṇācarite pathi ||',
        translation:
          'Then that tormentor of enemies resolved to seek out the whereabouts of Sita, who had been carried off by Ravana, along the path travelled by the charanas.',
        ref: '5.1.1',
        context:
          'The opening verse of the Sundara Kanda, as Hanuman turns south toward the ocean to begin the leap to Lanka.',
      },
      trivia: [
        "His name is explained inside the text itself: Indra's vajra broke his left jaw (hanu) against a mountain peak, 'tato hi nāmadheyaṃ te hanumān iti kīrtitam' (4.66.24).",
        'Valmiki does not narrate Hanuman carrying the whole Dronagiri mountain to Lanka and back as a devotional set-piece performed for Rama alone; in the text (6.74) Jambavan names four herbs — mrita-sanjivani, vishalyakarani, sauvarnakarani and sandhani — and Hanuman lifts the peak only because he cannot tell them apart in the dark, then returns it.',
        "Valmiki does not narrate Hanuman tearing open his chest to reveal Rama and Sita within; that image comes from later retellings and from temple iconography, not from the epic.",
        'Valmiki does not narrate Hanuman writing or reciting the Hanuman Chalisa or the verse "yatra yatra raghunatha kirtanam" — both are much later devotional compositions, not Valmiki text.',
        "In Valmiki, Hanuman does not burn Lanka out of rage alone; he reasons that the fire will terrify Ravana's city and worries afterwards that Sita may have been harmed, until the charanas tell him she is unhurt.",
      ],
      wikiTitle: 'Hanuman',
    },
    {
      id: 'sugriva',
      name: 'Sugriva',
      sanskrit: 'सुग्रीव',
      epithets: ['Vanararaja', 'Harishvara', 'Son of Surya', 'Lord of Kishkindha'],
      faction: 'kishkindha',
      species: 'vanara',
      gender: 'male',
      kandas: ['kishkindha', 'sundara', 'yuddha', 'uttara'],
      importance: 4,
      summary:
        "Exiled vanara prince on Rishyamuka who allied with Rama by fire-oath, regained Kishkindha when Rama felled his brother Vali, and furnished the army that crossed to Lanka.",
      bio:
        "Sugriva was born of Surya to Riksharaja, the vanara who rose from a mountain lake, and was raised alongside Vali, Indra's son, in Kishkindha. The brothers were inseparable until the asura Mayavi, brother of Dundubhi, challenged Vali at the gates by night. Vali pursued him into a cave in the earth and told Sugriva to wait. After more than a year, blood flowed out of the mouth of the cave and the bellowing of asuras was heard; Sugriva, concluding his brother was dead, sealed the cave with a boulder so the demon could not emerge, and returned to Kishkindha, where the ministers crowned him. Vali, who had in fact killed Mayavi, broke out, read the boulder as treachery, drove Sugriva from the kingdom and — the injury Sugriva never forgave — took Sugriva's wife Ruma for himself.\n\nSugriva fled across the earth and found refuge on Mount Rishyamuka near Lake Pampa, the one place Vali could not follow: the sage Matanga had cursed Vali to die if he set foot on that hill, after Vali flung Dundubhi's carcass and the blood of it spattered Matanga's hermitage. There Sugriva lived with four ministers — Hanuman, Nala, Nila and Tara the elder — in constant dread, until he saw two armed men in bark cloth approaching and sent Hanuman down disguised as a mendicant to learn their purpose. He showed Rama the bundle of ornaments Sita had dropped as she was carried south, and the two swore friendship walking around a kindled fire.\n\nRama demonstrated his power by piercing seven sal trees with one arrow and kicking Dundubhi's dried skeleton a great distance; Sugriva then challenged Vali at Kishkindha. The first duel failed because Rama could not tell the identical brothers apart; at the second, wearing a garland of gajapushpi flowers, Sugriva fought again and Rama shot Vali from cover. Crowned king with Angada as yuvaraja, Sugriva then sank into the pleasures of the palace through the four months of rain and forgot his oath entirely. He admits this himself with remarkable candour in Kishkindha 24 and again after Lakshmana storms the city in fury — it is Tara who meets Lakshmana at the gate and Hanuman who rouses the king.\n\nOnce roused, Sugriva proved formidable as an organiser: he summoned vanara hosts from every mountain and river in a fortnight, divided them into four search parties by direction, and described the geography of the whole earth to them in detail. In the war he fought Kumbhakarna hand to hand and was carried off unconscious, bit off Kumbhakarna's ear and nose to escape, killed Virupaksha and Mahodara, and remained Rama's most senior royal ally. Valmiki ends his story at Rama's final departure, when Sugriva, having installed Angada on the throne of Kishkindha, follows Rama into the Sarayu.",
      motivations: [
        'Survival first of all — for years on Rishyamuka every approaching figure is a possible assassin sent by Vali.',
        'Recovery of his wife Ruma, whose seizure by Vali he cites as the unforgivable wrong far more often than the loss of the kingdom.',
        'A genuine and self-aware sense of obligation to Rama, which he repeatedly betrays through indulgence and then repairs with striking honesty.',
        'Fear of his brother so total that he initially doubts Rama could kill Vali and demands a demonstration before committing.',
        "Affection for Angada, his nephew and Vali's son, whom he makes crown prince rather than displacing.",
      ],
      abilities: [
        'Enormous physical strength in close combat — he grapples Kumbhakarna unarmed and tears off his ear and nose with his teeth.',
        'Exhaustive geographical knowledge of the continents, mountains and seas, which he recites when briefing the four search parties.',
        'Command authority over the entire vanara and bear confederation, able to assemble armies from Himavan to the Vindhyas within days.',
        'Great speed and leaping power, inherited from Surya, used to escape Vali repeatedly across the earth before Rishyamuka.',
        'A capacity for candid self-criticism that makes him correctable — rare among kings in the epic.',
      ],
      accomplishments: [
        'Swore the fire-witnessed alliance with Rama that turned a solitary exile into the commander of an army.',
        'Recovered the throne of Kishkindha and his wife Ruma after Vali fell at Rama\'s arrow.',
        'Mobilised and briefed four search parties covering the four directions, the operation that eventually located Sita.',
        'Wrestled Kumbhakarna in the field and survived by mutilating him, then rallied the army around that escape.',
        'Killed the rakshasa commanders Virupaksha and Mahodara during the siege of Lanka.',
        'Installed Angada as king of Kishkindha before following Rama on his final journey.',
      ],
      weapons: ['Bare hands and teeth', 'Trees and boulders'],
      ending: {
        type: 'ascension',
        description:
          "At Rama's departure Sugriva crowns Angada in Kishkindha and accompanies Rama to the Sarayu, entering the water with him.",
      },
      shloka: {
        devanagari:
          'श्रेयोऽद्य मन्ये मम शैलमुख्ये तस्मिन्हि वासश्चिरमृष्यमूके ।\nयथा तथा वर्तयतः स्ववृत्त्या नेमं निहत्य त्रिदिवस्य लाभः ॥',
        transliteration:
          'śreyo ’dya manye mama śailamukhye tasmin hi vāsaś ciram ṛṣyamūke |\nyathā tathā vartayataḥ svavṛttyā nemaṃ nihatya tridivasya lābhaḥ ||',
        translation:
          'Better, I now think, would have been my long dwelling on that chief of mountains, Rishyamuka, living somehow by my own means — not even heaven gained by killing him is worth this.',
        ref: '4.24.7',
        context:
          "Sugriva's remorse to Rama immediately after Vali's death, as Tara weeps over the body and the city wails.",
      },
      trivia: [
        'Valmiki gives Vali no chance to explain the cave before exiling Sugriva; the misunderstanding at the cave mouth is narrated as a genuine error of judgement on Sugriva\'s part, not as a plot.',
        'The garland that identifies Sugriva in the second duel is of gajapushpi flowers and is put on him by Lakshmana — in Valmiki it exists because Rama literally could not tell the brothers apart in the first fight.',
        "Sugriva's lapse into pleasure during the rains is not softened in Valmiki; he confesses it, and Lakshmana's threat to send him by the road Vali took is quoted directly.",
      ],
      wikiTitle: 'Sugriva',
    },
    {
      id: 'vali',
      name: 'Vali',
      sanskrit: 'वालिन्',
      epithets: ['Bali', 'Son of Indra', 'Kishkindhadhipati', 'Vanarendra'],
      faction: 'kishkindha',
      species: 'vanara',
      gender: 'male',
      kandas: ['kishkindha', 'uttara'],
      importance: 4,
      summary:
        'The unbeatable vanara king of Kishkindha, son of Indra, who drove out his brother Sugriva and was shot by Rama from concealment during their second duel.',
      bio:
        "Vali was the elder son of Riksharaja, begotten by Indra, and received from his father a golden chain that granted him half the strength of any adversary who faced him — which is why no being in the three worlds could defeat him frontally. His reputation rested on feats narrated by Sugriva to Rama: he had fought the asura Dundubhi, who came in the shape of a buffalo and bellowed at the gates of Kishkindha, and killed him, then flung the carcass a yojana through the air, scattering blood over the hermitage of the sage Matanga. Matanga cursed him to die instantly should he ever set foot on Rishyamuka — the curse that later made the hill the one sanctuary Sugriva had. Vali also fought Ravana himself: in the Uttara Kanda he tucks Ravana under his arm and carries him through the four oceans while completing his sandhya worship, after which the two swear friendship over fire.\n\nThe rupture with Sugriva came through Dundubhi's brother Mayavi, who challenged Vali by night. Vali chased him into a cave, left Sugriva at the entrance, and did not emerge for more than a year. When blood ran from the cave mouth, Sugriva took it for his brother's and blocked the opening with a rock. Vali, breaking out, read the sealed cave as attempted murder, drove Sugriva from the kingdom and took Ruma, Sugriva's wife, into his own household — an act his own queen Tara and the epic's narration both treat as the real transgression.\n\nWhen Sugriva roared his challenge at Kishkindha, Tara begged Vali not to go, reporting that Sugriva had allied with Rama of Ayodhya, and advised reconciliation and making Angada's position safe instead. Vali dismissed her counsel on the grounds that a kshatriya may not refuse a challenge and that Rama was a righteous man who would never strike an innocent. Rama shot him from behind a tree. The dying Vali's rebuke in Kishkindha 17 is one of the sharpest speeches in the epic: he reminds Rama that self-restraint, forbearance, dharma, firmness, truth and valour are the virtues of kings, and punishment only for wrongdoers; he points out that monkey flesh is forbidden food and monkey hide useless, that he had no quarrel with Rama, and that had Rama asked, he would himself have brought Sita back from Ravana in a single day.\n\nRama's answer rests on the earth being Ikshvaku's to govern, on Vali's seizure of his younger brother's wife — which in that law equals the offence of a father to a daughter — and on the hunter's licence to take game from cover. Vali accepts the reasoning, commends Angada and Tara to Rama's protection, returns the golden chain, and dies with Tara, Angada and Sugriva around him. His death is both the hinge of the alliance and the passage over which commentators have argued for a thousand years.",
      motivations: [
        'An absolute confidence in his own invincibility, grounded in Indra\'s chain and never once disproved in open combat.',
        'A kshatriya code of honour that makes refusing a shouted challenge unthinkable, even when his wife proves the challenge is a trap.',
        'Conviction that Sugriva deliberately entombed him at the cave mouth to take the throne — a belief he never revisits.',
        'Pride in his own dharma, such that he goes to the duel precisely because he believes Rama is too righteous to attack an innocent.',
        'Love for Angada, whose safety is the last thing he arranges before dying.',
      ],
      abilities: [
        "Indra's golden chain, which drew half the strength of any opponent who faced him into Vali himself, making frontal defeat impossible.",
        'Strength sufficient to kill the buffalo-asura Dundubhi and hurl the carcass a full yojana through the air.',
        'Speed enough to circle the four oceans between sunrise and the completion of his morning worship, carrying Ravana under one arm.',
        'Mastery of wrestling and of fighting with trees and boulders, the standard vanara arts, at a level no vanara ever matched.',
      ],
      accomplishments: [
        'Ruled Kishkindha unchallenged and made it the dominant power among the vanara kingdoms.',
        'Killed Dundubhi at the gates of Kishkindha and later killed his brother Mayavi inside the earth-cave.',
        'Humbled Ravana by carrying him through the four seas, after which Ravana swore friendship with him over fire.',
        'Drove Sugriva out of the kingdom and held the throne until the day Rama shot him.',
        'Delivered the dying rebuke to Rama in Kishkindha 17 that forces Rama to justify the killing in open argument.',
      ],
      weapons: ["Indra's golden chain (kanchana-mala)", 'Trees and boulders', 'Bare hands'],
      ending: {
        type: 'death',
        description:
          "Shot from concealment by Rama during his second duel with Sugriva, outside Kishkindha. He dies reconciled with Rama after securing promises for Tara and Angada.",
        killedBy: 'rama',
      },
      shloka: {
        devanagari:
          'दमः शमः क्षमा धर्मो धृतिः सत्यं पराक्रमः ।\nपार्थिवानां गुणा राजन् दण्डश्च अपकारिषु ॥',
        transliteration:
          'damaḥ śamaḥ kṣamā dharmo dhṛtiḥ satyaṃ parākramaḥ |\npārthivānāṃ guṇā rājan daṇḍaś ca apakāriṣu ||',
        translation:
          'Self-restraint, tranquillity, forbearance, righteousness, firmness, truth and valour — these are the virtues of kings, O king, and punishment is for wrongdoers.',
        ref: '4.17.19',
        context:
          "Vali, pierced by Rama's arrow, rebukes Rama for killing a being who had done him no harm.",
      },
      trivia: [
        "Valmiki does not say Vali was the reincarnation of anyone, nor that Rama killed him from hiding to repay a debt from a previous birth; the 'Vali reborn as the hunter Jara' story belongs to the Bhagavata and later Krishna cycles, not to the Ramayana.",
        'The boon Vali holds in Valmiki is the chain from Indra that transfers half an opponent\'s strength — not, as some retellings have it, a blessing from Brahma or Shiva.',
        'Rama gives four separate justifications in Kishkindha 18, and Valmiki lets Vali answer back and only then concede; the text deliberately leaves the act argued rather than simply approved.',
      ],
      wikiTitle: 'Vali (Ramayana)',
    },
    {
      id: 'tara',
      name: 'Tara',
      sanskrit: 'तारा',
      epithets: ['Queen of Kishkindha', 'Daughter of Sushena', 'Taradhipanana'],
      faction: 'kishkindha',
      species: 'vanara',
      gender: 'female',
      kandas: ['kishkindha', 'yuddha', 'uttara'],
      importance: 4,
      summary:
        "Vali's queen, daughter of the physician Sushena, whose political counsel, lament over Vali, and diplomacy with Lakshmana make her the sharpest mind in Kishkindha.",
      bio:
        "Tara was the daughter of Sushena, the vanara physician, and became the chief queen of Vali and mother of Angada. Valmiki introduces her not as an ornament of the court but as a counsellor: she has her own intelligence network and reads situations faster than her husband. When Sugriva returns a second time to roar his challenge at the gates of Kishkindha, it is Tara who grasps what has changed. She catches Vali at the door and tells him that Sugriva, beaten once and humiliated, would not come back so soon unless he had found a protector; that her son's spies report Rama of Ayodhya, a man of terrible bowmanship, encamped at Rishyamuka in alliance with Sugriva; and that the right policy is to make peace, install Sugriva as yuvaraja, and keep Angada's position secure. Vali refuses, citing a warrior's duty to answer a challenge, and goes out to die.\n\nHer lament over the fallen Vali in Kishkindha 20 is among the most quoted passages of the epic. She asks why he will not answer her, tells him to rise and take a proper bed because kings do not lie on bare ground, bitterly observes that the earth must be dearer to him than she is since even in death he embraces it with his limbs, and says that she herself is plunged in an ocean of grief with no joy and no hope left. She also names the cause aloud: you took Sugriva's wife and banished him, and this is the fruit of it. She demands to be killed with the same arrow so that she may follow him, and Rama's consolation — on the inevitability of death and the duty owed to the living — is addressed to her.\n\nShe appears again at the most dangerous moment of the alliance. When Lakshmana, enraged at Sugriva's four months of silence, arrives at Kishkindha with his bow strung and the vanaras scatter, it is Tara, unsteady with wine and wholly unafraid, who walks out to meet him. She disarms his anger by conceding everything — that Sugriva has indeed been at his pleasures, that anger against a drunken, beguiled friend is reasonable — then points out what Lakshmana does not know: that the summons has already gone out, that vanara hosts are already arriving from every quarter. The campaign survives because of that conversation.\n\nIn the Uttara Kanda and in the broader tradition Tara is counted among the panchakanya, the five women whose names are said to dispel sin. After Vali's death she enters Sugriva's household, as the vanara custom of the text allows, and her son Angada becomes crown prince and finally king of Kishkindha.",
      motivations: [
        "Keeping Vali alive — her entire argument at the gate is that the duel is a trap, and she is proved right within the hour.",
        "Securing Angada's position, which she raises before the duel, during her lament, and again when Hanuman consoles her.",
        'Preserving Kishkindha itself from a war it cannot win against Rama, which she sees before any of the ministers do.',
        'An unsentimental grasp of policy: she repeatedly recommends alliance over pride, to Vali and later to Sugriva.',
        'Loyalty that survives transfer of household — she protects Sugriva from Lakshmana as capably as she had tried to protect Vali from Rama.',
      ],
      abilities: [
        'Political judgement sharper than any minister in the epic — she alone predicts the outcome of the second duel correctly.',
        'Access to Angada\'s intelligence reports, which is how she knows of the Rama-Sugriva alliance before Vali does.',
        'Persuasive speech capable of defusing an armed and furious Lakshmana without a single concession of substance.',
        'Learning in statecraft and in omens, which she cites when urging Vali to seek peace.',
      ],
      accomplishments: [
        'Correctly identified Sugriva\'s alliance with Rama and the trap behind the second challenge before anyone else in Kishkindha.',
        'Delivered the lament in Kishkindha 20 that names Vali\'s seizure of Ruma as the cause of his destruction.',
        'Defused Lakshmana\'s armed fury at the gates of Kishkindha and saved the alliance at the moment of its greatest danger.',
        'Secured Angada\'s installation as yuvaraja under Sugriva, and his eventual kingship.',
        'Counted among the panchakanya, the five women whose remembrance is held to remove sin.',
      ],
      ending: {
        type: 'unknown',
        description:
          'Valmiki does not narrate her death. She remains queen in Kishkindha, mother of the crown prince and later king Angada, and is last seen among the women of the court.',
      },
      shloka: {
        devanagari:
          'निरानन्दा निराशाहं निमग्ना शोकसागरे ।\nत्वयि पञ्चत्वमापन्ने महायूथप यूथपे ॥',
        transliteration:
          'nirānandā nirāśāhaṃ nimagnā śokasāgare |\ntvayi pañcatvam āpanne mahāyūthapa yūthape ||',
        translation:
          'Joyless, without hope, I am drowned in an ocean of grief, now that you — the lord of the great troop-leaders — have dissolved into the five elements.',
        ref: '4.20.9',
        context:
          "From Tara's lament over Vali's body outside Kishkindha, immediately after Rama's arrow strikes him.",
      },
      trivia: [
        'In Valmiki, Tara is the daughter of the vanara physician Sushena, not an apsara born of the churning of the ocean; that origin appears only in later Puranic retellings.',
        'Valmiki does not narrate Tara cursing Rama; her anguish is directed at Vali and at death itself, and Rama answers her with consolation, not with a curse to avert.',
        "Her confrontation with Lakshmana (Kishkindha 33-34) has her approach him openly while intoxicated — the text does not apologise for this, and treats her argument as entirely sound.",
      ],
      wikiTitle: 'Tara (Ramayana)',
    },
    {
      id: 'ruma',
      name: 'Ruma',
      sanskrit: 'रुमा',
      epithets: ["Sugriva's queen", 'Vanara queen of Kishkindha'],
      faction: 'kishkindha',
      species: 'vanara',
      gender: 'female',
      kandas: ['kishkindha', 'yuddha'],
      importance: 2,
      summary:
        "Sugriva's wife, seized by Vali when he exiled his brother; her abduction is the legal ground on which Rama justifies killing Vali.",
      bio:
        "Ruma is Sugriva's wife, taken into Vali's household when Vali, believing himself betrayed at the cave of Mayavi, drove his younger brother out of Kishkindha. Valmiki gives her little direct speech, but places her at the centre of the epic's hardest legal argument. When Sugriva first tells Rama his story on Rishyamuka, it is not the loss of the kingdom he dwells on but the loss of Ruma; and when the dying Vali demands to know by what right Rama shot him, Rama's most substantial answer is that Vali had taken his younger brother's wife while the brother lived. In the law Rama cites, a younger brother's wife stands in the relation of a daughter, and the offence is capital.\n\nHer position mirrors Sita's in a deliberate way. Both are wives taken by a stronger male who assumed no consequence would follow; both become the measure by which the epic weighs its kings. The parallel is not accidental — Valmiki has Rama make the comparison himself in the course of answering Vali, and Tara names the seizure of Ruma as the true cause of Vali's death in her lament.\n\nOn Vali's fall Ruma is restored to Sugriva, and the reunion is one of the reasons Sugriva sinks so completely into the pleasures of the palace during the four months of rain, forgetting the oath that won her back. When Lakshmana arrives at Kishkindha in anger, Ruma and Tara are both in the inner apartments; after the alliance is repaired Sugriva takes the field and Ruma is last mentioned among the queens of Kishkindha.",
      motivations: [
        'Restoration to her husband Sugriva, from whose household she was taken by force.',
        'Survival within a court where she had no standing and no protector while Vali lived.',
      ],
      abilities: [
        'None narrated — Valmiki gives her no feats, and her significance in the text is juridical rather than active.',
      ],
      accomplishments: [
        'Her seizure by Vali supplies Rama with the principal dharmic justification for the killing, argued at length in Kishkindha 18.',
        'Restored to Sugriva on his coronation, becoming queen of Kishkindha.',
      ],
      ending: {
        type: 'unknown',
        description:
          'Valmiki does not narrate her death. She remains queen of Kishkindha alongside Tara after Sugriva takes the throne.',
      },
      trivia: [
        'Valmiki does not narrate Ruma speaking a single line; her entire weight in the epic comes from how other characters argue about what was done to her.',
        'Rama explicitly equates Vali\'s offence against Ruma with the gravest category of transgression when answering Vali\'s rebuke — the parallel with Ravana and Sita is drawn inside the text.',
      ],
      wikiTitle: 'Ruma (Ramayana)',
    },
    {
      id: 'angada',
      name: 'Angada',
      sanskrit: 'अङ्गद',
      epithets: ['Yuvaraja of Kishkindha', 'Son of Vali', 'Valiputra', 'Vanara envoy'],
      faction: 'kishkindha',
      species: 'vanara',
      gender: 'male',
      kandas: ['kishkindha', 'yuddha', 'uttara'],
      importance: 4,
      summary:
        "Vali and Tara's son, made crown prince by Sugriva, leader of the southern search party, and the envoy who planted his foot unbudgeable in Ravana's court.",
      bio:
        "Angada is the son of Vali and Tara, raised as heir to Kishkindha and barely grown when his father is shot. His first appearance of substance is through his intelligence network: it is Angada's scouts who bring Tara the news that Sugriva has allied with Rama, which she relays to Vali at the gate. On the field, the dying Vali places Angada's hand in Rama's and commends the boy to him. Sugriva, crowned, immediately makes Angada yuvaraja rather than setting him aside — a decision Hanuman urges on Tara as the thing that makes Vali's death bearable.\n\nSugriva gives Angada command of the southern search party, the one that matters, with Hanuman, Jambavan, Nila, Tara the elder and sixty thousand vanaras under him, and a deadline of one month. The party exhausts the Vindhyas, falls into the enchanted cave of Svayamprabha and is carried out by her power, and emerges to find the month expired. Angada, knowing Sugriva's temper and believing they will be executed for failure, proposes that they all fast to death on the shore — and makes a bitter speech blaming Sugriva for his father's death and his own suspect position. Hanuman and Jambavan talk him down. It is while they recite Jatayu's death aloud in their despair that the old vulture Sampati overhears and gives them Lanka.\n\nHis most famous scene is the embassy in Yuddha Kanda. Sent by Rama into Lanka as a final envoy, Angada enters the assembly, names Ravana's crimes, and offers terms: return Sita and live. Ravana orders him seized; four rakshasas take hold of him and Angada leaps to the roof of the palace with them still attached and shakes them off, breaking it. The scene in which he plants his foot in the court and challenges anyone present to move it is the one most often retold. In the war itself he kills Vajradamshtra, Narantaka — the son of Ravana who rode a horse through the vanara lines killing hundreds — Mahapaarshva and Kampana, and fights Indrajit.\n\nAt the end Rama gives him honours, and when Rama departs the world Sugriva installs Angada on the throne of Kishkindha. Valmiki's Uttara Kanda leaves him reigning, the last of Vali's line.",
      motivations: [
        'Loyalty to his father\'s memory, which sits uneasily beside loyalty to the uncle who now rules and to the man who shot Vali.',
        'A young commander\'s dread of returning to Sugriva with nothing, which nearly ends the southern search in mass suicide.',
        'Protection of his mother Tara, whose position in the court depends on his own standing.',
        'Loyalty to Rama, who was made his guardian by Vali in Vali\'s last minutes, and which overrides his resentment in the end.',
        'Pride in open challenge — he answers Ravana\'s court as a prince, not a messenger.',
      ],
      abilities: [
        'Great strength and leaping power, enough to spring to a palace roof carrying four rakshasas who had seized him.',
        'The footplant feat in Ravana\'s assembly, where no rakshasa present could shift his planted foot.',
        'Field command of sixty thousand vanaras over the whole southern quarter of the earth.',
        'An intelligence network of his own, which gave Tara the first word of the Rama-Sugriva alliance.',
        'Skilled combat against first-rank rakshasas — he kills Narantaka, Vajradamshtra and Mahapaarshva in the war.',
      ],
      accomplishments: [
        'Led the southern search party, the only one of the four that found any trace of Sita.',
        'Held the embassy to Ravana\'s court, naming the terms of peace and escaping the attempt to arrest him.',
        "Killed Narantaka, Ravana's son, in single combat during the siege, along with Vajradamshtra and Mahapaarshva.",
        'Was made yuvaraja of Kishkindha by Sugriva and finally king when Rama departed the world.',
      ],
      weapons: ['Trees and boulders', 'Bare hands'],
      ending: {
        type: 'retirement',
        description:
          'Crowned king of Kishkindha by Sugriva when Rama left the world, and left reigning there at the close of the Uttara Kanda.',
      },
      shloka: {
        devanagari:
          'अस्यां महिष्यां तु भृशं रुदत्यां पुरेऽतिविक्रोशति दुःखतप्ते ।\nहते नृपे संशयिते अङ्गदे च न राम राज्ये रमते मनो मे ॥',
        transliteration:
          'asyāṃ mahiṣyāṃ tu bhṛśaṃ rudatyāṃ pure ’tivikrośati duḥkhatapte |\nhate nṛpe saṃśayite aṅgade ca na rāma rājye ramate mano me ||',
        translation:
          'With this queen weeping bitterly, with the city crying out in anguish, the king slain and Angada\'s fate in doubt — my mind takes no pleasure in the kingdom, O Rama.',
        ref: '4.24.5',
        context:
          "Sugriva, remorseful over Vali's corpse, names the uncertainty of Angada's position as one reason the throne has become hateful to him.",
      },
      trivia: [
        "The famous foot-planting challenge in Ravana's assembly is genuinely in Valmiki's Yuddha Kanda, though the elaborate dialogue given to it in stage and television versions is later embellishment.",
        'Valmiki has Angada seriously propose that the whole southern party fast to death rather than face Sugriva — the lowest point of the search, and the accident that brings Sampati to them.',
        'Angada, not Hanuman, is the formal commander of the southern search party; Hanuman is given Rama\'s ring because Rama privately judges him the one most likely to succeed.',
      ],
      wikiTitle: 'Angada',
    },
    {
      id: 'jambavan',
      name: 'Jambavan',
      sanskrit: 'जाम्बवान्',
      epithets: ['Rikshraja', 'King of the bears', 'Jambavat', 'Elder of the vanara host'],
      faction: 'kishkindha',
      species: 'bear',
      gender: 'male',
      kandas: ['kishkindha', 'sundara', 'yuddha', 'uttara'],
      importance: 4,
      summary:
        "The ancient bear king and counsellor whose recitation of Hanuman's own birth broke the curse of forgetting and launched the leap to Lanka.",
      bio:
        "Jambavan is the king of the bears (riksha), the oldest living being in the vanara confederation and in Valmiki's account present at the churning of the ocean in an earlier age. He functions throughout as the memory and judgement of the army: where Sugriva commands and Angada leads, Jambavan is the one who knows what has been tried before, what a given mountain holds, and what each person present is actually capable of. He joins the southern search party under Angada and goes with it through the Vindhyas and into Svayamprabha's cave.\n\nHis decisive moment comes on the southern shore in Kishkindha 65-66. Sampati has told them Sita is in Lanka, a hundred yojanas across open sea. Jambavan calls on each vanara in turn to state how far he can leap: Gaja says ten yojanas, Gavaksha twenty, Sharabha thirty, Gandhamadana forty, Mainda fifty, Dvivida sixty, Sushena seventy, Angada says he can reach Lanka but doubts he could return, and Jambavan himself, who in his youth circled Vishnu at the Vamana avatara, admits that age has reduced him to ninety. Then he turns to Hanuman, who has been sitting apart and silent, and recites to him his own history — the apsara Punjikasthala cursed into the form of Anjana, her marriage to Kesari, Vayu's begetting of the child, the infant's three-hundred-yojana spring at the sun, Indra's vajra and the broken jaw, Vayu's withdrawal from the three worlds, and the boons the terrified gods piled on the baby. The sages' curse that made Hanuman forget his powers dissolves as he hears it. Hanuman swells on Mount Mahendra and goes.\n\nJambavan does the same office a second time in the war. When Indrajit's weapons have laid Rama and Lakshmana low and Sushena says only the herbs of the Himalaya will serve, it is Jambavan, himself badly wounded, who asks first whether Hanuman is alive — because, he says, if Hanuman lives the whole army lives — and then directs him to the mountain between Rishabha and Kailasa and names the four herbs: mrita-sanjivani, vishalyakarani, sauvarnakarani and sandhani. He fights in the siege, is wounded by Indrajit, and at the end is honoured by Rama along with the other leaders.",
      motivations: [
        'Keeping the expedition alive through its despair — twice he is the one who finds the way out when everyone else has given up.',
        "A clear-eyed assessment of other people's capacities, including his own diminished strength, which he states without embarrassment.",
        'Service to Sugriva and through him to Rama, as the senior ally of the bear kingdoms.',
        'Preservation of ancient knowledge: the geography of the Himalaya, the herbs of the gods, the histories of the beings around him.',
      ],
      abilities: [
        'Immense age and memory — he claims to have been present at the churning of the ocean and to have circumambulated Vishnu in the Vamana form.',
        'Knowledge of the mountains, the medicinal herbs of the Himalaya and the origins of every leader in the army.',
        'A ninety-yojana leap even in old age, and great strength in the field despite his years.',
        'The authority to assess and assign — the sequence in which he polls the vanaras for their range is the model of how he works.',
      ],
      accomplishments: [
        "Recited Hanuman's birth and boons back to him on the southern shore, breaking the sages' curse of forgetting and making the leap to Lanka possible.",
        'Talked Angada out of the mass fast-unto-death that would have ended the search.',
        'Named the four Himalayan herbs and directed Hanuman to the herb-mountain so that Lakshmana could be revived.',
        'Fought through the siege of Lanka as commander of the bear contingent despite his age, and was wounded by Indrajit.',
      ],
      weapons: ['Claws', 'Trees and boulders'],
      ending: {
        type: 'unknown',
        description:
          'Valmiki does not narrate his death; he is honoured by Rama at the coronation and in later tradition is counted among the long-lived who survive into other ages.',
      },
      shloka: {
        devanagari:
          'मृतसंजीवनीं चैव विशल्यकरणीमपि ।\nसौवर्णकरणीं चैव संधानीं च महौषधीम् ॥',
        transliteration:
          'mṛtasañjīvanīṃ caiva viśalyakaraṇīm api |\nsauvarṇakaraṇīṃ caiva sandhānīṃ ca mahauṣadhīm ||',
        translation:
          'Mrita-sanjivani, the reviver of the dead; vishalyakarani, the extractor of darts; sauvarnakarani, the restorer of colour; and sandhani, the great herb that knits flesh together.',
        ref: '6.74.33',
        context:
          'Jambavan names the four herbs growing on the mountain between Rishabha and Kailasa and sends Hanuman to fetch them for the fallen Rama and Lakshmana.',
      },
      trivia: [
        'Jambavan, not Hanuman himself, is the one who identifies the herbs by name — Valmiki is explicit that Hanuman brings the whole peak because he cannot tell the four glowing plants apart.',
        'In Valmiki he is king of the bears, a distinct people from the vanaras, though the two fight as one army under Sugriva.',
        "The Krishna-era story in which Jambavan wrestles Krishna for the Syamantaka jewel and gives him his daughter Jambavati is from the Bhagavata and Vishnu Puranas, not from the Ramayana.",
      ],
      wikiTitle: 'Jambavan',
    },
    {
      id: 'nala',
      name: 'Nala',
      sanskrit: 'नल',
      epithets: ['Son of Vishvakarma', 'Setukrit', 'Bridge-builder', 'Vanara architect'],
      faction: 'kishkindha',
      species: 'vanara',
      gender: 'male',
      kandas: ['kishkindha', 'yuddha'],
      importance: 3,
      summary:
        "Vanara son of the divine architect Vishvakarma, who built the hundred-yojana causeway across the ocean to Lanka in five days.",
      bio:
        "Nala is one of Sugriva's four ministers on Rishyamuka through the years of exile, alongside Hanuman, Nila and Tara the elder, and he serves in the southern search. His decisive role comes in Yuddha Kanda 22. Rama has lain three days on darbha grass at the shore, appealing to Samudra, the ocean, for passage; when the ocean does not answer he takes up his bow to dry the sea, and Samudra rises in person. The ocean tells Rama that his nature cannot be altered but that there is a way: among Rama's own army is Nala, son of Vishvakarma, and whatever Nala casts into the water the ocean will bear up.\n\nNala then steps forward and explains his claim. His mother received a boon from Vishvakarma on Mount Mandara that her son would equal his father in skill; Nala is Vishvakarma's own son and his equal in craft. He had not mentioned it, he says, because no one had asked — the ocean has reminded him of what he is. He undertakes the bridge at once.\n\nThe construction is described in detail. Hundreds of thousands of vanaras fan into the forest and bring back sal, ashvakarna, dhava, bamboo, kutaja, arjuna, tala, tilaka, bilva, saptaparna, karnikara, mango and ashoka trees, and boulders the size of elephants; machines are used to haul them; the work advances fourteen yojanas the first day, twenty the second, twenty-one the third, twenty-two the fourth and twenty-three the fifth, reaching Suvela. The finished causeway is ten yojanas wide and a hundred long. Gods, gandharvas, siddhas and great rishis gather in the sky to watch, and the bridge is said to shine across the sea like the path of the star Svati across the heavens. The army crosses, and the siege of Lanka begins. Nala fights through the war and kills the rakshasa Tundaka and, with Nila, Pratapana.",
      motivations: [
        'Pride in inherited craft — he treats the bridge as a professional problem, not a miracle.',
        'Service to Sugriva, whom he guarded through the exile years on Rishyamuka.',
        'Commitment to getting the army across, which he declares achievable the moment the ocean names him.',
      ],
      abilities: [
        'Architecture and engineering inherited from Vishvakarma, by a boon that made him his father\'s equal in skill.',
        'The specific power that anything he placed in the sea would be upheld by it, granted through Samudra\'s undertaking to Rama.',
        'Command of a workforce of hundreds of thousands of vanaras and the logistics of felling, hauling and placing material at scale.',
        'Combat strength sufficient to kill first-rank rakshasas during the siege.',
      ],
      accomplishments: [
        'Built the Setu across the southern ocean — a hundred yojanas long and ten wide — in five days, the engineering feat on which the entire war depends.',
        'Served as one of the four ministers who kept Sugriva alive on Rishyamuka during the years of Vali\'s pursuit.',
        'Marched with the southern search party under Angada as far as the ocean shore.',
        'Killed the rakshasa Tundaka and, with Nila, the rakshasa Pratapana in the siege of Lanka.',
      ],
      weapons: ['Trees and boulders', 'Bare hands'],
      ending: {
        type: 'unknown',
        description:
          'Valmiki does not narrate his death. He survives the war and is among the vanara leaders honoured by Rama after the coronation.',
      },
      shloka: {
        devanagari:
          'स नलेन कृतः सेतुः सागरे मकरालये ।\nशुशुभे सुभगः श्रीमान् स्वातीपथ इवाम्बरे ॥',
        transliteration:
          'sa nalena kṛtaḥ setuḥ sāgare makarālaye |\nśuśubhe subhagaḥ śrīmān svātīpatha iva ambare ||',
        translation:
          'That bridge built by Nala across the ocean, the abode of sea-monsters, shone splendid and auspicious, like the path of the star Svati across the sky.',
        ref: '6.22.72',
        context:
          'The completed causeway to Lanka, after five days of work by the vanara host under Nala.',
      },
      trivia: [
        'Valmiki does not narrate the popular story of stones floating because "Rama" was written on them, nor of a squirrel helping to build the bridge; both come from much later regional retellings. In Valmiki the sea upholds whatever Nala places in it, by the ocean\'s own undertaking to Rama.',
        'Valmiki gives the bridge exact dimensions and a five-day construction schedule with daily progress figures — fourteen, twenty, twenty-one, twenty-two and twenty-three yojanas.',
        'The ocean names Nala to Rama; Nala himself had not volunteered, and says plainly that nobody had asked him.',
      ],
      wikiTitle: 'Nala (Ramayana)',
    },
    {
      id: 'nila',
      name: 'Nila',
      sanskrit: 'नील',
      epithets: ['Son of Agni', 'Senapati of the vanara host', 'Commander-in-chief'],
      faction: 'kishkindha',
      species: 'vanara',
      gender: 'male',
      kandas: ['kishkindha', 'yuddha'],
      importance: 3,
      summary:
        'Son of Agni and commander-in-chief of the vanara army, who killed Prahasta and whose fire-nature made him proof against the weapons of Lanka.',
      bio:
        "Nila is the son of Agni and, like Nala, one of the four ministers who sheltered with Sugriva on Rishyamuka through the years of Vali's hunt. When the army is organised for the march south, Sugriva appoints him senapati — commander-in-chief of the whole vanara host — and gives him the standing duty of guarding the army's provisions, inspecting its order of march and watching for ambush in forests and defiles.\n\nIn the southern search he goes with Angada's party and is one of those trapped in Svayamprabha's cave. At the siege he takes the eastern gate when Rama assigns stations, facing Prahasta, Ravana's oldest and most formidable general. Their duel is the first of the great single combats of the war: Prahasta, who had commanded armies since the time of Sumali, drives his chariot at Nila, and Nila, after an exchange in which his bowless state forces him to improvise, takes up a boulder and crushes Prahasta's head with it. The death of Prahasta is the blow that first brings Ravana himself onto the field.\n\nNila also fights Ravana directly. Taking advantage of his father's nature, he shrinks and multiplies himself across Ravana's bow, chariot, flagstaff and horses, hopping from point to point so fast that Ravana cannot fix on him; when Ravana finally invokes the agneya weapon against him, the fire-missile cannot harm Agni's son, though it stuns him. He kills Nikumbha's forces and, with Nala, the rakshasa Pratapana. After the war he is among the leaders Rama honours before returning to Ayodhya.",
      motivations: [
        'Discharge of his office as senapati, which he treats as a standing responsibility for the whole army rather than personal glory.',
        'Service to Sugriva from the years of exile onward.',
        'A fighter\'s appetite for the hardest opponent on the field, which puts him against Prahasta and then Ravana.',
      ],
      abilities: [
        'Immunity to fire, inherited from Agni, which neutralises the agneya weapon Ravana directs at him.',
        'The capacity to shrink and seem to multiply in combat, used to confound Ravana from his own chariot.',
        'Command and staff work for an army of hundreds of thousands — provisioning, order of march and counter-ambush are explicitly his charge.',
        'Great strength with boulders, the weapon with which he kills Prahasta.',
      ],
      accomplishments: [
        'Appointed senapati, commander-in-chief, of the entire vanara and bear army before the march south.',
        "Killed Prahasta, Ravana's senior general, with a boulder at the eastern gate of Lanka.",
        'Fought Ravana himself on the field and survived the agneya astra unharmed.',
        'Served as one of Sugriva\'s four ministers through the exile on Rishyamuka and marched with Angada\'s southern search party.',
      ],
      weapons: ['Boulders', 'Trees', 'Bare hands'],
      ending: {
        type: 'unknown',
        description:
          'Valmiki does not narrate his death. He survives the war and is honoured among the vanara leaders at the close of the Yuddha Kanda.',
      },
      trivia: [
        'Nila, not Hanuman or Angada, holds the formal rank of commander-in-chief of the vanara army in Valmiki.',
        "Valmiki does not identify Nila with Nala or treat the two as one figure; they are separate vanaras with separate divine fathers — Agni and Vishvakarma — who act together only occasionally.",
        'No shloka is attached to him here: his major passages (the duel with Prahasta in Yuddha Kanda 58) could not be verified verbatim to the standard required for this dataset.',
      ],
      shloka: {
        devanagari: 'प्रहस्तस्य शिलां नीलो मूर्ध्नि तूर्णमपातयत् ।\nबिभेद बहुधा घोरा प्रहस्तस्य शिरस्तदा ॥',
        transliteration: 'prahastasya śilāṃ nīlo mūrdhni tūrṇam apātayat |\nbibheda bahudhā ghorā prahastasya śiras tadā ||',
        translation: 'Nila brought the rock down swiftly on Prahasta\'s head, and that terrible stone then split Prahasta\'s skull in many places.',
        ref: '6.58.53-54',
        context: 'Nila kills Ravana\'s commander-in-chief Prahasta with a boulder, the first of the great Lankan captains to fall.',
      },
      wikiTitle: 'Nila (Ramayana)',
    },
    {
      id: 'sushena',
      name: 'Sushena',
      sanskrit: 'सुषेण',
      epithets: ['Vanara physician', 'Father of Tara', 'Elder of the host'],
      faction: 'kishkindha',
      species: 'vanara',
      gender: 'male',
      kandas: ['kishkindha', 'yuddha'],
      importance: 3,
      summary:
        'The aged vanara physician, father of Tara, who diagnosed the wounded in Lanka and directed the fetching of the Himalayan herbs that revived Lakshmana.',
      bio:
        "Sushena is one of the senior vanaras of Kishkindha, father of Tara and therefore father-in-law first to Vali and then to Sugriva. He is a leader of troops in his own right — when Jambavan polls the host on the southern shore for their leaping range, Sushena answers seventy yojanas, placing him among the strongest present — but his standing in the epic rests on medicine. Valmiki treats him as the army's physician, the one consulted whenever a leader falls.\n\nHis role is decisive twice in the war. When Indrajit's serpent-weapon and later his terrible shafts bring down Rama and Lakshmana and the whole army believes them dead, it is Sushena who examines them, declares that they are not dead but struck down, and states what is needed: the herbs that grow on the mountain in the Himalaya between Rishabha and Kailasa — vishalyakarani to draw out the embedded darts, sauvarnakarani to restore the colour of the skin, sanjivani to restore life, and sandhani to knit the torn flesh. He also has Hanuman fetch him the two hills on which the herbs grow when identification in the dark proves impossible, and it is Sushena who crushes the plants and holds them to Lakshmana's nose so that the prince rises from the ground whole, with every dart fallen out of his body.\n\nHe performs the same office for Sugriva after Kumbhakarna has crushed and bitten him, and he consoles Rama with the assurance that the vanaras can be restored. He is also the elder who argues for patience and for proper treatment of the wounded rather than immediate renewed assault. He survives the war and returns with the army.",
      motivations: [
        'The physician\'s duty to the wounded, which he discharges for both armies\' casualties among his own side without regard to rank.',
        'Protection of his daughter Tara and, through her, of the stability of Kishkindha across two reigns.',
        'Counsel to Sugriva, whom he serves as elder statesman as well as father-in-law.',
      ],
      abilities: [
        'Knowledge of the divine herbs of the Himalaya and of how to prepare and administer them.',
        'Diagnosis — he can tell that Rama and Lakshmana are stunned rather than dead when the entire army has concluded otherwise.',
        'A seventy-yojana leap, which he states when Jambavan polls the host on the southern shore.',
        'The authority of great age, which lets him argue against Sugriva and the field commanders when he judges them wrong.',
      ],
      accomplishments: [
        'Revived Lakshmana with vishalyakarani and the other herbs after Indrajit\'s shafts had felled him, drawing every dart out of his body.',
        'Treated Sugriva after Kumbhakarna mauled him and restored him to the field.',
        'Identified the four herbs and the mountain they grow on, the information that sent Hanuman to the Himalaya.',
        'Fathered Tara, whose counsel shapes the politics of Kishkindha through two kings.',
      ],
      ending: {
        type: 'unknown',
        description:
          'Valmiki does not narrate his death. He survives the siege of Lanka and returns with the vanara host.',
      },
      trivia: [
        'There is a second Sushena in the epic — a rakshasa father-in-law of Ravana mentioned in passing — but the physician of Kishkindha is a distinct figure.',
        'Valmiki does not narrate Sushena being a Lankan physician kidnapped by Hanuman, house and all, to treat Lakshmana; that episode belongs to later regional Ramayanas, not to Valmiki, where Sushena is a vanara of Kishkindha from the start.',
        'No shloka is attached to him here: his speeches in Yuddha Kanda 50 and 74 could not be verified verbatim to the standard required for this dataset.',
      ],
      wikiTitle: 'Sushena',
    },
    {
      id: 'kesari',
      name: 'Kesari',
      sanskrit: 'केसरी',
      epithets: ['Kesari the vanara lord', 'Husband of Anjana', 'Kunjara\'s son-in-law'],
      faction: 'kishkindha',
      species: 'vanara',
      gender: 'male',
      kandas: ['kishkindha', 'uttara'],
      importance: 2,
      summary:
        "Lord of monkeys on the Malyavan range, husband of Anjana and earthly father of Hanuman, who is accordingly called Kesarinandana.",
      bio:
        "Kesari is named in Jambavan's narration in Kishkindha 66 as the vanara lord whose wife was Anjana — 'añjanā iti parikhyātā patnī kesariṇo hareḥ'. He dwelt on the Malyavan range, and Hanuman's standing epithet Kesarinandana, son of Kesari, derives from him; the epic carries both paternities without contradiction, Vayu as the divine father and Kesari as the husband in whose house the child was born and raised.\n\nValmiki gives him little narrative action of his own, but later tradition and the epic's wider frame credit him with the killing of the elephant-demon Shambasadana at the behest of the devas and rishis — the feat from which his name, 'the lion-like', is sometimes explained. He is a figure of the generation before the war, contemporary with Riksharaja rather than with Sugriva and Vali, and does not take the field against Lanka.\n\nHis importance in the graph is relational: he anchors Hanuman to a vanara lineage and to the Malyavan country, and his marriage to the cursed apsara Punjikasthala, reborn as Anjana, is the point at which a celestial and a vanara line cross. Valmiki's interest in him is almost entirely genealogical.",
      motivations: [
        'The ordinary duties of a vanara chieftain on the Malyavan range in the generation before the war.',
        'Protection of Anjana, whose curse into vanara form he accepted in marrying her.',
        'Raising the child whose name carries his own.',
      ],
      abilities: [
        'The strength and leaping power of a first-rank vanara lord, sufficient in tradition to kill the elephant-demon Shambasadana.',
        'Chieftainship over the monkeys of the Malyavan range.',
      ],
      accomplishments: [
        "Married Anjana, the apsara Punjikasthala cursed into vanara form, and became the earthly father of Hanuman.",
        'Held lordship over the vanaras of Malyavan in the generation before Vali and Sugriva.',
      ],
      ending: {
        type: 'unknown',
        description:
          'Valmiki does not narrate his death; he belongs to the generation preceding the war and does not appear in the Lanka campaign.',
      },
      shloka: {
        devanagari:
          'अप्सरा अप्सरसां श्रेष्ठा विख्याता पुञ्जिकस्थला ।\nअञ्जनेति परिख्याता पत्नी केसरिणो हरेः ॥',
        transliteration:
          'apsarā apsarasāṃ śreṣṭhā vikhyātā puñjikasthalā |\nañjaneti parikhyātā patnī kesariṇo hareḥ ||',
        translation:
          'There was a celebrated apsara, the foremost of apsaras, named Punjikasthala — known as Anjana, the wife of Kesari, lord of monkeys.',
        ref: '4.66.8',
        context:
          "Jambavan begins the account of Hanuman's birth on the southern shore, naming Kesari as Anjana's husband.",
      },
      trivia: [
        "Valmiki's own text names Kesari only in passing, as part of Jambavan's genealogy; the detailed stories of Kesari's exploits come from later Puranic and devotional material.",
      ],
      wikiTitle: 'Kesari (Ramayana)',
    },
    {
      id: 'anjana',
      name: 'Anjana',
      sanskrit: 'अञ्जना',
      epithets: ['Punjikasthala', 'Anjani', 'Mother of Hanuman', 'Daughter of Kunjara'],
      faction: 'kishkindha',
      species: 'vanara',
      gender: 'female',
      kandas: ['kishkindha', 'uttara'],
      importance: 3,
      summary:
        'The apsara Punjikasthala, cursed into vanara form, wife of Kesari and mother of Hanuman by Vayu.',
      bio:
        "Jambavan's account in Kishkindha 66 identifies Anjana precisely: she was Punjikasthala, the foremost of apsaras, famous in the three worlds and without equal on earth for beauty, who by a curse took birth in vanara form as the daughter of Kunjara, chief of the vanaras, and became the wife of Kesari. The curse carried a mitigation — in her vanara state she retained kamarupa, the power to take any shape she wished, and she used it to assume human form at will.\n\nThe conception is narrated with unusual delicacy. Wearing a yellow silk garment with red borders and ornaments of varied flowers, she was walking on a mountain summit that resembled a monsoon cloud when the Wind slowly lifted her garment. Vayu, taking her in an embrace she did not resist, told her that a son would be born to her equal to himself in splendour, intelligence, strength and leaping power, and that her virtue would not be violated. She bore the child in a cave.\n\nHer one narrated action after the birth is the one that sets the whole of Hanuman's childhood in motion: she left the infant in the cave while she went out for fruit, and the hungry child, seeing the sun rise red, mistook it for a ripe fruit and sprang into the sky after it — three hundred yojanas, until Indra's thunderbolt struck him down. Everything that follows — the broken jaw, Vayu's strike against the three worlds, the boons of Brahma, Indra, Agni, Varuna and Yama, and ultimately the leap to Lanka — proceeds from that unattended morning. Valmiki says nothing of her afterwards.",
      motivations: [
        'Release from the curse that reduced an apsara to vanara form, which the birth of a great son is said to accomplish.',
        'Care of the infant Hanuman, for whom she goes out to gather fruit on the morning of the solar leap.',
        'Fidelity to Kesari, which Vayu explicitly assures her will not be compromised.',
      ],
      abilities: [
        'Kamarupa — she retained the power to take any form she chose even under the curse, and habitually assumed human shape.',
        'The beauty for which Punjikasthala was renowned in the three worlds, unaltered by her change of body.',
      ],
      accomplishments: [
        'Bore Hanuman to Vayu in a mountain cave, giving the epic its greatest vanara.',
        "Her lineage joins the celestial and vanara lines: daughter of Kunjara, wife of Kesari, mother of the Wind's son.",
      ],
      ending: {
        type: 'unknown',
        description:
          'Valmiki does not narrate her later life or death; she disappears from the text after the account of Hanuman\'s infancy.',
      },
      shloka: {
        devanagari:
          'विख्याता त्रिषु लोकेषु रूपेणाप्रतिमा भुवि ।\nअभिशापादभूत्तात कपित्वे कामरूपिणी ॥',
        transliteration:
          'vikhyātā triṣu lokeṣu rūpeṇā apratimā bhuvi |\nabhiśāpāt abhūt tāta kapitve kāmarūpiṇī ||',
        translation:
          'Famed in the three worlds, unequalled on earth for beauty, she came by a curse, my dear, into the form of a monkey — yet able to take any shape at will.',
        ref: '4.66.9',
        context:
          "Jambavan describes Anjana's cursed descent from apsara to vanara while telling Hanuman of his own birth.",
      },
      trivia: [
        "Valmiki does not narrate Anjana performing austerities to Shiva for a son, nor Vayu carrying a sacrificial payasa to her from Dasharatha's yajna; those accounts come from the Puranas and from later retellings, not from the Ramayana.",
        'In Valmiki her curse is reported only as a fact with no stated curser or reason; the Puranic elaborations supply both.',
      ],
      wikiTitle: 'Anjana (Hinduism)',
    },
    {
      id: 'vayu',
      name: 'Vayu',
      sanskrit: 'वायु',
      epithets: ['Marut', 'Pavana', 'Prabhanjana', 'Gandhavaha', 'Sadagati', 'Father of Hanuman'],
      faction: 'devas',
      species: 'deva',
      gender: 'male',
      kandas: ['kishkindha', 'sundara', 'yuddha', 'uttara'],
      importance: 3,
      summary:
        'The Wind-god, divine father of Hanuman, whose withdrawal from the three worlds in rage forced the gods to load the injured child with boons.',
      bio:
        "Vayu is the Wind, one of the oldest deities of the Vedic order and the breath by which the three worlds live — a fact the Ramayana makes structurally important rather than merely poetic. His entry into the narrative is through Anjana. Walking on a mountain summit in a yellow silk garment, the cursed apsara was seen by the Wind, who lifted her garment, embraced her, and promised her a son equal to himself in splendour, intelligence, strength and the power of leaping, assuring her that her chastity would not be injured. Hanuman was born of that union, and carries the names Vayuputra, Maruti, Pavanasuta and Marutatmaja.\n\nVayu's decisive act comes after Indra's thunderbolt strikes the infant out of the sky and breaks his jaw against a mountain peak. The Wind, seeing his son struck down, took the child into a cave and stopped — simply ceased to blow anywhere in the three worlds. Valmiki describes the consequence as a universal crisis: with the wind gone, breath fails, offerings cannot rise, and the whole order of beings begins to collapse. The gods, terrified, come as a body to propitiate him. Brahma restores the child and grants him immunity to the brahmastra; Indra declares that his own vajra shall never harm him again; Agni, Varuna and Yama each surrender their weapons' power over him; Surya grants a portion of his splendour; Kubera and Vishvakarma add their own. Only when his son has been made effectively invulnerable does Vayu resume blowing.\n\nThe Wind continues to act through his son rather than in person. In the Sundara Kanda Hanuman's flight is repeatedly described in terms of his father's nature, and Vayu himself blows pleasantly on Hanuman to cool him while Lanka burns. In the Yuddha Kanda he is among the deities present for the final acts. Within the epic's logic, every boon Hanuman carries is the price the universe paid for a father's grief.",
      motivations: [
        "Protection of his son, pursued to the point of suspending his own cosmic function and endangering every living being.",
        'Fulfilment of the promise made to Anjana that the child would equal him in every faculty.',
        'Maintenance, otherwise, of the order of the worlds as the breath that sustains them.',
      ],
      abilities: [
        'Sovereignty over wind and breath throughout the three worlds, which he can withdraw entirely.',
        'Unmatched speed, the quality he transmits directly to Hanuman.',
        'The capacity to grant his own nature to his offspring — splendour, intelligence, strength and leaping power.',
      ],
      accomplishments: [
        'Fathered Hanuman upon Anjana without violating her chastity, by the terms he himself stated.',
        'Forced the entire assembly of gods to grant the infant Hanuman invulnerability by withdrawing the wind from the three worlds.',
        'Revived the stricken child in the cave before the gods arrived.',
        'Sustained and cooled Hanuman during the burning of Lanka.',
      ],
      ending: {
        type: 'immortal',
        description:
          'A deva and one of the perpetual elemental powers; he does not die, and resumes his office once his son is restored.',
      },
      shloka: {
        devanagari:
          'ततस्त्वां निहतं दृष्ट्वा वायुर्गन्धवहः स्वयम् ।\nत्रैलोक्यं भृशसंक्रुद्धो न ववौ वै प्रभञ्जनः ॥',
        transliteration:
          'tatas tvāṃ nihataṃ dṛṣṭvā vāyur gandhavahaḥ svayam |\ntrailokyaṃ bhṛśasaṃkruddho na vavau vai prabhañjanaḥ ||',
        translation:
          'Then, seeing you struck down, Vayu the bearer of fragrance, the shatterer, in violent rage ceased to blow at all throughout the three worlds.',
        ref: '4.66.25',
        context:
          "Jambavan tells Hanuman how his father's grief at Indra's thunderbolt brought the three worlds to a standstill.",
      },
      trivia: [
        "Valmiki's Vayu does not fight anyone; his power in the episode is entirely in refusal — he stops performing his function, and the cosmos cannot continue.",
        'The Mahabharata makes Vayu also the father of Bhima, which is why the two are called brothers in later literature; the Ramayana itself makes no such connection.',
      ],
      wikiTitle: 'Vayu',
    },
    {
      id: 'riksharaja',
      name: 'Riksharaja',
      sanskrit: 'ऋक्षरजस्',
      epithets: ['Riksharajas', 'Father of Vali and Sugriva', 'Lord of the vanaras'],
      faction: 'kishkindha',
      species: 'vanara',
      gender: 'male',
      kandas: ['kishkindha', 'uttara'],
      importance: 2,
      summary:
        'The vanara king who arose from a mountain lake and ruled Kishkindha before Vali; father of Vali by Indra and of Sugriva by Surya.',
      bio:
        "Riksharaja is the founder-figure of the Kishkindha line. The Uttara Kanda tells that he arose from a lake on a mountain and ruled over the vanaras, and that while he was looking into the water he saw what he took to be an enemy and plunged in, emerging transformed into a female of extraordinary beauty. In that form he was seen by Indra and by Surya, and from the two encounters were born Vali, from Indra, and Sugriva, from Surya. Restored to his own form, he raised both as his sons, and Brahma gave him the kingdom of Kishkindha, the city built by Vishvakarma within the mountain.\n\nHis importance to the plot is the fact of the two paternities. Vali and Sugriva are full brothers in upbringing and half-brothers through a single parent, and each inherits his divine father's gift — Vali the martial favour of Indra, including the chain that halves an opponent's strength, Sugriva the speed and endurance of the Sun. The whole feud, and Rama's eventual intervention in it, rests on two sons of gods raised as brothers in a single house.\n\nOn Riksharaja's death the ministers crowned Vali, the elder, and Sugriva served him faithfully until the night of Mayavi's challenge. Valmiki gives him no further narrative action; he belongs to the prehistory that the Kishkindha and Uttara Kandas supply in retrospect.",
      motivations: [
        'Rule of the vanara people from the mountain city of Kishkindha granted to him by Brahma.',
        'Raising Vali and Sugriva as brothers in a single household despite their different divine fathers.',
      ],
      abilities: [
        'Transformation — his plunge into the mountain lake changed him into a woman of great beauty and back again.',
        'Kingship over the vanaras of the Kishkindha country, confirmed by Brahma.',
      ],
      accomplishments: [
        'Founded the royal line of Kishkindha and received the kingdom from Brahma.',
        'Fathered Vali by Indra and Sugriva by Surya, the two kings whose quarrel shapes the Kishkindha Kanda.',
      ],
      ending: {
        type: 'death',
        description:
          'Died in old age; the ministers of Kishkindha then crowned his elder son Vali, with Sugriva serving as his support.',
      },
      trivia: [
        'The lake-transformation story is told in the Uttara Kanda; the main narrative simply treats Vali and Sugriva as brothers without explaining the double divine parentage.',
        'His name is sometimes given as Riksharajas and is occasionally confused with Jambavan, who is separately called Rikshraja as king of the bears — Valmiki keeps them distinct.',
      ],
      wikiTitle: 'Riksharaja',
    },
    {
      id: 'dadhimukha',
      name: 'Dadhimukha',
      sanskrit: 'दधिमुख',
      epithets: ['Keeper of the Madhuvana', "Sugriva's maternal uncle"],
      faction: 'kishkindha',
      species: 'vanara',
      gender: 'male',
      kandas: ['sundara'],
      importance: 2,
      summary:
        "The vanara guardian of Sugriva's honey-grove, beaten by the returning search party and sent to complain — which is how Sugriva learns Sita has been found.",
      bio:
        "Dadhimukha is Sugriva's kinsman and the appointed guardian of the Madhuvana, the royal honey-grove of Kishkindha, which no vanara might enter without the king's leave. His single episode, in the closing sargas of the Sundara Kanda, is one of the few comic passages in the epic and is placed with exact narrative purpose.\n\nThe southern search party, returning north with Hanuman's news that Sita lives in Lanka, is so elated that Angada grants them leave to raid the Madhuvana — Jambavan and Hanuman both assenting. The vanaras tear into the honey, drink themselves into uproar, break the trees, sing and dance and fight among themselves. Dadhimukha and his guards attempt to stop them and are seized, slapped, dragged by the knees and thoroughly beaten; Angada himself handles the old guardian roughly.\n\nDadhimukha goes straight to Kishkindha to lay a formal complaint before Sugriva, and this is the point of the whole episode. Sugriva hears what has happened and, instead of anger, is delighted — because, he reasons aloud, only vanaras who had succeeded would dare to plunder the royal grove on their way home. He tells Dadhimukha to send the whole raiding party to him at once. The honey-robbery is thus the signal, reaching the king before the messengers do, that Sita has been found. Dadhimukha, pacified, returns and conveys the summons, and the search party comes before Rama.",
      motivations: [
        'Faithful discharge of a royal trust — the Madhuvana is forbidden ground and he defends it even against the crown prince.',
        'Proper procedure: when force fails he does not escalate but takes his complaint to the king.',
      ],
      abilities: [
        'Command of the guard detail of the Madhuvana.',
        'Speed enough to reach Kishkindha and lay his complaint before the raiders have finished.',
      ],
      accomplishments: [
        "Carried to Sugriva the news of the Madhuvana raid, from which Sugriva correctly deduced that the southern search had succeeded.",
        'Guarded the royal honey-grove of Kishkindha as the king\'s appointed keeper.',
      ],
      ending: {
        type: 'unknown',
        description:
          'Valmiki does not narrate his death; he is last seen conveying Sugriva\'s summons back to the search party at the Madhuvana.',
      },
      trivia: [
        "The Madhuvana episode is Valmiki's device for letting Sugriva know the mission succeeded before any report arrives — the king reads the vandalism as proof of success.",
        'Dadhimukha is described as a kinsman of Sugriva, which is why Angada expects the raid to be forgiven.',
      ],
      wikiTitle: 'Vanara',
    },
    {
      id: 'gandhamadana',
      name: 'Gandhamadana',
      sanskrit: 'गन्धमादन',
      epithets: ['Vanara commander', 'Leader of the host'],
      faction: 'kishkindha',
      species: 'vanara',
      gender: 'male',
      kandas: ['kishkindha', 'yuddha'],
      importance: 1,
      summary:
        'A vanara troop-leader of the southern search and the siege, who declares a leaping range of forty yojanas when Jambavan polls the host.',
      bio:
        "Gandhamadana is one of the named vanara yuthapas — troop-leaders — of Sugriva's confederation, bearing the name of the fragrant mountain. He is listed among the chiefs who bring contingents when Sugriva summons the vanara nations after the rains, and he marches with the southern party under Angada through the Vindhyas and into Svayamprabha's cave.\n\nHis one individually marked moment comes on the southern shore in Kishkindha 65, when Jambavan goes down the line asking each leader how far he can leap across the sea. Gaja answers ten yojanas, Gavaksha twenty, Sharabha thirty, Gandhamadana forty, Mainda fifty, Dvivida sixty, Sushena seventy, Jambavan ninety, and Angada says he could reach Lanka but could not be sure of returning. The sequence is how Valmiki establishes, by arithmetic rather than assertion, that only Hanuman can do it.\n\nIn the Yuddha Kanda he is assigned a station in the siege, fights in the general engagements and is among the wounded who are revived by the Himalayan herbs. He survives the war.",
      motivations: [
        'Service to Sugriva as one of the summoned troop-leaders of the vanara confederation.',
        'Finding Sita within the month allotted to the southern party.',
      ],
      abilities: [
        'A leaping range of forty yojanas, as he states when Jambavan polls the host.',
        'Command of a vanara contingent in the search and in the siege.',
      ],
      accomplishments: [
        'Marched with the southern search party under Angada to the shore of the ocean.',
        'Fought through the siege of Lanka as a troop-leader of the vanara army.',
      ],
      ending: {
        type: 'unknown',
        description: 'Valmiki does not narrate his death; he survives the war among the vanara leaders.',
      },
      trivia: [
        "He shares his name with Mount Gandhamadana, a peak repeatedly named in the epic's geography — Valmiki does not explain the coincidence.",
      ],
      wikiTitle: 'Vanara',
    },
    {
      id: 'mainda',
      name: 'Mainda',
      sanskrit: 'मैन्द',
      epithets: ['Son of the Ashvins', 'Brother of Dvivida', 'Vanara commander'],
      faction: 'kishkindha',
      species: 'vanara',
      gender: 'male',
      kandas: ['kishkindha', 'yuddha'],
      importance: 2,
      summary:
        'Vanara commander, one of the twin sons of the Ashvins, holder of a boon of near-invulnerability, who fought beside his brother Dvivida throughout the war.',
      bio:
        "Mainda and Dvivida are the sons of the Ashvins, the twin physician-gods, and the epic treats them almost always as a pair. Brahma is said to have granted them a boon making them proof against death by ordinary means, which is why they are committed to the heaviest fighting. They come with their contingents when Sugriva summons the vanara nations and are assigned to the southern search under Angada.\n\nOn the shore, when Jambavan polls the leaders for their leaping range, Mainda answers fifty yojanas and Dvivida sixty — well short of the hundred required, and part of the arithmetic by which the text proves that only Hanuman can cross. They go into Svayamprabha's cave with the party and are carried out of it by her power.\n\nIn the war they are prominent. Mainda and Dvivida are among the vanaras who attack Kumbhakarna when he wakes, and they fight Indrajit's forces and the rakshasa commanders at the gates. Valmiki also names the two of them as being set to guard Sita's quarters and later as among the leaders Rama honours after the coronation. Mainda survives the war.",
      motivations: [
        'Service to Sugriva as a summoned commander of the vanara confederation.',
        'Inseparable partnership with his twin brother Dvivida, with whom he fights every engagement.',
        'The confidence of a being who has been granted immunity from ordinary death, which puts him in the front rank.',
      ],
      abilities: [
        'A boon from Brahma rendering him proof against death by ordinary means, shared with Dvivida.',
        'A leaping range of fifty yojanas, stated when Jambavan polls the host.',
        'Great strength in close combat with trees, rocks and bare hands.',
        'Healing descent from the Ashvins, the physicians of the gods.',
      ],
      accomplishments: [
        'Marched with the southern search party under Angada and survived Svayamprabha\'s cave.',
        'Fought Kumbhakarna alongside Dvivida when the giant woke and entered the field.',
        'Served through the siege of Lanka as a front-rank commander and survived the war.',
      ],
      weapons: ['Trees and boulders', 'Bare hands'],
      ending: {
        type: 'unknown',
        description:
          'Valmiki does not narrate his death; he survives the war and is among the vanaras honoured by Rama.',
      },
      trivia: [
        'Mainda and Dvivida are almost never mentioned separately in Valmiki; the pair functions as a single unit in the text.',
        "The Bhagavata Purana later makes Dvivida an enemy of Balarama in the Krishna era; the Ramayana knows nothing of this.",
      ],
      wikiTitle: 'Vanara',
    },
    {
      id: 'dvivida',
      name: 'Dvivida',
      sanskrit: 'द्विविद',
      epithets: ['Son of the Ashvins', 'Brother of Mainda', 'Vanara commander'],
      faction: 'kishkindha',
      species: 'vanara',
      gender: 'male',
      kandas: ['kishkindha', 'yuddha'],
      importance: 2,
      summary:
        'Vanara commander and twin of Mainda, son of the Ashvins, with a sixty-yojana leap and a boon against ordinary death.',
      bio:
        "Dvivida is the second of the Ashvin twins' vanara sons and is named almost always in the same breath as his brother Mainda. Like him he holds Brahma's boon of near-invulnerability, and like him he brings a contingent when Sugriva's summons goes out across the mountains after the rains.\n\nHe is assigned to Angada's southern party and is one of those who answer Jambavan's poll on the shore of the ocean, declaring a range of sixty yojanas — the second-highest after Jambavan's ninety and Angada's uncertain one-way crossing, and still insufficient. He enters and escapes Svayamprabha's enchanted cave with the rest.\n\nIn the Yuddha Kanda he is in the forefront of the assault. He and Mainda are among the vanaras who rush Kumbhakarna, he fights in the general engagements at the gates, and the two are among those detailed to Sita's safety and later honoured by Rama. Valmiki leaves him alive at the end of the war.",
      motivations: [
        'Service to Sugriva as a summoned commander of the vanara host.',
        'Partnership with his twin Mainda, beside whom he fights every battle.',
        'A front-rank fighter\'s willingness to take on opponents no ordinary vanara could face.',
      ],
      abilities: [
        'A boon from Brahma against death by ordinary means, shared with Mainda.',
        'A leaping range of sixty yojanas, stated when Jambavan polls the host on the southern shore.',
        'Great strength with uprooted trees and boulders in close combat.',
      ],
      accomplishments: [
        'Marched with the southern search party under Angada as far as the ocean.',
        'Attacked Kumbhakarna with Mainda when the giant entered the battle.',
        'Fought through the siege of Lanka and survived to be honoured by Rama.',
      ],
      weapons: ['Trees and boulders', 'Bare hands'],
      ending: {
        type: 'unknown',
        description:
          'Valmiki does not narrate his death; he survives the war among the honoured vanara leaders.',
      },
      trivia: [
        "Valmiki does not narrate Dvivida's later career as an enemy of Balarama; that story belongs to the Bhagavata Purana's Krishna cycle, not to the Ramayana.",
      ],
      wikiTitle: 'Dvivida',
    },
    {
      id: 'svayamprabha',
      name: 'Svayamprabha',
      sanskrit: 'स्वयंप्रभा',
      epithets: ['Guardian of the Riksha cave', "Hema's keeper", 'The self-luminous one'],
      faction: 'others',
      species: 'rishi',
      gender: 'female',
      kandas: ['kishkindha'],
      importance: 2,
      summary:
        "The ascetic who guarded Maya's enchanted underground palace and carried the trapped search party out of it by her own power.",
      bio:
        "Svayamprabha is the daughter of Merusavarni and the lifelong friend and guardian of Hema, an apsara for whom the asura architect Maya built a vast underground palace of gold. Maya had won Hema from Brahma; when Maya was killed by Indra for pursuing her, Brahma gave the cave to Hema, and Hema in turn left it in Svayamprabha's keeping while she went to perform austerities. Svayamprabha had lived in it alone, practising her own tapas, for an immense time.\n\nThe southern search party, maddened by thirst in the waterless Vindhyan country, saw water birds emerging wet from a cleft in the rock and went in. Holding hands in a chain so as not to be separated, Hanuman leading, they walked for a long distance in total darkness and came out into a lit country of golden trees, jewelled palaces, lakes, groves of flowering trees heavy with fruit, and tables of prepared food — the cave Maya built. They ate and drank, and only then realised they could not find the way out, and that the month Sugriva had allowed them had been consumed inside. Angada despaired; the party believed it had exchanged death by thirst for death by starvation and the king's anger.\n\nSvayamprabha, questioned, told them the history of the cave and then solved their problem without argument. She asked them to close their eyes, since no one who entered might leave alive by ordinary means, and by her ascetic power transported the entire party out and set them down near the southern ocean — within sight of the Vindhya and the Mahendra hills. She then returned to her cave. The episode is what puts the vanaras on the coast where Sampati finds them, and so it is one of the quiet hinges of the plot.",
      motivations: [
        'Keeping faith with Hema, whose cave she has guarded alone through an immense span of time.',
        'Her own austerities, which she had been practising undisturbed until the vanaras arrived.',
        'Hospitality to guests, extended even though no one who entered the cave was permitted to leave it alive.',
      ],
      abilities: [
        'Ascetic power sufficient to transport an entire army of vanaras out of an enchanted cave and across country in an instant.',
        'Self-luminosity, implied by her name, in a place that has no sun.',
        'Guardianship of a space built by the asura architect Maya, with its own laws of entry and exit.',
      ],
      accomplishments: [
        'Guarded Hema\'s golden cave alone for an age without leaving it.',
        'Fed and sheltered the whole southern search party, then carried them bodily out of a place from which there was no exit.',
        'Set them down on the southern shore, where Sampati found them and gave them Lanka.',
      ],
      ending: {
        type: 'retirement',
        description:
          'She returned to the cave and to her austerities after releasing the vanaras, and does not appear again in the epic.',
      },
      trivia: [
        'The cave is Maya\'s work — the same asura architect who built the palaces of Lanka — and the episode quietly links the vanaras\' ordeal to the rakshasa world they are about to invade.',
        'Valmiki does not narrate Svayamprabha granting boons or being liberated by Rama; she simply helps and withdraws, which is unusual in the epic\'s treatment of ascetics.',
      ],
      wikiTitle: 'Svayamprabha',
    },
    {
      id: 'shabari',
      name: 'Shabari',
      sanskrit: 'शबरी',
      epithets: ['Shramani', 'The ascetic of Pampa', "Matanga's disciple"],
      faction: 'sages',
      species: 'rishi',
      gender: 'female',
      kandas: ['aranya'],
      importance: 3,
      summary:
        "The aged ascetic of Matanga's hermitage by Lake Pampa, who waited a lifetime to receive Rama and entered the fire on seeing him.",
      bio:
        "Shabari was a shramani — a woman of austerities — attached to the hermitage of the sage Matanga near Lake Pampa, the last stop on Rama's road before he reaches Rishyamuka and the vanaras. Her teachers, Matanga and the other sages of that forest, had performed enormous austerities and, when their time came to ascend, told her to remain: Rama would come to that ashram, and she should wait and receive him. She stayed on after they had all gone, keeping the hermitage, for a span the text leaves vast and unmeasured.\n\nKabandha, released from his monstrous form, directs Rama and Lakshmana to her. She rises as they approach, touches their feet, and offers water for the feet and for rinsing the mouth, in due order. Rama's questions to her are precise and courteous and are the questions one ascetic asks another: has she overcome the obstacles to her practice, is her tapas increasing, are her anger and her diet under control, has her service to her teachers borne fruit. Her reply is the heart of the episode — today, she says, by seeing you my austerity has borne fruit; today my birth is fruitful and my teachers well honoured; today my penance is complete and heaven will be mine, now that you, best of gods and of men, have been worshipped by me.\n\nShe shows them the forest of Matanga, the lake, the trees still bearing fruit and flower from the power of the sages, and feeds them forest fruits and roots. Then, with Rama's leave, she gives up her body in fire and goes to the world won by her teachers. The passage is short, and in Valmiki is entirely about a lifetime of waiting discharged in a single meeting.",
      motivations: [
        "Obedience to the instruction of Matanga and the sages, who told her to wait for Rama and then depart.",
        'A long discipline of austerity carried on alone after everyone who taught her had gone.',
        'Hospitality — the formal duties of a host to guests, performed exactly, as her last act of service.',
      ],
      abilities: [
        'Accumulated tapas great enough that she could depart the body at will and ascend by fire.',
        'Custody of Matanga\'s forest, where the sages\' power kept the trees in perpetual fruit and flower.',
        'Knowledge of the whole Pampa region, which she shows to Rama before leaving.',
      ],
      accomplishments: [
        'Kept Matanga\'s hermitage alone for an age in obedience to her teachers\' word that Rama would come.',
        'Received and fed Rama and Lakshmana at the last human habitation before the vanara country.',
        'Showed Rama the Pampa and Matanga forest, immediately before his meeting with Hanuman and Sugriva.',
        'Entered the fire with Rama\'s leave and attained the world won by her teachers.',
      ],
      ending: {
        type: 'ascension',
        description:
          'With Rama\'s permission she gave up her body in fire and ascended to the world attained by Matanga and the sages who had taught her.',
      },
      shloka: {
        devanagari:
          'अद्य प्राप्ता तपःसिद्धिस्तव संदर्शनान्मया ।\nअद्य मे सफलं जन्म गुरवश्च सुपूजिताः ॥',
        transliteration:
          'adya prāptā tapaḥsiddhis tava saṃdarśanān mayā |\nadya me saphalaṃ janma guravaś ca supūjitāḥ ||',
        translation:
          'Today, by the sight of you, the fulfilment of my austerities has been attained by me; today my birth has borne fruit, and my teachers are well honoured.',
        ref: '3.74.11',
        context:
          'Shabari answers Rama, who has just asked whether her penance is prospering, at the hermitage of Matanga by Lake Pampa.',
      },
      trivia: [
        'Valmiki does not narrate Shabari tasting the berries before offering them to Rama; that beloved episode comes entirely from later retellings — in Valmiki she offers forest fruits and roots after the formal rites of hospitality, and nothing is said about tasting them.',
        'Valmiki does not describe Shabari as low-born or as rejected by other ascetics; the text calls her a shramani and a siddha, respected by the siddhas, and Rama addresses her as an accomplished practitioner.',
        'Her episode is the immediate prelude to the Kishkindha Kanda: she dies, and Rama walks on to Pampa and sees Hanuman approaching.',
      ],
      wikiTitle: 'Shabari',
    },
    {
      id: 'sampati',
      name: 'Sampati',
      sanskrit: 'सम्पाति',
      epithets: ['Elder brother of Jatayu', 'The wingless vulture', 'Son of Aruna'],
      faction: 'others',
      species: 'bird',
      gender: 'male',
      kandas: ['kishkindha'],
      importance: 3,
      summary:
        "Jatayu's elder brother, whose wings burned away shielding him from the sun, and whose far sight located Sita in Lanka when the search had failed.",
      bio:
        "Sampati and Jatayu were the sons of Aruna, Surya's charioteer, and brothers of extraordinary power in their youth. Long ago, after Indra had slain Vritra, the two of them flew upward in rivalry toward the blazing sun. As they rose, Jatayu began to fail in the heat. Sampati spread his own wings over his younger brother to shield him; the sun burned Sampati's wings away and he fell, scorched and crippled, on the Vindhya mountain, where he had lived ever since, wingless and unable to hunt.\n\nThe vanara search party arrived at the foot of that mountain after their escape from Svayamprabha's cave, their month expired, and resolved to fast to death. As they sat on the shore, they began to recount aloud the events of Rama's story and came to the death of Jatayu at Ravana's hands. Sampati, hearing his brother's name and his brother's death spoken, came down among them. He wept, and told them that he was old and wingless and could not avenge Jatayu, and then gave them the thing no one else on earth could give.\n\nFrom the Vindhya, by the far sight that vultures of his lineage possess, he could see Lanka — a hundred yojanas across the ocean, the city Vishvakarma built, with golden gateways and ramparts the colour of the sun — and in it, confined in Ravana's inner apartments, guarded by rakshasis, dressed in a single silk garment, Sita. He told them exactly where to go, assured them that by his knowledge he saw that they would succeed and return, and gave them the distance. His son Suparshva had also seen Ravana carrying her south and had told him of it. As he finished speaking, new wings began to grow from his sides — the sage Nishakara had long ago foretold that they would return when he had served Rama's cause — and he rose into the air and flew away.",
      motivations: [
        'Love for Jatayu, which cost him his wings in youth and brings him down the mountain when he hears of his death.',
        'A desire to do something for his brother\'s cause when he can no longer fight for it himself.',
        'Fulfilment of the sage Nishakara\'s prophecy that service to Rama\'s mission would restore him.',
      ],
      abilities: [
        'Vulture far sight capable of seeing a hundred yojanas across open ocean and distinguishing a single woman inside a guarded palace.',
        'Knowledge of the whole geography of the southern ocean and of the island of Lanka.',
        'In his youth, flight powerful enough to approach the sun itself.',
      ],
      accomplishments: [
        'Shielded Jatayu from the sun with his own wings and lost them in doing so.',
        'Located Sita in Ravana\'s inner apartments from the Vindhya mountain and told the vanaras the exact distance and direction.',
        'Stopped the southern search party from fasting to death and turned the entire campaign toward Lanka.',
        'Regained his wings as he finished speaking, in fulfilment of Nishakara\'s prophecy.',
      ],
      ending: {
        type: 'retirement',
        description:
          'His wings grew back the moment he had finished directing the vanaras to Lanka, and he flew away from the Vindhya; Valmiki does not follow him further.',
      },
      shloka: {
        devanagari:
          'यवीयान्मम स भ्राता जटायुर्नाम वानराः ।\nयमाख्यात हतं युद्धे रावणेन बलीयसा ॥',
        transliteration:
          'yavīyān mama sa bhrātā jaṭāyur nāma vānarāḥ |\nyam ākhyāta hataṃ yuddhe rāvaṇena balīyasā ||',
        translation:
          'He was my younger brother, O vanaras, Jatayu by name — of whom you have just spoken, slain in battle by the mighty Ravana.',
        ref: '4.58.2',
        context:
          "Sampati comes down the Vindhya on hearing the vanaras recite Jatayu's death, and claims him as his brother.",
      },
      trivia: [
        'It is the vanaras\' decision to fast to death, and their recital of Rama\'s story while waiting to die, that accidentally brings Sampati to them — the plot turns on a conversation overheard.',
        'Valmiki does not narrate Sampati being burned by flying too near the sun out of pride; in the text he is burned shielding Jatayu, and the detail matters for how the brothers are characterised.',
        'Sampati gives the vanaras the exact figure of a hundred yojanas, which is what forces the question of who can leap it and so produces the Sundara Kanda.',
      ],
      wikiTitle: 'Sampati',
    },
    {
      id: 'jatayu',
      name: 'Jatayu',
      sanskrit: 'जटायुस्',
      epithets: ['Son of Aruna', 'Friend of Dasharatha', 'Gridhraraja', 'The vulture king'],
      faction: 'others',
      species: 'bird',
      gender: 'male',
      kandas: ['aranya'],
      importance: 3,
      summary:
        "The aged vulture king and friend of Dasharatha, who fought Ravana's chariot to save Sita, had his wings cut off, and lived long enough to tell Rama where she had been taken.",
      bio:
        "Jatayu was a son of Aruna, the charioteer of the Sun, and the younger brother of Sampati. He was an old friend of Dasharatha, and when Rama, Sita and Lakshmana came into the Dandaka forest he introduced himself on that footing and offered to watch over Sita whenever the brothers were away — an offer Rama accepted gladly, embracing him as an elder kinsman. He lived in that part of the forest near Panchavati.\n\nWhen Ravana carried Sita into the sky and she cried out, it was Jatayu, perched on a tree, who woke and came. He first argued, telling Ravana that he was an old king of vultures bound by dharma, that abducting another's wife was a crime unworthy of a king of rakshasas, and that he would not permit it while he lived. Then he fought. Valmiki gives the battle at length: the vulture tears Ravana's bow apart, breaks his chariot, kills the mules that draw it and the driver, and gashes Ravana himself with beak and talons, so that for a time Ravana is on the ground with Sita in his arms. At last Ravana draws his sword and cuts off Jatayu's wings and feet, and the bird falls.\n\nRama and Lakshmana, returning to the empty hut and searching southward, found him bleeding on the ground and at first took him for a rakshasa who had eaten Sita. Jatayu told them the truth with the last of his breath: Sita had been carried off by Ravana, lord of the rakshasas, who had come wrapped in a storm-illusion; that Ravana had cut his wings while he was exhausted and gone south; that his own sight was failing and he could see golden trees; and that Ravana had taken her in the muhurta called Vinda, whose property is that what is lost in it is swiftly regained — and that Ravana, having seized Sita in that hour, had swallowed a hook like a fish. He named Ravana as the son of Vishrava and the brother of Kubera, and died. Rama cremated him with the rites due to a father and said that by his death he had attained the worlds won by those who perform sacrifice.",
      motivations: [
        'The friendship with Dasharatha, from which he derives a personal obligation to protect Dasharatha\'s son and daughter-in-law.',
        'A king\'s and an old being\'s sense of dharma, which he states to Ravana before fighting him.',
        'The determination to live long enough to deliver the one piece of information that matters.',
      ],
      abilities: [
        'Flight and combat power sufficient to destroy Ravana\'s chariot, bow, driver and mules single-handed in the air.',
        'Beak and talons that drew Ravana\'s own blood in close fighting.',
        'Knowledge of Ravana\'s lineage, direction of flight and the astrological hour of the abduction.',
      ],
      accomplishments: [
        'Was the only being in the forest who attacked Ravana in defence of Sita, and the only one who wounded him.',
        'Destroyed Ravana\'s chariot and killed his charioteer and mules in mid-air combat.',
        'Survived mutilation long enough to tell Rama who had taken Sita and in which direction, which is the information the entire southern campaign is built on.',
        'Received funeral rites from Rama\'s own hands, honoured as a father.',
      ],
      weapons: ['Beak and talons'],
      ending: {
        type: 'death',
        description:
          "Mortally wounded by Ravana, who cut off his wings and feet with a sword during the abduction of Sita; he died at Panchavati after telling Rama what he had seen, and Rama cremated him with the rites due to a father.",
        killedBy: 'ravana',
      },
      shloka: {
        devanagari:
          'परिक्लान्तस्य मे तात पक्षौ छित्त्वा निशाचरः ।\nसीतामादाय वैदेहीं प्रयातो दक्षिणामुखः ॥',
        transliteration:
          'pariklāntasya me tāta pakṣau chittvā niśācaraḥ |\nsītām ādāya vaidehīṃ prayāto dakṣiṇāmukhaḥ ||',
        translation:
          'Cutting off the wings of me, exhausted as I was, my dear, that night-ranger took Vaidehi Sita and went away facing south.',
        ref: '3.68.10',
        context:
          'The dying Jatayu tells Rama at Panchavati who took Sita and in which direction, the information that sets the whole search in motion.',
      },
      trivia: [
        'Valmiki does not narrate Jatayu waiting alive for days so that Rama could arrive; Rama finds him within the same search, and the vulture dies within the conversation.',
        "Jatayu's most precise gift is not the direction but the hour: he names the muhurta Vinda, in which what is stolen is quickly recovered, and tells Rama that Ravana has therefore swallowed a hook like a fish.",
        'Rama performs the cremation personally and calls Jatayu a father — a mark of honour given in the epic to very few.',
      ],
      wikiTitle: 'Jatayu',
    },
  ],

  relations: [
    // --- Hanuman ---
    { source: 'hanuman', target: 'rama', type: 'devotee', label: 'Devoted servant and messenger' },
    { source: 'hanuman', target: 'sugriva', type: 'servant', label: 'Chief minister of Kishkindha' },
    { source: 'hanuman', target: 'sugriva', type: 'counsel', label: 'Recalled him to his sworn oath' },
    { source: 'hanuman', target: 'sita', type: 'servant', label: 'Found her and carried her token' },
    { source: 'hanuman', target: 'lakshmana', type: 'rescued', label: 'Brought the herb-mountain that revived him' },
    { source: 'hanuman', target: 'ravana', type: 'enemy', label: "Burned his city and defied his court" },
    { source: 'hanuman', target: 'akshayakumara', type: 'killed', label: "Slew Ravana's son in the Ashoka grove" },
    { source: 'hanuman', target: 'simhika', type: 'killed', label: 'Killed the shadow-seizer over the ocean' },
    { source: 'hanuman', target: 'lankini', type: 'enemy', label: 'Struck down the guardian of Lanka' },
    { source: 'hanuman', target: 'surasa', type: 'enemy', label: 'Outwitted her by shrinking through her mouth' },
    { source: 'hanuman', target: 'angada', type: 'ally', label: 'Served under him in the southern search' },
    { source: 'hanuman', target: 'jambavan', type: 'ally', label: 'Roused to the leap by his recital' },
    { source: 'hanuman', target: 'tara', type: 'counsel', label: 'Consoled her and urged Angada\'s cause' },
    { source: 'hanuman', target: 'vibhishana', type: 'ally', label: 'Met him first on entering Lanka' },
    { source: 'hanuman', target: 'indrajit', type: 'enemy', label: "Submitted to his brahmastra by choice" },

    // --- Sugriva ---
    { source: 'sugriva', target: 'rama', type: 'ally', label: 'Sworn friend before the witnessing fire' },
    { source: 'sugriva', target: 'vali', type: 'sibling', label: 'Younger brother and rival' },
    { source: 'sugriva', target: 'vali', type: 'enemy', label: 'Exiled by him and robbed of his wife' },
    { source: 'sugriva', target: 'ruma', type: 'spouse', label: 'Husband; she was seized by Vali' },
    { source: 'sugriva', target: 'tara', type: 'spouse', label: "Took Vali's queen into his household" },
    { source: 'sugriva', target: 'angada', type: 'counsel', label: 'Made his nephew crown prince of Kishkindha' },
    { source: 'sugriva', target: 'hanuman', type: 'ally', label: 'Relied on him as minister and envoy' },
    { source: 'sugriva', target: 'kumbhakarna', type: 'enemy', label: 'Grappled him and bit off his ear and nose' },
    { source: 'sugriva', target: 'ravana', type: 'enemy', label: 'Led the vanara host against Lanka' },
    { source: 'sugriva', target: 'jambavan', type: 'ally', label: 'Commanded the bear king as senior ally' },
    { source: 'sugriva', target: 'nila', type: 'counsel', label: 'Appointed him commander-in-chief' },
    { source: 'sugriva', target: 'lakshmana', type: 'ally', label: 'Roused to war by his armed reproach' },

    // --- Vali ---
    { source: 'vali', target: 'sugriva', type: 'sibling', label: 'Elder brother' },
    { source: 'vali', target: 'sugriva', type: 'enemy', label: 'Drove him into exile on Rishyamuka' },
    { source: 'vali', target: 'tara', type: 'spouse', label: 'Chief queen of Kishkindha' },
    { source: 'vali', target: 'ruma', type: 'enemy', label: "Seized his brother's wife by force" },
    { source: 'vali', target: 'angada', type: 'parent', label: 'Father; commended him to Rama while dying' },
    { source: 'vali', target: 'dundubhi', type: 'killed', label: 'Killed the buffalo-asura at the gates' },
    { source: 'vali', target: 'mayavi', type: 'killed', label: "Slew Dundubhi's brother inside the earth-cave" },
    { source: 'vali', target: 'ravana', type: 'ally', label: 'Humbled him, then swore friendship over fire' },
    { source: 'vali', target: 'rama', type: 'enemy', label: 'Shot from concealment; rebuked him dying' },
    { source: 'vali', target: 'indra', type: 'devotee', label: 'Son of Indra, bearer of his golden chain' },

    // --- Tara ---
    { source: 'tara', target: 'vali', type: 'spouse', label: 'Queen; warned him against the second duel' },
    { source: 'tara', target: 'vali', type: 'counsel', label: 'Urged peace and alliance over the challenge' },
    { source: 'tara', target: 'angada', type: 'parent', label: 'Mother of the crown prince' },
    { source: 'tara', target: 'sushena', type: 'ally', label: "Daughter of the vanara physician" },
    { source: 'tara', target: 'lakshmana', type: 'counsel', label: 'Disarmed his fury at the gates of Kishkindha' },
    { source: 'tara', target: 'sugriva', type: 'spouse', label: 'Entered his household after Vali fell' },
    { source: 'tara', target: 'rama', type: 'enemy', label: 'Blamed him for killing a man not fighting him' },

    // --- Ruma ---
    { source: 'ruma', target: 'sugriva', type: 'spouse', label: 'Wife; restored to him on his coronation' },
    { source: 'ruma', target: 'vali', type: 'enemy', label: 'Taken into his household against her husband' },

    // --- Angada ---
    { source: 'angada', target: 'vali', type: 'parent', label: 'Son and heir of the slain king' },
    { source: 'angada', target: 'tara', type: 'parent', label: 'Son of the queen of Kishkindha' },
    { source: 'angada', target: 'sugriva', type: 'servant', label: 'Crown prince under his uncle' },
    { source: 'angada', target: 'rama', type: 'ally', label: "Ward of Rama by Vali's dying request" },
    { source: 'angada', target: 'hanuman', type: 'ally', label: 'Commanded him in the southern search' },
    { source: 'angada', target: 'ravana', type: 'enemy', label: 'Defied him as envoy in his own assembly' },
    { source: 'angada', target: 'narantaka', type: 'killed', label: "Killed Ravana's horse-riding son" },
    { source: 'angada', target: 'mahaparshva', type: 'killed', label: 'Slew the rakshasa commander in the siege' },
    { source: 'angada', target: 'jambavan', type: 'ally', label: 'Talked out of the fast-unto-death by him' },

    // --- Jambavan ---
    { source: 'jambavan', target: 'hanuman', type: 'counsel', label: "Recited his birth and broke the curse of forgetting" },
    { source: 'jambavan', target: 'sugriva', type: 'ally', label: 'Bear king allied to Kishkindha' },
    { source: 'jambavan', target: 'rama', type: 'ally', label: 'Senior counsellor of the campaign' },
    { source: 'jambavan', target: 'angada', type: 'counsel', label: 'Dissuaded him from the fast-unto-death' },
    { source: 'jambavan', target: 'lakshmana', type: 'rescued', label: 'Named the herbs that revived him' },
    { source: 'jambavan', target: 'indrajit', type: 'enemy', label: 'Wounded by him in the siege' },
    { source: 'jambavan', target: 'sushena', type: 'ally', label: 'Worked with the physician over the fallen princes' },

    // --- Nala ---
    { source: 'nala', target: 'rama', type: 'ally', label: 'Built the causeway that carried his army' },
    { source: 'nala', target: 'sugriva', type: 'servant', label: 'One of the four ministers on Rishyamuka' },
    { source: 'nala', target: 'samudra', type: 'ally', label: 'The ocean upheld whatever he set in it' },
    { source: 'nala', target: 'nila', type: 'ally', label: 'Fought beside him through the siege' },
    { source: 'nala', target: 'angada', type: 'servant', label: 'Marched under him in the southern search' },

    // --- Nila ---
    { source: 'nila', target: 'sugriva', type: 'servant', label: 'Commander-in-chief of the vanara host' },
    { source: 'nila', target: 'prahasta', type: 'killed', label: "Crushed Ravana's general with a boulder" },
    { source: 'nila', target: 'ravana', type: 'enemy', label: "Unharmed by his agneya astra as Agni's son" },
    { source: 'nila', target: 'agni', type: 'devotee', label: 'Son of the fire-god, proof against fire' },
    { source: 'nila', target: 'rama', type: 'ally', label: 'Held the eastern gate at the siege of Lanka' },

    // --- Sushena ---
    { source: 'sushena', target: 'tara', type: 'parent', label: 'Father of the queen of Kishkindha' },
    { source: 'sushena', target: 'lakshmana', type: 'rescued', label: 'Revived him with the Himalayan herbs' },
    { source: 'sushena', target: 'sugriva', type: 'counsel', label: 'Elder statesman and physician to the king' },
    { source: 'sushena', target: 'rama', type: 'ally', label: 'Tended him when Indrajit felled him' },

    // --- Kesari ---
    { source: 'kesari', target: 'hanuman', type: 'parent', label: "Earthly father; hence Kesarinandana" },
    { source: 'kesari', target: 'anjana', type: 'spouse', label: 'Married the cursed apsara Punjikasthala' },

    // --- Anjana ---
    { source: 'anjana', target: 'hanuman', type: 'parent', label: 'Mother; bore him in a mountain cave' },
    { source: 'anjana', target: 'kesari', type: 'spouse', label: 'Wife of the vanara lord of Malyavan' },
    { source: 'anjana', target: 'vayu', type: 'ally', label: 'Bore the Wind-god a son by his promise' },

    // --- Vayu ---
    { source: 'vayu', target: 'hanuman', type: 'parent', label: 'Divine father; source of his speed and strength' },
    { source: 'vayu', target: 'indra', type: 'enemy', label: "Withdrew the wind in rage at his thunderbolt" },
    { source: 'vayu', target: 'anjana', type: 'boon', label: 'Promised her a son equal to himself' },
    { source: 'vayu', target: 'brahma', type: 'ally', label: 'Placated by his boons to the injured child' },

    // --- Riksharaja ---
    { source: 'riksharaja', target: 'vali', type: 'parent', label: 'Father of the elder son, begotten by Indra' },
    { source: 'riksharaja', target: 'sugriva', type: 'parent', label: 'Father of the younger son, begotten by Surya' },
    { source: 'riksharaja', target: 'brahma', type: 'devotee', label: 'Received Kishkindha from him' },

    // --- Dadhimukha ---
    { source: 'dadhimukha', target: 'sugriva', type: 'servant', label: 'Keeper of the royal honey-grove' },
    { source: 'dadhimukha', target: 'angada', type: 'enemy', label: 'Beaten by him during the Madhuvana raid' },
    { source: 'dadhimukha', target: 'hanuman', type: 'enemy', label: 'Resisted the honey-raiders and was overwhelmed' },

    // --- Gandhamadana ---
    { source: 'gandhamadana', target: 'sugriva', type: 'servant', label: 'Troop-leader of the summoned host' },
    { source: 'gandhamadana', target: 'angada', type: 'servant', label: 'Served in the southern search party' },

    // --- Mainda ---
    { source: 'mainda', target: 'dvivida', type: 'sibling', label: 'Twin brother, inseparable in battle' },
    { source: 'mainda', target: 'sugriva', type: 'servant', label: 'Commander in the vanara confederation' },
    { source: 'mainda', target: 'kumbhakarna', type: 'enemy', label: 'Attacked him when he woke and took the field' },
    { source: 'mainda', target: 'brahma', type: 'devotee', label: 'Held his boon against ordinary death' },

    // --- Dvivida ---
    { source: 'dvivida', target: 'mainda', type: 'sibling', label: 'Twin brother, inseparable in battle' },
    { source: 'dvivida', target: 'sugriva', type: 'servant', label: 'Commander in the vanara confederation' },
    { source: 'dvivida', target: 'kumbhakarna', type: 'enemy', label: 'Rushed him with Mainda in the field' },
    { source: 'dvivida', target: 'angada', type: 'servant', label: 'Marched in the southern search party' },

    // --- Svayamprabha ---
    { source: 'svayamprabha', target: 'hanuman', type: 'rescued', label: 'Carried him out of the enchanted cave' },
    { source: 'svayamprabha', target: 'angada', type: 'rescued', label: 'Released the whole search party to the sea' },
    { source: 'svayamprabha', target: 'maya', type: 'ally', label: "Guardian of the golden cave he built" },

    // --- Shabari ---
    { source: 'shabari', target: 'rama', type: 'devotee', label: 'Waited an age to receive him at Pampa' },
    { source: 'shabari', target: 'matanga', type: 'devotee', label: 'Disciple who kept his hermitage after him' },
    { source: 'shabari', target: 'lakshmana', type: 'ally', label: 'Fed and guided him at Matanga\'s ashram' },

    // --- Sampati ---
    { source: 'sampati', target: 'jatayu', type: 'sibling', label: 'Elder brother who shielded him from the sun' },
    { source: 'sampati', target: 'angada', type: 'counsel', label: 'Told the despairing party where Sita was' },
    { source: 'sampati', target: 'hanuman', type: 'counsel', label: 'Gave the hundred-yojana distance to Lanka' },
    { source: 'sampati', target: 'ravana', type: 'enemy', label: "Betrayed his hiding place to Rama's searchers" },
    { source: 'sampati', target: 'sita', type: 'rescued', label: 'His far sight located her in the Ashoka grove' },

    // --- Jatayu ---
    { source: 'jatayu', target: 'sampati', type: 'sibling', label: 'Younger brother of the wingless vulture' },
    { source: 'jatayu', target: 'dasharatha', type: 'ally', label: 'Old friend of the king of Ayodhya' },
    { source: 'jatayu', target: 'sita', type: 'rescued', label: 'Fought Ravana in the air to save her' },
    { source: 'jatayu', target: 'ravana', type: 'enemy', label: 'Destroyed his chariot and wounded him' },
    { source: 'jatayu', target: 'rama', type: 'counsel', label: 'Named Ravana and the southern direction as he died' },
  ],

  events: [],
};
