// import isString from 'lodash/isString';
import omit from 'lodash/omit';
import { normalize } from 'normalizr';

import { showsSchema } from '../schema';

// mutations
export const FETCH = 'shows/FETCH';
export const FETCH_DONE = 'shows/FETCH_DONE';
export const FETCH_ERROR = 'shows/FETCH_ERROR';
// export const CREATE = 'shows/CREATE';
// export const CREATE_DONE = 'shows/CREATE_DONE';
// export const CREATE_ERROR = 'shows/CREATE_ERROR';
// export const UPDATE = 'shows/UPDATE';
// export const UPDATE_DONE = 'shows/UPDATE_DONE';
// export const UPDATE_ERROR = 'shows/UPDATE_ERROR';
export const REMOVE = 'shows/REMOVE';
export const REMOVE_DONE = 'shows/REMOVE_DONE';
export const REMOVE_ERROR = 'shows/REMOVE_ERROR';

const initialState = {
  fetching: false,
  fetchError: null,
  fetchDone: null,
  // creating: false,
  // createDone: null,
  // createError: null,
  db: normalize([], [showsSchema])
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
        db: normalize(action.data.shows, [showsSchema]),
        fetchDone: action.data,
        fetchError: null,
      };
    case FETCH_ERROR:
      return {
        ...state,
        fetching: false,
        fetchError: action.error
      };
    // case CREATE:
    //   return {
    //     ...state,
    //     signingUp: true,
    //     createDone: null,
    //     createError: null,
    //   };
    // case CREATE_DONE:
    //   return {
    //     ...state,
    //     signingUp: false,
    //     createDone: action.data,
    //     createError: null
    //   };
    // case CREATE_ERROR:
    //   return {
    //     ...state,
    //     signingUp: false,
    //     createError: action.error,
    //     createDone: null,
    //   };
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
        shows: normalize(
          Object.values(omit(state.db.entities.shows, action.data._id)),
          [showsSchema]
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

export function fetchDone({ shows }) {
  return {type: FETCH_DONE, data: { shows }};
}

export function fetchError({ error }) {
  return {error, type: FETCH_ERROR};
}

// export function create({ title, genres, youtubeId, playlistId, }) {
//   return {
//     type: CREATE,
//     data: { email, password }
//   };
// }

// export function createDone(data) {
//   return {data, type: CREATE_DONE};
// }

// export function createError({error}) {
//   return {error, type: CREATE_ERROR};
// }

export default reducer;
