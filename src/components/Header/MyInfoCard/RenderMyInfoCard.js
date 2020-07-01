import React from "react";
import "./RenderMyInfoCard.scss";
import Links from "./Links/Links";
import MyPic from "./MyPic/MyPic";
import LanguagesSpoken from "./LanguagesSpoken/LanguagesSpoken";

function RenderMyInfoCard() {
  return (
    <div className="container__my-info-card">
      <Links />
      <MyPic />
      <LanguagesSpoken />
    </div>
  );
}

export default RenderMyInfoCard;
