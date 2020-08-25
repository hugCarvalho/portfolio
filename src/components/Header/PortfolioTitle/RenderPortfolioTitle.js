import React from "react";
import { Link } from "react-router-dom";
import "./RenderPortfolioTitle.scss";

function RenderPortfolioTitle() {
  return (
    <Link to="/projects">
      <div className="RenderPortfolioTitle">
        <span>Hugo's</span>
        <span>Portfolio</span>
      </div>
    </Link>
  );
}

export default RenderPortfolioTitle;
