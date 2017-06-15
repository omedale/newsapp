import React from 'react';
import { Route } from 'react-router-dom'
import { ShareButtons, generateShareIcon } from 'react-share';
import AlertContainer from 'react-alert';
import Loading from 'react-loading';
import PropTypes from 'prop-types';
import { Link, MemoryRouter } from 'react-router-dom';
import NewsActions from '../actions/NewsActions';
import NewsStore from '../stores/NewsStore';
import AuthStore from '../stores/AuthStore';
import Header from './Header';
import SortHeading from './SortHeading';
import SearchBar from './SearchBar';

const { FacebookShareButton, TwitterShareButton } = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const col = '#1995dc';
const typ = 'spinningBubbles';

const LoadingComponent = () => (
  <Loading type={typ} color={col} className="loading" />
);

export default class Articles extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      authenticated: AuthStore.isAuthenticated(),
      sortType: localStorage.getItem('omedale_sort_value'),
      sortedArticle: [],
      filterText: '',
      sourceID: this.props.location.pathname.split('/')[2],
    };
    this.filterArticle = this.filterArticle.bind(this);
    this.onChange = this.onChange.bind(this);
  }


  componentDidMount() {

    NewsStore.addChangeListener(this.onChange);
    NewsActions.getFilterNewsSource(this.props.match.params.id, '');
  }


  componentWillReceiveProps(nextProps) {
    const getPath = nextProps.location.pathname.split('/');
    const sort = getPath[3];
    NewsActions.getFilterNewsSource(this.props.match.params.id, sort);
  }


  componentWillUnmount() {
    NewsStore.removeChangeListener(this.onChange);
  }

  onChange() {
   
    this.setState({
      sortedArticle: NewsStore.getFilterSource(),
    });
  }

  filterArticle = (filterNews) => {
    this.setState({
      filterText: filterNews,
    });
  }
  addFavorite = (src) => {
    NewsActions.addFavorite(src);
    const msg = 'News Added Successfully';
    this.showAlert(msg);
  }
  showAlert = (msg) => {
    this.msg.show(msg, {
      time: 4000,
      position: 'top left',
      type: 'success',
    });
  }

  render() {
    const newsNode = this.state.sortedArticle.map((source) => {
      if (source.title.toString().toLowerCase().indexOf(this.state.filterText.toString().toLowerCase()) === -1) {
        return;
      }
      return (
        <li key={`${source.title}${source.publishedAt}`}>
          <img className="dashboard-avatar avata articleImage" alt="Article" src={source.urlToImage} />
          <Link
            key={source.title}
            to={source.url}
            className=""
            target="_blank"
          >
            <strong className="newshead">{source.title}</strong><br />
            {source.publishedAt }<br />
            <span className="newsdesc">{source.description.substr(0, 100)}...</span>
          </Link>
          <div className="row rowbtn"><button onClick={() => this.addFavorite(source)} className="btn btn-primary btn-sm">Add Favorite </button> <span className="pull-right "> <FacebookShareButton url={source.url}><FacebookIcon size={32} round={true} /> </FacebookShareButton> </span> <span className="pull-right "> <TwitterShareButton url={source.url}><TwitterIcon size={32} round={true} /> </TwitterShareButton> </span></div>
        </li>
      );
    });

    return (
      <div>
        <Header history={this.props.history} />
        <div className="container">
          <div className="row">
            <SearchBar
              filterText={this.state.filterText}
              onFilterTextInput={this.filterArticle}
            />
          </div>
          <div className="box ">
            <div className="box-inner">
              <div className=" ">
                  <SortHeading filterurl={this.state.sourceID} />
              </div>
              <div className="tab-content">
                <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
                <div className="">
                  <div className="">
                    <ul className="dashboard-list listpad">
                      { newsNode.length > 0 ? newsNode : <LoadingComponent /> }
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

Articles.propTypes = {
  location: PropTypes.any.isRequired,
  history: PropTypes.any.isRequired,
  match: PropTypes.any.isRequired,
};

