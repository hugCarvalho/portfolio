import React, { useState, useEffect } from "react";
import "./ProjectCard.scss";
import { projectsData } from "../data/projectsData";
import ProjectLinks from "../ProjectLinks/ProjectLinks";
import {
  renderThirdParty,
  renderFeatures,
  renderProjectSpecifics,
} from "../functions/functions";
import { LanguageContext } from "../../../../App";

function ProjectCard() {
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
      cardFront.forEach((item) => (item.style.height = `${backCardHeight}`));
    };
    changeHeight();
  }, [backCardHeight]);

  const toggleTechInfoFeatures = (id) => {
    setId(id);
    setFrontSideActive((state) => !state);
    // console.log(id);
  };

  return (
    <>
      {/* CARDS CONTAINER */}
      <main className="ProjectCard">
        {projectsData.map((project, i) => {
          // for the implementation of this website as it is, it's ok to use the index as a key for react
          const language = isLanguageEnglish ? "en" : "de";
          return (
            <section key={i}>
              <div
                aria-label="project card"
                className="container__card"
                style={{ height: backCardHeight }}
                onMouseLeave={() => setFrontSideActive(true)}
              >
                {/* CARD FRONT */}
                <div
                  className="card__side card__side--front"
                  style={
                    !frontSideActive && project.id === id
                      ? { transform: "rotateY(180deg)" }
                      : null
                  }
                >
                  {/* Project Name */}
                  <p className="project-name">{project.name}</p>

                  {/* IMG */}
                  <figure className="project-screenshot">
                    <a href={project.live} rel="noopener noreferrer" target="_blank">
                      <img src={project.img} alt="app screenshot" />
                    </a>
                  </figure>

                  {/* DESCRIPTION TEXT FRONT*/}
                  <div className="container__text-section">
                    <section className="description">
                      {" "}
                      {project.description[language]}
                    </section>

                    {/* FEATURES FRONT*/}
                    <section className="features">
                      <h4>{isLanguageEnglish ? "Features:" : "Eigenschaften"}</h4>
                      <ul>{renderFeatures(project, language)}</ul>
                    </section>

                    {/* BUTTON FLIP CARD */}
                    <div className="btn__flip-card">
                      <button onClick={() => toggleTechInfoFeatures(project.id)}>
                        Tech Info {">"}
                      </button>
                    </div>
                  </div>
                </div>
                {/* END card front****************  */}

                {/* CARD BACK */}
                <div
                  className="card__side card__side--back"
                  style={
                    !frontSideActive && project.id === id
                      ? { transform: "rotate(0)" }
                      : null
                  }
                >
                  <section className="container__text-section">
                    {/* TECH INFO */}
                    <h2>{isLanguageEnglish ? "Technical Info:" : "Technische Info"}</h2>
                    <p>{`${project.techInfo.main}`}</p>
                    <p>{`${project.techInfo.styled}`}</p>
                    {project.techInfo.responsive && <p>Responsive</p>}
                    {project.techInfo.specsText.en && (
                      <p>{project.techInfo.specsText.en}</p>
                    )}

                    {/* SPECIFICS */}
                    <h3>
                      {isLanguageEnglish ? "Project specifics:" : "Projekt Details"}
                    </h3>
                    {renderProjectSpecifics(project)}

                    {/* Third Party used in project */}
                    <h3>Third party:</h3>
                    <ul>{renderThirdParty(project)}</ul>
                  </section>

                  {/* BUTTON FLIP CARD */}
                  <div className="btn__flip-card">
                    <button onClick={() => toggleTechInfoFeatures(project.id)}>
                      {isLanguageEnglish ? "< Features" : "< Eigenschaften"}
                    </button>
                  </div>
                </div>
              </div>

              {/* LINKS */}
              <ProjectLinks project={project} />
            </section>
          );
        })}
      </main>
    </>
  );
}

export default ProjectCard;
