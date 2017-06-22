
import expect from 'expect';
import {
  setFavorite,
  setSources,
} from '../src/stores/NewsStore';
import NewsStore from '../src/stores/NewsStore';
import mockData from './mock/mock';
import sources from './mock/sources.json';
import articles from './mock/article.json';

require('./mock/test_helper.js');

localStorage.setItem('omedale_profile', JSON.stringify(mockData.googleProfile));

describe('NewsStore  :', () => {
  it('contain funtion getFilterSource', () => {
    expect(NewsStore.getFilterSource()).toEqual({});
  });
  it('contain funtion getSources', () => {
    expect(NewsStore.getSources()).toEqual([]);
  });
  it('contain funtion emitChange', () => {
    expect(NewsStore.emitChange()).toEqual(undefined);
  });
  it('contain funtion addChangeListener', () => {
    function callback() {
      return 'tt';
    }
    expect(NewsStore.addChangeListener(callback)).toEqual(undefined);
  });
  it('contain funtion removeChangeListener', () => {
    function callback() {
      return 'tt';
    }
    expect(NewsStore.removeChangeListener(callback)).toEqual(undefined);
  });
  it('should call setSources', () => {
    expect(setSources(sources)).toEqual(undefined);
  });
  it('should call setFavorite', () => {
    expect(setFavorite(mockData.singleNews)).toEqual(undefined);
  });
});

