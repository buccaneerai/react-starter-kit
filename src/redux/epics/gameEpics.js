import {of} from 'rxjs';
import {catchError, filter, map, mergeMap} from 'rxjs/operators';

import {
  CREATE,
  createDone,
  createError,
  FETCH,
  fetchDone,
  fetchError,
  REMOVE,
  removeDone,
  removeError,
  UPDATE,
  updateDone,
  updateError
} from '../reducers/games';
import createGame from '../api/createGame';
import getGames from '../api/getGames';
import removeGame from '../api/removeGame';
import updateGame from '../api/updateGame';

export const create = function create(
  action$,
  state$,
  _create = createGame,
) {
  return action$.pipe(
    filter(action => action.type === CREATE),
    // debounceTime(300),
    map(action => action.data),
    // tap(data => console.log('SIGNUP_PARAMS', data)),
    map(params => _create({game: params})),
    mergeMap(response$ => response$.pipe(
      map(response => createDone({response})),
      catchError(error => {
        console.log('createGame.error', error);
        return of(createError({error}));
      })
    )
  ));
};

export const fetch = function fetch(
  action$,
  state$,
  _get = getGames,
) {
  return action$.pipe(
    filter(action => action.type === FETCH),
    // debounceTime(300),
    map(action => action.data),
    // tap(data => console.log('SIGNUP_PARAMS', data)),
    map(params => _get(params)),
    mergeMap(response$ => response$.pipe(
      map(games => fetchDone({games})),
      catchError(error => {
        console.log('fetchGames.error', error);
        return of(fetchError({error}));
      })
    )
  ));
};

export const remove = function remove(
  action$,
  state$,
  _remove = removeGame,
) {
  return action$.pipe(
    filter(action => action.type === REMOVE),
    // debounceTime(300),
    map(action => action.data),
    // tap(data => console.log('SIGNUP_PARAMS', data)),
    map(params => _remove(params)),
    mergeMap(response$ => response$.pipe(
      map(response => removeDone({...response})),
      catchError(error => {
        console.log('removeGame.error', error);
        return of(removeError({error}));
      })
    )
  ));
};

export const update = function update(
  action$,
  state$,
  _update = updateGame,
) {
  return action$.pipe(
    filter(action => action.type === UPDATE),
    // debounceTime(300),
    map(action => action.data),
    // tap(data => console.log('SIGNUP_PARAMS', data)),
    map(({gameId, updates}) => _update({gameId, set: updates})),
    mergeMap(response$ => response$.pipe(
      map(data => updateDone({...data})),
      catchError(error => {
        console.log('updateGame.error', error);
        return of(updateError({error}));
      })
    )
  ));
};
