export const projectsData = [
  {
    id: 1,
    name: "Weather App",
    category: ["app"],
    img: "media/weather_night_small.png",

    description: {
      en:
        "Displays weather data from OpenWeather API: forecast up to 3 days divided into 3 hours intervals.",
      de:
        "Zeigt Wetterdaten von der OpenWeather-API an: Vorhersage von bis zu 3 Tagen in Intervallen von 3 Stunden.",
    },
    features: {
      en: [
        "Search for a city to display the weather.",
        "Save up to 3 cities for fast access in local storage.",
        "Set up a city to load at startup.",
        "3 days Weather forecast, every 3 hours options. ",
        "Displays actual and real feel temperature in Celsius or Fahrenheit.",
        "Displays wind speed in kilometers or miles.",
        "Displays wind direction (cardinal points + arrow pointer).",
      ],
      de: [
        "Suche nach einer Stadt, um das Wetter anzuzeigen.",
        "Bis zu 3 Städte speichern für den schnellen Zugriff (lokalen Speicher).",
        "Zeigt die tatsächliche und reale Gefühlstemperatur in Celsius oder Fahrenheit an.",
        "Zeigt die Windgeschwindigkeit an.",
        "Zeigt die Windrichtung.",
      ],
    },
    techInfo: {
      main: "REACT using Hooks",
      styled: "SASS (scss)",
      responsive: true,
      specsText: { en: "", de: "" },
      specs: ["useState", "useReducer", "useEffect", "Grid + Flexbox"],
      thirdParty: ["Tippy.js", "React-loader", "React-spinners"],
      notes: { en: "", de: "" },
    },
    live: ["https://awesome-payne-8bf6bd.netlify.app/"],
    code: ["https://github.com/hugCarvalho/weather_api"],
  },
  {
    id: 2,
    name: "Todo List App",
    category: ["app"],
    img: "media/todo_list_small.png",

    description: {
      en: "Keeps track of the things you have to do.",
      de: "Verfolgt die Dinge, die Sie tun müssen.",
    },
    features: {
      en: [
        "Add / Edit / Delete one or all to-dos.",
        "Search for a to-do.",
        "Check/Uncheck all to-dos.",
        "Show / Hide completed to-dos.",
        "To-dos saved to local Storage.",
      ],
      de: [
        "Hinzufügen / Bearbeiten / Löschen einer oder aller Aufgaben.",
        "Suche nach einer Aufgabe.",
        "Alle Aufgaben aktivieren / deaktivieren.",
        "Aufgaben erledigen / ausblenden.",
        "Im lokalen Speicher speichern.",
      ],
    },
    techInfo: {
      main: "REACT",
      styled: "SASS (scss)",
      responsive: true,
      specsText: { en: "", de: "" },
      specs: ["forwardRef", "Prop-types", "Flexbox"],
      thirdParty: ["React-modal", "UUID"],
      notes: { en: "", de: "" },
    },
    live: ["https://stoic-fermi-dcf04f.netlify.app/"],
    code: ["https://github.com/hugCarvalho/todoList"],
  },
  {
    id: 3,
    name: "Portfolio Website",
    category: ["website"],
    img: "media/portfolio_3.png",
    description: {
      en: "Well, this website... :-)",
      de: "Nun, diese Website...",
    },
    features: {
      en: [
        "Some data, like the content of the project cards, is dynamically generated, as to simulate possible real life cases, i.e, getting the data of an array of objects.",
        "Available in English and German.",
      ],
      de: [
        "Die Projektkarten werden dynamisch generiert, um einen Datenabruf zu simulieren.",
        "Verfügbar in Englisch und Deutsch.",
      ],
    },
    techInfo: {
      main: "REACT (Hooks)",
      styled: "SASS",
      specsText: { en: "", de: "" },
      specs: ["useState", "useEffect"],
      thirdParty: ["", "", ""],
      notes: { en: "", de: "" },
    },
    live: ["https://wizardly-shockley-4cc828.netlify.app/"],
    code: ["https://github.com/hugCarvalho/weather_api"],
  },
];
