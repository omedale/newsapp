import EventEmitter from 'events';
import AppDispatcher from '../AppDispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import AuthStore from '../stores/AuthStore';

const CHANGE_EVENT = 'change';

let sources = [];
let filterNews = {};

function setFavorite(news) {
  let favNews = [];
  if (localStorage.getItem(AuthStore.getUserEmail())) {
    favNews = JSON.parse(localStorage.getItem(AuthStore.getUserEmail()));
    favNews.push(news);
  } else {
    favNews.push(news);
  }
  localStorage.removeItem(AuthStore.getUserEmail());
  localStorage.setItem(AuthStore.getUserEmail(), JSON.stringify(favNews));
  alert('News Added to Favorite');
}

function setSources(src) {
  sources = src;
}

function setFilterSource(articles) {
  filterNews = articles;
}

class NewsStoreClass extends EventEmitter {

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  getSources() {
    return sources;
  }

  getFilterSource() {
    return filterNews;
  }

  getFavNews() {
    if (localStorage.getItem(AuthStore.getUserEmail())) {
      return JSON.parse(localStorage.getItem(AuthStore.getUserEmail()));
    }
    localStorage.setItem(AuthStore.getUserEmail(), '');
    return localStorage.getItem(AuthStore.getUserEmail());
  }

}

const NewsStore = new NewsStoreClass();

NewsStore.dispatchToken = AppDispatcher.register((action) => {
  switch (action.actionType) {
    case AppConstants.RECIEVE_SOURCES:
      setSources(action.sources);
      NewsStore.emitChange();
      break;

    case AppConstants.FAV_NEWS:
      setFavorite(action.news);
      NewsStore.emitChange();
      break;

    case AppConstants.RECIEVE_SORT_SOURCE:
      setFilterSource(action.articles);
      NewsStore.emitChange();
      break;

    case AppConstants.RECIEVE_SOURCES_ERROR:
      NewsStore.emitChange();
      break;

    case AppConstants.RECIEVE_SORT_SOURCE_ERROR:
      setFilterSource([]);
      NewsStore.emitChange();
      break;

    default:
  }
});

export default NewsStore;