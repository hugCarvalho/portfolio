import React from "react";
import { Link } from "react-router-dom";
import "./RenderPortfolioTitle.scss";

function RenderPortfolioTitle() {
  return (
    <Link to="/projects">
      <section className="RenderPortfolioTitle" role="banner">
        <h1>
          <span>Hugo's</span>
          <span>Portfolio</span>
        </h1>
      </section>
    </Link>
  );
}

export default RenderPortfolioTitle;
