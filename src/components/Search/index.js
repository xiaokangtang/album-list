const Search = ({
  label,
  onInputChange,
  onInputKeyPress,
  onSubmitSearch,
  inputId,
}) => {
  return (
    <div className="search-container">
      {/* label is not visible, only to help screenreader better perceive input field */}
      <label data-testid="searchLabel" className="sr-only" htmlFor={inputId}>
        Type in here to search
      </label>
      <input //no placeholder text to avoid confusion for screenreader users
        id={inputId}
        data-testid="searchInput"
        type="text"
        onChange={(e) => onInputChange(e)}
        onKeyPress={onInputKeyPress}
      />
      <button onClick={onSubmitSearch}>
        {/* fontawesome already provides aria-hidden for icons*/}
        {/* <FontAwesomeIcon icon={faSearch} /> */}
        {/*below is sr-only text to assist sr-users understand button function*/}
        <span className="sr-only">Search</span>
      </button>
    </div>
  );
};

export default Search;
