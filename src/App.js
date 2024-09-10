import React, { createContext, useState } from "react";
import {
  // BrowserRouter as Router,
  HashRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.scss";
import ScrollToTop from "./components/customisable/ScrollToTop";
import RenderFooter from "./components/Footer/RenderFooter";
import RenderHeader from "./components/Header/RenderHeader";
import RenderAbout from "./Pages/About/RenderAbout";
import RenderContact from "./Pages/Contact/RenderContact";
import NotFound from "./Pages/NotFound/NotFound";
import RenderProjects from "./Pages/Projects/RenderProjects";
import RenderSkills from "./Pages/Skills/RenderSkills";

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
              <Redirect to="/about" />
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
