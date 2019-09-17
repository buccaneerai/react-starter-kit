import jwt from 'jsonwebtoken';
import isString from 'lodash/isString';

const userIsAdmin = function userIsAdmin({token}) {
  if (!token || !isString(token)) return false;
  const data = jwt.decode(token);
  if (!data || !data.isAdmin) return false;
  return true;
};

export default userIsAdmin;
