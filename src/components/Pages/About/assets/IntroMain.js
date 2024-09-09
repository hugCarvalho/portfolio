import React from "react";

export function IntroMainEN() {
  return (
    <article>
      <h2>Experience</h2>
      {/* <p>
        Hi, I'm Hugo, a self-taught and highly motivated programmer, who is changing
        careers after having discovered his passion in programming.
      </p> */}
      <p>
        In 2020, I decided to change careers and quit my job to pursue my newfound passion for programming. After one year of self-taught learning,
        during which I developed several small projects, I joined Erblotse (Heritas GmbH) where I had an extremely rich and diversified experience in a small agile team (4-7),
        and had the chance of working on two applications with different tech stacks.
      </p>
    </article>
  );
}
export function IntroMainDE() {
  return (
    <article lang="de">
      <h2>Allgemeine Vorstellung</h2>
      <p>
        Hallo, ich bin Hugo, ein autodidaktischer und wissbegierig Webentwickler mit einem
        Master in Soziologie. Vor anderthalb Jahren begann ich parallel zu meinem Job das
        Programmieren mit JavaScript zu lernen. Es begann aus Neugier, dauerte aber nicht
        lange bevor es zu einer Leidenschaft wurde. Vor kurzem habe ich beschlossen,
        meinen Job zu kündigen, um diese Leidenschaft zu verfolgen und mir vermehrt neues
        Wissen anzueignen.
      </p>
      <p>
        Ich bin bestrebt, mir neue Fähigkeiten anzueignen, lerne aktiv (zurzeit{" "}
        <s>Testing</s> Node.js) und bin mit Begeisterung dabei.
      </p>
      <p>
        Neben meinen Fähigkeiten und meinem Selbstvertrauen, wächst auch der Wunsch wieder
        in einem Team zu arbeiten um gemeinsame Ziele zu verfolgen, welche einen positiven
        Einfluss auf die Kunden und das Unternehmen haben. Die Zusammenarbeit im Team
        würde sich ebenfalls fördernd auf meine Lernkurve auswirken und mich sehr
        motivieren.
      </p>
      <p>Wenn Sie mehr über mich erfahren möchten, lesen Sie einfach weiter...</p>
    </article>
  );
}

export default IntroMainEN;
