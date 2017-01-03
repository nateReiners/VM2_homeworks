import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { applyMiddleware } from 'redux';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);

  const rootEl = document.getElementById('content');
  const newStore = applyMiddlewares(store, addLoggingToDispatch);
ReactDOM.render(<Root store={newStore} />, rootEl);
});


const addLoggingToDispatch = (store) => (next) => (action) => {
  const OGDispatch = store.dispatch;
  console.log(store.getState());
  console.log(action);
  let returnValue = OGDispatch(action);
  console.log(store.getState());
  return returnValue;
}

const applyMiddlewares = (store, ...middlewares) => {
  let dispatch = store.dispatch
  middlewares.forEach((middleware) => {
    dispatch = middleware(store)(dispatch);
  });
  return Object.assign({}, store, { dispatch });
}
