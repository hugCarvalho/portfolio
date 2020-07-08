import React, { useState, useContext } from "react";
import "./About.scss";
import { LanguageContext } from "../../../App";
import { books } from "./learningResourcesList";
import { courses } from "./learningResourcesList";
import MainIntroEN from "./assets/mainIntro";
import ExtendedInfoEN from "./assets/extendedInfo";

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
      <MainIntroEN />
      {/* BUTTON*/}
      <button
        onClick={() => setIsExtendedInfoVisible(true)}
        className={isExtendedInfoVisible ? "invisible" : ""}
      >
        {isLanguageEnglish && "Give me more"}
      </button>
      {/* EXTENDED */}
      {isExtendedInfoVisible && (
        <section className="extended">
          <ExtendedInfoEN />
          <article>
            <h5 id="resources">
              List of books and courses read or taken: (Youtube tutorials are
              not included here):
            </h5>
            <p>Books:</p>
            <ul>
              {books.map((item, i) => {
                console.log(item);
                return (
                  <li key={i}>
                    <i>{item.title}</i>, {item.author}
                  </li>
                );
              })}
            </ul>
            <p>Online courses:</p>
            <ul>
              {courses.map((item, i) => {
                const { title, author, duration } = item;
                return (
                  <li key={i}>
                    <i>{title}</i>{" "}
                    <span className="duration">({duration} hours)</span>,{" "}
                    {author}
                  </li>
                );
              })}
            </ul>
          </article>
        </section>
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
      <article></article>
      {/* BUTTON + EXTENDED */}
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
      )}
    </>
  );
}
export default AboutEN;
