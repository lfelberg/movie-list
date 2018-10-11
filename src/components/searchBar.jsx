import React from 'react';

const SearchBar = ({handleSearch}) => {
  let searchInput = React.createRef();

  const handleSearchInSearch = (event) => {
    event.preventDefault();
    const search = searchInput.current.value;
    if (search !== '') {
      searchInput.current.value = '';
      handleSearch(search);
    }
  }

  return (
    <div className="search">
      <form className="searchbar">
        <div className="form-inline container">
          <input
            type="text"
            className="form-control"
            placeholder="look up movie"
            ref={searchInput}
          />
          <button
            type="submit"
            className="btn btn-dark"
            onClick={handleSearchInSearch}
          >search</button>
        </div>
      </form>
    </div>
  );

};

export default SearchBar;

