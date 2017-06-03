
import EventEmitter from 'events';
import AppDispatcher from '../AppDispatcher/AppDispatcher';
import AuthConstants from '../constants/AuthConstants';

const CHANGE_EVENT = 'change';

function setUser(profile, token, auth2) {
  if (!localStorage.getItem('omedale_id_token')) {
    localStorage.setItem('omedale_profile', JSON.stringify(profile));
    localStorage.setItem('omedale_id_token', token);
    localStorage.setItem('omedale_profile_name', profile.name);
    localStorage.setItem('omedale_profile_email', profile.email);
    localStorage.setItem('auth2', auth2);
  }
}

function removeUser() {
  localStorage.removeItem('omedale_profile');
  localStorage.removeItem('omedale_id_token');
  localStorage.removeItem('auth2');
}

class AuthStoreClass extends EventEmitter {
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
  isAuthenticated = () => {
    if (localStorage.getItem('omedale_id_token')) {
      return true;
    }
    return false;
  }
  getUser = () => {
    return localStorage.getItem('omedale_profile');
  }
  getUserName = () => {
    if (localStorage.getItem('omedale_profile_name')) {
      return localStorage.getItem('omedale_profile_name');
    }
    return localStorage.getItem('omedale_profile_name', ' ');
  }
  getUserEmail = () => {
    if (localStorage.getItem('omedale_profile_email')) {
      return localStorage.getItem('omedale_profile_email');
    }
    return localStorage.getItem('omedale_profile_email', ' ');
  }
  getAuth2 = () => {
    return localStorage.getItem('auth2');
  }

  getJwt = () => {
    return localStorage.getItem('omedale_id_token');
  }
}

const AuthStore = new AuthStoreClass();

AuthStore.dispatchToken = AppDispatcher.register((action) => {
  switch (action.actionType) {
    case AuthConstants.LOGIN_USER:
      setUser(action.profile, action.token, action.auth2);
      AuthStore.emitChange();
      break;

    case AuthConstants.LOGOUT_USER:
      removeUser();
      AuthStore.emitChange();
      break;

    default:
  }
});

export default AuthStore;