import React from "react";
import "./FilterBy.scss";

function FilterBy({ filterBy, setFilterBy, isLanguageEnglish }) {
  return (
    <div className="FilterBy">
      <span className="filter-by__text">Filter:</span>
      <ul>
        <li
          className={filterBy === "all" ? "active " : "tech-tab"}
          onClick={() => setFilterBy("all")}
        >
          All
        </li>

        <li
          className={filterBy === "Hooks" ? "active " : "tech-tab"}
          onClick={() => setFilterBy("Hooks")}
        >
          Hooks
        </li>
        <li
          className={filterBy === "Redux" ? "active " : "tech-tab"}
          onClick={() => setFilterBy("Redux")}
        >
          Redux
        </li>
        <li
          className={filterBy === "Tests" ? "active " : "tech-tab"}
          onClick={() => setFilterBy("Tests")}
        >
          Tests
        </li>
        <li
          className={filterBy === "API" ? "active " : "tech-tab"}
          onClick={() => setFilterBy("API")}
        >
          API
        </li>
      </ul>
    </div>
  );
}

export default FilterBy;
