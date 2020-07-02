import React from "react";

//Renders list of app features
export const renderFeatures = (project, lang) =>
  project.features[lang].map((item, i) => <li key={i}>{item}</li>);

//Renders list of project specific concepts
export const renderProjectSpecifics = project => {
  //console.log("RENDER SPECIFICS");
  return project.techInfo.specs.map((item, i, arr) =>
    arr.length - 1 === i ? <i>{`${item} `}</i> : <i>{`${item} / `}</i>
  );
};

//Renders list of used third party libraries
export const renderThirdParty = project =>
  project.techInfo.thirdParty.map((item, i) => <li key={i}>{item}</li>);