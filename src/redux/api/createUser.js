import {timeout} from 'rxjs/operators';

import request from './request';

export const createUser = function createUser({email, password, maxTime = 5000}) {
  const mutation = `mutation vars($email: String!, $password: String!) {
    userCreate(
      email: $email,
      password: $password
    ) {
      _id,
      email,
      isAdmin
    }
  }`;
  return request(mutation, {email, password}).pipe(timeout(maxTime));
};

export default createUser;
