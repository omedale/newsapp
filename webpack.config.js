const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');

const config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
      },
       { test: /\.scss$/, loader: ExtractTextPlugin.extract({ use: 'css-loader' }) },
       { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }) },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'src/common/main.css',
      allChunks: true,
    }),
  ],
};

module.exports = config;