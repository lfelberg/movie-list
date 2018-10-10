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
      ]
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(query = null) {
    const moviesFiltered = this.state.movies.filter((movie) => {
      return movie.title.toLowerCase().includes(query.toLowerCase())
    });

    if (moviesFiltered.length === 0) {
      moviesFiltered.push({title: 'Title not found!'});
    }

    this.setState({ movies: moviesFiltered });
  }

  render() {
    return (
      <div className='app'>
        <Nav handleSearch={this.handleSearch}/>
        <h1>movie list</h1>
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
