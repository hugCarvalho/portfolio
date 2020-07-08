import React from "react";
import "./RenderAbout.scss";
import AboutEN, { AboutDE } from "./About";
import { LanguageContext } from "../../../App";

function RenderAbout() {
  const { isLanguageEnglish } = React.useContext(LanguageContext);

  return (
    <div className="container__about">
      {/* <section className=" show-smallest-screen">
        <ul>
          <li>
            <a href="https://github.com/hugCarvalho">CV - not active yet</a>
          </li>
          <li>
            <a href="https://github.com/hugCarvalho">Github</a>
          </li>
        </ul>
      </section> */}
      {isLanguageEnglish ? <AboutEN /> : <AboutDE />}
    </div>
  );
}

export default RenderAbout;
