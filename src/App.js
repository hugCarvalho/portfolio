import React, { useState, createContext } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Pages/Projects/Projects";
import Skills from "./components/Pages/Skills/Skills";
import RenderAbout from "./components/Pages/About/RenderAbout";
import Contact from "./components/Pages/Contact/Contact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
export const LanguageContext = createContext();

function App() {
  const [isLanguageEnglish, setIsLanguageEnglish] = useState(true);
  return (
    <Router>
      <div className="App">
        <LanguageContext.Provider
          value={{ isLanguageEnglish, setIsLanguageEnglish }}
        >
          <Header />

          <Switch>
            <Route exact path="/">
              <Redirect to="/projects" />
            </Route>
            <Route path="/projects" component={Projects} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/about" component={RenderAbout} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/" render={() => <div>Page not found!</div>} />
          </Switch>
          <Footer />
        </LanguageContext.Provider>
      </div>
    </Router>
  );
}

export default App;
