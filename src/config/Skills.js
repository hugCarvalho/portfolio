import datadog from "../Pages/Skills/assets/datadog.svg"
import mui from "../Pages/Skills/assets/material-ui.svg"
import mongodb from "../Pages/Skills/assets/mongodb.svg"
import nodejs from "../Pages/Skills/assets/nodejs.svg"
import prisma from "../Pages/Skills/assets/prisma-3.svg"
import sentry from "../Pages/Skills/assets/sentry.svg"
import supabase from "../Pages/Skills/assets/supabase.svg"

const languages = ["React", "JavaScript", "Typescript", "HTML"]
const styles = ["CSS", "StyledComponents", "Material UI"]
const testing = ["Jest", "Cypress", "React Testing Library"]
const dbRelated = ["React Query", "AWS Cognito", "AWS DynamoDb", "PostgreSQL", "Node.js", "Prisma"]
const monitoring = ["Sentry", "Datadog"]
const others = ["Jira"]
export const erblotseSkills = [...languages, ...styles, ...testing, ...dbRelated, ...monitoring, ...others]

export const SKILL_CATEGORIES = {
  all: "all",
  reactEcosystem: "reactEcosystem",
  backend: "backend",
  styling: "styling",
  testing: "testing",
  monitoring: "monitoring",
  versioning: "versioning",
}

export const SKILLS_DATA = [
  { name: "JavaScript", category: SKILL_CATEGORIES.reactEcosystem, class: "bg-javascript", type: "single" },
  { name: "React", category: SKILL_CATEGORIES.reactEcosystem, class: "bg-react", type: "single" },
  { name: "Typescript", category: SKILL_CATEGORIES.reactEcosystem, class: "bg-typescript", type: "single" },
  { name: "React Query", category: SKILL_CATEGORIES.reactEcosystem, class: "bg-react", type: "single" },
  { name: "Semantic HTML", category: SKILL_CATEGORIES.reactEcosystem, class: "bg-html-5", type: "single" },
  { name: "StyledComponents", category: SKILL_CATEGORIES.styling, class: "bg-styled-components", type: "single" },
  { name: {one: "CSS", two: "Sass"}, category: SKILL_CATEGORIES.styling, class: {one: "bg-css3", two: "bg-sass"}, type: "dual"},
  { name: "Material UI", category: SKILL_CATEGORIES.styling, class: "bg-mui", type: "singleSvg", src: mui},
  { name: "Jest", category: SKILL_CATEGORIES.testing, class: "bg-jest", type: "single" },
  { name: "Cypress", category: SKILL_CATEGORIES.testing, class: "bg-jest", type: "single" },
  { name: "React Testing Library", category: SKILL_CATEGORIES.testing, class: "bg-testing_library", type: "single" },
  { name: "DynamoDB", category: SKILL_CATEGORIES.backend, class: "bg-dynamoDB", type: "single" },
  { name: "Cognito", category: SKILL_CATEGORIES.backend, class: "bg-dynamoDB", type: "single" },
  { name: "PostgreSQL", category: SKILL_CATEGORIES.backend, class: "bg-postgreSQL", type: "single" },
  { name: "Supabase", category: SKILL_CATEGORIES.backend, type: "singleSvg", src: supabase},
  { name: "Node.js", category: SKILL_CATEGORIES.backend, type: "singleSvg", src: nodejs},
  { name: "MongoDB", category: SKILL_CATEGORIES.backend, type: "singleSvg", src: mongodb},
  { name: "Redux", category: SKILL_CATEGORIES.reactEcosystem, class: "bg-redux", type: "single" },
  { name: "Sentry", category: SKILL_CATEGORIES.monitoring, type: "singleSvg", src: sentry },
  { name: "Datadog", category: SKILL_CATEGORIES.monitoring, type: "singleSvg", src: datadog },
  { name: "Prisma", category: SKILL_CATEGORIES.reactEcosystem, type: "singleSvg", src: prisma },
  { name: {one: "GitHub", two:"Git"}, category: SKILL_CATEGORIES.versioning, class: {one: "bg-github special", two:"bg-git" }, type: "dual" },
];
