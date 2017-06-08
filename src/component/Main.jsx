import React from 'react';
import { BrowserRouter as Router, Route, browserHistory, Switch } from 'react-router-dom';

import Login from './Login';
import Sources from './Sources';
import Articles from './Articles';
import FavoriteNews from './FavoriteNews';
import NopageFound from './NopageFound';

export default class Main extends React.Component {
  render() {
    return (
      <Router >
        <div>
          <Switch>
            <Route exact path="/" component={Sources} history={browserHistory} />
            <Route path="/login" component={Login} />
            <Route path="/topnews/:id" component={Articles} />
            <Route path="/latestnews/:id" component={Articles} />
            <Route path="/popularnews/:id" component={Articles} />
            <Route path="/favorite" component={FavoriteNews} />
            <Route component={NopageFound} />
          </Switch>
        </div>
      </Router>);
  }
}



