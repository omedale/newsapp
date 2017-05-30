import React  from 'react';
import GoogleLogin from 'react-google-login';
import FontAwesome from 'react-fontawesome';
import { BrowserRouter as Router, Route, browserHistory, Link, IndexRoute } from 'react-router-dom';

import AuthActions from "../actions/AuthActions.jsx";
import AuthStore from "../stores/AuthStore.jsx";

class Login extends React.Component {
constructor(props, context) {
super(props, context);
this.goHome = this.goHome.bind(this);
this.signOut = this.signOut.bind(this);
this.signOuta = this.signOuta.bind(this);
this.state={
  token: 2,
  auth: {},
}
}

goToHome(e) {
this.props.history.push('/');
              // dispatch(setRedirectUrl(currentURL))
              // browserHistory.replace("/login")
            }

            responseGoogle (response) {
             console.log(this.props);
             let sigined = '';
             const auth2 = gapi.auth2.getAuthInstance();
             if(auth2.isSignedIn.Ab === false){
              alert("Ooops! ....connection error");
              sigined = 'loggedin';
            }


            console.log(response);
            console.log(response.profileObj);
            console.log("we are in");


              //anything else you want to do(save to localStorage)...
            }

            goHome( response) {
              this.setState({auth2: gapi.auth2.getAuthInstance() });
              AuthActions.logUserIn(response.profileObj, response.tokenId, this.state.auth2);
              this.state.auth2.disconnect().then(function () {
                console.log('User signed out.');
              });
              this.props.history.push('/');
            }
            goLogin( response) {
              console.log(response);
            }

            handleSuccess (response) {
              console.log("success");
            }
            handleSuccess (response) {
              console.log("fail");
            }


            signOuta(e) {
              window.location.reload();
            }

            refreshing(e) {
              window.location.reload();
            }



            signOut(e) {
              this.refreshing();
              console.log("user signing out")
              var auth2 = gapi.auth2.getAuthInstance();
              console.log(auth2);
              console.log(auth2.isSignedIn.Ab);
              auth2.disconnect().then(function () {
                console.log('User signed out.');
                var auth3 = gapi.auth2.getAuthInstance();

                console.log(auth3.isSignedIn.Ab);
              });


            }

            redirectHome=()=> {
              console.log(localStorage.getItem('loggedToken'));
              if(localStorage.getItem('loggedToken') === 'trill'){
               localStorage.setItem('loggedToken', 'kill');
             }
             console.log(localStorage.getItem('loggedToken'));

             if(this.state.token===''){
              this.props.history.push('/');
            }
          }

          componentDidMount(){

          }

          render(){

     // this.redirectHome();
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
      Please login with your Username and Password.
      </div>
      <div className="col-md-12">
      <button onClick={this.goHome}> Go home</button>
      </div>
      <div className="col-md-12">
      <button onClick={this.signOut}> Sign out</button>
      </div>
      <div className="col-md-12">
      <button onClick={this.signOuta}> Sign outaaa</button>
      </div>

      <div>

      <GoogleLogin
                             // remember to add ur heroku url to the google client id authoize url origin
                             // goto https://developers.google.com/identity/sign-in/web/devconsole-project
                             clientId={'119051801386-fm4u444ls4fv0djtbac2u2lrseis815i.apps.googleusercontent.com'}
                             onSuccess={this.goHome}
                             onFailure={this.goLogin}
                             offline={false}
                             >
                             <FontAwesome
                             name='google'
                             />
                             <span> Login with Google</span>
                             </GoogleLogin>
                             </div>

                             </div>
                             </div>
                             </div>


                             );
}
}

export default Login


