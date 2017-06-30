import React from 'react';
import { ShareButtons, generateShareIcon } from 'react-share';
import PropTypes from 'prop-types';
import AlertContainer from 'react-alert';
import { Link } from 'react-router-dom';
import NewsStore from '../stores/NewsStore';
import AuthStore from '../stores/AuthStore';
import Header from './Header';
import SearchBar from './SearchBar';
import Footer from './Footer';

const { FacebookShareButton, TwitterShareButton } = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');

/**
 * Create a react component
 * @class FavoriteNews
 */
export default class FavoriteNews extends React.Component {
  /**
    * Create a constructor
    * @constructor
    * @param {object} props
    */
  constructor() {
    super();
    this.state = {
      authenticated: AuthStore.isAuthenticated(),
      favoritenews: [],
      filterText: '',
    };
    this.filterFavorites = this.filterFavorites.bind(this);
  }
  /**
   * Executes when the component is mounting
   * Trigger action to fetch articles and set state
   * @method componentWillMount
   * @return {state} - set state
   */
  componentWillMount() {
    this.setState({
      favoritenews: NewsStore.getFavoriteNews(),
    });
  }
  /**
    * Delete set news
    * @method deleteFavorite
    * @return {void} - set news
    */
  deleteFavorite() {
    const article = JSON.parse(localStorage.getItem('omedale_confirm_delete'));
    let newFavorite = [];
    let temp = [];
    const favorites = NewsStore.getFavoriteNews();
    favorites.forEach((favorite) => {
      if (article.title !== favorite.title) {
        temp.push(favorite);
        favorite = '';
      }
    });
    if (NewsStore.getFavoriteNews() !== '') {
      newFavorite = temp.filter(this.removeNews);
      localStorage.removeItem(AuthStore.getUserEmail());
      localStorage.setItem(AuthStore.getUserEmail(), JSON.stringify(newFavorite));
      this.setState({
        favoritenews: NewsStore.getFavoriteNews(),
      });
    }
  }
  /**
   * gets filter text and set the state
   * @method filterFavorites
   * @param {string} filterFavorite
   * @return {state} - Set search text to the state
   */
  filterFavorites(filterFavorite) {
    this.setState({
      filterText: filterFavorite,
    });
  }
  /**
   * Delete all favorite
   * @method deleteAll
   * @return {void} - Delete news
   */
  deleteAll() {
    if (NewsStore.getFavoriteNews() === '') {
      this.showAlert('Favorite List is Empty');
      return true;
    }
    localStorage.removeItem(AuthStore.getUserEmail());
    this.setState({
      favoritenews: NewsStore.getFavoriteNews(),
    });
  }
  /**
    * Filter input array
    * @method removeNews
    * @param {arrray} obj
    * @return {void} - return filtered array
    */
  removeNews(obj) {
    return obj !== '' && typeof (obj) !== 'string';
  }
  /**
    * Set news to be deleted
    * @method setDeleteItem
    * @param {object} article
    * @return {void} - set news
    */
  setDeleteItem(article) {
    localStorage.setItem('omedale_confirm_delete', JSON.stringify(article));
  }
  /**
   * Display alert
   * @method showAlert
   * @param {object} msg
   * @return {void} - display alert
   */
  showAlert(msg) {
    this.msg.show(msg, {
      time: 4000,
      position: 'top left',
      type: 'success',
    });
  }
  /**
     * Render react component
     * @method render
     * @return {function} react-component
     */
  render() {
    let newsNode = [];
    let count = 0;
    if (this.state.favoritenews !== '') {
      newsNode = this.state.favoritenews.map((fav) => {
        if (fav.title.toString().toLowerCase()
        .indexOf(this.state.filterText.toString().toLowerCase()) === -1) {
          count += 1;
          if (count === this.state.favoritenews.length) {
            return <h3 key={`${fav.title}${fav.description}`}>
            Ooops!!.... article not found</h3>;
          }
          return '';
        }
        return (
          <li key={`${fav.title}${fav.description}`}>
            <div className="imagelayer">
              <img
                className="dashboard-avatar avata articleImage"
                alt="Article "
                src={fav.urlToImage}
              />
            </div>
            <Link
              key={fav.title}
              to={fav.url}
              className=""
              target="_blank"
            >
              <h3 className="newshead">{fav.title.substr(0, 60)}...</h3>
              <div className="newsdesc">{fav.description.substr(0, 100)}
              ...</div>
            </Link>
            <div className="row rowbtn">
              <button onClick={() => this.setDeleteItem(fav)}
                className="btn btn-primary btn-sm"
                data-toggle="modal"
                data-target="#deleteFavorite"
              >Delete </button><span className="pull-right "> 
                <FacebookShareButton url={fav.url}>
                  <FacebookIcon size={32} round={true} /> 
                </FacebookShareButton> </span> <span className="pull-right ">
                  <TwitterShareButton className="twitterclass" url={fav.url}>
                    <TwitterIcon size={32} round={true} /> 
                  </TwitterShareButton> </span></div>
          </li>
        );
      });
    } else {
      newsNode = <h3>No favorite</h3>;
    }

    return (
      <div>
        <Header history={this.props.history} />
        <div className="ch-container outercontainer">
          <div className="">
            <div className="row">
              <button
                className="btn pull-left clearbtn"
                onClick={() => this.deleteAll()} >
                clear all</button>
              <SearchBar
                filterText={this.state.filterText}
                onFilterTextInput={this.filterFavorites}
              />
              <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
            </div>
            <div className="box-inner">
              <div className="tab-content">
                <div className="">
                  <div className="">
                    <ul className="dashboard-list listpad listcontainer">
                      {newsNode.length > 0 ? newsNode : <h3>No favorite</h3>}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        <div id="deleteFavorite" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button"
                  className="close"
                  data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete</p>
              </div>
              <div className="modal-footer">
                <button
                  onClick={() => this.deleteFavorite()}
                  className="btn btn-primary btn-sm"
                  data-dismiss="modal">Yes </button>
                <button
                  type="button"
                  className="btn btn-default btn-sm"
                  data-dismiss="modal">Cancel</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

FavoriteNews.propTypes = {
  history: PropTypes.object.isRequired,
};