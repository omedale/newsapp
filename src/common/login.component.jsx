import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { BrowserRouter as Router, Route, browserHistory, Link, IndexRoute } from 'react-router-dom';

class Login extends React.Component {
     constructor(props, context) {
    super(props, context);
     this.goHome = this.goHome.bind(this);
     this.signOut = this.signOut.bind(this);
    this.state={
        token: 2
    }
  }

            responseGoogle (response) {

               var auth2 = gapi.auth2.getAuthInstance();
                if(auth2.isSignedIn.Ab === false){
                    alert("Ooops! ....connection error");
                     this.props.history.push('/');
                    return;
                }
                console.log(response);
                console.log(response.profileObj)
                //anything else you want to do(save to localStorage)...
            }

                goHome(e) {
                e.preventDefault();
                this.props.history.push('/');
            }

            handleSuccess (response) {
                console.log("success");
            }
            handleSuccess (response) {
                console.log("fail");
            }



        signOut(e) {

              // gapi.auth2.GoogleAuth.signOut();

            //  gapi.signin2.render("116879242746092089539",{
            //     scope: 'omedale@gmail.com',
            //     width: 200,
            //     height: 50,
            //     longtitle: true,
            //     theme: 'dark',
            //     onsuccess: this.handleSuccess,
            //     onfailure: this.handleFailure
            //     });

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

    render(){
        this.redirectHome();
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

                       <div>
                               <GoogleLogin
                                    clientId={'658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'}
                                    onSuccess={this.responseGoogle}
                                    onFailure={this.responseGoogle}
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

export default Login


