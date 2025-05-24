import { UTILS } from "../../../../utils/utils";
import "./MyInfoCardLinks.scss";

function MyInfoCardLinks() {

  return (
    <>
      <div className="MyInfoCardLinks">
        <ul>
          <li
            onClick={()=>UTILS.sendRequest("/github")}
            onContextMenu={()=>UTILS.sendRequest("/github")}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/hugCarvalho"
            >
              GitHub
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

          <li onClick={()=>UTILS.sendRequest("/linkedIn")} onContextMenu={()=>UTILS.sendRequest("/linkedIn")}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/hugo-c-8355b31b7"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MyInfoCardLinks;
