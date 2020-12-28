import React from "react";
import "./MyInfoCardLinks.scss";

function MyInfoCardLinks() {
  return (
    <>
      <div className="MyInfoCardLinks">
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/hugCarvalho"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://edabit.com/user/8Z3dkvWBqtrMEE48N"
            >
              Edabit
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/hugo-carvalho-8355b31b7/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MyInfoCardLinks;
