import styled from "styled-components";

export const StyledLoader = styled.div`
  height: 50rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 2.2rem;

  .load-title {
    font-size: var(--text-lg);
    display: flex;
    align-items: center;
    gap: 1.1rem;
  }

  .load-text {
    font-size: var(--text-md);
  }

  .double {
    width: 25px;
    height: 25px;
    position: relative;
  }

  .double-bounce1,
  .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: var(--green);
    opacity: 0.6;
    position: absolute;
    top: 4px;
    left: 0;
    animation: sk-bounce 1.5s infinite ease-in-out;
  }

  .double-bounce2 {
    animation-delay: -1s;
  }

  @keyframes sk-bounce {
    0%,
    100% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
  }

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }

  img {
    animation: float 6s ease-in-out infinite;
  }
`;
