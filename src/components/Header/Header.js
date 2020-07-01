import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import RenderSelectLanguage from "./SelectLanguage/RenderSelectLanguage";
import RenderMyInfoCard from "./MyInfoCard/RenderMyInfoCard";

function Header() {
  return (
    <header>
      <RenderSelectLanguage />
      <RenderMyInfoCard />

      <Link to="/projects">projects</Link>
      <Link to="/projects1">projects1</Link>
      <Link to="/projects2">projects2</Link>
    </header>
  );
}

export default Header;
