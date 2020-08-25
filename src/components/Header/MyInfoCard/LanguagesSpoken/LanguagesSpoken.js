import React from "react";
import "./LanguagesSpoken.scss";
import { LanguageContext } from "../../../../App";

function LanguagesSpoken() {
  const { isLanguageEnglish } = React.useContext(LanguageContext);
  return (
    <>
      <div className="LanguagesSpoken">
        <span>{isLanguageEnglish ? "Speaks:" : "Spricht:"}</span>
        <figure
          title={isLanguageEnglish ? "english" : "Englisch"}
          className="fflag fflag-GB ff-sm ff-wave"></figure>
        <figure
          title={isLanguageEnglish ? "german" : "Deutsch"}
          className="fflag fflag-DE ff-sm ff-wave"></figure>
        <figure
          title={isLanguageEnglish ? "portuguese" : "Portugiesisch"}
          className="fflag fflag-PT ff-sm ff-wave"></figure>
        <figure
          title={isLanguageEnglish ? "spanish" : "Spanisch"}
          className="fflag fflag-ES ff-sm ff-wave"></figure>
      </div>
    </>
  );
}

export default LanguagesSpoken;
