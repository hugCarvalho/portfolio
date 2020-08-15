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
        "Gewünschte Stadt in das Suchfeld eingeben, um für diese das Wetter anzuzeigen.",
        "Bis zu 3 Städte speichern für den schnellen Zugriff (lokalen Speicher).",
        "Zeigt die tatsächliche und reale Gefühlstemperatur in Celsius oder Fahrenheit an.",
        "Zeigt die Windgeschwindigkeit an.",
        "Zeigt die Windrichtung.",
      ],
    },
    techInfo: {
      main: "REACT (Hooks)",
      styled: "SASS (scss)",
      responsive: true,
      specsText: { en: "", de: "" },
      specs: [
        "useState",
        "useReducer",
        "useEffect",
        "useContext",
        "Grid + Flexbox",
        "Local Storage",
      ],
      thirdParty: ["Tippy.js", "React-spinners", "React-Moment"],
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
      specs: ["forwardRef", "Prop-types", "Flexbox", "Local Storage"],
      thirdParty: ["React-modal", "UUID"],
      notes: { en: "", de: "" },
    },
    live: ["https://stoic-fermi-dcf04f.netlify.app/"],
    code: ["https://github.com/hugCarvalho/todoList"],
  },
  {
    id: 3,
    name: "Phantasy Online Shop",
    category: ["website", "online-shop"],
    img: "media/online_shop_redux.png",
    description: {
      en:
        "This is an ONGOING project, built using React (hooks) and Redux that simulates an online shop. It focus primarily on behaviour. For more details check the homepage of the project.",
      de:
        "Dies ist ein FORTLAUFENDES Projekt, das mit React und Redux erstellt wurde und einen Online-Shop simuliert. Es konzentriert sich hauptsächlich auf das Verhalten. Weitere Informationen finden Sie auf der Homepage des Projekts.",
    },
    features: {
      en: [
        "Data fetch from Breaking Bad API",
        "Add to cart / remove from cart",
        "Limited inventory",
        "Cart total computation",
        // "Login / Register",
      ],
      de: [
        "Datenabruf von Breaking Bad API",
        "In den Warenkorb legen / aus dem Warenkorb nehmen",
        "Begrenztes Inventar",
        "Warenkorb-Gesamtberechnung",
        // "Anmeldung / Registrieren",
      ],
    },
    techInfo: {
      main: "REACT (Hooks)",
      styled: "SASS (scss)",
      responsive: false,
      specsText: { en: "", de: "" },
      specs: [],
      thirdParty: ["Redux", "React Router"],
      notes: { en: "", de: "" },
    },
    live: ["https://stoic-almeida-257f01.netlify.app/"],
    code: ["https://github.com/hugCarvalho/phantasy-shop_redux"],
  },
  {
    id: 4,
    name: "Portfolio Website",
    category: ["website"],
    img: "media/portfolio_4.png",
    description: {
      en: "Well, this website...",
      de: "Die Website auf der Sie sich befinden...",
    },
    features: {
      en: [
        "Some data, like the content of the project cards, is dynamically generated, as to simulate possible real life cases, i.e, getting data from an array of objects.",
        "Available in English and German.",
      ],
      de: [
        "Die Projektkarten werden dynamisch generiert, um einen Datenabruf zu simulieren.",
        "Verfügbar in Englisch und Deutsch.",
      ],
    },
    techInfo: {
      main: "REACT (Hooks)",
      styled: "SASS (scss)",
      responsive: true,
      specsText: { en: "", de: "" },
      specs: ["useState", "useEffect", "useContext", "Flexbox"],
      thirdParty: ["React Router", "React Router Hash Link"],
      notes: { en: "", de: "" },
    },
    live: ["https://hugcarvalho.github.io/portfolio"],
    code: ["https://github.com/hugCarvalho/portfolio"],
  },
];
