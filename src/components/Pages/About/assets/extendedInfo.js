import React from "react";

function ExtendedInfoEN() {
  return (
    <div>
      <article>
        <h2>Extended Introduction</h2>
        <ol>
          <li>
            1. <a href="#knowledge">Where do I get my knowledge from</a>?
          </li>
          <li>
            2. <a href="#study">What did I study</a>?
          </li>
          <li>
            3. <a href="#hobbies">What are my main hobbies</a>?
          </li>
          <br></br>
          <li></li>
        </ol>
        <h4 id="knowledge">Where do I get my knowledge from?</h4>
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
        <h4 id="study">What did I study?</h4>
        <p>
          I studied Sociology. Technically doesn't contribute much to this area,
          but the evaluation system was mostly based on projects, there were no
          exams. These projects were mainly developed in a team, usually 3-5
          people, with the exception of the last year, which consisted on a solo
          project. (More or end here?)
        </p>
        <br></br>
        <br></br>
        <h4 id="hobbies">What are my main hobbies?</h4>
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
