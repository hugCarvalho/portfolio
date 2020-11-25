import React from "react";
import { Link } from "react-router-dom";
import "./RenderPortfolioTitle.scss";

function RenderPortfolioTitle() {
  const [animateHugo, setAnimateHugo] = React.useState(false);
  const [animatePortfolio, setAnimatePortfolio] = React.useState(false);
  const [animateFinal, setAnimateWhite] = React.useState(false);

  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => setAnimateHugo(true), 5000);
    setTimeout(() => setAnimatePortfolio(true), 6700);
    setTimeout(() => setAnimateWhite(true), 9000);
  });
  console.log(animateHugo, animatePortfolio);
  return (
    <section className="RenderPortfolioTitle" role="banner">
      <Link to="/projects">
        <h1 title="my projects">
          <span id="hugo" className={animateHugo ? "animateHugo" : ""}>
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
