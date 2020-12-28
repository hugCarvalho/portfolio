export const projectsData = [
  {
    id: 1,
    name: "Weather App",
    category: ["app"],
    techs: ["React", "API", "Hooks"],
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
      styled: "SASS (scss)",
      tested: "",
      responsive: true,
      specsText: { en: "", de: "" },
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
    },
    live: ["https://awesome-payne-8bf6bd.netlify.app/"],
    code: ["https://github.com/hugCarvalho/weather_api"],
  },
  {
    id: 2,
    name: "Todo List App",
    category: ["app"],
    techs: ["React"],
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
      main: "REACT",
      styled: "SASS (scss)",
      tested: "",
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
    name: "Fantasy Online Shop",
    category: ["website", "online-shop"],
    techs: ["React", "API", "Hooks", "Redux"],

    img: "media/online_shop_redux.png",
    description: {
      en:
        "Ongoing project, built using React and Redux that simulates an online shop. For more details check the homepage of the project.",
      de:
        "Fortlaufendes Projekt, das mit React und Redux erstellt wurde und einen Online-Shop simuliert. Weitere Informationen finden Sie auf der Homepage des Projekts.",
    },
    features: {
      en: [
        "Data fetch from Breaking Bad API",
        "Add to cart / remove from cart",
        "Limited inventory",
        "Cart total computation",
        "Register + Login",
      ],
      de: [
        "Datenabruf von Breaking Bad API",
        "In den Warenkorb legen / aus dem Warenkorb nehmen",
        "Begrenztes Inventar",
        "Warenkorb-Gesamtberechnung",
        "Registrieren + Anmeldung",
      ],
    },
    techInfo: {
      main: "REACT (Hooks) + REDUX",
      styled: "SASS (scss)",
      tested: "", //JEST and React Testing Library
      responsive: false,
      specsText: { en: "", de: "" },
      specs: ["useDispatch", "useSelector", "useEffect", "useState", "useReducer", "API"],
      thirdParty: ["React-Router", "react-hook-form"],
      notes: { en: "", de: "" },
    },
    live: ["https://stoic-almeida-257f01.netlify.app/"],
    code: ["https://github.com/hugCarvalho/phantasy-shop_redux"],
  },
  {
    id: 4,
    name: "Portfolio Website",
    category: ["website"],
    techs: ["React", "Hooks", "Tests"],

    img: "media/portfolio_4.png",
    description: {
      en: "This website... Built with React.",
      de: "Diese Website... mit React erstellt",
    },
    features: {
      en: [
        "Some data, like the content of the project cards, is dynamically generated, as to simulate possible real life cases, i.e, getting data from an array of objects",
        "Filter projects",
        "CSS animations and transitions",
        "To-top scroll icon",
        "Available in English and German",
      ],
      de: [
        "Die Projektkarten werden dynamisch generiert, um einen Datenabruf zu simulieren",
        "Filter Projekte",
        "CSS animations und transitions",
        "To-top scrollen icon",
        "Verfügbar in Englisch und Deutsch",
      ],
    },
    techInfo: {
      main: "REACT (Hooks)",
      styled: "SASS (scss)",
      tested: "JEST and React Testing Library",
      responsive: true,
      specsText: { en: "Semantic HTML" },
      specs: [
        "useState",
        "useEffect",
        "useContext",
        "useLocation",
        "Flexbox",
        "Unit and integration tests ",
      ],
      thirdParty: ["React-router"],
      notes: { en: "", de: "" },
    },
    live: ["https://hugcarvalho.github.io/portfolio"],
    code: ["https://github.com/hugCarvalho/portfolio"],
  },
];
