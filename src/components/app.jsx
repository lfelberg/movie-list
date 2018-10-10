import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './movieList.jsx';

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
  }

  render() {
    return (
      <div className='app'>
        <h1>Movie List</h1>
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
