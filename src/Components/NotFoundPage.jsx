import React from "react";
import { StyledNotFoundPage } from "./Styles/NotFoundPage.styled";
import notFound from "../assets/notfound.png";

const NotFoundPage = () => {
  return (
    <StyledNotFoundPage>
      <img src={notFound} alt="not-found" height="460px" />
    </StyledNotFoundPage>
  );
};

export default NotFoundPage;
