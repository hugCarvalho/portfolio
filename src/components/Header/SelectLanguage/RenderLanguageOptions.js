import React, { useContext } from "react";
import "./RenderLanguageOptions.scss";
import LanguageFlag from "./LanguageFlag";
import FlagEN from "./assets/flagEngland.png";
import FlagDE from "./assets/flagGermany.png";
import { LanguageContext } from "../../../App";

function RenderSelectLanguage() {
  // prettier-ignore
  const { isLanguageEnglish, setIsLanguageEnglish } = useContext(LanguageContext);

  return (
    <>
      <div className="container__website-language">
        <LanguageFlag
          onClick={() => setIsLanguageEnglish(true)}
          src={FlagEN}
          alt="english"
          isSelected={isLanguageEnglish ? "selected" : ""}
        />
        <LanguageFlag
          onClick={() => setIsLanguageEnglish(false)}
          src={FlagDE}
          alt="deutsch"
          isSelected={!isLanguageEnglish ? "selected" : ""}
        />
      </div>
    </>
  );
}

export default RenderSelectLanguage;
