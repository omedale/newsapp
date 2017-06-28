import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NewsActions from '../actions/NewsActions';
import NewsStore from '../stores/NewsStore';
import AuthStore from '../stores/AuthStore';
import Header from './Header';
import Footer from './Footer';
import SearchBar from './SearchBar';
import Loading from './LoadingComponent';

/**
 * Create a react component
 * @class Sources
 */
export default class Sources extends React.Component {
    /**
   * Create a constructor
   * @constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      authenticated: AuthStore.isAuthenticated(),
      sources: [],
      filterText: '',
      userName: AuthStore.getUserName(),
      userEmail: AuthStore.getUserEmail(),
    };
    this.searchSource = this.searchSource.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  /**
   * executes when the component is mounting
   * Trigger action to fetch source
   * @method componentWillMount
   * @return {void} - triggers axios to fetch sources
   */
  componentWillMount() {
    NewsActions.recieveSources();
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
   * Remove event listener from the news store
   * @method componentWilUnMount
   * @return {event} - removes event
   */
  componentWillUnmount() {
    NewsStore.removeChangeListener(this.onChange);
  }
  /**
   * Get  news sources and set the state
   * @method onChange
   * @return {state} - Set source to the state
   */
  onChange() {
    this.setState({
      sources: NewsStore.getSources(),
    });
  }
 /**
   * gets filter text and set the state
   * @method searchSource
   * @param {string} filterSource
   * @return {state} - Set search text to the state
   */
  searchSource(filterSource) {
    this.setState({
      filterText: filterSource,
    });
  }
/**
   * Render react component
   * @method render
   * @return {function} react-component
   */
  render() { 
    let count = 0;
    const newsNode = this.state.sources.map((source) => {
      if (source.name.toString().toLowerCase().indexOf(this.state.filterText.toString().toLowerCase()) === -1) {
        count +=1;
        if (count === this.state.sources.length){
          return <h3 key={source.name}>Ooops!!.... source not found</h3>;
        }
        return '';
      }
      return (
        <li key={source.name}>
          <Link
            key={source.name}
            // to={{ pathname: `/articles/${source.id}`, articledata: { articleName: source.name, sortAvailable: source.sortBysAvailable } }}
            to={`/articles/${source.id}/${source.name}`}
          >
            <h3 className="newshead">{source.name.substr(0, 50)}</h3>
            <span className="newsdesc">{source.description.substr(0, 160)}...</span>
          </Link>
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
                <h2>News Sources</h2>
              </div>
              <SearchBar
                filterText={this.state.filterText}
                onFilterTextInput={this.searchSource}
              />
            </div>
            <div className="">
              <div className="box-inner">
                <ul className="dashboard-list listpad listcontainer">
                  { newsNode.length > 0 ? newsNode : <Loading /> }
                </ul>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

Sources.propTypes = {
  history: PropTypes.any.isRequired,
};