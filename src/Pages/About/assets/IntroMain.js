import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { ExternalLink } from "../../../components/ExternalLink";

const LinkStyles = styled.span`
  :hover{
    opacity: .7;
  }

`
export function IntroMainEN() {
  return (
    <article>
      <h2>Experience</h2>
      <p>
        In 2020, I decided to change careers and quit my job to pursue my newfound passion for programming. After one year of self-taught learning,
        during which I developed several {" "}
          <LinkStyles>
            <Link to="/projects">
              small projects
            </Link>
          </LinkStyles>,
        I joined Erblotse (Heritas GmbH) where I had an extremely rich and diversified experience in a small agile team (4-6 members),
        and had the chance of working on two applications {" "}
        {"- "}
          {<LinkStyles style={{textDecoration: "underline"}}><ExternalLink
            link={"https://erben.erblotse.de"}
            text={"Erben"}
          /></LinkStyles>}{" and "}
          {<LinkStyles style={{textDecoration: "underline"}}><ExternalLink
            link={"https://vererben.erblotse.de/"}
            text={"Vererben"}
          /></LinkStyles>}
        {" -"} {" "}
         with different tech stacks.
      </p>
    </article>
  );
}

export function IntroMainDE() {
  return (
    <article lang="de">
      <h2>Allgemeine Vorstellung</h2>
      <p>
        Im Jahr 2020 entschied ich mich, meine Karriere zu wechseln und meinen Job zu kündigen, um meiner neu entdeckten Leidenschaft für die Programmierung nachzugehen. Nach einem Jahr autodidaktischen Lernens, in dem ich mehrere
        {" "}
        <LinkStyles>
          <Link to="/projects" style={{textDecoration: "none"}}>
            kleine Projekte
          </Link>
        </LinkStyles>
        {" "}
         entwickelte, trat ich bei Erblotse (Heritas GmbH) ein, wo ich eine äußerst reichhaltige und vielfältige Erfahrung in einem kleinen agilen Team (4-6 Kollegen) sammeln konnte. Dabei hatte ich die Gelegenheit,
         an zwei Apps {"- "}
          {<LinkStyles><ExternalLink
            link={"https://erben.erblotse.de"}
            text={"Erben"}
          /></LinkStyles>}{" und "}
          {<LinkStyles><ExternalLink
            link={"https://vererben.erblotse.de/"}
            text={"Vererben"}
          /></LinkStyles>}
        {" -"} {" "}
         mit unterschiedlichen Tech-Stacks zu arbeiten.
      </p>
    </article>
  );
}

export default IntroMainEN;