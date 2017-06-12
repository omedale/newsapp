import React from 'react';
import { ShareButtons, generateShareIcon } from 'react-share';
import AlertContainer from 'react-alert';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NewsActions from '../actions/NewsActions';
import NewsStore from '../stores/NewsStore';
import AuthStore from '../stores/AuthStore';
import Header from './Header';
import SortHeading from './SortHeading';
import SearchBar from './SearchBar';

const { FacebookShareButton, TwitterShareButton } = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');

export default class Articles extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      authenticated: AuthStore.isAuthenticated(),
      sortType: localStorage.getItem('omedale_sort_value'),
      sortedArticle: [],
      filterText: '',
      sourceID: '',
    };
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.onChange = this.onChange.bind(this);
  }


  componentDidMount() {
    const getPath = this.props.location.pathname.split('/');
    this.setState({
      sourceID: getPath[2],
    });
    NewsStore.addChangeListener(this.onChange);

    if (this.state.authenticated === false) {
      this.props.history.push('/login');
    }
    let sort = '';
    NewsActions.getFilterNewsSource(this.props.match.params.id, sort);
  }


  componentWillReceiveProps(nextProps) {
    const getPath = nextProps.location.pathname.split('/');
    this.setState({
      sourceID: getPath[2],
    });

    if (this.state.authenticated === false) {
      this.props.history.push('/login');
    }
    const sort = getPath[3];
    NewsActions.getFilterNewsSource(this.props.match.params.id, sort);
    NewsStore.addChangeListener(this.onChange);
  }


  componentWillUnmount() {
    NewsStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      sortedArticle: NewsStore.getFilterSource(),
    });
  }

  handleFilterTextInput = (filterNews) => {
    this.setState({
      filterText: filterNews,
    });
  }
  addFavorite = (src) => {
    NewsActions.addFavorite(src);
    console.log(NewsActions.addFavorite(src));
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
        <li key={source.title}>
          <img className="dashboard-avatar avata" alt="Article" src={source.urlToImage} />
          <Link
            key={source.title}
            to={source.url}
            className=""
            target="_blank"
          >
            <strong className="newshead">{source.title}</strong><br />
              {source.publishedAt }<br />
            <span className="newsdesc">{source.description.substr(0, 50)}...</span>
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
              onFilterTextInput={this.handleFilterTextInput}
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
                      { newsNode.length > 0 ? newsNode : 'No news found' }
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
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

