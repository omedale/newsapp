import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
/**
 * Create a react component
 * @class SortHeading
 */
export default class SortHeading extends React.Component {
   /**
   * Create a constructor
   * @constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      sortType: JSON.parse(localStorage.getItem('omedale_sort_value')),
    };
  }
/**
   * Render react component
   * @method render
   * @return {function} react-component
   */
  render() {
    let sortNews = [];
    if (this.state.sortType.sortAvailable !== '') {
      sortNews = this.state.sortType.sortAvailable.map((sort) => {
        return (
          <li
            key={sort}
          >
            <Link
              to={`/articles/${this.props.filterurl}/${sort}`}
            >{sort.toUpperCase()} NEWS</Link></li>
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

