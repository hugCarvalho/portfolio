import React from "react";
import { ExperienceCard } from "../../ExperienceCard";
import "./About.scss";
import { IntroExtendedDE, IntroExtendedEN } from "./assets/IntroExtended";
import { IntroMainDE, IntroMainEN } from "./assets/IntroMain";
import ResourcesList from "./assets/ResourcesList";

function AboutEN() {
  return (
    <div className="wrapper__about">
      <ExperienceCard/>
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
