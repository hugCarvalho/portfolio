import React from "react";
import "./MyPic.scss";
import { Link } from "react-router-dom";
import moi from "./media/moi.jpg";

//TODO: resize pic

function MyPic() {
  return (
    <figure className="MyPic">
      <Link to="/about">
        <img src={moi} alt="me" title="about me" />
      </Link>
    </figure>
  );
}

export default MyPic;
