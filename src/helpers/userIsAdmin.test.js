import jwt from 'jsonwebtoken';

import userIsAdmin from './userIsAdmin';

const adminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2FmNWRlYzMzZDA0ZTU0MWE3ODY0NjUiLCJlbWFpbCI6ImJyaWFuQHBhcmFicmlja3MuY29tIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTU1MzQyOTA1LCJleHAiOjE1NTU0MjkzMDV9.C4DnyPL7VRYPadksbJP1tQx5IXe5FO3ySBpSarvL4E4';

describe('userIsAdmin', () => {
  test('should return false if no string is given', () => {
    expect(userIsAdmin({token: null})).toBe(false);
  });

  test('should return false when given an expired token', () => {
    expect(userIsAdmin({token: adminToken})).toBe(true);
  });

  test('should return true when token is not expired', () => {
    const token = jwt.sign({isAdmin: false}, 'seeecret', {expiresIn: '24 hour'});
    expect(userIsAdmin({token})).toBe(false);
  });
});
