// // https://github.com/segmentio/analytics-react-native

// import { zip } from 'rxjs';
// import { filter, map, mergeMap, tap } from 'rxjs/operators';

// import { LOGIN_DONE } from '../reducers/users';

// function identityLogger(action$) {
//   return action$.pipe(
//     filter(action => action.type === LOGIN_DONE),
//     filter(action => action.data && action.data.me),
//     map(action => action.data.me),
//     tap(user => analytics.identify(user._id, { email: user.email })),
//     filter(() => false)
//   );
// }

// function actionLogger(action$, state$) {
//   return action$.pipe(
//     tap(action => console.log('action', action)),
//     tap(action => {
//       const user = (
//         state$.value.users && state$.value.users.me
//         ? state$.value.users.me
//         : null
//       );
//       return (
//         user && user.email && user._id
//         ? analytics.track(
//           action.type,
//           {...action.data, email: user.email, userId: user._id}
//         )
//         : analytics.track(action.type, {...action.data})
//       );
//     }),
//     // Must not return any data or else it creates more actions!
//     filter(() => false)
//   );
// }

// export default { identityLogger, actionLogger };
