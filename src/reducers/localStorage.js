import pick from 'lodash/pick';

import getAppName from '../helpers/getAppName';

const STORAGE_KEY = getAppName();

export const loadState = function loadState(storage = localStorage) {
  try {
    const serializedState = storage.getItem(STORAGE_KEY);
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = function saveState(state, storage = localStorage) {
  try {
    const serializedState = JSON.stringify({
      users: pick(state.users, 'token', 'loginEmail', 'user'),
    });
    storage.setItem(STORAGE_KEY, serializedState);
  } catch (err) {

  }
};
