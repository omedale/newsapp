const webpack = require('webpack');
const env = require('dotenv').config();
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');

const config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map',
  resolve: {
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
       { test: /\.scss$/, loader: ExtractTextPlugin.extract({ use: 'css-loader' }) },
       { 
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader', use: 'css-loader' }) },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'src/common/main.css',
      allChunks: true,
    }),
    new webpack.DefinePlugin({
      'process': {
        'env': {
          'CLIENT_ID': JSON.stringify(process.env.CLIENT_ID)
      }
      }
    })
  ],
};

module.exports = config;