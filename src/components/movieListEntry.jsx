import React from 'react';

const MovieListEntry = ({ movie, handleWatched }) => {
  let id = '';

  if (movie.title === 'Title not found!') {
    id = 'notfound';
  }

  const handleWatchedClick = (event) => {
    console.log(movie.title);
    handleWatched(movie.title);
  };

  return (
    <div className="movielistentry container" id={id}>
      <h2>{movie.title}</h2>
      <button
        className="btn btn-dark watched"
        onClick={handleWatchedClick}
      >Watched</button>
    </div>
  );
};

export default MovieListEntry;
