import React from 'react';

const SearchBar = ({handleSearch}) => {
  let textInput = React.createRef();

  const handleSearchInSearch = (event) => {
    event.preventDefault();
    handleSearch(textInput.current.value);
  }

  return (
    <div className="search">
      <form className="searchbar">
        <div className="form-inline container">
          <input 
            type="text" 
            className="form-control" 
            placeholder="look up movie"
            ref={textInput}
          />
          <button 
            type="submit"
            className="btn btn-primary"
            onClick={handleSearchInSearch}
          >search</button>
        </div>
      </form>
    </div>
  );

};

export default SearchBar;

