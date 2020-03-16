import {timeout} from 'rxjs/operators';

import request from './request';

export const createUser = function createUser({game, maxTime = 5000}) {
  const mutation = `mutation vars($title: String!, $url: String!, $categories: [String]!) {
    gameCreate(
      title: $title,
      url: $url,
      categories: $categories
    ) {
      _id,
      title,
      url,
      categories
    }
  }`;
  return request(mutation, game).pipe(timeout(maxTime));
};

export default createUser;
