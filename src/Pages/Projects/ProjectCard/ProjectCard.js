import React from "react";
import { Tags } from "../../../Pages/About/Tags";
import { SwiperCard } from "../../../components/SwiperCard";
import ProjectLinks from "../ProjectLinks/ProjectLinks";
import {
  renderFeatures,
  renderThirdParty
} from "../functions/functions";
import "./ProjectCard.scss";

function ProjectCard({
  backCardHeight,
  setFrontSideActive,
  frontSideActive,
  project,
  language,
  toggleTechInfoFeatures,
  id,
}) {

  const renderDescriptionText = () => {
    if (project.description[language].includes("<TESTUSER>")){
      if(language === "de") {
        return <span><b>Fullstack-Projekt</b> mit über 10.000 Codezeilen, in dem du dich mit einem 'soulmate' verbinden kannst und deine eigene Cafes-Erfahrungsliste erstellen kannst. <b>Zu testen</b> ohne registrieren, melde dich mit einem <b>Testbenutzer</b> an:<br/> Email: <b>test@user.com</b> -  Password: <b>1234567</b></span>
      }
      return <span>Fully functional <b>fullstack project</b> with over 10.000 lines of code, where you can connect with a soulmate and build your own Cafes experience. To <b>test it</b> without registering, log in using a <b>test user:</b> <br/> Email: <b>test@user.com</b> -  Password: <b>1234567</b></span>
    }
    return project.description[language]
  }

  return (
    <>
      <div
        className="ProjectCard"
        aria-label="project card"
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
                {project.id === "cafes" || project.id === "wordScrambler" ? <SwiperCard dataArr={project.img}/> : <img src={project.img} alt="app screenshot"/>}
              </figure>
            {/* <a href={project.live} rel="noopener noreferrer" target="_blank">
            </a> */}

          {/* DESCRIPTION TEXT FRONT*/}
          <div className="container__text-section">
            <section className="description">
              {renderDescriptionText()}
            </section>

            {/* FEATURES FRONT*/}
            <section className="features" style={{paddingBottom: "10px"}}>
              <h4>{language === "en" ? "Features:" : "Eigenschaften"}</h4>
              <ul>{renderFeatures(project, language)}</ul>
            </section>

            {/* SKILLS TAGS   */}
            <Tags skills={project.techInfo.tags}/>

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
            !frontSideActive && project.id === id ? { transform: "rotate(0)" } : null
          }
        >
          <section className="container__text-section">
            {/* TECH INFO */}
            <h2>{language === "en" ? "Technical Info:" : "Technische Info"}</h2>
            <p>{`${project.techInfo.main}`}</p>
            <p>{`${project.techInfo.styled}`}</p>
            {project.techInfo.responsive && <p>Responsive</p>}
            {project.techInfo.specsText.en && <p>{project.techInfo.specsText.en}</p>}
            <p>{project.techInfo.tested && `Tested with ${project.techInfo.tested}`}</p>
            {/* TAGS */}
<br/>
            <Tags skills={project.techInfo.tags}/>

            {/* SPECIFICS */}
            {/* <h3>{language === "en" ? "Project specifics:" : "Projekt Details"}</h3> */}
            {/* {renderProjectSpecifics(project)} */}

            {/* Third Party used in project */}
            <h3>Third party:</h3>
            <ul>{renderThirdParty(project)}</ul>
          </section>

          {/* BUTTON FLIP CARD */}
          <div className="btn__flip-card">
            <button onClick={() => toggleTechInfoFeatures(project.id)}>
              {language === "en" ? "< Features" : "< Eigenschaften"}
            </button>
          </div>
        </div>
      </div>

      {/* LINKS */}
      <ProjectLinks project={project}/>
    </>
  );
}

export default ProjectCard;
