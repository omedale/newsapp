import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NewsActions from '../actions/NewsActions';
import NewsStore from '../stores/NewsStore';
import AuthStore from '../stores/AuthStore';
import Header from './Header';
import AuthActions from '../actions/AuthActions';
import SearchBar from './SearchBar';



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
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    NewsStore.addChangeListener(this.onChange);
  }

  componentDidMount() {
    if (this.state.authenticated === false) {
      this.props.history.push('/login');
    }
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

  signOut = () => {
    AuthActions.logUserOut();
    this.props.history.push('/login');
  }


  handleFilterTextInput(filterSource) {
    this.setState({
      filterText: filterSource,
    });
  }


  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }


  passSortValue(sort) {
    localStorage.setItem('omedale_sort_value', JSON.stringify(sort.sortBysAvailable));
  }

  render() { 
    const newsNode = this.state.sources.map((source) => {
      if (source.name.toString().toLowerCase().indexOf(this.state.filterText.toString().toLowerCase()) === -1) {
        return;
      }   

      return (
        <li onClick={() => this.passSortValue(source)} key={source.name}>
          <img className="dashboard-avatar" alt="Source image" src="/img/download.jpe" />
          <Link
            key={source.name}
            to={'/articles/' + source.id}
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
              onFilterTextInput={this.handleFilterTextInput}
            />
          </div>
          <div className="box ">
            <div className="box-content">
              <div className="box-inner">
                <ul className="dashboard-list listpad">
                  {newsNode}
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
  history: PropTypes.object.isRequired,
};