import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Header from '../src/component/Header';

require('./mock/test_helper.js');

function option() {
  const props = {
    location: { action: 'PUSH', length: 5 },
    history: [],
    match: { isExact: true, path: '/sortedNews/:id', url: '/sortedNews/abc-news-au' },
  };
  const header = shallow(<Header{...props} />);
  return {
    props,
    header,
  };
}


describe('Search Component :', () => {
  it('should contain 6 div', () => {
    const { header } = option();
    expect(header.find('div').length).toEqual(6);
  });
  it('renders three links', () => {
    const { header } = option();
    expect(header.find('a').length).toEqual(4);
  });
  it('should have method signOut', () => {
    const { header } = option();
    const headerInstance = header.instance().signOut();
    expect(headerInstance).toEqual(undefined);
  });
});
