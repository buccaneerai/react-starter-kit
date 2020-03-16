import values from 'lodash/values';
// import { filter, tap } from 'rxjs/operators';

// import analyticsEpics from './analyticsEpics';
import * as userEpics from './userEpics';

const epics = function epics() {
  return [
    // ...values(analyticsEpics),
    ...values(userEpics)
  ];
};

export default epics;
