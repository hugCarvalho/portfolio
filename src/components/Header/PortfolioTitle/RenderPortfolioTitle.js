import React from "react";
import { Link } from "react-router-dom";
import "./RenderPortfolioTitle.scss";

function RenderPortfolioTitle() {
  return (
    <Link to="/projects">
      <div className="hugos-portfolio">
        <span className="engraved">Hugo's</span>
        <span className="engraved2">Portfolio</span>
      </div>
    </Link>
  );
}

export default RenderPortfolioTitle;
