import React from "react";
import "./RenderProjects.scss";
import ProjectCard from "./ProjectCard/Card";

function RenderProjects() {
  return (
    <div className="container__projects">
      <h1>Projects</h1>
      <ProjectCard />
    </div>
  );
}

export default RenderProjects;
