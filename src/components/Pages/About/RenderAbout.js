import React from "react";
import "./RenderAbout.scss";
import AboutEN, { AboutDE } from "./About";
import CV_EN from "../../../shared/CV_english.pdf";
import CV_DE from "../../../shared/CV_deutsch.pdf";

import { LanguageContext } from "../../../App";

function RenderAbout() {
  const { isLanguageEnglish } = React.useContext(LanguageContext);

  return (
    <main className="RenderAbout">
      {/* Only displayed on smaller mobile viewport */}
      <section className=" show-on-smallest-screen-only">
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={isLanguageEnglish ? CV_EN : CV_DE}>
              CV
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/hugCarvalho">
              GitHub
            </a>
          </li>
        </ul>
      </section>
      {/*  */}

      {isLanguageEnglish ? <AboutEN /> : <AboutDE />}
    </main>
  );
}

export default RenderAbout;
