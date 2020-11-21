import React, { useEffect, useState } from "react";
import "./RenderProjects.scss";
import ProjectCard from "./ProjectCard/ProjectCard";
import { IsActiveContext } from "../../Header/NavButtons/RenderNavButtons";
import { projectsData } from "./data/projectsData";
import { LanguageContext } from "../../../App";
import FilterBy from "./FilterBy/FilterBy";

function RenderProjects() {
  const pageIsActive = React.useContext(IsActiveContext);
  const { isLanguageEnglish } = React.useContext(LanguageContext);
  const [backCardHeight, setBackCardHeight] = useState("auto");
  const [frontSideActive, setFrontSideActive] = useState(true);
  const [id, setId] = useState(null);
  const [filterBy, setFilterBy] = useState("all");

  useEffect(() => {
    const calculateBackSideCardHeight = () => {
      const height = document.querySelector(".card__side--front");
      setBackCardHeight(`${height.offsetHeight}px`);
    };
    calculateBackSideCardHeight();
  }, [isLanguageEnglish]);

  //Sets the height of all cards to the size of the biggest card
  //Affects the front side. The back side is automatic and depends on css
  useEffect(() => {
    const changeHeight = () => {
      const cardFront = document.querySelectorAll(".card__side--front");
      cardFront.forEach(item => (item.style.height = `${backCardHeight}`));
    };
    changeHeight();
  }, [backCardHeight, filterBy, isLanguageEnglish]);

  const toggleTechInfoFeatures = id => {
    setId(id);
    setFrontSideActive(state => !state);
  };

  React.useEffect(() => {
    document.title = "Hugo's Projects";
  }, [pageIsActive]);

  const filterTechsBy = (db, option = "all") => {
    if (option === "all") return db;
    else {
      return db.filter(item => item.techs.includes(option));
    }
  };

  return (
    <>
      <FilterBy
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        isLanguageEnglish={isLanguageEnglish}
      />

      <main className="RenderProjects">
        {filterTechsBy(projectsData, filterBy).map((project, i) => {
          const language = isLanguageEnglish ? "en" : "de";
          return (
            <section key={i}>
              <ProjectCard
                backCardHeight={backCardHeight}
                setFrontSideActive={setFrontSideActive}
                frontSideActive={frontSideActive}
                project={project}
                language={language}
                toggleTechInfoFeatures={toggleTechInfoFeatures}
                id={id}
              />
            </section>
          );
        })}
      </main>
    </>
  );
}

export default RenderProjects;
