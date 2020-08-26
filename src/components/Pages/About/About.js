import React from "react";
import "./About.scss";
import { IntroMainEN, IntroMainDE } from "./assets/IntroMain";
import { IntroExtendedEN, IntroExtendedDE } from "./assets/IntroExtended";
import ResourcesList from "./assets/ResourcesList";

function AboutEN() {
  return (
    <div className="wrapper__about">
      <main>
        <IntroMainEN />
      </main>
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
      <main>
        <IntroMainDE />
      </main>
      <section>
        <IntroExtendedDE />
      </section>
      <aside>
        <ResourcesList />
      </aside>
    </div>
  );
}

export default AboutEN;
