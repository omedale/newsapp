import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class SortHeading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: [],
    };

  }

  componentDidMount() {
    this.setState({
      sortType: JSON.parse(localStorage.getItem('omedale_sort_value')),
    });
  }
  render() {
    let sortNews = [];

    if (this.state.sortType !== '') {
      sortNews = this.state.sortType.map((sort) => {
        return (
          <li key={sort}><Link to={`/articles/${this.props.filterurl}/${sort}`}>{sort.toUpperCase()} NEWS</Link></li>
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

SortHeading.propTypes = {
  filterurl: PropTypes.string.isRequired,
};

