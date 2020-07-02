import React from "react";
import "./SkillCards.scss";

function OneSkill(props) {
  return (
    <div className="container__skill-box center">
      <div className={`logo ${props.classes}`} />
      <span>{props.children}</span>
    </div>
  );
}

export function RelatedSkills(props) {
  return (
    <>
      <div className="container__skill-box">
        <div className="wrapper__logo-text">
          <div className={`logo ${props.classesOne}`} />
          <span>{props.skillOne}</span>
        </div>
        <div className="wrapper__logo-text">
          <span>{props.skillTwo}</span>
          <div className={`logo ${props.classesTwo}`} />
        </div>
      </div>
    </>
  );
}

//<a target="_blank" href="https://icons8.com/icons/set/sass">Sass icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
export default OneSkill;