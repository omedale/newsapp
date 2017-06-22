import React from 'react';
import PropTypes from 'prop-types';
import AuthActions from '../actions/AuthActions';
import AuthStore from '../stores/AuthStore';

/**
 * Create a react component
 * @class Header
 */
export default class Header extends React.Component {
 /**
   * Create a constructor
   * @constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      userName: AuthStore.getUserName(),
      userEmail: AuthStore.getUserEmail(),
    };
  }

  /**
   * Sign Out user
   * @method filterFavorites
   * @return {void} - sign out user
   */
  signOut() {
    AuthActions.logUserOut();
    this.props.history.push('/login');
  }
/**
   * Navigate to sources page
   * @method showSources
   * @return {void} - navigate
   */
  showSources() {
    this.props.history.push('/');
  }
/**
   * Navigate to favorite page
   * @method showSources
   * @return {void} - navigate
   */
  showFavorite() {
    this.props.history.push('/favorite');
  }
/**
   * Render react component
   * @method render
   * @return {function} react-component
   */
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
                  <li><button className="navbtn" onClick={() => this.showSources()} >Sources</button></li>
                  <li><button className="navbtn" onClick={() => this.showFavorite()}>Favorite</button></li>
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
                      className="hidden-sm hidden-xs userName"
                    >
                      {this.state.userName}</span>
                    <span className="caret" />
                  </button>
                  <ul className="dropdown-menu">
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