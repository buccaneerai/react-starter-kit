import * as gameEpics from './gameEpics';
import * as showEpics from './showEpics';
import * as userEpics from './userEpics';

const epics = function epics() {
  return [
    ...Object.values(gameEpics),
    ...Object.values(showEpics),
    ...Object.values(userEpics)
  ];
};

export default epics;
