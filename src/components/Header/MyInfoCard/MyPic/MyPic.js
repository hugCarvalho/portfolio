import React from "react";
import "./MyPic.scss";
import { Link } from "react-router-dom";
import moi from "./media/moi.jpg";

//TODO: resize pic

function MyPic() {
  return (
    <div className="container__my-pic">
      <Link to="/about">
        <img className="my-pic" src={moi} alt="me" title="about me" />
      </Link>
    </div>
  );
}

export default MyPic;
