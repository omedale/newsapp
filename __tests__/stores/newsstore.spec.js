
import expect from 'expect';
import {
  setFavorite,
} from '../../src/stores/NewsStore';
import NewsStore from '../../src/stores/NewsStore';
import mockData from '../../mock/mock';
import sources from '../../mock/sources.json';
import articles from '../../mock/article.json';
import AppDispatcher from '../../src/AppDispatcher/AppDispatcher';

jest.mock('../../src/AppDispatcher/AppDispatcher');
const mockDispatcher = AppDispatcher.register.mock.calls[0][0];

require('../../mock/test_helper.js');

localStorage.setItem('omedale_profile', JSON.stringify(mockData.googleProfile));
localStorage.setItem('omedale@gmail.co', JSON.stringify(mockData.singleNews));

const newsActionSources = {
  actionType: 'RECIEVE_SOURCES',
  sources
};
const newsActionArticles = {
  actionType: 'RECIEVE_SORT_SOURCE',
  articles
};

describe('NewsStore  :', () => {
  it('should register a callback with the dispatcher', () => {
    expect(mockDispatcher.length).toBe(1);
  });
  it('contain a method emitChange', () => {
    mockDispatcher(newsActionSources);
    mockDispatcher(newsActionArticles);
    expect(setFavorite(mockData.singleNews)).toEqual(true);
  });

  it('should register all sources', () => {
    mockDispatcher(newsActionSources);
    mockDispatcher(newsActionArticles);
    const result = (NewsStore.getSources());
    expect(result).toEqual([]);
  });
});