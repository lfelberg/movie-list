import API_KEY from '../../config/keys.js';

const searchMovieDB = (
  { query = '', key = API_KEY} = {},
  successCB = (data) => { console.log(data); },
  errorCB = () => console.log('We\'ve got a problem!')
) => {
  let requestURL = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&sort_by=popularity.desc`;
  requestURL = (query === '') ? requestURL : `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`;

  console.log('my request', requestURL);

  fetch(requestURL, {
    method: 'GET',
  }).then( response => response.json()
  ).then( parsed => {
    successCB(parsed.results);
  }, errorCB);
};

export default searchMovieDB;
