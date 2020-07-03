import React from "react";
import "./RenderAbout.scss";
import AboutEN, { AboutDE } from "./AboutContent";
import { LanguageContext } from "../../../App";

function RenderAbout() {
  const { isLanguageEnglish } = React.useContext(LanguageContext);

  return (
    <div className="container__about">
      {/* {isLanguageEnglish ? <h1>About</h1> : <h1>Über mich</h1>} */}

      {isLanguageEnglish ? <AboutEN /> : <AboutDE />}
    </div>
  );
}

export default RenderAbout;
