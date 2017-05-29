import React, { Component } from "react";
import {  Link } from 'react-router-dom';
import style from './main.scss';
import "./main.scss";
import AlertContainer from 'react-alert'
import NewsActions from '../actions/NewsActions.jsx';
import NewsStore from "../stores/NewsStore.jsx";
import AuthStore from '../stores/AuthStore.jsx';
class Headlines extends Component {

  constructor() {
    super();
    this.state = {
     authenticated: AuthStore.isAuthenticated(),
      headlines: [],
    };
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