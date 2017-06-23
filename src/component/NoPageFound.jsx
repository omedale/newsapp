import React from 'react';

/**
 * Create a react component
 * @class NopageFound
 */
export default class NopageFound extends React.Component {
/**
   * Render react component
   * @method render
   * @return {function} react-component
   */
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
