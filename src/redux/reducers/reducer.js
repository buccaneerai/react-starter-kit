import { combineReducers } from 'redux';

import games from './games';
import shows from './shows';
import users from './users';
// import featureToggles from './featureToggles';
// import messages from './messages';
// import notifications from './notifications';

const reducer = combineReducers({
  shows,
  games,
  users,
  // featureToggles,
  // messages,
  // notifications
});

export default reducer;
