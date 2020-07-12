import React from "react";
import "./Links.scss";
import { Link } from "react-router-dom";
import CV from "../../../../shared/cv.pdf";
import { LanguageContext } from "../../../../App";

function Links() {
  const { isLanguageEnglish } = React.useContext(LanguageContext);

  return (
    <>
      <div className="container__links">
        <ul>
          <li>
            <Link to="/contact">
              {isLanguageEnglish ? "CONTACT" : "Kontakt"}
            </Link>
          </li>

          <li>
            <a href={CV} target="_blank" rel="noopener noreferrer">
              CV{" "}
            </a>
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
        </ul>
      </div>
    </>
  );
}

export default Links;
