import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './movieList.jsx';
import Nav from './nav.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [
        { details: {
            title: 'Mean Girls',
            year: 2007,
          },
          watched: false,
          expanded: false,
        },
        { details: {
            title: 'The Grey',
            year: 2012,
          },
          watched: false,
          expanded: false,

        },
        { details: {
            title: 'Hackers',
            year: 2017,
          },
          expanded: false,
          watched: false,
        },
        { details: {
            title: 'Sunshine',
            year: 1997,
          },
          expanded: false,
          watched: false,
        },
        { details: {
            title: 'Ex Machina',
            year: 2007,
          },
          expanded: false,
          watched: false,
        },
      ],
      query: '',
      watched: false,
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleWatchedTab = this.handleWatchedTab.bind(this);
    this.handleMovieToggle = this.handleMovieToggle.bind(this);
  }

  handleAdd(movieTitle) {
    const movies = [{
      details: {title: movieTitle, year: 2010},
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
          console.log(movie);
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
