import { StyledSearchBar } from "./Styles/SearchBar.styled";

const SearchBar = ({ handleSubmit, handleInputChange, isValidURL }) => {
  console.log();
  return (
    <StyledSearchBar onSubmit={handleSubmit} isValidURL={isValidURL}>
      <label className="search-label">
        <input
          onChange={(e) => handleInputChange(e)}
          className="search-input"
          type="text"
          placeholder="domain-name.com"
        />
      </label>
      <button className="search-button">ANALIZE</button>
    </StyledSearchBar>
  );
};

export default SearchBar;
