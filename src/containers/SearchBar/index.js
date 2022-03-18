import { useState, useContext } from 'react';
import { AlbumContext } from '../../providers/AlbumProvider';

const SearchBar = ({ filterAlbums }) => {
  const { setHasFilter } = useContext(AlbumContext);
  const [inputValue, setInputValue] = useState('');

  //input element on change trigger inputValue change
  //no search on input change as it creates confusing information for screenreader users
  const onInputChange = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  //trigger search when press enter in input
  const onInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSubmitSearch();
    }
  };

  //search function, triggered by input enter key press or search button click
  const onSubmitSearch = () => {
    if (inputValue) {
      setHasFilter(true);
      filterAlbums(inputValue);
    } else {
      setHasFilter(false);
    }
  };

  return (
    <div className="search-wrap">
      <div className="search-container">
        {/* label is not visible, only to help screenreader better perceive input field */}
        <label
          data-testid="searchLabel"
          className="sr-only"
          htmlFor="searchInput">
          Type in here to search
        </label>
        <input //no placeholder text to avoid confusion for screenreader users
          id="searchInput"
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
    </div>
  );
};

export default SearchBar;
