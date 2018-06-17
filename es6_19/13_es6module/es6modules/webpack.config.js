const webpack = require('webpack');
const path = require('path');
const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    filename: './app.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '_build')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015-native-modules']
      }
    }]
  },
  plugins: [
    // uglify js
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warning: false
      },
      output: {
        comments: false
      },
      sourceMap: true
    }),
    // env plugin
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv)
      }
    })
  ]
};