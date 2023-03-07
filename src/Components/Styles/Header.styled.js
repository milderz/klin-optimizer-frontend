import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 10.9rem;
  height: 10vh;
  z-index: 2;
  position: relative;

  .header-logo {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    svg {
      height: 1.6rem;
    }
  }
  .logo {
    font-size: var(--text-md);
  }
  .nav-links {
    display: flex;
    gap: 2.2rem;
  }
`;
