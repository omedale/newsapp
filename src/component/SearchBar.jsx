import React from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.filterInput = this.filterInput.bind(this);
  }

  filterInput(e) {
    this.props.onFilterTextInput(e.target.value);
  }

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