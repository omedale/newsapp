import React from 'react';
import { Link } from 'react-router-dom';
import AuthActions from '../actions/AuthActions';

export default class Header extends React.Component {

  signOut = () => {
    AuthActions.logUserOut();
    this.props.history.push('/login');
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">NewsApp</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><Link to="/">News</Link></li>
                <li><Link to="/news">Favorite</Link></li>
              </ul>
              <div className="btn-group pull-right">
                <button className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                  <i className="glyphicon glyphicon-user" />
                  <span className="hidden-sm hidden-xs"> admin</span>
                  <span className="caret" />
                </button>
                <ul className="dropdown-menu">
                  <li><a href="">Profile</a></li>
                  <li className="divider" />
                  <li><a href="" onClick={this.signOut}>Logout</a></li>
                </ul>
              </div>
            </div>

          </div>
        </nav>
      </div>);
  }
}