import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import RenderSelectLanguage from "./SelectLanguage/RenderLanguageOptions";

function Header() {
  return (
    <header>
      <RenderSelectLanguage />
      <Link to="/projects">projects</Link>
      <Link to="/projects1">projects1</Link>
      <Link to="/projects2">projects2</Link>
    </header>
  );
}

export default Header;
