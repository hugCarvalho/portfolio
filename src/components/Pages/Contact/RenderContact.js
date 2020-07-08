import React from "react";
import "./RenderContact.scss";

function Contact() {
  return (
    <div className="container__contact">
      <section className="wrapper__contact-info">
        <div className="contact-me">
          <a href="mailto:hugo.berlinlife@gmail.com">
            <i className="fas fa-envelope-square"></i>
          </a>
          <a href="mailto:hugo.berlinlife@gmail.com">
            hugo.berlinlife@gmail.com
          </a>
        </div>

        <div className="contact-me">
          <i className="fas fa-phone-square-alt"></i>
          <span>+49 (0)176 782 93 187</span>
        </div>
      </section>
    </div>
  );
}

export default Contact;
