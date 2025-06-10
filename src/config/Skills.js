import chakraIcon from "../Pages/Skills/assets/chakra.webp"
import datadog from "../Pages/Skills/assets/datadog.svg"
import mui from "../Pages/Skills/assets/material-ui.svg"
import mongodbIcon from "../Pages/Skills/assets/mongodb.svg"
import nextjs from "../Pages/Skills/assets/next-js.svg"
import nodejsIcon from "../Pages/Skills/assets/nodejs.svg"
import openai from "../Pages/Skills/assets/openai.svg"
import prisma from "../Pages/Skills/assets/prisma-3.svg"
import sentry from "../Pages/Skills/assets/sentry.svg"
import supabase from "../Pages/Skills/assets/supabase.svg"
import tailwind from "../Pages/Skills/assets/tailwind-css.svg"

export const SKILL_CATEGORIES = {
  all: "all",
  reactEcosystem: "reactEcosystem",
  backend: "backend",
  styling: "styling",
  testing: "testing",
  monitoring: "monitoring",
  versioning: "versioning",
}

// REACT ECOSYSTEM
const react = ["React", SKILL_CATEGORIES.reactEcosystem]
const reactRouter = ["React Router",  SKILL_CATEGORIES.reactEcosystem]
const js =["JavaScript", SKILL_CATEGORIES.reactEcosystem]
const ts =["TypeScript", SKILL_CATEGORIES.reactEcosystem]
// const localStorage = ["Local Storage", SKILL_CATEGORIES.reactEcosystem]
// STYLES
// const semanticHTML = ["Semantic HTML",SKILL_CATEGORIES.styling]
const materialUI = ["Material UI", SKILL_CATEGORIES.styling]
const styledComponents = ["Styled Components", SKILL_CATEGORIES.styling]
// const sass = ["SASS",SKILL_CATEGORIES.styling]
const tailwindCss = ["Tailwind CSS", SKILL_CATEGORIES.styling]
const chakraUi = ["Chakra UI", SKILL_CATEGORIES.styling]
// TESTS
const cypress = ["Cypress", SKILL_CATEGORIES.testing]
const jest =  ["Jest", SKILL_CATEGORIES.testing]
const testingLibrary = ["React Testing Library", SKILL_CATEGORIES.testing]
// BACKEND + DB
const nodejs = ["Node.js", SKILL_CATEGORIES.backend]
const mongoDb =  [ "MongoDb", SKILL_CATEGORIES.backend]
const awsCognito = ["AWS Cognito",SKILL_CATEGORIES.backend]
const awsDynamo =  [ "AWS DynamoDb", SKILL_CATEGORIES.backend]
const postgreSQL = ["PostgreSQL", SKILL_CATEGORIES.backend]

const reactQuery = ["React Query", SKILL_CATEGORIES.backend]
const prism = [ "Prisma", SKILL_CATEGORIES.backend]
const sentr = ["Sentry", SKILL_CATEGORIES.monitoring]
const dDog = ["Datadog", SKILL_CATEGORIES.monitoring]
const nextJs = ["Next.js", SKILL_CATEGORIES.reactEcosystem]
const threeJs = ["Three.js", SKILL_CATEGORIES.styling]
const framerMotion = ["Framer Motion", SKILL_CATEGORIES.styling]
const emailJs = ["EmailJS", SKILL_CATEGORIES.all]
const openAI = ["openAI API", SKILL_CATEGORIES.all]
const MusicBrainz = ["MusicBrainz API", SKILL_CATEGORIES.all]


// skill groups ERBLOTSE
const languages = [react, js, ts, nextJs]
const dbRelated = [reactQuery,awsCognito, awsDynamo, postgreSQL, nodejs, prism]
const testing = [cypress, jest, testingLibrary]
const styles = [styledComponents, materialUI, tailwindCss, chakraUi]
const monitoring = [sentr,  dDog]
const others = [["Jira", SKILL_CATEGORIES.monitoring]]

// skills in projects
export const erblotseSkills = [...languages, ...dbRelated, ...styles, ...testing, ...monitoring, ...others]
export const portfolioV2 = [nextJs, js, tailwindCss, threeJs, framerMotion, emailJs]
export const karaokeApp = [react, ts, reactRouter, nodejs, mongoDb, chakraUi, jest, testingLibrary, openAI, MusicBrainz,  ]

export const SKILLS_DATA = [
  { name: "JavaScript", category: SKILL_CATEGORIES.reactEcosystem, class: "bg-javascript", type: "single" },
  { name: "React", category: SKILL_CATEGORIES.reactEcosystem, class: "bg-react", type: "single" },
  { name: "Typescript", category: SKILL_CATEGORIES.reactEcosystem, class: "bg-typescript", type: "single" },
  { name: "React Query", category: SKILL_CATEGORIES.reactEcosystem, class: "bg-react", type: "single" },
  { name: "Node.js", category: SKILL_CATEGORIES.backend, type: "singleSvg", src: nodejsIcon},
  { name: "Next.js", category: SKILL_CATEGORIES.reactEcosystem, type: "singleSvg", src: nextjs},
  { name: "DynamoDB", category: SKILL_CATEGORIES.backend, class: "bg-dynamoDB", type: "single" },
  { name: "Supabase", category: SKILL_CATEGORIES.backend, type: "singleSvg", src: supabase},
  { name: "MongoDB", category: SKILL_CATEGORIES.backend, type: "singleSvg", src: mongodbIcon},
  { name: "Cypress", category: SKILL_CATEGORIES.testing, class: "bg-jest", type: "single" },
  { name: "Jest", category: SKILL_CATEGORIES.testing, class: "bg-jest", type: "single" },
  { name: "React Testing Library", category: SKILL_CATEGORIES.testing, class: "bg-testing_library", type: "single" },
  { name: "Tailwind CSS", category: SKILL_CATEGORIES.styling, type: "singleSvg", src: tailwind},
  { name: "Material UI", category: SKILL_CATEGORIES.styling, class: "bg-mui", type: "singleSvg", src: mui},
  { name: "StyledComponents", category: SKILL_CATEGORIES.styling, class: "bg-styled-components", type: "single" },
  { name: "Chakra UI", category: SKILL_CATEGORIES.styling, type: "singleSvg", src: chakraIcon},
  { name: "Semantic HTML", category: SKILL_CATEGORIES.reactEcosystem, class: "bg-html-5", type: "single" },
  { name: {one: "CSS", two: "Sass"}, category: SKILL_CATEGORIES.styling, class: {one: "bg-css3", two: "bg-sass"}, type: "dual"},
  { name: "Cognito", category: SKILL_CATEGORIES.backend, class: "bg-dynamoDB", type: "single" },
  { name: "PostgreSQL", category: SKILL_CATEGORIES.backend, class: "bg-postgreSQL", type: "single" },
  { name: "Redux", category: SKILL_CATEGORIES.reactEcosystem, class: "bg-redux", type: "single" },
  { name: "Sentry", category: SKILL_CATEGORIES.monitoring, type: "singleSvg", src: sentry },
  { name: "Datadog", category: SKILL_CATEGORIES.monitoring, type: "singleSvg", src: datadog },
  { name: "Prisma", category: SKILL_CATEGORIES.reactEcosystem, type: "singleSvg", src: prisma },
  { name: "Open AI", category: SKILL_CATEGORIES.reactEcosystem, type: "singleSvg", src: openai },
  { name: {one: "GitHub", two:"Git"}, category: SKILL_CATEGORIES.versioning, class: {one: "bg-github special", two:"bg-git" }, type: "dual" },
];
