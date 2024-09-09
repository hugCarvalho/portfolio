import styled from 'styled-components'
import { accomplishments } from '../config/Accomplishments'
import { skills } from '../config/Skills'

const Container = styled.div`
  background-color: aliceblue;
  display: flex;
  /* padding: 5px; */
  border-radius: 4px;
  border: "1px solid black";
  line-height: 40px;
`
const Left = styled.section`
  min-width: fit-content;
  background-color: pink;
`
const Right = styled.section`
  background-color: lime;
  width: 100%;
  padding-left: 25px;
`
const Datum = styled.span`
  color: yellow;
`
const JobTitle = styled.span`
  color: brown;
`
const JobDescription = styled.div`
  background-color: orange;
`
const TagsSection = styled.section`
  background-color: lightblue;
`
const Tags = styled.span`
  background-color: green;
  padding: 6px 10px;
  border-radius: 99px;
  color: lightgreen;
`


export const ExperienceCard = () => {
  return <Container>
    <Left>
      <Datum>02.2021-08.2024</Datum>
    </Left>
    <Right>
      <JobTitle>Junior Software Developer @ Heritas GmbH, Berlin</JobTitle>
      <JobDescription>
        Extremely rich and diversified experience in a small agile team (4-7), working on two products with different tech stack, with following accomplishments:
      </JobDescription>
      {/* Accomplishments */}
      <ul>
      {
        accomplishments.map((accomplishment)=> {
          return <li>{accomplishment}</li>
        })
      }
      </ul>

      {/* SKILLS */}
      <TagsSection>
        {skills.map((skill)=> {
            return <Tags>{skill}</Tags>
          })
        }
      </TagsSection>
    </Right>
  </Container>
}
