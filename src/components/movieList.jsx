import React from 'react';
import ReactDOM from 'react-dom';
import MovieListEntry from './movieListEntry.jsx';

const MovieList = ({ movies }) => {
  const movieListAll = movies.map((movie, i) => (<MovieListEntry movie={movie} key={i} />))

  return (
    <div className="movielist">
      {movieListAll}
    </div>
  );
};

export default MovieList;
