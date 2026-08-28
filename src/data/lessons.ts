import { getUnitById } from "@/data/units";
import type { LanguageCode, Lesson } from "@/types/learning";

export const lessons: Lesson[] = [
  // ---------------------------------------------------------------------
  // Spanish — Basics (es-u1)
  // ---------------------------------------------------------------------
  {
    id: "es-u1-l1",
    unitId: "es-u1",
    languageId: "es",
    order: 1,
    title: "Say Hello",
    goal: "Greet someone and introduce yourself in Spanish",
    type: "vocabulary",
    xpReward: 10,
    vocabulary: [
      {
        id: "es-u1-l1-v1",
        word: "Hola",
        translation: "Hello",
        pronunciation: "OH-lah",
      },
      {
        id: "es-u1-l1-v2",
        word: "Adiós",
        translation: "Goodbye",
        pronunciation: "ah-dee-OHS",
      },
      {
        id: "es-u1-l1-v3",
        word: "Gracias",
        translation: "Thank you",
        pronunciation: "GRAH-see-ahs",
      },
    ],
    phrases: [
      {
        id: "es-u1-l1-p1",
        text: "¿Cómo estás?",
        translation: "How are you?",
        context: "Casual greeting between friends",
      },
      {
        id: "es-u1-l1-p2",
        text: "Me llamo Ana.",
        translation: "My name is Ana.",
        context: "Introducing yourself",
      },
    ],
    activities: [
      {
        id: "es-u1-l1-a1",
        type: "multiple_choice",
        prompt: 'What does "Hola" mean?',
        options: ["Hello", "Goodbye", "Please"],
        correctAnswer: "Hello",
      },
      {
        id: "es-u1-l1-a2",
        type: "translate",
        prompt: "Translate: Thank you",
        correctAnswer: "Gracias",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a friendly, patient Spanish teacher named Sofia. Speak slowly, use simple sentences, and gently correct pronunciation mistakes without discouraging the learner.",
      welcomeMessage:
        "¡Hola! I'm Sofia, your Spanish teacher. Today we'll learn how to greet people. Ready?",
      teachingPoints: [
        "Practice saying hola and adiós out loud",
        "Explain when to use gracias",
        "Encourage the learner to introduce themselves",
      ],
    },
  },
  {
    id: "es-u1-l2",
    unitId: "es-u1",
    languageId: "es",
    order: 2,
    title: "Count to Three",
    goal: "Count from one to three in Spanish",
    type: "audio",
    xpReward: 10,
    vocabulary: [
      {
        id: "es-u1-l2-v1",
        word: "Uno",
        translation: "One",
        pronunciation: "OO-noh",
      },
      {
        id: "es-u1-l2-v2",
        word: "Dos",
        translation: "Two",
        pronunciation: "dohs",
      },
      {
        id: "es-u1-l2-v3",
        word: "Tres",
        translation: "Three",
        pronunciation: "trehs",
      },
    ],
    phrases: [
      {
        id: "es-u1-l2-p1",
        text: "¿Cuántos años tienes?",
        translation: "How old are you?",
        context: "Asking someone's age",
      },
      {
        id: "es-u1-l2-p2",
        text: "Tengo veinte años.",
        translation: "I am twenty years old.",
        context: "Answering about age",
      },
    ],
    activities: [
      {
        id: "es-u1-l2-a1",
        type: "multiple_choice",
        prompt: 'What is "tres" in English?',
        options: ["Two", "Three", "Four"],
        correctAnswer: "Three",
      },
      {
        id: "es-u1-l2-a2",
        type: "translate",
        prompt: "Translate: One",
        correctAnswer: "Uno",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a friendly, patient Spanish teacher named Sofia. Speak slowly, use simple sentences, and gently correct pronunciation mistakes without discouraging the learner.",
      welcomeMessage: "¡Hola de nuevo! Let's count together from one to three.",
      teachingPoints: [
        "Count slowly from uno to tres",
        "Ask the learner their age using cuántos años tienes",
        "Repeat numbers the learner struggles with",
      ],
    },
  },
  {
    id: "es-u1-l3",
    unitId: "es-u1",
    languageId: "es",
    order: 3,
    title: "Meet the Family",
    goal: "Name close family members in Spanish",
    type: "audio",
    xpReward: 10,
    vocabulary: [
      {
        id: "es-u1-l3-v1",
        word: "Madre",
        translation: "Mother",
        pronunciation: "MAH-dreh",
      },
      {
        id: "es-u1-l3-v2",
        word: "Padre",
        translation: "Father",
        pronunciation: "PAH-dreh",
      },
      {
        id: "es-u1-l3-v3",
        word: "Hermano",
        translation: "Brother",
        pronunciation: "ehr-MAH-noh",
      },
    ],
    phrases: [
      {
        id: "es-u1-l3-p1",
        text: "Esta es mi madre.",
        translation: "This is my mother.",
        context: "Introducing family",
      },
      {
        id: "es-u1-l3-p2",
        text: "Tengo un hermano.",
        translation: "I have one brother.",
        context: "Talking about siblings",
      },
    ],
    activities: [
      {
        id: "es-u1-l3-a1",
        type: "multiple_choice",
        prompt: 'What does "padre" mean?',
        options: ["Father", "Mother", "Brother"],
        correctAnswer: "Father",
      },
      {
        id: "es-u1-l3-a2",
        type: "translate",
        prompt: "Translate: brother",
        correctAnswer: "Hermano",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a friendly, patient Spanish teacher named Sofia. Speak slowly, use simple sentences, and gently correct pronunciation mistakes without discouraging the learner.",
      welcomeMessage: "Let's talk about family! Who is in your family?",
      teachingPoints: [
        "Introduce madre, padre, hermano",
        "Ask the learner to describe their own family",
        "Model the sentence Esta es mi...",
      ],
    },
  },

  // ---------------------------------------------------------------------
  // Spanish — Everyday Phrases (es-u2)
  // ---------------------------------------------------------------------
  {
    id: "es-u2-l1",
    unitId: "es-u2",
    languageId: "es",
    order: 1,
    title: "Order Food",
    goal: "Order a simple meal in Spanish",
    type: "vocabulary",
    xpReward: 10,
    vocabulary: [
      {
        id: "es-u2-l1-v1",
        word: "Agua",
        translation: "Water",
        pronunciation: "AH-gwah",
      },
      {
        id: "es-u2-l1-v2",
        word: "Pan",
        translation: "Bread",
        pronunciation: "pahn",
      },
      {
        id: "es-u2-l1-v3",
        word: "Café",
        translation: "Coffee",
        pronunciation: "kah-FEH",
      },
    ],
    phrases: [
      {
        id: "es-u2-l1-p1",
        text: "Quiero un café, por favor.",
        translation: "I would like a coffee, please.",
        context: "Ordering at a cafe",
      },
      {
        id: "es-u2-l1-p2",
        text: "La cuenta, por favor.",
        translation: "The bill, please.",
        context: "Asking for the check",
      },
    ],
    activities: [
      {
        id: "es-u2-l1-a1",
        type: "multiple_choice",
        prompt: 'What is "agua"?',
        options: ["Water", "Bread", "Coffee"],
        correctAnswer: "Water",
      },
      {
        id: "es-u2-l1-a2",
        type: "translate",
        prompt: "Translate: The bill, please.",
        correctAnswer: "La cuenta, por favor.",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a friendly, patient Spanish teacher named Sofia. Speak slowly, use simple sentences, and gently correct pronunciation mistakes without discouraging the learner.",
      welcomeMessage: "¡Vamos a pedir comida! Let's practice ordering food.",
      teachingPoints: [
        "Teach agua, pan, café",
        "Practice the phrase quiero...por favor",
        "Role-play ordering at a cafe",
      ],
    },
  },
  {
    id: "es-u2-l2",
    unitId: "es-u2",
    languageId: "es",
    order: 2,
    title: "Ask for Directions",
    goal: "Ask for and understand basic directions",
    type: "audio",
    xpReward: 10,
    vocabulary: [
      {
        id: "es-u2-l2-v1",
        word: "Izquierda",
        translation: "Left",
        pronunciation: "ees-kee-EHR-dah",
      },
      {
        id: "es-u2-l2-v2",
        word: "Derecha",
        translation: "Right",
        pronunciation: "deh-REH-chah",
      },
      {
        id: "es-u2-l2-v3",
        word: "Aquí",
        translation: "Here",
        pronunciation: "ah-KEE",
      },
    ],
    phrases: [
      {
        id: "es-u2-l2-p1",
        text: "¿Dónde está el baño?",
        translation: "Where is the bathroom?",
        context: "Asking for a location",
      },
      {
        id: "es-u2-l2-p2",
        text: "Está a la derecha.",
        translation: "It's on the right.",
        context: "Giving directions",
      },
    ],
    activities: [
      {
        id: "es-u2-l2-a1",
        type: "multiple_choice",
        prompt: '"Derecha" means...',
        options: ["Right", "Left", "Straight"],
        correctAnswer: "Right",
      },
      {
        id: "es-u2-l2-a2",
        type: "translate",
        prompt: "Translate: Where is...?",
        correctAnswer: "¿Dónde está...?",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a friendly, patient Spanish teacher named Sofia. Speak slowly, use simple sentences, and gently correct pronunciation mistakes without discouraging the learner.",
      welcomeMessage: "Let's learn how to find your way around!",
      teachingPoints: [
        "Teach izquierda, derecha, aquí",
        "Practice asking dónde está",
        "Give simple direction instructions to follow",
      ],
    },
  },
  {
    id: "es-u2-l3",
    unitId: "es-u2",
    languageId: "es",
    order: 3,
    title: "Go Shopping",
    goal: "Ask about prices while shopping",
    type: "audio",
    xpReward: 10,
    vocabulary: [
      {
        id: "es-u2-l3-v1",
        word: "Tienda",
        translation: "Store",
        pronunciation: "tee-EHN-dah",
      },
      {
        id: "es-u2-l3-v2",
        word: "Dinero",
        translation: "Money",
        pronunciation: "dee-NEH-roh",
      },
      {
        id: "es-u2-l3-v3",
        word: "Barato",
        translation: "Cheap",
        pronunciation: "bah-RAH-toh",
      },
    ],
    phrases: [
      {
        id: "es-u2-l3-p1",
        text: "¿Cuánto cuesta esto?",
        translation: "How much is this?",
        context: "Asking a price",
      },
      {
        id: "es-u2-l3-p2",
        text: "Es muy caro.",
        translation: "It's very expensive.",
        context: "Reacting to a price",
      },
    ],
    activities: [
      {
        id: "es-u2-l3-a1",
        type: "multiple_choice",
        prompt: '"Dinero" means...',
        options: ["Money", "Store", "Price"],
        correctAnswer: "Money",
      },
      {
        id: "es-u2-l3-a2",
        type: "translate",
        prompt: "Translate: How much is this?",
        correctAnswer: "¿Cuánto cuesta esto?",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a friendly, patient Spanish teacher named Sofia. Speak slowly, use simple sentences, and gently correct pronunciation mistakes without discouraging the learner.",
      welcomeMessage: "Ready to go shopping in Spanish?",
      teachingPoints: [
        "Teach tienda, dinero, barato",
        "Practice cuánto cuesta",
        "React to prices using caro and barato",
      ],
    },
  },

  // ---------------------------------------------------------------------
  // French — Basics (fr-u1)
  // ---------------------------------------------------------------------
  {
    id: "fr-u1-l1",
    unitId: "fr-u1",
    languageId: "fr",
    order: 1,
    title: "Say Hello",
    goal: "Greet someone and introduce yourself in French",
    type: "vocabulary",
    xpReward: 10,
    vocabulary: [
      {
        id: "fr-u1-l1-v1",
        word: "Bonjour",
        translation: "Hello",
        pronunciation: "bohn-ZHOOR",
      },
      {
        id: "fr-u1-l1-v2",
        word: "Au revoir",
        translation: "Goodbye",
        pronunciation: "oh ruh-VWAHR",
      },
      {
        id: "fr-u1-l1-v3",
        word: "Merci",
        translation: "Thank you",
        pronunciation: "mehr-SEE",
      },
    ],
    phrases: [
      {
        id: "fr-u1-l1-p1",
        text: "Comment ça va?",
        translation: "How are you?",
        context: "Casual greeting between friends",
      },
      {
        id: "fr-u1-l1-p2",
        text: "Je m'appelle Marie.",
        translation: "My name is Marie.",
        context: "Introducing yourself",
      },
    ],
    activities: [
      {
        id: "fr-u1-l1-a1",
        type: "multiple_choice",
        prompt: 'What does "Bonjour" mean?',
        options: ["Hello", "Goodbye", "Please"],
        correctAnswer: "Hello",
      },
      {
        id: "fr-u1-l1-a2",
        type: "translate",
        prompt: "Translate: Thank you",
        correctAnswer: "Merci",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a warm, encouraging French teacher named Claire. Speak slowly and clearly, and celebrate small wins.",
      welcomeMessage:
        "Bonjour! I'm Claire, your French teacher. Let's learn to say hello!",
      teachingPoints: [
        "Practice bonjour and au revoir",
        "Explain when to use merci",
        "Encourage the learner to introduce themselves",
      ],
    },
  },
  {
    id: "fr-u1-l2",
    unitId: "fr-u1",
    languageId: "fr",
    order: 2,
    title: "Count to Three",
    goal: "Count from one to three in French",
    type: "audio",
    xpReward: 10,
    vocabulary: [
      {
        id: "fr-u1-l2-v1",
        word: "Un",
        translation: "One",
        pronunciation: "uhn",
      },
      {
        id: "fr-u1-l2-v2",
        word: "Deux",
        translation: "Two",
        pronunciation: "duh",
      },
      {
        id: "fr-u1-l2-v3",
        word: "Trois",
        translation: "Three",
        pronunciation: "trwah",
      },
    ],
    phrases: [
      {
        id: "fr-u1-l2-p1",
        text: "Quel âge as-tu?",
        translation: "How old are you?",
        context: "Asking someone's age",
      },
      {
        id: "fr-u1-l2-p2",
        text: "J'ai vingt ans.",
        translation: "I am twenty years old.",
        context: "Answering about age",
      },
    ],
    activities: [
      {
        id: "fr-u1-l2-a1",
        type: "multiple_choice",
        prompt: '"Trois" means...',
        options: ["Two", "Three", "Four"],
        correctAnswer: "Three",
      },
      {
        id: "fr-u1-l2-a2",
        type: "translate",
        prompt: "Translate: One",
        correctAnswer: "Un",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a warm, encouraging French teacher named Claire. Speak slowly and clearly, and celebrate small wins.",
      welcomeMessage: "Let's count together from one to three in French.",
      teachingPoints: [
        "Count slowly from un to trois",
        "Ask the learner's age",
        "Repeat numbers that are tricky",
      ],
    },
  },
  {
    id: "fr-u1-l3",
    unitId: "fr-u1",
    languageId: "fr",
    order: 3,
    title: "Meet the Family",
    goal: "Name close family members in French",
    type: "audio",
    xpReward: 10,
    vocabulary: [
      {
        id: "fr-u1-l3-v1",
        word: "Mère",
        translation: "Mother",
        pronunciation: "mehr",
      },
      {
        id: "fr-u1-l3-v2",
        word: "Père",
        translation: "Father",
        pronunciation: "pehr",
      },
      {
        id: "fr-u1-l3-v3",
        word: "Frère",
        translation: "Brother",
        pronunciation: "frehr",
      },
    ],
    phrases: [
      {
        id: "fr-u1-l3-p1",
        text: "Voici ma mère.",
        translation: "This is my mother.",
        context: "Introducing family",
      },
      {
        id: "fr-u1-l3-p2",
        text: "J'ai un frère.",
        translation: "I have one brother.",
        context: "Talking about siblings",
      },
    ],
    activities: [
      {
        id: "fr-u1-l3-a1",
        type: "multiple_choice",
        prompt: '"Père" means...',
        options: ["Father", "Mother", "Brother"],
        correctAnswer: "Father",
      },
      {
        id: "fr-u1-l3-a2",
        type: "translate",
        prompt: "Translate: brother",
        correctAnswer: "Frère",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a warm, encouraging French teacher named Claire. Speak slowly and clearly, and celebrate small wins.",
      welcomeMessage: "Let's talk about family! Qui est dans ta famille?",
      teachingPoints: [
        "Introduce mère, père, frère",
        "Ask about the learner's family",
        "Model Voici ma/mon...",
      ],
    },
  },

  // ---------------------------------------------------------------------
  // French — Everyday Phrases (fr-u2)
  // ---------------------------------------------------------------------
  {
    id: "fr-u2-l1",
    unitId: "fr-u2",
    languageId: "fr",
    order: 1,
    title: "Order Food",
    goal: "Order a simple meal in French",
    type: "vocabulary",
    xpReward: 10,
    vocabulary: [
      {
        id: "fr-u2-l1-v1",
        word: "Eau",
        translation: "Water",
        pronunciation: "oh",
      },
      {
        id: "fr-u2-l1-v2",
        word: "Pain",
        translation: "Bread",
        pronunciation: "pan",
      },
      {
        id: "fr-u2-l1-v3",
        word: "Café",
        translation: "Coffee",
        pronunciation: "kah-FEH",
      },
    ],
    phrases: [
      {
        id: "fr-u2-l1-p1",
        text: "Je voudrais un café, s'il vous plaît.",
        translation: "I would like a coffee, please.",
        context: "Ordering at a cafe",
      },
      {
        id: "fr-u2-l1-p2",
        text: "L'addition, s'il vous plaît.",
        translation: "The bill, please.",
        context: "Asking for the check",
      },
    ],
    activities: [
      {
        id: "fr-u2-l1-a1",
        type: "multiple_choice",
        prompt: '"Eau" means...',
        options: ["Water", "Bread", "Coffee"],
        correctAnswer: "Water",
      },
      {
        id: "fr-u2-l1-a2",
        type: "translate",
        prompt: "Translate: The bill, please.",
        correctAnswer: "L'addition, s'il vous plaît.",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a warm, encouraging French teacher named Claire. Speak slowly and clearly, and celebrate small wins.",
      welcomeMessage: "Allons commander de la nourriture! Let's order food.",
      teachingPoints: [
        "Teach eau, pain, café",
        "Practice je voudrais...s'il vous plaît",
        "Role-play ordering at a cafe",
      ],
    },
  },
  {
    id: "fr-u2-l2",
    unitId: "fr-u2",
    languageId: "fr",
    order: 2,
    title: "Ask for Directions",
    goal: "Ask for and understand basic directions",
    type: "audio",
    xpReward: 10,
    vocabulary: [
      {
        id: "fr-u2-l2-v1",
        word: "Gauche",
        translation: "Left",
        pronunciation: "gohsh",
      },
      {
        id: "fr-u2-l2-v2",
        word: "Droite",
        translation: "Right",
        pronunciation: "drwaht",
      },
      {
        id: "fr-u2-l2-v3",
        word: "Ici",
        translation: "Here",
        pronunciation: "ee-SEE",
      },
    ],
    phrases: [
      {
        id: "fr-u2-l2-p1",
        text: "Où sont les toilettes?",
        translation: "Where is the bathroom?",
        context: "Asking for a location",
      },
      {
        id: "fr-u2-l2-p2",
        text: "C'est à droite.",
        translation: "It's on the right.",
        context: "Giving directions",
      },
    ],
    activities: [
      {
        id: "fr-u2-l2-a1",
        type: "multiple_choice",
        prompt: '"Droite" means...',
        options: ["Right", "Left", "Straight"],
        correctAnswer: "Right",
      },
      {
        id: "fr-u2-l2-a2",
        type: "translate",
        prompt: "Translate: Where is...?",
        correctAnswer: "Où est...?",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a warm, encouraging French teacher named Claire. Speak slowly and clearly, and celebrate small wins.",
      welcomeMessage: "Let's learn to find your way in French!",
      teachingPoints: [
        "Teach gauche, droite, ici",
        "Practice asking où est",
        "Give simple directions to follow",
      ],
    },
  },
  {
    id: "fr-u2-l3",
    unitId: "fr-u2",
    languageId: "fr",
    order: 3,
    title: "Go Shopping",
    goal: "Ask about prices while shopping",
    type: "audio",
    xpReward: 10,
    vocabulary: [
      {
        id: "fr-u2-l3-v1",
        word: "Magasin",
        translation: "Store",
        pronunciation: "mah-gah-ZAN",
      },
      {
        id: "fr-u2-l3-v2",
        word: "Argent",
        translation: "Money",
        pronunciation: "ar-ZHAHN",
      },
      {
        id: "fr-u2-l3-v3",
        word: "Pas cher",
        translation: "Cheap",
        pronunciation: "pah SHEHR",
      },
    ],
    phrases: [
      {
        id: "fr-u2-l3-p1",
        text: "Combien ça coûte?",
        translation: "How much is this?",
        context: "Asking a price",
      },
      {
        id: "fr-u2-l3-p2",
        text: "C'est très cher.",
        translation: "It's very expensive.",
        context: "Reacting to a price",
      },
    ],
    activities: [
      {
        id: "fr-u2-l3-a1",
        type: "multiple_choice",
        prompt: '"Argent" means...',
        options: ["Money", "Store", "Price"],
        correctAnswer: "Money",
      },
      {
        id: "fr-u2-l3-a2",
        type: "translate",
        prompt: "Translate: How much is this?",
        correctAnswer: "Combien ça coûte?",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a warm, encouraging French teacher named Claire. Speak slowly and clearly, and celebrate small wins.",
      welcomeMessage:
        "Prêt à faire du shopping? Ready to go shopping in French?",
      teachingPoints: [
        "Teach magasin, argent, pas cher",
        "Practice combien ça coûte",
        "React to prices using cher and pas cher",
      ],
    },
  },

  // ---------------------------------------------------------------------
  // Japanese — Basics (ja-u1)
  // ---------------------------------------------------------------------
  {
    id: "ja-u1-l1",
    unitId: "ja-u1",
    languageId: "ja",
    order: 1,
    title: "Say Hello",
    goal: "Greet someone and introduce yourself in Japanese",
    type: "vocabulary",
    xpReward: 10,
    vocabulary: [
      {
        id: "ja-u1-l1-v1",
        word: "こんにちは",
        translation: "Hello",
        pronunciation: "kon-nichi-wa",
      },
      {
        id: "ja-u1-l1-v2",
        word: "さようなら",
        translation: "Goodbye",
        pronunciation: "sa-yō-na-ra",
      },
      {
        id: "ja-u1-l1-v3",
        word: "ありがとう",
        translation: "Thank you",
        pronunciation: "a-ri-ga-tō",
      },
    ],
    phrases: [
      {
        id: "ja-u1-l1-p1",
        text: "お元気ですか?",
        translation: "How are you?",
        context: "Casual greeting",
      },
      {
        id: "ja-u1-l1-p2",
        text: "私の名前はゆきです。",
        translation: "My name is Yuki.",
        context: "Introducing yourself",
      },
    ],
    activities: [
      {
        id: "ja-u1-l1-a1",
        type: "multiple_choice",
        prompt: 'What does "こんにちは" mean?',
        options: ["Hello", "Goodbye", "Please"],
        correctAnswer: "Hello",
      },
      {
        id: "ja-u1-l1-a2",
        type: "translate",
        prompt: "Translate: Thank you",
        correctAnswer: "ありがとう",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a calm, encouraging Japanese teacher named Yuki. Speak slowly, use simple phrases, and offer romaji hints when needed.",
      welcomeMessage:
        "こんにちは! I'm Yuki, your Japanese teacher. Let's learn to say hello!",
      teachingPoints: [
        "Practice こんにちは and さようなら",
        "Explain when to use ありがとう",
        "Encourage the learner to introduce themselves",
      ],
    },
  },
  {
    id: "ja-u1-l2",
    unitId: "ja-u1",
    languageId: "ja",
    order: 2,
    title: "Count to Three",
    goal: "Count from one to three in Japanese",
    type: "audio",
    xpReward: 10,
    vocabulary: [
      {
        id: "ja-u1-l2-v1",
        word: "一",
        translation: "One",
        pronunciation: "ichi",
      },
      {
        id: "ja-u1-l2-v2",
        word: "二",
        translation: "Two",
        pronunciation: "ni",
      },
      {
        id: "ja-u1-l2-v3",
        word: "三",
        translation: "Three",
        pronunciation: "san",
      },
    ],
    phrases: [
      {
        id: "ja-u1-l2-p1",
        text: "何歳ですか?",
        translation: "How old are you?",
        context: "Asking someone's age",
      },
      {
        id: "ja-u1-l2-p2",
        text: "二十歳です。",
        translation: "I am twenty years old.",
        context: "Answering about age",
      },
    ],
    activities: [
      {
        id: "ja-u1-l2-a1",
        type: "multiple_choice",
        prompt: '"三" means...',
        options: ["Two", "Three", "Four"],
        correctAnswer: "Three",
      },
      {
        id: "ja-u1-l2-a2",
        type: "translate",
        prompt: "Translate: One",
        correctAnswer: "一",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a calm, encouraging Japanese teacher named Yuki. Speak slowly, use simple phrases, and offer romaji hints when needed.",
      welcomeMessage: "Let's count together from one to three in Japanese.",
      teachingPoints: [
        "Count slowly from 一 to 三",
        "Ask the learner's age",
        "Repeat numbers that are tricky",
      ],
    },
  },
  {
    id: "ja-u1-l3",
    unitId: "ja-u1",
    languageId: "ja",
    order: 3,
    title: "Meet the Family",
    goal: "Name close family members in Japanese",
    type: "audio",
    xpReward: 10,
    vocabulary: [
      {
        id: "ja-u1-l3-v1",
        word: "母",
        translation: "Mother",
        pronunciation: "haha",
      },
      {
        id: "ja-u1-l3-v2",
        word: "父",
        translation: "Father",
        pronunciation: "chichi",
      },
      {
        id: "ja-u1-l3-v3",
        word: "兄",
        translation: "Older brother",
        pronunciation: "ani",
      },
    ],
    phrases: [
      {
        id: "ja-u1-l3-p1",
        text: "これは母です。",
        translation: "This is my mother.",
        context: "Introducing family",
      },
      {
        id: "ja-u1-l3-p2",
        text: "兄が一人います。",
        translation: "I have one older brother.",
        context: "Talking about siblings",
      },
    ],
    activities: [
      {
        id: "ja-u1-l3-a1",
        type: "multiple_choice",
        prompt: '"父" means...',
        options: ["Father", "Mother", "Brother"],
        correctAnswer: "Father",
      },
      {
        id: "ja-u1-l3-a2",
        type: "translate",
        prompt: "Translate: older brother",
        correctAnswer: "兄",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a calm, encouraging Japanese teacher named Yuki. Speak slowly, use simple phrases, and offer romaji hints when needed.",
      welcomeMessage: "Let's talk about family! 家族について話しましょう。",
      teachingPoints: [
        "Introduce 母, 父, 兄",
        "Ask about the learner's family",
        "Model これは...です",
      ],
    },
  },

  // ---------------------------------------------------------------------
  // Japanese — Everyday Phrases (ja-u2)
  // ---------------------------------------------------------------------
  {
    id: "ja-u2-l1",
    unitId: "ja-u2",
    languageId: "ja",
    order: 1,
    title: "Order Food",
    goal: "Order a simple meal in Japanese",
    type: "vocabulary",
    xpReward: 10,
    vocabulary: [
      {
        id: "ja-u2-l1-v1",
        word: "水",
        translation: "Water",
        pronunciation: "mizu",
      },
      {
        id: "ja-u2-l1-v2",
        word: "パン",
        translation: "Bread",
        pronunciation: "pan",
      },
      {
        id: "ja-u2-l1-v3",
        word: "コーヒー",
        translation: "Coffee",
        pronunciation: "kōhī",
      },
    ],
    phrases: [
      {
        id: "ja-u2-l1-p1",
        text: "コーヒーをください。",
        translation: "A coffee, please.",
        context: "Ordering at a cafe",
      },
      {
        id: "ja-u2-l1-p2",
        text: "お会計をお願いします。",
        translation: "The bill, please.",
        context: "Asking for the check",
      },
    ],
    activities: [
      {
        id: "ja-u2-l1-a1",
        type: "multiple_choice",
        prompt: '"水" means...',
        options: ["Water", "Bread", "Coffee"],
        correctAnswer: "Water",
      },
      {
        id: "ja-u2-l1-a2",
        type: "translate",
        prompt: "Translate: The bill, please.",
        correctAnswer: "お会計をお願いします。",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a calm, encouraging Japanese teacher named Yuki. Speak slowly, use simple phrases, and offer romaji hints when needed.",
      welcomeMessage: "食べ物を注文しましょう! Let's order food.",
      teachingPoints: [
        "Teach 水, パン, コーヒー",
        "Practice ...をください",
        "Role-play ordering at a cafe",
      ],
    },
  },
  {
    id: "ja-u2-l2",
    unitId: "ja-u2",
    languageId: "ja",
    order: 2,
    title: "Ask for Directions",
    goal: "Ask for and understand basic directions",
    type: "audio",
    xpReward: 10,
    vocabulary: [
      {
        id: "ja-u2-l2-v1",
        word: "左",
        translation: "Left",
        pronunciation: "hidari",
      },
      {
        id: "ja-u2-l2-v2",
        word: "右",
        translation: "Right",
        pronunciation: "migi",
      },
      {
        id: "ja-u2-l2-v3",
        word: "ここ",
        translation: "Here",
        pronunciation: "koko",
      },
    ],
    phrases: [
      {
        id: "ja-u2-l2-p1",
        text: "トイレはどこですか?",
        translation: "Where is the bathroom?",
        context: "Asking for a location",
      },
      {
        id: "ja-u2-l2-p2",
        text: "右にあります。",
        translation: "It's on the right.",
        context: "Giving directions",
      },
    ],
    activities: [
      {
        id: "ja-u2-l2-a1",
        type: "multiple_choice",
        prompt: '"右" means...',
        options: ["Right", "Left", "Straight"],
        correctAnswer: "Right",
      },
      {
        id: "ja-u2-l2-a2",
        type: "translate",
        prompt: "Translate: Where is...?",
        correctAnswer: "...はどこですか?",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a calm, encouraging Japanese teacher named Yuki. Speak slowly, use simple phrases, and offer romaji hints when needed.",
      welcomeMessage: "Let's learn to find your way in Japanese!",
      teachingPoints: [
        "Teach 左, 右, ここ",
        "Practice asking どこですか",
        "Give simple directions to follow",
      ],
    },
  },
  {
    id: "ja-u2-l3",
    unitId: "ja-u2",
    languageId: "ja",
    order: 3,
    title: "Go Shopping",
    goal: "Ask about prices while shopping",
    type: "audio",
    xpReward: 10,
    vocabulary: [
      {
        id: "ja-u2-l3-v1",
        word: "店",
        translation: "Store",
        pronunciation: "mise",
      },
      {
        id: "ja-u2-l3-v2",
        word: "お金",
        translation: "Money",
        pronunciation: "okane",
      },
      {
        id: "ja-u2-l3-v3",
        word: "安い",
        translation: "Cheap",
        pronunciation: "yasui",
      },
    ],
    phrases: [
      {
        id: "ja-u2-l3-p1",
        text: "これはいくらですか?",
        translation: "How much is this?",
        context: "Asking a price",
      },
      {
        id: "ja-u2-l3-p2",
        text: "とても高いです。",
        translation: "It's very expensive.",
        context: "Reacting to a price",
      },
    ],
    activities: [
      {
        id: "ja-u2-l3-a1",
        type: "multiple_choice",
        prompt: '"お金" means...',
        options: ["Money", "Store", "Price"],
        correctAnswer: "Money",
      },
      {
        id: "ja-u2-l3-a2",
        type: "translate",
        prompt: "Translate: How much is this?",
        correctAnswer: "これはいくらですか?",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a calm, encouraging Japanese teacher named Yuki. Speak slowly, use simple phrases, and offer romaji hints when needed.",
      welcomeMessage: "買い物に行きましょう! Ready to go shopping?",
      teachingPoints: [
        "Teach 店, お金, 安い",
        "Practice いくらですか",
        "React to prices using 高い and 安い",
      ],
    },
  },
];

export function getLessonsByLanguage(languageId: LanguageCode): Lesson[] {
  return lessons
    .filter((lesson) => lesson.languageId === languageId)
    .sort((a, b) => {
      const unitOrderDifference =
        (getUnitById(a.unitId)?.order ?? Number.MAX_SAFE_INTEGER) -
        (getUnitById(b.unitId)?.order ?? Number.MAX_SAFE_INTEGER);

      return unitOrderDifference || a.order - b.order;
    });
}

export function getLessonsByUnit(unitId: string): Lesson[] {
  return lessons
    .filter((lesson) => lesson.unitId === unitId)
    .sort((a, b) => a.order - b.order);
}

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === id);
}
