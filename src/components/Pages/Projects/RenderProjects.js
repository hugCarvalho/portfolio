import React, { useEffect, useState } from "react";
import "./RenderProjects.scss";
import ProjectCard from "./ProjectCard/ProjectCard";
import { IsActiveContext } from "../../Header/NavButtons/RenderNavButtons";
import { projectsData } from "./data/projectsData";
import { LanguageContext } from "../../../App";

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
      <div className="filter-by">
        <span className="filter-by__text">Filter by technology:</span>
        <ul>
          <li
            className={filterBy === "all" ? "one " : "all"}
            onClick={() => setFilterBy("all")}
          >
            all
          </li>

          <li
            className={filterBy === "Hooks" ? "one " : "all"}
            onClick={() => setFilterBy("Hooks")}
          >
            Hooks
          </li>
          <li
            className={filterBy === "Redux" ? "one " : "all"}
            onClick={() => setFilterBy("Redux")}
          >
            Redux
          </li>
          <li
            className={filterBy === "Tests" ? "one " : "all"}
            onClick={() => setFilterBy("Tests")}
          >
            Tests
          </li>
          <li
            className={filterBy === "API" ? "one " : "all"}
            onClick={() => setFilterBy("API")}
          >
            Tests
          </li>
        </ul>
      </div>
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
