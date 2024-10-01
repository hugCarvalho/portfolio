import React from "react";
import "./SkillCards.scss";

export function SingleSkill({classes, name}) {
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

export const SingleSkillSvg = ({src, name, style}) => {
  return (
    <div className="container__skill-card">
  <div className="wire">
  <span className="nail"></span>
  </div>
    <div className="skill-box center">
      <div style={{height: "50%", ...style}} >
        {<img src={src} width={"100%"} height={"100%"} alt={`${name} icon`}/>}
      </div>
      {name && <span>{name}</span>}
  </div>
  </div>

  )
}
