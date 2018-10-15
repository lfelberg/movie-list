import React from 'react';

const MovieListEntry = ({ movie, handleToggle }) => {
  let id = '';
  let details = [];
  let watchedButton = '';
  let hidden = false;
  let buttonClr = 'btn watched-btn ';
  const buttonValue = (movie.watched === true) ? 'To watch' : 'Watched';
  buttonClr += (movie.watched === true) ? 'btn-dark' : 'btn-secondary';

  if (movie.expanded === true) {
    let counter = 0;
    for (let detail in movie.details) {
      if (detail === 'photo') {
        details.push((<img className='movie-poster'
          src={movie.details[detail]}
          alt={movie.details[detail]}/>
          ));
      } else if (detail !== 'title') {
        details.push((<p key={counter} className="movie-detail">{detail}: {movie.details[detail]}</p> ));
        counter += 1;
      }
    }
  }

  if (movie.title === 'Title not found!') {
    id = 'notfound';
    hidden = true;
  }

  const handleMovieToggle = (event) => {
    event.preventDefault();
    handleToggle(movie.details.title, 'expand');
  };

  const handleWatchedToggle = (event) => {
    event.preventDefault();
    handleToggle(movie.details.title, 'watched');
  }

  return (
    <div className="movielistentry container" id={id}>
        <div className="row">
          <div className="col-10">
            <a href="#" onClick={handleMovieToggle}>
              <h2 className="movie-title">{movie.details.title}</h2>
            </a>
            <div className="details">
              {details}
            </div>
          </div>
          <div className="col-sm">
            <button
              className={buttonClr}
              onClick={handleWatchedToggle}
              hidden={hidden}
            >{buttonValue}</button>
          </div>
        </div>
    </div>
  );
};

export default MovieListEntry;
