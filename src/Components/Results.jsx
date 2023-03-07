import { StyledResults } from "./Styles/Results.styled";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faFloppyDisk,
  faWandMagicSparkles,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

import { Line } from "rc-progress";
import ImageResultCard from "./ImageResultCard";
import NotFoundPage from "./NotFoundPage";

const Results = ({ images, url }) => {
  const percentage = 45;
  let domainStamp = "";
  let averageScore = 0;
  let totalImagesWeight = "";
  let estimatedWeightAfterOptimization = "";
  let getTotalReductionPercentage = "";
  let averagePercentageReduction = 0;

  if (images) {
    const getTotalImagesWeight = () => {
      let sum = 0;

      images.forEach((image) => {
        sum += image.originalFileSize;
      });

      const totalInMegaBytes = sum / 1000000;
      const totalInKiloBuyes = sum / 1000;

      return sum > 1000000
        ? `${totalInMegaBytes.toFixed(2)} MB`
        : `${totalInKiloBuyes.toFixed(2)} KB`;
    };

    totalImagesWeight = getTotalImagesWeight();

    const numImages = images.length;

    if (numImages > 0) {
      const scoreSum = images.reduce((sum, image) => sum + image.imageScore, 0);
      averageScore = scoreSum / numImages;
    }

    if (numImages > 0) {
      const scoreSum = images.reduce(
        (sum, image) => sum + image.percentageReduction,
        0
      );
      averagePercentageReduction = scoreSum / numImages;
    }

    const getEstimatedWeightAfterOptimization = (
      initialWeight,
      reductionPercentage
    ) => {
      const reductionFactor = reductionPercentage / 100; //
      const remainingWeight =
        initialWeight.split(" ")[0] * (1 - reductionFactor);
      return remainingWeight;
    };

    estimatedWeightAfterOptimization = getEstimatedWeightAfterOptimization(
      totalImagesWeight,
      averagePercentageReduction
    );

    const calculateReductionPercentage = (initialWeight, remainingWeight) => {
      const nonReductionPercentage = (
        (remainingWeight / initialWeight.split(" ")[0]) *
        100
      ).toFixed(2);
      return nonReductionPercentage + " %";
    };

    getTotalReductionPercentage = calculateReductionPercentage(
      totalImagesWeight,
      estimatedWeightAfterOptimization
    );

    const getDomainName = (url) => {
      const domainName = url.split("/").slice(2, 3)[0];
      return domainName.replaceAll(".", "-");
    };

    domainStamp = getDomainName(url);
  }

  return (
    <>
      {images ? (
        <StyledResults domainStamp={domainStamp}>
          <header className="results-header">
            <h2 className="results-header-title">Image Analysis Results</h2>
            <h3 className="results-header-displayed-results">
              Displaying results of:{" "}
              <a href={url} target="_blank">
                {url}
                <FontAwesomeIcon icon={faLink} />
              </a>
            </h3>
          </header>
          <div className="dashboard-grid">
            <article className="div1 dashboard-card">
              <header className="dashboard-card-header">
                <p className="dashboard-card-text">Score</p>
              </header>
              <div className="card-content card-content-circular-progressbar">
                <CircularProgressbar
                  value={averageScore}
                  text={`${averageScore.toFixed()}%`}
                  styles={buildStyles({
                    pathColor: `${
                      averageScore < 45
                        ? "hsl(2, 100%, 66%)"
                        : averageScore > 45 && averageScore < 65
                        ? "#FEBC2C"
                        : "rgb(51, 199, 137)"
                    }`,
                    textColor: "rgba(255, 255, 255)",
                    trailColor: "#d6d6d6",
                    backgroundColor: "#0a2a3b",
                  })}
                />
              </div>
            </article>
            <article className="div2 dashboard-card">
              <header className="dashboard-card-header">
                <p className="dashboard-card-text">Score</p>
              </header>
              <div className="card-content weight-stats">
                <div className="line-progress-container">
                  <p>Current images weight: {totalImagesWeight}</p>
                  <Line
                    percent={100}
                    strokeWidth={1}
                    strokeColor={"rgb(51, 199, 137)"}
                  />
                </div>
                <div className="line-progress-container">
                  <p>
                    Estimated weight after optimization:{" "}
                    {estimatedWeightAfterOptimization
                      ? estimatedWeightAfterOptimization.toFixed(2)
                      : "0"}{" "}
                    KB
                  </p>
                  <Line
                    percent={getTotalReductionPercentage.split(" ")[0]}
                    strokeWidth={1}
                    strokeColor={`${
                      percentage < 45
                        ? "hsl(2, 100%, 66%)"
                        : percentage > 45 && percentage < 65
                        ? "#FEBC2C"
                        : "rgb(51, 199, 137)"
                    }`}
                    style={{ backgroundColor: "red" }}
                  />
                </div>
              </div>
            </article>
            <article className="div3 dashboard-card">
              <header className="dashboard-card-header">
                <p className="dashboard-card-text">Images Analized</p>
              </header>
              <div className="card-content card-content-percentage">
                <div className="card-content-icon">
                  <FontAwesomeIcon icon={faImage} />
                </div>
                <p className="card-content-number">
                  {images === null ? "0" : images.length}
                </p>
              </div>
            </article>
            <article className="div4 dashboard-card">
              <header className="dashboard-card-header">
                <p className="dashboard-card-text">Total image weight</p>
              </header>
              <div className="card-content card-content-percentage">
                <div className="card-content-icon">
                  <FontAwesomeIcon icon={faFloppyDisk} />
                </div>
                <p className="card-content-number">{totalImagesWeight} </p>
              </div>
            </article>
            <article className="div5 dashboard-card">
              <header className="dashboard-card-header">
                <p className="dashboard-card-text">
                  Potential file size reduction
                </p>
              </header>
              <div className="card-content card-content-percentage">
                <div className="card-content-icon">
                  <FontAwesomeIcon icon={faWandMagicSparkles} />
                </div>
                <p className="card-content-number">
                  {averagePercentageReduction
                    ? averagePercentageReduction.toFixed(2)
                    : "0"}
                  %
                </p>
              </div>
            </article>
            <article
              className="div6 dashboard-card"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.2)) , url('http://localhost:5000/screenshot-${domainStamp}.png')`,
              }}
            >
              <header className="dashboard-card-header">
                <p className="dashboard-card-text">Screenshot</p>
              </header>
            </article>
          </div>
          <header className="header-title">
            <h2>Asset optimization results</h2>
          </header>

          <div className="image-card-grid-container">
            {images.map((image, index) => (
              <ImageResultCard
                key={index}
                imageURL={image.imageURL}
                imageName={image.imageName}
                imageFormat={image.imageFormat}
                originalFileSize={image.originalFileSize}
                originalFileSizeFormated={image.originalFileSizeFormated}
                optimizedFileSize={image.optimizedFileSize}
                optimizedFileSizeFormated={image.optimizedFileSizeFormated}
                optimizedImage={image.optimizedImage}
                percentageReduction={image.percentageReduction}
                width={image.width}
                height={image.height}
                naturalWidth={image.naturalWidth}
                naturalHeight={image.naturalHeight}
              />
            ))}
          </div>
        </StyledResults>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
};

export default Results;
