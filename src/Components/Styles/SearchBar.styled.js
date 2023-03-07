import styled from "styled-components";

export const StyledSearchBar = styled.form`
  height: 4.8rem;
  width: 60rem;
  display: flex;
  z-index: 2;

  @media screen and (max-width: 650px) {
    width: 100%;
  }

  .search-label {
    height: 100%;
    flex-grow: 1;
    position: relative;

    ::after {
      content: "USE THIS FORMAT: domain-name.com";
      color: var(--red);
      font-size: 1.4rem;
      position: absolute;
      bottom: -2.8rem;
      left: 2.2rem;
      opacity: ${({ isValidURL }) => (isValidURL ? "0" : "1")};
    }
  }

  .search-input {
    height: 100%;
    width: 100%;
    border: none;
    border-radius: 3rem 0 0 3rem;
    padding-left: 2.4rem;
    font-size: var(--text-sm);
    background-color: var(--dark-gray);
    color: var(--text-white);
    outline: none;
    caret-color: var(--green);
    border: 0.2rem solid var(--gray);
    transition: border 0.2s ease;

    :focus {
      border: 0.2rem solid
        ${({ isValidURL }) => (isValidURL ? "var(--green)" : "var(--red)")};
    }
  }
  .search-button {
    position: relative;
    height: 100%;
    border: none;
    width: 14.7rem;
    border-radius: 3rem;
    font-size: var(--text-sm);
    font-weight: 600;
    background-color: var(--light-gray);
    margin-left: -2.4rem;
    transition: background-color 0.2s ease;
    cursor: ${({ isValidURL }) => (isValidURL ? "pointer" : "not-allowed")};

    :hover {
      background-color: var(--green);
    }
  }
`;
