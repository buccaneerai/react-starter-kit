import isString from 'lodash/isString';
import jwt from 'jsonwebtoken';
import moment from 'moment';

const tokenIsValid = function tokenIsValid ({token}) {
  if (!token || !isString(token)) return false;
  const payload = jwt.decode(token);
  if (!payload || !payload.exp) return false;
  return moment(payload.exp * 1000).isAfter(moment());
};

export default tokenIsValid;
