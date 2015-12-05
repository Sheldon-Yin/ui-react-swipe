
module.exports = {
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ }
    ]
  },
  output: {
    library: 'ReactSwipe',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js']
  }
};