import expect from 'expect';
import axios from 'axios';
import sinon from 'sinon';
import NewsAction from '../src/actions/NewsActions';
import dispatcher from '../src/AppDispatcher/AppDispatcher';
import articles from './mock/article.json';
import sources from './mock/sources.json';
import mockData from './mock/mock';

require('./mock/test_helper.js');

describe('AuthActions  :', () => {
  let axiosMock;
  let dispatcherSpy;

  beforeEach(() => {
    axiosMock = sinon.stub(axios, 'get').callsFake(() => (
      Promise.resolve({
        data: {
          articles: articles.articles,
          sources: sources.sources,
        }
      })
    ));
    dispatcherSpy = sinon.spy(dispatcher, 'dispatch');
  });

  afterEach(() => {
    axios.get.restore();
    dispatcher.dispatch.restore();
  });

  it('calls axios when recieveSources is called', () => (
    NewsAction.recieveSources().then(() => {
      expect(axiosMock.calledOnce).toBeTruthy();
      expect(dispatcherSpy.calledOnce).toEqual(true);
      dispatcher.dispatch({
        sources,
        action: 'RECIEVE_SOURCES'
      });
      expect(dispatcherSpy.getCall(0).args[0].actionType).toBe('RECIEVE_SOURCES');
    })
  ));

  it('calls axios when getFilterNewsSource is called', () => (
    NewsAction.getFilterNewsSource().then(() => {
      expect(axiosMock.calledOnce).toBeTruthy();
      expect(dispatcherSpy.calledOnce).toEqual(true);
      dispatcher.dispatch({
        sources,
        action: 'RECIEVE_SORT_SOURCE'
      });
      expect(dispatcherSpy.getCall(0).args[0].actionType).toBe('RECIEVE_SORT_SOURCE');
    })
  ));

  it('calls axios when addFavorite is called', () => {
    localStorage.setItem('omedale@gmail.com', '');
    NewsAction.addFavorite(mockData.singleNews);
    expect(localStorage.getItem('omedale@gmail.com')).toEqual('');
  });
});
