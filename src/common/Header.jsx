import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {

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
                  <li><Link to="/" className="active" >Home</Link></li>
                  <li><Link to="/news">News</Link></li>
                  <li><Link to="/news">Favorite</Link></li>
                </ul>
                <div className="btn-group pull-right" >
                  <button className="btn btn-default">Logout</button>
                </div>
                 <div className="btn-group pull-right">
                <button className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                    <i className="glyphicon glyphicon-user"></i><span className="hidden-sm hidden-xs"> admin</span>
                    <span className="caret"></span>
                </button>
                <ul className="dropdown-menu">
                    <li><a href="#">Profile</a></li>
                    <li className="divider"></li>
                    <li><a href="login.html">Logout</a></li>
                </ul>
              </div>
              </div>

            </div>
          </nav>
        </div>);
    }
}
