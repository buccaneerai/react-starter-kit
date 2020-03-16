import { combineReducers } from 'redux';

import users from './users';
// import featureToggles from './featureToggles';
// import messages from './messages';
// import notifications from './notifications';

const reducer = combineReducers({
  users,
  // featureToggles,
  // messages,
  // notifications
});

export default reducer;
