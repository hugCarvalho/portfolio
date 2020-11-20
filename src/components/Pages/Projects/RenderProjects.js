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
  }, [backCardHeight]);

  const toggleTechInfoFeatures = id => {
    setId(id);
    setFrontSideActive(state => !state);
  };

  React.useEffect(() => {
    document.title = "Hugo's Projects";
  }, [pageIsActive]);

  return (
    <main className="RenderProjects">
      {projectsData.map((project, i) => {
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
  );
}

export default RenderProjects;
