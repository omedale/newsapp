import React from 'react';
import { mount } from 'enzyme';
import Loader from '../../src/component/Loader';

describe('Loading Component :', () => {
  it('renders without crashing', () => {
    mount(<Loader />);
  });
});