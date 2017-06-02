import React from 'react';
import { ShareButtons, generateShareIcon } from 'react-share';
import { Link } from 'react-router-dom';
import NewsActions from '../actions/NewsActions';
import NewsStore from '../stores/NewsStore';
import AuthStore from '../stores/AuthStore';
import Header from './Header';
import FilterHead from './FilterHead';
import SearchBar from './SearchBar';

const { FacebookShareButton, TwitterShareButton } = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');


export default class PopularNews extends React.Component {

  constructor() {
    super();
    this.state = {
      authenticated: AuthStore.isAuthenticated(),
      myPath: '',
      popularheadlines: [],
      filterText: '',
    };
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.onChange = this.onChange.bind(this);
  }

   handleFilterTextInput = (filterText) => {
    this.setState({
      filterText: filterText
    });
  }

  componentWillMount() {
    this.myPath = window.location.pathname.split('/');
    this.setState({
      pathUrl: this.myPath[2],
    });

    if (this.state.authenticated === false){
      this.props.history.push('/login');
    }
    NewsStore.addChangeListener(this.onChange);
  }

  componentDidMount() {
    NewsActions.getPopularSource(this.props.match.params.id);
  }

  componentWillUnmount() {
    NewsStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      popularheadlines: NewsStore.getPopularSource(),
    });
  }

  render() {
    const newsNode = this.state.popularheadlines.map((source) => {
      if (source.title.indexOf(this.state.filterText) === -1) {
        return;
      }
      return (
         <li>
             <img className="dashboard-avatar" alt="Article Image" src={source.urlToImage} />
              <Link
              key={source.title}
              to={ source.url}
              className=""
               target="_blank"
              >
              <strong className="newshead">{source.title}</strong><br />
              <strong>published At:</strong>{source.publishedAt }<br />
              <span className="newsdesc">{source.description}</span>
              </Link>
              <div className="row rowbtn"><span className="pull-right "> <FacebookShareButton url={source.url}><FacebookIcon size={32} round={true} /> </FacebookShareButton> </span> <span className="pull-right "> <TwitterShareButton url={source.url}><TwitterIcon size={32} round={true} /> </TwitterShareButton> </span> <button className="pull-left favbtn"><i className=" favicon glyphicon glyphicon-heart pink"></i> </button> </div>
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
              <div className="box-inner">
                  <div className=" ">
                    <FilterHead filterurl={this.state.pathUrl} />
                  </div>
                  <div  className="tab-content">
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
