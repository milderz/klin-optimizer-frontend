import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutSection from "./Components/AboutSection";
import Container from "./Components/Container";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Results from "./Components/Results";
import { GlobalStyles } from "./Components/Styles/GlobalsStyles";
import { useNavigate } from "react-router-dom";
import Loader from "./Components/Loader";
import NotFoundPage from "./Components/NotFoundPage";
import Modal from "./Components/Modal";

function App() {
  const [images, setImages] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [isValidURL, setIsValidURL] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValidURL) {
      function transformURL(urlString) {
        const hasHTTP = /^https?:\/\//i.test(urlString); // Check if the string already starts with "http://" or "https://"
        const hasWWW = /^www\./i.test(urlString); // Check if the string already starts with "www."
        const prefix = hasHTTP ? "" : "https://"; // If the string doesn't start with "http://" or "https://", add "https://"
        const wwwPrefix = hasWWW ? "" : "www."; // If the string doesn't start with "www.", add "www."
        const transformedString = `${prefix}${wwwPrefix}${urlString}/`; // Concatenate the transformed URL string
        return transformedString;
      }

      const transformedUrl = transformURL(inputValue);
      setUrl(transformedUrl);

      const fetchImages = async (url) => {
        try {
          setLoading(true);
          setImages(null);
          const res = await fetch(
            `https://klin-backend-service.onrender.com/api?url=${url}`
          );
          const data = await res.json();

          if (data.error) {
            setErrorMessage(data.error[0]);
            setLoading(false);
            setError(true);
            setModalActive(true);
            return data.error;
          }
          setImages(data);
          setLoading(false);
          navigate("/results");
        } catch (error) {
          console.log(error);
        }
      };

      fetchImages(transformedUrl);
    }
  };

  const handleSetInputValue = (inputValue) => {
    setInputValue(inputValue);
  };

  const handleSetModalActive = () => {
    setModalActive(!modalActive);
  };

  function handleInputChange(event) {
    const inputValue = event.target.value;
    const value = event.target.value.trim();
    // const regex = /^([a-z0-9]+\.)*[a-z0-9]+\.[a-z]{2,}(\.[a-z]{2,})?$/i;
    // const regex =
    //   /^([a-z0-9]+\-)*[a-z0-9]+\.[a-z]{2,}(\.[a-z]{2,})?(\/[a-z0-9\-_]+)*$/i;

    // additional checks

    const regex =
      /^(?:https?:\/\/)?(?:www\.)?([a-z0-9]+(?:-[a-z0-9]+)*\.)+[a-z]{2,}(?:\.[a-z]{2,})?(\/[a-z0-9\-._~:/?#[\]@!$&'()*+,;=]*)*$/i;

    setIsValidURL(regex.test(value));
    setInputValue(inputValue);
  }

  return (
    <>
      <GlobalStyles />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Container
                modalActive={modalActive}
                version="main"
                children={
                  <>
                    <Header />
                  </>
                }
              />
              <Container
                modalActive={modalActive}
                version="main"
                children={
                  <>
                    {/* <Loader /> */}
                    {loading ? (
                      <Loader />
                    ) : (
                      <Hero
                        handleSubmit={handleSubmit}
                        handleInputChange={handleInputChange}
                        isValidURL={isValidURL}
                      />
                    )}
                  </>
                }
              />
              <Container
                modalActive={modalActive}
                children={
                  <>
                    <AboutSection />
                  </>
                }
              />
            </>
          }
        />
        <Route
          path="/results"
          element={
            <>
              <Container
                version="main"
                width="wide"
                children={
                  <>
                    <Header />
                  </>
                }
              />
              <Container
                width="wide"
                version="main"
                children={
                  <>
                    <Results images={images} url={url} />
                  </>
                }
              />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Container
                version="main"
                children={
                  <>
                    <Header />
                  </>
                }
              />
              <NotFoundPage />
            </>
          }
        />
      </Routes>
      <Modal
        errorMessage={errorMessage}
        modalActive={modalActive}
        handleSetModalActive={handleSetModalActive}
        url={url}
      />
      <Container
        version="main"
        modalActive={modalActive}
        children={<Footer />}
      />
    </>
  );
}

export default App;
