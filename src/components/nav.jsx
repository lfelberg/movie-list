import React from 'react';
import SearchBar from './searchBar.jsx';

const Nav = ({handleSearch}) => (
  <div className="nav container">
    <SearchBar className="searcher" handleSearch={handleSearch}/>
  </div>
);

export default Nav;
