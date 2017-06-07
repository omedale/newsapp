
import EventEmitter from 'events';
import AppDispatcher from '../AppDispatcher/AppDispatcher';
import AuthConstants from '../constants/AuthConstants';

const CHANGE_EVENT = 'change';

function setUser(profile, token) {
  if (!localStorage.getItem('omedale_id_token')) {
    localStorage.setItem('omedale_profile', JSON.stringify(profile));
    localStorage.setItem('omedale_id_token', token);
    localStorage.setItem('omedale_profile_name', profile.name);
    localStorage.setItem('omedale_profile_email', profile.email);
  }
}

function removeUser() {
  localStorage.removeItem('omedale_profile');
  localStorage.removeItem('omedale_id_token');
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

  isAuthenticated() {
    if (localStorage.getItem('omedale_id_token')) {
      return true;
    }
    return false;
  }
  getUser() {
    return localStorage.getItem('omedale_profile');
  }
  getUserName() {
    if (localStorage.getItem('omedale_profile_name')) {
      return localStorage.getItem('omedale_profile_name');
    }
    localStorage.setItem('omedale_profile_name', ' ');
    return localStorage.getItem('omedale_profile_name');
  }
  getUserEmail() {
    if (localStorage.getItem('omedale_profile_email')) {
      return localStorage.getItem('omedale_profile_email');
    }
    localStorage.setItem('omedale_profile_email', ' ');
    return localStorage.getItem('omedale_profile_email');
  }
}

const AuthStore = new AuthStoreClass();

AuthStore.dispatchToken = AppDispatcher.register((action) => {
  switch (action.actionType) {
    case AuthConstants.LOGIN_USER:
      setUser(action.profile, action.token);
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