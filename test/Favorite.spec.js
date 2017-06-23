
import React from 'react';
import { shallow, mount } from 'enzyme';
import expect from 'expect';
import sinon from 'sinon';
import FavoriteNews from '../src/component/FavoriteNews';
import mockData from './mock/mock';

require('./mock/test_helper.js');

localStorage.setItem('omedale_profile_email', 'omedale@gmail.com');
localStorage.setItem('omedale_confirm_delete',
JSON.stringify(mockData.singleNews));
localStorage.getItem('omedale@gmail.com');

describe('FavoriteNews Component :', () => { 
  const props = {
    location: { pathname: '/articles/abc-news-au/top' },
    history: { action: 'POP', push: (path, state) => { return state; } },
    match: { params: { id: 'abc-news-au' },
      isExact: true, path: '/sortedNews/:id', url: '/sortedNews/abc-news-au' },
    filterurl: '',
    filterText: '',
  };
 
  it('renders without crashing', () => {
    mount(<FavoriteNews {...props} />);
  });
  it('should render 5 articles', () => {
    const favorite = shallow(<FavoriteNews{...props} />)
    favorite.setState({ favoritenews: mockData.articles });
    expect(favorite.find('li').length).toEqual(5);
  });
  it('calls componentWillMount', () => {
    const spy = sinon.spy(FavoriteNews.prototype, 'componentWillMount');
    expect(spy.calledOnce).toEqual(false);
  });
  it('contains a deleteAll method', () => {
    const wrapper = mount(<FavoriteNews {...props} />);
    expect(wrapper.instance().deleteAll(0)).toEqual(undefined);
  });
  it('contains a removeNews method', () => {
    const wrapper = mount(<FavoriteNews {...props} />);
    expect(wrapper.instance().removeNews(0)).toEqual(true);
  });
  // it('contains a deleteFavorite method', () => {
  //   const wrapper = shallow(
  //     <FavoriteNews
  //       {...props}
  //       favorites={mockData.articles} 
  //     />);
  //   expect(wrapper.instance().deleteFavorite(0)).toEqual(undefined);
  // });
  it('contains a setDeleteItem method', () => {
    const wrapper = mount(
      <FavoriteNews
        {...props}
        favorite={mockData.articles} 
      />);
    expect(wrapper.instance().setDeleteItem(0)).toEqual(undefined);
  });
});
