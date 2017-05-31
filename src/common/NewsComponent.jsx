import React from 'react';
import { Link } from 'react-router-dom';
import AlertContainer from 'react-alert';
import NewsActions from '../actions/NewsActions';
import NewsStore from '../stores/NewsStore';
import AuthStore from '../stores/AuthStore';
import Header from './Header';
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
         <li>
             <img className="dashboard-avatar" alt="Usman" src="/img/2.jpg"/>
              <Link
              key={source.id }
              to={ '/headlines/' + source.id }
              className=""
              >
              <strong className="newshead">{source.name}</strong><br/>
              <strong>Category:</strong>{source.category}<br/>
              <span className="newsdesc">{source.description}</span>
              </Link>
        </li>
      );
  });

    return (
      <div>
        <Header />
        <div className="container">
          <div className="box ">
              <div className="box-content">
                      <div className="box-inner">
                          <ul className="dashboard-list">
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
