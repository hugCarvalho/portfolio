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
        "search for a city to display the weather.",
        "save a city for fast access (up to 3 cities) in local storage.",
        "set up a city to load at startup.",
        "displays weather for present day and following 2 days (every 3 hours display).",
        "displays actual and real feel temperature in Celsius or Fahrenheit.",
        "displays wind speed in kilometers or miles.",
        "displays wind direction (cardinal points + arrow pointer).",
      ],
      de: [
        "Suche nach einer Stadt, um das Wetter anzuzeigen.",
        "Speichern Sie eine Stadt für den schnellen Zugriff (bis zu 3 Städte) im lokalen Speicher.",
        "Richten Sie eine Stadt ein, die beim Start geladen werden soll.",
        "Zeigt das Wetter für den aktuellen Tag und die folgenden 2 Tage an (alle 3 Stunden).",
        "Zeigt die tatsächliche und reale Gefühlstemperatur in Celsius oder Fahrenheit an.",
        "Zeigt die Windgeschwindigkeit an.",
        "Zeigt die Windrichtung an (Kardinalpunkte + Pfeilzeiger).",
      ],
    },
    techInfo: {
      main: "REACT (Hooks)",
      styled: "SASS",
      specsText: { en: "", de: "" },
      specs: ["useReducer", "useEffects"],
      thirdParty: ["Tippy.js", "Loader", "React-spinners"],
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
        "Saved in local Storage.",
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
      styled: "SASS",
      specsText: { en: "", de: "" },
      specs: ["useReducer", "useEffects"],
      thirdParty: ["Tippy.js", "Loader", "React-spinners"],
      notes: { en: "", de: "" },
    },
    live: ["https://stoic-fermi-dcf04f.netlify.app/"],
    code: ["https://github.com/hugCarvalho/todoList"],
  },
  {
    id: 3,
    name: "Portfolio Website",
    category: ["website"],
    img: "",
    description: {
      en: "Well, this website... :-)  ",
      de: "Nun, diese Website ...",
    },
    features: {
      en: [
        "The project cards are generated dynamically as to sort of simulate a data fetch.",
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
      specs: ["useReducer", "useEffects"],
      thirdParty: ["Tippy.js", "Loader", "React-spinners"],
      notes: { en: "", de: "" },
    },
    live: ["https://awesome-payne-8bf6bd.netlify.app/"],
    code: ["https://github.com/hugCarvalho/weather_api"],
  },
];
