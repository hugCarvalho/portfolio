import React from "react";
import styled from 'styled-components';
import { LanguageContext } from "../App";
import { accomplishmentsDe, accomplishmentsEn } from '../config/Accomplishments';
import { skills } from '../config/Skills';
import Abidh from '../images/abidh.jpeg';
import Christian from '../images/christian.jpeg';
import { PersonTestimony, VerticalSliderCard } from "./VerticalSliderCard";

const Container = styled.div`
  display: flex;
  border-radius: 4px;
  border: "1px solid black";
  @media (max-width: 622px) {
    flex-direction: column;
  }
`
const DatumSection = styled.section`
  min-width: fit-content;
`
const DescriptionSection = styled.section`
  width: 100%;
  padding-left: 25px;
  @media (max-width: 622px) {
    padding: 0px;
    margin-bottom: 35px;
  }

`
const Datum = styled.span`
  opacity: 0.9;
`
const JobTitle = styled.span`
  font-weight: 700;
  font-size: 22px;
  color: rgb(3, 62, 110);
`
const TagsSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 12px;
  margin-bottom: 12px;
`
const Tag = styled.span`
  background-color: #43617b;
  padding: 2px 8px;
  border-radius: 99px;
  color: #d1d1d1;
  margin-right: 4px;
  margin-bottom: 7px;
  font-size: 12px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const ListItem = styled.li``

const TestimoniesSection = styled.section`
  display: flex;
  gap: 30px;
  @media (max-width: 622px) {
    margin-bottom: 35px;
    flex-direction: column;
  }
`
const Company = styled.span`
  font-size: 20px;
  opacity: .9;
  @media (max-width: 576px) {
    font-size: 17px;
  }
`

export const ExperienceCard = () => {
  const { isLanguageEnglish } = React.useContext(LanguageContext);

  const accomplishments = isLanguageEnglish ? accomplishmentsEn : accomplishmentsDe

  return <Container>
    <DatumSection>
      <Datum>02.2021-08.2024</Datum>
    </DatumSection>
    <DescriptionSection>
      <span>
        <JobTitle>
          {isLanguageEnglish ? "Junior Software Developer" : "Junior Software Entwickler"}
        </JobTitle>
      <Company>, Heritas GmbH, Berlin</Company></span>
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
      <TagsSection>
        {skills.map((skill, i)=> {
            return <Tag key={i}>{skill}</Tag>
          })
        }
      </TagsSection>
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
  </Container>
}
