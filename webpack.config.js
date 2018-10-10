const path = require('path');

module.exports = {
  entry: './client/src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'src/dist'),
    filename: 'movie-list.bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      { 
        test: /\.jsx$/, 
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'react-dom']
          }
        }
      }
    ]
  },
};