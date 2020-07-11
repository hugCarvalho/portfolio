import React from "react";
import "./About.scss";
import MainIntroEN from "./assets/mainIntro";
import ExtendedInfoEN from "./assets/ExtendedInfoEN";
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

//TODO: clone above when it's ready and translate to german
export function AboutDE() {
  return (
    <>
      <h2>GERMAN Basic Introduction</h2>
      <article></article>
      {/* BUTTON + EXTENDED
      <button onClick={() => setIsExtended(prev => !prev)}>
        {isExtended ? "weniger ist besser" : "gib es mir"}
      </button>
      {isExtended && (
        <section className="extended">
          <h2>Extended information</h2>
          <h4>where does my knowledge come from? (UDEMI/EDABIT/BOOKS)</h4>
          <h4>what did I study?</h4>
          <h4>what are my hobbies</h4>
          <h4>Certificates</h4>
          <p></p>
        </section>
      )} */}
    </>
  );
}
export default AboutEN;
