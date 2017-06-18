import React from 'react';

import Header from './Header';

export default class NopageFound extends React.Component {

  render() {
    return (
      <div>
        <div>
          <nav className="navbar navbar-default fixhader">
            <div className="navbar-inner">
              <div className="container-fluid headsty">
                <div className="navbar-header">
                  <a className="navbar-brand" href="/">NewsApp</a>
                </div>
                <div
                  className="collapse navbar-collapse"
                  id="bs-example-navbar-collapse-1"
                >
                  <ul className="nav navbar-nav">
                    <li><a href="/">Sources</a></li>
                    <li><a href="/favorite">Favorite</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="container nopagefound">
          <h3>Ooops!!....  Page not found </h3>
        </div>
      </div>
    );
  }
}
