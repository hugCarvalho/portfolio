import React from "react";
import { Link } from "react-router-dom";
import moi from "./media/moi.jpg";
import "./MyPic.scss";

function MyPic() {
  const [activate, setActivate] = React.useState(false);

  document.addEventListener("DOMContentLoaded", () =>
    setTimeout(() => setActivate(true), 2300)
  );

  return (
    <figure className="MyPic">
      <Link to="/about">
        <img src={moi} alt="me" title="about me" />
      </Link>
      <span className={`left ${activate &&  "activate"}`}></span>
      <span className={`right ${activate && "activate"}`}></span>
    </figure>
  );
}

export default MyPic;
