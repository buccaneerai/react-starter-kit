import {of} from 'rxjs';
import {catchError, filter, map, mergeMap} from 'rxjs/operators';

import {
  CREATE,
  createDone,
  createError,
  FETCH,
  fetchDone,
  fetchError
} from '../reducers/games';
import createGame from '../api/createGame';
import getGames from '../api/getGames';

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
        console.log('fetchShows.error', error);
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
        console.log('fetchShows.error', error);
        return of(fetchError({error}));
      })
    )
  ));
};
