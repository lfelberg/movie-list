import React from 'react';
import ReactDOM from 'react-dom';

const MovieListEntry = ({ movie}) => (
  <div className="movielistentry">
    <h2>{movie.title}</h2>
  </div>
);

export default MovieListEntry;
