var webpack = require('webpack');

module.exports = {
  entry: './src/app.ts',

  output: {
    filename: './build/bundle.js'
  },

  // Turn on sourcemaps
  devtool: 'source-map',

  // Add minification
  plugins: [
    // new webpack.optimize.UglifyJsPlugin()
  ],

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },

  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts' }
    ]
  }
};
