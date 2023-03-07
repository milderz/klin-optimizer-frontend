import SearchBar from "./SearchBar";
import SearchHintTag from "./SearchHintTag";
import { StyledHero } from "./Styles/Hero.styled";

const Hero = ({
  handleSetInputValue,
  handleSubmit,
  handleInputChange,
  isValidURL,
}) => {
  return (
    <StyledHero>
      <h2 className="hero-title">Image Optimizer</h2>
      <p className="hero-text">
        Enter your domain name and get all your website images optimized and
        ready to use in just one click!
      </p>
      <SearchBar
        handleSetInputValue={handleSetInputValue}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        isValidURL={isValidURL}
      />

      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </StyledHero>
  );
};

export default Hero;
