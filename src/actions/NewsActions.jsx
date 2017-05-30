import AppDispatcher from '../AppDispatcher/AppDispatcher.jsx';
import AppConstants from '../constants/AppConstants.jsx';
import NewsAPI from '../utils/NewsAPI.jsx';

export default {

  recieveSources: () => {
    NewsAPI
    .getSources('https://newsapi.org/v1/sources?language=en&sortBy=latest&apiKey=213327409d384371851777e7c7f78dfe')
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

  recieveOffSources: () => {
    NewsAPI
    .getOffSources('https://newsapi.org/v1/sources?language=en&sortBy=latest&apiKey=213327409d384371851777e7c7f78dfe')
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
      console.log(message);
    });

  },

  getSource: (id) => {
    NewsAPI
    .getSource("https://newsapi.org/v1/articles?source=" + id + "&sortBy&apiKey=213327409d384371851777e7c7f78dfe")
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
  }

}