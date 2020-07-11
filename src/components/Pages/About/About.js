import React from "react";
import "./About.scss";
import { MainIntroEN, MainIntroDE } from "./assets/mainIntro";

import { ExtendedInfoEN, ExtendedInfoDE } from "./assets/extendedInfo";
import ListOfResources from "./assets/ListOfResources";

function AboutEN() {
  return (
    <div className="wrapper__about">
      <MainIntroEN />
      <section className="extended">
        <ExtendedInfoEN />
        <ListOfResources />
      </section>
    </div>
  );
}

export function AboutDE() {
  return (
    <div className="wrapper__about">
      <MainIntroDE />
      <section className="extended">
        <ExtendedInfoDE />
        <ListOfResources />
      </section>
    </div>
  );
}

export default AboutEN;
