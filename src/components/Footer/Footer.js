import React from "react";
import "./Footer.scss";
import { LanguageContext } from "../../App";
import { Link } from "react-router-dom";

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
            <a href="www.freakflagsprite.com" className="underline">
              Freak Flags
            </a>
          </li>
          <li>
            {isLanguageEnglish
              ? `Logos in "Skills" section by `
              : `Flags im Abschnitt "Speaks" bei `}
            <a
              href="https://icons8.com/icon/20822/ios-logo"
              className="underline"
            >
              Icons8
            </a>
          </li>
        </ul>
      </section>

      {/* Contact Column */}
      <section className="contact--links">
        <ul>
          <li>
            <Link to="/contact">
              {isLanguageEnglish ? "Contact" : "Kontakt"}
            </Link>
          </li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/hugCarvalho"
          >
            Github
          </a>
          <li>CV</li>
        </ul>
      </section>
    </>
  );
}

export default Footer;
