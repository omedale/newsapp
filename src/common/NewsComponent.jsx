import React from 'react';
import { Link } from 'react-router-dom';
import AlertContainer from 'react-alert';
import NewsActions from '../actions/NewsActions';
import NewsStore from '../stores/NewsStore';
import AuthStore from '../stores/AuthStore';
import style from './main.scss';


export default class NewsComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      authenticated: AuthStore.isAuthenticated(),
      sources: [],
    };
    this.onChange = this.onChange.bind(this);
  }




  componentWillMount() {

    if (this.state.authenticated === false){
      this.props.history.push('/login');
    }
    NewsStore.addChangeListener(this.onChange);
  }

  componentDidMount() {
    // NewsActions.recieveOffSources();
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
      return (
        <Link
          to={ '/headlines/' + source.id }
          className="list-group-item"
          key={source.id }
        >
          {source.name}
        </Link>
      );
  });

    return (

      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand">NewsApp</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

              <ul className="nav navbar-nav">
                <li><Link to="/" className="active" >Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/news">News</Link></li>

              </ul>

            </div>
          </div>
        </nav>
        <div>

          <AlertContainer ref={ a => this.msg = a} {...this.alertOptions } />
        </div>
        <h1 className={`${style.card} card`}>News Sources</h1>
        <div className="list-group">
          {newsNode}
        </div>
      </div>
    );
  }
}
