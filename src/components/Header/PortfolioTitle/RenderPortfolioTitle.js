import React from "react";
import { Link } from "react-router-dom";
import "./RenderPortfolioTitle.scss";

function RenderPortfolioTitle() {
  const [animateHugo, setAnimateHugo] = React.useState(false);
  const [animatePortfolio, setAnimatePortfolio] = React.useState(false);
  const [animateFinal, setAnimateWhite] = React.useState(false);

  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => setAnimateHugo(true), 4200);
    setTimeout(() => setAnimatePortfolio(true), 5900);
    setTimeout(() => setAnimateWhite(true), 8300);
  });

  return (
    <section className="RenderPortfolioTitle" role="banner">
      <Link to="/about">
        <h1 title="my experience">
          <span
            id="hugo"
            className={`${animateHugo ? "animateHugo" : ""} ${
              animateFinal ? "shine" : null
            }`}
          >
            Hugo's
          </span>
          <span
            id="portfolio"
            className={`${animatePortfolio ? "animatePortfolio" : null} ${
              animateFinal ? "shine" : null
            }`}
          >
            Portfolio
          </span>
        </h1>
      </Link>
    </section>
  );
}

export default RenderPortfolioTitle;
