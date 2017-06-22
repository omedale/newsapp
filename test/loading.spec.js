import React from 'react';
import { mount } from 'enzyme';
import Loading from '../src/component/Loader';

describe('Loading Component :', () => {
  it('renders without crashing', () => {
    mount(<Loading />);
  });
});