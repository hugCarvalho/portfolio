import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { ExternalLink } from "../../components/ExternalLink";
import LinkAway from "../../images/external_link.webp";

const LinkStyles = styled.span`
  text-decoration: underline;
  font-weight: 600;
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
          <LinkStyles style={{fontWeight: "500"}}>
            <Link to="/projects">
              projects
            </Link>
          </LinkStyles>,
        I joined <b>Erblotse (Heritas GmbH)</b> for more than 4 years, where I had an extremely rich and diversified experience in a small agile team (4-6 direct colleagues),
        and had the chance of working on two applications {" "}
        {"- "}
          {<LinkStyles>
            <ExternalLink
              link={"https://erben.erblotse.de"}
              text={"Erben"}
            />
          <img src={LinkAway} alt="link to Erben project" style={{width: "20px", height: "20px"}}/>
          </LinkStyles>}
          {" and "}
          {<LinkStyles>
            <ExternalLink
              link={"https://vererben.erblotse.de/"}
              text={"Vererben"}
            />
          </LinkStyles>}
          <img src={LinkAway} alt="link to Vererben project" style={{width: "20px", height: "20px"}}/>
        {" -"} {" "}
         with different tech stacks.
      </p>
    </article>
  );
}

export function IntroMainDE() {
  return (
    <article lang="de">
      <h2>Erfahrung</h2>
      <p>
        Im Jahr 2020 entschied ich mich, meine Karriere zu wechseln und meinen Job zu kündigen, um meiner neu entdeckten Leidenschaft für die Programmierung nachzugehen. Nach einem Jahr autodidaktischen Lernens, in dem ich mehrere
        {" "}
        <LinkStyles>
          <Link to="/projects" style={{fontWeight: "500"}}>
            Projekte
          </Link>
        </LinkStyles>
        {" "}
         entwickelte, bin ich für mehr als 4 Jahre bei Erblotse (Heritas GmbH) eingestiegen, wo ich eine äußerst reichhaltige und vielfältige Erfahrung in einem kleinen agilen Team (4-6 Kollegen) sammeln konnte. Dabei hatte ich die Gelegenheit,
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
