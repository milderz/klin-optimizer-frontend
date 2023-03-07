import { StyledHeader } from "./Styles/Header.styled";
import { Link } from "react-router-dom";
import pngBG from "../assets/small-e.svg";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/" className="header-logo">
        <img src={pngBG} alt="header-logo" height="24px" />
        <h1 className="logo">KLIN OPTIMIZER</h1>
      </Link>

      <ul className="nav-links">
        <li className="nav-link">
          <a href="https://github.com/milderz/" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </StyledHeader>
  );
};

export default Header;
