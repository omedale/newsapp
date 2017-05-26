var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');
var APP_STY = path.resolve(__dirname, 'src/common');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      },
     {
       test: /\.(scss|sass)$/i,
            include: [
                path.resolve(__dirname, 'node_modules'),
                path.resolve(__dirname, 'src'),
            ],
            loaders: ["css", "sass"]
      },

    ]
  }
};

module.exports = config;