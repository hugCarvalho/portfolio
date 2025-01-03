import styled from 'styled-components';
import { COLORS } from '../config/colors';
import { ExternalLink } from './ExternalLink';

const sharedHeight = "380px"
const sharedWidth = "340px" //mobile 340px

const MainCard = styled.div`
   background-color: #fcfcfc;
   background-color: #001f34cc;

   min-width: ${sharedWidth};
   width: ${sharedWidth};
   border-radius: 18px;
   /* height: ${sharedHeight}; */
   height: fit-content;
   overflow: hidden;
   position: relative;
   padding-top:10px;
   padding-bottom:20px;
`
const CardTitle = styled.div`
  line-height: 16px;
  padding: 4px;
  /* background-color: orange; */
  text-align: center;
  font-size: 15px;
`

const SecondaryCard = styled.div`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  /* background-color: #00223a;
  background-color: #012741;
  background-color: #012741b3;
  background-color: #01274173; */
  background-color:transparent;
  color: whitesmoke;
  width: ${sharedWidth};
  padding: 0px 18px 14px;
  border-radius: 18px;
  height: fit-content;
  /* height: ${sharedHeight}; */
  /* position: absolute; */
  /* top: ${({ $isFullHeigth }) => ($isFullHeigth? '0' : '38%')};//42% */
  /* transition: all .3s ease-out;
  z-index: 100; */
  `

const PersonInfo = styled.section`
  /* background-color: pink; */
  text-align: center;
  line-height: normal;
  line-height: 18px;
`
const PersonName = styled.p`
  /* background-color: lightblue; */
  font-size: 18px;
  color: #209dd8;

`
const PersonTitle = styled.p`
  /* background-color: blanchedalmond; */
  font-size: 14px;
  color: gray;
`
const Testimony = styled.section`
  /* font-family: ; */
  font-family: 'Times New Roman', Times, serif;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-style: italic;
  padding-top: 22px;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 13px;
  line-height: 20px;
  color: #cedae1;
  /* white-space: nowrap; */
`
const ImageContainer = styled.div`
  /* background-color: brown; */
  /* object-fit: cover; */
  /* object-position: top; */
  text-align: center;
`
const IMG = styled.img`
  /* top: 100;
  bottom: 10;
  right: 0; */
  /* position: absolute; */
  /* object-fit: contain; */
  width: 86px;
  height: 86px;
  border-radius: 100px;
  /* clip-path: circle(20% at 50% 50%); */

  /* background-position: bottom; */
  /* background-size: 0%; */
`

const LinkedIn = styled.span`
  font-size: smaller;
  &:hover {
    color: ${COLORS.onHover1}
  }
`

export const PersonTestimony = ({text}) => {
  return <Testimony>
    {text}<LinkedIn>{" "}
      <ExternalLink style={{color: COLORS.onHover1}} link="https://www.linkedin.com/in/hugo-carvalho-8355b31b7/" text=" (in LinkedIn)"/>
    </LinkedIn>
  </Testimony>
}

export const VerticalSliderCard = ({src, alt, name, jobTitle, testimony}) => {
  return (
    <MainCard>
      <CardTitle></CardTitle>
      <ImageContainer>
        <IMG src={src} alt={alt} />
      </ImageContainer>
      <SecondaryCard $isFullHeigth={false}>
        <PersonInfo>
          <PersonName>
            {name}
          </PersonName>
          <PersonTitle>
            {jobTitle}
          </PersonTitle>
        </PersonInfo>
        {testimony}
      </SecondaryCard>
    </MainCard>
  )
}
