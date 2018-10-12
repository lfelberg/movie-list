import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './movieList.jsx';
import Nav from './nav.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ],
      watched: [ ],
      searched: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ],
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleWatchedToggle = this.handleWatchedToggle.bind(this);
  }

  handleAdd(movieTitle) {
    const movies = [{ title: movieTitle }].concat(this.state.movies);
    this.setState({ movies, searched: movies });
  }

  handleSearch(query) {
    const moviesFiltered = this.state.movies.filter((movie) => {
      return movie.title.toLowerCase().includes(query.toLowerCase())
    });

    if (moviesFiltered.length === 0) {
      moviesFiltered.push({title: 'Title not found!'});
    }
    this.setState({ searched: moviesFiltered });
  }

  handleWatchedToggle(title) {
    let idx = this.state.movies.findIndex(item => (item.title === title));
    let watched = [];
    let movies = [];

    if (idx !== -1) {
      watched = [{ title }].concat(this.state.watched);
      movies = this.state.movies.concat();
      movies.splice(idx, 1);
    } else {
      idx = this.state.watched.findIndex(item => (item.title === title));
      movies = [{ title }].concat(this.state.movies);
      watched = this.state.watched.concat();
      watched.splice(idx, 1);
    }
    this.setState({ searched: movies, movies, watched });
  }

  render() {
    return (
      <div className='app'>
        <h1>movie list</h1>
        <Nav
          handleSearch={this.handleSearch}
          handleAdd={this.handleAdd}
        />
        <MovieList
          movies={this.state.searched}
          handleWatched={this.handleWatchedToggle}
        />
      </div>
    );
  }
}

export default App;
