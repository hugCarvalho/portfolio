import React from "react";
import "./NotFound.scss";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h2>
        <p>Page not found!!! </p>
        <p>Please click the button to return to the home page </p>

        <Link to="/projects">
          <button>Back to Home Page</button>
        </Link>
      </h2>
    </div>
  );
}

export default NotFound;
