import EventEmitter from 'events';
import AppDispatcher from '../AppDispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import AuthStore from '../stores/AuthStore';

const CHANGE_EVENT = 'change';

let _sources = [];
let _source = {};
let _latestNews = {};
let _topNews = {};
let _popularNews = {};

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
  alert("News Added to Favorite");
}

function setSources(sources) {
  _sources = sources;
}

function setSource(source) {
  _source = source;
}

function setTopSource(top) {
  _topNews = top;
}
function setPopularSource(popular) {
  _popularNews = popular;
}

function setLatestSource(latest) {
  _latestNews = latest;
}

class NewsStoreClass extends EventEmitter {

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }

  getSources = () => {
    return _sources;
  }

  getSource = () => {
    return _source;
  }

  getTopSource = () => {
    return _topNews;
  }

  getLatestSource = () => {
    return _latestNews;
  }

  getPopularSource = () => {
    return _popularNews;
  }

  getFavNews = () => {
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

    case AppConstants.RECIEVE_SOURCE:
      setSource(action.source);
      NewsStore.emitChange();
      break;
    case AppConstants.FAV_NEWS:
      setFavorite(action.news);
      NewsStore.emitChange();
      break;

    case AppConstants.RECIEVE_TOP_SOURCE:
      setTopSource(action.top);
      NewsStore.emitChange();
      break;

    case AppConstants.RECIEVE_LATEST_SOURCE:
      setLatestSource(action.latest);
      NewsStore.emitChange();
      break;

    case AppConstants.RECIEVE_POPULAR_SOURCE:
      setPopularSource(action.popular);
      NewsStore.emitChange();
      break;

    case AppConstants.RECIEVE_SOURCES_ERROR:
      NewsStore.emitChange();
      break;

    case AppConstants.RECIEVE_SOURCE_ERROR:
      NewsStore.emitChange();
      break;

    case AppConstants.RECIEVE_TOP_SOURCE_ERROR:
      NewsStore.emitChange();
      break;

    case AppConstants.RECIEVE_LATEST_SOURCE_ERROR:
      NewsStore.emitChange();
      break;
     case AppConstants.RECIEVE_POPULAR_SOURCE_ERROR:
      NewsStore.emitChange();
      break;

    default:
  }
});

export default NewsStore;