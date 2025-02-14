import React from "react";
import { LanguageContext } from "../../App";
import { sendBackend } from "../../components/Header/MyInfoCard/MyInfoCardLinks/MyInfoCardLinks";
import "./RenderFooter.scss";

function RenderFooter() {
  const { isLanguageEnglish } = React.useContext(LanguageContext);
  return (
    <footer className="RenderFooter">
      {/* Credits section */}
      <section className="credits">
        <h4>Credits:</h4>
        <hr />
        <ul>
          <li>
            {isLanguageEnglish
              ? `Flags in "Speaks" section by `
              : `Flags im Abschnitt "Spricht" bei `}
            <cite>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://freakflagsprite.com"
              >
                freakflagsprite
              </a>
            </cite>
          </li>
          <li>
            {isLanguageEnglish
              ? `Logos in "Skills" page by `
              : `Flags im Seite "Fähigkeiten" bei `}
            <cite>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://icons8.com"
                title="icons8"
              >
                Icons8
              </a>
            </cite>
            {" and "}
            <cite>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://worldvectorlogo.com/"
                title="worldvectorlogo"
              >
                Worldvectorlogo
              </a>
            </cite>
          </li>
          <li>
            Favicon {isLanguageEnglish ? "made by" : "bei"}{" "}
            <cite>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.flaticon.com/authors/freepik"
                title="Freepik"
              >
                Freepik
              </a>{" "}
            </cite>
            {isLanguageEnglish ? "from" : "von"}{" "}
            <cite>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.flaticon.com/"
                title="Flaticon"
              >
                {" "}
                Flaticon
              </a>
            </cite>
          </li>
        </ul>
      </section>

      {/* My Links Section */}
      <section className="contact-links">
        <h4>Links</h4>
        <hr></hr>
        <ul>
          <li onClick={()=>sendBackend("/github")} onContextMenu={()=>sendBackend("/github")}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/hugCarvalho"
            >
              GitHub
            </a>
          </li>

          <li onClick={()=>sendBackend("/edabit")} onContextMenu={()=>sendBackend("/edabit")}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://edabit.com/user/8Z3dkvWBqtrMEE48N"
            >
              Edabit
            </a>
          </li>
          <li onClick={()=>sendBackend("/linkedIn")} onContextMenu={()=>sendBackend("/linkedIn")}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/hugo-carvalho-8355b31b7/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
}

export default RenderFooter;
