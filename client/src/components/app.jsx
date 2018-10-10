import MovieList from './movieList.js';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      movies = [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ];
    };
  }


  render() {
    return (
      <div className='app'>
        <h1>This is my app</h1>
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
