import { createStore, applyMiddleware } from 'redux';
import throttle from 'lodash/throttle';

import reducer from './reducers/reducer';
import { loadState, saveState } from './localStorage';

let store;
export const initStore = function initStore({ epicMiddleware }) {
  const persistedState = loadState(); // get initial state from local storage
  store = createStore(
    reducer,
    persistedState,
    applyMiddleware(epicMiddleware),
  );
  store.subscribe(throttle(
    () => saveState(store.getState())
    , 2000
  )); // save data to local storage
  return store;
};

export const getStore = function getStore() {
  return store;
};
