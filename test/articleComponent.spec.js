import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import expect from 'expect';
import Articles from '../src/component/Articles';
import NewsStore from '../src/stores/NewsStore';

import mockData from './mock';

require('./test_helper.js');

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
    const article  = shallow(<Articles{...props} />)
    article.setState({ sortedArticle: mockData.articles });
    expect(article.find('li').length).toEqual(5);
  });
});
