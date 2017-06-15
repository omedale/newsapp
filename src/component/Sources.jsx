import React from 'react';
import { Link } from 'react-router-dom';
import Loading from 'react-loading';
import PropTypes from 'prop-types';
import NewsActions from '../actions/NewsActions';
import NewsStore from '../stores/NewsStore';
import AuthStore from '../stores/AuthStore';
import Header from './Header';
import AuthActions from '../actions/AuthActions';
import SearchBar from './SearchBar';

const col = '#1995dc';
const typ = 'spinningBubbles';

const LoadingComponent = () => (
  <Loading type={typ} color={col} className="loading" />
);

export default class Sources extends React.Component {
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
    if (this.state.authenticated === false) {
      this.props.history.push('/login');
    }
  }

  componentWillMount() {
    NewsStore.addChangeListener(this.onChange);
  }

  componentDidMount() {
    NewsActions.recieveSources();
  }

  componentWillUnmount() {
    NewsStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      sources: NewsStore.getSources(),
    });
  }
  
  searchSource(filterSource) {
    this.setState({
      filterText: filterSource,
    });
  }

  passSortValue = (sort) => {
    localStorage.setItem('omedale_sort_value', JSON.stringify(sort.sortBysAvailable));
  }

  render() { 

    const newsNode = this.state.sources.map((source) => {
      if (source.name.toString().toLowerCase().indexOf(this.state.filterText.toString().toLowerCase()) === -1) {
        return;
      }   

      return (
        <li onClick={() => this.passSortValue(source)} key={source.name}>
          <img className="dashboard-avatar" alt="Source" src="/img/download.jpe" />
          <Link
            key={source.name}
            to={`/articles/${source.id}`}

          >
            <strong className="newshead">{source.name}</strong><br />
            <span className="newsdesc">{source.description.substr(0, 60)}...</span>
          </Link>
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
              onFilterTextInput={this.searchSource}
            />
          </div>
          <div className="box ">
            <div className="box-content">
              <div className="box-inner">
                <ul className="dashboard-list listpad">
                   { newsNode.length > 0 ? newsNode : <LoadingComponent /> }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Sources.propTypes = {
  history: PropTypes.any.isRequired,
  //onFilterTextInput: PropTypes.string.isRequired,
};