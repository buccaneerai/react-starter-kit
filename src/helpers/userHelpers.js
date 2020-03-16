import isString from 'lodash/isString';
import jwtDecode from 'jwt-decode';
import moment from 'moment';

// export const tokenIsValid = function tokenIsValid(token) {
// };

export const decodeToken = function decodeToken({token}) {
  if (!isString(token)) return null;
  const payload = jwtDecode(token);
  if (!payload) return null;
  return payload;
};

export const tokenIsValid = function tokenIsValid ({token}) {
  if (!token || !isString(token)) return false;
  const payload = jwtDecode(token);
  if (!payload || !payload.exp) return false;
  return moment(payload.exp * 1000).isAfter(moment());
};

export const isAdmin = function isAdmin({token}) {
  if (!token || !isString(token)) return false;
  const data = jwtDecode(token);
  if (!data || !data.isAdmin) return false;
  return true;
};
