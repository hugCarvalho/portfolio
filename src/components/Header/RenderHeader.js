import React from "react";
import "./RenderHeader.scss";
import RenderSelectLanguage from "./SelectLanguage/RenderSelectLanguage";
import RenderPortfolioTitle from "./PortfolioTitle/RenderPortfolioTitle";
import RenderNavButtons from "./NavButtons/RenderNavButtons";
import RenderMyInfoCard from "./MyInfoCard/RenderMyInfoCard";

function Header() {
  return (
    <header className="Header">
      <RenderSelectLanguage />
      <RenderPortfolioTitle />
      <RenderNavButtons />
      <RenderMyInfoCard />
    </header>
  );
}

export default Header;
