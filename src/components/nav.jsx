import React from 'react';
import SearchBar from './searchBar.jsx';
import MovieAdder from './movieAdder.jsx';

const Nav = ({ handleSearch, handleAdd }) => (
  <div className="nav container">
    <SearchBar className="searcher" handleSearch={handleSearch} />
    <MovieAdder className="adder" handleAdd={handleAdd} />


    <ul className="nav nav-tabs navbar-right pull-right">
      <li className="nav-item">
       <a className="nav-link active" href="#">To watch</a>
      </li>
      <li className="nav-item">
       <a className="nav-link active" href="#">Watched</a>
      </li>
    </ul>
  </div>
);

export default Nav;
