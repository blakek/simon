/* eslint-env node */
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    main: ['webpack/hot/dev-server', path.resolve(__dirname, 'src/index.js')]
  },

  output: {
    path: path.resolve(__dirname, 'app'),
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ]
  }
}
