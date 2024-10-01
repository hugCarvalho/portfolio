import React from "react";
import "./FilterBy.scss";

function FilterBar({ filterBy, setFilterBy, filters, isLanguageEnglish }) {

  return (
    <div className="FilterBy">
      <span className="filter-by__text">Filter:</span>
      <ul>
        {filters.map(option => {
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
