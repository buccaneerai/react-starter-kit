// import isString from 'lodash/isString';
// import jwt from 'jsonwebtoken';
// import { normalize } from 'normalizr';

// import { usersSchema } from './schema';

// export const LOGIN = 'users/LOGIN';
// export const LOGIN_DONE = 'users/LOGIN_DONE';
// export const LOGIN_ERROR = 'users/LOGIN_ERROR';
// export const LOGOUT = 'users/LOGOUT';
// export const FETCH = 'users/FETCH';
// export const FETCH_DONE = 'users/FETCH_DONE';
// export const FETCH_ERROR = 'users/FETCH_ERROR';
// export const MAKE_ADMIN = 'users/MAKE_ADMIN';
// export const MAKE_ADMIN_DONE = 'users/MAKE_ADMIN_DONE';
// export const MAKE_ADMIN_ERROR = 'users/MAKE_ADMIN_ERROR';
// export const SIGNUP = 'users/SIGNUP';
// export const SIGNUP_DONE = 'users/SIGNUP_DONE';
// export const SIGNUP_ERROR = 'users/SIGNUP_ERROR';

// const initialState = {
//   loggingIn: false,
//   loginError: null,
//   loginDone: null,
//   token: null,
//   user: null,
//   email: null,
//   fetching: false,
//   fetchError: null,
//   fetchDone: null,
//   signingUp: false,
//   signupDone: null,
//   signupError: null,
//   db: normalize([], [usersSchema])
// };

// function decodeToken ({token}) {
//   if (!isString(token)) return null;
//   const payload = jwt.decode(token);
//   if (!payload) return null;
//   return payload;
// }

// const reducer = function reducer(state = initialState, action = {}) {
//   switch (action.type) {
//     case LOGIN:
//       return {
//         ...state,
//         loggingIn: true,
//         loginDone: null,
//         loginError: null,
//         loginEmail: action.data.email,
//         user: null,
//       };
//     case LOGIN_DONE:
//       return {
//         ...state,
//         loggingIn: false,
//         loginDone: action.data.trial,
//         loginError: null,
//         token: action.data.token,
//         user: decodeToken({token: action.data.token}),
//       };
//     case LOGIN_ERROR:
//       return {
//         ...state,
//         loggingIn: false,
//         loginError: action.error
//       };
//     case LOGOUT:
//       return {
//         ...state,
//         loginDone: null,
//         loginError: null,
//         user: null,
//         token: null,
//       };
//     case FETCH:
//       return {
//         ...state,
//         fetching: true,
//         fetchDone: null,
//         fetchError: null,
//       };
//     case FETCH_DONE:
//       return {
//         ...state,
//         fetching: false,
//         db: normalize(action.data.users, [usersSchema]),
//         fetchDone: action.data,
//         fetchError: null,
//       };
//     case FETCH_ERROR:
//       return {
//         ...state,
//         fetching: false,
//         fetchError: action.error
//       };
//     case SIGNUP:
//       return {
//         ...state,
//         signingUp: true,
//         signupDone: null,
//         signupError: null,
//       };
//     case SIGNUP_DONE:
//       return {
//         ...state,
//         signingUp: false,
//         signupDone: action.data,
//         signupError: null
//       };
//     case SIGNUP_ERROR:
//       return {
//         ...state,
//         signingUp: false,
//         signupError: action.error,
//         signupDone: null,
//       }
//     default:
//       return state;
//   }
// };

// export function login({ email, password }) {
//   return {
//     type: LOGIN,
//     data: { email, password }
//   };
// }

// export function loginDone({token}) {
//   return {
//     type: LOGIN_DONE,
//     data: { token }
//   };
// }

// export function loginError({error}) {
//   return {error, type: LOGIN_ERROR};
// }

// export function logout() {
//   return {type: LOGOUT, data: null};
// }

// export function fetch({ filter }) {
//   return {
//     type: FETCH,
//     data: { filter }
//   };
// }

// export function fetchDone({ users }) {
//   return {
//     type: FETCH_DONE,
//     data: { users }
//   };
// }

// export function fetchError({ error }) {
//   return {error, type: FETCH_ERROR};
// }

// export function makeAdmin({ userId }) {
//   return { type: MAKE_ADMIN, data: { userId }};
// }

// export function makeAdminDone(data) {
//   return {data, type: MAKE_ADMIN_DONE};
// }

// export function makeAdminError({ error }) {
//   return { error, type: MAKE_ADMIN_ERROR };
// }

// export function signup({ email, password }) {
//   return {
//     type: SIGNUP,
//     data: { email, password }
//   };
// }

// export function signupDone(data) {
//   return {data, type: SIGNUP_DONE};
// }

// export function signupError({error}) {
//   return {error, type: SIGNUP_ERROR};
// }

// export default reducer;
