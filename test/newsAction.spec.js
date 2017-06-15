import expect from 'expect';
import axios from 'axios';
import sinon from 'sinon';
import NewsAction from '../src/actions/NewsActions';
import articles from './article.json';
import sources from './sources.json';
import mockData from './mock';

require('./test_helper.js');




describe('AuthActions  :', () => {
  let axiosMock;

  beforeEach(() => {
    axiosMock = sinon.stub(axios, 'get').callsFake(() => (
      Promise.resolve({
        data: {
          articles: articles.articles,
          sources: sources.sources,
        }
      })
    ));
  });

  afterEach(() => {
    axios.get.restore();
  });

  it('calls axios when recieveSources is called', () => (
    NewsAction.recieveSources().then(() => {
      expect(axiosMock.calledOnce).toBeTruthy();
    })
  ));

  it('calls axios when getFilterNewsSource is called', () => (
    NewsAction.getFilterNewsSource().then(() => {
      expect(axiosMock.calledOnce).toBeTruthy();
    })
  ));

  it('calls axios when addFavorite is called', () => {
    localStorage.setItem('omedale@gmail.com', '');
    NewsAction.addFavorite(mockData.singleNews);
    expect(localStorage.getItem('omedale@gmail.com')).toEqual('');
  });
});
