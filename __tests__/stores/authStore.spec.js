
import expect from 'expect';
import sinon from 'sinon';
import AuthStore from '../../src/stores/AuthStore';
import mockData from '../../mock/mock';
import AppDispatcher from '../../src/AppDispatcher/AppDispatcher';

jest.mock('../../src/AppDispatcher/AppDispatcher');
const mockDispatcher = AppDispatcher.register.mock.calls[0][0];

require('../../mock/test_helper.js');

localStorage.setItem('omedale_profile', JSON.stringify(mockData.googleProfile));
localStorage.setItem('omedale_profile_email', 'omedale@gmail.com');
localStorage.setItem('omedale_token', 'zzzzzzggggtttttqqqqqq');
const token = localStorage.getItem('omedale_token');

describe('AuthStores  :', () => {
  let authAction;
  beforeEach(() => {
    authAction = {
      token,
      profile: mockData.googleProfile,
      type: 'LOGIN_USER',
    };
  });

  it('should register a callback with the dispatcher', () => {
    expect(mockDispatcher.length).toBe(1);
  });

  it('should return true if the user is authenticated', () => {
    expect(AuthStore.isAuthenticated()).toEqual(true);
  });
  it('should return current user name', () => {
    mockDispatcher(authAction);
    const response = (AuthStore.getToken());
    expect(response).toBe(token);
  });
  it('should return current token', () => {
    mockDispatcher(authAction);
    const response = (AuthStore.getUserName());
    expect(response).toBe('Oluwafemi');
  });
  it('should return current user name', () => {
    mockDispatcher(authAction);
    const response = (AuthStore.getUserEmail());
    expect(response).toBe('omedale@gmail.co');
  });
  it(' Method addChangeListener get called once', () => {
    const spy = sinon.spy(AuthStore, 'addChangeListener');
      function callback() {
        return 'true';
      }
    AuthStore.addChangeListener(callback);
    expect(spy.calledOnce).toBeTruthy();
  });
  it('Method removeChangeListener get called once', () => {
    const spy = sinon.spy(AuthStore, 'removeChangeListener');
    function callback() {
      return 'tt';
    }
    AuthStore.removeChangeListener(callback);
    expect(spy.calledOnce).toBeTruthy();
  });

  it('contain a method emitChange', () => {
    const spy = sinon.spy(AuthStore, 'emitChange');
    AuthStore.emitChange();
    expect(spy.calledOnce).toBeTruthy();
  });
});

