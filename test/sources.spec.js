
import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Sources from '../src/component/Sources';
import mockData from './mock';

require('./test_helper.js');

function option() {
  const props = {
    location: { action: 'POP', length: 5 },
    history: { hash: '', key: 'aqosvv', pathname: '/', search: '', state: undefined },
    match: { isExact: true, path: '/', url: '/'},
    filterurl: '',
    filterText: '',
  };
  const state = {
    filterText: '',
    filterurl: '',
  };
  const sources = shallow(<Sources{...props} />);
  return {
    props,
    sources,
    state,
  };
}

describe('Sources Component :', () => {
  it('should render self', () => {
    const { sources } = option();
    expect(sources.find('ul').hasClass('dashboard-list')).toBe(true);
  });
  it('should render 2 soources', () => {
    const { sources } = option();
    sources.setState({ sources: mockData.sources });
    expect(sources.find('li').length).toEqual(2);
  });
});








