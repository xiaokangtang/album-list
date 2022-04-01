import { useState } from 'react';
import Search from '../../components/Search';

const SearchBar = ({ filterAlbums }) => {
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
    filterAlbums(inputValue);
  };

  return (
    <div className="search-wrap">
      <Search
        label={'Type in here to search'}
        inputId={'album-search'}
        onInputChange={onInputChange}
        onInputKeyPress={onInputKeyPress}
        onSubmitSearch={onSubmitSearch}
      />
    </div>
  );
};

export default SearchBar;
