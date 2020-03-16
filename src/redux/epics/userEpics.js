import {from, of} from 'rxjs';
import {
  catchError,
  // debounceTime,
  filter,
  map,
  mergeMap,
  // tap,
  // throttleTime,
} from 'rxjs/operators';

import {
  FETCH,
  fetchDone,
  fetchError,
  LOGIN,
  login as loginAction,
  loginDone,
  loginError,
  // MAKE_ADMIN,
  // makeAdminDone,
  // makeAdminError,
  SIGNUP,
  signupDone,
  signupError,
  // UPDATE,
  // updateDone,
  // updateError
} from '../reducers/users';
import createUser from '../api/createUser';
import getUsers from '../api/getUsers';
import loginUser from '../api/loginUser';

export const fetch = function fetch(
  action$,
  state$,
  _getUsers = getUsers,
) {
  return action$.pipe(
    filter(action => action.type === FETCH),
    // debounceTime(300),
    map(action => action.data),
    // tap(data => console.log('SIGNUP_PARAMS', data)),
    map(params => _getUsers(params)),
    mergeMap(response$ => response$.pipe(
      map(users => fetchDone({users})),
      catchError(error => {
        console.log('fetchUsers.error', error);
        return of(fetchError({error}));
      })
    )
  ));
}

export const login = function login(action$, state$, _loginUser = loginUser) {
  return action$.pipe(
    filter(action => action.type === LOGIN),
    // debounceTime(300),
    map(action => action.data),
    map(({email, password}) => _loginUser({email, password})),
    mergeMap(response$ => response$.pipe(
      map(response => loginDone({
        token: response.userLogin.token,
        user: response.userLogin.user,
      })),
      catchError(error => {
        console.log('loginEpics.login.error', error);
        return of(loginError({error}));
      })
    ))
  );
};

export const signup = function signup(
  action$,
  state$,
  _createUser = createUser,
  _loginAction = loginAction
) {
  return action$.pipe(
    filter(action => action.type === SIGNUP),
    // debounceTime(300),
    map(action => action.data),
    // tap(data => console.log('SIGNUP_PARAMS', data)),
    map(({email, password}) => [
      _createUser({email, password}),
      {email, password}
    ]),
    mergeMap(([response$, {email, password}]) => response$.pipe(
      mergeMap(response => from([
        signupDone(response.userCreate),
        _loginAction({email, password}),
      ])),
      catchError(error => {
        console.log('loginEpics.login.error', error);
        return of(signupError({error}));
      })
    )
  ));
}

// export const update = function update(action$, state$) {
//   return action$.pipe(
//     filter(action => action.type === UPDATE),
//     map(action => action.data.updates),
//     map(updates => [updates, state$.value.users.me._id]),
//     tap(action => console.log('userEpics.update', action)),
//     map(([updates, userId]) => userUpdate({userId, set: updates})),
//     mergeMap(response$ => response$.pipe(
//       tap(response => console.log('userEpics.updateresponse', response)),
//       map(response => response.userUpdate),
//       map(user => updateDone({user})),
//       catchError(error => {
//         console.log('userEpics.update.error', error);
//         return of(updateError({error}));
//       })
//     ))
//   );
// };

// const fetch = function fetch(action$, state$) {
//   return action$.pipe(
//     filter(action => action.type === FETCH),
//     throttleTime(1000),
//     map(action => action.data),
//     map(({filter}) => userFetch({filter})),
//     mergeMap(license$ => license$.pipe(
//       map(({users}) => fetchDone({users})),
//       catchError(error => {
//         console.log('userEpics.fetch.error', error);
//         return of(fetchError({error}));
//       })
//     ))
//   );
// };

// const makeAdmin = function makeAdmin(action$, state$) {
//   return action$.pipe(
//     filter(action => action.type === MAKE_ADMIN),
//     throttleTime(200),
//     map(action => action.data),
//     map(({userId}) => userMakeAdmin({userId})),
//     mergeMap(admin$ => admin$.pipe(
//       map(makeAdmin => makeAdminDone({makeAdmin})),
//       catchError(error => {
//         console.log('userEpics.makeAdmin.error', error);
//         return of(makeAdminError({error}));
//       })
//     ))
//   );
// };
