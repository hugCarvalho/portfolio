import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { LanguageContext } from "../../App";
import { IsActiveContext } from "../../components/Header/NavButtons/RenderNavButtons";
import { PROJECT_FILTERS, projectsData } from "./data/projectsData";
import FilterBar from "./FilterBy/FilterBy";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./RenderProjects.scss";

const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: row;
  background: "orange";
  width: 100%;
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
const DatumPlaque = styled(ProjectsHeading)`
  background: linear-gradient(217deg, rgb(132 132 132), rgba(255, 0, 0, 0) 70.71%), linear-gradient(127deg, rgb(152 152 152 / 93%), rgba(0, 255, 0, 0) 70.71%), linear-gradient(336deg, rgb(110 110 110), rgba(0, 0, 255, 0) 82.71%);
  /* background: linear-gradient(#676464, #827d7d); */
  padding: 15px;
  width: fit-content;
  border-radius: 3px;
  position: relative;
`
const Nail = styled.span`
  position: absolute;
  background: gray;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  box-shadow: 2px 2px 5px 0px rgb(14, 13, 13);
`
const Nail1 = styled(Nail)`
  left: 4%;
  top: 5%;
`
const Nail2 = styled(Nail)`
  right: 4%;
  top: 5%;
`
const Nail3 = styled(Nail)`
  right: 4%;
  bottom: 5%;
`
const Nail4 = styled(Nail)`
  left: 4%;
  bottom: 5%;
`
const Engraved = styled.div`
  font-size: 23px;
  color: gray;
  color: #989693;
  text-align: center;
  padding: 10px 30px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  text-shadow: 0px 0px 1px rgb(0 0 0 / 60%), 0px 1px 3px rgba(0, 0, 0, 0.4);
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

      <main className="RenderProjects">
        {/* <WrapperTextAndContent> */}
        <DialogText>
          Side projects were self concepted and executed, they are <span style={{fontWeight: 700}}>not</span> code-along projects.
        </DialogText>

        {/* DATE PLAQUE */}
        {filterBy === "all" && <DatumPlaque>
          <div style={{border: "2px solid darkgrey", borderRadius: "12px"}}>
            <div style={{background: "gray", padding:"0px", textAlign: "center"}}>
              <Engraved>
              2024
              </Engraved>
            </div>
          </div>
          <Nail1/>
          <Nail2/>
          <Nail3/>
          <Nail4/>
        </DatumPlaque>}

        {/* PROJECTS */}
        <ProjectsContainer>
        {filterTechsBy(projectsData, filterBy)
          .map((project, i) => {
            const language = isLanguageEnglish ? "en" : "de";
            return (
              <div key={i}>
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
          {/* </WrapperTextAndContent> */}
      </main>
    </>
  );
}

export default RenderProjects;
