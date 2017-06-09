import React from 'react';
import { Link } from 'react-router-dom';

export default class FilterHead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: JSON.parse(localStorage.getItem('omedale_sort_value')),
    };
  }
  render() {
    let sortNews = [];

    if (this.state.sortType !== '') {
      sortNews = this.state.sortType.map((sort) => {
        return (
          <li><Link key={sort} to={`/sortedNews/${this.props.filterurl}/${sort}`}>{sort.toUpperCase()} NEWS</Link></li>
        );
      });
    }
    return (
      <div>
        <div className=" headerline container-fluid">
          <div >
            <ul className="nav navbar-nav">
              {sortNews}
            </ul>
          </div>
        </div>
      </div>);
  }
}
