import React from 'react';
import Loading from 'react-loading';

const color = '#1995dc';
const type = 'spinningBubbles';
// Loading component
// Display while loading article and sources
const Loader = () => (
  <Loading type={type} color={color} className="loading" />
);

export default Loader;