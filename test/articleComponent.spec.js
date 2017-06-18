import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import expect from 'expect';
import Articles from '../src/component/Articles';
import NewsStore from '../src/stores/NewsStore';

import mockData from './mock/mock';

require('./mock/test_helper.js');

localStorage.setItem('omedale_sort_value', JSON.stringify(['top', 'latest']));

describe('Article Component :', () => { 
  const props = {
    location: { pathname: '/articles/abc-news-au/top' },
    history: [{ action: 'POP', push: (path, state) => { return state; } }],
    match: { params: { id: 'abc-news-au' }, isExact: true, path: '/sortedNews/:id', url: '/sortedNews/abc-news-au' },
    filterurl: '',
    filterText: '',
  };
  it('should render 5 articles', () => {
    const article = shallow(<Articles{...props} />)
    article.setState({ sortedArticle: mockData.articles });
    expect(article.find('li').length).toEqual(5);
  });

  it('calls componentWillUnmount', () => {
    const wrapper = shallow(<Articles{...props} />);
    const spy = sinon
    .spy(Articles.prototype, 'componentWillUnmount');
    wrapper.unmount();
    expect(spy.calledOnce).toBeTruthy();
  });
  it('should call filterArticle', () => {
    const article = shallow(<Articles{...props} />);
    const filterArticle = article.instance().filterArticle('lets');
    expect(filterArticle).toEqual(undefined);
  });

  it('calls componentWillReceiveProps and update the state', () => {
    const wrapper = shallow(<Articles{...props} />);
    const spy = sinon.spy(Articles.prototype, 'componentWillReceiveProps');
    expect(spy.calledOnce).toEqual(false);
    wrapper.setProps(props);
    expect(spy.calledOnce).toEqual(true);
  });
});