
import expect from 'expect';
import AuthActions from '../src/actions/AuthActions';

require('./test_helper.js');

describe('AuthActions  :', () => {
  it('contain funtion logUserIn', () => {
    expect(AuthActions.logUserIn('profile', 'token', 'auth')).toEqual(undefined);
  });
  it('contain funtion logUserOut', () => {
    expect(AuthActions.logUserOut()).toEqual(undefined);
  });
});
