import React from "react";
import "./MyInfoCardLinks.scss";
// import englishCV from "../../../../shared/CV_english.pdf";
// import germanCV from "../../../../shared/CV_deutsch.pdf";
import { LanguageContext } from "../../../../App";

function MyInfoCardLinks() {
  // const { isLanguageEnglish } = React.useContext(LanguageContext);

  return (
    <>
      <div className="MyInfoCardLinks">
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
              href="https://edabit.com/user/8Z3dkvWBqtrMEE48N"
            >
              Edabit
            </a>

            {/* {isLanguageEnglish && (
              <a target="_blank" rel="noopener noreferrer" href={englishCV}>
                {"CV"}
              </a>
            )}
            {!isLanguageEnglish && (
              <a target="_blank" rel="noopener noreferrer" href={germanCV}>
                {"CV"}
              </a>
            )} */}
          </li>

          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/hugo-carvalho-8355b31b7/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MyInfoCardLinks;
