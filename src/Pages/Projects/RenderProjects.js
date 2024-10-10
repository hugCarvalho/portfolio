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

const ProjectsText = styled.p`
  color: white;
  padding: 10px 20px;
  font-size: large;
  background: gray;
  margin: 0 20px 20px 20px;
  border-radius: 12px;
  width: fit-content;
`

const DatumPlaque2 = styled(ProjectsText)`
  /* opacity: .5; */
  padding: 15px;
  width: fit-content;
  border-radius: 3px;
  position: relative;
`
const DatumPlaque = styled(ProjectsText)`
  background: linear-gradient(217deg, rgb(132 132 132), rgba(255, 0, 0, 0) 70.71%), linear-gradient(127deg, rgb(152 152 152 / 93%), rgba(0, 255, 0, 0) 70.71%), linear-gradient(336deg, rgb(110 110 110), rgba(0, 0, 255, 0) 82.71%);
  /* background: linear-gradient(#676464, #827d7d); */
  padding: 15px;
  width: fit-content;
  border-radius: 3px;
  position: relative;
`

const Nail = styled.span`
  /* position: absolute;
  background: gray;
  width: 10px;
  height: 10px;
  /* top: 2px; */
  /* left:0; */
  /* margin-top: -5px; */
  /* border-radius: 100%;
  box-shadow: 3px 3px 5px 1px rgb(14, 13, 13);  */
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
display: flex;
align-items: center;
justify-content: center;
justify-content: center;
font-size: 28px;
  background-color: #666666;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: border-box;

  color: transparent;
  text-shadow: rgba(245,245,245,0.5) 3px 5px 1px;

`
const Engraved4 = styled.div`
 font-size: 22px; /* Increase the text size */
  /* background: #f8bf32; Set the warm, summer-like background color */
  color: gray; /* Set a rich dark color for the text */
  text-align: center; /* Center align the text */
  padding: 10px 30px; /* Add padding around the text */
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3); /* Create depth with a box shadow */
  text-shadow: -2px -2px 1px rgba(255, 255, 255, 0.6),
    3px 3px 3px rgba(0, 0, 0, 0.4); /* Create the embossed effect */
`
const Engraved2 = styled.div`
  font-size: 23px;
  color: gray;
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
        <ProjectsText>
          Projects that I developed on the side and have deployed. All projects were self concepted and executed, they are not code along projects.
        </ProjectsText>
        <DatumPlaque>
        <div style={{border: "2px solid darkgrey", borderRadius: "12px"}}>
          <div style={{background: "gray", padding:"0px", textAlign: "center"}}>
            <Engraved2>
            2024
            </Engraved2>
          </div>
        </div>
        <Nail1/>
        <Nail2/>
        <Nail3/>
        <Nail4/>
        </DatumPlaque>
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
