import React from "react";
import { StyledModal } from "./Styles/Modal.styled";
import alertIcon from "../assets/alert-icon.gif";

const Modal = ({ errorMessage, modalActive, handleSetModalActive, url }) => {
  return (
    <StyledModal modalActive={modalActive}>
      <div className="text-content">
        <img src={alertIcon} alt="alert-icon" height="120px" />
        <p>
          We couldn't scan <span>{url}</span> check the below error message:
        </p>
        <p>{errorMessage}</p>
      </div>
      <button onClick={handleSetModalActive} className="button">
        CLOSE
      </button>
    </StyledModal>
  );
};

export default Modal;
