import React from 'react';
import PropTypes from 'prop-types';

/**
 * Create a react component
 * @class SearchBar
 */
export default class SearchBar extends React.Component {
  /**
   * Create a constructor
   * @constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.filterInput = this.filterInput.bind(this);
  }

  /**
   * Bind input search text
   * @method filterArticle
   * @param {string} e
   * @return {state} - Set search text to the state
   */
  filterInput(e) {
    this.props.onFilterTextInput(e.target.value);
  }
/**
   * Render react component
   * @method render
   * @return {function} react-component
   */
  render() {
    return (
      <form className="searchbar" >
        <input
          className="form-control"
          type="text"
          placeholder="Search"
          value={this.props.filterText}
          onChange={this.filterInput}
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  filterText: PropTypes.string.isRequired,
  onFilterTextInput: PropTypes.any.isRequired,
};