import React from "react";
import "./ProjectLinks.scss";

function LinksTo({ project }) {
  return (
    <div>
      <div className="container__project-links">
        <div className="live">
          <a href={`${project.live}`} rel="noopener noreferrer" target="_blank">
            <i className="fas fa-eye">
              {" "}
              <span className="text"> Live</span>
            </i>
          </a>
        </div>

        <div className="code">
          <a href={`${project.code}`} rel="noopener noreferrer" target="_blank">
            <i className="fa fa-search">
              <span className="text"> Code</span>
            </i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LinksTo;
