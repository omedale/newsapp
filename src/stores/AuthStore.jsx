import AppDispatcher from '../AppDispatcher/AppDispatcher.jsx';
import AuthConstants from '../constants/AuthConstants.jsx';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

function setUser(profile, token, auth2) {
  if (!localStorage.getItem('id_token')) {
    localStorage.setItem('profile', JSON.stringify(profile));
    localStorage.setItem('id_token', token);
    localStorage.setItem('auth2', auth2);
  }
}

function removeUser() {
  localStorage.removeItem('profile');
  localStorage.removeItem('id_token');
  localStorage.removeItem('auth2');
}

class AuthStoreClass extends EventEmitter {
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }

  isAuthenticated() {
    if (localStorage.getItem('id_token')) {
      return true;
    }
    return false;
  }

  getUser() {
    return localStorage.getItem('profile');
  }

    getAuth2() {
    return localStorage.getItem('auth2');
  }

  getJwt() {
    return localStorage.getItem('id_token');
  }
}

const AuthStore = new AuthStoreClass();

// Here we register a callback for the dispatcher
// and look for our various action types so we can
// respond appropriately
AuthStore.dispatchToken = AppDispatcher.register(action => {

  switch(action.actionType) {

    case AuthConstants.LOGIN_USER:
      setUser(action.profile, action.token, action.auth2);
      AuthStore.emitChange();
      break

    case AuthConstants.LOGOUT_USER:
      removeUser();
      AuthStore.emitChange();
      break

    default:
  }

});

export default AuthStore;