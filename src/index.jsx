import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import searchMovieDB from './lib/searchMovieDB.js';

ReactDOM.render(<App searchMovieDB={searchMovieDB}/>, document.getElementById('app'));
