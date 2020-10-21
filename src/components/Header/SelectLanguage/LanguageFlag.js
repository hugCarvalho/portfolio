import React from "react";
import "./LanguageFlag.scss";

function LanguageFlag(props) {
  return (
    <>
      <button onClick={props.onClick} className="LanguageFlag">
        <figure>
          <img className={`flags ${props.isSelected}`} src={props.src} alt={props.alt} />
        </figure>
      </button>
    </>
  );
}

export default LanguageFlag;
