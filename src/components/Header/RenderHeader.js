import React from "react";
import "./RenderHeader.scss";
import RenderSelectLanguage from "./SelectLanguage/RenderSelectLanguage";
import RenderPortfolioTitle from "./PortfolioTitle/RenderPortfolioTitle";
import RenderMyInfoCard from "./MyInfoCard/RenderMyInfoCard";
import RenderNavButtons from "./NavButtons/RenderNavButtons";

function Header() {
  return (
    <header className="container__header">
      <RenderSelectLanguage />
      <RenderPortfolioTitle />

      {/* <Link to="/projects">
        <TiHome color="lightblue" className="icon-home" title="home" />
      </Link> */}
      <RenderNavButtons />
      <RenderMyInfoCard />
    </header>
  );
}

export default Header;
