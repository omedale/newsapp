import React from 'react';

import Header from './Header';

export default class NopageFound extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <h3>Ooops!!....  Page not found </h3>
        </div>
      </div>
    );
  }
}
