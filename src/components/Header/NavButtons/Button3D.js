import React from "react";
import "./Button3D.scss";

function Button3D(props) {
  return (
    <>
      <button
        type={props.type}
        className={"button3D " + props.classes}
        onClick={props.onClick}>
        {props.children}
      </button>
    </>
  );
}

export default Button3D;
