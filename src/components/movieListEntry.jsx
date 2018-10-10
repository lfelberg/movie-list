import React from 'react';

const MovieListEntry = ({ movie }) => {
  let id = '';

  if (movie.title === 'Title not found!') {
    id = 'notfound';
  }

  return (
    <div className="movielistentry" id={id}>
      <h2>{movie.title}</h2>
    </div>
  );
};

export default MovieListEntry;
