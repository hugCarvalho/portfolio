import React from "react";
import "./RenderProjects.scss";
import ProjectCard from "./ProjectCard/ProjectCard";
import { IsActiveContext } from "../../Header/NavButtons/RenderNavButtons";

function RenderProjects() {
  const pageIsActive = React.useContext(IsActiveContext);

  React.useEffect(() => {
    document.title = "Hugo's Projects";
  }, [pageIsActive]);

  return <div className="RenderProjects">{<ProjectCard />}</div>;
}

export default RenderProjects;
