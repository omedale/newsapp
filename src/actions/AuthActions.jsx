import AppDispatcher from '../AppDispatcher/AppDispatcher';
import AuthConstants from '../constants/AuthConstants';

const AuthActions = {

  logUserIn: (profile, token) => {
    AppDispatcher.dispatch({
      profile,
      token,
      actionType: AuthConstants.LOGIN_USER,
    });
  },

  logUserOut: () => {
    AppDispatcher.dispatch({
      actionType: AuthConstants.LOGOUT_USER,
    });
  },

};

export default AuthActions;
