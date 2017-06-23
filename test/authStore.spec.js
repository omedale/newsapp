
import expect from 'expect';
import { setUser, removeUser } from '../src/stores/AuthStore';
import AuthStore from '../src/stores/AuthStore';
import mockData from './mock/mock';

require('./mock/test_helper.js');

localStorage.setItem('omedale_profile', JSON.stringify(mockData.googleProfile));
//localStorage.setItem('omedale_token', 'hgvng');

describe('AuthStores  :', () => {
  it('contain funtion isAuthenticated and return false', () => {
    expect(AuthStore.isAuthenticated()).toEqual(true);
  });
  it('contain funtion getUserName', () => {
    expect(AuthStore.getUserName()).toEqual('Oluwafemi');
  });
  it('contain funtion getUserEmail', () => {
    expect(AuthStore.getUserEmail()).toEqual('omedale@gmail.co');
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
  it('should call setUser', () => {
    const token = 'faketoken';
    expect(setUser(mockData.googleProfile, token)).toEqual(undefined);
  });
  it('should call removeUser', () => {
    expect(removeUser()).toEqual(undefined);
  });
});

