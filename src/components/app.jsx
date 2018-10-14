import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './movieList.jsx';
import Nav from './nav.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [
        {title: 'Mean Girls', watched: false},
        {title: 'Hackers', watched: false},
        {title: 'The Grey', watched: false},
        {title: 'Sunshine', watched: false},
        {title: 'Ex Machina', watched: false},
      ],
      query: '',
      watched: false,
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleWatchedTab = this.handleWatchedTab.bind(this);
    this.handleWatchedToggle = this.handleWatchedToggle.bind(this);
  }

  handleAdd(movieTitle) {
    const movies = [{ title: movieTitle, watched: this.state.watched }].concat(this.state.movies);
    this.setState({ movies });
  }

  handleSearch(query) {
    this.setState({ query });
  }

  handleWatchedTab(watched) {
    this.setState({ watched });
  }

  handleWatchedToggle(title) {
    const movies = this.state.movies.concat()
    movies.forEach((movie) => {
      if (title === movie.title) {
        movie.watched = !(movie.watched);
      }
    });
    this.setState({ movies });
    console.log(this.state.movies, 'watched', this.state.watched);
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
          toggle={this.handleWatchedToggle}
        />
      </div>
    );
  }
}

export default App;
