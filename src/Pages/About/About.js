import React from "react";
import { ExperienceCard } from "../../components/ExperienceCard";
import "./About.scss";
import { IntroMainDE, IntroMainEN } from "./assets/IntroMain";

function AboutEN() {
  return (
    <div className="wrapper__about">
      <main>
        <IntroMainEN />
      </main>
      <br/>
      <section>
        <ExperienceCard/>
        <br/>
      </section>
      {/* <section>
        <IntroExtendedEN />
      </section>
      <section>
        <ResourcesList />
      </section> */}
    </div>
  );
}

export function AboutDE() {
  return (
    <div className="wrapper__about">
      <main>
        <IntroMainDE />
      </main>
      <br/>
      <section>
        <ExperienceCard/>
        <br/>
      </section>
      {/* <section>
        <IntroExtendedDE />
      </section>
      <aside>
        <ResourcesList />
      </aside> */}
    </div>
  );
}

export default AboutEN;
