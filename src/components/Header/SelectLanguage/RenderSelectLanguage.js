import React, { useContext } from "react";
import "./RenderSelectLanguage.scss";
import LanguageFlag from "./LanguageFlag";
import FlagEN from "./assets/flagEngland.png";
import FlagDE from "./assets/flagGermany.png";
import { LanguageContext } from "../../../App";

function RenderSelectLanguage() {
  // prettier-ignore
  const { isLanguageEnglish, setIsLanguageEnglish } = useContext(LanguageContext);

  return (
    <section className="RenderSelectLanguage">
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
    </section>
  );
}

export default RenderSelectLanguage;
