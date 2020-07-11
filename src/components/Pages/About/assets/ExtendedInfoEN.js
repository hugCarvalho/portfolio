import React from "react";

const edabitScore = 5600;
const edabitLevel = 14;
const checkioLevel = 8;

function ExtendedInfoEN() {
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
          <br></br>
          <li></li>
        </ol>
        <h4 id="knowledge">{knowledge}</h4>
        <p>{""}</p>
        <p>
          Although I have read some books about Javascript, most of my knowledge
          derives from online resources.
        </p>
        <p>
          For a more structured approach, I enrolled in numerous online courses
          in udemi, <i>making sure I got my knowledge from several sources</i>,
          which also allowed me to assess the quality of what I was learning.
        </p>
        <p>
          More recently, I started to dive into the original documentation,
          specially with the React environment, and to also focus on free online
          tutorials for more specific subjects.
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
          website, and using programming playgrounds like condesanbox.io to
          micro practice new concepts are a great way to develop new skills.
        </p>
        <p>
          But appart from that, I also enjoy solving coding challenges on a
          regular basis, mainly in <i>Edabit</i> (currently at level{" "}
          {edabitLevel}, with {edabitScore + ""} points), and sporadically in{" "}
          <i>CheckiO</i> (currently at level {checkioLevel}) to directly improve
          my problem and coding solving skills. This is also helpful in
          discovering new approaches for a given problem and to compare code for
          a better performant solution.
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
          Appart from programming, I enjoy playing boardgames, doing sport
          activities like biking, playing in the park, or going to the fitness
          studio. I also enjoy spending time with my girlfriend (failing to
          mention her, could potentially damage the relationship. And me...){" "}
        </p>
        <br></br>
        <br></br>
      </article>
    </div>
  );
}

export default ExtendedInfoEN;
