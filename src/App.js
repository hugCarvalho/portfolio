import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="render-pages">Render Pages</div>
      <Footer />
    </div>
  );
}

export default App;
