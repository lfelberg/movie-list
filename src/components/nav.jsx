import React from 'react';
import SearchBar from './searchBar.jsx';
import MovieAdder from './movieAdder.jsx';

const Nav = ({ handleSearch, handleAdd }) => (
  <div className="nav container">
    <SearchBar className="searcher" handleSearch={handleSearch} />
    <MovieAdder className="adder" handleAdd={handleAdd} />
  </div>
);

export default Nav;
