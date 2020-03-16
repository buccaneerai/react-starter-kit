import {marbles} from 'rxjs-marbles/jest';
import {of} from 'rxjs';

import {LOGIN,loginDone,SIGNUP,signupDone} from '../reducers/users';
import {login,signup} from './userEpics';

const fakeLoginResponse = {
  userLogin: {
    token: 'faketoken',
    user: {_id: 'fakeuserid'},
}};

const fakeUserCreateResponse = {
  userCreate: {
    foo: 'bar'
  }
};

describe('userEpics', () => {
  it('should call login workflow correctly', marbles(m => {
    const action$ = m.cold('--(0|)', [{
      type: LOGIN,
      data: {email: 'foo@bar.com', password: 'letmein123'}
    }]);
    const _userLogin = jest.fn(() => of(fakeLoginResponse));
    const actual$ = login(action$, null, _userLogin);
    const foo = 'bar';
    const expected$ = m.cold(
      '--(0|)',
      {0: loginDone(fakeLoginResponse.userLogin)}
    );
    m.expect(actual$).toBeObservable(expected$);
    expect(_userLogin).toHaveBeenCalled();
  }));

  it('should call signup workflow correctly', marbles(m => {
    const action$ = m.cold('--(0|)', [{
      type: SIGNUP,
      data: {email: 'foo@bar.com', password: 'letmein123'}
    }]);
    const _userCreate = jest.fn(() => of(fakeUserCreateResponse));
    const _userLogin = jest.fn(() => of(fakeLoginResponse));
    const actual$ = login(action$, null, _userCreate, _userLogin);
    const expected$ = m.cold(
      '--(01|)', {
      0: signupDone(fakeUserCreateResponse.userCreate),
      1: loginDone(fakeLoginResponse.userLogin),
    });
    m.expect(actual$).toBeObservable(expected$);
    // expect(_userLogin).toHaveBeenCalled();
    // expect(_userCreate).toHaveBeenCalled();
  }));
});
