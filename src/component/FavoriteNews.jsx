import React from 'react';
import { ShareButtons, generateShareIcon } from 'react-share';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NewsStore from '../stores/NewsStore';
import AuthStore from '../stores/AuthStore';
import Header from './Header';
import SearchBar from './SearchBar';

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
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
  }

  componentWillMount() {
    this.setState({
      favoritenews: NewsStore.getFavNews(),
    });
  }

  componentDidMount() {
    if (this.state.authenticated === false){
      this.props.history.push('/login');
    }
  }

  handleFilterTextInput = (filterFav) => {
    this.setState({
      filterText: filterFav,
    });
  }

  deleteAll = () => {
    localStorage.removeItem(AuthStore.getUserEmail());
    window.location.reload();
  }
  removeNews = (obj) => {
    return obj !== '' && typeof (obj) !== 'string';
  }
  deleteFav = (article) => {
    let newFavorite = [];
    const favorite = NewsStore.getFavNews();
    for (let i = 0; i < favorite.length; i++) {
      if (article.title === favorite[i].title){
        favorite[i] = '';
      }
    }
    newFavorite = favorite.filter(this.removeNews);
    localStorage.removeItem(AuthStore.getUserEmail());
    localStorage.setItem(AuthStore.getUserEmail(), JSON.stringify(newFavorite));
    window.location.reload();
  }


  render() {
    let newsNode = [];
    if (this.state.favoritenews !== '') {
      newsNode = this.state.favoritenews.map((source) => {
        if (source.title.toString().toLowerCase().indexOf(this.state.filterText.toString().toLowerCase()) === -1) {
            return;
        }
        return (
          <li key={source.title}>
            <img className="dashboard-avatar avata" alt="Article Image" src={source.urlToImage} />
            <Link
              key={source.title}
              to={source.url}
              className=""
              target="_blank"
            >
              <strong className="newshead">{source.title}</strong><br />
              <strong>published At:</strong>{source.publishedAt }<br />
              <span className="newsdesc">{source.description}</span>
            </Link>
            <div className="row rowbtn"><button onClick={() => this.deleteFav(source)} className="btn btn-primary btn-sm">Delete </button><span className="pull-right "> <FacebookShareButton url={source.url}><FacebookIcon size={32} round={true} /> </FacebookShareButton> </span> <span className="pull-right "> <TwitterShareButton url={source.url}><TwitterIcon size={32} round={true} /> </TwitterShareButton> </span></div>
          </li>
        );
      });
    } else {
      newsNode = 'No favorite news';
    }

    return (
      <div>
        <Header history={this.props.history} />
        <div className="container">
          <div className="row">
            <button className="btn pull-left clearbtn" onClick={() => this.deleteAll()} >clear all</button>
            <SearchBar
              filterText={this.state.filterText}
              onFilterTextInput={this.handleFilterTextInput}
            />
          </div>
          <div className="box ">
            <div className="box-inner">
              <div className="tab-content">
                <div className="">
                  <div className="">
                    <ul className="dashboard-list listpad">
                      {newsNode}
                    </ul>
                  </div>
                </div>
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
