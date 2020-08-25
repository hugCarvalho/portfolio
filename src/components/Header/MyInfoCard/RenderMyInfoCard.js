import React from "react";
import "./RenderMyInfoCard.scss";
import MyInfoCardLinks from "./MyInfoCardLinks/MyInfoCardLinks";
import MyPic from "./MyPic/MyPic";
import LanguagesSpoken from "./LanguagesSpoken/LanguagesSpoken";

function RenderMyInfoCard() {
  return (
    <section className="RenderMyInfoCard">
      <MyInfoCardLinks />
      <MyPic />
      <LanguagesSpoken />
    </section>
  );
}

export default RenderMyInfoCard;
