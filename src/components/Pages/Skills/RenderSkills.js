import React from "react";
import "./RenderSkills.scss";
import OneSkill, { RelatedSkills } from "./SkillCards";
// import { LanguageContext } from "../../../App";

function Skills() {
  // const { isLanguageEnglish } = React.useContext(LanguageContext);

  return (
    <div className="container__skills">
      {/* <h3>{isLanguageEnglish ? "Skills" : "Fähigkeiten"}</h3> */}
      <article className="test">
        {/* PROTOTYPE */}
        <div className="container__skill-card">
          <div className="wrapper__all">
            <div className="wire">
              <span className="nail"></span>
            </div>
            <OneSkill classes="bg-javascript">Javascript</OneSkill>
          </div>
        </div>

        {/* PROTOTYPE */}
        <div className="container__skill-card">
          <div className="wrapper__all">
            <div className="wire">
              <span className="nail"></span>
            </div>
            <OneSkill classes="bg-react">React</OneSkill>
          </div>
        </div>

        {/* PROTOTYPE */}
        <div className="container__skill-card">
          <div className="wrapper__all">
            <div className="box wire">
              <span className="nail"></span>
            </div>
            <OneSkill classes="bg-html-5">HTML</OneSkill>
          </div>
        </div>
        {/* PROTOTYPE */}
        <div className="container__skill-card">
          <div className="wrapper__all">
            <div className="wire">
              <span className="nail"></span>
            </div>
            <RelatedSkills
              skillOne="CSS"
              classesOne="bg-css3"
              skillTwo="Sass"
              classesTwo="bg-sass"
            />
          </div>
        </div>
        {/* PROTOTYPE */}
        <div className="container__skill-card">
          <div className="wrapper__all">
            <div className="box wire">
              <span className="nail"></span>
            </div>
            <RelatedSkills
              skillOne="Github"
              classesOne="bg-git"
              skillTwo="Git"
              classesTwo="bg-github special"
            />
          </div>
        </div>

        {/* PROTOTYPE */}
        {/* <div className="all">
          <div className="box wire">
            <span className="nail"></span>
          </div>
          <OneSkill classes="bg-html_5">HTML</OneSkill>
        </div> */}
        {/* END PROTO */}

        {/* PROTOTYPE */}
        {/* <div className="all">
          <div className="box wire">
            <span className="nail"></span>
          </div>
          <RelatedSkills
            skillOne="CSS"
            classesOne="bg-css3"
            skillTwo="Sass"
            classesTwo="bg-sass"
          />
        </div> */}
        {/* END PROTO */}
        {/* PROTOTYPE */}
        {/* <div className="all">
          <div className="box wire">
            <span className="nail"></span>
          </div>
          <RelatedSkills
            skillOne="Git"
            classesOne="bg-git"
            skillTwo="GitHub"
            classesTwo="bg-github special"
          />
        </div> */}
        {/* END PROTO */}
        {/* 
          <section className="hard-skills">
            <OneSkill classes="bg-html_5">HTML</OneSkill>
            <RelatedSkills
              skillOne="CSS"
              classesOne="bg-css3"
              skillTwo="Sass"
              classesTwo="bg-sass"
            />
            <OneSkill classes="bg-javascript">Javascript</OneSkill>
            <OneSkill classes="bg-react">ReactJS </OneSkill>
            <RelatedSkills
              skillOne="Git"
              classesOne="bg-git"
              skillTwo="GitHub"
              classesTwo="bg-github special"
            />
          </section> */}
      </article>
    </div>
  );
}

export default Skills;
