import { SKILL_CATEGORIES } from "../../../config/Skills";

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
//TODO import from skills instead
const react = ["React", SKILL_CATEGORIES.reactEcosystem]
const js =["JavaScript", SKILL_CATEGORIES.reactEcosystem]
const semanticHTML = ["Semantic HTML",SKILL_CATEGORIES.styling]
const sass = ["SASS",SKILL_CATEGORIES.styling]
const localStorage = ["Local Storage", SKILL_CATEGORIES.reactEcosystem]
const styledComponents = ["Styled Components",SKILL_CATEGORIES.styling]

export const PROJECTS_DATA_STRUCTURE = [
  {
    id: "todoList",
    name: "Todo List App",
    datum: 2020,
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
      tags: [react, js, localStorage, semanticHTML, styledComponents, sass]
    },
    live: ["https://stoic-fermi-dcf04f.netlify.app/"],
    code: ["https://github.com/hugCarvalho/todoList"],
  },
  {
    id: "weatherApp",
    name: "Weather App",
    datum: 2020,
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
      tags: [react, js, localStorage, semanticHTML, sass, ["Open Weather API", SKILL_CATEGORIES.all]]
    },
    live: ["https://awesome-payne-8bf6bd.netlify.app/"],
    code: ["https://github.com/hugCarvalho/weather_api"],
  },
  {
    id: "portfolio",
    name: "Portfolio Website",
    datum: 2020,
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
      tags: [
        ["React", SKILL_CATEGORIES.reactEcosystem],
        ["JavaScript", SKILL_CATEGORIES.reactEcosystem],
        ["React Router", SKILL_CATEGORIES.reactEcosystem],
        ["Local Storage", SKILL_CATEGORIES.reactEcosystem],
        ["Semantic HTML",SKILL_CATEGORIES.styling],
        ["SASS",SKILL_CATEGORIES.styling],
        ["React Testing Library", SKILL_CATEGORIES.testing],
      ]
    },
    live: [],
    code: ["https://github.com/hugCarvalho/portfolio"],
  },
  {
    id: "wordScrambler",
    name: "Word Scrambler Game",
    datum: 2021,
    category: [CATEGORIES.game],
    techs: ["React", "hooks"],

    img: [["gameInstructions", "app screenshot"], ["gameWon", "app screenshot"], ["gameLost", "game lost screenshot"], ["gameOptions", "app options screenshot"], ["gameHighscores", "app highscores screenshot"]],
    description: {
      en:
        "Rich featured game with 3 levels of difficulty. Try your skill by guessing the scrambled word for the chosen category within the alloted time. If you don't know the word you can dynamically look it up.",
      de:
        "Reichhaltiges Spiel mit 3 Schwierigkeitsgraden. Stellen Sie Ihr Geschick unter Beweis, indem Sie das verschlüsselte Wort für die gewählte Kategorie innerhalb der vorgegebenen Zeit erraten. Wenn Sie das Wort nicht kennen, können Sie es dynamisch nachschlagen.",
    },
    features: {
      en: [
        "Customizable options",
        "Local Storage",
        "4 play levels with limited number of guesses",
        "Countdown and score",
        "2 types of hints to make your life easier...",
        "Sliding instructions effect",
        "Sound effects (at game end)",
        "High Score tables for each level",
        "Dynamic lookup of word in wikipedia",
      ],
      de: [
        "Individualisierbare Optionen",
        "Lokaler Speicher",
        "4 Spielstufen und begrenzte Anzahl von Vermutungen",
        "Countdown und Punktestand",
        "Zwei Arten von Hinweisen",
        "Toneffekte (bei Spielende)",
        "Highscore-Tabellen für jedes Level",
        "Dynamisches Nachschlagen des Wortes in Wikipedia",
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
      tags: [
        ["React", SKILL_CATEGORIES.reactEcosystem],
        ["JavaScript", SKILL_CATEGORIES.reactEcosystem],
        ["Local Storage", CATEGORIES.reactEcosystem],
        ["Semantic HTML",SKILL_CATEGORIES.styling],
        ["SASS",SKILL_CATEGORIES.styling],
        ["Jest", SKILL_CATEGORIES.testing],
        ["React Testing Library", SKILL_CATEGORIES.testing]
      ]
    },
    live: ["https://condescending-raman-a3f123.netlify.app/"],
    code: ["https://github.com/hugCarvalho/wordScrambler"],
  },
  {
    id: "cafes",
    name: "Cafes & You ⭐️",
    datum: 2024,
    category: [CATEGORIES.fullstack, CATEGORIES.api, CATEGORIES.webApp],
    techs: ["React", "hooks"],

    img: [["cafeStart", "app screenshot"], ["cafeStart2", "app screenshot"], ["cafeSignup", "app screenshot"], ["cafeList", "app screenshot"],  ["cafeMap", "app screenshot"], ["cafeAdmin", "app screenshot"], ["cafeSettings", "app screenshot"]],
    description: {
      en:
        "<TESTUSER>",
      de:
        "<TESTUSER>",
    },
    features: {
      en: [
        "Authentication and authorization",
        "Go on a solo ride or connect with a soulmate",
        "Create and edit your Cafes",
        "Rate your Cafe experience or beverage",
        "Keep track of what your Cafes have to offer",
        "Map view",
        "Customizable",
        "and many more to come..."
      ],
      de: [
        "Authentifizierung und Genehmigung",
        "Gehen Sie auf eine Solofahrt oder verbinden Sie sich mit einem 'soulmate'",
        "Erstellen und bearbeiten Sie Ihre Cafés",
        "Bewerten Sie Ihr Cafe-Erlebnis oder Ihr Getränk",
        "Behalte den Überblick darüber, was dein Café für dich zu bieten hat",
        "Map view",
        "Customizable",
        "und viele weitere werden folgen...",
      ],
    },
    techInfo: {
      main: "REACT (Hooks)",
      styled: "Styled with Material UI and Styled Components",
      tested: "Cypress",
      responsive: true,
      specsText: { en: "Supabase, a PostgreSQL database", de: "Supabase, a PostgreSQL database" },
      specs: ["React", "Typescript", "Javascript", "React Query", "PostgreSQL", "Supabase", "Material UI", "Styled Components", "Netlify", "Cypress"],
      thirdParty: ["React Query", "React Router", "React Hook Form", "React Number Format", "Leaflet"],
      notes: { en: "Nominatim API", de: "" },
      tags: [
        ["React",SKILL_CATEGORIES.reactEcosystem],
        ["Typescript",SKILL_CATEGORIES.reactEcosystem],
        ["React Router",SKILL_CATEGORIES.reactEcosystem],
        ["React Query", SKILL_CATEGORIES.backend],
        ["Supabase",SKILL_CATEGORIES.backend ],
        ["PostgreSQL",SKILL_CATEGORIES.backend],
        ["Netlify",SKILL_CATEGORIES.backend],
        ["Material UI", SKILL_CATEGORIES.styling],
        ["Cypress",SKILL_CATEGORIES.testing],
        ["Leaflet",SKILL_CATEGORIES.all],
        ["Nominatim API", SKILL_CATEGORIES.all]]
    },
    live: ["https://cafesandyou.netlify.app/"],
    code: [],
  }
];
