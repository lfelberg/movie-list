import React from 'react';
import ReactDOM from 'react-dom';
import MovieListEntry from './movieListEntry.jsx';

const MovieList = ({ movies, query, watched, toggle }) => {
  let moviesQueried = movies.concat();

  moviesQueried = moviesQueried.filter(movie =>
    (movie.title.toLowerCase().includes(query.toLowerCase()) &&
    movie.watched === watched));

  if (query !== '' && moviesQueried.length === 0) {
    moviesQueried.push({title: 'Title not found!'});
  }

  const movieListAll = moviesQueried.map((movie, i) =>
    (<MovieListEntry movie={movie} key={i} handleWatched={toggle} />)
  );

  return (
    <div className="movielist">
      {movieListAll}
    </div>
  );
};

export default MovieList;
