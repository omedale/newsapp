import React from 'react';
import PropTypes from 'prop-types';
import GoogleLogin from 'react-google-login';
import AlertContainer from 'react-alert';
import AuthStore from '../stores/AuthStore';
import AuthActions from '../actions/AuthActions';

export default class Login extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.onSuccess = this.onSuccess.bind(this);
    this.state = {
      authenticated: AuthStore.isAuthenticated(),
      auth: {},
    };
  }

  componentWillMount() {
    if (this.state.authenticated === true) {
      this.props.history.push('/');
    }
  }

  onSuccess(response) {
    this.setState({ auth2: gapi.auth2.getAuthInstance() });
    AuthActions.logUserIn(response.profileObj);
    this.state.auth2.disconnect().then(() => {

    });
    this.props.history.push('/');
  }

  errorResp() {
    this.msg.show('Error in connection', {
      time: 4000,
      position: 'top left',
      type: 'success',
    });
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
          <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
          <div className="well col-md-5 center login-box">
            <div className="alert alert-info">
            Please login with your Google account.
            </div>
            <div>

              <GoogleLogin
                clientId={'119051801386-fm4u444ls4fv0djtbac2u2lrseis815i.apps.googleusercontent.com'}
                onSuccess={this.onSuccess}
                onFailure={this.errorResp}
                offline={false}
              >
                <i className="fa fa-google-plus iconspace" aria-hidden="true" />
                <span>Login with Google</span>
              </GoogleLogin>
            </div>

          </div>
        </div>
      </div>


    );
  }
}

Login.propTypes = {
  history: PropTypes.any.isRequired,
};




