import EventEmitter from 'events';
import AppDispatcher from '../AppDispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';


const CHANGE_EVENT = 'change';

let _sources = [];
let _source = {};

function setSources(sources) {
  console.log(sources);
  _sources = sources;
}

function setSource(source) {
  console.log(source);
  _source = source;
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

    case AppConstants.RECIEVE_SOURCES_ERROR:
      alert(action.message);
      NewsStore.emitChange();
      break;

    case AppConstants.RECIEVE_SOURCE_ERROR:
      alert(action.message);
      NewsStore.emitChange();
      break;

    default:
  }
});

export default NewsStore;