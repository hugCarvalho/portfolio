import React from "react";
import { books } from "./learningResourcesObjects";
import { coursesCompleted } from "./learningResourcesObjects";
import { coursesOngoing } from "./learningResourcesObjects";
import { LanguageContext } from "../../../../App";

function ListOfResources() {
  const { isLanguageEnglish } = React.useContext(LanguageContext);
  const listEN =
    "List of books and courses read or taken: (Youtube tutorials are not included here)";
  const listDE =
    "Liste der gelesenen oder belegten Bücher und Kurse: (Youtube-Tutorials nicht hier enthalten):";

  return (
    <div>
      <article>
        <h5 id="resources">{isLanguageEnglish ? listEN : listDE}</h5>
        <p>{isLanguageEnglish ? "Books" : "Bücher"}</p>
        <ul>
          {books.map((item, i) => {
            console.log(item);
            return (
              <li key={i}>
                <i>{item.title}</i>, {item.author}
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
            const { title, author, duration } = item;
            return (
              <li key={i}>
                <i>{title}</i>{" "}
                <span className="duration">({duration} hours)</span>, {author}
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
            const { title, author, duration } = item;
            return (
              <li key={i}>
                <i>{title}</i>{" "}
                <span className="duration">({duration} hours)</span>, {author}
              </li>
            );
          })}
        </ul>
      </article>
    </div>
  );
}

export default ListOfResources;
