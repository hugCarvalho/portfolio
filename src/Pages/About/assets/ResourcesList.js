import React from "react";
import { LanguageContext } from "../../../App";
import { books, coursesCompleted, coursesOngoing } from "./ResourcesListObjects";

function ResourcesList() {
  const { isLanguageEnglish } = React.useContext(LanguageContext);
  const listEN =
    "List of books and courses read or taken: (Youtube tutorials are not included here)";
  const listDE =
    "Liste der gelesenen Bücher und belegten Kurse: (Youtube-Tutorials nicht hier enthalten):";

  return (
    <div>
      <article>
        <h5 id="resources">{isLanguageEnglish ? listEN : listDE}</h5>
        <p>{isLanguageEnglish ? "Books" : "Bücher"}</p>
        <ul>
          {books.map((item, i) => {
            return (
              <li key={i}>
                <cite>{item.title}</cite>, {item.author}
              </li>
            );
          })}
        </ul>

        <p>
          {isLanguageEnglish
            ? "Finished Online courses:"
            : "Abgeschlossene Online-Kurse:"}
        </p>
        <ul>
          {coursesCompleted.map((item, i) => {
            const { title, author, duration: courseDurationInHours } = item;
            return (
              <li key={i}>
                <i>{title}</i>{" "}
                <span className="course-duration">
                  ({courseDurationInHours} hours)
                </span>
                , {author}
              </li>
            );
          })}
        </ul>

        <p>
          {isLanguageEnglish
            ? "Ongoing Online courses:"
            : "Laufende Online-Kurse:"}
        </p>
        <ul>
          {coursesOngoing.map((item, i) => {
            const { title, author, duration: courseDurationInHours } = item;
            return (
              <li key={i}>
                <cite>{title}</cite>{" "}
                <span className="course-duration">
                  ({courseDurationInHours} hours)
                </span>
                , {author}
              </li>
            );
          })}
        </ul>
      </article>
    </div>
  );
}

export default ResourcesList;
