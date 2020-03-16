import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import './styles/scss/theme.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { initStore } from './redux/store';
import epics from './redux/epics/epics';

const epicMiddleware = createEpicMiddleware();
const store = initStore({ epicMiddleware });
epicMiddleware.run(combineEpics(...epics())); // apply the redux-observable middleware

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
