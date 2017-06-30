
import expect from 'expect';

import AuthActions from '../../src/actions/AuthActions';

require('../../mock/test_helper');

describe('AuthActions  :', () => {
  it('should call method logOutuser with profile', () => {
    expect(AuthActions.logUserIn('profile')).toBeTruthy();
  });
  it('Method logUserOut returns true', () => {
    expect(AuthActions.logUserOut()).toBeTruthy();
  });
});
