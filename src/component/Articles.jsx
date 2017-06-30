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
import Footer from './Footer';
import Loader from './Loader';

const { FacebookShareButton, TwitterShareButton } = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');

/**
 * Create a react component
 * @class Articles
 */
export default class Articles extends React.Component {
  /**
   * Create a constructor
   * @constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      authenticated: AuthStore.isAuthenticated(),
      sortedArticle: [],
      filterText: '',
      sourceID: this.props.location.pathname.split('/')[2],
      sourceName: this.props.location.pathname.split('/')[3],
    };
    this.filterArticle = this.filterArticle.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  /**
   * executes when the component is mounting
   * Trigger action to fetch articles
   * @method componentWillMount
   * @return {void} - trigger saxious to fetch article
   */
  componentWillMount() {
    NewsActions.getFilterNewsArticle(this.props.match.params.id, '');
  }

  /**
   * Add event Listener to the News Store
   * executes when the component is fully mounted
   * @method componentDidMount
   * @return {event} - resgister event
   */
  componentDidMount() {
    NewsStore.addChangeListener(this.onChange);
  }

  /**
   * Get filter articles when a new prop is received
   * @method componentWilReceiveProps
   * @param {object} nextProps - New props
   * @return {void} - get filter articles when recieving new props
   */
  componentWillReceiveProps(nextProps) {
    const getPath = nextProps.location.pathname.split('/');
    const sort = getPath[4];
    NewsActions.getFilterNewsArticle(this.props.match.params.id, sort);
  }

  /**
   * Remove event listener from the news store
   * @method componentWilUnMount
   * @return {event} - removes event
   */
  componentWillUnmount() {
    NewsStore.removeChangeListener(this.onChange);
  }
  /**
   * gets filter articles and set the state
   * @method onChange
   * @return {state} - Set articles to the state
   */
  onChange() {
    this.setState({
      sortedArticle: NewsStore.getFilterSource(),
    });
  }
  /**
   * gets filter text and set the state
   * @method filterArticle
   * @param {string} filterNews
   * @return {state} - Set search text to the state
   */
  filterArticle(filterNews) {
    this.setState({
      filterText: filterNews,
    });
    return true;
  }
 /**
   * gets favorite article and add to store
   * @method addFavorite
   * @param {object} src
   * @return {void} - display success alert
   */
  addFavorite(src) {
    NewsActions.addFavorite(src);
    this.msg.show('News Added Successfully', {
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
    let count = 0;
    const newsNode = this.state.sortedArticle.map((source) => {
      if (source.title.toString().toLowerCase()
      .indexOf(this.state.filterText.toString().toLowerCase()) === -1) {
        count += 1;
        if (count === this.state.sortedArticle.length){
          return (<h3 key={`${source.title}${source.publishedAt}`}>
          Ooops!!.... article not found</h3>);
        }
        return '';
      }
      return (
        <li key={`${source.title}${source.publishedAt}`}>
          <div className="imageLayer">
            <img
              className="dashboard-avatar avata articleImage"
              alt="Article"
              src={source.urlToImage}
            />
          </div>
          <Link
            key={source.title}
            to={source.url}
            className=""
            target="_blank"
          >
            <h3 className="newshead">{source.title.substr(0, 60)}...</h3>
            <div className="newsdesc">{source.description.substr(0, 100)}...
            </div>
          </Link>
          <div className="row rowbtn">
            <button
              onClick={() => this.addFavorite(source)}
              className="btn btn-primary btn-sm"
            >
              Add Favorite
            </button> <span className="pull-right ">
              <FacebookShareButton url={source.url}>
                <FacebookIcon size={32} round={true} /> 
              </FacebookShareButton> </span> <span className="pull-right ">
                <TwitterShareButton
                  className="twitterclass"
                  url={source.url}
                >
                  <TwitterIcon size={32} round={true} /> 
                </TwitterShareButton> </span>
          </div>
        </li>
      );
    });

    return (
      <div>
        <Header history={this.props.history} />
        <div className="ch-container outercontainer">
          <div className="">
            <div className="row">
              <div className="col-sm-6">
                <h2>{this.state.sourceName}</h2>
              </div>
              <SearchBar
                filterText={this.state.filterText}
                onFilterTextInput={this.filterArticle}
              />
            </div>
            <div className="box-inner">
              <div className=" ">
                <SortHeading
                  sourceName={this.state.sourceName}
                  filterurl={this.state.sourceID} 
                />
              </div>
              <div className="tab-content">
                <AlertContainer
                  ref={a => this.msg = a} {...this.alertOptions}
                />
                <div className="">
                  <div className="">
                    <ul className="dashboard-list listpad listcontainer">
                      { newsNode.length > 0 ? newsNode : <Loader /> }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
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

