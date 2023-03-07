import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 40rem;
  background-color: var(--dark-gray);
  border: 0.2rem solid var(--gray);
  z-index: 99;
  border-radius: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 2.2rem;
  padding: 2.2rem;
  visibility: ${({ modalActive }) => (modalActive ? "visible" : "hidden")};
  opacity: ${({ modalActive }) => (modalActive ? "1" : "0")};
  transition: opacity 0.2s ease;

  .button {
    font-size: var(--text-sm);
    padding: 0.8rem 0;
    width: 100%;
    background-color: var(--light-gray);
    border: none;
    font-weight: 600;
    border-radius: 0.6rem;
    cursor: pointer;

    :hover {
      background-color: var(--green);
    }
  }

  .text-content {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.2rem;

    p {
      span {
        color: var(--green);
      }
    }
  }
`;
