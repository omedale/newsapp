import React from 'react';
import { mount } from 'enzyme';
import NoPageFound from '../src/component/NoPageFound';


describe('NoPageFound Component :', () => {
  it('renders without crashing', () => {
    mount(<NoPageFound />);
  });
});