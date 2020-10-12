import "./RenderNavButtons.scss";
import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button3D from "./Button3D";
import { LanguageContext } from "../../../App";

export const IsActiveContext = React.createContext();

function RenderNavButtons() {
  const [isActive, setIsActive] = React.useState("projects");
  const { isLanguageEnglish } = useContext(LanguageContext);
  const location = useLocation();

  //Keeps the right button selected if "back" button from browser is used
  useEffect(() => {
    setIsActive(location.pathname.slice(1));
  }, [location]);

  return (
    <IsActiveContext.Provider value={isActive}>
      <nav className="RenderNavButtons">
        {/* PROJECTS */}
        <Link to="/projects">
          <Button3D
            classes={isActive === "projects" || isActive === "projekte" ? "active" : ""}
          >
            <span className="button-text">
              {isLanguageEnglish ? "projects" : "projekte"}
            </span>
          </Button3D>
        </Link>

        {/* SKILLS */}
        <Link to="/skills">
          <Button3D
            classes={isActive === "skills" || isActive === "fähigkeiten" ? "active" : ""}
          >
            <span className="button-text">
              {isLanguageEnglish ? "skills" : "fähigkeiten"}
            </span>
          </Button3D>
        </Link>

        {/* ABOUT */}
        <Link to="/about">
          <Button3D
            classes={isActive === "about" || isActive === "über mich" ? "active" : ""}
          >
            <span className="button-text">
              {isLanguageEnglish ? "about" : "über mich"}
            </span>
          </Button3D>
        </Link>

        {/* Contact */}
        <Link to="/contact">
          <Button3D
            classes={isActive === "contact" || isActive === "kontakt" ? "active" : ""}
          >
            <span className="button-text">
              {isLanguageEnglish ? "contact" : "kontakt"}
            </span>
          </Button3D>
        </Link>
      </nav>
    </IsActiveContext.Provider>
  );
}

export default RenderNavButtons;
