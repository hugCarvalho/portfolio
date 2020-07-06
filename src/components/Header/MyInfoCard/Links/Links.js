import React from "react";
import "./Links.scss";
import { Link } from "react-router-dom";

function Links() {
  console.log("APP");

  return (
    <>
      <div className="container__links">
        <ul>
          <li>
            <Link to="/contact">Use 3 </Link>
          </li>

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
