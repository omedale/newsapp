import AppDispatcher from '../AppDispatcher/AppDispatcher';
import AuthConstants from '../constants/AppConstants';

const AuthActions = {
// logUserIn action dispatches user profile to the store
  logUserIn: (profile) => {
    AppDispatcher.dispatch({
      profile,
      actionType: AuthConstants.LOGIN_USER,
    });
    return true;
  },
// logUserOut action dispatches action type to the store to remove user
  logUserOut: () => {
    AppDispatcher.dispatch({
      actionType: AuthConstants.LOGOUT_USER,
    });
    return true;
  },
};

export default AuthActions;
