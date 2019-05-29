import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

//Components
import Registration from './containers/Registration/Registration';
import Login from './containers/Login/Login';

const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/registration" component={Registration} />
      </Switch>
    </BrowserRouter>
  );
};

export default routes;
