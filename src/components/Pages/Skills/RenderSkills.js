import React from "react";
import { IsActiveContext } from "../../Header/NavButtons/RenderNavButtons";
import "./RenderSkills.scss";
import SingleSkill, { RelatedSkills } from "./SkillCards";

function Skills() {
  const pageIsActive = React.useContext(IsActiveContext);

  React.useEffect(() => {
    document.title = "Skills";
  }, [pageIsActive]);

  return (
    <div className="Skills">
      <main>
        <div className="container__skill-card">
          <div className="wire">
            <span className="nail"></span>
          </div>
          <SingleSkill classes="bg-javascript">JavaScript</SingleSkill>
        </div>

        <div className="container__skill-card">
          <div className="wire">
            <span className="nail"></span>
          </div>
          <SingleSkill classes="bg-react">React</SingleSkill>
        </div>

        <div className="container__skill-card">
          <div className="wire">
            <span className="nail"></span>
          </div>
          <SingleSkill classes="bg-react">React Query</SingleSkill>
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
          <RelatedSkills
            skillOne="Git"
            classesOne="bg-git"
            skillTwo="GitHub"
            classesTwo="bg-github special"
          />
        </div>

        {/* New Skill */}
        <div className="container__skill-card">
          <div className="box wire">
            <span className="nail"></span>
          </div>
          <SingleSkill classes="bg-jest">Jest</SingleSkill>
        </div>

        {/* New Skill */}
        <div className="container__skill-card">
          <div className="box wire">
            <span className="nail"></span>
          </div>
          <SingleSkill classes="bg-testing_library">
            <small>React Testing Library</small>
          </SingleSkill>
        </div>
      </main>
    </div>
  );
}

export default Skills;
