import React from 'react';
import { shallow, mount } from 'enzyme';
import expect from 'expect';
import Header from '../../src/component/Header';

require('../../mock/test_helper.js');

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
  it('renders 2 links', () => {
    const { header } = option();
    expect(header.find('a').length).toEqual(2);
  });
  it('should return user redirect to login page', () => {
    const { header, props } = option();
    const headerInstance = header.instance().signOut();
    expect(headerInstance).toBeTruthy();
    expect(props.history).toEqual('/login');
  });
  it('method showSources should redirect to sources page', () => {
    const { header, props } = option();
    header.instance().showSources();
    expect(props.history).toEqual('/');
  });
  it('method showFavorite should redirect user to favorite page', () => {
    const { header, props } = option();
    header.instance().showFavorite();
    expect(props.history).toEqual('/favorite');
  });
});