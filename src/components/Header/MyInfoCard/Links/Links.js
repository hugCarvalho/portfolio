import React from "react";
import "./Links.scss";
import { Link } from "react-router-dom";

function Links() {
  console.log("APP");

  return (
    <>
      <div className="container__links">
        <ul>
          <Link to="/contact">
            <li>Use 3</li>
          </Link>
          <li>
            <a target="blank" rel="noopener noreferrer" href="/">
              Resume
            </a>
          </li>
          <li>
            <a
              target="blank"
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
