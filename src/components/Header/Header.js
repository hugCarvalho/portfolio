import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import RenderSelectLanguage from "./SelectLanguage/RenderSelectLanguage";
import RenderMyInfoCard from "./MyInfoCard/RenderMyInfoCard";
import RenderNavButtons from "./NavButtons/RenderNavButtons";

import { TiHome } from "react-icons/ti";

function Header() {
  return (
    <header className="container__header">
      <RenderSelectLanguage />
      <div className="hugos-portfolio">
        <span className="engraved">Hugo's</span>
        <span className="engraved2">Portfolio</span>
      </div>
      {/* <Link to="/projects">
        <TiHome color="lightblue" className="icon-home" title="home" />
      </Link> */}
      <RenderNavButtons />
      <RenderMyInfoCard />
    </header>
  );
}

export default Header;
