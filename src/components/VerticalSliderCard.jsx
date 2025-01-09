import styled from 'styled-components';
import { COLORS } from '../config/colors';
import { ExternalLink } from './ExternalLink';

const sharedWidth = "340px" //mobile 340px

const MainCard = styled.div`
   background-color: #001f34cc;
   min-width: ${sharedWidth};
   width: ${sharedWidth};
   border-radius: 18px;
   height: fit-content;
   min-height: 382px;
   overflow: hidden;
   position: relative;
   padding-top:10px;
   padding-bottom:20px;
`
const CardTitle = styled.div`
  line-height: 16px;
  padding: 4px;
  text-align: center;
  font-size: 15px;
`
const SecondaryCard = styled.div`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  background-color:transparent;
  color: whitesmoke;
  width: ${sharedWidth};
  padding: 0px 18px 14px;
  border-radius: 18px;
  height: fit-content;
  /* top: ${({ $isFullHeigth }) => ($isFullHeigth? '0' : '38%')};//42% */
  `
const PersonInfo = styled.section`
  text-align: center;
  line-height: normal;
  line-height: 18px;
`
const PersonName = styled.p`
  font-size: 18px;
  color: #209dd8;
`
const PersonTitle = styled.p`
  font-size: 14px;
  color: gray;
`
const Testimony = styled.section`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-style: italic;
  padding-top: 22px;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 13px;
  line-height: 20px;
  color: #cedae1;
`
const ImageContainer = styled.div`
  text-align: center;
`
const IMG = styled.img`
  width: 86px;
  height: 86px;
  border-radius: 100px;
  /* clip-path: circle(20% at 50% 50%); */
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
