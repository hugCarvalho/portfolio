import React from "react";
import styled from 'styled-components';
import { LanguageContext } from "../../App";
import useIsDesktop from "../../components/Hooks";
import { SwiperCard } from "../../components/SwiperCard";
import { PersonTestimony, VerticalSliderCard } from "../../components/VerticalSliderCard";
import { accomplishmentsDe, accomplishmentsEn } from '../../config/Accomplishments';
import { erblotseSkills } from "../../config/Skills";
import { BREAKPOINTS } from "../../config/breakpoints.js";
import { JesperTestimoy, TESTIMONIES } from "../../config/testimonies";
import Birte from '../../images/Birte-Gall.jpeg';
import Abidh from '../../images/abidh.jpeg';
import Christian from '../../images/christian.jpeg';
import { PROJECTS_DATA_STRUCTURE } from "../Projects/data/projectsData";
import { Tags } from "./Tags";

const breakpointDesktop = BREAKPOINTS.desktop

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: "1px solid black";
  @media (max-width: ${breakpointDesktop}) {
    flex-direction: column;
  }
`
const DatumSection = styled.section`
  min-width: fit-content;
`
const Datum = styled.span`
  opacity: 0.9;
  font-weight: 600;
  @media (max-width: ${breakpointDesktop}) {
    font-size: 19px;
  }
`
const DescriptionSection = styled.section`
  width: 100%;
  padding-left: 25px;
  margin-bottom: 35px;
  @media (max-width: ${breakpointDesktop}) {
    padding: 0px;
  }
`
const JobTitle = styled.span`
  font-weight: 700;
  font-size: 22px;
  color: rgb(3, 62, 110);
  @media (max-width: 622px) {
    font-size: 19px;
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
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: ${breakpointDesktop}) {
    flex-direction: column;
    align-items: center;
  }
`
const Company = styled.span`
  font-size: 22px;
  /* font-weight: 600; */
  opacity: .9;
  color: maroon;
  color: black;
  @media (max-width: 576px) {
    font-size: 19px;
  }
`
const ProjectsDatum = styled.span`
  font-size: smaller;
`

export const RenderExperienceEntries = () => {
  const { isLanguageEnglish } = React.useContext(LanguageContext);
  const isDesktop = useIsDesktop()

  const accomplishments = isLanguageEnglish ? accomplishmentsEn : accomplishmentsDe

  return <Container>
    <div>
      <Company><b>Erblotse (Heritas GmbH)</b>, Berlin</Company>

    </div>
    <DatumSection>
      <Datum>02.2021-04.2025:</Datum>
        <JobTitle>
          {isLanguageEnglish ? " Software Developer" : " Software Entwickler"}
        </JobTitle>
        <br/>
    </DatumSection>
    <DescriptionSection>
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
        {isDesktop ? <><VerticalSliderCard
          src={Birte}
          altText={"Birte Gall"}
          name={"Birte Gall"}
          jobTitle={"Co-Founder Erblotse"}
          testimony={
            <PersonTestimony text="Hugo is easy to work with, diligent in his work and fun to be around. When asked to contribute to new projects he is always open to wrap his head around it and willing to work his way through new challenges arising. Hugo helped bring a platform to live, without any precedent we could follow.
              I am impressed by his discipline in constantly teaching himself new things. He is a valuable team member in a tech team."
            />
          }
        />
        <VerticalSliderCard
          src={null}
          altText={"Jesper Richter-Reichhelm"}
          name={"Jesper Richter-Reichhelm"}
          jobTitle={"CTO and Co-Founder Erblotse"}
          testimony={<PersonTestimony text={JesperTestimoy}/>}
        />
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
          altText={"Abidh K Muhammed"}
          name={"Abidh K Muhammed"}
          jobTitle={"Software Engineer at Erblotse"}
          testimony={<PersonTestimony text="I had the pleasure of working with Hugo at Erblotse, where he excelled as a front-end developer and was particularly proficient in React. He consistently demonstrated a strong attention to detail and a commitment to delivering high-quality work. Hugo’s friendly and approachable nature, combined with his willingness to support and collaborate when needed, made him an excellent team player."/>}
        />
      </> : null
      }
      {!isDesktop && <section style={{width: "340px"}}>
          <SwiperCard dataArr={TESTIMONIES}/>
        </section>
      }
      </TestimoniesSection>
    </DescriptionSection>

    <h3>Experience through personal projects:</h3>
    <DescriptionSection>
      <p>
        {isLanguageEnglish ? <>
          Concept, design, implementation and deployment of several private projects (<b>available in the projects page</b>):
        </>
        :<>
          Konzeption, Design, Implementierung und Bereitstellung mehrerer privater Projekte (<b>auf der Projektseite verfügbar</b>):
        </>
        }
      </p>
      {/* PROJECTS */}
      {/* TODO: map projects to data structure and dynamic projects id */}
      {isLanguageEnglish ? <ul>
        <ListItem><b><i>Karaoke List App <ProjectsDatum>(2025)</ProjectsDatum></i></b> - <u>Fullstack</u> project.</ListItem>
        <Tags skills={PROJECTS_DATA_STRUCTURE.find(project => project.id === "karaoke").techInfo.tags}/>
        <ListItem><b><i>Portfolio V.2 <ProjectsDatum>(2025)</ProjectsDatum></i></b> - My second version portfolio, a more modern approach with 3D animations.</ListItem>
        <Tags skills={PROJECTS_DATA_STRUCTURE.find(project => project.id === "portfolio2").techInfo.tags}/>
        <ListItem><b><i>Cafes & You <ProjectsDatum>(2024)</ProjectsDatum></i></b> - <u>Fullstack</u> project where you embark on a solo or dual trip, making your own list of Cafes and registering your experiences. Inspired by my girlfriend.</ListItem>
        <Tags skills={PROJECTS_DATA_STRUCTURE.find(project => project.id === "cafes").techInfo.tags}/>
        <ListItem><i>Scrambled Word Game <ProjectsDatum>(2021)</ProjectsDatum></i> - a game with highscore, hints, sound effects, settings and time pressure. And also the possibility of learning new words through dynamic lookup. Test your knowledge. If you dare.</ListItem>
        <Tags skills={PROJECTS_DATA_STRUCTURE.find(project => project.id === "wordScrambler").techInfo.tags}/>
        <ListItem><i>Portfolio <ProjectsDatum>(2020)</ProjectsDatum></i> - originally created this portfolio with a retro look. </ListItem>
        <Tags skills={PROJECTS_DATA_STRUCTURE.find(project => project.id === "portfolio").techInfo.tags}/>
        <ListItem><i>Weatherjetzt <ProjectsDatum>(2020)</ProjectsDatum></i> - a weather app, tailored for the best user experience of its most passionate and, most likely, only user.</ListItem>
        <Tags skills={PROJECTS_DATA_STRUCTURE.find(project => project.id === "weatherApp").techInfo.tags}/>
        <ListItem><i>Todo list <ProjectsDatum>(2020)</ProjectsDatum></i> - a classical. My very first project, where it all started...</ListItem>
        <Tags skills={PROJECTS_DATA_STRUCTURE.find(project => project.id === "todoList").techInfo.tags}/>
      </ul> : <ul>
        <ListItem><i>Karaoke List App<ProjectsDatum>(2024)</ProjectsDatum></i> - Fullstack-Projekt.</ListItem>
        <Tags skills={PROJECTS_DATA_STRUCTURE.find(project => project.id === "karaoke").techInfo.tags}/>
        <ListItem><i>Cafes & You <ProjectsDatum>(2024)</ProjectsDatum></i> - Funktionales Fullstack-Projekt, bei dem man sich auf eine Solo- oder Doppelreise begibt, seine eigene Liste von Cafés erstellt und seine Erfahrungen registriert. Inspiriert von meiner Freundin.</ListItem>
        <Tags skills={PROJECTS_DATA_STRUCTURE.find(project => project.id === "cafes").techInfo.tags}/>

        <ListItem><i>Scrambled Word Game <ProjectsDatum>(2021)</ProjectsDatum></i> - Sammlung von Kenntnissen und Konzeption, Entwurf, Umsetzung und Einführung mehrerer Projekte zur Erprobung und Festigung der erworbenen Kenntnisse (auf der Projektseite verfügbar).</ListItem>
        <Tags skills={PROJECTS_DATA_STRUCTURE.find(project => project.id === "wordScrambler").techInfo.tags}/>
        <ListItem><i>Portfolio <ProjectsDatum>(2020)</ProjectsDatum></i> - Ursprünglich wurde dieses Portfolio erstellt. In der Zwischenzeit wurde es erweitert.</ListItem>
        <Tags skills={PROJECTS_DATA_STRUCTURE.find(project => project.id === "portfolio").techInfo.tags}/>
        <ListItem><i>Weatherjetzt <ProjectsDatum>(2020)</ProjectsDatum></i> - Wetter-App, zugeschnitten auf die beste Benutzererfahrung seiner leidenschaftlichsten und, wahrscheinlich, einzigen Benutzer.</ListItem>
        <Tags skills={PROJECTS_DATA_STRUCTURE.find(project => project.id === "weatherApp").techInfo.tags}/>
        <ListItem><i>Todo list <ProjectsDatum>(2020)</ProjectsDatum></i> - ein Klassiker. Mein allererstes Projekt, mit dem alles begann...</ListItem>
        <Tags skills={PROJECTS_DATA_STRUCTURE.find(project => project.id === "todoList").techInfo.tags}/>
      </ul> }
    </DescriptionSection>
  </Container>
}



