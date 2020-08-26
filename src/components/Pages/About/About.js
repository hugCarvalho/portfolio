import React from "react";
import "./About.scss";
import { IntroMainEN, IntroMainDE } from "./assets/IntroMain";
import { IntroExtendedEN, IntroExtendedDE } from "./assets/IntroExtended";
import ResourcesList from "./assets/ResourcesList";

function AboutEN() {
  return (
    <div className="wrapper__about">
      <section>
        <IntroMainEN />
      </section>
      <section>
        <IntroExtendedEN />
      </section>
      <section>
        <ResourcesList />
      </section>
    </div>
  );
}

export function AboutDE() {
  return (
    <div className="wrapper__about">
      <section>
        <IntroMainDE />
      </section>
      <section>
        <IntroExtendedDE />
      </section>
      <section>
        <ResourcesList />
      </section>
    </div>
  );
}

export default AboutEN;
