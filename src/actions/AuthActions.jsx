import AppDispatcher from '../AppDispatcher/AppDispatcher.jsx';
import AuthConstants from '../constants/AuthConstants.jsx';

export default {

  logUserIn: (profile, token, auth2) => {
    AppDispatcher.dispatch({
      actionType: AuthConstants.LOGIN_USER,
      profile: profile,
      token: token,
      auth2: auth2,
    });
  },

  logUserOut: () => {
    AppDispatcher.dispatch({
      actionType: AuthConstants.LOGOUT_USER,
    });
  }

}