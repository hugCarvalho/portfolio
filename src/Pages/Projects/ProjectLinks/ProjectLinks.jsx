import React from "react";
import { Modal } from "../../../components/Modal";
import "./ProjectLinks.scss";

function ProjectLinks({ project }) {
  const [showModal, setShowModal] = React.useState(false)

  console.log('%c ProjectLinks.jsx - line: 8 -->', 'color: white; background-color: #007a', project.code, '<-project')

  return (
    <section className="ProjectLinks">
      <div className="live">
        <a href={`${project.live}`} rel="noopener noreferrer" target="_blank">
          <i className="fas fa-eye">
            {" "}
            <span className="text"> Live</span>
          </i>
        </a>
      </div>

      {showModal && <Modal setShowModal={setShowModal} projectGithubUrl={project.code}/>}
      {project.code.length > 0 &&
        <div style={{cursor: "pointer"}} onClick={()=> {
          setShowModal(true)
        }}>
          <i className="fa fa-search" style={{color: "lightblue"}}>
            <span className="text"> Code</span>
          </i>
        </div>
      }
    </section>
  );
}

export default ProjectLinks;
