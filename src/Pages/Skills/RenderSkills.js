import React from "react";
import { IsActiveContext } from "../../components/Header/NavButtons/RenderNavButtons";
import FilterBar from "../Projects/FilterBy/FilterBy";
import "./RenderSkills.scss";
import { RelatedSkills, SingleSkill, SingleSkillSvg } from "./SkillCards";
import datadog from "./assets/datadog.svg";
import mui from "./assets/material-ui.svg";
import prisma from "./assets/prisma-3.svg";
import sentry from "./assets/sentry.svg";
import supabase from "./assets/supabase.svg";


function Skills() {
  const pageIsActive = React.useContext(IsActiveContext);

  React.useEffect(() => {
    document.title = "Skills";
  }, [pageIsActive]);

  return (
    <>
      <FilterBar></FilterBar>
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
            {/* <SingleSkill name="Material UI"/> */}
            <SingleSkillSvg src={mui} name={"Material UI"}/>
            <SingleSkill classes="bg-jest" name="Jest"/>
            <SingleSkill classes="bg-jest" name="Cypress"/>
            <SingleSkill
              classes="bg-testing_library"
              name={<small>React Testing Library</small>}
            />
            <SingleSkill classes="bg-dynamoDB" name="DynamoDB"/>
            <SingleSkill classes="bg-dynamoDB" name="Cognito"/>
            <SingleSkill classes="bg-postgreSQL" name="PostgreSQL"></SingleSkill>
            {/* <SingleSkill name="Supabase"/> */}
            <SingleSkillSvg src={supabase} style={{height: "40%"}}/>
            <SingleSkill classes="bg-redux" name="Redux"></SingleSkill>
            {/* <SingleSkill name="Sentry"/> */}
            <SingleSkillSvg src={sentry} name={"Sentry"}/>
            {/* <SingleSkill name="Datadog"/> */}
            <SingleSkillSvg src={datadog} name={"Datadog"}/>
            {/* <SingleSkill name="Prisma"/> */}
            <SingleSkillSvg src={prisma} name={"Prisma"}/>



            <RelatedSkills
              skillOne="Git"
              classesOne="bg-git"
              skillTwo="GitHub"
              classesTwo="bg-github special"
            />

            {/* New Skill */}
          </main>
    </div>
    </>
  );
}

export default Skills;
