import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './movieList.jsx';
import Nav from './nav.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      query: '',
      watched: false,
    };

    this.searchMovieDB = this.props.searchMovieDB.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleWatchedTab = this.handleWatchedTab.bind(this);
    this.handleMovieToggle = this.handleMovieToggle.bind(this);
    this.searchDB = this.searchDB.bind(this);

    this.searchMovieDB({}, this.searchDB.bind(this));
  }

  searchDB(newMovies) {
    const movies = newMovies.map((newMovie) => {
      const date = newMovie.release_date.split('-').map(date => Number(date));
      return {
        details: {
          title: newMovie.title,
          photo: newMovie.poster_path,
          Vote: newMovie.vote_average,
          'Release Date': `${date[1]}, ${date[2]}, ${date[0]}`,
          Synopsis: newMovie.overview,
        },
        id: newMovie.id,
        watched: this.state.watched,
        expanded: false,
      }
    });

    this.setState({ movies });
  }

  handleAdd(movieTitle) {
    const movies = [{
      details: {title: movieTitle, Year: 2010},
      watched: this.state.watched,
      expanded: false,
      }].concat(this.state.movies);
    this.setState({ movies });
  }

  handleSearch(query) {
    this.setState({ query });
  }

  handleWatchedTab(watched) {
    this.setState({ watched });
  }

  handleMovieToggle(title, type = 'watched') {
    const movies = this.state.movies.concat()
    movies.forEach((movie) => {
      if (title === movie.details.title) {
        if (type === 'watched') {
          movie.watched = !(movie.watched);
        } else if (type === 'expand') {
          movie.expanded = !(movie.expanded);
        }
      }
    });
    this.setState({ movies });
  }

  render() {
    return (
      <div className='app'>
        <h1>movie list</h1>
        <Nav
          handleSearch={this.handleSearch}
          handleAdd={this.handleAdd}
          handleWatchedTab={this.handleWatchedTab}
        />
        <MovieList
          movies={this.state.movies}
          query={this.state.query}
          watched={this.state.watched}
          toggle={this.handleMovieToggle}
        />
      </div>
    );
  }
}

export default App;
