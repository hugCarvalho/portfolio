import React from "react";
import { FILTERS } from "../data/projectsData";
import "./FilterBy.scss";

function FilterBar({ filterBy, setFilterBy, isLanguageEnglish }) {

  const activeFilters = Object.values(FILTERS)
  console.log("activeFilters", activeFilters)
  return (
    <div className="FilterBy">
      <span className="filter-by__text">Filter:</span>
      <ul>
        {activeFilters.map(option => {
          return <li
          key={option}
          className={filterBy === option ? "active " : "tech-tab"}
          onClick={() => setFilterBy(option)}
        >
          {option}
        </li>
        })}
      </ul>
    </div>
  );
}

export default FilterBar;
