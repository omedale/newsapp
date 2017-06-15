import React from 'react';
import { BrowserRouter as Router, Route, browserHistory, Switch } from 'react-router-dom';

import Login from './component/Login';
import Sources from './component/Sources';
import Articles from './component/Articles';
import FavoriteNews from './component/FavoriteNews';
import NopageFound from './component/NopageFound';

const Routes = () => {
  return (
    <Router >
        <Switch>
          <Route exact path="/" component={Sources} history={browserHistory} />
          <Route path="/login" component={Login} />
          <Route path="/articles/:id" component={Articles} />
          <Route path="/favorite" component={FavoriteNews} />
          <Route component={NopageFound} />
        </Switch>
    </Router>);
};

export default Routes;


