import React from "react";
import { useLocation } from "react-router-dom";
import { LanguageContext } from "../../App";
import { IsActiveContext } from "../../components/Header/NavButtons/RenderNavButtons";
import { UTILS } from "../../utils/utils";
import AboutEN, { AboutDE } from "./About";
import "./RenderAbout.scss";

function RenderAbout() {
  const { isLanguageEnglish } = React.useContext(LanguageContext);
  const pageIsActive = React.useContext(IsActiveContext);

  const {pathname} = useLocation()

  React.useEffect(()=> {
    UTILS.sendRequest(pathname)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  React.useEffect(() => {
    document.title = "About";
  }, [pageIsActive]);

  return (
    <div className="RenderAbout">
      {/* Only displayed on smaller mobile viewport */}
      <section className="show-on-smallest-screen-only">
        <ul>
          <li onClick={()=>UTILS.sendRequest("/github")} onContextMenu={()=>UTILS.sendRequest("/github")}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/hugCarvalho"
            >
              GitHub
            </a>
          </li>
          <li onClick={()=>UTILS.sendRequest("/linkedIn")} onContextMenu={()=>UTILS.sendRequest("/linkedIn")}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/hugo-c-8355b31b7/"
            >
              LinkedIn
            </a>
          </li>
          <li onClick={()=>UTILS.sendRequest("/edabit")} onContextMenu={()=>UTILS.sendRequest("/edabit")}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://edabit.com/user/8Z3dkvWBqtrMEE48N"
            >
              Edabit
            </a>
          </li>
        </ul>
      </section>
      {/* About / Experience */}
      {isLanguageEnglish ? <AboutEN /> : <AboutDE />}
    </div>
  );
}

export default RenderAbout;
