// import isString from 'lodash/isString';
import omit from 'lodash/omit';
import { normalize } from 'normalizr';

import { gamesSchema } from '../schema';

// mutations
export const FETCH = 'games/FETCH';
export const FETCH_DONE = 'games/FETCH_DONE';
export const FETCH_ERROR = 'games/FETCH_ERROR';
export const CREATE = 'games/CREATE';
export const CREATE_DONE = 'games/CREATE_DONE';
export const CREATE_ERROR = 'games/CREATE_ERROR';
export const UPDATE = 'games/UPDATE';
export const UPDATE_DONE = 'games/UPDATE_DONE';
export const UPDATE_ERROR = 'games/UPDATE_ERROR';
export const REMOVE = 'games/REMOVE';
export const REMOVE_DONE = 'games/REMOVE_DONE';
export const REMOVE_ERROR = 'games/REMOVE_ERROR';

const initialState = {
  fetching: false,
  fetchError: null,
  fetchDone: null,
  creating: false,
  createDone: null,
  createError: null,
  db: normalize([], [gamesSchema]),
  updating: false,
  updateDone: null,
  updateError: null,

};

const reducer = function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        fetching: true,
        fetchDone: null,
        fetchError: null,
      };
    case FETCH_DONE:
      return {
        ...state,
        fetching: false,
        db: normalize(action.data.games, [gamesSchema]),
        fetchDone: action.data,
        fetchError: null,
      };
    case FETCH_ERROR:
      return {
        ...state,
        fetching: false,
        fetchError: action.error
      };
    case CREATE:
      return {
        ...state,
        creating: true,
        createDone: null,
        createError: null,
      };
    case CREATE_DONE:
      return {
        ...state,
        creating: false,
        createDone: action.data,
        createError: null
      };
    case CREATE_ERROR:
      return {
        ...state,
        creating: false,
        createError: action.error,
        createDone: null,
      };
    case UPDATE:
      return {
        ...state,
        updating: true,
        updateDone: null,
        updateError: null,
      };
    case UPDATE_DONE:
      return {
        ...state,
        updating: false,
        updateDone: action.data,
        updateError: null
      };
    case UPDATE_ERROR:
      return {
        ...state,
        updating: false,
        updateError: action.error,
        updateDone: null,
      };
    case REMOVE:
      return {
        ...state,
        deleting: true,
        deleteError: null,
        deleteDone: null
      };
    case REMOVE_DONE:
      return {
        ...state,
        deleting: false,
        deleteError: null,
        deleteDone: action.data,
        users: normalize(
          Object.values(omit(state.db.entities.games, action.data._id)),
          [gamesSchema]
        )
      };
    case REMOVE_ERROR:
      return {
        ...state,
        deleting: false,
        deleteError: action.error,
        deleteDone: null,
      };
    default:
      return state;
  }
};

export function remove(params) {
  return {type: REMOVE, data: {...params}};
}

export function removeDone(data) {
  return {type: REMOVE_DONE, data};
}

export function removeError({error}) {
  return {type: REMOVE_ERROR, error};
}

export function fetch(params) {
  return {type: FETCH, data: {...params}};
}

export function fetchDone({ games }) {
  return {type: FETCH_DONE, data: { games }};
}

export function fetchError({ error }) {
  return {error, type: FETCH_ERROR};
}

export function create(params) {
  return {
    type: CREATE,
    data: {...params}
  };
}

export function createDone(data) {
  return {data, type: CREATE_DONE};
}

export function createError({error}) {
  return {error, type: CREATE_ERROR};
}

export function update(params) {
  return {
    type: UPDATE,
    data: {...params}
  };
}

export function updateDone(data) {
  return {data, type: UPDATE_DONE};
}

export function updateError({error}) {
  return {error, type: UPDATE_ERROR};
}

export default reducer;
