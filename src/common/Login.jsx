import React from 'react';
import GoogleLogin from 'react-google-login';
import AuthStore from '../stores/AuthStore';
import AuthActions from '../actions/AuthActions';

class Login extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.goHome = this.goHome.bind(this);
    this.state = {
      authenticated: AuthStore.isAuthenticated(),
      auth: {},
    };
  }

  goHome = (response) => {
    localStorage.removeItem('omedale_profile');
    localStorage.removeItem('omedale_id_token');
    localStorage.removeItem('omedale_profile_name');
    localStorage.removeItem('omedale_profile_email');
    this.setState({ auth2: gapi.auth2.getAuthInstance() });
    AuthActions.logUserIn(response.profileObj, response.tokenId, this.state.auth2);
    this.state.auth2.disconnect().then(function () {

    });
    this.props.history.push('/');
  }

  goLogin = () => {
    alert('Ooops! .... connection error ');
  }

  refreshing = () => {
    window.location.reload();
  }

  componentWillMount() {
    if (this.state.authenticated === true) {
      this.props.history.push('/news');
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12 center login-header">
            <h2>Welcome to NewsApp</h2>
          </div>
        </div>
        <div className="row">
          <div className="well col-md-5 center login-box">
            <div className="alert alert-info">
            Please login with your Google account.
            </div>
            <div>

              <GoogleLogin
                clientId={'119051801386-fm4u444ls4fv0djtbac2u2lrseis815i.apps.googleusercontent.com'}
                onSuccess={this.goHome}
                onFailure={this.goLogin}
                offline={false}
              >
                <span> Login with Google</span>
              </GoogleLogin>
            </div>

          </div>
        </div>
      </div>


    );
  }
}

export default Login;


