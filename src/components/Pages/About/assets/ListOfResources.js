import React from "react";
import { books } from "./learningResourcesObjects";
import { coursesCompleted } from "./learningResourcesObjects";
import { coursesOngoing } from "./learningResourcesObjects";

function ListOfResources() {
  return (
    <div>
      <article>
        <h5 id="resources">
          List of books and courses read or taken: (Youtube tutorials are not
          included here):
        </h5>
        <p>Books:</p>
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

        <p>Finished Online courses:</p>
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

        <p>Ongoing Online courses:</p>
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
