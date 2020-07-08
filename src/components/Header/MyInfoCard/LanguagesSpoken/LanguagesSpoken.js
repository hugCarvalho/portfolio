import React from "react";
import "./LanguagesSpoken.scss";
import { LanguageContext } from "../../../../App";

function LanguagesSpoken() {
  const { isLanguageEnglish } = React.useContext(LanguageContext);
  return (
    <>
      <div className="container__languages-spoken">
        <span>{isLanguageEnglish ? "Speaks:" : "Sprichst:"}</span>
        <div
          title={isLanguageEnglish ? "english" : "Englisch"}
          className="fflag fflag-GB ff-sm ff-wave"
        ></div>
        <div
          title={isLanguageEnglish ? "german" : "Deutsch"}
          className="fflag fflag-DE ff-sm ff-wave"
        ></div>
        <div
          title={isLanguageEnglish ? "portuguese" : "Portugiesisch"}
          className="fflag fflag-PT ff-sm ff-wave"
        ></div>
        <div
          title={isLanguageEnglish ? "spanish" : "Spanisch"}
          className="fflag fflag-ES ff-sm ff-wave"
        ></div>
      </div>
    </>
  );
}

export default LanguagesSpoken;
