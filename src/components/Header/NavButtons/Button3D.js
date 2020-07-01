import React from "react";
import "./Button3D.scss";

function Button3D(props) {
  return (
    <>
      <button
        className={"button3D " + props.classes}
        onClick={props.onClick}
        href="#0"
      >
        {props.children}
      </button>
    </>
  );
}

export default Button3D;
