import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Pages/Projects/Projects";
import Skills from "./components/Pages/Skills/Skills";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Header />

          <Switch>
            <Route exact path="/">
              <Redirect to="/projects" />
            </Route>
            <Route path="/projects" component={Projects} />
            <Route exact path="/skills" component={Skills} />

            <Route exact path="/about" component={About} />

            <Route exact path="/contact" component={Contact} />
            <Route path="/" render={() => <div>Page not found!</div>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
