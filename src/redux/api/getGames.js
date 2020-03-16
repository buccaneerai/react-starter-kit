import {map,timeout} from 'rxjs/operators';

import request from './request';

export const getGames = function getGames({
  filter = {},
  limit,
  skip,
  maxTime = 5000
}) {
  const queryOptions = {limit, skip};
  const mutation = `query vars($filter: gamesFilter!, $queryOptions: queryOptions) {
    games(filter: $filter, options: $queryOptions) {
      _id,
      title
      url
      categories
    }
  }`;
  return request(mutation, {filter, queryOptions}).pipe(
    timeout(maxTime),
    map(res => res.games)
  );
};

export default getGames;
