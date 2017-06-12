
import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import FavoriteNews from '../src/component/FavoriteNews';
import mockData from './mock';

require('./test_helper.js');

function option() {
  const props = {
    location: { action: 'PUSH', length: 5 },
    history: { hash: '', key: 'aqosvv', pathname: '/sortedNews/abc-news-au', search: '', state: undefined },
    match: { isExact: true, path: '/sortedNews/:id', url: '/sortedNews/abc-news-au' },
    filterurl: '',
    filterText: '',
  };
  const state = {
    filterText: '',
    filterurl: '',
  };
  const favorite = shallow(<FavoriteNews{...props} />);
  return {
    props,
    favorite,
    state,
  };
}


describe('Favorite Component :', () => {
  it('should render self', () => {
    const { favorite } = option();
    expect(favorite.find('ul').hasClass('dashboard-list')).toBe(true);
  });
  it('should render 5 favorite news', () => {
    const { favorite } = option();
    favorite.setState({ favoritenews: mockData.articles });
    expect(favorite.find('li').length).toEqual(5);
  });
});
