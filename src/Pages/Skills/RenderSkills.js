import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { IsActiveContext } from "../../components/Header/NavButtons/RenderNavButtons";
import useIsDesktop from "../../components/Hooks";
import { server } from "../../config/server";
import { SKILL_CATEGORIES, SKILLS_DATA } from "../../config/Skills";
import FilterBar from "../Projects/FilterBy/FilterBy";
import "./RenderSkills.scss";
import { RelatedSkills, SingleSkill, SingleSkillSvg } from "./SkillCards";

function Skills() {
  const pageIsActive = React.useContext(IsActiveContext);
  const [filterBy, setFilterBy] = useState("all")
  const {pathname} = useLocation()
  const isDesktop = useIsDesktop()

  React.useEffect(()=> {
    fetch(`${server}${pathname}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
    })
  }, [])

  React.useEffect(() => {
    document.title = "Skills";
  }, [pageIsActive]);

  const skillsData = filterBy === "all" ? SKILLS_DATA : SKILLS_DATA.filter(skill => {
    return filterBy === skill.category
  })
  const hideFilter = pathname === "/skills" && !isDesktop

  return (
    <>
      {!hideFilter && <FilterBar filterBy={filterBy} setFilterBy={setFilterBy} filters={Object.values(SKILL_CATEGORIES)}/>}
      <div className="Skills">
        <main>
          {skillsData.map((skill, i) => {
            if(skill.name === "React Testing Library"){
              return <SingleSkill key={i} classes={skill.class} name={<small>React Testing Library</small>}/>
            }
            if(skill.name === "Supabase"){
              return <SingleSkillSvg key={i} src={skill.src} style={{height: "40%"}}/>
            }
            if(skill.type === "single"){
              return <SingleSkill key={i} classes={skill.class} name={skill.name}/>
            }
            if (skill.type === "singleSvg"){
              return <SingleSkillSvg key={i} src={skill.src} name={skill.name}/>
            }
            if(skill.type === "dual"){
              return <RelatedSkills
                key={i}
                skillOne={skill.name.one}
                classesOne={skill.class.one}
                skillTwo={skill.name.two}
                classesTwo={skill.class.two}
            />
            }
            throw new Error(`skill is not mapped!${skill}`)
          })}
        </main>
      </div>
    </>
  );
}

export default Skills;
