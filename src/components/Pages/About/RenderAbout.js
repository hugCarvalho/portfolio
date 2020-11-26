import React from "react";
import "./RenderAbout.scss";
import AboutEN, { AboutDE } from "./About";
// import CV_EN from "../../../shared/CV_english.pdf";
// import CV_DE from "../../../shared/CV_deutsch.pdf";

import { LanguageContext } from "../../../App";
import { IsActiveContext } from "../../Header/NavButtons/RenderNavButtons";

function RenderAbout() {
  const { isLanguageEnglish } = React.useContext(LanguageContext);
  const pageIsActive = React.useContext(IsActiveContext);

  React.useEffect(() => {
    document.title = "About";
  }, [pageIsActive]);

  return (
    <div className="RenderAbout">
      {/* Only displayed on smaller mobile viewport */}
      <section className=" show-on-smallest-screen-only">
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/hugCarvalho"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/hugo-carvalho-8355b31b7/"
            >
              LinkedIn
            </a>
            {/* <a
              target="_blank"
              rel="noopener noreferrer"
              href={isLanguageEnglish ? CV_EN : CV_DE}
            >
              CV
            </a> */}
          </li>

          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://edabit.com/user/8Z3dkvWBqtrMEE48N"
            >
              Edabit
            </a>
          </li>
        </ul>
      </section>
      {/*  */}

      {isLanguageEnglish ? <AboutEN /> : <AboutDE />}
    </div>
  );
}

export default RenderAbout;
