import React from 'react';
import { mount } from 'enzyme';
import LoadingComponent from '../src/component/LoadingComponent';

describe('Loading Component :', () => {
  it('renders without crashing', () => {
    mount(<LoadingComponent />);
  });
});