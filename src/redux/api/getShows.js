import {map,timeout} from 'rxjs/operators';

import request from './request';

export const getShows = function getShows({
  filter = {},
  limit,
  skip,
  maxTime = 5000
}) {
  const queryOptions = {limit, skip};
  const mutation = `query vars($filter: showsFilter!, $queryOptions: queryOptions) {
    shows(filter: $filter, queryOptions: $queryOptions) {
      _id,
      title
      genres
      youtubeVideoId
      timeCreated
      mediumThumbnailUrl
      playlistId
      playlistPosition
    }
  }`;
  return request(mutation, {filter, queryOptions}).pipe(
    timeout(maxTime),
    map(res => res.shows)
  );
};

export default getShows;
