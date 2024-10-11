export const CATEGORIES = {
  game: "game",
  website: "website",
  api: "api",
  webApp: "web app",
  fullstack: "fullstack"
}

export const PROJECT_FILTERS = {
  all:  "all",
  fullstack: CATEGORIES.fullstack,
  game: CATEGORIES.game,
  api: CATEGORIES.api,
  website: CATEGORIES.website,
  webApp: CATEGORIES.webApp,
  // hooks: "hooks",
  // classes: "classes",
}

export const projectsData = [
  {
    id: 1,
    name: "Todo List App (2020)",
    category: [CATEGORIES.webApp],
    techs: ["React", "classes"],
    img: "media/todo_list_small.png",

    description: {
      en: "Keeps track of the things you have to do. Built with React.",
      de: "Verfolgt die Dinge, die Sie tun müssen. Mit React erstellt",
    },
    features: {
      en: [
        "Add / Edit / Delete one or all to-dos",
        "Search for a to-do",
        "Check/Uncheck all to-dos",
        "Show / Hide completed to-dos",
        "To-dos saved to local Storage",
      ],
      de: [
        "Hinzufügen / Bearbeiten / Löschen einer oder aller Aufgaben",
        "Suche nach einer Aufgabe",
        "Alle Aufgaben aktivieren / deaktivieren",
        "Aufgaben erledigen / ausblenden",
        "Im lokalen Speicher speichern",
      ],
    },
    techInfo: {
      main: "REACT (classes)",
      styled: "SASS (scss)",
      tested: "",
      responsive: true,
      specsText: { en: "", de: "" },
      specs: ["forwardRef", "Prop-types", "Flexbox", "Local Storage"],
      thirdParty: ["React-modal", "UUID"],
      notes: { en: "", de: "" },
      tags: ["React", "JavaScript", "HTML5", "SASS", "Local Storage"]
    },
    live: ["https://stoic-fermi-dcf04f.netlify.app/"],
    code: ["https://github.com/hugCarvalho/todoList"],
  },
  {
    id: 2,
    name: "Weather App (2020)",
    category: [CATEGORIES.api, CATEGORIES.webApp],
    techs: ["React", "API"],
    img: "media/weather_night_small.png",

    description: {
      en:
        "Displays weather data from OpenWeather API: forecast up to 3 days divided into 3 hours intervals. Built with React.",
      de:
        "Zeigt Wetterdaten von der OpenWeather-API an: Vorhersage von bis zu 3 Tagen in Intervallen von 3 Stunden. Mit React erstellt",
    },
    features: {
      en: [
        "Search for a city to display the weather",
        "Save up to 3 cities for fast access in local storage",
        "Set up a city to load at startup",
        "3 days Weather forecast, every 3 hours options ",
        "Displays actual and real feel temperature in Celsius or Fahrenheit",
        "Displays wind speed in kilometers or miles",
        "Displays wind direction (cardinal points + arrow pointer)",
      ],
      de: [
        "Gewünschte Stadt in das Suchfeld eingeben, um für diese das Wetter anzuzeigen",
        "Bis zu 3 Städte speichern für den schnellen Zugriff (lokalen Speicher)",
        "Zeigt die tatsächliche und reale Gefühlstemperatur in Celsius oder Fahrenheit an",
        "Zeigt die Windgeschwindigkeit an",
        "Zeigt die Windrichtung",
      ],
    },
    techInfo: {
      main: "REACT (Hooks)",
      styled: "SASS (scss) and Styled Components",
      tested: "",
      responsive: true,
      specsText: { en: "Open Weather API", de: "Open Weather API" },
      specs: [
        "useState",
        "useReducer",
        "useEffect",
        "useContext",
        "Grid + Flexbox",
        "Local Storage",
        "API",
      ],
      thirdParty: ["Tippy.js", "React-spinners", "React-Moment"],
      notes: { en: "", de: "" },
      tags: ["React", "JavaScript", "HTML5", "SASS", "API", "Local storage"]
    },
    live: ["https://awesome-payne-8bf6bd.netlify.app/"],
    code: ["https://github.com/hugCarvalho/weather_api"],
  },
  {
    id: 4,
    name: "Portfolio Website (2020)",
    category: [CATEGORIES.website],
    techs: ["React", "hooks", "Tests"],

    img: "media/portfolio_4.png",
    description: {
      en: "This website... Built with React.",
      de: "Diese Website... mit React erstellt",
    },
    features: {
      en: [
        "Card content data dynamically generated, as to simulate possible real life cases, i.e, getting data from an array of objects",
        "Dynamic calculation of card heights based on biggest",
        "CSS animations and transitions",
        "Filter projects",
        "Scroll to top",
        "Available in English and German",
      ],
      de: [
        "Die Karteninhaltsdaten werden dynamisch generiert, um einen Datenabruf zu simulieren",
        "Dynamische Berechnung der Kartenhöhen basierend auf der größten",
        "CSS animations und transitions",
        "Filter Projekte",
        "To-top scrollen",
        "Verfügbar in Englisch und Deutsch",
      ],
    },
    techInfo: {
      main: "REACT (Hooks)",
      styled: "SASS (scss)",
      tested: "React Testing Library",
      responsive: true,
      specsText: { en: "Semantic HTML", de: "Semantic HTML"},
      specs: [
        "useState",
        "useEffect",
        "useContext",
        "useLocation",
        "Flexbox",
        "Unit and integration tests ",
      ],
      thirdParty: ["React-router", "React-use"],
      notes: { en: "", de: "" },
      tags: ["React", "JavaScript", "Semantic HTML", "SASS", "React Testing Library", "React Rounter"]
    },
    live: ["https://hugcarvalho.github.io/portfolio"],
    code: ["https://github.com/hugCarvalho/portfolio"],
  },
  {
    id: 5,
    name: "Word Scrambler Game (2021)",
    category: [CATEGORIES.game],
    techs: ["React", "hooks"],

    img: "media/word-scrambler-game.png",
    description: {
      en:
        "Rich featured game with 3 levels of difficulty. Try your skill by guessing the scrambled word for the chosen category within the alloted time. If you don't use hints, you'll score more points and if you don't know the word you can dynamically look it up.",
      de:
        "Reichhaltiges Spiel mit 3 Schwierigkeitsgraden. Stellen Sie Ihr Geschick unter Beweis, indem Sie das verschlüsselte Wort für die gewählte Kategorie innerhalb der vorgegebenen Zeit erraten. Wenn du keine Hinweise verwendest, erhältst du mehr Punkte und wenn du das Wort nicht kennst, kannst du es dynamisch nachschlagen.",
    },
    features: {
      en: [
        "Customizable options",
        "Local Storage",
        "4 play levels",
        "Limited number of guesses",
        "Countdown",
        "Score if game won",
        "Scrambled word (letters are mixed up)",
        "2 types of hints",
        "Sliding instructions effect",
        "Sound effects (at game end)",
        "Dynamic lookup of word in wikipedia",
        "High Score tables for each level",
      ],
      de: [
        "Individualisierbare Optionen",
        "Lokaler Speicher",
        "4 Spielstufen",
        "Begrenzte Anzahl von Vermutungen",
        "Countdown",
        "Punktestand bei gewonnenem Spiel",
        "Verschlüsselte Wörter (Buchstaben werden vertauscht)",
        "Zwei Arten von Hinweisen",
        "Toneffekte (bei Spielende)",
        "Dynamisches Nachschlagen des Wortes in Wikipedia",
        "Highscore-Tabellen für jedes Level",
      ],
    },
    techInfo: {
      main: "REACT (Hooks)",
      styled: "SASS (scss) and Styled Components",
      tested: "Jest and React Testing Library",
      responsive: false,
      specsText: { en: "Semantic HTML", de: "Semantic HTML" },
      specs: [
        "Local storage",
        "Flexbox",
        // "useEffect",
        // "useContext",
        // "useLocation",
        // "Unit and integration tests ",
      ],
      thirdParty: ["React Router", "React Tooltip"],
      notes: { en: "", de: "" },
      tags: ["React", "JavaScript", "Semantic HTML", "SASS", "Jest", "React Testing Library", "React Rounter"]
    },
    live: ["https://condescending-raman-a3f123.netlify.app/"],
    code: ["https://github.com/hugCarvalho/wordScrambler"],
  },
  {
    id: 6,
    name: "Cafes & You (2024)",
    category: [CATEGORIES.fullstack, CATEGORIES.api, CATEGORIES.webApp],
    techs: ["React", "hooks"],

    img: "media/word-scrambler-game.png",
    description: {
      en:
        "Rich featured game with 3 levels of difficulty. Try your skill by guessing the scrambled word for the chosen category within the alloted time. If you don't use hints, you'll score more points and if you don't know the word you can dynamically look it up.",
      de:
        "Reichhaltiges Spiel mit 3 Schwierigkeitsgraden. Stellen Sie Ihr Geschick unter Beweis, indem Sie das verschlüsselte Wort für die gewählte Kategorie innerhalb der vorgegebenen Zeit erraten. Wenn du keine Hinweise verwendest, erhältst du mehr Punkte und wenn du das Wort nicht kennst, kannst du es dynamisch nachschlagen.",
    },
    features: {
      en: [
        "Customizable options",
        "Local Storage",
        "4 play levels",
        "Limited number of guesses",
        "Countdown",
        "Score if game won",
        "Scrambled word (letters are mixed up)",
        "2 types of hints",
        "Sliding instructions effect",
        "Sound effects (at game end)",
        "Dynamic lookup of word in wikipedia",
        "High Score tables for each level",
      ],
      de: [
        "Individualisierbare Optionen",
        "Lokaler Speicher",
        "4 Spielstufen",
        "Begrenzte Anzahl von Vermutungen",
        "Countdown",
        "Punktestand bei gewonnenem Spiel",
        "Verschlüsselte Wörter (Buchstaben werden vertauscht)",
        "Zwei Arten von Hinweisen",
        "Toneffekte (bei Spielende)",
        "Dynamisches Nachschlagen des Wortes in Wikipedia",
        "Highscore-Tabellen für jedes Level",
      ],
    },
    techInfo: {
      main: "REACT (Hooks)",
      styled: "SASS (scss) and Styled Components",
      tested: "Jest and React Testing Library",
      responsive: false,
      specsText: { en: "Semantic HTML", de: "Semantic HTML" },
      specs: [
        "Local storage",
        "Flexbox",
        // "useEffect",
        // "useContext",
        // "useLocation",
        // "Unit and integration tests ",
      ],
      thirdParty: ["React Router", "React Tooltip"],
      notes: { en: "", de: "" },
      tags: ["React", "JavaScript", "Semantic HTML", "SASS", "Jest", "React Testing Library", "React Rounter"]
    },
    live: ["https://condescending-raman-a3f123.netlify.app/"],
    code: ["https://github.com/hugCarvalho/wordScrambler"],
  },
];
