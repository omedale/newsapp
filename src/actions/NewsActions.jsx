import AppDispatcher from '../AppDispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import NewsAPI from '../utils/NewsAPI';

export default {

  addFavorite: (news) => {
    AppDispatcher.dispatch({
      actionType: AppConstants.FAV_NEWS,
      news: news,
    });
  },

  recieveSources: () => {
    NewsAPI
    .getSources('https://newsapi.org/v1/sources?language=en')
    .then((sources) => {
      AppDispatcher.dispatch({
        actionType: AppConstants.RECIEVE_SOURCES,
        sources: sources
      });
    })
    .catch((message) => {
      AppDispatcher.dispatch({
        actionType: AppConstants.RECIEVE_SOURCES_ERROR,
        message: message
      });
    });
  },

  getSource: (id) => {
    NewsAPI
    .getSource('https://newsapi.org/v1/articles?source=' + id + '&sortBy&apiKey=213327409d384371851777e7c7f78dfe')
    .then((source) => {
      AppDispatcher.dispatch({
        actionType: AppConstants.RECIEVE_SOURCE,
        source: source
      });
    })
    .catch((message) => {
      AppDispatcher.dispatch({
        actionType: AppConstants.RECIEVE_SOURCE_ERROR,
        message: message
      });
    });
  },

  getTopSource: (id) => {
    NewsAPI
    .getTopSource('https://newsapi.org/v1/articles?source=' + id + '&sortBy=top&apiKey=213327409d384371851777e7c7f78dfe')
    .then((top) => {
      AppDispatcher.dispatch({
        actionType: AppConstants.RECIEVE_TOP_SOURCE,
        top: top
      });
    })
    .catch((message) => {
      AppDispatcher.dispatch({
        actionType: AppConstants.RECIEVE_TOP_SOURCE_ERROR,
        message: message
      });
    });
  },

  getLatestSource: (id) => {
    NewsAPI
    .getLatestSource('https://newsapi.org/v1/articles?source=' + id + '&sortBy=latest&apiKey=213327409d384371851777e7c7f78dfe')
    .then((latest) => {
      AppDispatcher.dispatch({
        actionType: AppConstants.RECIEVE_LATEST_SOURCE,
        latest: latest
      });
    })
    .catch((message) => {
      AppDispatcher.dispatch({
        actionType: AppConstants.RECIEVE_LATEST_SOURCE_ERROR,
        message: message
      });
    });
  },

  getPopularSource: (id) => {
    NewsAPI
    .getPopularSource('https://newsapi.org/v1/articles?source=' + id + '&sortBy=popular&apiKey=213327409d384371851777e7c7f78dfe')
    .then((latest) => {
      AppDispatcher.dispatch({
        actionType: AppConstants.RECIEVE_LATEST_SOURCE,
        popular: popular
      });
    })
    .catch((message) => {
      AppDispatcher.dispatch({
        actionType: AppConstants.RECIEVE_LATEST_SOURCE_ERROR,
        message: message
      });
    });
  },

};