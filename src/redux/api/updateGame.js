import {timeout} from 'rxjs/operators';

import request from './request';

export const updateGame = function updateGame({gameId, set, maxTime = 5000}) {
  const mutation = `mutation vars($gameId: ID!, $set: gameUpdate!) {
    gameUpdate(gameId: $gameId, set: $set) {
      _id
      title
      url
      categories
    }
  }`;
  return request(mutation, {gameId, set}).pipe(timeout(maxTime));
};

export default updateGame;
