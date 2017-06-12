
import expect from 'expect';
import AuthStore from '../src/stores/AuthStore';

require('./test_helper.js');

describe('AuthActions  :', () => {
  it('contain funtion isAuthenticated and return false', () => {
    expect(AuthStore.isAuthenticated()).toEqual(false);
  });
  it('contain funtion getUser', () => {
    expect(AuthStore.getUser()).toEqual(undefined);
  });
  it('contain funtion getUserName', () => {
    expect(AuthStore.getUserName()).toEqual(false);
  });
  it('contain funtion getUserEmail', () => {
    expect(AuthStore.getUserEmail()).toEqual(' ');
  });
  it('contain funtion emitChange', () => {
    expect(AuthStore.emitChange()).toEqual(undefined);
  });
  it('contain funtion addChangeListener', () => {
    function callback() {
      return 'tt';
    }
    expect(AuthStore.addChangeListener(callback)).toEqual(undefined);
  });
  it('contain funtion removeChangeListener', () => {
    function callback() {
      return 'tt';
    }
    expect(AuthStore.removeChangeListener(callback)).toEqual(undefined);
  });
});
