# d0-checkpoint1-newsapp

[![Code Climate](https://codeclimate.com/github/omedale/d0-checkpoint1-newsapp/badges/gpa.svg)](https://codeclimate.com/github/omedale/d0-checkpoint1-newsapp)
[![Build Status](https://travis-ci.org/omedale/d0-checkpoint1-newsapp.svg?branch=chore/fix-npm-script)](https://travis-ci.org/omedale/d0-checkpoint1-newsapp)
[![Coverage Status](https://coveralls.io/repos/github/omedale/d0-checkpoint1-newsapp/badge.svg?branch=chore%2Ffix-feedback2)](https://coveralls.io/github/omedale/d0-checkpoint1-newsapp?branch=chore%2Ffix-feedback2)

# Introduction
NewsApp application enables users view news by selecting source
## Features
<ul>
<li>User can search for news sources</li>
<li>Search News Sources</li>
<li>user view all articles on a page</li>
<li>User can search for articles</li>
<li>User can sort Articles based on available sort type</li>
<li>User can login via Google</li>
<li>User can save news to favorite</li>
<li>User can delete favorite news</li>
</ul>

## Technology

1. React
2. Express
3. Webpack
4. Babel
5. scss
6. Jest
7. JQuery

# Dependencies

## Development Dependencies
*  The following depencies are required by the app during developmment
  *  **[Babel-register](https://www.npmjs.com/package/babel-register)** - This framework helps to compile from es6 to es5
  *  **[css-loader](https://www.npmjs.com/package/css-loader)** - The  css-loader is used with webpack and it interprets @import and url() like import/require()
  *  **[enzyme](https://www.npmjs.com/package/enzyme)** - Enzyme is used together with mocha, chai and expect.js to test this application
  *  **[eslint](https://www.npmjs.com/package/eslint)** - This is a javascript syntax highlighter used to highligh syntax error during the development of this app
  *  **[jsdom](https://www.npmjs.com/package/jsdom)**, **[jsdom-global](https://www.npmjs.com/package/jsdom-global)**, **[mocha-jsdom](https://www.npmjs.com/package/mocha-jsdom)**, **[mock-local-storage](https://www.npmjs.com/package/mock-local-storage)** - Used to emulate web browser during application testing.
   *  **[node-sass](https://www.npmjs.com/package/node-sass)**, **[sass-loader](https://www.npmjs.com/package/sass-loader)** - This enables the app to use sass (.scss) directly in scripts
  *  **[nyc](https://www.npmjs.com/package/nyc)** - Used with mocha for test coverage report
  *  **[sinon](https://www.npmjs.com/package/sinon)** - Used with mocha and enzyme for mocking React components during test.

  ## Dependencies

*  **[axios](https://www.npmjs.com/package/axios)** - Used to make GET requests to external API's
*  **[babel-cli](https://www.npmjs.com/package/babel-cli)** - It enables the app scripts to be tested with babel from the command line
*  **[babel-core](https://www.npmjs.com/package/babel-core)** - It compiles es6 used in the app to es5
*  **[babel-eslint](https://www.npmjs.com/package/babel-eslint)** - Used with ESlint to lint syntax errors
*  **[babel-loader](https://www.npmjs.com/package/babel-loader)** - Used with Webpack to transpile javascript codes
*  **[babel-plugin-react-html-attrs](https://www.npmjs.com/package/babel-plugin-react-html-attrs)** - It help convert JSX `class` attribute into `className` 
*  **[coveralls](https://www.npmjs.com/package/coveralls)** - Display test coverage
*  **[express](https://www.npmjs.com/package/express)** - Used as the web server for this application
*  **[flux](https://www.npmjs.com/package/flux)** - It enables the app to implement the flux architecture
*  **[history](https://www.npmjs.com/package/history)** - Allows the app to implement history in routes.
*  **[json-loader](https://www.npmjs.com/package/json-loader)** - Enables the app to inport json files.
*  **[lodash](https://www.npmjs.com/package/lodash)** - Used to perform filter on objects
*  **[react](https://www.npmjs.com/package/react)** - It enables the app to use the React architecture
*  **[react](https://www.npmjs.com/package/react)** - Used with **[react-dom](https://www.npmjs.com/package/react-dom)** enables the app to use the React architecture
*  **[react-google-login](https://www.npmjs.com/package/react-google-login)** - Enables authentication with Google
*  **[react-router-dom](https://www.npmjs.com/package/react-router-dom)** - Used to perform app routing
*  **[webpack](https://www.npmjs.com/package/react-router-dom)** - Used to bundle the app's js and scss files for usage in the browser
*  **[webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server)** - Serves as the server during development.

## Front End Dependencies
*  **[Charisma CSS](https://usman.it/themes/charisma/)** - Some part of the app was styled with this css framework.
*  **[Font Awesome Icons](https://fontawesome.io/icons/)** - All font used were from Font Awesome library 
*  **[JQuery](https://)** - Charisma css framework requires JQuery library for some actions. 


# Installation

    - clone the project to new folder, copy and paste the commands below on your terminal
    $ git clone https://github.com/omedale/d0-checkpoint1-newsapp.git

    -install dependencies
    $ npm install

    -start the project
    $ npm run serve


## Tests
*  The tests have been written using Jest and Enzyme.
*  They are run using the **`coverage`** tool in order to generate test coverage reports.

     -To run test

         $ npm test

# Demo
click the url below for live demo
https://d0-checkpoint1-newsapp.herokuapp.com/


## How to contribute

## Limitations
News saved to favorite can only be view on the PC used to save the news, user cannot view favorite news on another PC.

### Troubleshooting & FAQ
