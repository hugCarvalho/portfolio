import React from "react";
import { IsActiveContext } from "../../components/Header/NavButtons/RenderNavButtons";
import { SKILLS_DATA } from "../../config/Skills";
import FilterBar from "../Projects/FilterBy/FilterBy";
import "./RenderSkills.scss";
import { RelatedSkills, SingleSkill, SingleSkillSvg } from "./SkillCards";

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
            {SKILLS_DATA.map(skill => {
              if(skill.name === "React Testing Library"){
                return <SingleSkill classes={skill.class} name={<small>React Testing Library</small>}/>
              }
              if(skill.name === "Supabase"){
                return <SingleSkillSvg src={skill.src} style={{height: "40%"}}/>
              }
              if(skill.type === "single"){
                return <SingleSkill classes={skill.class} name={skill.name}/>
              }
              if (skill.type === "singleSvg"){
                return <SingleSkillSvg src={skill.src} name={skill.name}/>
              }
              if(skill.type === "dual"){
                console.log(skill.name)
                return <RelatedSkills
                skillOne={skill.name.one}
                classesOne={skill.class.one}
                skillTwo={skill.name.two}
                classesTwo={skill.class.two}
              />
              }
              throw new Error(`skill is not mapped!${skill}`)
            })}

            {/* <SingleSkill classes="bg-react" name="React"></SingleSkill>
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
            <SingleSkillSvg src={supabase} style={{height: "40%"}}/>
            <SingleSkill classes="bg-redux" name="Redux"></SingleSkill>
            <SingleSkillSvg src={sentry} name={"Sentry"}/>
            <SingleSkillSvg src={datadog} name={"Datadog"}/>
            <SingleSkillSvg src={prisma} name={"Prisma"}/>

            <RelatedSkills
              skillOne="Git"
              classesOne="bg-git"
              skillTwo="GitHub"
              classesTwo="bg-github special"
            /> */}

            {/* New Skill */}
          </main>
    </div>
    </>
  );
}

export default Skills;
