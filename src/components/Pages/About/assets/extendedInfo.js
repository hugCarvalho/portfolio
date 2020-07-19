import React from "react";
import { HashLink } from "react-router-hash-link";

const edabitScore = 5860;
const edabitLevel = 14;
const checkioLevel = 8;

export function ExtendedInfoEN() {
  //TOPICS
  const knowledge = "Where does my knowledge come from?";
  const challenges = "How do I improve my problem solving skills?";
  const study = "What did I study?";
  const hobbies = "What are my main hobbies?";
  return (
    <div>
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
        <br></br>
        <h4 id="knowledge">{knowledge}</h4>
        <p>{""}</p>
        <p>
          Although I have read some books about JavaScript, most of my knowledge
          derives from online resources.
        </p>
        <p>
          For a more structured approach, I enrolled in numerous online courses
          on Udemy.com,{" "}
          <i>making sure I got my knowledge from several sources</i>, which also
          allowed me to assess the quality of what I was learning.
        </p>
        <p>
          More recently, I started to dive into the official documentation,
          especially with the React environment, and to also focus on free
          online tutorials for more specific subjects.
        </p>
        <p>
          At the end, you can find a{" "}
          <HashLink smooth to="#resources">
            list of the mentioned resources
          </HashLink>
          .
        </p>
        <br></br>
        <br></br>
        {/* CHALENGES */}
        <h4 id="challenges">{challenges}</h4>
        <p>
          Developing whole projects like those you have as reference on this
          website, and using programming playgrounds like <i>codesandbox.io</i>{" "}
          to micro-practice new concepts, are a great way to develop new skills.
        </p>
        <p>
          I also enjoy solving coding challenges on a regular basis, mainly in{" "}
          <i>Edabit</i> (currently at level {edabitLevel}, with{" "}
          {edabitScore + ""} points), and sporadically in <i>CheckiO</i>{" "}
          (currently at level {checkioLevel}) to directly improve my problem and
          coding solving skills. This is also helpful in discovering new
          approaches for a given problem and to compare code for a better
          performant solution.
        </p>
        <br></br>
        <br></br>
        {/* STUDY */}
        <h4 id="study">{study}</h4>
        <p>
          I studied Sociology. Technically doesn't contribute much to this area,
          but the evaluation system was based on projects, there were no exams.
          These projects were mainly developed in a team, usually 3-5 people,
          with the exception of the last year, which consisted on a solo
          project. This resulted in 4 years of heavily based teamwork
          experiences with different people which helped to lay the foundations
          of working collaborative in a harmonious way.
        </p>
        <br></br>
        <br></br>
        {/* HOBBIES */}
        <h4 id="hobbies">{hobbies}</h4>
        <p>{""}</p>
        <p>
          Apart from programming, I enjoy playing boardgames, doing sport like
          biking, going to the fitness studio or sport activities in the park. I
          also enjoy spending time with my girlfriend - failing to mention her,
          could potentially damage the relationship. And me... ;-)
        </p>
        <br></br>
        <br></br>
      </article>
    </div>
  );
}

//GERMAN
export function ExtendedInfoDE() {
  //TOPICS
  const knowledge = "Wie habe ich mir mein Wissen angeeignet?";
  const challenges = "Wie verbessere ich meine Fähigkeiten zur Problemlösung?";
  const study = "Was habe ich studiert?";
  const hobbies = "Was sind meine Interessen?";
  return (
    <div>
      <article>
        <h2>Weitere Informationen</h2>
        <ol>
          <li>
            1. <a href="#knowledge">{knowledge}</a>
          </li>
          <li>
            2. <a href="#challenges">{challenges}</a>
          </li>
          <li>
            3. <a href="#study">{study}</a>
          </li>
          <li>
            4. <a href="#hobbies">{hobbies}</a>
          </li>
        </ol>
        <br></br>
        <h4 id="knowledge">{knowledge}</h4>
        <p>{""}</p>
        <p>
          Ich habe einige Bücher über JavaScript gelesen aber den Großteil
          meines Wissens habe ich mir aus Online-Ressourcen angeeignet. So
          konnte ich die Theorie direkt mit der Praxis verbinden.
        </p>
        <p>
          Für einen strukturierteren Ansatz habe ich mich bei verschiedenen
          Online-Kursen von Udemy.com eingeschrieben, um sicherzustellen, dass
          ich mein Wissen von verschiedenen Experten beziehe.
        </p>
        <p>
          Seit kurzem habe ich begonnen, mich mit der offiziellen React
          Dokumentation zu befassen und zusätzlich konzentriere ich mich auf
          spezifische Themen mit Hilfe von YouTube Tutorials.
        </p>
        <p>
          Am Ende der Seite finden Sie eine{" "}
          <a href="#resources"> Liste der Ressourcen </a> {""}
          in diesem Abschnitt erwähnt wurden.
        </p>
        <br></br>
        <br></br>
        {/* CHALENGES */}
        <h4 id="challenges">{challenges}</h4>
        <p>
          Das vollständige Programmieren von Projekten, die Sie zum Beispiel auf
          dieser Website finden können, war ein sehr gutes Training und so
          konnte ich die Theorie in die Praxis umsetzten. Herausforderungen
          waren dabei eine gute Übung für mich, die richtige Lösung zu finden.
        </p>
        <p>
          Neue Konzepte in der „Mikropraxis“ zu üben, ist ebenfalls eine gute
          Möglichkeit, neue Fähigkeiten zu entwickeln. Plattformen wie zum
          Beispiel <i>Codesandbox.io</i> sind eine gute Übungsmöglichkeit.
        </p>
        <p>
          Zusätzlich löse ich gerne regelmäßig Challenges, um meine Fähigkeiten
          zu testen und zu verbessern. Hauptsächlich nutze ich <i> Edabit </i>{" "}
          (derzeit auf Stufe {edabitLevel}, mit {""}
          {edabitScore + ""} Punkte) und vereinzelt auch <i> CheckiO </i>{" "}
          (derzeit auf Stufe {checkioLevel}). Das ist auch eine gute Möglichkeit
          um neue Ansätze für ein gegebenes Problem zu entdecken und um Codes zu
          verbessern.
        </p>
        <br></br>
        <br></br>
        {/* STUDY */}
        <h4 id="study">{study}</h4>
        <p>
          Ich habe Soziologie studiert. Thematisch und technisch gesehen, trägt
          es nicht all zu viel zum Bereich Webentwicklung bei, allerdings war
          der Ablauf des Studiums sehr projektorientiert angelegt, so dass ich
          in der Zeit schon Erfahrungen im Bereich Projektarbeit sammeln konnte.
          Diese Projekte wurden hauptsächlich in einem Team bearbeitet,
          normalerweise 3-5 Personen, mit Ausnahme des letzten Jahres, welches
          aus einem Soloprojekt bestand. Dies führte zu 4 Jahren starker
          Teamarbeit, in denen ich viele Erfahrungen in der Zusammenarbeit mit
          verschiedenen Menschen sammeln konnte.
        </p>
        <br></br>
        <br></br>
        {/* HOBBIES */}
        <h4 id="hobbies">{hobbies}</h4>
        <p>{""}</p>
        <p>
          Abgesehen vom Programmieren spiele ich gerne Brettstrategiespiele und
          bin sportlich aktiv (Radfahren, Fitness Studio oder sportliche
          Aktivitäten im Park).
        </p>
        <br></br>
        <br></br>
      </article>
    </div>
  );
}
