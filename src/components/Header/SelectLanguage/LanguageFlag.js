import React from "react";
import "./LanguageFlag.scss";

function LanguageFlag(props) {
  return (
    <>
      <button onClick={() => props.onClick()} className="language-flag">
        <img
          className={`flags ${props.isSelected}`}
          src={props.src}
          alt={props.alt}
        />
      </button>
    </>
  );
}

export default LanguageFlag;
