import React from 'react';
import PropTypes from 'prop-types';
import AuthActions from '../actions/AuthActions';
import AuthStore from '../stores/AuthStore';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: AuthStore.getUserName(),
      userEmail: AuthStore.getUserEmail(),
    };
  }


  signOut() {
    AuthActions.logUserOut();
    this.props.history.push('/login');
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="navbar-inner nav-inner">
            <div className="">
              <div className="navbar-header">
                <a className="navbar-brand" href="/">NewsApp</a>
              </div>
              <div className="">
                <ul className="nav navbar-nav">
                  <li><a href="/">Sources</a></li>
                  <li><a href="/favorite">Favorite</a></li>
                </ul>
                <div className="btn-group pull-right">
                  <button
                    className="btn btn-default dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <i
                      className="fa fa-user-circle iconspace"
                      aria-hidden="true"
                    />
                    <span
                      className="hidden-sm hidden-xs"
                    >
                      {this.state.userName}</span>
                    <span className="caret" />
                  </button>
                  <ul className="dropdown-menu">
                    <li className="divider" />
                    <li>
                      <a href="" onClick={this.signOut}>Logout</a></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </nav>
      </div>);
  }
}
Header.propTypes = {
  history: PropTypes.any.isRequired,
};