import MovieListEntry from './movieListEntry.jsx';

export default MovieList = ({ movies }) => {
  const movieListAll = movies.map((movie, i) => (<MovieListEntry movie={movie} id={i} />))  

  return (
    <div className="movielist">
      {movieListAll}
    </div>
  );
};
