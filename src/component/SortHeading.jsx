import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NewsStore from '../stores/NewsStore';
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
      sortBysAvailable: [],
    };
  }
  /**
   * executes when the component is mounting
   * Trigger getAllSource method from store to fetch source
   * @method componentWillMount
   * @return {state} - set state
   */
  componentWillMount() {
    NewsStore.getAllSources().then((res) => {
      this.setState({
        sortBysAvailable: res.data.sources.filter(source => (source.id === this.props.filterurl)),
      });
    });
  }
/**
   * Render react component
   * @method render
   * @return {function} react-component
   */
  render() {
    let sortBysAvailable = [];
    let sortNews = [];
    if (this.state.sortBysAvailable[0]) {
      sortBysAvailable = this.state.sortBysAvailable[0].sortBysAvailable;
      sortNews = sortBysAvailable.map((sort) => {
        return (
          <li
            key={sort}
          >
            <Link
              to={`/articles/${this.props.filterurl}/${this.props.sourceName}/${sort}`}
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
  sourceName: PropTypes.string.isRequired,
};