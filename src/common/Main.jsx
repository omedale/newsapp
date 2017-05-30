import React from 'react';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Login from './Login';
import NewsComponent from './NewsComponent';
import Headlines from './Headlines';

export default class Main extends React.Component {
  render() {
    return (
      <Router >
        <div>
          <Route exact path="/" component={ Home } history={ browserHistory } />
          <Route path="/about" component={ About } title="about" />
          <Route path="/login" component={ Login } />
          <Route path="/headlines/:id" component={ Headlines } />
          <Route path="/news" component={ NewsComponent } />

        </div>
      </Router>);
  }
}
