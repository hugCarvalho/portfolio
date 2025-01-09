import React from 'react';
import styled from 'styled-components';
import { LanguageContext } from "../App";
import { Emoji } from './Emoji';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.46);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;
const ModalContent = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.677);
  text-align: center;
  max-width: 85%;
`;
const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color:#0a4c92;
  color: white;
  cursor: pointer;
  margin: 10px;

  &:hover {
    background-color: #0069d9;
  }
`;

export const Modal = ({ setShowModal, projectGithubUrl, isOpen, onClose, onYes, children }) => {
  const { isLanguageEnglish } = React.useContext(LanguageContext);

  const handleNo = () => {
    setShowModal(false)
  };

  const handleYes = () => {
    setShowModal(false)
  };

  return (
      <ModalContainer>
        <ModalContent>
        <Emoji>⚠️</Emoji>{" "}
          {isLanguageEnglish ?
            "You are about to go into the land of old, and at least partially unrefactored, code. Are you sure you want to proceed?" :
            "Du bist dabei, dich in das Land des alten und zumindest teilweise nicht „refactored“ Codes zu begeben. Bist du sicher, dass du fortfahren möchtest?"
          }
          <div>
            <br/>
            <Button onClick={handleYes}>
            <a style={{color: "white"}} href={`${projectGithubUrl}`} rel="noopener noreferrer" target="_blank">
              <i className="fa fa-search">
                <span className="text"> {" "}</span>
              </i>
                {isLanguageEnglish ? "Yes, I need some laughs" : "Ja, ich muss mal wieder lachen!"}
              </a>
            </Button>
            <Button onClick={handleNo}>
              {isLanguageEnglish ? "No, I'ts too painful" : "Nein, es ist zu schmerzhaft"}
            </Button>
          </div>
        </ModalContent>
      </ModalContainer>
    )
};

export default Modal;
