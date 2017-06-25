# d0-checkpoint1-newsapp

[![Code Climate](https://codeclimate.com/github/omedale/d0-checkpoint1-newsapp/badges/gpa.svg)](https://codeclimate.com/github/omedale/d0-checkpoint1-newsapp)
[![Build Status](https://travis-ci.org/omedale/d0-checkpoint1-newsapp.svg?branch=chore/fix-npm-script)](https://travis-ci.org/omedale/d0-checkpoint1-newsapp)
[![Coverage Status](https://coveralls.io/repos/github/omedale/d0-checkpoint1-newsapp/badge.svg?branch=master)](https://coveralls.io/github/omedale/d0-checkpoint1-newsapp?branch=master)

# Introduction
NewsApp is an open source application that enables users view news by selecting preffered sources and it also enables users to share news on social media. The application is easy to use and it provides users with latest news, users can also save fovorite news.
**[Click here](https://d0-checkpoint1-newsapp.herokuapp.com/)** to access the application


## Features
<ul>
<li>User can search for available news sources</li>
<li>User can view all articles on a page</li>
<li>User can search for articles</li>
<li>User can sort Articles based on available sort type</li>
<li>User can login via Google</li>
<li>User can save news to favorite</li>
<li>User can delete favorite news</li>
<li>User can share articles on social media</li>
</ul>

## Technology

*  **[React](https://facebook.github.io/react/)** - A JavaScript library for building user interfaces
*  **[Express](https://expressjs.com/)** - Express is Node.js web application framework
*  **[JQuery](https://jquery.com/)** - This a javascript library
*  **[Enzyme](https://www.npmjs.com/package/enzyme)** - Enzyme is used together with mocha, chai and expect.js to test this application
*  **[axios](https://www.npmjs.com/package/axios)** - Used to make GET requests to external API's
*  **[webpack](https://www.npmjs.com/package/react-router-dom)** - Used to bundle the app's js and scss files for usage in the browser
*  **[react-google-login](https://www.npmjs.com/package/react-google-login)** - Enables authentication with Google
*  **[flux](https://www.npmjs.com/package/flux)** - It enables the app to implement the flux architecture
  *  **[jest](https://www.google.com.ng/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwj7kJqXk8rUAhXkLMAKHW2ICPwQFggkMAA&url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fjest&usg=AFQjCNG6mScpYVllIQqsYUFlECVccwfTwg&sig2=UGTyMGDHitKf0V22sgLKXA)** - Used with mocha for test coverage report
*  **[express](https://www.npmjs.com/package/express)** - Used as the web server for this application

## Development Dependencies
*  The following depencies are required by the app during developmment
  *  **[eslint](https://www.npmjs.com/package/eslint)** - This is a javascript syntax highlighter used to highligh syntax error during the development of this app
  *  **[jsdom](https://www.npmjs.com/package/jsdom)**, **[jsdom-global](https://www.npmjs.com/package/jsdom-global)**, **[mocha-jsdom](https://www.npmjs.com/package/mocha-jsdom)**, **[mock-local-storage](https://www.npmjs.com/package/mock-local-storage)** - Used to emulate web browser during application testing.
   *  **[node-sass](https://www.npmjs.com/package/node-sass)**, **[sass-loader](https://www.npmjs.com/package/sass-loader)** - This enables the app to use sass (.scss) directly in scripts
  *  **[sinon](https://www.npmjs.com/package/sinon)** - Used with mocha and enzyme for mocking React components during test.

  ## Dependencies

*  **[babel-cli](https://www.npmjs.com/package/babel-cli)** - It enables the app scripts to be tested with babel from the command line
*  **[babel-core](https://www.npmjs.com/package/babel-core)** - It compiles es6 used in the app to es5
*  **[babel-eslint](https://www.npmjs.com/package/babel-eslint)** - Used with ESlint to lint syntax errors
*  **[babel-loader](https://www.npmjs.com/package/babel-loader)** - Used with Webpack to transpile javascript codes
*  **[babel-plugin-react-html-attrs](https://www.npmjs.com/package/babel-plugin-react-html-attrs)** - It help convert JSX `class` attribute into `className` 
*  **[Babel-register](https://www.npmjs.com/package/babel-register)** - This framework helps to compile from es6 to es5
*  **[css-loader](https://www.npmjs.com/package/css-loader)** - The  css-loader is used with webpack and it interprets @import and url() like import/require()
*  **[coveralls](https://www.npmjs.com/package/coveralls)** - Display test coverage
*  **[dotenv](https://www.npmjs.com/package/dotenv)** - To protect secret ID
*  **[events](https://www.npmjs.com/package/events)** - Use to create emiter fir flux implementation
*  **[history](https://www.npmjs.com/package/history)** - Allows the app to implement history in routes.
*  **[json-loader](https://www.npmjs.com/package/json-loader)** - Enables the app to inport json files.
*  **[json-loader](https://www.npmjs.com/package/json-loader)** - Enables the app to inport json files.
* **[keymirror](https://www.npmjs.com/package/keymirror)** - used to create an object with values equal to its key names in constant files
* **[nodemon](https://www.npmjs.com/package/nodemon)** - to watch the files in the directory for any files change
* **[path](https://www.npmjs.com/package/nodemon)** - to get paths during production
* **[prop-type](https://www.npmjs.com/package/prop-types)** - used to document the intended types of properties passed to components
*  **[react-loading](https://www.npmjs.com/package/react-loading)** - used to add animation while app is loading
*  **[react-router-dom](https://www.npmjs.com/package/react-router-dom)** - Used to perform app routing
*  **[sass-loader](https://www.npmjs.com/package/sass-loader)** - Used for loading sass style
*  **[webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server)** - Serves as the server during development.
## Front End Dependencies
*  **[Charisma CSS](https://usman.it/themes/charisma/)** - Some part of the app was styled with this css framework.
*  **[Font Awesome Icons](https://fontawesome.io/icons/)** - All font used were from Font Awesome library 
*  **[JQuery](https://www.google.com.ng/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwi-0ry6k8rUAhVlF8AKHSieBmEQFggkMAA&url=https%3A%2F%2Fjquery.com%2F&usg=AFQjCNFnz7C6MAXGLm7pVcOD_LrOjJUUiA&sig2=xsPUng8k-olBvHXKLQ2O8w)** - Charisma css framework requires JQuery library for some actions. 


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

## Limitations
News saved to favorite can only be view on the browser used to save the news, user cannot view favorite news on another browser.

## License

(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.