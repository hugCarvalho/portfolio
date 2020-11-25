import React from "react";
import "./MyPic.scss";
import { Link } from "react-router-dom";
import moi from "./media/moi.jpg";

//TODO: resize pic

function MyPic() {
  const [activate, setActivate] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setActivate(true), 5300);
    //return () => setActivate(false);
  }, []);
  return (
    <figure className="MyPic">
      <Link to="/about">
        <img src={moi} alt="me" title="about me" />
      </Link>
      <span className={`left ${activate ? "activate" : ""}`}></span>
      <span className={`right ${activate ? "activate" : ""}`}></span>
      {/* <span className={`left wrapper`}>
        <span className="left-triangle"></span>
      </span>
      */}
    </figure>
  );
}

export default MyPic;

//67.55, 67.4
