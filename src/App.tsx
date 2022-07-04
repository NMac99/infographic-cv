import React, { ReactElement } from 'react';
import { hot } from 'react-hot-loader/root';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from './pages/home';

const browserHistory = createBrowserHistory();

const App = (): ReactElement => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default hot(App);
