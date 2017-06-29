import EventEmitter from 'events';
import AppDispatcher from '../AppDispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import AuthStore from '../stores/AuthStore';
import NewsAPI from '../utils/NewsAPI';

const CHANGE_EVENT = 'change';

let sources = [];
let filterNews = {};
/**
   * Set favorite neews
   * @method setFavorite
   * @param {object} news
   * @return {void} - set profile
   */
export function setFavorite(news) {
  let favNews = [];
  if (localStorage.getItem(AuthStore.getUserEmail())) {
    favNews = JSON.parse(localStorage.getItem(AuthStore.getUserEmail()));
    favNews.push(news);
  } else {
    favNews.push(news);
  }
  localStorage.removeItem(AuthStore.getUserEmail());
  localStorage.setItem(AuthStore.getUserEmail(), JSON.stringify(favNews));
  return true;
}
/**
   * Set news sources
   * @method setSources
   * @param {object} src
   * @return {void} - set sources
   */
export function setSources(src) {
  sources = src;
}
/**
   * Set articles
   * @method setFilterSource
   * @param {object} articles
   * @return {void} - set articles
   */
export function setFilterSource(articles) {
  filterNews = articles;
}


/**
 * Create a EventEmmiter
 * @class NewsStoreClass
 */
class NewsStoreClass extends EventEmitter {
/**
   * Emit changes in the store
   * @method emitChange
   * @return {event} - emit changes
   */
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  /**
   * Add event listener to the store
   * @method addChangeListener
   * @param {func} callback
   * @return {event} - add event
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  /**
   * Remove event listener to the store
   * @method removeChangeListener
   * @param {func} callback
   * @return {void} - remove event
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
/**
   * Get sources
   * @method getSources
   * @return {object} - sources
   */
  getSources() {
    return sources;
  }
/**
   * Get articles
   * @method getFilterSource
   * @return {object} - articles
   */
  getFilterSource() {
    return filterNews;
  }
/**
   * Get favorite news
   * @method getFavoriteNews
   * @return {object} - favorite
   */
  getFavoriteNews() {
    if (localStorage.getItem(AuthStore.getUserEmail())) {
      return JSON.parse(localStorage.getItem(AuthStore.getUserEmail()));
    }
    localStorage.setItem(AuthStore.getUserEmail(), '');
    return localStorage.getItem(AuthStore.getUserEmail());
  }
/**
   * Get news sources
   * @method getAllSources
   * @return {object} - sources
   */
  getAllSources() {
    return NewsAPI.getAllSources();
  }

}

// create a new instance of `NewsStoreClass`
const NewsStore = new NewsStoreClass();

// register a dispatcher and emit event base on the triggered action
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