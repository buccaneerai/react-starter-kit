import {map,timeout} from 'rxjs/operators';

import request from './request';

export const getUsers = function getUsers({
  filter = {},
  limit,
  skip,
  maxTime = 5000
}) {
  const queryOptions = {limit, skip};
  const mutation = `query vars($filter: usersFilter!, $queryOptions: queryOptions) {
    users(filter: $filter, queryOptions: $queryOptions) {
      _id,
      email,
      isAdmin
    }
  }`;
  return request(mutation, {filter, queryOptions}).pipe(
    timeout(maxTime),
    map(res => res.users)
  );
};

export default getUsers;
