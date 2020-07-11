import React from "react";

const edabitScore = 5600;
const edabitLevel = 14;
const checkioLevel = 8;

export function ExtendedInfoEN() {
  //TOPICS
  const knowledge = "Where does my knowledge from?";
  const challenges = "How do I improve my problem solving skills?";
  const study = "What did I study?";
  const hobbies = "What are my main hobbies?";
  return (
    <div>
      <article>
        <h2>Extended Introduction</h2>
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
          At the end, you can find a <a href="#resources">list of resources</a>{" "}
          mentioned in this section.
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
          Apart from programming, I enjoy playing boardgames, doing sport
          activities like biking, playing in the park, or going to the fitness
          studio. I also enjoy spending time with my girlfriend (failing to
          mention her, could potentially damage the relationship. And me...).
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
  const knowledge = "Woher kommt mein Wissen?";
  const challenges = "Wie verbessere ich meine Fähigkeiten zur Problemlösung?";
  const study = "Was habe ich studiert?";
  const hobbies = "Was sind meine Haupthobbys?";
  return (
    <div>
      <article>
        <h2>Erweiterte Einführung</h2>
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
          Obwohl ich einige Bücher über JavaScript gelesen habe, stammt der
          größte Teil meines Wissens aus Online-Ressourcen.
        </p>
        <p>
          Für einen strukturierteren Ansatz habe ich mich in zahlreichen
          Online-Kursen in udemy eingeschrieben, um sicherzustellen, dass ich
          mein Wissen aus verschiedenen Quellen bezogen habe, sodass ich auch
          die Qualität meines Lernens beurteilen konnte.
        </p>
        <p>
          In jüngerer Zeit habe ich begonnen, mich mit der offiziellen
          Dokumentation zu befassen, insbesondere mit der React-Umgebung, und
          mich auch auf kostenlose Online-Tutorials für spezifischere Themen zu
          konzentrieren.
        </p>
        <p>
          Am Ende finden Sie eine{" "}
          <a href="#resources"> Liste der Ressourcen </a> {""}
          in diesem Abschnitt erwähnt.
        </p>
        <br></br>
        <br></br>
        {/* CHALENGES */}
        <h4 id="challenges">{challenges}</h4>
        <p>
          Entwickeln Sie ganze Projekte, wie Sie sie als Referenz haben Website
          und Verwendung von Programmierspielplätzen wie <i> Codesandbox.io </i>{" "}
          {""}
          Neue Konzepte in der Mikropraxis zu üben, ist eine großartige
          Möglichkeit, neue Fähigkeiten zu entwickeln.
        </p>
        <p>
          Ich löse auch gerne regelmäßig Codierungsprobleme, hauptsächlich in{" "}
          {""}
          <i> Edabit </i> (derzeit auf Stufe {edabitLevel}, mit {""}
          {edabitScore + ""} Punkte) und sporadisch in <i> CheckiO </i> {""}
          (derzeit auf Stufe {checkioLevel}), um mein Problem direkt zu
          verbessern und Codierungslösungsfähigkeiten. Dies ist auch hilfreich
          bei der Entdeckung neuer Ansätze für ein gegebenes Problem und Code
          zum Besseren zu vergleichen performante Lösung.
        </p>
        <br></br>
        <br></br>
        {/* STUDY */}
        <h4 id="study">{study}</h4>
        <p>
          Ich habe Soziologie studiert. Technisch gesehen trägt nicht viel zu
          diesem Bereich bei, Das Bewertungssystem basierte jedoch auf
          Projekten, es gab keine Prüfungen. Diese Projekte wurden hauptsächlich
          in einem Team entwickelt, normalerweise 3-5 Personen, mit Ausnahme des
          letzten Jahres, das aus einem Solo bestand Projekt. Dies führte zu 4
          Jahren starker Teamarbeit Erfahrungen mit verschiedenen Menschen, die
          dazu beigetragen haben, den Grundstein zu legen auf harmonische Weise
          zusammenzuarbeiten.
        </p>
        <br></br>
        <br></br>
        {/* HOBBIES */}
        <h4 id="hobbies">{hobbies}</h4>
        <p>{""}</p>
        <p>
          Abgesehen vom Programmieren spiele ich gerne Brettspiele und mache
          Sport Aktivitäten wie Radfahren, Spielen im Park oder Fitness Studio.
          Ich verbringe auch gerne Zeit mit meiner Freundin (Wenn ich sie nicht
          erwähne, kann dies möglicherweise die Beziehung beschädigen. Und
          mich...).
        </p>
        <br></br>
        <br></br>
      </article>
    </div>
  );
}
