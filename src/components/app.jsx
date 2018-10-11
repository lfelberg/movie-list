import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './movieList.jsx';
import Nav from './nav.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [

      ],
      watched: [

      ],
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleSearch(query) {
    const moviesFiltered = this.state.movies.filter((movie) => {
      return movie.title.toLowerCase().includes(query.toLowerCase())
    });

    if (moviesFiltered.length === 0) {
      moviesFiltered.push({title: 'Title not found!'});
    }
    this.setState({ movies: moviesFiltered });
  }

  handleAdd(movieTitle) {
    const movies = this.state.movies.concat();
    movies.push({ title: movieTitle });
    this.setState({ movies });
  }

  render() {
    return (
      <div className='app'>
        <Nav
          handleSearch={this.handleSearch}
          handleAdd={this.handleAdd}
        />
        <h1>movie list</h1>
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
