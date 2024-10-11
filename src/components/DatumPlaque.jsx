import styled from "styled-components"

const DatumPlaqueContainer = styled.div`
  background: linear-gradient(217deg, rgb(132 132 132), rgba(255, 0, 0, 0) 70.71%), linear-gradient(127deg, rgb(152 152 152 / 93%), rgba(0, 255, 0, 0) 70.71%), linear-gradient(336deg, rgb(110 110 110), rgba(0, 0, 255, 0) 82.71%);
  /* background: linear-gradient(#676464, #827d7d); */
  padding: 15px;
  width: fit-content;
  border-radius: 3px;
  position: relative;
  margin: auto;
`
const Nail = styled.span`
  position: absolute;
  background: gray;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  box-shadow: 2px 2px 5px 0px rgb(14, 13, 13);
`
const Nail1 = styled(Nail)`
  left: 4%;
  top: 5%;
`
const Nail2 = styled(Nail)`
  right: 4%;
  top: 5%;
`
const Nail3 = styled(Nail)`
  right: 4%;
  bottom: 5%;
`
const Nail4 = styled(Nail)`
  left: 4%;
  bottom: 5%;
`
const Engraved = styled.div`
 font-size: 23px;
  /* color: gray;
  color: #989693;
  color: #bda030; */
  color: var(--onHover1);
  text-align: center;
  padding: 7px 30px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  text-shadow: 0px 0px 1px rgb(0 0 0 / 60%), 0px 1px 3px rgba(0, 0, 0, 0.4);
`

export const DatumPlaque = ({datum}) => {
  return <DatumPlaqueContainer>
    <div style={{border: "2px solid darkgrey", borderRadius: "12px"}}>
      <div style={{background: "gray", padding:"0px", textAlign: "center"}}>
        <Engraved>
          {datum}
        </Engraved>
      </div>
    </div>
    <Nail1/>
    <Nail2/>
    <Nail3/>
    <Nail4/>
  </DatumPlaqueContainer>
}
