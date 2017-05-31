import React from 'react';
import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share';
import { Link } from 'react-router-dom';
import AlertContainer from 'react-alert';
import NewsActions from '../actions/NewsActions';
import NewsStore from '../stores/NewsStore';
import AuthStore from '../stores/AuthStore';
import Header from './Header';
import FilterHead from './FilterHead';
import style from './main.scss';

const {  FacebookShareButton, GooglePlusShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const OKIcon = generateShareIcon('ok');

export default class Headlines extends React.Component {

  constructor() {
    super();
    this.state = {
      authenticated: AuthStore.isAuthenticated(),
      headlines: [],
      shareUrl: 'https://techcrunch.com/2017/05/24/airbnb-is-running-its-own-internal-university-to-teach-data-science/',
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
    console.log(this.props.match.params.id);
    // NewsActions.recieveOffSources();
    NewsActions.getSource(this.props.match.params.id);
  }

  componentWillUnmount() {
    NewsStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      headlines: NewsStore.getSource(),
    });
  }

  render() {
    const newsNode = this.state.headlines.map((source) => {
      return (
         <li>
             <img className="dashboard-avatar" alt="Usman" src={source.urlToImage} />
              <Link
              key={source.url}
              to={ source.url}
              className=""
               target="_blank"
              >
              <strong className="newshead">{source.title}</strong><br/>
              <strong>published At:</strong>{source.publishedAt }<br/>
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
          <div className="box ">
              <div className="box-inner">
                  <div className=" ">
                    <FilterHead />
                  </div>
                   <div className="box-content">
                       <div className="">
                          <ul className="dashboard-list">
                            {newsNode}

                          </ul>
                      </div>
                   </div>
              </div>
          </div>

      </div>
    </div>
      );
    }
}

