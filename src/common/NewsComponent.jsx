import React from 'react';
import { Link } from 'react-router-dom';
import NewsActions from '../actions/NewsActions';
import NewsStore from '../stores/NewsStore';
import AuthStore from '../stores/AuthStore';
import Header from './Header';
import SearchBar from './SearchBar';



export default class NewsComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      authenticated: AuthStore.isAuthenticated(),
      sources: [],
      filterText: '',
    };
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText
    });
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

  render() {
    const newsNode = this.state.sources.map((source) => {
      if (source.name.indexOf(this.state.filterText) === -1) {
        return;
      }

      return (
        <li key={source.id}>
          <img className="dashboard-avatar" alt="Source image" src="/img/download.jpe" />
          <Link
            key={source.id}
            to={'/headlines/' + source.id}
            className=""
          >
            <strong className="newshead">{source.name}</strong><br />
            <strong>Category:</strong>{source.category}<br />
            <span className="newsdesc">{source.description}</span>
          </Link>
        </li>
      );
    });

    return (
      <div>
        <Header />
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
