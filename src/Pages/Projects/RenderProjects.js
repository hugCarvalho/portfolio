import React, { useEffect, useState } from "react";
import { LanguageContext } from "../../App";
import { IsActiveContext } from "../../components/Header/NavButtons/RenderNavButtons";
import { PROJECT_FILTERS, projectsData } from "./data/projectsData";
import FilterBar from "./FilterBy/FilterBy";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./RenderProjects.scss";

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
        {filterTechsBy(projectsData, filterBy)
          .map((project, i) => {
            const language = isLanguageEnglish ? "en" : "de";
            return (
              <section key={i}>
                <ProjectCard
                  backCardHeight={cardHeight}
                  setFrontSideActive={setFrontSideActive}
                  frontSideActive={frontSideActive}
                  project={project}
                  language={language}
                  toggleTechInfoFeatures={toggleTechInfoFeatures}
                  id={id}
                />
              </section>
            );
          })
          .reverse()}
      </main>
    </>
  );
}

export default RenderProjects;
