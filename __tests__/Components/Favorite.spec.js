
import React from 'react';
import { shallow, mount } from 'enzyme';
import expect from 'expect';
import sinon from 'sinon';
import FavoriteNews from '../../src/component/FavoriteNews';
import mockData from '../../mock/mock';

require('../../mock/test_helper.js');

localStorage.setItem('omedale_profile', JSON.stringify(mockData.googleProfile));
localStorage.setItem('omedale_profile_email', 'omedale@gmail.com');
localStorage.getItem('omedale@gmail.com');

describe('FavoriteNews Component :', () => { 
  let props;
  beforeEach(() => {
    props = {
      location: { pathname: '/articles/abc-news-au/top' },
      history: { action: 'POP', push: (path, state) => { return state; } },
      match: { params: { id: 'abc-news-au' },
        isExact: true, path: '/sortedNews/:id', url: '/sortedNews/abc-news-au' },
      filterurl: '',
      filterText: '',
    };
  });
  it('renders without crashing', () => {
    mount(<FavoriteNews {...props} />);
  });
  it('should render 5 articles', () => {
    const favorite = shallow(<FavoriteNews{...props} />)
    favorite.setState({ favoritenews: mockData.articles });
    expect(favorite.find('li').length).toEqual(5);
  });
  it('method deleteAll returns true', () => {
    const wrapper = mount(<FavoriteNews {...props} />);
    expect(wrapper.instance().deleteAll()).toBeTruthy();
  });
  it('contains a removeNews method', () => {
    localStorage.setItem('omedale@gmail.co',
    JSON.stringify(mockData.articles));
    const wrapper = shallow(<FavoriteNews {...props} />);
    expect(wrapper.instance().removeNews()).toEqual(true);
  });
  it('contains a setDeleteItem method', () => {
    const wrapper = shallow(
      <FavoriteNews
        {...props}
        favorite={mockData.articles} 
      />);
    wrapper.instance().setDeleteItem(mockData.singleNews);
    expect(localStorage.getItem('omedale_confirm_delete'))
    .toEqual(JSON.stringify(mockData.singleNews));
  });
  it('should return new favorite list after delete', () => {
    localStorage.setItem('omedale@gmail.co', JSON
    .stringify(mockData.singleNewsObject));
    localStorage
    .setItem('omedale_confirm_delete', JSON.stringify(mockData.setNews));
    const wrapper = shallow(
      <FavoriteNews
        {...props}
      />);
    wrapper.instance().deleteFavorite();
    expect(JSON.parse(localStorage.getItem('omedale@gmail.co')))
    .toEqual(mockData.afterDelete);
  });
});
