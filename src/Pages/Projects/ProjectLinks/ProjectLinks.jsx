import React from "react";
import { Modal } from "../../../components/Modal";
import { server } from "../../../config/server.js";
import "./ProjectLinks.scss";

function ProjectLinks({ project}) {
  const [showModal, setShowModal] = React.useState(false)

  return (
    <section className="ProjectLinks">
      {project.live.length > 0 && <div className="live">
        <a
          href={`${project.live}`} rel="noopener noreferrer" target="_blank"
          onClick={()=> {

            fetch(`${server}/projects`, {
              method: "POST",
              headers: {
                'Content-Type': 'application/json',
                'custom': project.id
              },
            })
          }}
        >
          <i className="fas fa-eye">
            {" "}
            <span className="text">Live</span>
          </i>
        </a>
      </div>}

      {showModal && <Modal setShowModal={setShowModal} projectGithubUrl={project.code}/>}
      {project.code.length > 0 &&
        <div style={{cursor: "pointer"}} onClick={()=> {
          setShowModal(true)
          fetch(`${server}/projects`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'custom': project.id + "Code"
            },
          })
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
