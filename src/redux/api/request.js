import {from, throwError} from 'rxjs';
// import { ajax } from 'rxjs/ajax';
import {catchError} from 'rxjs/operators';
import {GraphQLClient} from 'graphql-request';

import config from '../../helpers/config';
import {getStore} from '../store';
import {tokenIsValid} from '../../helpers/userHelpers';

function graphqlClient(_getState = getStore) {
  const token = _getState().getState().users.token;
  const url = `${config().apiUrl}`;
  // do not send expired tokens or the backend will be unhappy.
  let headers = {};
  if (token && tokenIsValid({token})) headers.Authorization = `Bearer ${token}`;
  const client = new GraphQLClient(url, {headers});
  return client;
}

function request(query, variables = null) {
  try {
    const client = graphqlClient();
    const res$ = from(client.request(query, variables)).pipe(
      catchError(res => (
        throwError(
          res.response && res.response.errors && res.response.errors[0]
          ? new Error(res.response.errors[0].message)
          : new Error('unknown graphql error')
        )
      ))
    );
    return res$;
  } catch (err) {
    console.log('unexpected graphql error', err);
    return throwError(err);
  }
}

export default request;
