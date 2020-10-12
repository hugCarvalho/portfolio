import React from "react";
import "./MyInfoCardLinks.scss";
import { Link } from "react-router-dom";
import englishCV from "../../../../shared/CV_english.pdf";
import germanCV from "../../../../shared/CV_deutsch.pdf";
import { LanguageContext } from "../../../../App";

function MyInfoCardLinks() {
  const { isLanguageEnglish } = React.useContext(LanguageContext);

  return (
    <>
      <div className="MyInfoCardLinks">
        <ul>
          <li>
            <Link to="/contact">{isLanguageEnglish ? "Contact" : "Kontakt"}</Link>
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

export default MyInfoCardLinks;
