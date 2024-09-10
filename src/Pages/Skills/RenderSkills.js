import React from "react";
import { IsActiveContext } from "../../components/Header/NavButtons/RenderNavButtons";
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
        <SingleSkill classes="bg-javascript" name="JavaScript"/>
        <SingleSkill classes="bg-react" name="React"></SingleSkill>
        <SingleSkill classes="bg-typescript" name="Typescript"/>
        <SingleSkill classes="bg-react" name="React Query"></SingleSkill>
        <SingleSkill classes="bg-html-5" name="Semantic HTML"></SingleSkill>
        <SingleSkill classes="bg-styled-components" name="StyledComponents"/>
        <RelatedSkills
          skillOne="CSS"
          classesOne="bg-css3"
          skillTwo="Sass"
          classesTwo="bg-sass"
        />
        <SingleSkill name="Material UI"/>
        <SingleSkill classes="bg-jest" name="Jest"/>
        <SingleSkill classes="bg-jest" name="Cypress"/>
        <SingleSkill
          classes="bg-testing_library"
          name={<small>React Testing Library</small>}
        />
        <SingleSkill classes="bg-dynamoDB" name="DynamoDB"/>
        <SingleSkill classes="bg-dynamoDB" name="Cognito"/>
        <SingleSkill classes="bg-postgreSQL" name="PostgreSQL"></SingleSkill>
        <SingleSkill name="Supabase"/>
        <SingleSkill classes="bg-redux" name="Redux"></SingleSkill>
        <SingleSkill name="Datadog"/>
        <SingleSkill name="Prisma"/>


        <RelatedSkills
          skillOne="Git"
          classesOne="bg-git"
          skillTwo="GitHub"
          classesTwo="bg-github special"
        />

        {/* New Skill */}
      </main>
    </div>
  );
}

export default Skills;
