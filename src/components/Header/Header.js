import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/projects">projects</Link>
      <Link to="/projects1">projects1</Link>
      <Link to="/projects2">projects2</Link>
      Header
    </div>
  );
}

export default Header;
