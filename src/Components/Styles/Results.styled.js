import styled from "styled-components";

export const StyledResults = styled.section`
  .results-header {
    display: flex;
    flex-direction: column;
    gap: 4.4rem;
  }
  .results-header-title {
    font-size: var(--text-lg);
    background: -webkit-linear-gradient(var(--blue), var(--green));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .results-header-displayed-results {
    font-size: var(--text-md);

    a {
      text-decoration: underline;
      text-decoration-color: transparent;

      :hover {
        color: var(--green);
        text-decoration-color: var(--green);
      }

      svg {
        margin-left: 1rem;
      }
    }
  }

  .header-title {
    padding: 2.2rem 0;
    h2 {
      font-size: var(--text-lg);
    }
  }

  .dashboard-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 1fr);

    grid-gap: 1.8rem;
    height: 46.6rem;
    margin: 4.4rem 0;

    @media screen and (max-width: 1080px) {
      height: 78.6rem;
    }

    @media screen and (max-width: 768px) {
      height: 106.6rem;
    }

    @media screen and (max-width: 525px) {
      height: 166.6rem;
    }
  }

  .dashboard-card {
    background-color: var(--dark-gray);
    border-radius: 1.3rem;
    border: 0.2rem solid transparent;

    color: var(--text-white);
    padding: 2.2rem;
    display: flex;
    flex-direction: column;

    transition: border 0.2s ease;
    :hover {
      border: 0.2rem solid var(--gray);
    }

    .dashboard-card-header {
      padding: 0.8rem 0;
    }

    .card-content {
      flex-grow: 1;
    }

    .card-content-percentage {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.6rem;
    }

    .card-content-icon {
      min-width: 3.6rem;
      height: 3.6rem;
      background-color: var(--green-opacity);
      display: grid;
      place-content: center;
      border-radius: 0.8rem;
      svg {
        height: 1.6rem;
        color: var(--green);
      }
    }
    .card-content-number {
      font-size: var(--text-lg);
      white-space: nowrap;
    }

    .weight-stats {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }

    .card-content-circular-progressbar {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .CircularProgressbar {
    height: 96px;
    width: 96px;
  }

  .line-progress-container {
    p {
      font-size: var(--text-xs);
      color: var(--light-gray);
    }

    .rc-progress-line {
    }
  }

  .div1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .div2 {
    grid-area: 1 / 2 / 2 / 4;
  }
  .div3 {
    grid-area: 1 / 4 / 2 / 5;
  }
  .div4 {
    grid-area: 2 / 1 / 3 / 3;
  }
  .div5 {
    grid-area: 2 / 3 / 3 / 5;
  }
  .div6 {
    grid-area: 1 / 5 / 3 / 7;

    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    border: 0.2rem solid var(--gray);
  }

  @media screen and (max-width: 1080px) {
    .dashboard-grid {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(4, 1fr);
    }

    .div1 {
      grid-area: 1 / 1 / 2 / 2;
      min-height: 20rem;
    }
    .div2 {
      grid-area: 1 / 2 / 2 / 4;
      min-height: 20rem;
    }
    .div3 {
      grid-area: 1 / 4 / 2 / 5;
      min-height: 20rem;
    }
    .div4 {
      grid-area: 2 / 1 / 3 / 3;
      min-height: 20rem;
    }
    .div5 {
      grid-area: 2 / 3 / 3 / 5;
      min-height: 20rem;
    }
    .div6 {
      grid-area: 3 / 1 / 5 / 5;
    }
  }

  @media screen and (max-width: 768px) {
    .dashboard-grid {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(6, 1fr);
    }

    .div1 {
      grid-area: 1 / 1 / 2 / 3;
    }
    .div2 {
      grid-area: 1 / 3 / 2 / 5;
    }
    .div3 {
      grid-area: 2 / 1 / 3 / 3;
    }
    .div4 {
      grid-area: 2 / 3 / 3 / 5;
    }
    .div5 {
      grid-area: 3 / 1 / 4 / 5;
    }
    .div6 {
      grid-area: 4 / 1 / 7 / 5;
    }
  }

  @media screen and (max-width: 525px) {
    .dashboard-grid {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(8, 1fr);
    }

    .div1 {
      grid-area: 1 / 1 / 2 / 2;
    }
    .div2 {
      grid-area: 2 / 1 / 3 / 2;
    }
    .div3 {
      grid-area: 3 / 1 / 4 / 2;
    }
    .div4 {
      grid-area: 4 / 1 / 5 / 2;
    }
    .div5 {
      grid-area: 5 / 1 / 6 / 2;
    }
    .div6 {
      grid-area: 6 / 1 / 9 / 2;
    }
  }

  .image-card-grid-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 4.4rem;
  }
`;
