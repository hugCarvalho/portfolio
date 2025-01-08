import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { LanguageContext } from "../../App";
import { DatumPlaque } from "../../components/DatumPlaque";
import moi from "../../components/Header/MyInfoCard/MyPic/media/moi.jpg";
import { IsActiveContext } from "../../components/Header/NavButtons/RenderNavButtons";
import { server } from "../../config/server";
import { PROJECT_FILTERS, PROJECTS_DATA_STRUCTURE } from "./data/projectsData";
import FilterBar from "./FilterBy/FilterBy";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./RenderProjects.scss";

const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  position: relative;
`
const TextDialogContainer = styled.div`
  display: flex;
  width: fit-content;
  align-self: flex-end;
  margin-right: 5%;
  margin-bottom: 30px;
  position: relative;

  .notVisible{
    opacity: 0;
    transition: opacity 2s ease-in-out;
  }
  .visible {
    opacity: .8;
    transition: opacity 2s ease-in-out;
  }
`
const MyPic = styled.figure`
  position: absolute;
  width: 67.55px;
  height: 67.7px;
  overflow: hidden;
  border-radius: 50%;
  top: -36px;
  left: 162px;

  .notVisible{
    transition: opacity 2s ease-in-out;
    visibility: hidden;
  }
  .visible {
    visibility: hidden;
    transition: opacity 2s ease-in-out;
  }

  img {
    position: absolute;
    height: 6.74rem;
    border: 2px solid #d8d8da;
    border-radius: 50%;
  }
`
const DialogText = styled.p`
  position: relative;
  max-width: 350px;
  width: fit-content;
  margin: 0 0 0 20px;
  align-self: flex-end;
  background: gray;
  border-radius: 12px;
  color: white;
  font-size: large;
  padding: 34px 10px 10px 20px;
`

function RenderProjects() {
  const pageIsActive = React.useContext(IsActiveContext);
  const { isLanguageEnglish } = React.useContext(LanguageContext);
  const [cardHeight, setCardHeight] = useState("auto");
  const [frontSideActive, setFrontSideActive] = useState(true);
  const [id, setId] = useState(null);
  const [filterBy, setFilterBy] = useState("all");
  const [isDomIsLoaded, setDomIsLoaded] = useState(false)
  const {pathname} = useLocation()

  React.useEffect(()=> {
    fetch(`${server}${pathname}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
    })
  }, [])


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

  useEffect(()=> {
    if(cardHeight !== "auto"){
       setDomIsLoaded(true)
    }
  }, [cardHeight])

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
        <TextDialogContainer>
        {/* <DialogText className={isDomIsLoaded ? "visible" : undefined}> */}
        <DialogText className={isDomIsLoaded ? "visible" : "notVisible"}>
          All projects were designed, engineered and executed by myself, they are
          <span style={{fontWeight: 700}}>{" "}not{" "}</span>
          code-along projects.
        </DialogText>
        <MyPic className={isDomIsLoaded ? "visible" : "notVisible"}>
          <img src={moi} alt="me" title="about me" />
        </MyPic>
        </TextDialogContainer>

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
