import AppDispatcher from '../AppDispatcher/AppDispatcher';
import AuthConstants from '../constants/AppConstants';

const AuthActions = {

  logUserIn: (profile) => {
    AppDispatcher.dispatch({
      profile,
      actionType: AuthConstants.LOGIN_USER,
    });
    return true;
  },

  logUserOut: () => {
    AppDispatcher.dispatch({
      actionType: AuthConstants.LOGOUT_USER,
    });
    return true;
  },
};

export default AuthActions;
