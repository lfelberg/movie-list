import MovieListEntry from './movieListEntry.js';

export default MovieList = ({ movies }) => {
  const movieListAll = movies.map((movie, i) => (<MovieListEntry movie={movie} id={i} />))  

  return (
    <div className="movielist">
      {movieListAll}
    </div>
  );
};
