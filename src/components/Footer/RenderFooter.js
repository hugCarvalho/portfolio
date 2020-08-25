import React from "react";
import "./RenderFooter.scss";

import { LanguageContext } from "../../App";
import { Link } from "react-router-dom";
import englishCV from "../../shared/CV_english.pdf";
import germanCV from "../../shared/CV_deutsch.pdf";

function RenderFooter() {
  const { isLanguageEnglish } = React.useContext(LanguageContext);
  return (
    <footer className="RenderFooter">
      {/* Credits section */}
      <section className="credits">
        <span>Credits:</span>
        <ul>
          <li>
            {isLanguageEnglish
              ? `Flags in "Speaks" section by `
              : `Flags im Abschnitt "Spricht" bei `}
            <cite>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://freakflagsprite.com">
                freakflagsprite
              </a>
            </cite>
          </li>
          <li>
            {isLanguageEnglish
              ? `Logos in "Skills" page by `
              : `Flags im Seite "Fähigkeiten" bei `}
            <cite>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://icons8.com"
                title="icons8">
                Icons8
              </a>
            </cite>
          </li>
          <li>
            Favicon {isLanguageEnglish ? "made by" : "bei"}{" "}
            <cite>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.flaticon.com/authors/freepik"
                title="Freepik">
                Freepik
              </a>{" "}
            </cite>
            {isLanguageEnglish ? "from" : "von"}{" "}
            <cite>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.flaticon.com/"
                title="Flaticon">
                {" "}
                Flaticon
              </a>
            </cite>
          </li>
        </ul>
      </section>

      {/* Links section */}
      <section className="contact-links">
        <ul>
          <li>
            <Link to="/contact">
              {isLanguageEnglish ? "Contact" : "Kontakt"}
            </Link>
          </li>

          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/hugCarvalho">
              GitHub
            </a>
          </li>

          <li>
            {isLanguageEnglish && (
              <a target="_blank" rel="noopener noreferrer" href={englishCV}>
                {"CV"}
              </a>
            )}
            {!isLanguageEnglish && (
              <a target="_blank" rel="noopener noreferrer" href={germanCV}>
                {"CV"}
              </a>
            )}
          </li>
        </ul>
      </section>
    </footer>
  );
}

export default RenderFooter;
