import React, { useState, useContext } from "react";
import "./About.scss";
import { LanguageContext } from "../../../App";
import { books } from "./learningResourcesList";
import { courses } from "./learningResourcesList";

function AboutEN() {
  const { isLanguageEnglish } = useContext(LanguageContext);
  const [isExtendedInfoVisible, setIsExtendedInfoVisible] = useState(true);

  return (
    <div className="wrapper__about">
      <section className=" show-smallest-screen">
        <ul>
          <li>
            <a href="#">Resume - not active yet</a>
          </li>
          <li>
            <a href="https://github.com/hugCarvalho">Github</a>
          </li>
        </ul>
      </section>
      <article>
        <h2>Basic Introduction</h2>
        <p>
          Hi, I'm Hugo, a self-taught Portuguese guy, with a master in
          Sociology. I started to learn Programming with Javascript, parallel to
          my work, about one and half year ago. It started as a curiosity but
          didn't take long to turn into a passion. Recently, I decided to quit
          my job to pursue this passion.
        </p>
        <p>
          I am actively learning and enjoying it very much, but I would also
          very much like to work on and with a team, to work towards a common
          goal and achieve (something). Not only would it help to speed my
          learning curve but it would also bring a sense of completion to this
          whole process.
        </p>
        <p>
          If you'd like to know more about me, just keep reading (after you
          press the button to make sure you are not a robot...)
        </p>
      </article>

      {/* BUTTON*/}
      <button
        onClick={() => setIsExtendedInfoVisible(true)}
        className={isExtendedInfoVisible ? "invisible" : ""}
      >
        {isLanguageEnglish && "Give me more"}
      </button>

      {/*EXTENDED*/}
      {isExtendedInfoVisible && (
        <article className="extended">
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
              Although I have read some books about Javascript, most of my
              knowledge derives from online resources.
            </p>
            <p>
              For a more structured approach, I enrolled in numerous online
              courses in udemi.com,{" "}
              <i>making sure I got my knowledge from several sources</i>, which
              also allowed me to assess the quality of what I was learning.
            </p>
            <p>
              More recently, I started to dive into the original documentation,
              specially with the React environment, and to also focus on free
              online tutorials for more specific subjects.
            </p>
            <p>
              At the end, you can find a{" "}
              <a href="#resources" style={{ color: "white" }}>
                list of resources
              </a>{" "}
              mentioned in this section.
            </p>
            <br></br>
            <br></br>
            <h4 id="study">What did I study?</h4>
            <p>
              I studied Sociology. Technically doesn't contribute much to this
              area, but the evaluation system was mostly based on projects,
              there were no exams. These projects were mainly developed in a
              team, usually 3-5 people, with the exception of the last year,
              which consisted on a solo project. (More or end here?)
            </p>
            <br></br>
            <br></br>
            <h4 id="hobbies">What are my main hobbies?</h4>
            <p>{""}</p>
            <p>
              Appart from programming, also I enjoy spending time with my
              girlfriend (failing to mention her, could potentially damage the
              relationship. And me...), playing boardgames, doing sport
              activities like biking, playing in the park, or going to the
              fitness studio.{" "}
            </p>
            <br></br>
            <br></br>
            <h5 id="resources">
              List of books and courses read or taken: (Youtube tutorials are
              not included here):
            </h5>
            Books:
            <ul>
              {books.map((item, i) => {
                console.log(item);
                return (
                  <li key={i}>
                    <i>{item.title}</i> - {item.author}
                  </li>
                );
              })}
            </ul>
            Online courses:
            {courses.map((item, i) => {
              const { title, author, duration } = item;
              return (
                <li key={i}>
                  <i>{title}</i>{" "}
                  <span className="duration">({duration} hours)</span>, {author}
                </li>
              );
            })}
          </article>
        </article>
      )}
    </div>
  );
}

//TODO: clone above when it's ready and translate to german
export function AboutDE() {
  const [isExtended, setIsExtended] = useState(false);

  return (
    <>
      <h2>GERMAN Basic Introduction</h2>
      {/* TODO: article gives padding, where does it come from? */}
      <article>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis
        lectus non odio venenatis luctus. Vestibulum scelerisque felis vitae
        purus iaculis, lobortis mollis diam convallis. Integer condimentum,
        massa sed dapibus cursus, justo nisi ullamcorper turpis, in blandit
        lacus est vitae ex. Proin bibendum ipsum in tincidunt vestibulum. Proin
        quis leo orci. Sed eu congue sapien. Ut non elit massa. Donec
        ullamcorper justo ipsum, vel imperdiet risus rhoncus vel. Nulla in
        convallis arcu. Ut quis ultricies magna, sed tincidunt risus. Sed
        placerat sagittis diam at volutpat. Phasellus leo erat, congue eget nunc
        ut, iaculis dapibus est. Etiam risus magna, varius vitae consectetur
        sed, vestibulum quis justo. Curabitur at faucibus ipsum. Cras imperdiet,
        sapien a finibus condimentum, mauris nulla volutpat massa, at vestibulum
        dui ligula a ex. Sed porttitor lacus a ultrices porttitor.
      </article>
      {/* BUTTON + EXTENDED */}
      <button onClick={() => setIsExtended(prev => !prev)}>
        {isExtended ? "weniger ist besser" : "gib es mir"}
      </button>
      {isExtended && (
        <article className="extended">
          <h2>Extended information</h2>
          {/* TODO: add nav to sections of text */}
          <h4>where does my knowledge come from? (UDEMI/EDABIT/BOOKS)</h4>
          <h4>what did I study?</h4>
          <h4>what are my hobbies</h4>
          <h4>Certificates</h4>
          <p>
            Donec gravida vestibulum justo, at pretium dolor consectetur non.
            Morbi et tincidunt arcu. Vestibulum arcu lacus, pellentesque id
            dictum at, sagittis nec ligula. Fusce ultrices quam a odio dictum,
            quis sollicitudin nibh venenatis. Suspendisse non scelerisque dolor.
            Sed molestie, odio nec feugiat pellentesque, ligula eros finibus
            ligula, in egestas nibh augue vitae nisl. Aenean dictum libero eu
            lectus faucibus auctor. Phasellus purus ipsum, auctor eu auctor
            eget, iaculis ut ligula. Aenean auctor justo risus, at aliquam lorem
            mattis viverra. Vestibulum vel facilisis nulla, eget bibendum
            tellus. Duis semper neque congue, scelerisque elit ac, venenatis
            turpis. Quisque tristique, augue sed interdum laoreet, tellus erat
            aliquet libero, et viverra libero nisl eget diam. Donec ullamcorper
            mi nec ex convallis feugiat.
          </p>
        </article>
      )}
    </>
  );
}
export default AboutEN;
