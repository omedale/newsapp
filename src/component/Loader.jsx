import React from 'react';
import Loading from 'react-loading';

const color = '#1995dc';
const type = 'spinningBubbles';
  /**
    * A loading component
    * @method removeNews
    * @return {void} - return loader
    */
const Loader = () => (
  <Loading type={type} color={color} className="loading" />
);

export default Loader;