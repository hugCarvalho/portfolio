import React from "react";
import { server } from "../../../../config/server";
import "./MyInfoCardLinks.scss";

export const sendBackend = (path) => {
  fetch(`${server}${path}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
  })
}

function MyInfoCardLinks() {

  return (
    <>
      <div className="MyInfoCardLinks">
        <ul>
          <li onClick={()=>sendBackend("/github")} onContextMenu={()=>sendBackend("/github")}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/hugCarvalho"
            >
              GitHub
            </a>
          </li>
          <li onClick={()=>sendBackend("/edabit")} onContextMenu={()=>sendBackend("/edabit")}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://edabit.com/user/8Z3dkvWBqtrMEE48N"
            >
              Edabit
            </a>
          </li>

          <li onClick={()=>sendBackend("/linkedIn")} onContextMenu={()=>sendBackend("/linkedIn")}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/hugo-carvalho-8355b31b7/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MyInfoCardLinks;
