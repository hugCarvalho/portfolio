import React, { useState, createContext } from "react";
import "./App.scss";
import RenderHeader from "./components/Header/RenderHeader";
import RenderFooter from "./components/Footer/RenderFooter";
import RenderProjects from "./components/Pages/Projects/RenderProjects";
import RenderSkills from "./components/Pages/Skills/RenderSkills";
import RenderAbout from "./components/Pages/About/RenderAbout";
import RenderContact from "./components/Pages/Contact/RenderContact";
import NotFound from "./components/Pages/NotFound/NotFound";
import {
  // BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ScrollToTop from "./components/customisable/ScrollToTop";

export const LanguageContext = createContext();

function App({ isEnglish = true }) {
  const [isLanguageEnglish, setIsLanguageEnglish] = useState(isEnglish);

  return (
    // <Router basename="/portfolio">
    <HashRouter>
      <LanguageContext.Provider value={{ isLanguageEnglish, setIsLanguageEnglish }}>
        <div className="App">
          <RenderHeader />

          <Switch>
            <Route exact path="/">
              <Redirect to="/projects" />
            </Route>
            <Route exact path="/projects" component={RenderProjects} />
            <Route exact path="/skills" component={RenderSkills} />
            <Route exact path="/about" component={RenderAbout} />
            <Route exact path="/contact" component={RenderContact} />
            <Route path="/" component={NotFound} />
          </Switch>

          <RenderFooter />
          <ScrollToTop
            options={{ behavior: "smooth" }}
            background="rgba(195, 210, 215, 0.64)"
            color="white"
          />
        </div>
      </LanguageContext.Provider>
    </HashRouter>
    // </Router>
  );
}

export default App;
