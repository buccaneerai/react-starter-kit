import { schema } from 'normalizr';

export const usersSchema = new schema.Entity(
  'users',
  {},
  { idAttribute: '_id' }
);

export const showsSchema = new schema.Entity(
  'shows',
  {},
  { idAttribute: '_id' }
);

export const gamesSchema = new schema.Entity(
  'games',
  {},
  { idAttribute: '_id' }
);

export const seriesSchema = new schema.Entity(
  'series',
  {},
  { idAttribute: '_id' }
);

// export const messagesSchema = new schema.Entity(
//   'messages',
//   {},
//   { idAttribute: '_id' }
// );

// export const notificationsSchema = new schema.Entity(
//   'notifications',
//   {},
//   { idAttribute: '_id' }
// );

// export const featureTogglesSchema = new schema.Entity(
//   'featureToggles',
//   {},
//   { idAttribute: '_id' }
// );
