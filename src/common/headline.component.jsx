import React, { Component } from "react";
import { BrowserRouter as Router, Route, browserHistory, Link, IndexRoute } from 'react-router-dom';
import style from './main.scss';
import "./main.scss";
import AlertContainer from 'react-alert'
// import { Link } from 'react-router';
import NewsActions from "../actions/NewsActions.jsx";
import NewsStore from "../stores/NewsStore.jsx";

import AuthStore from '../stores/AuthStore.jsx';
import AuthActions from "../actions/AuthActions.jsx";

// We'll use this function to get a contact
// list item for each of the contacts in our list

class Headlines extends Component {

  constructor() {
    super();
    // For our initial state, we just want
    // an empty array of contacts
    this.state = {
     authenticated: AuthStore.isAuthenticated(),
      headlines: [],
    };
    // We need to bind this to onChange so we can have
    // the proper this reference inside the method
    this.onChange = this.onChange.bind(this);
  }
          checkUser(){
            if(this.state.authenticated === false){
              this.props.history.push('/login');
            }
        }

  componentWillMount() {
      this.checkUser();
    NewsStore.addChangeListener(this.onChange);
  }

  componentDidMount() {
      console.log(this.props.match.params.id);
   // NewsActions.recieveOffSources();
    NewsActions.getSource(this.props.match.params.id);
  }

  componentWillUnmount() {
    NewsStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      headlines: NewsStore.getSource(),
    });
  }

  render() {
      // Map over the contacts and get an element for each of them
       const newsNode = this.state.headlines.map((source) => {
            return (
                  <Link
                    to={source.url}
                    className="list-group-item"
                    key={source.url}
                    target="_blank">
                    {source.title}
                </Link>
            )
        });

    return (

      <div>
           <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">NewsApp</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                            <ul className="nav navbar-nav">
                                <li><Link to="/" className="active" >Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                 <li><Link to="/login">Login</Link></li>
                                <li><Link to="/news">News</Link></li>

                            </ul>

                        </div>
                    </div>
                </nav>
            <div>
                <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
            </div>
                <h1 className={`${style.card} card`}>Headline</h1>
                <div className="list-group">
                    {newsNode}
          </div>
      </div>
    );
  }
}

export default Headlines;