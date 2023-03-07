import styled from "styled-components";

export const StyledContainer = styled.section`
  background-color: var(--black);
  background-color: ${({ version }) =>
    version === "main" ? "var(--black)" : "var(--dark-gray)"};
  filter: ${({ modalActive }) =>
    modalActive ? "brightness(0.6)" : "brightness(1)"};
  .content {
    width: 86%;
    margin: auto;
    max-width: 140rem;
    max-width: ${({ width }) => (width === "wide" ? "140rem" : "110rem")};

    @media screen and (max-width: 1280px) {
      width: 94%;
    }
  }
`;
