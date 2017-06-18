
import EventEmitter from 'events';
import AppDispatcher from '../AppDispatcher/AppDispatcher';
import AuthConstants from '../constants/AppConstants';

const CHANGE_EVENT = 'change';

export function setUser(profile) {
  if (!localStorage.getItem('omedale_profile')) {
    localStorage.setItem('omedale_profile', JSON.stringify(profile));
  }
}

export function removeUser() {
  localStorage.removeItem('omedale_profile');
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
    if (localStorage.getItem('omedale_profile')) {
      return true;
    }
    return false;
  }
  getUserName() {  
    if (localStorage.getItem('omedale_profile')) {
      const userName = JSON.parse(localStorage.getItem('omedale_profile'));
      return userName.familyName;
    }
    return 'Unknown user';
  }
  getUserEmail() {
    if (localStorage.getItem('omedale_profile')) {
      const userEmail = JSON.parse(localStorage.getItem('omedale_profile'));
      return userEmail.email;
    }
    return 'Unknown';
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