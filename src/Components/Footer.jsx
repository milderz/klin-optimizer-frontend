import { StyledFooter } from "./Styles/Footer.styled";

import cloudinaryLogo from "../assets/cloudinary_logo_white_0720_2x.png";

const Footer = () => {
  return (
    <StyledFooter>
      <h3 className="footer-title">
        Created using
        <img src={cloudinaryLogo} height="32px" alt="footer-logo" />
      </h3>
    </StyledFooter>
  );
};

export default Footer;
