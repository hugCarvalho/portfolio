import React from "react";
import "./SkillCards.scss";

function SingleSkill({classes, name}) {
  return (
    <div className="container__skill-card">
      <div className="wire">
        <span className="nail"></span>
      </div>
      <div className="skill-box center">
        {classes && <div className={`logo ${classes}`}/>}
        <span>{name}</span>
      </div>
    </div>
  );
}

export function RelatedSkills(props) {
  return (
    <div className="container__skill-card">
          <div className="wire">
            <span className="nail"></span>
          </div>
      <div className="skill-box">
        <div className="wrapper__logo-text">
          <div className={`logo ${props.classesOne}`} />
          <span>{props.skillOne}</span>
        </div>
        <div className="wrapper__logo-text">
          <span>{props.skillTwo}</span>
          <div className={`logo ${props.classesTwo}`} />
        </div>
      </div>
    </div>
  );
}

export default SingleSkill;
