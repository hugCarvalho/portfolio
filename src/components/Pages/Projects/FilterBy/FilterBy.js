import React from "react";
import "./FilterBy.scss";

export function Emoji(props) {
  return (
    <span
      title={props.title}
      className={props.className}
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
    >
      {props.symbol}
    </span>
  );
}

function FilterBy({ filterBy, setFilterBy, isLanguageEnglish }) {
  return (
    <div className="FilterBy">
      <span className="filter-by__text">Filter:</span>
      {/* <h3>
        <Emoji
          className="emoji smallerScreens"
          label="filter by"
          symbol="🎯"
          title="filter by"
        />
      </h3> */}
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
