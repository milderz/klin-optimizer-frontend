import { StyledContainer } from "./Styles/Container.styled";

const Container = ({ children, version, width, modalActive }) => {
  return (
    <StyledContainer version={version} width={width} modalActive={modalActive}>
      <div className="content">{children}</div>
    </StyledContainer>
  );
};

export default Container;
