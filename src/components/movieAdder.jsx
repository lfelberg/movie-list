import React from 'react';

const MovieAdder = ({ handleAdd }) => {
  let movieInput = React.createRef();

  const handleMovieAddition = (event) => {
    event.preventDefault();
    const title = movieInput.current.value;
    if (title !== '') {
      movieInput.current.value = '';
      handleAdd(title);
    }
  }

  return (
    <div className="movieadd">
      <form>
        <div className="form-inline container">
          <input
            type="text"
            className="form-control"
            placeholder="add a movie!"
            ref={movieInput}
          />
          <button
            type="submit"
            className="btn btn-secondary"
            onClick={handleMovieAddition}
          >add</button>
        </div>
      </form>
    </div>
  );
};

export default MovieAdder;
