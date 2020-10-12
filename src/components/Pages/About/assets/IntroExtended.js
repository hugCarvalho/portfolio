import React from "react";
import { HashLink } from "react-router-hash-link";

const edabitLevel = 16;
const edabitScore = 7970;
const edabitReputation = 3151;
const checkioLevel = 8;

export function IntroExtendedEN() {
  //TOPICS
  const knowledge = "Where does my knowledge come from?";
  const challenges = "How do I improve my problem solving skills?";
  const study = "What did I study?";
  const hobbies = "What are my main hobbies?";
  return (
    <article>
      <h2>Extended Introduction</h2>
      <ol>
        <li>
          1.{" "}
          <HashLink smooth to="#knowledge">
            {knowledge}
          </HashLink>
        </li>
        <li>
          2.{" "}
          <HashLink smooth to="#challenges">
            {challenges}
          </HashLink>
        </li>
        <li>
          3.{" "}
          <HashLink smooth to="#study">
            {study}
          </HashLink>
        </li>
        <li>
          4.{" "}
          <HashLink smooth to="#hobbies">
            {hobbies}
          </HashLink>
        </li>
      </ol>

      <h4 id="knowledge">{knowledge}</h4>
      <p>
        Although I have read some books about JavaScript, most of my knowledge derives
        from online resources.
      </p>
      <p>
        For a more structured approach, I enrolled in numerous online courses on{" "}
        <cite>Udemy.com</cite>,{" "}
        <em>making sure I got my knowledge from diversified sources</em>, which also
        allowed me to assess the quality of what I was learning.
      </p>
      <p>
        More recently, I started to dive into the official documentation, especially with
        the React environment, and to also focus on Youtube online tutorials for more
        specific subjects.
      </p>
      <p>
        At the end, you can find a{" "}
        <HashLink smooth to="#resources">
          list of the mentioned resources
        </HashLink>
        .
      </p>

      {/* CHALENGES */}
      <h4 id="challenges">{challenges}</h4>
      <p>
        In addition to developing whole projects like those you have as reference on this
        website, I also enjoy solving coding challenges on a regular basis, mainly in{" "}
        <cite>Edabit</cite> (currently at level {edabitLevel}, with {edabitScore + ""}{" "}
        points and {edabitReputation} reputation points), and sporadically in{" "}
        <cite>CheckiO</cite> (currently at level {checkioLevel}) to improve my problem
        solving skills. This is also helpful in discovering new approaches from more
        experienced users and to compare code for a better performant solution.
      </p>
      <p>
        Recently, I started creating challenges in <cite>Edabit</cite>. This is helpful to
        develop my testing skills in unit testing and I get to contribute to the community
        as well.
      </p>

      {/* STUDY */}
      <h4 id="study">{study}</h4>
      <p>
        I studied Sociology. Technically doesn't contribute much to this area, but the
        evaluation system was based on projects, there were no exams. These projects were
        mainly developed in a team, usually 3-5 people, with the exception of the last
        year, which consisted on a solo project. This resulted in 4 years of multiple
        teamwork experiences with different people, which helped to lay the foundations of
        working collaborative in a harmonious way.
      </p>

      {/* HOBBIES */}
      <h4 id="hobbies">{hobbies}</h4>
      <p>
        Apart from programming, I enjoy playing boardgames, doing sport like biking, going
        to the fitness studio or sport activities in the park. I also enjoy spending time
        with my girlfriend - failing to mention her, could potentially damage the
        relationship. And me... ;-)
      </p>
    </article>
  );
}

//GERMAN
export function IntroExtendedDE() {
  //TOPICS
  const knowledge = "Wie habe ich mir mein Wissen angeeignet?";
  const challenges = "Wie verbessere ich meine Fähigkeiten zur Problemlösung?";
  const study = "Was habe ich studiert?";
  const hobbies = "Was sind meine Interessen?";
  return (
    <article lang="de">
      <h2>Weitere Informationen</h2>
      <ol>
        <li>
          1.{" "}
          <HashLink smooth to="#knowledge">
            {knowledge}
          </HashLink>
        </li>
        <li>
          2.{" "}
          <HashLink smooth to="#challenges">
            {challenges}
          </HashLink>
        </li>
        <li>
          3.{" "}
          <HashLink smooth to="#study">
            {study}
          </HashLink>
        </li>
        <li>
          4.{" "}
          <HashLink smooth to="#hobbies">
            {hobbies}
          </HashLink>
        </li>
      </ol>
      <h4 id="knowledge">{knowledge}</h4>
      <p>
        Ich habe einige Bücher über JavaScript gelesen aber den Großteil meines Wissens
        habe ich mir aus Online-Ressourcen angeeignet. So konnte ich die Theorie direkt
        mit der Praxis verbinden.
      </p>
      <p>
        Für einen strukturierteren Ansatz habe ich mich bei verschiedenen Online-Kursen
        von Udemy.com eingeschrieben, um sicherzustellen, dass ich mein Wissen von
        verschiedenen Experten beziehe.
      </p>
      <p>
        Seit kurzem habe ich begonnen, mich mit der offiziellen React Dokumentation zu
        befassen und zusätzlich konzentriere ich mich auf spezifische Themen mit Hilfe von
        YouTube Tutorials.
      </p>
      <p>
        Am Ende der Seite finden Sie eine{" "}
        <HashLink smooth to="#resources">
          {" "}
          Liste der Ressourcen{" "}
        </HashLink>{" "}
        {""}
        in diesem Abschnitt erwähnt wurden.
      </p>

      {/* CHALENGES */}
      <h4 id="challenges">{challenges}</h4>

      <p>
        Neben der Entwicklung ganzer Projekte, wie Sie sie auf dieser Website als Referenz
        haben, macht es mir auch Spaß, regelmäßig Codierungsprobleme zu lösen.
        Hauptsächlich nutze ich <cite> Edabit </cite> (derzeit auf Stufe {edabitLevel},
        mit {""}
        {edabitScore + ""} Punkte und {edabitReputation} Reputation Punkte) und vereinzelt
        auch <cite> CheckiO </cite> (derzeit auf Stufe {checkioLevel}). Das ist auch eine
        gute Möglichkeit um neue Ansätze für ein gegebenes Problem zu entdecken und um
        Codes zu verbessern.
      </p>
      <p>
        Kürzlich habe ich damit begonnen, in Edabit Coding Challenges zu schaffen. Dies
        ist hilfreich für die Entwicklung meiner Testfähigkeiten auf dem Gebiet der
        Einheitentests, und ich kann auch zur Gemeinschaft beitragen.
      </p>

      {/* STUDY */}
      <h4 id="study">{study}</h4>
      <p>
        Ich habe Soziologie studiert. Thematisch und technisch gesehen, trägt es nicht all
        zu viel zum Bereich Webentwicklung bei, allerdings war der Ablauf des Studiums
        sehr projektorientiert angelegt, so dass ich in der Zeit schon Erfahrungen im
        Bereich Projektarbeit sammeln konnte. Diese Projekte wurden hauptsächlich in einem
        Team bearbeitet, normalerweise 3-5 Personen, mit Ausnahme des letzten Jahres,
        welches aus einem Soloprojekt bestand. Dies führte zu 4 Jahren starker Teamarbeit,
        in denen ich viele Erfahrungen in der Zusammenarbeit mit verschiedenen Menschen
        sammeln konnte.
      </p>

      {/* HOBBIES */}
      <h4 id="hobbies">{hobbies}</h4>
      <p>
        Abgesehen vom Programmieren spiele ich gerne Brettstrategiespiele und bin
        sportlich aktiv (Radfahren, Fitness Studio oder sportliche Aktivitäten im Park).
      </p>
    </article>
  );
}
