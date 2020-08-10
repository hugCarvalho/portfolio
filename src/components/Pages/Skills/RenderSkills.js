import React from "react";
import "./RenderSkills.scss";
import OneSkill, { RelatedSkills } from "./SkillCards";

function Skills() {
  return (
    <div className="container__skills">
      <section className="wrapper__all">
        {/* New Skill */}
        <div className="container__skill-card">
          <div className="wire">
            <span className="nail"></span>
          </div>
          <OneSkill classes="bg-javascript">JavaScript</OneSkill>
        </div>

        {/* New Skill */}
        <div className="container__skill-card">
          <div className="wire">
            <span className="nail"></span>
          </div>
          <OneSkill classes="bg-react">React</OneSkill>
        </div>

        {/* New Skill */}
        <div className="container__skill-card">
          <div className="wire">
            <span className="nail"></span>
          </div>
          <OneSkill classes="bg-redux">Redux</OneSkill>
        </div>

        {/* New Skill */}
        <div className="container__skill-card">
          <div className="box wire">
            <span className="nail"></span>
          </div>
          <OneSkill classes="bg-html-5">HTML</OneSkill>
        </div>

        {/* New Skill */}
        <div className="container__skill-card">
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

        {/* New Skill */}
        <div className="container__skill-card">
          <div className="box wire">
            <span className="nail"></span>
          </div>
          <RelatedSkills
            skillOne="Git"
            classesOne="bg-git"
            skillTwo="GitHub"
            classesTwo="bg-github special"
          />
        </div>
      </section>
    </div>
  );
}

export default Skills;
