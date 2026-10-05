import type { StoryEvent } from '../types';

/**
 * EVENT TIMELINE — Aranya, Kishkindha and Sundara Kandas (order 200..499).
 *
 * Grounded in Valmiki. Where popular retellings diverge (the Lakshmana Rekha,
 * Shabari tasting the berries before offering them, Hanuman carrying the whole
 * Dronagiri), the divergence is stated inside the relevant description rather
 * than narrated as if it were Valmiki.
 *
 * Cross-part cause ids referenced here and expected from the Ayodhya slice:
 *   'ayodhya-rama-leaves-chitrakuta'
 */
export const middleEvents: StoryEvent[] = [
  // ------------------------------------------------------------------
  // ARANYA KANDA — 202..282
  // ------------------------------------------------------------------
  {
    id: 'aranya-viradha-slain',
    title: 'Viradha Seizes Sita and Is Buried Alive',
    kanda: 'aranya',
    sarga: '3.2-4',
    order: 202,
    characterIds: ['rama', 'lakshmana', 'sita', 'viradha'],
    location: 'The outer fringe of the Dandaka forest',
    description:
      'As the three enter Dandaka a hollow-eyed giant with a spear strung with lions, tigers and wolves snatches Sita onto his hip and announces himself as Viradha, son of Java and Shatahrada. Rama and Lakshmana shear off both his arms with arrows, but he cannot be killed by weapons, for Brahma has made his body invulnerable to blade and shaft. The brothers therefore dig a pit and bury him alive, and as the earth closes over him the gandharva Tumburu rises out of the rakshasa body, released from Kubera\'s curse. Before he goes he tells Rama to seek out the sage Sharabhanga.',
    significance:
      'The first blood of the forest years, and the first demonstration that exile has made Rama a killer of rakshasas rather than a prince in retreat.',
    causes: ['ayodhya-rama-leaves-chitrakuta'],
  },
  {
    id: 'aranya-sharabhanga-ascends',
    title: "Sharabhanga's Fire and the Vow Over the Bones",
    kanda: 'aranya',
    sarga: '3.5-6',
    order: 206,
    characterIds: ['rama', 'lakshmana', 'sita', 'sharabhanga', 'indra'],
    location: "Sharabhanga's hermitage, Dandaka",
    description:
      'Rama arrives to find Indra himself seated in a chariot, come to carry Sharabhanga to Brahma\'s world; the sage has refused to leave until he has seen Rama with his own eyes. Having seen him, Sharabhanga kindles a fire, offers his own limbs into it, and rises from the flames as a radiant youth. The assembled ascetics of Dandaka then lead Rama to a mound of the bones of hermits eaten by rakshasas and beg his protection. Rama gives his word to rid the forest of them, and Sita alone warns him that bearing arms in a forest of peace may draw him into violence he does not need.',
    significance:
      "Rama's explicit vow to the rishis is the legal and moral charter for everything he does to Khara, to Vali and finally to Ravana.",
    causes: ['aranya-viradha-slain'],
  },
  {
    id: 'aranya-sutikshna-hermitage',
    title: 'Sutikshna Offers Rama His Own Heaven',
    kanda: 'aranya',
    sarga: '3.7-8',
    order: 210,
    characterIds: ['rama', 'lakshmana', 'sita', 'sutikshna'],
    location: "Sutikshna's ashrama on the Mandakini",
    description:
      'Sutikshna, who sits so still that deer come to him unafraid, tells Rama he has stored up worlds of merit by austerity and offers to transfer them all to him on the spot. Rama declines, saying he will win his own worlds, and asks instead only for a place to live. The sage warns him that the deer around the hut are tame and must never be hunted. Rama and Lakshmana spend a night there and then set out on a circuit of the hermitages of Dandaka.',
    significance:
      'Establishes the pattern of the forest years: sages offer Rama shortcuts to power and he refuses every one of them.',
    causes: ['aranya-sharabhanga-ascends'],
  },
  {
    id: 'aranya-anasuya-gifts-sita',
    title: "Anasuya's Gifts to Sita",
    kanda: 'aranya',
    sarga: '2.117-119',
    order: 214,
    characterIds: ['rama', 'sita', 'lakshmana', 'atri', 'anasuya'],
    location: "Atri's hermitage at the edge of Chitrakuta",
    description:
      'At the ashrama of Atri, his aged wife Anasuya — who once held back the Jamuna and made ten years of drought into fruit by her austerity — takes Sita aside and asks her to tell her own story. Sita recounts the svayamvara and her marriage. Anasuya gives her celestial garments, ornaments, unguent and a cosmetic paste that will keep her beauty undimmed for as long as she wears it, and the boon that her limbs will never be soiled. Sita puts them on and comes to Rama adorned as she had been in Ayodhya.',
    significance:
      'The ornaments Anasuya gives are the ones Sita will later fling down to the vanaras on Rishyamukha and the chudamani she will hand to Hanuman in Lanka.',
    causes: ['ayodhya-rama-leaves-chitrakuta'],
  },
  {
    id: 'aranya-decade-in-dandaka',
    title: 'Ten Years Among the Hermitages',
    kanda: 'aranya',
    sarga: '3.11',
    order: 218,
    characterIds: ['rama', 'sita', 'lakshmana', 'sutikshna'],
    location: 'The hermitages of Dandaka',
    description:
      'Valmiki compresses an enormous stretch of time into a few verses: Rama, Sita and Lakshmana move from ashrama to ashrama across Dandaka, staying some months at one and a year or more at another, and in this way ten of the fourteen years pass. They return at last to Sutikshna, who directs them onward to Agastya in the south. The forest in these years is not hostile but hospitable; the rakshasa war has not yet begun. Valmiki notes that they finally came back to the very huts where they had first been received, so that the decade closes a circle.',
    significance:
      'Fixes the scale of the exile — the catastrophe at Panchavati happens in the thirteenth year, not at the beginning.',
    causes: ['aranya-sutikshna-hermitage'],
  },
  {
    id: 'aranya-agastya-gives-bow',
    title: "Agastya Gives Rama Vishnu's Bow and the Brahmastra",
    kanda: 'aranya',
    sarga: '3.11-13',
    order: 222,
    characterIds: ['rama', 'sita', 'lakshmana', 'agastya'],
    location: "Agastya's ashrama, south of the Vindhyas",
    description:
      'Agastya — the sage who drank the ocean dry and who made the Vindhya bow down and stay bowed — receives Rama and produces weapons he has kept in trust: the great bow of Vishnu made by Vishvakarma, an inexhaustible pair of quivers given by Indra, a gold-hilted sword in a gold sheath, and the arrow of Brahma. He tells Rama plainly that these were deposited with him for exactly this purpose. Asked where to settle, Agastya names Panchavati on the Godavari, two yojanas away, as a place of water, roots, fruit and deer where Sita will be happy. Rama takes the weapons, circles the sage, and goes.',
    significance:
      'Rama now carries the specific armament with which Ravana will later be killed; the abduction becomes a war the moment Agastya hands over the bow.',
    causes: ['aranya-decade-in-dandaka'],
  },
  {
    id: 'aranya-jatayu-friendship',
    title: 'Jatayu, Friend of Dasharatha, Offers to Watch Over Sita',
    kanda: 'aranya',
    sarga: '3.14',
    order: 226,
    characterIds: ['rama', 'sita', 'lakshmana', 'jatayu', 'dasharatha', 'sampati'],
    location: 'On the road to Panchavati',
    description:
      'A vulture of enormous size is sitting in their path, and Lakshmana reaches for his bow before the bird speaks. He names himself Jatayu, son of Aruna, brother of Sampati, and an old friend of Dasharatha, and recites the whole genealogy of the beings from Kashyapa and Daksha down to the birds. He offers to guard Sita whenever the brothers are away gathering food. Rama embraces him and accepts.',
    significance:
      "Plants the only witness to the abduction and the only being in Dandaka willing to fight Ravana for Sita's sake.",
    causes: ['aranya-agastya-gives-bow'],
  },
  {
    id: 'aranya-panchavati-settled',
    title: 'The Leaf Hut at Panchavati',
    kanda: 'aranya',
    sarga: '3.15-16',
    order: 230,
    characterIds: ['rama', 'sita', 'lakshmana', 'jatayu'],
    location: 'Panchavati, on the bank of the Godavari',
    description:
      'Lakshmana builds the hut himself — earth walls, bamboo posts, a frame of shami wood, a thatch of kusha grass and leaves, a level floor — and Rama embraces him and says that in building it he has shown the mind of their dead father. They live there through a cold winter that Lakshmana describes in a long speech about frost on the Godavari at dawn and Bharata lying on bare ground in Nandigrama. Jatayu keeps watch nearby. It is the happiest passage of the exile and Valmiki spends it on domestic detail.',
    significance:
      'Panchavati is the stage on which everything turns: Shurpanakha, Khara, the golden deer and the abduction all happen within sight of this hut.',
    causes: ['aranya-jatayu-friendship', 'aranya-agastya-gives-bow'],
  },
  {
    id: 'aranya-shurpanakha-proposal',
    title: "Shurpanakha's Proposal",
    kanda: 'aranya',
    sarga: '3.17',
    order: 234,
    characterIds: ['rama', 'sita', 'lakshmana', 'shurpanakha', 'ravana', 'khara'],
    location: 'The hut at Panchavati',
    description:
      'Ravana\'s sister, roaming Dandaka, sees Rama and is seized by desire. She tells him outright who she is — sister of Ravana, Kumbhakarna and Vibhishana, kin of Khara and Dushana — and proposes that he abandon "that deformed, misshapen, unfit human woman" and take her instead, offering to eat Sita and Lakshmana to clear the way. Rama, amused and evasive, says he is married and sends her to Lakshmana as an unmarried man; Lakshmana in turn mocks her by saying he is only a slave and she would do better as Rama\'s junior wife. Driven back and forth between them she loses patience and rushes at Sita.',
    significance:
      'The brothers answer a serious proposal with a joke, and the joke is the hinge on which the entire war turns.',
    causes: ['aranya-panchavati-settled'],
  },
  {
    id: 'aranya-shurpanakha-mutilated',
    title: 'Lakshmana Cuts Off Her Ears and Nose',
    kanda: 'aranya',
    sarga: '3.18',
    order: 238,
    characterIds: ['rama', 'sita', 'lakshmana', 'shurpanakha', 'khara'],
    location: 'The hut at Panchavati',
    description:
      'When Shurpanakha lunges at Sita "like a meteor at the star Rohini," Rama holds her off and tells Lakshmana that this cruel, swollen-bellied rakshasi deserves to be disfigured. Lakshmana draws his sword and in one stroke takes off her ears and her nose. She runs howling into the forest, blood pouring from her face, and goes straight to Khara at Janasthana. Valmiki records no provocation beyond the lunge, and no rekha, line or circle drawn around Sita — that device belongs to much later retellings and not to this text.',
    significance:
      'A mutilation ordered in anger converts a private insult into a blood feud with the entire Janasthana garrison.',
    shloka: {
      devanagari:
        'इत्युक्तो लक्ष्मणस्तस्याः क्रुद्धो रामस्य पश्यतः |\nउद्धृत्य खड्गं चिच्छेद कर्णनासं महाबलः ||',
      transliteration:
        'ity ukto lakṣmaṇas tasyāḥ kruddho rāmasya paśyataḥ |\nuddhṛtya khaḍgaṃ cicchheda karṇa-nāsaṃ mahābalaḥ ||',
      translation:
        'So addressed, the mighty Lakshmana, enraged, drew his sword in front of Rama and sheared off her ears and nose.',
      ref: '3.18.21',
      context: "Lakshmana executes Rama's order against Shurpanakha at Panchavati.",
    },
    causes: ['aranya-shurpanakha-proposal'],
  },
  {
    id: 'aranya-khara-dushana-trishira-slain',
    title: 'Fourteen Thousand Rakshasas Fall at Janasthana',
    kanda: 'aranya',
    sarga: '3.19-30',
    order: 242,
    characterIds: ['rama', 'lakshmana', 'sita', 'shurpanakha', 'khara', 'dushana', 'trishira', 'agastya'],
    location: 'Janasthana, Dandaka',
    description:
      'Khara first sends fourteen rakshasas, and Rama kills all fourteen. He then marches out himself with Dushana, Trishira and an army of fourteen thousand. Rama puts Sita and Lakshmana in a mountain cave and fights the entire force alone, loosing arrows so fast that the sky is dark with them; Dushana falls, then Trishira, and finally Khara, whose mace-charge Rama ends with the arrow of Agni given by Agastya. The whole battle is finished, Valmiki says, in a part of an afternoon, and the gods in the sky are astonished. Shurpanakha, who had watched, flees south to Lanka.',
    significance:
      "Rama's one-man destruction of Janasthana is precisely what convinces Ravana that Sita cannot be taken by force and must be taken by trickery.",
    causes: ['aranya-shurpanakha-mutilated'],
  },
  {
    id: 'aranya-shurpanakha-incites-ravana',
    title: 'Shurpanakha Goads Ravana with a Description of Sita',
    kanda: 'aranya',
    sarga: '3.31-34',
    order: 246,
    characterIds: ['shurpanakha', 'ravana', 'khara', 'rama', 'sita'],
    location: "Ravana's court, Lanka",
    description:
      'Shurpanakha throws herself before the throne, noseless and earless, and attacks her brother where he is weakest: she calls him a king drowned in pleasure who did not even know his frontier garrison had been wiped out. Then she describes Sita — waist, eyes, gait — and says that no woman on earth or among the gandharvas is her equal, and that she would be a fit wife for him. She tells him bluntly that Rama killed fourteen thousand rakshasas single-handed and that he cannot be beaten in open battle. Ravana dismisses his council, goes alone in the Pushpaka to the far shore, and seeks out Maricha.',
    significance:
      'Converts a border defeat into a scheme of abduction by appealing simultaneously to Ravana\'s shame and his lust.',
    causes: ['aranya-khara-dushana-trishira-slain'],
  },
  {
    id: 'aranya-ravana-compels-maricha',
    title: "Maricha's Warning and Ravana's Threat",
    kanda: 'aranya',
    sarga: '3.35-41',
    order: 250,
    characterIds: ['ravana', 'maricha', 'rama', 'sita'],
    location: "Maricha's hermitage on the southern shore",
    description:
      'Maricha, living as an ascetic on the sea-coast, remembers Rama as a boy of twelve who shot him with the manava astra and flung him a hundred yojanas into the sea, and he argues at length that Ravana is seeking his own extinction. Ravana returns a second time and simply orders him to become a golden deer, adding that disobedience means death at his hands now. Maricha chooses to die by Rama, saying "better to be killed by an enemy than by a kinsman," and warns Ravana that he is destroying Lanka, his brothers and himself. He then takes the form of a deer with silver spots and jewelled horns.',
    significance:
      'The conspiracy is laid out in full with its consequences correctly predicted by its own instrument, which is how Valmiki marks Ravana as culpable rather than merely unlucky.',
    causes: ['aranya-shurpanakha-incites-ravana'],
  },
  {
    id: 'aranya-golden-deer',
    title: 'The Golden Deer and Sita\'s Request',
    kanda: 'aranya',
    sarga: '3.42-43',
    order: 254,
    characterIds: ['rama', 'sita', 'lakshmana', 'maricha', 'ravana'],
    location: 'Panchavati',
    description:
      'The deer grazes in front of the hut with horns of sapphire, a face flecked with white and blue, and a hide that scatters light. Sita calls both brothers and asks for it — alive if it can be caught, as a skin if it cannot — saying it will be a wonder to speak of when they return to Ayodhya. Lakshmana says flatly that no such deer exists and that this is Maricha, who has killed hunting kings before. Rama overrules him, accepts that it may be a rakshasa and says he will kill it for that very reason, and leaves Lakshmana under strict instruction never to leave Sita.',
    significance:
      'The single moment at which Rama chooses to indulge Sita over Lakshmana\'s correct warning, and the pivot of the entire epic.',
    causes: ['aranya-ravana-compels-maricha'],
  },
  {
    id: 'aranya-cry-in-ramas-voice',
    title: "Maricha Dies Crying 'Ha Sita! Ha Lakshmana!'",
    kanda: 'aranya',
    sarga: '3.44',
    order: 258,
    characterIds: ['rama', 'maricha', 'sita', 'lakshmana', 'ravana'],
    location: 'The forest beyond Panchavati',
    description:
      'The deer leads Rama a long way, appearing and vanishing among the trees, until Rama loses patience and shoots a blazing arrow that goes through its heart. As he dies Maricha remembers Ravana\'s instruction and, knowing the moment has come, throws out a cry in a perfect imitation of Rama\'s voice — "Ha Sita! Ha Lakshmana!" — loud enough to carry back to the hut. The golden hide falls away and an enormous rakshasa lies dying on the ground. Rama realises at once what has been done and what it means, and runs back.',
    significance:
      'A single forged sentence separates Sita from both her protectors; the entire abduction rests on it.',
    shloka: {
      devanagari:
        'स प्राप्तकालमाज्ञाय चकार च ततः स्वरम् |\nसदृशं राघवस्येव हा सीते लक्ष्मणेति च ||',
      transliteration:
        'sa prāpta-kālam ājñāya cakāra ca tataḥ svaram |\nsadṛśaṃ rāghavasyeva hā sīte lakṣmaṇeti ca ||',
      translation:
        'Knowing the appointed moment had come, he raised a cry just like Raghava\'s — "Ah Sita! Ah Lakshmana!"',
      ref: '3.44.19',
      context: "Maricha, pierced by Rama's arrow, imitates Rama's voice as he dies.",
    },
    causes: ['aranya-golden-deer'],
  },
  {
    id: 'aranya-lakshmana-leaves-sita',
    title: 'Sita Drives Lakshmana Away',
    kanda: 'aranya',
    sarga: '3.45',
    order: 262,
    characterIds: ['sita', 'lakshmana', 'rama', 'maricha'],
    location: 'The hut at Panchavati',
    description:
      'Sita hears the cry and orders Lakshmana to go. He refuses, saying no being in the three worlds can defeat Rama and that the voice is a rakshasa trick. She then says the cruellest things in the epic: that he has followed them into the forest in Bharata\'s pay, that he wants her for himself, that he is waiting for Rama to die. Lakshmana, trembling, salutes her, calls on the forest deities to witness, and goes — looking back again and again. Valmiki gives him no line to draw on the ground; the Lakshmana Rekha does not exist in this text and comes from much later retellings.',
    significance:
      'Sita is left alone by her own insistence, which complicates every later judgement about blame and makes Lakshmana\'s obedience tragic rather than negligent.',
    causes: ['aranya-cry-in-ramas-voice'],
  },
  {
    id: 'aranya-sita-abducted',
    title: 'Ravana Carries Sita Away',
    kanda: 'aranya',
    sarga: '3.46-49',
    order: 266,
    characterIds: ['ravana', 'sita', 'rama', 'lakshmana', 'maricha'],
    location: 'Panchavati, then the sky above Dandaka',
    description:
      'Ravana comes to the empty hut in the dress of a wandering mendicant, ochre robe, umbrella, staff and water-pot, and Sita receives him with the hospitality owed to a guest. He praises her, names himself, and offers her the rank of chief queen over his thousands of women; she answers that she is to Rama what a lioness is to a lion and that he is a jackal. He then takes his own form with ten heads and twenty arms, seizes her by the hair and the thighs, sets her in the ass-drawn aerial chariot and rises. Sita screams for Rama, for Lakshmana, for the trees and the Godavari to tell Rama which way she has gone.',
    significance:
      'The crime that the rest of the epic exists to answer.',
    causes: ['aranya-lakshmana-leaves-sita'],
  },
  {
    id: 'aranya-jatayu-fights-ravana',
    title: 'Jatayu Attacks the Flying Chariot',
    kanda: 'aranya',
    sarga: '3.49-51',
    order: 270,
    characterIds: ['jatayu', 'ravana', 'sita', 'rama'],
    location: 'The air above Janasthana',
    description:
      'The old vulture wakes on his tree, sees Sita in the chariot and challenges Ravana in the language of a kshatriya: he is sixty thousand years old, he says, and Ravana is a thief stealing another man\'s wife while that man is away. He breaks Ravana\'s bow, kills the mules and the charioteer and smashes the chariot so that Ravana falls to the ground with Sita in his arms. Then Ravana draws a dagger and cuts off the bird\'s wings, feet and flanks, and Jatayu drops. Ravana takes Sita up again, and as he flies south she throws her upper garment and ornaments down among five vanaras seated on a hilltop.',
    significance:
      'Jatayu\'s doomed fight buys the one piece of intelligence — the direction and the name of the abductor — on which the entire search depends.',
    causes: ['aranya-sita-abducted', 'aranya-jatayu-friendship'],
  },
  {
    id: 'aranya-rama-returns-and-jatayu-dies',
    title: 'The Empty Hut, and the Death of Jatayu',
    kanda: 'aranya',
    sarga: '3.57-68',
    order: 274,
    characterIds: ['rama', 'lakshmana', 'jatayu', 'ravana', 'sita'],
    location: 'Panchavati and the forest south of it',
    description:
      'Rama meets Lakshmana on the path and reproaches him bitterly for leaving Sita; they reach the hut and find it empty, the grass seat scattered, the flowers Sita had gathered on the ground. Rama breaks down completely, questions the kadamba and the asoka trees, the deer and the river, and at one point threatens to destroy the three worlds before Lakshmana talks him down. Following the trail they come upon a mountain-like bird lying in his own blood, and Rama at first takes him for another rakshasa. Jatayu names Ravana, says he has gone south, adds that Sita was taken in the Vinda hour which dooms the thief, and dies; Rama cremates him with full rites on the Godavari as he would a kinsman.',
    significance:
      'Rama learns his enemy\'s name and direction, and performs for a vulture the funeral he was never able to perform for his own father.',
    shloka: {
      devanagari:
        'पश्य लक्ष्मण गृध्रोऽयमुपकारी हतश्च मे |\nसीतामभ्यवपन्नो हि रावणेन बलीयसा ||',
      transliteration:
        'paśya lakṣmaṇa gṛdhro \'yam upakārī hataś ca me |\nsītām abhyavapanno hi rāvaṇena balīyasā ||',
      translation:
        'Look, Lakshmana — this vulture, my benefactor, has been killed for my sake; he came to Sita\'s rescue against the stronger Ravana.',
      ref: '3.68.22',
      context: 'Rama over the body of Jatayu, before building his funeral pyre.',
    },
    causes: ['aranya-jatayu-fights-ravana', 'aranya-cry-in-ramas-voice'],
  },
  {
    id: 'aranya-kabandha-slain',
    title: 'Kabandha, Armless and Burned, Points the Way',
    kanda: 'aranya',
    sarga: '3.69-73',
    order: 278,
    characterIds: ['rama', 'lakshmana', 'kabandha', 'sugriva', 'indra', 'shabari'],
    location: 'The Krauncha forest',
    description:
      'A headless trunk with a single eye in its chest and arms a yojana long catches both brothers at once. They cut off both arms at the shoulder, and the creature asks who they are; hearing the name Rama, he rejoices, for a curse of Sthulashiras and a blow of Indra\'s thunderbolt had driven his head into his body and he had been promised release at Rama\'s hands. They burn him in a pit, and he rises from the smoke in his own gandharva shape. From the air he gives the single most useful instruction of the Aranya Kanda: go west to Pampa, find Sugriva on Rishyamukha, make him your friend, and he will find Sita for you — and on the way, visit Shabari.',
    significance:
      'Redirects the search from blind grief to a concrete alliance, and names Sugriva and Pampa for the first time.',
    causes: ['aranya-rama-returns-and-jatayu-dies'],
  },
  {
    id: 'aranya-shabari',
    title: "Shabari's Welcome and Her Fire",
    kanda: 'aranya',
    sarga: '3.74',
    order: 282,
    characterIds: ['rama', 'lakshmana', 'shabari', 'matanga', 'kabandha'],
    location: "Shabari's hermitage on the shore of Lake Pampa",
    description:
      'Shabari, an aged ascetic woman who has served the disciples of Matanga and kept herself alive only to see Rama, falls at his feet and offers him forest roots and fruits gathered for him. She shows him the groves of Matanga, where the flowers the sages carried still have not withered, and tells him her teachers went to heaven long ago saying she must wait for him. Having received him she enters fire by yoga and goes to the world her gurus reached. In Valmiki she simply offers the fruit; the famous episode of Shabari tasting each berry first to check its sweetness is not narrated here and belongs to later devotional retellings.',
    significance:
      'The last hermitage of the forest years, and the threshold at which Rama passes out of the world of sages into the world of the vanaras.',
    causes: ['aranya-kabandha-slain'],
  },

  // ------------------------------------------------------------------
  // KISHKINDHA KANDA — 302..362
  // ------------------------------------------------------------------
  {
    id: 'kishkindha-pampa-rishyamukha',
    title: 'Pampa in Spring, and the Watchers on Rishyamukha',
    kanda: 'kishkindha',
    sarga: '4.1',
    order: 302,
    characterIds: ['rama', 'lakshmana', 'sugriva', 'hanuman', 'vali'],
    location: 'Lake Pampa, below Mount Rishyamukha',
    description:
      'Rama walks the flowering shore of Pampa and the beauty of it makes his grief worse; he tells Lakshmana that the kokila and the breeze and the lotus pollen are torture to a man whose wife is gone. From the slopes of Rishyamukha, Sugriva and his four surviving ministers see two armed men in bark cloth coming and take fright, certain that Vali has sent assassins. Sugriva leaps from peak to peak in panic. Hanuman is sent down to find out who they are.',
    significance:
      'Two parties, each dispossessed by a brother or a demon, come within sight of each other.',
    causes: ['aranya-shabari'],
  },
  {
    id: 'kishkindha-hanuman-brahmin-guise',
    title: 'Hanuman Comes Down in the Form of a Mendicant',
    kanda: 'kishkindha',
    sarga: '4.3',
    order: 306,
    characterIds: ['hanuman', 'rama', 'lakshmana', 'sugriva', 'vayu'],
    location: 'The foot of Rishyamukha',
    description:
      'Hanuman takes the shape of a brahmin mendicant and approaches with a speech so measured that Rama turns to Lakshmana and says at length that no one could speak like this who had not been schooled in the Rig, Yajur and Sama Vedas, that his grammar is flawless, that nothing in his face, eyes, forehead or brows betrays a false note, and that a king whose envoy is such a man will succeed in everything. Lakshmana explains who they are and what has happened. Hanuman then drops the disguise, names himself as the son of Vayu and the minister of Sugriva, and carries both brothers on his shoulders up the mountain.',
    significance:
      'The first meeting of Rama and Hanuman, and the only character in the epic whom Rama praises for the quality of his speech before anything else.',
    shloka: {
      devanagari:
        'नानृग्वेदविनीतस्य नायजुर्वेदधारिणः |\nनासामवेदविदुषः शक्यमेवं विभाषितुम् ||',
      transliteration:
        'nānṛgveda-vinītasya nāyajurveda-dhāriṇaḥ |\nnāsāmaveda-viduṣaḥ śakyam evaṃ vibhāṣitum ||',
      translation:
        'One untrained in the Rigveda, who has not retained the Yajurveda, who is no master of the Samaveda, could not possibly speak like this.',
      ref: '4.3.28',
      context: "Rama to Lakshmana, on hearing Hanuman's first words.",
    },
    causes: ['kishkindha-pampa-rishyamukha'],
  },
  {
    id: 'kishkindha-fire-pact',
    title: 'The Pact Sworn Around the Fire',
    kanda: 'kishkindha',
    sarga: '4.5',
    order: 310,
    characterIds: ['rama', 'lakshmana', 'sugriva', 'hanuman', 'vali', 'ruma'],
    location: 'Rishyamukha',
    description:
      'Hanuman kindles a fire of sala wood and Rama and Sugriva walk around it together and clasp hands. Sugriva tells how Vali shut him out of the cave of Mayavi, drove him from Kishkindha, seized his wife Ruma and hunted him over the whole earth until he found the one hill Vali cannot climb because of Matanga\'s curse. Rama promises to kill Vali; Sugriva promises to find Sita with the whole vanara nation. Valmiki makes the agreement explicitly contractual, with each obligation named.',
    significance:
      'A formal alliance, not a favour: everything Rama does to Vali and everything Sugriva owes afterwards flows from this oath.',
    causes: ['kishkindha-hanuman-brahmin-guise'],
  },
  {
    id: 'kishkindha-sitas-jewels-shown',
    title: "Sita's Ornaments Untied from the Cloth",
    kanda: 'kishkindha',
    sarga: '4.6',
    order: 314,
    characterIds: ['sugriva', 'rama', 'lakshmana', 'sita', 'hanuman'],
    location: 'Rishyamukha',
    description:
      'Sugriva tells Rama that some time ago he and four companions sitting on this hill saw a rakshasa flying south with a struggling woman, who dropped a bundle of ornaments wrapped in her upper garment among them. He fetches it and unties it. Rama takes the jewels and faints; when he can speak he says he cannot recognise the bracelets or the necklace, because he never looked higher than her feet, but the anklets he knows at once. Lakshmana identifies them the same way.',
    significance:
      'The first physical proof that Sita is alive and was taken south, and the moment the grief becomes a search.',
    causes: ['kishkindha-fire-pact', 'aranya-jatayu-fights-ravana'],
  },
  {
    id: 'kishkindha-dundubhi-skeleton-and-sala-trees',
    title: "The Kicked Skeleton and the Seven Sala Trees",
    kanda: 'kishkindha',
    sarga: '4.11-12',
    order: 318,
    characterIds: ['rama', 'lakshmana', 'sugriva', 'hanuman', 'vali', 'dundubhi', 'matanga'],
    location: 'The Rishyamukha plateau near Matanga\'s grove',
    description:
      'Sugriva, afraid that Rama cannot match Vali, tells how Vali fought the buffalo-demon Dundubhi for a night and a day inside a cave and flung the carcass a yojana, so that drops of its blood fell in Matanga\'s hermitage and earned him the curse that killed him. He shows Rama the heap of bones, now dry and huge as a hill. Rama lifts it on his toe and tosses it ten yojanas. Still unsatisfied, Sugriva points to seven sala trees that Vali used to shake; Rama sends one arrow through all seven, through the hill behind them and into the earth, and the arrow returns to his quiver.',
    significance:
      'Rama must visibly out-perform a dead buffalo-demon before Sugriva will risk facing his brother at all.',
    causes: ['kishkindha-sitas-jewels-shown'],
  },
  {
    id: 'kishkindha-first-duel-aborted',
    title: 'The First Duel and the Garland of Gajapushpi',
    kanda: 'kishkindha',
    sarga: '4.14-15',
    order: 322,
    characterIds: ['sugriva', 'vali', 'rama', 'lakshmana', 'hanuman', 'tara', 'angada'],
    location: 'Outside the gate of Kishkindha',
    description:
      'Sugriva roars a challenge at the gate; Vali comes out despite Tara, who has heard from Angada that Sugriva has allied with Rama and begs him not to fight. The brothers close, and Rama, standing in cover with an arrow fitted, cannot tell them apart — they are identical in shape, ornaments, voice and gait — and lets the string go slack. Vali beats Sugriva nearly to death and Sugriva flees back to Rishyamukha, furious at being sent into a trap. Lakshmana ties a garland of flowering gajapushpi creeper round Sugriva\'s neck so that the second time there will be no mistake.',
    significance:
      'The failure is what forces the detail that makes Rama\'s intervention deliberate and identifiable rather than accidental.',
    causes: ['kishkindha-dundubhi-skeleton-and-sala-trees'],
  },
  {
    id: 'kishkindha-vali-slain',
    title: "Vali Falls, and Reproaches Rama from the Ground",
    kanda: 'kishkindha',
    sarga: '4.16-18',
    order: 326,
    characterIds: ['rama', 'vali', 'sugriva', 'lakshmana', 'tara', 'angada', 'hanuman'],
    location: 'Outside the gate of Kishkindha',
    description:
      'Sugriva challenges again, Vali comes out again, and this time Rama shoots from concealment and the arrow goes through Vali\'s chest. Dying, Vali delivers the most damaging speech in the epic against Rama: that he was no enemy of Rama\'s, that he was killed while fighting another, from hiding, by a man who claims to be the pillar of dharma; that Rama has killed him for a skin and flesh no one may eat; and that had Rama asked, Vali would have brought Sita back in a single day. Rama answers that the land is Bharata\'s and he enforces its law, that Vali took his younger brother\'s wife Ruma, which by vanara and human law is a capital offence, and that men lawfully hunt beasts from cover. Vali accepts the answer, gives Angada to Rama\'s protection, and dies.',
    significance:
      'The most contested act of Rama\'s life, argued out in the text itself rather than passed over, and the act that puts the vanara army at his disposal.',
    shloka: {
      devanagari:
        'धर्ममर्थं च कामं च समयं चापि लौकिकम् |\nअविज्ञाय कथं बाल्यान्मामिहाद्य विगर्हसे ||',
      transliteration:
        'dharmam arthaṃ ca kāmaṃ ca samayaṃ cāpi laukikam |\navijñāya kathaṃ bālyān mām ihādya vigarhase ||',
      translation:
        'Not knowing dharma, nor artha, nor kama, nor even the usage of the world, how is it that out of childishness you reproach me here today?',
      ref: '4.18.4',
      context: "Rama's opening answer to the dying Vali's accusation.",
    },
    causes: ['kishkindha-first-duel-aborted', 'kishkindha-fire-pact'],
  },
  {
    id: 'kishkindha-taras-lament',
    title: "Tara's Lament and the Funeral",
    kanda: 'kishkindha',
    sarga: '4.19-25',
    order: 330,
    characterIds: ['tara', 'vali', 'angada', 'sugriva', 'rama', 'lakshmana', 'hanuman', 'sushena'],
    location: 'Kishkindha',
    description:
      'Tara comes out of the city, throws herself on Vali\'s body and will not be moved; she asks the corpse why it does not answer her, calls herself a widow in the same breath as she calls Angada fatherless, and asks Rama to kill her too with the same arrow so that she may follow her husband. Hanuman tries to console her with the ordinary consolations and she rejects them. Sugriva, stricken by what he has done, asks permission to enter fire. Rama restrains them all, Vali is cremated on the river with the rites of a king, and Tara is the one who holds the family together afterwards.',
    significance:
      'Valmiki gives the defeated side the most moving speech of the kanda, and makes Tara the political intelligence of Kishkindha for the rest of the epic.',
    causes: ['kishkindha-vali-slain'],
  },
  {
    id: 'kishkindha-sugriva-installed',
    title: 'Sugriva Crowned, Angada Made Yuvaraja',
    kanda: 'kishkindha',
    sarga: '4.26',
    order: 334,
    characterIds: ['sugriva', 'angada', 'rama', 'lakshmana', 'hanuman', 'tara', 'jambavan', 'nala', 'nila', 'ruma'],
    location: 'Kishkindha',
    description:
      'Rama will not enter the city, because he is bound by the terms of an exile that forbids him to enter a town or village, so he sends Lakshmana in to perform the consecration. Sugriva is anointed with waters from the four seas carried in golden jars, and on Rama\'s instruction Angada is made crown prince in the same ceremony, so that Vali\'s son loses nothing. Ruma is restored to Sugriva. Rama and Lakshmana withdraw to a cave on Mount Prasravana to wait out the four months of the rains.',
    significance:
      'Settles the Kishkindha succession in a way that binds both branches of the royal house to Rama\'s cause.',
    causes: ['kishkindha-taras-lament'],
  },
  {
    id: 'kishkindha-rains-at-prasravana',
    title: 'Four Months of Rain on Mount Prasravana',
    kanda: 'kishkindha',
    sarga: '4.27-29',
    order: 338,
    characterIds: ['rama', 'lakshmana', 'sugriva', 'hanuman', 'sita'],
    location: 'Mount Prasravana, above Kishkindha',
    description:
      'The monsoon closes the roads and Rama waits it out in a cave, and Valmiki fills three sargas with his descriptions of it — clouds like elephants, rivers rising, peacocks, frogs, lightning like Sita struggling in Ravana\'s arms. Rama counts the days and reckons that the thirteenth year of exile is passing and that Sita has been in captivity for months. In Kishkindha, Sugriva disappears into the inner apartments with Ruma and Tara and wine and forgets his oath entirely. Hanuman is the one who finally reminds him that autumn has come and that the vanara hosts have not been summoned.',
    significance:
      'The delay that nearly breaks the alliance, and the first demonstration that Hanuman\'s memory, not Sugriva\'s, is what keeps the promise alive.',
    causes: ['kishkindha-sugriva-installed'],
  },
  {
    id: 'kishkindha-lakshmana-fury',
    title: 'Lakshmana Enters Kishkindha with His Bow Bent',
    kanda: 'kishkindha',
    sarga: '4.30-33',
    order: 342,
    characterIds: ['lakshmana', 'sugriva', 'rama', 'tara', 'hanuman', 'angada'],
    location: 'Kishkindha',
    description:
      'The rains end and nothing happens. Rama sends Lakshmana with the message that the road by which Vali went is still open, and Lakshmana goes in shaking with rage, scattering the guards. Sugriva is too drunk to stand; it is Tara who comes out to meet Lakshmana, calms him by conceding every charge, reminds him that a man ruled by desire loses all sense of time, and then reveals that Sugriva has in fact already sent messengers out to summon the vanara armies from every quarter. Sugriva sobers, apologises, and the hosts begin to arrive in their hundreds of thousands.',
    significance:
      'Tara\'s diplomacy saves the alliance at the exact moment Lakshmana is prepared to destroy it.',
    causes: ['kishkindha-rains-at-prasravana'],
  },
  {
    id: 'kishkindha-search-parties-dispatched',
    title: 'The Four Search Parties, and the Ring',
    kanda: 'kishkindha',
    sarga: '4.38-43',
    order: 346,
    characterIds: ['sugriva', 'rama', 'hanuman', 'angada', 'jambavan', 'nila', 'nala', 'tara', 'sushena', 'mainda', 'dvivida', 'gandhamadana', 'lakshmana'],
    location: 'Kishkindha',
    description:
      'Sugriva, who had been hunted over the whole earth by Vali and therefore knows its geography better than anyone alive, dictates four itineraries in extraordinary detail — east to Yavadvipa and the golden mountain, north past the Himavat to the Uttara Kurus, west to the Astachala and the Soma hills, south through the Vindhyas to the sea — and gives every party one month and no more. The southern party under Angada, with Hanuman, Jambavan, Nila and Tara the son of Sushena, is the one Rama trusts, and to Hanuman alone he gives his signet ring engraved with his name, as the token by which Sita will know a true messenger. Valmiki lets Rama say outright that he believes Hanuman will be the one to succeed.',
    significance:
      'Puts the ring in the only hand that will reach Lanka, and sets the one-month deadline that drives the whole crisis on the southern shore.',
    causes: ['kishkindha-lakshmana-fury'],
  },
  {
    id: 'kishkindha-svayamprabha-cave',
    title: 'The Cave of Svayamprabha',
    kanda: 'kishkindha',
    sarga: '4.50-52',
    order: 350,
    characterIds: ['hanuman', 'angada', 'jambavan', 'svayamprabha', 'maya', 'sugriva'],
    location: 'Riksha-bila, a cavern in the Vindhyas',
    description:
      'Dying of thirst in the Vindhya wilderness the southern party follows water-birds into an enormous cave built by the asura architect Maya, lit by its own golden trees, full of fruit and jewelled couches and wholly silent. An ascetic woman in black deerskin, Svayamprabha, guards it for her absent friend Hema; she feeds them, and when they confess they are lost and that the month is gone, she tells them to shut their eyes and by her power sets them outside on the southern shore. They emerge to find the sea in front of them and the deadline expired.',
    significance:
      'Costs the party the month Sugriva gave them and delivers them, bankrupt of time, exactly where they need to be.',
    causes: ['kishkindha-search-parties-dispatched'],
  },
  {
    id: 'kishkindha-fast-unto-death',
    title: 'The Vanaras Sit Down on the Shore to Die',
    kanda: 'kishkindha',
    sarga: '4.53-55',
    order: 354,
    characterIds: ['angada', 'hanuman', 'jambavan', 'sugriva', 'tara', 'vali', 'rama'],
    location: 'The southern shore of the ocean',
    description:
      'Angada argues that Sugriva will certainly execute them for returning empty-handed after the month has passed, and that he himself, as Vali\'s son holding a crown prince\'s title by Rama\'s favour, will be the first killed; he proposes they all fast to death on the beach instead. Hanuman tries to talk him out of it, warning that Sugriva is not Vali. Tara the vanara and others agree with Angada and they spread kusha grass facing east, lie down and begin to recite their griefs — the deaths of Jatayu, of Dasharatha, the abduction, their own failure.',
    significance:
      'Their despair, spoken aloud on the sand, is overheard — which is the only reason the search does not end in the Vindhyas.',
    causes: ['kishkindha-svayamprabha-cave'],
  },
  {
    id: 'kishkindha-sampati-names-lanka',
    title: 'Sampati Hears His Brother\'s Name and Names Lanka',
    kanda: 'kishkindha',
    sarga: '4.56-63',
    order: 358,
    characterIds: ['sampati', 'jatayu', 'angada', 'hanuman', 'jambavan', 'sita'],
    location: 'The southern shore, below the Vindhya cliffs',
    description:
      'A wingless vulture crawls down the cliff intending to eat them, and stops when he hears the name Jatayu. He is Sampati, the elder brother: the two had once raced toward the sun, and Sampati spread his wings over Jatayu to shield him and had them burnt off. Hearing that Jatayu died fighting for Sita, he performs water rites for him and then repays the debt — from this height, he says, with the sight that is left to a vulture, he can see a hundred yojanas across the water to the island of Lanka, and he can see Sita in a grove of asoka trees, guarded by rakshasis, in a yellow silk robe. As he finishes, new wings grow on him. He names the distance: a hundred yojanas of open sea.',
    significance:
      'Converts an aimless search into a precise target — the island, the grove, and the exact width of the water that must be crossed.',
    causes: ['kishkindha-fast-unto-death', 'aranya-jatayu-fights-ravana'],
  },
  {
    id: 'kishkindha-jambavan-rouses-hanuman',
    title: 'Jambavan Tells Hanuman Who He Is',
    kanda: 'kishkindha',
    sarga: '4.64-67',
    order: 362,
    characterIds: ['jambavan', 'hanuman', 'angada', 'indra', 'brahma'],
    location: 'Mount Mahendra, the southern shore',
    description:
      'Each vanara measures himself against the hundred yojanas and falls short: Gaja says ten, Gavaksha twenty, Angada can reach Lanka but doubts he can return. Hanuman sits apart, silent, because a curse laid on him in infancy has made him forget his own strength. Jambavan, the oldest creature present, turns to him and recites it back to him — the son of the Wind, who as a child leapt at the sun taking it for fruit, whom Indra struck with the thunderbolt and broke his jaw, for whom Brahma and the gods heaped boon upon boon of invulnerability. As he listens Hanuman begins to swell, roaring, until he stands on Mahendra like a second mountain.',
    significance:
      'The hinge of the entire epic: the one being who can cross the sea is reminded, by someone else, that he can.',
    causes: ['kishkindha-sampati-names-lanka'],
  },

  // ------------------------------------------------------------------
  // SUNDARA KANDA — 402..492
  // ------------------------------------------------------------------
  {
    id: 'sundara-leap-from-mahendra',
    title: 'The Leap from Mount Mahendra',
    kanda: 'sundara',
    sarga: '5.1',
    order: 402,
    characterIds: ['hanuman', 'jambavan', 'angada', 'rama', 'sita'],
    location: 'Mount Mahendra to the sea',
    description:
      'Hanuman presses the mountain down with his feet until trees shake loose and animals bolt and streams of mineral-coloured water run from its sides, draws in his breath, flattens his ears and springs. The trees of the slope are torn up and carried along in his wake for a while before they drop into the sea. Valmiki says he goes like an arrow shot by Rama, his shadow running over the water beneath him, his tail streaming behind like Indra\'s banner, the clouds he passes through parting in colours.',
    significance:
      'The most celebrated single action in the epic, and the opening line of the kanda that bears Hanuman\'s name.',
    shloka: {
      devanagari:
        'ततो रावणनीतायाः सीतायाः शत्रुकर्शनः |\nइयेष पदमन्वेष्टुं चारणाचरिते पथि ||',
      transliteration:
        'tato rāvaṇa-nītāyāḥ sītāyāḥ śatru-karśanaḥ |\niyeṣa padam anveṣṭuṃ cāraṇācarite pathi ||',
      translation:
        'Then that tormentor of his foes resolved to seek out the whereabouts of Sita, carried off by Ravana, by the path travelled by the charanas.',
      ref: '5.1.1',
      context: 'The opening verse of the Sundara Kanda, as Hanuman prepares to leap.',
    },
    causes: ['kishkindha-jambavan-rouses-hanuman'],
  },
  {
    id: 'sundara-mainaka-rises',
    title: 'Mainaka Rises Out of the Sea to Offer Rest',
    kanda: 'sundara',
    sarga: '5.1',
    order: 406,
    characterIds: ['hanuman', 'samudra', 'indra', 'vayu', 'sagara'],
    location: 'The middle of the ocean',
    description:
      'The Ocean, remembering that the Sagara kings of Rama\'s line had dug him out, asks the golden mountain Mainaka — hidden beneath the water since Indra sheared the wings off the mountains and Vayu carried this one to safety — to rise and give Hanuman a resting place. Mainaka comes up through the water, and Hanuman touches him with his hand but will not stop, saying the sun has not set and he has given his word. He circles the mountain in salutation and goes on. The gods watching from above call it a feat worthy of worship in itself.',
    significance:
      'Establishes that Hanuman refuses even legitimate rest while a mission is unfinished — the trait the Yuddha Kanda will depend on.',
    causes: ['sundara-leap-from-mahendra'],
  },
  {
    id: 'sundara-surasa-test',
    title: "Surasa's Mouth",
    kanda: 'sundara',
    sarga: '5.1',
    order: 410,
    characterIds: ['hanuman', 'surasa', 'indra'],
    location: 'The sky above the ocean',
    description:
      'The gods, wanting to test him, send Surasa, mother of the nagas, who rises in a hideous form and declares that Hanuman has been granted to her as food and must enter her mouth. Hanuman tells her his errand and asks to be let through, promising to return and be eaten afterwards; she refuses, citing her boon. So he grows, and she widens her jaws to match, until he has swelled to a hundred yojanas — and then he shrinks instantly to the size of a thumb, darts in and out of her mouth, and says he has fulfilled the letter of her boon. Surasa blesses him and withdraws.',
    significance:
      'The first of the two sea-crossing tests, solved by wit rather than force, which is how Valmiki characterises Hanuman throughout.',
    causes: ['sundara-mainaka-rises'],
  },
  {
    id: 'sundara-simhika-slain',
    title: 'Simhika, the Shadow-Catcher, Torn Apart',
    kanda: 'sundara',
    sarga: '5.1',
    order: 414,
    characterIds: ['hanuman', 'simhika'],
    location: 'The ocean, near the Lankan shore',
    description:
      'Hanuman feels himself slowing in mid-air for no reason, looks down, and sees an enormous creature in the water below with its mouth open: Simhika, who seizes flying beings by dragging down their shadow on the sea. He lets her swallow him, then expands inside her until she bursts, and comes out through her side, leaving the body floating. Valmiki has the beings of the sky remark that whoever has firmness, vision, intelligence and skill all four at once does not fail in his work.',
    significance:
      'Completes the crossing and supplies the formula — dhairya, drishti, mati, dakshya — by which the epic measures a successful agent.',
    causes: ['sundara-surasa-test'],
  },
  {
    id: 'sundara-lankini-struck',
    title: 'Lankini Struck Down at the Gate',
    kanda: 'sundara',
    sarga: '5.3-4',
    order: 418,
    characterIds: ['hanuman', 'lankini', 'brahma'],
    location: 'The northern gate of Lanka, on Mount Trikuta',
    description:
      'Hanuman lands on Mount Lamba and waits for nightfall, then shrinks himself to the size of a cat to slip over the wall. The tutelary goddess of the city blocks him and strikes him; he hits her once with his left fist, deliberately holding back because she is a woman, and she goes down vomiting blood. Getting up, she tells him that Brahma long ago set the sign: when a vanara overcomes her by force, the destruction of the rakshasas has begun — and she stands aside. Hanuman enters by stepping over the wall with his left foot, since an enemy\'s city is not to be entered by its gate.',
    significance:
      'The omen that dates the fall of Lanka to this night, spoken by Lanka\'s own guardian.',
    causes: ['sundara-simhika-slain'],
  },
  {
    id: 'sundara-night-search-of-lanka',
    title: "The Night Search, the Pushpaka, and Ravana's Apartments",
    kanda: 'sundara',
    sarga: '5.5-11',
    order: 424,
    characterIds: ['hanuman', 'ravana', 'mandodari', 'sita', 'kumbhakarna', 'indrajit', 'vibhishana', 'kubera'],
    location: 'The city of Lanka',
    description:
      'Hanuman goes house by house through a city of crystal and gold under a full moon, hearing the Vedas recited in some mansions and drunken singing in others, and Valmiki catalogues it all. He enters the Pushpaka, the flying palace Ravana took from Kubera, and then the inner apartments, where thousands of women lie asleep among wine cups and instruments, limbs across one another. He sees Ravana asleep, enormous, and beside him a woman of extraordinary beauty on a crystal couch, and for a moment is sure he has found Sita and slaps his tail in joy — then reasons that no wife of Rama would sleep, eat, adorn herself or stay alive apart from him, and realises the woman is Mandodari. He also reproaches himself for having looked at other men\'s wives at all, and concludes that his mind remained steady, which is what matters.',
    significance:
      'Establishes both the scale of what the vanara army will have to besiege and the moral self-scrutiny that makes Hanuman trustworthy as a messenger to another man\'s wife.',
    causes: ['sundara-lankini-struck'],
  },
  {
    id: 'sundara-sita-found-in-ashoka-grove',
    title: 'Sita Found Under the Simsupa Tree',
    kanda: 'sundara',
    sarga: '5.14-17',
    order: 430,
    characterIds: ['hanuman', 'sita', 'trijata', 'rama'],
    location: 'The Ashoka grove, Lanka',
    description:
      'Having searched the whole city and failed, Hanuman comes near despair and considers what to do rather than return empty-handed, then thinks of the one place he has not looked. He gets into the walled asoka grove, climbs a simsupa tree and sees, under it, a woman in a single soiled yellow garment, emaciated, filthy, surrounded by hideous rakshasis — "like a flame wrapped in smoke," like the sliver of the moon on the first night, like a memory of wealth. He recognises her by the ornaments still on her, matching those Rama had described and those that fell on Rishyamukha. He does not speak, because speaking would frighten her and bring the guards.',
    significance:
      'The object of the entire search is achieved; everything after this in the kanda is about getting the news home.',
    causes: ['sundara-night-search-of-lanka', 'kishkindha-sampati-names-lanka'],
  },
  {
    id: 'sundara-ravana-threatens-sita',
    title: "Ravana's Courtship, His Threat, and the Blade of Grass",
    kanda: 'sundara',
    sarga: '5.18-24',
    order: 436,
    characterIds: ['ravana', 'sita', 'hanuman', 'rama', 'mandodari', 'trijata'],
    location: 'The Ashoka grove, Lanka',
    description:
      'Ravana comes into the grove at night with his women and lamps and pleads, offers, flatters and finally threatens: he gives her two months, after which, he says, his cooks will cut her up for his breakfast. Sita puts a blade of grass between herself and him and will not look at him, saying he should take back what he stole before Rama burns Lanka to ash, and that he is a man who dared not face Rama and so stole his wife while he was absent. When he leaves, the rakshasis take over, each proposing a method of eating her, until Sita twists her hair into a rope and prepares to hang herself from the simsupa branch — directly above the hidden Hanuman. Trijata then silences them all with a dream she has had: Rama in white on a mountain of bones, Lanka in flames, Ravana shaven, oiled, dressed in red, dragged south on an ass.',
    significance:
      'Fixes the two-month deadline on which the whole Yuddha Kanda timetable runs, and brings Sita within one knot of suicide before Hanuman speaks.',
    causes: ['sundara-sita-found-in-ashoka-grove', 'aranya-sita-abducted'],
  },
  {
    id: 'sundara-hanuman-gives-ring',
    title: "The Ring Marked with Rama's Name",
    kanda: 'sundara',
    sarga: '5.31-36',
    order: 446,
    characterIds: ['hanuman', 'sita', 'rama', 'sugriva', 'dasharatha'],
    location: 'The simsupa tree, Ashoka grove',
    description:
      'From the branches Hanuman begins, in a low voice, to recite the story of the Ikshvakus — Dasharatha, Rama, the exile, the abduction, the alliance with Sugriva — so that Sita hears it as if from nowhere. She looks up and sees a monkey and is certain it is Ravana in another shape; he answers her suspicion patiently, and at last drops down Rama\'s signet ring engraved with his name. She takes it, turns it over, and Valmiki says she was as glad as if she had got her husband back; her face, he writes, shone like the moon released from Rahu. Hanuman offers to carry her out on his back across the sea that night.',
    significance:
      'The proof that makes a stranger credible, and the moment that saves Sita\'s life.',
    shloka: {
      devanagari:
        'वानरोऽहं महाभागे दूतो रामस्य धीमतः |\nरामनामाङ्कितं चेदं पश्य देव्यङ्गुलीयकम् ||',
      transliteration:
        'vānaro \'haṃ mahābhāge dūto rāmasya dhīmataḥ |\nrāma-nāmāṅkitaṃ cedaṃ paśya devy aṅgulīyakam ||',
      translation:
        'O noble lady, I am a vanara, the messenger of the wise Rama; and look, O queen, at this ring marked with Rama\'s name.',
      ref: '5.36.2',
      context: 'Hanuman proving his identity to Sita in the Ashoka grove.',
    },
    causes: ['sundara-ravana-threatens-sita', 'kishkindha-search-parties-dispatched'],
  },
  {
    id: 'sundara-chudamani-given',
    title: "Sita Refuses Rescue and Gives the Crest-Jewel",
    kanda: 'sundara',
    sarga: '5.37-40',
    order: 452,
    characterIds: ['sita', 'hanuman', 'rama', 'ravana', 'indra'],
    location: 'The Ashoka grove, Lanka',
    description:
      'Sita declines to be carried away for two reasons she states plainly: she will not willingly touch another man\'s body, having been touched by Ravana only under force, and more importantly Rama\'s honour requires that he come himself and take her back by destroying Ravana, not that she be smuggled out. She unties the chudamani, the crest-jewel she has kept hidden in her garment, and gives it to Hanuman. With it she sends a private token no one else could know: the story of the crow of Indra\'s son that pecked her on Chitrakuta and that Rama blinded in one eye with a blade of grass charged as a brahmastra. She gives him one month and says that after that she will not be alive.',
    significance:
      'Sita herself converts a rescue into a war, and supplies the private sign that will make Hanuman\'s report unanswerable.',
    causes: ['sundara-hanuman-gives-ring'],
  },
  {
    id: 'sundara-grove-wrecked',
    title: 'Hanuman Destroys the Ashoka Grove',
    kanda: 'sundara',
    sarga: '5.41-42',
    order: 458,
    characterIds: ['hanuman', 'sita', 'ravana'],
    location: 'The Ashoka grove, Lanka',
    description:
      'Hanuman reasons that a messenger\'s second duty is reconnaissance by provocation: he must see the enemy\'s strength, and nothing will bring it out faster than ruining Ravana\'s pleasure garden. He tears up trees by the roots, smashes the hills and lotus pools and pavilions and leaves only the simsupa under which Sita is sitting, then stands roaring on the arch of the gate. The rakshasis wake and ask Sita who the monkey is and she says she knows nothing of rakshasa shape-shifting. Ravana, told of it, sends eighty thousand kinkaras, and Hanuman kills them all with an iron bar torn from the gateway.',
    significance:
      'A deliberate act of provocation that turns a covert mission into an intelligence operation against Lanka\'s whole order of battle.',
    causes: ['sundara-chudamani-given'],
  },
  {
    id: 'sundara-akshayakumara-slain',
    title: "Jambumali, the Ministers' Sons, and Akshayakumara Killed",
    kanda: 'sundara',
    sarga: '5.43-47',
    order: 462,
    characterIds: ['hanuman', 'akshayakumara', 'ravana', 'prahasta', 'indrajit'],
    location: 'The gates of the Ashoka grove, Lanka',
    description:
      'Ravana sends his forces up in escalating waves and Hanuman destroys each in turn: Jambumali son of Prahasta, killed with a bolt through the chest; seven sons of the chief minister; five generals with their troops. Then Ravana sends his own young son Akshayakumara, who fights brilliantly and wounds Hanuman, so that Valmiki gives him real respect. Hanuman finally seizes him by the feet, whirls him round and dashes him on the ground, killing him. Ravana, absorbing the news that a single monkey has destroyed his guard and killed his son, turns to Indrajit.',
    significance:
      'The loss of a son is what commits Ravana personally and emotionally to the war, before a single vanara has crossed the sea.',
    causes: ['sundara-grove-wrecked'],
  },
  {
    id: 'sundara-indrajit-brahmastra',
    title: "Indrajit Binds Hanuman with the Brahmastra",
    kanda: 'sundara',
    sarga: '5.48',
    order: 466,
    characterIds: ['indrajit', 'hanuman', 'ravana', 'brahma', 'akshayakumara'],
    location: 'The Ashoka grove, Lanka',
    description:
      'Indrajit, who has defeated Indra, comes out and finds that ordinary weapons do nothing. He therefore invokes the Brahmastra, and Hanuman, who holds a boon from Brahma that makes him immune to it, chooses to be bound anyway — reasoning that he has not yet met Ravana face to face and that being dragged into the court is the fastest way to deliver Rama\'s message. The weapon releases him the moment the rakshasas add ordinary ropes, since a brahmastra will not coexist with a second bond, but Hanuman keeps up the pretence. He is hauled through the streets of Lanka to the assembly hall.',
    significance:
      'A captivity Hanuman accepts on purpose, which is how the embassy to Ravana happens at all.',
    causes: ['sundara-akshayakumara-slain'],
  },
  {
    id: 'sundara-court-speech',
    title: "Hanuman's Embassy in Ravana's Hall, and Vibhishana's Intervention",
    kanda: 'sundara',
    sarga: '5.49-53',
    order: 470,
    characterIds: ['hanuman', 'ravana', 'vibhishana', 'prahasta', 'sita', 'rama', 'sugriva', 'vali'],
    location: "Ravana's assembly hall, Lanka",
    description:
      'Hanuman, refusing to stand lower than the throne, coils his own tail into a seat higher than Ravana\'s, and delivers his message: he is the envoy of Sugriva, king of the vanaras; Ravana has already been humbled by Vali and by Kartavirya; let him return Sita and live, or Rama\'s arrows will empty Lanka. Ravana orders him killed on the spot. Vibhishana objects on grounds of law — an envoy may be punished but not executed; the recognised penalties are mutilation, flogging, shaving or branding — and Ravana, accepting the point, orders instead that his tail be wrapped in oiled cloth and set alight, since a monkey values his tail, and that he be paraded through the city.',
    significance:
      'The first time Ravana and Rama\'s cause confront each other directly, and the first time Vibhishana publicly contradicts his brother.',
    causes: ['sundara-indrajit-brahmastra'],
  },
  {
    id: 'sundara-tail-set-afire',
    title: 'The Tail Wrapped, Oiled and Lit',
    kanda: 'sundara',
    sarga: '5.53',
    order: 474,
    characterIds: ['hanuman', 'ravana', 'sita', 'agni', 'vayu'],
    location: 'The streets of Lanka',
    description:
      'They wind cotton rags soaked in oil round his tail and set them on fire, and drag him through the streets with drums and conches while women and children come out to look. Hanuman lets them, and uses the march to memorise the layout of the fortifications, the gates and the garrisons. In the grove Sita, hearing of it, prays to Agni that the fire should not burn her husband\'s messenger, and Valmiki says the fire turned cold on him — he attributes it to Sita\'s merit and to Agni\'s regard for Vayu, Hanuman\'s father. Hanuman then shrinks small enough to slip his bonds, grows again, and kills the guards.',
    significance:
      'A punishment designed to humiliate becomes both a reconnaissance of the city\'s defences and the weapon that destroys them.',
    causes: ['sundara-court-speech'],
  },
  {
    id: 'sundara-lanka-burned',
    title: 'Lanka Set Alight from Roof to Roof',
    kanda: 'sundara',
    sarga: '5.54-55',
    order: 478,
    characterIds: ['hanuman', 'ravana', 'sita', 'agni', 'vayu', 'vibhishana'],
    location: 'The city of Lanka',
    description:
      'Reasoning aloud that the grove is wrecked, the champions dead and a part of the army destroyed, and that only the fortress is left, Hanuman leaps from mansion to mansion with his burning tail and fires the city — Prahasta\'s house, Mahaparshva\'s, Indrajit\'s, Kumbhakarna\'s, Vibhishana\'s spared. The wind takes the flames and Valmiki compares the blaze to the fire at the end of an age; gold runs molten out of the walls, and the roar of collapsing palaces and screaming is heard across the water. Then Hanuman is seized by horror at the thought that Sita was in the grove and may have burned, and only the charanas\' voices and the omens convince him she is unharmed; he returns to the simsupa to see her alive before he leaves.',
    significance:
      'Rama\'s envoy has, alone and before the war begins, burned the capital of the enemy and proved the city is not impregnable.',
    shloka: {
      devanagari:
        'श्वसनेन च संयोगादतिवेगो महाबलः |\nकालाग्निरिव जज्वाल प्रावर्धत हुताशनः ||',
      transliteration:
        'śvasanena ca saṃyogād ativego mahābalaḥ |\nkālāgnir iva jajvāla prāvardhata hutāśanaḥ ||',
      translation:
        'Joined with the wind, swift and mighty, the fire blazed up like the fire of universal destruction and grew and grew.',
      ref: '5.54.21',
      context: 'The burning of Lanka, as the wind feeds the flames from Hanuman\'s tail.',
    },
    causes: ['sundara-tail-set-afire'],
  },
  {
    id: 'sundara-return-and-madhuvana',
    title: 'The Return Leap and the Plundering of Madhuvana',
    kanda: 'sundara',
    sarga: '5.56-62',
    order: 486,
    characterIds: ['hanuman', 'angada', 'jambavan', 'dadhimukha', 'sugriva', 'mainda', 'dvivida', 'nila', 'tara'],
    location: 'Lanka to Mount Mahendra, then the honey-grove of Kishkindha',
    description:
      'Hanuman climbs Mount Arishta, presses it flat beneath him and leaps north, and the party waiting on the far shore hears his roar before they see him. He lands on Mahendra, and the vanaras swarm over him with fruit and roots. On the way back to Kishkindha the whole party breaks into Madhuvana, Sugriva\'s private honey-grove, and gets uproariously drunk; when the keeper Dadhimukha tries to stop them they beat him and Angada tells him to be quiet. Dadhimukha carries the complaint to Sugriva, who hears it and laughs, because, as he says, only vanaras who have succeeded would dare to wreck his garden.',
    significance:
      'Sugriva deduces the success of the mission from the indiscipline of the returning party before a word of report is made.',
    causes: ['sundara-lanka-burned'],
  },
  {
    id: 'sundara-shout-of-victory',
    title: '"Sita Has Been Seen"',
    kanda: 'sundara',
    sarga: '5.57-68',
    order: 492,
    characterIds: ['hanuman', 'rama', 'lakshmana', 'sugriva', 'angada', 'jambavan', 'sita'],
    location: 'Mount Prasravana, Kishkindha',
    description:
      'Hanuman salutes the elders and announces the result in three words before any narrative — drishta devi, "the queen has been seen." Brought before Rama, he faces south and bows to Sita before speaking, then reports everything: the grove, the simsupa, the rakshasis, the two-month deadline, her refusal to be carried off, and her words that she will not live another month. He gives Rama the chudamani, and Rama holds it and weeps, saying his father-in-law Janaka had bound it on her head. The crow of Chitrakuta, repeated back to him as Sita sent it, removes any possible doubt.',
    significance:
      'The news that ends the search and opens the war; from this moment the question is no longer where Sita is but how to cross the sea.',
    shloka: {
      devanagari:
        'स ताभ्यां पूजितः पूज्यः कपिभिश्च प्रसादितः |\nदृष्टा देवीति विक्रान्तः संक्षेपेण न्यवेदयत् ||',
      transliteration:
        'sa tābhyāṃ pūjitaḥ pūjyaḥ kapibhiś ca prasāditaḥ |\ndṛṣṭā devīti vikrāntaḥ saṃkṣepeṇa nyavedayat ||',
      translation:
        'Honoured by those two and welcomed by the vanaras, that valiant one, himself worthy of honour, announced it in brief: "The queen has been seen."',
      ref: '5.57.35',
      context: 'Hanuman reporting to Jambavan and Angada on Mount Mahendra after his return.',
    },
    causes: ['sundara-return-and-madhuvana', 'sundara-chudamani-given'],
  },
];
