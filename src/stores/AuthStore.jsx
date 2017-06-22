
import EventEmitter from 'events';
import AppDispatcher from '../AppDispatcher/AppDispatcher';
import AuthConstants from '../constants/AppConstants';

const CHANGE_EVENT = 'change';

 /**
   * Set user profile
   * @method setUser
   * @param {object} profile
   * @return {void} - set profile
   */
export function setUser(profile) {
  if (!localStorage.getItem('omedale_profile')) {
    localStorage.setItem('omedale_profile', JSON.stringify(profile));
  }
}
 /**
   * Remove user profile
   * @method removeUser
   * @return {void} - remove user
   */
export function removeUser() {
  localStorage.removeItem('omedale_profile');
}

/**
 * Create a EventEmmiter
 * @class AuthStoreClass
 */
class AuthStoreClass extends EventEmitter {
 /**
   * Emit changes in the store
   * @method emitChange
   * @return {event} - emit changes
   */
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  /**
   * Add event listener to the store
   * @method addChangeListener
   * @param {func} callback
   * @return {event} - add event
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  /**
   * Remove event listener to the store
   * @method removeChangeListener
   * @param {func} callback
   * @return {void} - remove event
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
/**
   * verifies if user has sign in or not
   * @method isAuthenticated
   * @return {boolean} - true or false
   */
  isAuthenticated() {
    if (localStorage.getItem('omedale_profile')) {
      return true;
    }
    return false;
  }
/**
   * Get current user name
   * @method getUserName
   * @return {string} - user familyname
   */
  getUserName() {  
    if (localStorage.getItem('omedale_profile')) {
      const userName = JSON.parse(localStorage.getItem('omedale_profile'));
      return userName.familyName;
    }
    return 'Unknown user';
  }
/**
   * Get current user email
   * @method getUserEmail
   * @return {string} - user email
   */
  getUserEmail() {
    if (localStorage.getItem('omedale_profile')) {
      const userEmail = JSON.parse(localStorage.getItem('omedale_profile'));
      return userEmail.email;
    }
    return 'Unknown';
  }
}

// create a new instance of `NewsStoreClass`
const AuthStore = new AuthStoreClass();

// register a dispatcher and emit event base on the triggered action
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