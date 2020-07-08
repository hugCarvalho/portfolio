import React from "react";
import "./Links.scss";
import { Link } from "react-router-dom";
import { CV } from "../../../../shared/cv.pdf";

function Links() {
  console.log("APP");

  return (
    <>
      <div className="container__links">
        <ul>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <a target="_blank" rel="noopener noreferrer" href={CV}>
              CV{" "}
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/hugCarvalho"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Links;
