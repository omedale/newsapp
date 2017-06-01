import React from 'react';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';

import Login from './Login';
import NewsComponent from './NewsComponent';
import Headlines from './Headlines';
import TopNews from './TopNews';
import LatestNews from './LatestNews';

export default class Main extends React.Component {
  render() {
    return (
      <Router >
        <div>
          <Route exact path="/" component={NewsComponent} history={browserHistory} />
          <Route path="/login" component={Login} />
          <Route path="/headlines/:id" component={Headlines} />
          <Route path="/topnews/:id" component={TopNews} />
          <Route path="/latestnews/:id" component={LatestNews} />
          <Route path="/news" component={NewsComponent} />

        </div>
      </Router>);
  }
}
