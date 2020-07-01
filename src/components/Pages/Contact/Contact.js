import React from "react";
import "./Contact.scss";
import { LanguageContext } from "../../../App";

function Contact() {
  const { isLanguageEnglish } = React.useContext(LanguageContext);

  return (
    <div className="container__contact">
      <h1>{isLanguageEnglish ? "Contact me" : "Kontakt mich"}</h1>
      <section className="wrapper__contact-info">
        <div className="contact-me">
          <a href="mailto:name@mydomain.com">
            <i className="fas fa-envelope-square"></i>
          </a>
          <a href="mailto:hugo.berlinlife.com">hugo.berlinlife@gmail.com</a>
        </div>
        <div className="contact-me">
          <i className="fas fa-phone-square-alt"></i>
          <span>Telephone</span>
        </div>
      </section>
    </div>
  );
}

export default Contact;
