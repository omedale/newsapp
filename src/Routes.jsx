import React from 'react';
import {
  BrowserRouter as Router,
  Route, browserHistory,
  Switch } from 'react-router-dom';

import Articles from './component/Articles';
import FavoriteNews from './component/FavoriteNews';
import Login from './component/Login';
import NopageFound from './component/NoPageFound';
import Sources from './component/Sources';

// Route defines all the route used in the application
const Routes = () => {
  return (
    <Router >
      <Switch>
        <Route exact path="/" component={Sources} history={browserHistory} />
        <Route path="/login" component={Login} />
        <Route path="/articles/:id/:name" component={Articles} />
        <Route path="/favorite" component={FavoriteNews} />
        <Route path="*" component={NopageFound} />
      </Switch>
    </Router>);
};

export default Routes;