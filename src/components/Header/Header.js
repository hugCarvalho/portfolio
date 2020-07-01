import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import RenderSelectLanguage from "./SelectLanguage/RenderSelectLanguage";
import RenderMyInfoCard from "./MyInfoCard/RenderMyInfoCard";
import RenderNavButtons from "./NavButtons/RenderNavButtons";

import { TiHome } from "react-icons/ti";

function Header() {
  return (
    <header>
      <RenderSelectLanguage />
      <Link to="/projects">
        <TiHome color="lightblue" className="icon--home" title="home" />
      </Link>
      <RenderMyInfoCard />
      <RenderNavButtons />

      <Link to="/projects1">PAGE NOT FOUND</Link>
    </header>
  );
}

export default Header;
