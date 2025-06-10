import { karaokeApp, portfolioV2, SKILL_CATEGORIES } from "../../../config/Skills";

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
      tags: [react, js, localStorage, semanticHTML,sass]
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
        "3 days Weather forecast, every 3 hours options ",
        "Save up to 4 cities for fast access in local storage",
        "Set up a city to load at startup",
        "Displays actual and real feel temperature in Celsius or Fahrenheit",
        "Displays wind speed in kilometers or miles",
        "Displays wind direction (cardinal points + arrow pointer)",
        "Set your own alarms (rain, wind and temperature)"
      ],
      de: [
        "Bis zu 3 Städte speichern für den schnellen Zugriff (lokalen Speicher)",
        "Speichern bis zu 4 Städte für schnellen Zugriff im lokalen Speicher",
        "Zeigt die tatsächliche und reale Gefühlstemperatur in Celsius oder Fahrenheit an",
        "Zeigt die Windgeschwindigkeit an",
        "Zeigt die Windrichtung",
        "Stellen Sie Ihre eigenen Alarme ein (Regen, Wind und Temperatur)"
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
        "CSS animations and transitions",
        "Filter projects",
        "Scroll to top",
        "Available in English and German",
      ],
      de: [
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
      thirdParty: ["React-router", "React-use", "Swiper"],
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
      thirdParty: ["React Router", "React Tooltip", "React Number Format"],
      notes: { en: "", de: "" },
      tags: [
        ["React", SKILL_CATEGORIES.reactEcosystem],
        ["JavaScript", SKILL_CATEGORIES.reactEcosystem],
        ["Local Storage", CATEGORIES.reactEcosystem],
        ["Semantic HTML",SKILL_CATEGORIES.styling],
        styledComponents,
        ["Jest", SKILL_CATEGORIES.testing],
        ["React Testing Library", SKILL_CATEGORIES.testing]
      ]
    },
    live: ["https://condescending-raman-a3f123.netlify.app/"],
    code: ["https://github.com/hugCarvalho/wordScrambler"],
  },
  {
    id: "portfolio2",
    name: "Portfolio v.2",
    datum: 2025,
    category: [CATEGORIES.website, CATEGORIES.api],
    techs: ["Next.js"],

    img: [["portfolio2Home", "app screenshot"], ["portfolio2About", "app screenshot"], ["portfolio2Projects", "app screenshot"], ["portfolio2Contact", "app screenshot"]],
    description: {
      en:
        "My second portfolio. Contrasting to the retro look of this portfolio, a more modern look with 3d animations. Built with Next.js and Tailwind CSS.",
      de:
        "Mein zweites Portfolio. Im Gegensatz zum Retro-Look dieses Portfolios ein modernerer Stil mit 3D-Animationen. Entwickelt mit Next.js und Tailwind CSS.",
    },
    features: {
      en: [
        "3D animations with Three.js",
        "Animations effects using Framer Motion",
        "Contact form with EmailJS",
      ],
      de: [
        "3D-Animationen mit Three.js",
        "Animationseffekte mit Framer Motion",
        "Kontaktformular mit EmailJS"
      ],
    },
    techInfo: {
      main: "Next.js",
      styled: "Styled with Tailwind CSS",
      tested: "",
      responsive: true,
      specsText: { en: "Three.js and Framer Motion", de: "Three.js and Framer Motion"},
      specs: [],
      thirdParty: ["Three.js", "Framer Motion", "Lucide Icons", "EmailJs API", "Skill Icons API"],
      notes: { en: "EmailJS and Skill Icons APIs", de: "EmailJS und Skill Icons APIs" },
      tags: portfolioV2
    },
    live: ["https://hugocarvalho.netlify.app/"],
    code: ["https://github.com/hugCarvalho/portfolio-2"],
  },
  {
    id: "karaoke-app",
    name: "⭐️ Karaoke List App",
    datum: 2025,
    category: [CATEGORIES.website, CATEGORIES.api],
    techs: ["Next.js"],

    img: [["karaokeStart", "app screenshot"], ["karaokeList", "app screenshot"], ["karaokeHistory", "app screenshot"]] ,
    description: {
      en:
        "If you ever went to a karaoke place and realised you cannot find or decide upon which songs to sing, this app is for you... Never be blank again!",
      de:
        "Wenn du jemals in einem Karaoke-Lokal warst und gemerkt hast, dass du nicht weißt, welche Lieder du singen sollst, ist diese App genau das Richtige für dich... Nie wieder leer ausgehen! ",
    },
    features: {
      en: [
        "Authentication and verification",
        "Create lists (all, sang, favs, duet, blacklist, next event)",
        "Sort, filter, add, move or remove songs",
        "AI-powered results for Select options 🪄",
        "AI-powered suggestions on unknown artist or song 🪄",
        "Events history",
        "Statistics"
      ],
      de: [
        "Authentifizierung und Verifizierung",
        "Listen erstellen (alle, gesungen, Favoriten, Duett, Blacklist, nächstes Event)",
        "Songs sortieren, filtern, hinzufügen, verschieben oder entfernen",
        "KI-gestützte Ergebnisse für Auswahloptionen 🪄",
        "KI-gestützte Vorschläge für unbekannte Künstler oder Songs 🪄",
        "Event-Verlauf",
        "Statistiken"
      ],
    },
    techInfo: {
      main: "Built with React",
      styled: "Styled with Chakra UI",
      tested: "",
      responsive: true,
      specsText: { en: "AI powered", de: ""},
      specs: [],
      thirdParty: ["React Query", "Axios", "Zod", "Open AI API", "MusicBrainz API", "React Hook Form", "Resend", "bcrypt", "cors", "helmet", "jsonwebtoken", "mongoose", "xss-clean", "cookie-parser"],
      notes: { en: "", de: "" },
      tags: karaokeApp
    },
    live: ["https://karaoke-list-app.onrender.com/"],
    code: ["https://github.com/hugCarvalho/karaoke-list-app"],
  }
  ,{
    id: "cafes",
    name: "⭐️ Cafes & You",
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
        "Code available upon request",
      ],
      de: [
        "Authentifizierung und Genehmigung",
        "Gehen Sie auf eine Solofahrt oder verbinden Sie sich mit einem 'soulmate'",
        "Erstellen und bearbeiten Sie Ihre Cafés",
        "Bewerten Sie Ihr Cafe-Erlebnis oder Ihr Getränk",
        "Behalte den Überblick darüber, was dein Café für dich zu bieten hat",
        "Kartenansicht",
        "Individualisierbare",
        "Code verfügbar nach Anfrage",
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
  },
];
