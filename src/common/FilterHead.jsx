import React from 'react';
import { Link } from 'react-router-dom';

export default class FilterHead extends React.Component {

  render() {
    return (
      <div>
        <div className=" headerline container-fluid">
          <div >
            <ul className="nav navbar-nav">
              <li><Link to={"/headlines/"+this.props.filterurl} className="" >All News</Link></li>
              <li><Link to={"/topnews/"+this.props.filterurl}>Top News</Link></li>
              <li><Link to={"/latestnews/"+this.props.filterurl}>Latest  News</Link></li>
               <li><Link to={"/popularnews/"+this.props.filterurl}>Popular News</Link></li>
            </ul>
          </div>
        </div>
      </div>);
  }
}
