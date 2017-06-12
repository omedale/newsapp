import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import expect from 'expect';
import Articles from '../src/component/Articles';

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
  const article = shallow(<Articles{...props} />);
  return {
    props,
    article,
    state,
  };
}

describe('Article Component :', () => {
  it('has list element with class dashboard-list', () => {
    const { article } = option();
    expect(article.find('ul').hasClass('dashboard-list')).toBe(true);
  });
  it('should render 5 articles', () => {
    const { article } = option();
    article.setState({ sortedArticle: mockData.articles });
    expect(article.find('li').length).toEqual(5);
  });
  it('should render 5 images', () => {
    const { article } = option();
    article.setState({ sortedArticle: mockData.articles });
    expect(article.find('img').length).toEqual(5);
  });
  it('should render 5 images', () => {
    const { article } = option();
    expect(article.find('Header').length).toEqual(1);
  });
  it('should contain 9 div', () => {
    const { article } = option();
    expect(article.find('div').length).toEqual(9);
  });
  it('should have state.authenticated = false', () => {
    const { article } = option();
    expect(article.state('authenticated')).toEqual(false);
  });
});
