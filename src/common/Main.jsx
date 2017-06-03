import React from 'react';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';

import Login from './Login';
import NewsComponent from './NewsComponent';
import Headlines from './Headlines';
import TopNews from './TopNews';
import LatestNews from './LatestNews';
import PopularNews from './PopularNews';
import FavoriteNews from './FavoriteNews';

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
          <Route path="/popularnews/:id" component={PopularNews} />
          <Route path="/news" component={NewsComponent} />
          <Route path="/favorite" component={FavoriteNews} />

        </div>
      </Router>);
  }
}
