import {of} from 'rxjs';
import {catchError, filter, map, mergeMap} from 'rxjs/operators';

import {FETCH, fetchDone, fetchError} from '../reducers/games';
import getGames from '../api/getGames';

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
