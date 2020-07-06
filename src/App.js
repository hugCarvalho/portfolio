import React, { useState, createContext } from "react";
import "./App.scss";
import RenderHeader from "./components/Header/RenderHeader";
import RenderFooter from "./components/Footer/RenderFooter";
import RenderProjects from "./components/Pages/Projects/RenderProjects";
import RenderSkills from "./components/Pages/Skills/RenderSkills";
import RenderAbout from "./components/Pages/About/RenderAbout";
import RenderContact from "./components/Pages/Contact/RenderContact";
import {
  BrowserRouter as Router,
  // HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
export const LanguageContext = createContext();

//TODO: confirm where pages start (padding/margin)
//TODO: change li in 3rd party

function App() {
  const [isLanguageEnglish, setIsLanguageEnglish] = useState(true);
  return (
    <Router basename="/">
      <div className="App">
        <LanguageContext.Provider
          value={{ isLanguageEnglish, setIsLanguageEnglish }}
        >
          <RenderHeader />

          <Switch>
            <Route exact path="/">
              <Redirect to="/projects" />
            </Route>
            <Route path="/projects" component={RenderProjects} />
            <Route exact path="/skills" component={RenderSkills} />
            <Route exact path="/about" component={RenderAbout} />
            <Route exact path="/contact" component={RenderContact} />
            <Route path="/" render={() => <div>Page not found!</div>} />
          </Switch>
          <RenderFooter />
        </LanguageContext.Provider>
      </div>
    </Router>
  );
}

export default App;
