import React from "react";
import { Link } from "react-router-dom";
import "./RenderPortfolioTitle.scss";

function RenderPortfolioTitle() {
  return (
    <section className="RenderPortfolioTitle" role="banner">
      <Link to="/projects">
        <h1 title="my projects">
          <span id="hugo">Hugo's</span>
          <span id="portfolio">Portfolio</span>
        </h1>
      </Link>
    </section>
  );
}

export default RenderPortfolioTitle;
