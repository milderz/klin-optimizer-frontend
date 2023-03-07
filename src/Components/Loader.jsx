import { StyledLoader } from "./Styles/Loader.styled";

import cameraGIF from "../assets/cameraloader.gif";
import serverGIF from "../assets/server-flat.gif";
import mediaGIF from "../assets/astro1.png";

const Loader = () => {
  return (
    <StyledLoader>
      <div className="load-title">
        <h3>We are scanning your site images</h3>

        <div className="double">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>
      <p className="load-text">This can take a minute</p>

      {/* <img height="128px" src={cameraGIF} alt="camera" /> */}
      {/* <img height="128px" src={serverGIF} alt="camera" /> */}
      <img height="200px" src={mediaGIF} alt="camera" />
    </StyledLoader>
  );
};

export default Loader;
