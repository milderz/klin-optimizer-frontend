import styled from "styled-components";

export const StyledImageResultCard = styled.article`
  min-height: 34.2rem;
  background-color: var(--dark-gray);
  border-radius: 1.3rem;
  display: grid;
  grid-template-columns: 27.94% 26.77% 45.24%;
  grid-template-rows: 1fr;
  padding: 2.2rem;

  .text {
    span {
      color: var(--green);
    }
  }

  .current-image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1.3rem;
    background-position: center;
    background-size: cover;

    img {
      max-width: 100%;
    }
  }

  .image-information {
    padding: 2.2rem;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-around;

    .image-name {
      font-size: 2.6rem;
      color: var(--green);
    }

    .compression-percentage {
      display: flex;
      align-items: center;
      gap: 1.2rem;

      svg {
        height: 1.8rem;
        color: var(--green);
      }

      .compression-percentage-number {
        font-size: 2.8rem;
      }
    }
  }

  .optimization-results {
    display: flex;
    flex-direction: column;
    gap: 2.2rem;
  }

  .optimization-results-title {
    font-size: var(--text-md);
  }
  .optimization-results-card {
    background-color: var(--black);
    flex-grow: 1;
    border-radius: 1.3rem;
    display: flex;
    padding: 2.2rem;
    gap: 2.2rem;
  }

  .png-placeholder {
    width: 200px;
    border-radius: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .optimization-results-text {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-grow: 1;
  }

  .download-image {
    background-color: var(--green);
    color: var(--black);
    width: 100%;
    font-size: 14px;
    font-weight: 800;
    text-align: center;
    padding: 1rem;
    border-radius: 0.6rem;

    :hover {
      background-color: var(--light-gray);
    }
  }

  .circle-info {
    background: none;
    border: none;
    color: var(--green);
    cursor: pointer;
  }
`;
