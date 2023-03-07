import { StyledAboutSection } from "./Styles/AboutSection.styled";

const AboutSection = () => {
  return (
    <StyledAboutSection>
      <h2 className="about-title">About this tool</h2>
      <div className="text-content">
        <p className="about-text">
          KLIN optimizer is a solution that helps businesses and website owners
          optimize their images for web use, resulting in improved page load
          times, increased user retention, and higher user satisfaction.
        </p>
        <p>
          By making use of different optimization techniques such as changes to
          image size and quality, users can improve their web page load time and
          deliver a faster browsing experience to their visitors.
        </p>
      </div>
    </StyledAboutSection>
  );
};

export default AboutSection;
