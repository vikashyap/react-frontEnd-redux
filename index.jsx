import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReduxStore from './src/reducers/store';
import App from './src/components/App/app';

render(
  <Provider store={ReduxStore}>
    <App />
  </Provider>,	
  document.getElementById('app')
);