import styled from "styled-components";

export const StyledAboutSection = styled.section`
  min-height: 45rem;
  height: 45vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.4rem;
  text-align: center;
  .about-title {
    font-size: var(--text-mlg);
    background: -webkit-linear-gradient(var(--blue), var(--green));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .text-content {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.2rem;
  }
  p {
    width: 58ch;
  }
`;
