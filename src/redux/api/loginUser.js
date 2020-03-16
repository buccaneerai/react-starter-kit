import {timeout} from 'rxjs/operators';
import request from './request';

export const loginUser = function loginUser({email, password, maxTime = 5000}) {
  const mutation = `mutation vars($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      token,
      user { _id, birthYear, sex, forgetfulness, email }
    }
  }`;
  return request(mutation, {email, password}).pipe(timeout(maxTime));
};

export default loginUser;
