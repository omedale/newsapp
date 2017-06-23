import AppDispatcher from '../AppDispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import NewsAPI from '../utils/NewsAPI';

export default {
// addFavorite action dispatches favorite news to store
  addFavorite(news) {
    AppDispatcher.dispatch({
      news,
      actionType: AppConstants.FAV_NEWS,
    });
  },
// recieveSources action get sources from axios and dispatch to store
  recieveSources() {
    return NewsAPI
    .getSources('https://newsapi.org/v1/sources?language=en')
    .then((src) => {
      AppDispatcher.dispatch({
        actionType: AppConstants.RECIEVE_SOURCES,
        sources: src,
      });
    })
    .catch((msg) => {
      AppDispatcher.dispatch({
        actionType: AppConstants.RECIEVE_SOURCES_ERROR,
        message: msg,
      });
    });
  },
// getFilterNewsArticle action get articles based on
// source id and sortype from axios and dispatch to store
  getFilterNewsArticle(id, filter) {
    return NewsAPI
    .getFilterNewsArticle(`https://newsapi.org/v1/articles?source=${id}&sortBy=${filter}&apiKey=213327409d384371851777e7c7f78dfe`)
    .then((articles) => {
      AppDispatcher.dispatch({
        actionType: AppConstants.RECIEVE_SORT_SOURCE,
        articles,
      });
    })
    .catch((msg) => {
      AppDispatcher.dispatch({
        actionType: AppConstants.RECIEVE_SORT_SOURCE_ERROR,
        message: msg,
      });
    });
  },
};