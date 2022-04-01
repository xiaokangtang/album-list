import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = ({
  label,
  onInputChange,
  onInputKeyPress,
  onSubmitSearch,
  inputId,
}) => {
  return (
    <div className="my-5">
      {/* label is not visible, only to help screenreader better perceive input field */}
      <label data-testid="searchLabel" className="sr-only" htmlFor={inputId}>
        Type in here to search
      </label>
      <input
        className="shadow appearance-none border rounded px-3 mr-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500 h-8"
        id={inputId}
        data-testid="searchInput"
        type="text"
        onChange={(e) => onInputChange(e)}
        onKeyPress={onInputKeyPress}
      />
      <button onClick={onSubmitSearch}>
        {/* fontawesome already provides aria-hidden for icons*/}
        <FontAwesomeIcon icon={faSearch} />
        {/*below is sr-only text to assist sr-users understand button function*/}
        <span className="sr-only">Search</span>
      </button>
    </div>
  );
};

export default Search;
