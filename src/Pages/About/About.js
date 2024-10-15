import React from "react";
import "./About.scss";
import { IntroMainDE, IntroMainEN } from "./IntroMain";
import { RenderExperience } from "./RenderExperience";

const marginBottom = "24px"

function AboutEN() {
  return (
    <div className="wrapper__about">
      <main style={{marginBottom}}>
        <IntroMainEN />
      </main>
      <section>
        <RenderExperience/>
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
        <RenderExperience/>
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
