// import { from, throwError } from 'rxjs';
// // import { ajax } from 'rxjs/ajax';
// import { catchError, timeout } from 'rxjs/operators';
// import { GraphQLClient} from 'graphql-request';

// import config from './config';
// import tokenIsValid from './tokenIsValid';
// import { getStore } from '../rexux/store';

// function graphqlClient(
//   _getState = getStore
// ) {
//   const token = _getState().getState().users.token;
//   const url = config().apiUrl;
//   // do not send expired tokens or the backend will be unhappy.
//   let headers = {};
//   if (token && tokenIsValid({token})) headers.Authorization = `Bearer ${token}`;
//   const client = new GraphQLClient(url, {headers});
//   return client;
// }

// function graphqlRequest(query, variables = null) {
//   try {
//     const client = graphqlClient();
//     const res$ = from(client.request(query, variables)).pipe(
//       catchError(res => (
//         throwError(
//           res.response && res.response.errors && res.response.errors[0]
//           ? new Error(res.response.errors[0].message)
//           : new Error('unknown graphql error')
//         )
//       ))
//     );
//     return res$;
//   } catch (err) {
//     console.log('unexpected graphql error', err);
//     return throwError(err);
//   }
// }

// export const userLogin = function userLogin({email, password, maxTime = 5000}) {
//   const mutation = `mutation vars($email: String!, $password: String!) {
//     userLogin(email: $email, password: $password) { token }
//   }`;
//   return graphqlRequest(mutation, {email, password}).pipe(timeout(maxTime));
// };

// export const userCreate = function userCreate({email, password, maxTime = 5000}) {
//   const mutation = `mutation vars($email: String!, $password: String!) {
//     userCreate(
//       email: $email,
//       password: $password
//     ) {
//       _id,
//       email
//     }
//   }`;
//   return graphqlRequest(mutation, {email, password}).pipe(timeout(maxTime));
// };
