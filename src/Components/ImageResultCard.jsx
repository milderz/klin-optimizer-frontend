import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledImageResultCard } from "./Styles/ImageResultCard.styled";
import {
  faArrowDown,
  faArrowRight,
  faTimes,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { Line } from "rc-progress";
import pngBG from "../assets/png-bg.png";
import { useState } from "react";

const ImageResultCard = ({
  imageURL,
  imageName,
  imageFormat,
  originalFileSize,
  originalFileSizeFormated,
  optimizedFileSize,
  optimizedFileSizeFormated,
  optimizedImage,
  percentageReduction,
  width,
  height,
  naturalWidth,
  naturalHeight,
}) => {
  const [viewImage, setViewImage] = useState(false);

  const handleViewImage = () => {
    setViewImage(!viewImage);
  };

  return (
    <StyledImageResultCard viewImage={viewImage}>
      <div
        className="current-image-container"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.2)) ,url('${pngBG}')`,
        }}
      >
        <img src={imageURL} alt="current-image" height="107px" />
      </div>
      <div className="image-information">
        <p className="image-name">
          {imageName.length > 14
            ? `${imageName.split("", 14).join("")}.${imageFormat}`
            : imageName}
        </p>
        <div className="compression-result">
          <p>File size reduction after optimization</p>
          <div className="compression-percentage">
            <FontAwesomeIcon icon={faArrowDown} />
            <p className="compression-percentage-number">{`${percentageReduction.toFixed(
              2
            )}%`}</p>
          </div>
        </div>
        <div>
          <p className="text">
            Format: <span>{imageFormat.toUpperCase()}</span>
          </p>
          <p className="text">
            Current size: <span>{`${originalFileSizeFormated}`}</span>
          </p>
        </div>
      </div>
      <div className="optimization-results">
        <p className="optimization-results-title">Optimization results</p>
        <div className="optimization-results-card">
          <div
            onClick={handleViewImage}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.2)) ,url('${pngBG}')`,
            }}
            className="png-placeholder"
          >
            <img src={optimizedImage} alt="current-image" height="62px" />
          </div>
          <div className="optimization-results-text">
            <p className="text">
              <span>{percentageReduction.toFixed(2)} %</span> reduction
            </p>
            <p className="text">
              Optimized size <span>{optimizedFileSizeFormated}</span>
            </p>
            <div>
              <p className="text scaled-text">Scaled-down from: </p>
              <p className="text">
                <span>{`${naturalWidth} x ${naturalHeight}`}</span> to:{" "}
                <span>{`${width} x ${height}`}</span>{" "}
                <button className="circle-info">
                  <FontAwesomeIcon icon={faCircleInfo} />
                </button>
              </p>
            </div>
            <a className="download-image" href={optimizedImage} target="_blank">
              Download optimized {imageFormat.toUpperCase()}
            </a>
          </div>
        </div>
      </div>
    </StyledImageResultCard>
  );
};

export default ImageResultCard;
