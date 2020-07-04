import React, { useState, useEffect } from "react";
import "./Card.scss";
import { projectsData } from "../data/projectsData";
import LinksTo from "../ProjectLinks/ProjectLinks";
import {
  renderThirdParty,
  renderFeatures,
  renderProjectSpecifics,
} from "../functions/functions";
import { LanguageContext } from "../../../../App";

function Card() {
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

  const clickedFN = id => {
    setId(id);
    setFrontSideActive(state => !state);
  };
  // for the purposes of this website it's ok to use the index as a key for react
  return (
    <>
      {/* CARDS CONTAINER */}
      <div className="container__cards">
        {projectsData.map((project, i) => {
          const language = isLanguageEnglish ? "en" : "de";

          return (
            <div key={i} className="wrapper__card-live-code">
              <div
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
                  <div className="project-name">{project.name}</div>

                  {/* IMG */}
                  <div className="container__project-image">
                    <a
                      href={project.live}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img src={project.img} alt="app screenshot" />
                    </a>
                  </div>

                  {/* TEXT  FRONT*/}
                  <div className="container__text-section">
                    <section className="description">
                      {" "}
                      {project.description[language]}
                    </section>

                    {/* FEATURES FRONT*/}
                    <section className="features">
                      <h4>Features:</h4>
                      <ul>{renderFeatures(project, language)}</ul>
                    </section>

                    {/* BUTTON FLIP CARD */}
                    <div className="btn__flip-card">
                      <button onClick={() => clickedFN(project.id)}>
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
                  <div className="container__text-section">
                    {/* TECH INFO */}
                    <h2>Technical Info:</h2>
                    <br />
                    <p>{`Built with ${project.techInfo.main}`}</p>
                    <p>{`Styled with ${project.techInfo.styled}`}</p>
                    {project.techInfo.responsive && <p>Responsive</p>}

                    {/* SPECIFICS: */}
                    <h3>Project specifics:</h3>
                    {renderProjectSpecifics(project)}

                    {/* Third Party used in project */}
                    <h3>Third party used:</h3>
                    {renderThirdParty(project)}
                  </div>

                  {/* BUTTON FLIP CARD */}
                  <div className="btn__flip-card">
                    <button onClick={() => clickedFN(project.id)}>
                      {isLanguageEnglish ? "< Features" : "< Eigenschaften"}
                    </button>
                  </div>
                </div>
              </div>

              {/* LINKS */}
              <LinksTo project={project} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Card;
