const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'movie-list.bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      { 
        test: /\.jsx$/, 
        exclude: /(node_modules)/,
        include: path.join(__dirname, '/src/'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react', '@babel/stage-0']
          }
        }
      }
    ],
    // externals: { // for redux??
    //   'react/addons': true, // important!!
    //   'react/lib/ReactContext': true,
    //   'react/lib/ExecutionEnvironment': true
    // }
  },
};