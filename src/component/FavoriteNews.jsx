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

export default class FavoriteNews extends React.Component {
  constructor() {
    super();
    this.state = {
      authenticated: AuthStore.isAuthenticated(),
      favoritenews: [],
      filterText: '',
    };
    this.filterFavorites = this.filterFavorites.bind(this);
  }

  componentWillMount() {
    this.setState({
      favoritenews: NewsStore.getFavoriteNews(),
    });
  }

  componentDidMount() {
    if (this.state.authenticated === false){
      this.props.history.push('/login');
    }
  }

  filterFavorites = (filterFav) => {
    this.setState({
      filterText: filterFav,
    });
  }

  deleteAll() {
    if(NewsStore.getFavoriteNews() === ''){
     this.showAlert('Favorite List is Empty');
     return;
    }
    localStorage.removeItem(AuthStore.getUserEmail());
    window.location.reload();
  }
  removeNews = (obj) => {
    return obj !== '' && typeof (obj) !== 'string';
  }

  setDeleteItem(article) {
    localStorage.setItem('omedale_confirm_delete', JSON.stringify(article));
  }

  deleteFavorite() {
    const article = JSON.parse(localStorage.getItem('omedale_confirm_delete'));
    let newFavorite = [];
    const favorite = NewsStore.getFavoriteNews();
    for (let i = 0; i < favorite.length; i++) {
      if (article.title === favorite[i].title){
        favorite[i] = '';
      }
    }
    if(NewsStore.getFavoriteNews() !== ''){
      newFavorite = favorite.filter(this.removeNews);
      localStorage.removeItem(AuthStore.getUserEmail());
      localStorage.setItem(AuthStore.getUserEmail(), JSON.stringify(newFavorite));
      window.location.reload();
    }
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


  render() {
    let newsNode = [];
    let count = 0;
    let deleteAll = '';
    if (this.state.favoritenews !== '') {
      newsNode = this.state.favoritenews.map((fav) => {
        if (fav.title.toString().toLowerCase().indexOf(this.state.filterText.toString().toLowerCase()) === -1) {
          count +=1;
          if(count === this.state.favoritenews.length){
            return <h3 key={`${fav.title}${fav.description}`}>Ooops!!.... article not found</h3>;
          }
            return '';
        }
        return (
          <li key={`${fav.title}${fav.description}`}>
            <img className="dashboard-avatar avata articleImage" alt="Article " src={fav.urlToImage} />
            <Link
              key={fav.title}
              to={fav.url}
              className=""
              target="_blank"
            >
              <h3 className="newshead">{fav.title.substr(0, 80)}</h3><br />
              <div className="newsdesc">{fav.description.substr(0, 100)}...</div>
            </Link>
            <div className="row rowbtn"><button onClick={() => this.setDeleteItem(fav)} className="btn btn-primary btn-sm" data-toggle="modal" data-target="#deleteFavorite">Delete </button><span className="pull-right "> <FacebookShareButton url={fav.url}><FacebookIcon size={32} round={true} /> </FacebookShareButton> </span> <span className="pull-right "> <TwitterShareButton className="twitterclass" url={fav.url}><TwitterIcon size={32} round={true} /> </TwitterShareButton> </span></div>
          </li>
        );
      });
    } else {
      newsNode = 'No favorite news';
    }

    return (
      <div>
        <Header history={this.props.history} />
        <div className="ch-container outercontainer">
          <div className="">
          <div className="row">
            <button className="btn pull-left clearbtn" onClick={() => this.deleteAll()} >clear all</button>
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
                      {newsNode.length > 0 ? newsNode : 'No favorite news' }
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
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                  <p>Are you sure you want to delete</p>
                </div>
                <div className="modal-footer">
                  <button onClick={() => this.deleteFavorite()} className="btn btn-primary btn-sm" >Yes </button>
                  <button type="button" className="btn btn-default btn-sm" data-dismiss="modal">Cancel</button>
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