const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');
onst TEST_DIR = path.resolve(__dirname, 'test');

const config = {
  entry: `${APP_DIR}/index.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  resolve: {
    path: TEST_DIR,
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: APP_DIR,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({ use: 'css-loader' }),
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
      },
    ],
  },
};

module.exports = config;