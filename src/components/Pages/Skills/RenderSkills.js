import React from "react";
import "./RenderSkills.scss";
import SingleSkill, { RelatedSkills } from "./SkillCards";

function Skills() {
  return (
    <div className="Skills">
      <main>
        {/* New Skill */}
        <div className="container__skill-card">
          <div className="wire">
            <span className="nail"></span>
          </div>
          <SingleSkill classes="bg-javascript">JavaScript</SingleSkill>
        </div>

        {/* New Skill */}
        <div className="container__skill-card">
          <div className="wire">
            <span className="nail"></span>
          </div>
          <SingleSkill classes="bg-react">React</SingleSkill>
        </div>

        {/* New Skill */}
        <div className="container__skill-card">
          <div className="wire">
            <span className="nail"></span>
          </div>
          <SingleSkill classes="bg-redux">Redux</SingleSkill>
        </div>

        {/* New Skill */}
        <div className="container__skill-card">
          <div className="box wire">
            <span className="nail"></span>
          </div>
          <SingleSkill classes="bg-html-5">Semantic HTML</SingleSkill>
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
      </main>
    </div>
  );
}

export default Skills;
