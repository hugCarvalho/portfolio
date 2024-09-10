import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { LanguageContext } from "../../../App";
import Button3D from "./Button3D";
import "./RenderNavButtons.scss";

export const IsActiveContext = React.createContext();

function RenderNavButtons() {
  const [isActive, setIsActive] = React.useState("about");
  const { isLanguageEnglish } = useContext(LanguageContext);
  const location = useLocation();

  //Keeps the right button selected if "back" button from browser is used
  useEffect(() => {
    setIsActive(location.pathname.slice(1));
  }, [location]);

  return (
    <IsActiveContext.Provider value={isActive}>
      <nav className="RenderNavButtons">
        {/* ABOUT */}
        <Link to="/about">
          <Button3D
            classes={isActive === "about" || isActive === "über mich" ? "active" : ""}
          >
            <span className="button-text">
              {isLanguageEnglish ? "Experience" : "über mich"}
            </span>
          </Button3D>
        </Link>

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
