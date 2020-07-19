import React from "react";
import "./Footer.scss";
import { LanguageContext } from "../../App";
import { Link } from "react-router-dom";
import englishCV from "../../shared/CV_english.pdf";
import germanCV from "../../shared/CV_deutsch.pdf";

function Footer() {
  const { isLanguageEnglish } = React.useContext(LanguageContext);

  return (
    <>
      <section className="credits">
        <span>Credits:</span>
        <ul>
          <li>
            {isLanguageEnglish
              ? `Flags in "Speaks" section by `
              : `Flags im Abschnitt "Speaks" bei `}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="www.freakflagsprite.com"
            >
              www.freakflagsprite.com
            </a>
          </li>
          <li>
            {isLanguageEnglish
              ? `Logos in "Skills" page by `
              : `Flags im Seite "Fähigkeiten" bei `}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://icons8.com"
              title="icons8"
            >
              https://icons8.com
            </a>
          </li>
          <li>
            Favicon {isLanguageEnglish ? "made by" : "bei"}{" "}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>{" "}
            {isLanguageEnglish ? "from" : "von"}{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              {" "}
              www.flaticon.com
            </a>
          </li>
        </ul>
      </section>

      {/* Contact Column */}
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
              href="https://github.com/hugCarvalho"
            >
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
    </>
  );
}

export default Footer;
