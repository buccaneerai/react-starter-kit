import {of} from 'rxjs';
import {catchError, filter, map, mergeMap} from 'rxjs/operators';

import {FETCH, fetchDone, fetchError} from '../reducers/shows';
import getShows from '../api/getShows';

export const fetch = function fetch(
  action$,
  state$,
  _getShows = getShows,
) {
  return action$.pipe(
    filter(action => action.type === FETCH),
    // debounceTime(300),
    map(action => action.data),
    // tap(data => console.log('SIGNUP_PARAMS', data)),
    map(params => _getShows(params)),
    mergeMap(response$ => response$.pipe(
      map(shows => fetchDone({shows})),
      catchError(error => {
        console.log('fetchShows.error', error);
        return of(fetchError({error}));
      })
    )
  ));
};
