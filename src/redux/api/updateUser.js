import {timeout} from 'rxjs/operators';

import request from './request';

const updateUser = function updateUser({userId, set, maxTime = 5000}) {
  const mutation = `mutation vars($userId: ID!, $set: userUpdates!) {
    userUpdate(userId: $userId, set: $set) {
      _id,
      email,
      forgetfulness,
      birthYear,
      sex
    }
  }`;
  return request(mutation, {userId, set}).pipe(timeout(maxTime));
};

export default updateUser;
