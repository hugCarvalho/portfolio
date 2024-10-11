import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { LanguageContext } from "../../App";
import { DatumPlaque } from "../../components/DatumPlaque";
import { IsActiveContext } from "../../components/Header/NavButtons/RenderNavButtons";
import { PROJECT_FILTERS, PROJECTS_DATA_STRUCTURE } from "./data/projectsData";
import FilterBar from "./FilterBy/FilterBy";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./RenderProjects.scss";

const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
`
const ProjectsHeading = styled.p`
  color: white;
  padding: 10px 20px;
  font-size: large;
  background: gray;
  margin: 0 20px 20px 20px;
  border-radius: 12px;
  width: fit-content;
`
const DialogText = styled(ProjectsHeading)`
  align-self: flex-end;
  margin: 0 0 20px 20px;
  opacity: .8;
`

function RenderProjects() {
  const pageIsActive = React.useContext(IsActiveContext);
  const { isLanguageEnglish } = React.useContext(LanguageContext);
  const [cardHeight, setCardHeight] = useState("auto");
  const [frontSideActive, setFrontSideActive] = useState(true);
  const [id, setId] = useState(null);
  const [filterBy, setFilterBy] = useState("all");

  //GETS the height of the biggest card
  useEffect(() => {
    const calculateCardHeight = () => {
      const allCards = document.querySelectorAll(".card__side--front");
      const cardHeight = [];
      allCards.forEach(card => cardHeight.push(card.scrollHeight));
      const maxCardHeight = Math.max(...cardHeight);
      setCardHeight(`${maxCardHeight}px`);
    };
    calculateCardHeight();
  }, [isLanguageEnglish]);

  //SETS the height for all cards based on the height of the biggest card
  useEffect(() => {
    const changeHeight = () => {
      const cardFront = document.querySelectorAll(".card__side--front");
      cardFront.forEach(item => (item.style.height = `${cardHeight}`));
    };
    changeHeight();
  }, [cardHeight, filterBy, isLanguageEnglish]);

  useEffect(() => {
    document.title = "Hugo's Projects";
  }, [pageIsActive]);

  const toggleTechInfoFeatures = id => {
    setId(id);
    setFrontSideActive(state => !state);
  }

  const filterTechsBy = (db, option = "all") => {
    if (option === "all") {
      return db
    } else {
      return db.filter(item => item.techs.includes(option) || item.category.includes(option))
    }
  }

  return (
    <>
      <FilterBar
        filters={Object.values(PROJECT_FILTERS)}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        isLanguageEnglish={isLanguageEnglish}
      />
      {/* Projects container  */}
      <main className="RenderProjects">
        <DialogText>
          Side projects were self concepted and executed, they are <span style={{fontWeight: 700}}>not</span> code-along projects.
        </DialogText>

        {/* DATE PLAQUE */}
        {/* {filterBy === "all" && <>
          <DatumPlaque/>
          <div >
                <DatumPlaque/>
                <ProjectCard
                  backCardHeight={cardHeight}
                  setFrontSideActive={setFrontSideActive}
                  frontSideActive={frontSideActive}
                  project={PROJECTS_DATA_STRUCTURE[0]}
                  language={isLanguageEnglish ? "en" : "de"}
                  toggleTechInfoFeatures={toggleTechInfoFeatures}
                  id={id}
                />
                </div>
        </>} */}

        {/* PROJECTS */}
        <ProjectsContainer>
        {filterTechsBy(PROJECTS_DATA_STRUCTURE, filterBy)
          .map((project, i) => {
            const language = isLanguageEnglish ? "en" : "de"
            return (
              <div key={i}>
                <DatumPlaque datum={project.datum}/>
                <ProjectCard
                  backCardHeight={cardHeight}
                  setFrontSideActive={setFrontSideActive}
                  frontSideActive={frontSideActive}
                  project={project}
                  language={language}
                  toggleTechInfoFeatures={toggleTechInfoFeatures}
                  id={id}
                />
                </div>
              );
            })
            .reverse()}
            </ProjectsContainer>
      </main>
    </>
  );
}

export default RenderProjects;
