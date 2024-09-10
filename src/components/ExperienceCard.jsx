import React from "react";
import styled from 'styled-components';
import { LanguageContext } from "../App";
import { accomplishments, accomplishmentsDe } from '../config/Accomplishments';
import { skills } from '../config/Skills';
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
// const JobDescription = styled.div`
//   /* background-color: orange; */
// `
const TagsSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 12px;
  margin-bottom: 26px;
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

const Company = styled.span`
  font-size: 19px;
  opacity: .9;
  @media (max-width: 576px) {
    font-size: 17px;
  }
`

export const ExperienceCard = () => {
  const { isLanguageEnglish } = React.useContext(LanguageContext);

  const acc = isLanguageEnglish ? accomplishments : accomplishmentsDe

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
      {/* <JobDescription>
        Accomplishments:
      </JobDescription> */}

      {/* Accomplishments */}
      <ul>
      {
        acc.map((accomplishment, i)=> {
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
    </DescriptionSection>
  </Container>
}
