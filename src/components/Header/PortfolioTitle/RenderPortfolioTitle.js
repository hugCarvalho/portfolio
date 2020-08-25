import React from "react";
import { Link } from "react-router-dom";
import "./RenderPortfolioTitle.scss";

function RenderPortfolioTitle() {
  return (
    <Link to="/projects">
      <section className="RenderPortfolioTitle">
        <span>Hugo's</span>
        <span>Portfolio</span>
      </section>
    </Link>
  );
}

export default RenderPortfolioTitle;
