import AppDispatcher from '../AppDispatcher/AppDispatcher';
import AuthConstants from '../constants/AuthConstants';

const AuthActions = {

  logUserIn: (profil, toke, ath2) => {
    AppDispatcher.dispatch({
      actionType: AuthConstants.LOGIN_USER,
      profile: profil,
      token: toke,
      auth2: ath2,
    });
  },

  logUserOut: () => {
    AppDispatcher.dispatch({
      actionType: AuthConstants.LOGOUT_USER,
    });
  },

};

export default AuthActions;
