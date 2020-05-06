import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

//Components
import Registration from './containers/Registration/Registration';
import Login from './containers/Login/Login';
import Authentication from './Authentication';

const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Authentication>
          <Route exact path="/dashboard" component={Login} />
          <Route path="/dashboard" component={Registration} />
        </Authentication>
      </Switch>
    </BrowserRouter>
  );
};

export default routes;
