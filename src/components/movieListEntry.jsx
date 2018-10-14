import React from 'react';

const MovieListEntry = ({ movie, handleWatched }) => {
  let id = '';
  let buttonValue = '';
  let buttonClr = 'btn btn-dark';
  let hidden = false;

  if ('watched' in movie) {
    buttonValue = (movie.watched === true) ? 'To watch' : 'Watched';
    buttonClr = "btn btn-secondary";
  }

  if (movie.title === 'Title not found!') {
    id = 'notfound';
    hidden = true
  }

  const handleWatchedClick = (event) => {
    handleWatched(movie.title);
  };

  return (
    <div className="movielistentry container" id={id}>
      <h2>{movie.title}</h2>
      <button
      className={buttonClr}
      onClick={handleWatchedClick}
      hidden={hidden}
      >{buttonValue}</button>
    </div>
  );
};

export default MovieListEntry;
