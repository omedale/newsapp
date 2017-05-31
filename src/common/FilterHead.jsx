import React from 'react';
import { Link } from 'react-router-dom';

export default class FilterHead extends React.Component {

  render() {
    return (
        <div>
            <div className=" headerline container-fluid">
              <div >
                <ul className="nav navbar-nav">
                  <li><Link to="/" className="active" >All</Link></li>
                  <li><Link to="/news">Top</Link></li>
                  <li><Link to="/news">Latest</Link></li>
                </ul>
              </div>
            </div>
        </div>);
  }
}
