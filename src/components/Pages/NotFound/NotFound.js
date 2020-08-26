import React from "react";
import "./NotFound.scss";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="NotFound">
      <h2>
        <p>An error has ocurred! </p>
        <p>
          Please click the button below to return to the home page or use the
          above navigation buttons to return to the website
        </p>

        <Link to="/projects">
          <button>Back to Home Page</button>
        </Link>
      </h2>
    </main>
  );
}

export default NotFound;
