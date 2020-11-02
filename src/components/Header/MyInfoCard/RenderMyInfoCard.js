import React from "react";
import "./RenderMyInfoCard.scss";
import MyInfoCardLinks from "./MyInfoCardLinks/MyInfoCardLinks";
import MyPic from "./MyPic/MyPic";
import LanguagesSpoken from "./LanguagesSpoken/LanguagesSpoken";

function RenderMyInfoCard() {
  return (
    <section className="RenderMyInfoCard" id="mycard" data-testid="My Info Card">
      <MyInfoCardLinks />
      <MyPic />
      <LanguagesSpoken />
    </section>
  );
}

export default RenderMyInfoCard;
