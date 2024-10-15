import React from "react";
import styled from 'styled-components';
import { LanguageContext } from "../../App";
import { PersonTestimony, VerticalSliderCard } from "../../components/VerticalSliderCard";
import { accomplishmentsDe, accomplishmentsEn } from '../../config/Accomplishments';
import { erblotseSkills } from "../../config/Skills";
import Abidh from '../../images/abidh.jpeg';
import Christian from '../../images/christian.jpeg';
import { PROJECTS_DATA_STRUCTURE } from "../Projects/data/projectsData";
import { Tags } from "./Tags";

const smallerScreenBreakpoint = "968px"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: "1px solid black";
  @media (max-width: ${smallerScreenBreakpoint}) {
    flex-direction: column;
  }
`
const DatumSection = styled.section`
  min-width: fit-content;
`
const Datum = styled.span`
  opacity: 0.9;
  font-weight: 600;
  @media (max-width: ${smallerScreenBreakpoint}) {
    font-size: 21px;
  }
`
const DescriptionSection = styled.section`
  width: 100%;
  padding-left: 25px;
  @media (max-width: ${smallerScreenBreakpoint}) {
    padding: 0px;
    margin-bottom: 35px;
  }
`
const JobTitle = styled.span`
  font-weight: 700;
  font-size: 22px;
  color: rgb(3, 62, 110);
  @media (max-width: 622px) {
    font-size: 20px;
  }
`
const ListItem = styled.li`
  margin-left: 3px;
`
const TestimoniesSection = styled.section`
  display: flex;
  gap: 30px;
  padding-top: 6px;
  margin-bottom: 35px;
  @media (max-width: 780px) {
    flex-direction: column;
    align-items: center;
  }
`
const Company = styled.span`
  font-size: 22px;
  font-weight: 600;
  opacity: .9;
  @media (max-width: 576px) {
    font-size: 18px;
  }
`

export const RenderExperienceEntries = () => {
  const { isLanguageEnglish } = React.useContext(LanguageContext);

  const accomplishments = isLanguageEnglish ? accomplishmentsEn : accomplishmentsDe

  return <Container>
    <DatumSection>
      <Datum>02.2021-08.2024</Datum>
    </DatumSection>
    <DescriptionSection>
      <div>
        <JobTitle>
          {isLanguageEnglish ? "Junior Software Developer" : "Junior Software Entwickler"}
        </JobTitle>
        {", "}
        <Company>Erblotse (Heritas GmbH)</Company>
        , Berlin
      </div>
      <p>{isLanguageEnglish ? "Accomplishments:" : "Leistungen:"}</p>
      <ul>
      {/* Accomplishments */}
      {
        accomplishments.map((accomplishment, i)=> {
          return <ListItem key={i}>{accomplishment}</ListItem>
        })
      }
      </ul>

      {/* SKILLS */}
      <Tags skills={erblotseSkills}/>

      <p>{isLanguageEnglish ? "Testimonies:" : "Berichte:"}</p>
      <TestimoniesSection>
        <VerticalSliderCard
          src={Christian}
          altText={"Christian Fischer"}
          name={"Christian Fischer"}
          jobTitle={"Head of Engineering at Erblotse"}
          testimony={<PersonTestimony text="I had the opportunity to manage Hugo on my team, where he made solid contributions, particularly in frontend development with React and TypeScript. Hugo quickly developed proficiency in these technologies and consistently delivered reliable code.
            What stood out most about Hugo was his ability to work well within the team. He was always willing to collaborate and support colleagues, which had positive impact on our projects."
            />}
        />
        <VerticalSliderCard
          src={Abidh}
          altText={"Abid K Muhammed"}
          name={"Abid K Muhammed"}
          jobTitle={"Software Engineer at Erblotse"}
          testimony={<PersonTestimony text="I had the pleasure of working with Hugo at Erblotse, where he excelled as a front-end developer and was particularly proficient in React. He consistently demonstrated a strong attention to detail and a commitment to delivering high-quality work. Hugo’s friendly and approachable nature, combined with his willingness to support and collaborate when needed, made him an excellent team player."/>}
        />
      </TestimoniesSection>
    </DescriptionSection>
    <DatumSection>
      <Datum>03.2020-02.2021</Datum>
    </DatumSection>
    <DescriptionSection>
      <p>
        {isLanguageEnglish ?
        "Knowledge gathering and conception, design, implementation and deployment of several smaller projects to test the acquired knowledge (available in the projcts page):"
         : "Leistungen"
        }
      </p>
      {/* PROJECTS */}
      <ul>
        <ListItem><i>Scrambled Word Game (2021)</i> - a game with highscores, hints, sound effects, settings and time pressure. And also the possibility of learning new words through dynamic lookup. Test your knowledge. If you dare.</ListItem>
        <Tags skills={PROJECTS_DATA_STRUCTURE.find(project => project.id === 5).techInfo.tags}/>
        <ListItem><i>Portfolio (2020)</i> - originally created this portfolio.</ListItem>
        <Tags skills={PROJECTS_DATA_STRUCTURE.find(project => project.id === 4).techInfo.tags}/>
        <ListItem><i>Weatherjetzt (2020)</i> - a weather app, tailored for the best user experience of its most passionate - and most likely only - user.</ListItem>
        <Tags skills={PROJECTS_DATA_STRUCTURE.find(project => project.id === 2).techInfo.tags}/>
        <ListItem><i>Todo list (2020)</i> - a classical. My very first project, where it all started...</ListItem>
        <Tags skills={PROJECTS_DATA_STRUCTURE.find(project => project.id === 1).techInfo.tags}/>
      </ul>


    </DescriptionSection>
  </Container>
}
