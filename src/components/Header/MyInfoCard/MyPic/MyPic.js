import React from "react";
import "./MyPic.scss";
import { Link } from "react-router-dom";
import moi from "./media/moi.jpg";

//TODO: resize pic

function MyPic() {
  const [activate, setActivate] = React.useState(false);

  document.addEventListener("DOMContentLoaded", () =>
    setTimeout(() => setActivate(true), 3400)
  );

  return (
    <figure className="MyPic">
      <Link to="/about">
        <img src={moi} alt="me" title="about me" />
      </Link>
      <span className={`left ${activate ? "activate" : ""}`}></span>
      <span className={`right ${activate ? "activate" : ""}`}></span>
    </figure>
  );
}

export default MyPic;

//67.55, 67.4
