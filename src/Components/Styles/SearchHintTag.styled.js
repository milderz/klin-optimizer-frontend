import styled from "styled-components";

export const StyledSearchHintTag = styled.button`
  border: 0.2rem solid var(--gray);
  padding: 0.6rem 1.6rem;
  border-radius: 2rem;
  background-color: var(--dark-gray);
  cursor: pointer;
  transition: border 0.2s ease;
  z-index: 2;

  p {
    font-size: 14px;
  }

  :hover {
    border-color: var(--green);
  }
`;
