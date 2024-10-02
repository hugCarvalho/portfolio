import React from "react";
import { ExperienceCard } from "../../components/ExperienceCard";
import "./About.scss";
import { IntroMainDE, IntroMainEN } from "./assets/IntroMain";

const marginBottom = "24px"

function AboutEN() {
  return (
    <div className="wrapper__about">
      <main style={{marginBottom}}>
        <IntroMainEN />
      </main>
      <section>
        <ExperienceCard/>
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
      <main style={{marginBottom}}>
        <IntroMainDE />
      </main>
      <section>
        <ExperienceCard/>
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
