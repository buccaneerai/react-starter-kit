import {timeout} from 'rxjs/operators';

import request from './request';

export const createUser = function createUser({gameId, updates, maxTime = 5000}) {
  const mutation = `mutation vars($gameId: ID!, $set: gameUpdate!) {
    gameUpdate(gameId: $gameId, set: $set) {
      _id
      title
      url
      categories
    }
  }`;
  return request(mutation, {gameId, updates}).pipe(timeout(maxTime));
};

export default createUser;
