import React from "react";
import { Link, useLocation } from "react-router-dom";
import moi from "./media/moi.jpg";
import "./MyPic.scss";

function MyPic() {
  const [activate, setActivate] = React.useState(false);

  document.addEventListener("DOMContentLoaded", () =>
    setTimeout(() => setActivate(true), 2300)
  );

  const {pathname} = useLocation()

  return (
    <figure className="MyPic">
      <Link to="/about">
        <img src={moi} alt="me" title="about me" />
      </Link>
      <span className={`left ${activate && pathname !== "/projects"? "activate" : ""}`}></span>
      <span className={`right ${activate && pathname !== "/projects"? "activate" : ""}`}></span>
    </figure>
  );
}

export default MyPic;
