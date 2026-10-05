import type { StoryEvent } from '../types';

/**
 * Timeline slice 1 of 3: Prehistory (-1000..-1), Bala Kanda (0..99), Ayodhya Kanda (100..199).
 * Everything below follows Valmiki. Where the familiar popular version differs, the
 * description says so in as many words rather than repeating the later retelling.
 */
export const earlyEvents: StoryEvent[] = [
  // ------------------------------------------------------------------
  // PREHISTORY  (-1000 .. -1)
  // ------------------------------------------------------------------
  {
    id: 'prehistory-amrita-churning',
    title: 'The Churning of the Milk Ocean',
    kanda: 'bala',
    sarga: '1.45',
    order: -1000,
    characterIds: ['vishnu', 'indra', 'samudra', 'shesha', 'lakshmi', 'varuna', 'vishwamitra'],
    location: 'The Ocean of Milk',
    description:
      'Vishwamitra, resting with the princes on the bank of the Ganga, tells how the sons of Diti and the sons of Aditi once agreed to churn the ocean for the elixir of deathlessness. They used Mount Mandara as the churning staff and Vasuki as the rope, and Valmiki says plainly that the serpent\'s agony tore away the rocks and trees of the mountain and that his breath scorched the asuras who held his head. Out of the water rose the physician Dhanvantari holding the pot, then the apsarases whom neither side would claim, then Varuni, then at last the amrita itself. The gods took it and in the war that followed Vishnu destroyed the asuras who tried to seize it.',
    significance:
      'Establishes the deva-asura enmity and the existence of boon-won deathlessness, the loophole Ravana will later exploit.',
    causes: [],
  },
  {
    id: 'prehistory-sagara-sons-ashes',
    title: "The Sixty Thousand Sons of Sagara Burned to Ash",
    kanda: 'bala',
    sarga: '1.38-40',
    order: -985,
    characterIds: ['sagara', 'indra', 'vishnu', 'bhumi', 'garuda', 'ikshvaku'],
    location: 'The earth excavated to the eastern ocean, and Kapila\'s hermitage in the netherworld',
    description:
      'Sagara of the Ikshvaku line performed a horse sacrifice, and Indra, unwilling to let him gain the merit of it, stole the horse and hid it beside the sage Kapila in the underworld. Sagara\'s sixty thousand sons dug the whole earth downward to find it, driving the creatures of the nether regions out before them, and found the horse grazing near the meditating sage. Taking Kapila for the thief, they rushed him with spades and ploughs, and the sage opened his eyes and reduced all sixty thousand to heaps of ash in an instant. Garuda, the brother of their mother Sumati, told the one surviving grandson Amshuman that these dead could never be given the water of the departed by ordinary means, but only by Ganga brought down from heaven.',
    significance:
      'Creates the unpayable debt that will draw the Ganga to earth and makes the river itself a character in the Ikshvaku story.',
    causes: [],
  },
  {
    id: 'prehistory-bhagiratha-ganga',
    title: 'Bhagiratha Brings the Ganga Down',
    kanda: 'bala',
    sarga: '1.42-44',
    order: -970,
    characterIds: ['bhagiratha', 'ganga', 'shiva', 'brahma', 'sagara', 'parvati'],
    location: 'Gokarna, the Himalaya, and the plain to the eastern sea',
    description:
      'Bhagiratha, great-grandson of Amshuman, left his kingdom without an heir and stood a thousand years in penance at Gokarna until Brahma granted that Ganga would descend. Because the falling river would have split the earth, Shiva agreed to receive her on his head, and when she came down arrogantly, meaning to sweep him into the netherworld, he held her wandering in the coils of his matted hair for years until Bhagiratha begged again and she was released in seven streams. She followed Bhagiratha\'s chariot across the plain, flooded the sacrificial ground of the sage Jahnu, who drank her and then let her out through his ear, and at last reached the ash heaps of Sagara\'s sons and gave them the water of release. For this she is called Bhagirathi and Jahnavi.',
    significance:
      'The ancestral act of persistence that defines the Ikshvaku line, and the story Vishwamitra uses to teach Rama what his own house is made of.',
    causes: ['prehistory-sagara-sons-ashes'],
  },
  {
    id: 'prehistory-ravana-austerity',
    title: "Ravana's Ten Thousand Years of Austerity",
    kanda: 'uttara',
    sarga: '7.10',
    order: -950,
    characterIds: ['ravana', 'brahma', 'kaikasi', 'sumali', 'vishrava', 'kumbhakarna', 'vibhishana'],
    location: 'Gokarna, on the western shore',
    description:
      'Goaded by his mother Kaikasi and his grandfather Sumali, who had been driven out of Lanka by Vishnu, the young Dashagriva took his brothers Kumbhakarna and Vibhishana to Gokarna and began a penance of ten thousand years. At the end of each thousand years he cut off one of his own heads and offered it into the fire, and when nine had gone and he lifted the sword for the tenth, Brahma appeared and stopped him. Valmiki is specific that the heads grew back as they were given. Vibhishana, performing the same austerity beside him, asked only for a mind that would never stray from dharma even in calamity.',
    significance:
      'Shows that Ravana\'s power is earned, not merely inherited, which is why Valmiki treats him as a formidable moral antagonist rather than a monster.',
    causes: [],
  },
  {
    id: 'prehistory-brahma-boon',
    title: "Brahma's Boon and the Gap Ravana Left Open",
    kanda: 'uttara',
    sarga: '7.10',
    order: -935,
    characterIds: ['ravana', 'brahma'],
    location: 'Gokarna',
    description:
      'Brahma restored the nine severed heads and asked Ravana to name his wish. Ravana asked that he never be slain by gandharvas, by yakshas, by rakshasas, by serpents, by the devas or the asuras, naming every order of being he thought worth fearing and omitting human beings and animals as beneath his notice. Brahma granted it exactly as asked and added the undecaying heads as a further gift. From that hour Ravana was effectively immune to the entire apparatus of heaven, and the devas were left with no answer to him except the one he had not thought of.',
    significance:
      'The single clause that makes the whole epic possible: Vishnu must be born as a man and must fight with the help of vanaras.',
    causes: ['prehistory-ravana-austerity'],
  },
  {
    id: 'prehistory-kumbhakarna-boon',
    title: "Kumbhakarna's Tongue Is Turned and He Asks for Sleep",
    kanda: 'uttara',
    sarga: '7.10',
    order: -920,
    characterIds: ['kumbhakarna', 'brahma', 'indra', 'ravana'],
    location: 'Gokarna',
    description:
      'The gods came to Brahma in terror before Kumbhakarna could speak, pointing out that he had already been eating sages and apsarases and that a boon in his hands would end the worlds. Brahma therefore had Saraswati seated on his tongue, so that when he opened his mouth to ask for the devouring of the worlds he instead asked for sleep for many years at a stretch. When Saraswati left him he understood what had been done and could not take it back. Ravana later negotiated the term down so that his brother slept six months and woke for a single day.',
    significance:
      'Neutralises the one rakshasa who might have been more dangerous than Ravana himself, and sets up the grotesque awakening scene in the war.',
    causes: ['prehistory-brahma-boon'],
  },
  {
    id: 'prehistory-lanka-seized',
    title: 'Kubera Driven from Lanka and the Pushpaka Taken',
    kanda: 'uttara',
    sarga: '7.11-15',
    order: -905,
    characterIds: ['ravana', 'kubera', 'vishrava', 'sumali', 'prahasta', 'malyavan', 'mandodari', 'maya'],
    location: 'Lanka, on Mount Trikuta',
    description:
      'Sumali urged that Lanka, built by Vishwakarma and now held by Ravana\'s half-brother Kubera, was rakshasa property by right. Ravana sent Prahasta with the demand, and Kubera, advised by their father Vishrava not to quarrel, abandoned the city and withdrew to Mount Kailasa. Ravana took the island, the throne and the flying chariot Pushpaka, which moved at the will of its rider. About this time Maya the asura architect gave him his daughter Mandodari in marriage, and Ravana\'s dominion over the three worlds began in earnest.',
    significance:
      'Gives Ravana the fortress and the aerial chariot that make the abduction of Sita and the defence of Lanka possible.',
    causes: ['prehistory-brahma-boon'],
  },
  {
    id: 'prehistory-kailasa-lifted',
    title: 'The Lifting of Kailasa and the Name Ravana',
    kanda: 'uttara',
    sarga: '7.16',
    order: -890,
    characterIds: ['ravana', 'shiva', 'parvati'],
    location: 'Mount Kailasa',
    description:
      'Flying the Pushpaka over Kailasa, Ravana found the chariot halted in the air and was told by Nandi that Shiva was sporting on the mountain and no one might pass. Insulted, he set his twenty arms under the mountain and heaved it until Parvati clung to her husband in alarm and the attendants scattered. Shiva pressed down with one toe and pinned Ravana\'s arms beneath the mass, and the rakshasa screamed so terribly that the worlds shook. He then sang to Shiva for a thousand years until he was released and given a sword and a new name: Ravana, the one who made the universe cry out.',
    significance:
      'Explains the king\'s name and his paradox, the devotee and the tyrant in one body, which Valmiki never resolves in his favour.',
    causes: ['prehistory-lanka-seized'],
  },
  {
    id: 'prehistory-vedavati-curse',
    title: 'Vedavati Enters the Fire and Vows to Return',
    kanda: 'uttara',
    sarga: '7.17',
    order: -875,
    characterIds: ['ravana', 'vishnu', 'sita'],
    location: 'A hermitage in the Himalaya',
    description:
      'Ravana found an ascetic woman named Vedavati practising penance in the forest, the daughter of a brahmin sage, who had been dedicated to Vishnu and refused every other suitor. He mocked her austerity and seized her by the hair; she cut off the defiled hair with her own hand, built a fire, and declared before entering it that she would be born again as a woman not from any womb, the daughter of a righteous man, and would be the cause of his destruction. Valmiki links her directly to Sita, who is found in a furrow and not born of a womb.',
    significance:
      'Establishes that Ravana\'s end was pronounced long before the abduction and that Sita is its appointed instrument.',
    causes: ['prehistory-kailasa-lifted'],
  },
  {
    id: 'prehistory-nalakubara-curse',
    title: 'The Curse That Protects Sita in the Ashoka Grove',
    kanda: 'uttara',
    sarga: '7.26',
    order: -860,
    characterIds: ['ravana', 'kubera', 'sita'],
    location: 'Mount Kailasa, in Kubera\'s grove',
    description:
      'Ravana intercepted the apsaras Rambha, who was going to meet Kubera\'s son Nalakubara and who named herself his daughter-in-law, and forced himself on her despite the kinship. Nalakubara poured water in his palm and pronounced the curse: if Ravana ever again went to a woman who did not desire him, his head would split into seven pieces. Valmiki says the gods in heaven cried out in relief when they heard it. It is this curse, and not any scruple, that keeps Ravana from laying hands on Sita through the long months in the ashoka grove.',
    significance:
      'The mechanism by which Sita survives captivity untouched, supplied by Valmiki as a plot device rather than as mere restraint on Ravana\'s part.',
    causes: ['prehistory-kailasa-lifted'],
  },
  {
    id: 'prehistory-ahalya-curse',
    title: "Indra's Deceit and Gautama's Curse on Ahalya",
    kanda: 'bala',
    sarga: '1.48',
    order: -840,
    characterIds: ['indra', 'ahalya', 'gautama'],
    location: "Gautama's hermitage near Mithila",
    description:
      'Indra, knowing Gautama absent, came to the hermitage in the sage\'s own form and asked Ahalya for union. Valmiki is unusually frank: she recognised the king of the gods under the disguise and consented out of curiosity about his favour, and afterwards told him to go quickly. Gautama met Indra leaving in his stolen shape, cursed him to lose his testicles, and cursed Ahalya to remain in that hermitage for thousands of years, invisible, living on air, lying in ashes and tormented by remorse, until Rama should come. He then left for the Himalaya. The gods later restored Indra with a ram\'s parts, which is why the ram became a sacrificial animal.',
    significance:
      'Plants a specific appointment with Rama in the landscape long before his birth, and shows Valmiki\'s moral world as one of consequence rather than melodrama.',
    causes: [],
  },
  {
    id: 'prehistory-vishwamitra-kamadhenu',
    title: 'Vishwamitra, Vasishtha and the Wish-Fulfilling Cow',
    kanda: 'bala',
    sarga: '1.51-55',
    order: -820,
    characterIds: ['vishwamitra', 'vasishtha', 'kamadhenu', 'shiva'],
    location: "Vasishtha's hermitage on the Sarasvati",
    description:
      'Vishwamitra was then a king of the Kusika line, and while hunting he was entertained with an impossible feast by Vasishtha\'s cow Shabala. He offered a hundred thousand cows, then his kingdom, for her, was refused, and tried to take her by force. Shabala, at Vasishtha\'s word, brought forth armies of Pahlavas, Shakas and Yavanas from her body and destroyed Vishwamitra\'s host, and when his hundred sons attacked Vasishtha the sage burned them with a single syllable. Vishwamitra fled, performed penance to Shiva for weapons, hurled them all at Vasishtha, and watched every one of them swallowed by the brahmin\'s staff.',
    significance:
      'The humiliation that converts a conquering king into the most driven ascetic in the epic, and the source of the astras he later hands to Rama.',
    causes: [],
  },
  {
    id: 'prehistory-vishwamitra-brahmarshi',
    title: 'Vishwamitra Becomes a Brahmarshi',
    kanda: 'bala',
    sarga: '1.62-65',
    order: -805,
    characterIds: ['vishwamitra', 'brahma', 'indra', 'menaka', 'vasishtha'],
    location: 'Pushkara, the southern region, and the northern mountains',
    description:
      'Vishwamitra abandoned his throne and practised austerity for a thousand years at a time, winning the title of rajarshi and then maharshi but never the one he wanted. Indra sent the apsaras Menaka, with whom he lived ten years and lost all his accumulated merit; he began again, was interrupted by Rambha, whom he cursed to stone and thereby lost his gains a second time, and finally practised with his breath held and his speech stopped for a thousand years more. When the ascetic heat from his body began to scorch the worlds the gods relented, and Brahma himself named him brahmarshi. Vasishtha came and embraced him, and the feud ended.',
    significance:
      'Makes Vishwamitra the one figure in the epic who crossed from kshatriya to brahmin by sheer will, which is why he can both command armies of mantras and demand a prince from a king.',
    causes: ['prehistory-vishwamitra-kamadhenu'],
  },
  {
    id: 'prehistory-hanuman-birth',
    title: 'The Birth of Hanuman to Anjana and Vayu',
    kanda: 'kishkindha',
    sarga: '4.66',
    order: -780,
    characterIds: ['hanuman', 'anjana', 'vayu', 'kesari', 'jambavan'],
    location: 'Mount Meru, in the Kesari household',
    description:
      'Jambavan recounts to the grieving Hanuman the thing he has forgotten about himself. Anjana, an apsaras born as a vanara woman and married to the vanara chief Kesari, was walking on a mountain peak in human-like form when Vayu, the wind, took her, promising her a son equal to himself in strength and intelligence who would be no transgression against her. The child was born in a cave and grew with extraordinary speed. Valmiki keeps the conception within the vanara world and gives Hanuman both a wind-god father and a living vanara father in Kesari.',
    significance:
      'Produces the one being whose speed, strength and discretion will decide the search for Sita.',
    causes: [],
  },
  {
    id: 'prehistory-hanuman-sun-leap',
    title: "The Infant Hanuman Leaps at the Sun and Is Struck by Indra",
    kanda: 'kishkindha',
    sarga: '4.66',
    order: -765,
    characterIds: ['hanuman', 'vayu', 'indra', 'surya', 'brahma', 'jambavan', 'anjana', 'agni', 'varuna', 'yama'],
    location: 'The sky above the eastern mountain',
    description:
      'Waking hungry in the cave and seeing the newly risen sun, the infant took it for a ripe fruit and sprang hundreds of yojanas into the air to seize it, the wind cooling his path and the sun withholding his heat out of regard for what the child would one day do. Indra struck him with the vajra and broke his left jaw, from which he takes the name Hanuman, and the child fell on a rock. Vayu then withdrew himself from all the worlds and refused to blow until his son was healed, and every god in turn gave the boy a boon: Brahma that no brahmastra would bind him for long, Indra that no weapon would kill him, Agni and Varuna and Yama that their elements would not touch him. Because he then tormented the sages at their rites, they laid on him the limitation that he would forget his own powers until someone reminded him of them.',
    significance:
      'Explains both Hanuman\'s near-invulnerability and the curse of forgetfulness that Jambavan must lift before the leap to Lanka.',
    causes: ['prehistory-hanuman-birth'],
  },
  {
    id: 'prehistory-dundubhi-slain',
    title: 'Vali Kills the Buffalo Demon Dundubhi',
    kanda: 'kishkindha',
    sarga: '4.11',
    order: -740,
    characterIds: ['vali', 'dundubhi', 'sugriva', 'matanga', 'rama', 'samudra'],
    location: 'The gate of Kishkindha and the Rishyamuka hill',
    description:
      'Sugriva tells Rama how the asura Dundubhi, in the shape of a mountainous buffalo, challenged the ocean and the Himalaya in turn and was sent on by each to Vali as the only being worth fighting. Vali dragged him out of the mouth of the cave at night, fought him for an hour, lifted him and dashed him to the ground until blood ran from every opening, then whirled the carcass and flung it a yojana away. Drops of the blood fell in the hermitage of the sage Matanga, who cursed Vali never to set foot on the Rishyamuka hill on pain of instant death. The dried skeleton still lay there like a hill when Rama kicked it ten bow-lengths with his toe to reassure Sugriva.',
    significance:
      'Fixes Rishyamuka as the one place on earth where Sugriva is safe from his brother, and so determines where Rama and Sugriva will meet.',
    causes: [],
  },
  {
    id: 'prehistory-mayavi-cave',
    title: 'Mayavi, the Sealed Cave, and the Breaking of the Brothers',
    kanda: 'kishkindha',
    sarga: '4.9-10',
    order: -725,
    characterIds: ['vali', 'sugriva', 'mayavi', 'ruma', 'angada', 'dundubhi'],
    location: 'The mouth of a cave near Kishkindha',
    description:
      'Mayavi, a son of Dundubhi, came by night to the gate of Kishkindha to avenge his father and roared a challenge. Vali ran out with Sugriva following, and the asura fled into a deep cave; Vali went in, told Sugriva to wait at the mouth, and did not come out. After a year Sugriva saw foaming blood flow from the opening, heard only the asura\'s voice inside, and concluded his brother was dead; he rolled a boulder over the mouth so the demon could not escape and returned to Kishkindha, where the ministers made him king because the throne could not stay empty. Vali, who had killed Mayavi, broke out, saw his brother crowned, and refused every explanation, driving Sugriva from the city, seizing his wife Ruma and hunting him across the earth.',
    significance:
      'The misunderstanding that creates the exiled Sugriva whom Rama will befriend, and the grievance for which Vali will be shot.',
    causes: ['prehistory-dundubhi-slain'],
  },
  {
    id: 'prehistory-dasharatha-shravana-curse',
    title: "Dasharatha's Arrow in the Dark and the Hermit's Curse",
    kanda: 'ayodhya',
    sarga: '2.63-64',
    order: -600,
    characterIds: ['dasharatha', 'kausalya'],
    location: 'The bank of the Sarayu',
    description:
      'As a young king proud of his skill at shooting by sound alone, Dasharatha lay in wait by the Sarayu on a dark night of the rains and loosed an arrow at what he took to be an elephant drinking. It was an ascetic boy filling a water jar for his old blind parents. Dying, the boy told him where they waited and asked only that the water be carried to them. Dasharatha confessed, and the blind father, after pouring the funeral offering for his son, pronounced that the king too would die of grief for a son, adding that because the killing had been unknowing it would not be instant. Both parents then gave up their lives beside the pyre.',
    significance:
      'The sentence that will be executed the moment Rama walks out of Ayodhya; Dasharatha remembers it only as he is dying.',
    causes: [],
  },

  // ------------------------------------------------------------------
  // BALA KANDA  (0 .. 99)
  // ------------------------------------------------------------------
  {
    id: 'bala-narada-recitation',
    title: 'Valmiki Asks Narada Who the Perfect Man Is',
    kanda: 'bala',
    sarga: '1.1',
    order: 0,
    characterIds: ['valmiki', 'narada', 'rama'],
    location: "Valmiki's hermitage on the Tamasa",
    description:
      'Valmiki, an ascetic devoted to recitation and penance, put a single question to the wandering sage Narada: is there living in the world today a man of virtue, valour, gratitude, truth and firm vow, one whom even the gods would fear in anger? Narada answered that such rare qualities were hard to find together but that there was such a man, Rama of the Ikshvakus, and then told the whole story in about a hundred verses, from the birth of the princes to the reign that would follow the war. This compressed telling is the seed of the epic and is known as the Samkshepa Ramayana. Narada went away into the sky and Valmiki sat with the story in him, not yet knowing how it was to be said.',
    significance:
      'The frame that makes the Ramayana a deliberate composition about a living man rather than an inherited legend.',
    shloka: {
      devanagari:
        'तपःस्वाध्यायनिरतं तपस्वी वाग्विदां वरम् ।\nनारदं परिपप्रच्छ वाल्मीकिर्मुनिपुंगवम् ॥',
      transliteration:
        'tapaḥsvādhyāyanirataṃ tapasvī vāgvidāṃ varam |\nnāradaṃ paripapraccha vālmīkirmunipuṅgavam ||',
      translation:
        'The ascetic Valmiki enquired of Narada, bull among sages, who was ever devoted to penance and to the study of scripture and was the best of those skilled in speech.',
      ref: '1.1.1',
      context: 'The opening verse of the Ramayana; Valmiki puts his question to Narada.',
    },
    causes: [],
  },
  {
    id: 'bala-krauncha-shloka',
    title: 'The Krauncha Bird, the First Shloka, and Brahma\'s Command',
    kanda: 'bala',
    sarga: '1.2',
    order: 5,
    characterIds: ['valmiki', 'brahma', 'rama'],
    location: 'The bank of the Tamasa, near the hermitage',
    description:
      'Going down to the Tamasa to bathe, Valmiki watched a pair of krauncha birds absorbed in each other when a hunter shot the male; the hen circled over the bleeding body crying. Grief came out of the sage\'s mouth already shaped into metre, four quarters of equal syllables, and he stood astonished at what he had said, naming it shloka because it was born of shoka, sorrow. Brahma then appeared in the hermitage and told him that the speech had come by his own will and that Valmiki was to compose the story of Rama in that measure, promising that nothing he set down in it would be untrue and that the poem would last as long as mountains and rivers stood on earth. Valmiki taught it to his pupils, and later to Kusha and Lava.',
    significance:
      'Valmiki\'s own account of why Sanskrit epic verse exists at all: the metre is invented by compassion for a killed bird.',
    shloka: {
      devanagari:
        'मा निषाद प्रतिष्ठां त्वमगमः शाश्वतीः समाः ।\nयत्क्रौञ्चमिथुनादेकमवधीः काममोहितम् ॥',
      transliteration:
        'mā niṣāda pratiṣṭhāṃ tvam agamaḥ śāśvatīḥ samāḥ |\nyat krauñcamithunād ekam avadhīḥ kāmamohitam ||',
      translation:
        'Hunter, may you never find rest through the endless years, for you killed one of this pair of krauncha birds while it was lost in love.',
      ref: '1.2.15',
      context: 'The first shloka ever uttered, spoken in grief and anger over the shot bird.',
    },
    causes: ['bala-narada-recitation'],
  },
  {
    id: 'bala-putrakameshti',
    title: 'Rishyasringa and the Sacrifice for Sons',
    kanda: 'bala',
    sarga: '1.8-15',
    order: 15,
    characterIds: ['dasharatha', 'rishyasringa', 'shanta', 'vasishtha', 'sumantra', 'kausalya', 'kaikeyi', 'sumitra', 'vishnu', 'brahma', 'indra'],
    location: 'Ayodhya and the northern bank of the Sarayu',
    description:
      'Dasharatha, old and sonless after sixty thousand years of rule, was advised by Sumantra to fetch Rishyasringa, the sage raised in the forest who had never seen a woman and who had once been drawn to Anga by courtesans sent by King Romapada, and who was now married to Dasharatha\'s own daughter Shanta. Rishyasringa conducted first the horse sacrifice and then the putrakameshti, the rite for obtaining sons. While it burned, the gods went to Brahma to complain that Ravana\'s boon had left them helpless, and Vishnu agreed to be born in four parts as the sons of Dasharatha. A being rose from the sacrificial fire holding a golden vessel of payasa, which Dasharatha divided among his queens: half to Kausalya, a quarter to Kaikeyi, and the remainder to Sumitra, which is why Sumitra bore two sons.',
    significance:
      'Links the gods\' problem with Ravana directly to the birth of the princes, making the whole epic a planned operation.',
    causes: ['prehistory-brahma-boon'],
  },
  {
    id: 'bala-four-princes-born',
    title: 'The Birth of Rama, Bharata, Lakshmana and Shatrughna',
    kanda: 'bala',
    sarga: '1.18',
    order: 25,
    characterIds: ['rama', 'bharata', 'lakshmana', 'shatrughna', 'dasharatha', 'kausalya', 'kaikeyi', 'sumitra', 'vasishtha'],
    location: 'Ayodhya',
    description:
      'In the twelfth month, on the ninth day of the bright fortnight of Chaitra, with five planets exalted and Jupiter with the moon in Cancer, Kausalya bore Rama. Kaikeyi bore Bharata under Pushya, and Sumitra bore the twins Lakshmana and Shatrughna under Ashlesha. Valmiki notes at once the bond that will organise the rest of the story: Lakshmana from his childhood would not eat or sleep unless Rama had eaten and slept, and Shatrughna attached himself in the same way to Bharata. Vasishtha performed the naming, the princes were taught the Vedas and the use of arms, and Rama grew into the favourite of the city.',
    significance:
      'Fixes the pairing of the brothers that determines who goes to the forest and who guards the kingdom.',
    causes: ['bala-putrakameshti'],
  },
  {
    id: 'bala-vanaras-born',
    title: "Brahma Orders the Gods to Father the Vanaras",
    kanda: 'bala',
    sarga: '1.17',
    order: 30,
    characterIds: ['brahma', 'indra', 'surya', 'vayu', 'vali', 'sugriva', 'hanuman', 'jambavan', 'nala', 'nila', 'riksharaja', 'agni', 'varuna', 'kubera', 'yama'],
    location: 'The forests and mountains of the earth',
    description:
      'Once Vishnu had agreed to be born as a man, Brahma reflected that the man would need an army, and directed the gods and gandharvas to beget sons on apsarases and on the daughters of yakshas, serpents and vanaras. Indra fathered Vali, Surya fathered Sugriva, Vayu fathered Hanuman, Brahma himself produced Jambavan, Vishwakarma produced Nala who could build in water, Agni produced Nila, and Varuna, Yama and Kubera each produced leaders. They were born able to change shape and size at will, strong as their fathers, and they lived scattered through the forests waiting without knowing for what. Valmiki counts them in tens of millions.',
    significance:
      'The vanara host is created in advance and for a purpose, which is why Rama\'s alliance in Kishkindha is a recovery of allies rather than a chance meeting.',
    causes: ['bala-putrakameshti', 'prehistory-brahma-boon'],
  },
  {
    id: 'bala-vishwamitra-arrives',
    title: 'Vishwamitra Demands Rama for the Protection of His Sacrifice',
    kanda: 'bala',
    sarga: '1.18-21',
    order: 35,
    characterIds: ['vishwamitra', 'dasharatha', 'rama', 'lakshmana', 'vasishtha', 'maricha', 'subahu'],
    location: "Dasharatha's court, Ayodhya",
    description:
      'Vishwamitra came to the court and asked for Rama, then sixteen, to guard a ten-night sacrifice from the rakshasas Maricha and Subahu, who were fouling the fire with flesh and blood at Siddhashrama. Dasharatha, who had promised the sage anything before hearing the request, broke down and offered to come himself with his whole army instead, calling his son a boy who had not yet seen battle. Vishwamitra blazed with anger and the earth shook, and Vasishtha took the king aside and told him flatly to keep his word, that Vishwamitra had weapons enough to destroy the rakshasas himself and wanted the boy for other reasons. Dasharatha gave up Rama, and Lakshmana went with him.',
    significance:
      'The first exercise of Rama\'s dharma over his father\'s love, and the hinge on which his whole education and marriage turn.',
    causes: ['bala-four-princes-born'],
  },
  {
    id: 'bala-bala-atibala',
    title: 'Bala and Atibala on the Bank of the Sarayu',
    kanda: 'bala',
    sarga: '1.22-23',
    order: 40,
    characterIds: ['vishwamitra', 'rama', 'lakshmana'],
    location: 'The southern bank of the Sarayu, a league and a half from Ayodhya',
    description:
      'At the first halt Vishwamitra gave the two brothers the sciences Bala and Atibala, by which they would never feel hunger, thirst or fatigue, would never be disfigured even in sleep, and would have no equal on earth in strength or in argument. Rama took them after touching water, and Valmiki says he shone like the autumn sun. They slept on a bed of leaves on the riverbank, the sons of a king lying on the ground, and Vishwamitra woke them at dawn with words that are still used to wake a sleeper in the morning. The journey then went on to the confluence of Sarayu and Ganga and into the Kamashrama wood.',
    significance:
      'The practical equipment for everything that follows, and the moment Rama passes from his father\'s household into a sage\'s discipline.',
    shloka: {
      devanagari:
        'कौसल्या सुप्रजा राम पूर्वा सन्ध्या प्रवर्तते ।\nउत्तिष्ठ नरशार्दूल कर्तव्यं दैवमाह्निकम् ॥',
      transliteration:
        'kausalyā suprajā rāma pūrvā sandhyā pravartate |\nuttiṣṭha naraśārdūla kartavyaṃ daivam āhnikam ||',
      translation:
        'Rama, Kausalya is blessed in such a son. The eastern twilight is coming on. Rise, tiger among men; the morning rites owed to the gods must be performed.',
      ref: '1.23.2',
      context: 'Vishwamitra wakes Rama and Lakshmana at dawn on the bank of the Sarayu.',
    },
    causes: ['bala-vishwamitra-arrives'],
  },
  {
    id: 'bala-tataka-slain',
    title: 'The Killing of Tataka',
    kanda: 'bala',
    sarga: '1.24-26',
    order: 45,
    characterIds: ['rama', 'tataka', 'vishwamitra', 'lakshmana', 'maricha', 'agastya'],
    location: 'The Tataka wood, between the Sarayu and the Ganga',
    description:
      'Vishwamitra explained the wasteland they were entering: Tataka, a yaksha woman given the strength of a thousand elephants, had been turned into a man-eater along with her son Maricha by Agastya\'s curse after her husband Sunda attacked the sage, and for a hundred and sixty miles the country was empty because of her. Rama hesitated to kill a woman, and Vishwamitra answered with precedents and with the blunt rule that a king must do what protects his people even when it is unpleasant, and that no sin attaches to killing one who destroys the innocent. Rama first cut off her hands and ears and nose, and when she went on hurling rocks and raining dust in a shower he killed her with an arrow to the chest. The gods and Indra praised him from the sky, and the wood became safe.',
    significance:
      'Rama\'s first killing and his first hard case in applied dharma, decided in favour of protection over propriety.',
    causes: ['bala-bala-atibala'],
  },
  {
    id: 'bala-astras-conferred',
    title: 'Vishwamitra Gives Rama the Celestial Weapons',
    kanda: 'bala',
    sarga: '1.27-28',
    order: 50,
    characterIds: ['rama', 'vishwamitra', 'lakshmana', 'shiva', 'brahma', 'vishnu', 'varuna', 'agni'],
    location: 'The bank of the Tataka wood',
    description:
      'Pleased with the killing, Vishwamitra handed over the arsenal he had won by his own austerities, naming the weapons one by one: the discus of dharma, the discus of time, the discus of Vishnu, the trident of Shiva, the brahmashira, the weapons of Agni and Varuna and Vayu, the nooses and the maces, the modaki and the shikhari, and the irresistible brahmastra. Each came to Rama in person, with folded hands, and said that they were his servants. He then gave him the counter-weapons by which each could be withdrawn, which is the part of the training that matters most, since an astra once loosed and not recalled destroys indiscriminately. Rama kept them in mind rather than in a quiver, to be summoned by syllable.',
    significance:
      'Arms Rama for everything from Khara\'s fourteen thousand to Ravana himself, and makes Vishwamitra the source of his power as much as his lineage is.',
    causes: ['bala-tataka-slain'],
  },
  {
    id: 'bala-siddhashrama-yajna',
    title: 'Subahu Killed and Maricha Flung into the Sea',
    kanda: 'bala',
    sarga: '1.29-30',
    order: 55,
    characterIds: ['rama', 'lakshmana', 'vishwamitra', 'subahu', 'maricha'],
    location: 'Siddhashrama, where Vishnu once performed penance',
    description:
      'At Siddhashrama Vishwamitra took the vow of silence and began the six-day rite while the brothers stood guard without sleeping. On the sixth day the sky darkened and Maricha and Subahu came with their followers, pouring blood and flesh over the altar. Rama loosed the manavastra at Maricha and threw him a hundred yojanas out into the ocean without killing him, then killed Subahu outright with the agneyastra and scattered the rest with the vayavya. The sacrifice was completed, and Valmiki is careful to mark that Maricha survived, humiliated and permanently afraid of Rama.',
    significance:
      'The mercy shown to Maricha is the hinge of the entire abduction: the terrified survivor becomes the golden deer thirteen years later.',
    causes: ['bala-astras-conferred'],
  },
  {
    id: 'bala-ganga-lineage-told',
    title: 'Vishwamitra Tells the Story of the Ganga and of His Own House',
    kanda: 'bala',
    sarga: '1.35-45, 1.51-65',
    order: 60,
    characterIds: ['vishwamitra', 'rama', 'lakshmana', 'ganga', 'bhagiratha', 'sagara', 'vasishtha', 'kamadhenu', 'menaka'],
    location: 'Visala and the bank of the Ganga, on the road to Mithila',
    description:
      'On the way to Mithila the party halted at the Ganga and at Visala, and over several nights Vishwamitra told Rama the history of the river: her birth as the elder daughter of Himavan, Shiva catching her fall, Sagara\'s sons burned to ash and Bhagiratha\'s thousand-year penance to redeem them. He also told, without concealing anything, his own story: the quarrel over Vasishtha\'s cow, the loss of his hundred sons, Menaka, the broken penances, and the title of brahmarshi that took him many thousand years. Rama listened as a descendant of Sagara and Bhagiratha hearing his own family history from a man who had been its enemy.',
    significance:
      'Valmiki uses the journey to Mithila to give Rama, and the audience, the deep past of both the Ikshvaku line and the sage who is forming him.',
    causes: ['prehistory-bhagiratha-ganga', 'prehistory-vishwamitra-brahmarshi', 'bala-siddhashrama-yajna'],
  },
  {
    id: 'bala-ahalya-released',
    title: 'Ahalya Released at Gautama\'s Hermitage',
    kanda: 'bala',
    sarga: '1.48-49',
    order: 65,
    characterIds: ['rama', 'ahalya', 'gautama', 'vishwamitra', 'lakshmana'],
    location: "Gautama's deserted hermitage on the outskirts of Mithila",
    description:
      'Vishwamitra led the brothers into an overgrown hermitage that still looked holy though no one lived in it, and told them whose it was and what had happened there. Ahalya had been invisible to all beings for the length of the curse, lying in ascetic practice; as Rama entered she became visible, shining with the heat of her long penance like the moon coming out of cloud. Rama and Lakshmana touched her feet, she received them with water and food as a guest, flowers fell from the sky, and Gautama returned and took her back. Valmiki does not narrate Ahalya being turned to stone and revived by the dust of Rama\'s foot; that stone comes from later retellings, principally the Puranic versions, and in Valmiki she is invisible rather than petrified.',
    significance:
      'The first time Rama\'s mere arrival ends a long-standing curse, establishing the redemptive dimension of his presence before any of his victories.',
    causes: ['prehistory-ahalya-curse', 'bala-ganga-lineage-told'],
  },
  {
    id: 'bala-mithila-arrival',
    title: 'Arrival at Mithila and the History of the Bow',
    kanda: 'bala',
    sarga: '1.50, 1.65-66',
    order: 70,
    characterIds: ['rama', 'lakshmana', 'vishwamitra', 'janaka', 'sita', 'shiva', 'kushadhwaja'],
    location: "Janaka's sacrificial enclosure, Mithila",
    description:
      'Janaka received Vishwamitra with his priest Shatananda and asked who the two youths with the bearing of lions were. Vishwamitra asked to see the bow, and Janaka told its history: it was Shiva\'s own bow, given to Janaka\'s ancestor Devarata after the destruction of Daksha\'s sacrifice, and it lay in an eight-wheeled iron chest that five thousand men dragged. He also told how Sita had come to him: ploughing the sacrificial ground he had turned up a girl in the furrow, had taken her as his daughter born of the earth, and had set as her bride-price the stringing of that bow, which every king and every army that tried had failed even to lift.',
    significance:
      'Introduces Sita on Valmiki\'s own terms, a child of the earth and not of a womb, and sets the test that only Rama will pass.',
    causes: ['bala-ahalya-released'],
  },
  {
    id: 'bala-shiva-bow-broken',
    title: "The Breaking of Shiva's Bow",
    kanda: 'bala',
    sarga: '1.67',
    order: 75,
    characterIds: ['rama', 'janaka', 'sita', 'vishwamitra', 'lakshmana', 'shiva'],
    location: "The assembly ground at Mithila",
    description:
      'The chest was dragged in and opened, and Rama asked permission simply to handle the bow. He lifted it as if it were nothing, bent it, strung it, and drew the string back toward his ear to test its tautness, and the bow snapped in the middle with a noise like a thunderclap and a shock that knocked the whole assembly down except Janaka, Vishwamitra and the two princes. Janaka declared that his vow was fulfilled and that Sita would be given, and sent messengers to Ayodhya at once to fetch Dasharatha. Valmiki gives no swayamvara garlanding scene and no competing suitors present in the hall: the bow is a bride-price condition announced beforehand, and Rama meets it.',
    significance:
      'Wins Sita, destroys Shiva\'s bow, and sets Parashurama on the road to intercept the wedding party.',
    shloka: {
      devanagari:
        'आरोपयित्वा मौर्वीं च पूरयामास वीर्यवान् ।\nतद्बभञ्ज धनुर्मध्ये नरश्रेष्ठो महायशाः ॥',
      transliteration:
        'āropayitvā maurvīṃ ca pūrayāmāsa vīryavān |\ntad babhañja dhanur madhye naraśreṣṭho mahāyaśāḥ ||',
      translation:
        'The strong one strung it with the bowstring and drew it to the full, and that most glorious best of men broke the bow in the middle.',
      ref: '1.67.17',
      context: "Rama strings and snaps Shiva's bow in Janaka's assembly.",
    },
    causes: ['bala-mithila-arrival'],
  },
  {
    id: 'bala-ikshvaku-genealogy',
    title: 'Vasishtha Recites the Line of Ikshvaku',
    kanda: 'bala',
    sarga: '1.70',
    order: 77,
    characterIds: ['vasishtha', 'janaka', 'dasharatha', 'ikshvaku', 'sagara', 'bhagiratha', 'raghu', 'aja', 'harishchandra', 'rama', 'kushadhwaja', 'brahma'],
    location: "Janaka's assembly hall at Mithila",
    description:
      'With Dasharatha arrived and the marriage to be settled, Vasishtha stood and recited the descent of the bridegrooms, as custom required before a royal alliance. He began from Brahma and came down through Marichi, Kashyapa, Vivasvan and Manu to Ikshvaku, the first king seated in Ayodhya, and so through Kukshi, Vikukshi, Anaranya, Prithu and Trishanku to Sagara, whose sixty thousand sons were burned to ash, to Amshuman and Dilipa and Bhagiratha who brought down the Ganga, and then through Kakutstha to Raghu, from whom the house takes the name Raghava, and at last to Aja, to Dasharatha, and to Rama and Lakshmana. Janaka answered with his own Videha line from Nimi and Mithi down to himself and his brother Kushadhwaja, and offered Sita and Urmila. Valmiki\'s list is not the Puranic one: Trishanku\'s son here is Dhundhumara, and the famously truthful Harishchandra, whom later tradition inserts in this dynasty, is not named in it at all.',
    significance:
      'Fixes Rama inside a named, countable dynasty — the ancestry that makes his father\'s word, and therefore the exile, a dynastic obligation rather than a private promise.',
    shloka: {
      devanagari:
        'मनुः प्रजापतिः पूर्वमिक्ष्वाकुश्च मनोः सुतः ।\nतमिक्ष्वाकुमयोध्यायां राजानं विद्धि पूर्वकम् ॥',
      transliteration:
        'manuḥ prajāpatiḥ pūrvam ikṣvākuś ca manoḥ sutaḥ |\ntam ikṣvākum ayodhyāyāṃ rājānaṃ viddhi pūrvakam ||',
      translation:
        'Manu was the first lord of creatures, and Ikshvaku was the son of Manu; know that Ikshvaku was the first king in Ayodhya.',
      ref: '1.70.21',
      context: 'Vasishtha, opening the recital of Rama\'s ancestry before Janaka, names the founder of the line.',
    },
    causes: ['bala-shiva-bow-broken'],
  },
  {
    id: 'bala-four-weddings',
    title: 'The Four Weddings at Mithila',
    kanda: 'bala',
    sarga: '1.68-73',
    order: 80,
    characterIds: ['rama', 'sita', 'lakshmana', 'urmila', 'bharata', 'mandavi', 'shatrughna', 'shrutakirti', 'janaka', 'kushadhwaja', 'dasharatha', 'vasishtha', 'vishwamitra', 'sunayana'],
    location: 'Mithila',
    description:
      'Dasharatha came with Vasishtha and his whole court, the two lineages were recited in full on both sides, and Janaka offered more than one bride. Rama was given Sita, Lakshmana was given Urmila, and at Vishwamitra\'s own suggestion the two daughters of Janaka\'s younger brother Kushadhwaja, Mandavi and Shrutakirti, were given to Bharata and Shatrughna. The four couples circled the fire together on a single day, the gods beat drums and flowers fell, and Janaka gave an enormous dowry of cattle, carpets, cloth and armed escorts. Vishwamitra, his work finished, took leave of everyone and went north to the Himalaya, and does not reappear in the story.',
    significance:
      'Binds Ayodhya and Mithila in one act and quietly creates Urmila, Mandavi and Shrutakirti, the three wives whose fourteen years of waiting Valmiki leaves almost unspoken.',
    causes: ['bala-shiva-bow-broken'],
  },
  {
    id: 'bala-parashurama-intercept',
    title: 'Parashurama Blocks the Road Home',
    kanda: 'bala',
    sarga: '1.74-76',
    order: 85,
    characterIds: ['parashurama', 'rama', 'dasharatha', 'lakshmana', 'vishnu', 'shiva', 'vasishtha'],
    location: 'The road from Mithila to Ayodhya',
    description:
      'As the wedding party travelled home, winds rose and birds fled and Parashurama appeared with matted hair, the axe on his shoulder and a bow in his hand, having heard that Shiva\'s bow was broken. He told Rama that there were two bows made by Vishwakarma, Shiva\'s and Vishnu\'s, that he held the second, and challenged him to string it as proof that the first feat was more than an accident. Dasharatha pleaded on his knees and was ignored. Rama took the Vaishnava bow, strung it without effort, fitted an arrow and asked where it should be discharged, since it could not be withdrawn unused; Parashurama, feeling his own energy drain out of him as he watched, offered the worlds he had won by penance as its target, and departed to Mount Mahendra.',
    significance:
      'A public transfer of power from the brahmin avatar of the previous age to the kshatriya avatar of this one, witnessed by the whole court.',
    causes: ['bala-shiva-bow-broken'],
  },
  {
    id: 'bala-return-and-bharata-departs',
    title: 'Return to Ayodhya and Bharata Taken to Kekaya',
    kanda: 'bala',
    sarga: '1.77',
    order: 90,
    characterIds: ['rama', 'sita', 'bharata', 'shatrughna', 'lakshmana', 'dasharatha', 'kausalya', 'kaikeyi', 'sumitra', 'urmila', 'mandavi', 'shrutakirti'],
    location: 'Ayodhya, and the road to the Kekaya country',
    description:
      'The party entered Ayodhya to a decorated city, and Valmiki describes twelve quiet years of married life in which Rama and Sita were, in his phrase, each the other\'s self, and in which Rama became the favourite of the people, the counsellor his father leaned on, and the brother Lakshmana shadowed. Then Yudhajit, Kaikeyi\'s brother, came from the Kekaya country to take his nephew Bharata on a visit to his grandfather, and Bharata went with Shatrughna following him as always. Dasharatha let them go. They were still away, hundreds of leagues off and knowing nothing, when the question of the succession was opened.',
    significance:
      'Removes Bharata and Shatrughna from the capital, which is the precondition for everything Manthara and Kaikeyi are about to accomplish.',
    causes: ['bala-four-weddings'],
  },

  // ------------------------------------------------------------------
  // AYODHYA KANDA  (100 .. 199)
  // ------------------------------------------------------------------
  {
    id: 'ayodhya-coronation-announced',
    title: "Dasharatha Announces Rama's Installation as Heir",
    kanda: 'ayodhya',
    sarga: '2.1-6',
    order: 100,
    characterIds: ['dasharatha', 'rama', 'vasishtha', 'sumantra', 'kausalya', 'lakshmana', 'sita'],
    location: 'The assembly hall of Ayodhya',
    description:
      'Feeling age on him and seeing his own reflection with white hair, Dasharatha called the assembly of chiefs, townsmen and country people and proposed that Rama be consecrated as yuvaraja the next morning, under the Pushya star. The hall answered with a roar of approval, and when the king, testing them, asked why they wanted Rama over himself, they recited his qualities in detail, that he was without anger, that he spoke first to whoever he met, that he knew every citizen\'s name. Vasishtha set the rites in motion, Rama and Sita were put under a night-long fast and vigil on a bed of kusha grass in the shrine of Vishnu, and the city was hung with banners. Dasharatha deliberately hurried the date, telling Vasishtha privately that his mind was troubled by omens.',
    significance:
      'The high point from which everything falls, arranged in a hurry and in the absence of the man whose mother will overturn it.',
    causes: ['bala-return-and-bharata-departs'],
  },
  {
    id: 'ayodhya-manthara-poisons-kaikeyi',
    title: 'Manthara Works on Kaikeyi',
    kanda: 'ayodhya',
    sarga: '2.7-9',
    order: 110,
    characterIds: ['manthara', 'kaikeyi', 'rama', 'bharata', 'kausalya'],
    location: "Kaikeyi's apartments",
    description:
      'Manthara, Kaikeyi\'s hunchbacked servant brought from the Kekaya country, climbed to the terrace, saw the decorated city, learned the reason, and went to her mistress in fury. Kaikeyi\'s first reaction was delight: she took off a necklace and gave it to Manthara as a reward for the good news, saying she made no difference between Rama and Bharata. Manthara then argued for three sargas, telling her she was a fool, that Kausalya would be the queen mother and she a servant of servants, that Bharata would be killed or exiled, that Rama\'s kindness was policy, and that the only safe prince is one on the throne. She reminded Kaikeyi of two boons owed her from an old battle, and told her exactly what to ask for and exactly how to ask.',
    significance:
      'Valmiki gives Kaikeyi a genuinely good first instinct and shows her corrupted step by step, which is why her fall is a tragedy and not a caricature.',
    causes: ['ayodhya-coronation-announced', 'bala-return-and-bharata-departs'],
  },
  {
    id: 'ayodhya-kaikeyi-anger-chamber',
    title: 'Kaikeyi in the Chamber of Wrath',
    kanda: 'ayodhya',
    sarga: '2.9-10',
    order: 115,
    characterIds: ['kaikeyi', 'manthara', 'dasharatha'],
    location: 'The krodhagara, the anger chamber of the palace',
    description:
      'Kaikeyi stripped off her ornaments, scattered her garlands and pearls on the floor, put on a single soiled cloth and lay down on the bare ground in the room kept for displays of royal displeasure. Dasharatha, coming at evening from the preparations and finding her favourite rooms empty, was told where she was and went in, and Valmiki is unsparing about the old king, who sat on the floor beside her and stroked her and spoke to a woman thirty years younger than himself with the helplessness of infatuation. He told her he would kill a man who deserved to live or spare a man who deserved to die at her word, and swore by Rama, his dearest, that whatever she asked would be done. Only then did she sit up.',
    significance:
      'The oath is sworn before the demand is heard, exactly as Dasharatha once did with Vishwamitra, and this time it destroys him.',
    causes: ['ayodhya-manthara-poisons-kaikeyi'],
  },
  {
    id: 'ayodhya-kaikeyi-two-boons',
    title: 'The Two Boons: Bharata Crowned, Rama Exiled Fourteen Years',
    kanda: 'ayodhya',
    sarga: '2.11-12',
    order: 120,
    characterIds: ['kaikeyi', 'dasharatha', 'rama', 'bharata', 'manthara'],
    location: 'The anger chamber, Ayodhya',
    description:
      'Kaikeyi called the gods to witness the oath and then named the old debt: in the war against Shambara, Dasharatha lay unconscious and she drove his chariot out of the battle and kept him alive, and he promised her two boons which she had never claimed. With the first she asked that Bharata be consecrated with the very water and implements already prepared, and with the second that Rama go to the Dandaka forest for fourteen years wearing bark and deerskin and matted hair as an ascetic. Dasharatha fainted, then raged, then begged, then offered her the whole earth, then lay on the floor until dawn calling for Rama, and she stood over him repeating that a king who breaks his word falls from heaven. She sent for Rama herself when the king could not speak.',
    significance:
      'The two sentences that break the succession, exile the heir, and kill the king, all of them technically lawful.',
    shloka: {
      devanagari:
        'नव पञ्च च वर्षाणि दण्डकारण्यमाश्रितः ।\nचीराजिनजटाधारी रामो भवतु तापसः ॥',
      transliteration:
        'nava pañca ca varṣāṇi daṇḍakāraṇyam āśritaḥ |\ncīrājinajaṭādhārī rāmo bhavatu tāpasaḥ ||',
      translation:
        'For nine years and five, let Rama live in the Dandaka forest and become an ascetic, wearing bark and deerskin and matted hair.',
      ref: '2.11.26',
      context: "Kaikeyi's second boon, demanded of Dasharatha in the anger chamber.",
    },
    causes: ['ayodhya-kaikeyi-anger-chamber'],
  },
  {
    id: 'ayodhya-rama-summoned',
    title: 'Rama Summoned and Told by Kaikeyi Herself',
    kanda: 'ayodhya',
    sarga: '2.16-18',
    order: 125,
    characterIds: ['rama', 'kaikeyi', 'dasharatha', 'sumantra', 'lakshmana'],
    location: "Kaikeyi's apartments",
    description:
      'Sumantra, sent twice, found Rama in the middle of the pre-coronation observances and brought him to his father, and Rama came expecting to be told that the rite was about to begin. He found Dasharatha on a couch with his face turned away, able to say only the word "Rama" and then nothing, and Kaikeyi standing beside him composed and ready. When Rama asked what offence of his had put his father in this state, Kaikeyi told him the whole thing in plain words, the boons, Bharata\'s consecration, the fourteen years, and added that the king was silent only because he could not bear to say it himself.',
    significance:
      'Valmiki stages the news so that Rama hears it from the beneficiary, not the victim, which makes his reply the more extraordinary.',
    causes: ['ayodhya-kaikeyi-two-boons'],
  },
  {
    id: 'ayodhya-rama-accepts',
    title: 'Rama Accepts the Exile Without a Second Word',
    kanda: 'ayodhya',
    sarga: '2.18-19',
    order: 130,
    characterIds: ['rama', 'kaikeyi', 'dasharatha', 'bharata', 'sumantra'],
    location: "Kaikeyi's apartments",
    description:
      'Rama answered that he had never cared for the kingdom, that he would have given it to Bharata for the asking without any of this machinery, and that he would go to the forest that very day; he asked only that messengers be sent to fetch Bharata from Kekaya. Valmiki notes that his face did not change colour, and that the one thing which did hurt him was that his father had not told him directly, since he would have obeyed a word as readily as a boon. Kaikeyi, satisfied, began pressing for immediate departure. Rama went to tell his mother.',
    significance:
      'The defining act of Rama\'s character in the epic: he treats his father\'s given word as binding on himself without argument or delay.',
    shloka: {
      devanagari:
        'तद्ब्रूहि वचनं देवि राज्ञो यदभिकाङ्क्षितम् ।\nकरिष्ये प्रतिजाने च रामो द्विर्नाभिभाषते ॥',
      transliteration:
        'tad brūhi vacanaṃ devi rājño yad abhikāṅkṣitam |\nkariṣye pratijāne ca rāmo dvir nābhibhāṣate ||',
      translation:
        'Tell me then, lady, what the king desires; I promise I shall do it, for Rama does not say a thing twice.',
      ref: '2.18.30',
      context: 'Rama answers Kaikeyi before he has heard what the boons are.',
    },
    causes: ['ayodhya-rama-summoned'],
  },
  {
    id: 'ayodhya-kausalya-lakshmana-grief',
    title: "Kausalya's Collapse and Lakshmana's Rage",
    kanda: 'ayodhya',
    sarga: '2.20-24',
    order: 135,
    characterIds: ['kausalya', 'rama', 'lakshmana', 'sumitra', 'kaikeyi'],
    location: "Kausalya's apartments",
    description:
      'Kausalya was at worship when Rama came to take leave, and when she understood she fell to the ground and said that seventeen years of neglect in her husband\'s house had been bearable only because of him. She tried to forbid the journey, arguing that a mother\'s claim equals a father\'s, and Rama refused her on the ground that he could not disobey. Lakshmana, shaking with anger, proposed openly to kill anyone who stood with Kaikeyi, to seize the kingdom by force, and said that a father senile with lust and ruled by a woman should not be obeyed. Rama talked him down, and Kausalya at last gave her blessing and performed the rites of protection over him; Sumitra told Lakshmana to go and to treat Rama as his father and Sita as his mother.',
    significance:
      'Sets out the alternative Rama refuses, armed rebellion with a willing army behind it, and so makes his obedience a choice rather than a necessity.',
    causes: ['ayodhya-rama-accepts'],
  },
  {
    id: 'ayodhya-sita-insists',
    title: 'Sita Insists on Going to the Forest',
    kanda: 'ayodhya',
    sarga: '2.26-30',
    order: 140,
    characterIds: ['sita', 'rama', 'kausalya', 'janaka'],
    location: "Rama's apartments",
    description:
      'Rama told Sita to stay, to serve Bharata without showing him any partiality for her absent husband, to attend on Kausalya and Sumitra and even on Kaikeyi, and described the forest in deliberately frightening detail, the thorns, the snakes, the hunger, the leeches, the nights. Sita answered with the longest and sharpest speech she makes in the epic: that a wife is half of her husband and goes where he goes, that her father Janaka would be ashamed to have given his daughter to a man who talks like an actor speaking a woman\'s part, that she had been told by brahmins and by her mother that she would live in a forest, and that if he left her she would drink poison or enter fire that very day. She also pointed out that she would be a protection and not a burden. He gave in and told her to give away her ornaments and wealth to brahmins.',
    significance:
      'Establishes that Sita\'s presence in the forest is her own decision, argued and won, which is what makes the later abduction a crime against her agency as much as against Rama.',
    shloka: {
      devanagari:
        'यस्त्वया सह स स्वर्गो निरयो यस्त्वया विना ।\nइति जानन् परां प्रीतिं गच्छ राम मया सह ॥',
      transliteration:
        'yas tvayā saha sa svargo nirayo yas tvayā vinā |\niti jānan parāṃ prītiṃ gaccha rāma mayā saha ||',
      translation:
        'Whatever place is with you is heaven; whatever place is without you is hell. Knowing this, and knowing my great love, go, Rama, with me.',
      ref: '2.30.18',
      context: 'Sita, arguing down every objection, refuses to be left behind in Ayodhya.',
    },
    causes: ['ayodhya-rama-accepts'],
  },
  {
    id: 'ayodhya-lakshmana-insists',
    title: 'Lakshmana Refuses to Be Left Behind',
    kanda: 'ayodhya',
    sarga: '2.31',
    order: 145,
    characterIds: ['lakshmana', 'rama', 'sita', 'sumitra', 'urmila'],
    location: 'Ayodhya',
    description:
      'Lakshmana clasped Rama\'s feet and told him that if he must go to a forest full of beasts he would go in front of him with the bow, clearing the path, carrying the spade and the basket, finding roots and fruit, standing watch while Rama and Sita slept. Rama tried to send him back on the ground that Kausalya and Sumitra would need a protector in a court now controlled by Kaikeyi, and Lakshmana answered that Bharata would never dare harm them and that his own place was settled. He then went to Vasishtha\'s son to fetch the weapons that had been kept there, garlanded and reverenced, and the three of them went to take formal leave of Dasharatha. Urmila, his wife of twelve years, is given no scene at all by Valmiki.',
    significance:
      'Completes the party of three and defines Lakshmana\'s role for the next fourteen years as sentry, servant and executioner of Rama\'s decisions.',
    shloka: {
      devanagari:
        'धनुरादाय सशरं खनित्रपिटकाधरः ।\nअग्रतस्ते गमिष्यामि पन्थानमनुदर्शयन् ॥',
      transliteration:
        'dhanur ādāya saśaraṃ khanitrapiṭakādharaḥ |\nagratas te gamiṣyāmi panthānam anudarśayan ||',
      translation:
        'Taking up my bow and arrows, carrying the spade and the basket, I shall walk ahead of you, showing you the path.',
      ref: '2.31.23',
      context: 'Lakshmana answers Rama\'s order to stay behind in Ayodhya.',
    },
    causes: ['ayodhya-rama-accepts'],
  },
  {
    id: 'ayodhya-bark-garments',
    title: 'The Bark Garments and the Last Audience',
    kanda: 'ayodhya',
    sarga: '2.37-39',
    order: 150,
    characterIds: ['kaikeyi', 'rama', 'sita', 'lakshmana', 'dasharatha', 'vasishtha', 'kausalya', 'sumantra'],
    location: 'The audience hall, Ayodhya',
    description:
      'Kaikeyi herself brought out bark garments for all three and handed them over in the open hall. Rama and Lakshmana put theirs on at once over their silks; Sita, who had never seen such cloth, stood holding it and could not work out how it was fastened, and wept, until Rama tied it over her silk himself. Vasishtha rounded on Kaikeyi in front of the court, told her that Sita was not covered by any boon and would travel in state, and that if Rama went to the forest the whole city would follow and leave her to rule over an empty place. Dasharatha, half conscious, ordered the treasury and the army to go with his son, forbade their departure that day, and was overruled by Rama, who asked instead for a chariot.',
    significance:
      'Marks the moment the exile becomes visible and public, and the court\'s revulsion from Kaikeyi becomes open.',
    causes: ['ayodhya-sita-insists', 'ayodhya-lakshmana-insists'],
  },
  {
    id: 'ayodhya-departure-and-citizens',
    title: 'The Departure and the City That Followed',
    kanda: 'ayodhya',
    sarga: '2.40-45',
    order: 155,
    characterIds: ['rama', 'sita', 'lakshmana', 'sumantra', 'dasharatha', 'kausalya', 'kaikeyi'],
    location: 'The streets of Ayodhya and the royal road south',
    description:
      'Sumantra drove the chariot and the people of Ayodhya ran after it, old men and brahmins among them, calling to the horses to stop, and Dasharatha followed on foot until he fell. Rama told Sumantra to drive faster and, when reproached for disobedience, said he would later claim he had not heard. The crowd of citizens who would not turn back followed them all the way out of the city and camped with them that night on the bank of the Tamasa, and the elders of the brahmins pleaded with Rama to come home. Valmiki says the horses themselves wept, and the dust raised by the chariot hung in the air after it was out of sight.',
    significance:
      'Shows the political fact Kaikeyi had not reckoned with, that the kingdom she had won for her son had already given itself to Rama.',
    causes: ['ayodhya-bark-garments'],
  },
  {
    id: 'ayodhya-tamasa-slip-away',
    title: 'Slipping Away from the Camp on the Tamasa',
    kanda: 'ayodhya',
    sarga: '2.46',
    order: 160,
    characterIds: ['rama', 'sita', 'lakshmana', 'sumantra'],
    location: 'The bank of the Tamasa river',
    description:
      'Rama fasted that night on water alone and slept on the ground, and woke Lakshmana before dawn with the observation that the citizens were sleeping soundly, exhausted, and that the only kindness left was to be gone before they woke. Sumantra was told to drive north first and then double back so the wheel tracks would mislead anyone following. The citizens woke at sunrise to an empty camp and ruts running in the wrong direction, and went back to Ayodhya blaming themselves for sleeping. The chariot by then was well beyond the Vedashruti and heading for the Gomati and the Syandika.',
    significance:
      'Rama\'s first act of deliberate concealment, undertaken to spare others rather than himself.',
    causes: ['ayodhya-departure-and-citizens'],
  },
  {
    id: 'ayodhya-guha-shringaverapura',
    title: 'Guha the Nishada at Shringaverapura',
    kanda: 'ayodhya',
    sarga: '2.50-52',
    order: 165,
    characterIds: ['guha', 'rama', 'lakshmana', 'sita', 'sumantra', 'bharata'],
    location: 'Shringaverapura, on the southern bank of the Ganga',
    description:
      'Guha, king of the Nishadas and Rama\'s friend, came out with his kinsmen and offered food, drink and lodging, and was told that Rama under vow could accept only grass and water and fodder for the horses. That night Guha sat awake with his bow while Lakshmana kept watch, and heard Lakshmana speak of the king and queens and of what would become of Ayodhya; Valmiki gives the two of them a long, plain conversation between a prince and a forest chief that assumes no distance at all. In the morning Rama and Lakshmana matted their hair with the milk of the banyan, Guha ferried them across in a boat, and Sumantra was sent back with the empty chariot, weeping and protesting. Guha later guides Bharata by the same crossing.',
    significance:
      'Establishes the first of the forest alliances on which the whole second half of the epic depends, and ends the chariot, the escort and the last trace of royalty.',
    causes: ['ayodhya-tamasa-slip-away'],
  },
  {
    id: 'ayodhya-bharadwaja-prayaga',
    title: 'Bharadwaja at the Confluence Sends Them to Chitrakuta',
    kanda: 'ayodhya',
    sarga: '2.54-55',
    order: 175,
    characterIds: ['bharadwaja', 'rama', 'sita', 'lakshmana', 'valmiki'],
    location: 'The confluence of the Ganga and Yamuna at Prayaga',
    description:
      'They walked to Prayaga at sunset and found Bharadwaja at his evening fire. He offered them the hermitage itself for the whole fourteen years, and Rama declined on the practical ground that it was too close to Ayodhya and the people would keep coming. Bharadwaja then named the place: Chitrakuta, ten leagues off, a hill of cuckoos and peacocks and flowering trees where sages lived long lives, and described the route across the Yamuna. They spent the night, crossed the Yamuna in the morning on a raft of wood and bamboo that Lakshmana built, and Sita prayed to the river for safe return. On the far bank they passed the hermitage of Valmiki himself.',
    significance:
      'A sage of the first rank chooses their destination, which is why Chitrakuta is both idyllic and findable by Bharata.',
    causes: ['ayodhya-guha-shringaverapura'],
  },
  {
    id: 'ayodhya-chitrakuta-hut',
    title: 'The Leaf Hut at Chitrakuta',
    kanda: 'ayodhya',
    sarga: '2.56',
    order: 178,
    characterIds: ['rama', 'sita', 'lakshmana', 'bharadwaja'],
    location: 'Chitrakuta hill, near the Mandakini',
    description:
      'Rama chose a level spot near the Mandakini with water and flowering trees, and Lakshmana built a hut of wood and leaves with mud walls and a thatched roof, which Rama praised and consecrated with the sacrifice of a black antelope and the appropriate rites for entering a new dwelling. The sage Valmiki, who lives nearby, is named among those they meet. For the first and only extended period the three of them live as something like a family at peace, and Valmiki fills several sargas with the hill, the birds and the river rather than with incident. Rama remarks that with Sita and Lakshmana beside him he does not miss Ayodhya or grieve for the kingdom.',
    significance:
      'Gives the exile a settled home and the epic its one stretch of unthreatened happiness before the Dandaka forest.',
    causes: ['ayodhya-bharadwaja-prayaga'],
  },
  {
    id: 'ayodhya-shravana-confession',
    title: 'Sumantra Returns and Dasharatha Remembers the Curse',
    kanda: 'ayodhya',
    sarga: '2.57-64',
    order: 186,
    characterIds: ['sumantra', 'dasharatha', 'kausalya', 'kaikeyi', 'rama'],
    location: 'The palace, Ayodhya',
    description:
      'Sumantra came back alone with the empty chariot and the horses that would not eat, and reported Rama\'s messages and Sita\'s silence. Kausalya reproached her husband openly before the court. On the sixth night Dasharatha, unable to sleep, told Kausalya at last the thing he had never told anyone, how as a young man he had shot an ascetic boy by sound at the Sarayu and been cursed by the blind parents to die of grief for a son, and he said that the curse had come due and that this was why he could not survive the exile. He asked her to touch him because he could no longer see, called out three times for Rama, and asked why Rama did not speak to him.',
    significance:
      'Closes the oldest loop in the story and shows that Dasharatha\'s destruction was prepared by his own act long before Kaikeyi existed.',
    causes: ['prehistory-dasharatha-shravana-curse', 'ayodhya-departure-and-citizens', 'ayodhya-guha-shringaverapura'],
  },
  {
    id: 'ayodhya-dasharatha-dies',
    title: 'The Death of Dasharatha',
    kanda: 'ayodhya',
    sarga: '2.64-66',
    order: 189,
    characterIds: ['dasharatha', 'kausalya', 'sumitra', 'kaikeyi', 'vasishtha', 'rama', 'bharata', 'sumantra'],
    location: 'The palace, Ayodhya',
    description:
      'Dasharatha died in the night in the sixth watch, speaking Rama\'s name, and the women found him in the morning. Kausalya lay across his body and had to be lifted off, and Kaikeyi was told to her face by the court that she had killed him. Because no heir was present the body was placed in a vessel of oil to preserve it, the city went without fire or cooking, and Vasishtha took charge, ruling that a kingdom without a king is a place where rain does not fall and no one is safe, and sending swift messengers to Kekaya with orders not to tell Bharata why he was wanted.',
    significance:
      'Removes the one authority who could have reversed the boons, and makes the succession crisis Bharata\'s to solve.',
    causes: ['ayodhya-shravana-confession'],
  },
  {
    id: 'ayodhya-bharata-recalled-refuses',
    title: 'Bharata Returns and Refuses the Throne',
    kanda: 'ayodhya',
    sarga: '2.68-79',
    order: 192,
    characterIds: ['bharata', 'kaikeyi', 'shatrughna', 'manthara', 'vasishtha', 'kausalya', 'sumantra', 'rama'],
    location: 'Ayodhya',
    description:
      'Bharata rode seven days from Rajagriha through a city that was silent and shut, found his father\'s house without fire or garlands, and learned the whole thing from his mother, who told it as a triumph and expected thanks. He answered that she had killed his father and ruined his brother, that he had wanted none of it, and that he would not accept a kingdom bought that way, and he disowned her in terms Valmiki does not soften. Shatrughna caught Manthara and dragged her by the hair across the floor until Bharata stopped him, saying that Rama would not forgive the killing of a woman. Bharata performed the funeral rites, refused the consecration offered him by Vasishtha and the assembly, and declared he would go to the forest and bring Rama back.',
    significance:
      'Clears Bharata of any complicity and converts the crisis from a usurpation into a contest of self-denial between two brothers.',
    causes: ['ayodhya-dasharatha-dies', 'ayodhya-manthara-poisons-kaikeyi'],
  },
  {
    id: 'ayodhya-bharata-to-chitrakuta',
    title: 'The Meeting at Chitrakuta and the Argument over Dharma',
    kanda: 'ayodhya',
    sarga: '2.83-109',
    order: 195,
    characterIds: ['bharata', 'rama', 'lakshmana', 'sita', 'shatrughna', 'guha', 'bharadwaja', 'vasishtha', 'kausalya', 'kaikeyi', 'sumitra', 'sumantra'],
    location: 'The road through Shringaverapura and Prayaga, and Chitrakuta',
    description:
      'Bharata marched with the army, the three queens, the ministers and the whole city behind him; Guha ferried them, Bharadwaja entertained the entire host by miraculous means and confirmed the route. Lakshmana, seeing the dust and banners from the hill, assumed an attack and had to be restrained by Rama. Bharata fell at his brother\'s feet, and when Rama learned of his father\'s death he fainted and then performed the water offering with ingudi paste and jujube fruit, the food of exiles. For many sargas they argued, Bharata urging that the boons were obtained by fraud and that a father\'s unjust command need not bind a son, Vasishtha and the sage Jabali joining in, Jabali even arguing the materialist case that there is no afterlife and no debt to the dead; Rama answered each of them and refused to return before the fourteen years were out.',
    significance:
      'The epic\'s longest sustained debate on duty, in which Rama\'s position is tested by his own teachers and holds.',
    causes: ['ayodhya-bharata-recalled-refuses', 'ayodhya-chitrakuta-hut'],
  },
  {
    id: 'ayodhya-paduka-nandigrama',
    title: 'The Sandals Taken to Nandigrama',
    kanda: 'ayodhya',
    sarga: '2.112-115',
    order: 198,
    characterIds: ['bharata', 'rama', 'shatrughna', 'lakshmana', 'sita', 'vasishtha', 'kaikeyi', 'kausalya'],
    location: 'Chitrakuta and Nandigrama, outside Ayodhya',
    description:
      'Defeated in argument, Bharata asked for Rama\'s sandals; Rama stepped into them and gave them over, and Bharata set them on his head and declared that he would install them on the throne, rule as their servant, live outside the city on roots and fruit in bark and matted hair as an ascetic himself, and that if Rama did not return on the day the fourteenth year ended he would enter fire. He carried the sandals back, placed them under the white umbrella with the fans waved over them, refused to live in Ayodhya, and governed from Nandigrama, bringing every decision to the sandals for approval. Rama, finding Chitrakuta too crowded with visitors and grief after this, soon moved south into the Dandaka forest toward Atri and Anasuya and then Sharabhanga, which begins the Aranya portion of the story.',
    significance:
      'Settles the succession for fourteen years and makes Bharata the moral equal of Rama in the epic\'s own judgement.',
    shloka: {
      devanagari:
        'सोऽधिरुह्य नरव्याघ्रः पादुके ह्यवरुह्य च ।\nप्रायच्छत्सुमहातेजा भरताय महात्मने ॥',
      transliteration:
        "so 'dhiruhya naravyāghraḥ pāduke hy avaruhya ca |\nprāyacchat sumahātejā bharatāya mahātmane ||",
      translation:
        'That tiger among men, of great splendour, stepped into the sandals and then stepped down from them, and gave them to the noble-souled Bharata.',
      ref: '2.112.22',
      context: 'Rama hands over his sandals as the token of sovereignty at Chitrakuta.',
    },
    causes: ['ayodhya-bharata-to-chitrakuta'],
  },
  {
    id: 'ayodhya-rama-leaves-chitrakuta',
    title: 'Rama Abandons Chitrakuta for the Deep Forest',
    kanda: 'ayodhya',
    sarga: '2.116-119',
    order: 199,
    characterIds: ['rama', 'sita', 'lakshmana', 'atri', 'anasuya', 'bharata'],
    location: 'Chitrakuta, and the ashram of Atri on its southern edge',
    description:
      'After Bharata left with the sandals, Chitrakuta turned sour for Rama. The ascetics of the hill came to him in a body and told him that Khara\'s rakshasas from Janasthana were harrying their rites, and the place itself had become thick with the memory of his father\'s death and his brother\'s grief. Rama decided to leave the mountain altogether and move south into Dandaka, where no one would find him and where the hermitages most needed guarding. On the way the three stopped at the ashram of the sage Atri, where the aged Anasuya received Sita with great affection.',
    significance:
      'Closes the Ayodhya Kanda and opens the forest years: from here the exile stops being a family quarrel and becomes a war with the rakshasas.',
    causes: ['ayodhya-paduka-nandigrama', 'ayodhya-bharata-to-chitrakuta'],
  },
];
