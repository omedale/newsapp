import AppDispatcher from '../AppDispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import NewsAPI from '../utils/NewsAPI';

export default {

  addFavorite: (favnews) => {
    AppDispatcher.dispatch({
      actionType: AppConstants.FAV_NEWS,
      news: favnews,
    });
  },

  recieveSources: () => {
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

  getFilterNewsSource: (id, filter) => {
    return NewsAPI
    .getFilterNewsSource(`https://newsapi.org/v1/articles?source=${id}&sortBy=${filter}&apiKey=213327409d384371851777e7c7f78dfe`)
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