import styled from 'styled-components'
import { accomplishments } from '../config/Accomplishments'
import { skills } from '../config/Skills'

const Container = styled.div`
  /* background-color: aliceblue; */
  display: flex;
  /* padding: 5px; */
  border-radius: 4px;
  border: "1px solid black";
  /* line-height: 40px; */
  @media (max-width: 622px) {
    flex-direction: column;
  }
`
const Left = styled.section`
  min-width: fit-content;
  /* background-color: pink; */
`
const Right = styled.section`
  /* background-color: lime; */
  width: 100%;
  padding-left: 25px;
  @media (max-width: 622px) {
    padding: 0px;
  }
`
const Datum = styled.span`
  opacity: 0.9;
  /* color: yellow; */
`
const JobTitle = styled.span`
  /* font-variant-caps: small-caps; */
  font-weight: 700;
  font-size: 22px;
  color: royalblue;
  color: rgb(3, 62, 110);

  /* color: brown; */
`
const JobDescription = styled.div`
  /* background-color: orange; */
`
const TagsSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 12px;
  margin-bottom: 26px;
  `
const Tag = styled.span`
  background-color: #43617b;
  /* color: rgb(3, 62, 110); */
  padding: 2px 8px;
  border-radius: 99px;
  color: #d1d1d1;
  margin-right: 4px;
  margin-bottom: 7px;
  font-size: 12px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const ListItem = styled.li`
`
const JobCompany = styled.span`
  font-size: 19px;
  opacity: .9;
  @media (max-width: 576px) {
    font-size: 17px;
  }
`

export const ExperienceCard = () => {
  return <Container>
    <Left>
      <Datum>02.2021-08.2024</Datum>
    </Left>
    <Right>
      <span><JobTitle>Junior Software Developer</JobTitle>
      <JobCompany>, Heritas GmbH, Berlin</JobCompany></span>

      {/* <JobDescription>
        Extremely rich and diversified experience in a small agile team (4-7), working on two products with different tech stack, with following accomplishments:
      </JobDescription> */}
      {/* Accomplishments */}
      <ul>
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
    </Right>
  </Container>
}
export const ExperienceCard2 = () => {
  return <Container>
    <Left>
      <Datum>04.2020-01.2024</Datum>
    </Left>
    <Right>
      <JobTitle>Learning journey</JobTitle>
      {/* <JobDescription>
        Extremely rich and diversified experience in a small agile team (4-7), working on two products with different tech stack, with following accomplishments:
      </JobDescription> */}
      {/* Accomplishments */}
      <ul>
      <ListItem>""sdasdsa</ListItem>

      </ul>
      {/* SKILLS */}
      <TagsSection>
        {skills.map((skill, i)=> {
            return <Tag key={i}>{skill}</Tag>
          })
        }
      </TagsSection>
    </Right>
  </Container>
}
