import {map,timeout} from 'rxjs/operators';

import request from './request';

export const removeGame = function removeGame({gameId, maxTime = 5000}) {
  const mutation = `mutation vars($gameId: ID!) {
    gameRemove(gameId: $gameId) { _id }
  }`;
  return request(mutation, {gameId}).pipe(
    map(data => data.gameRemove),
    timeout(maxTime)
  );
};

export default removeGame;
