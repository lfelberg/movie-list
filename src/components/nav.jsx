import React from 'react';
import SearchBar from './searchBar.jsx';
import MovieAdder from './movieAdder.jsx';

const Nav = ({ handleSearch, handleAdd, handleWatchedTab }) => {

  const handleWatchedTabClick = (event) => {
    if (event.target.text === 'To watch') {
      handleWatchedTab(false);
    } else {
      handleWatchedTab(true);
    }
  }

  return (
    <div className="nav container">
      <SearchBar className="searcher" handleSearch={handleSearch} />
      <MovieAdder className="adder" handleAdd={handleAdd} />

      <ul className="nav nav-tabs navbar-right pull-right bg-right">
        <li className="nav-item">
          <a
            className="nav-link active"
            href="#"
            onClick={handleWatchedTabClick}
          >To watch</a>
        </li>
        <li className="nav-item" onClick={handleWatchedTabClick}>
         <a
            className="nav-link active"
            href="#"
            onClick={handleWatchedTabClick}
          >Watched</a>
        </li>
      </ul>
    </div>
  )
};

export default Nav;
