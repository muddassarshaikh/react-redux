import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './routes';

const app = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default app;
