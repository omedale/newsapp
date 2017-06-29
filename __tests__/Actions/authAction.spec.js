
import expect from 'expect';

import AuthActions from '../../src/actions/AuthActions';

require('../../mock/test_helper');

describe('AuthActions  :', () => {
  it('contain funtion logUserIn', () => {
    expect(AuthActions.logUserIn('profile')).toBeTruthy();
  });
  it('contain funtion logUserOut', () => {
    expect(AuthActions.logUserOut()).toBeTruthy();
  });
});
