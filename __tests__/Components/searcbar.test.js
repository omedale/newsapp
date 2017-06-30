import React from 'react';
import { shallow, mount } from 'enzyme';
import expect from 'expect';
import SearchBar from '../../src/component/SearchBar';

require('../../mock/test_helper.js');

function option() {
  const props = {
    onFilterTextInput: '',
    filterText: '',
  };
  const searchBar = shallow(<SearchBar{...props} />);
  return {
    props,
    searchBar,
  };
}

describe('Search Component :', () => {
  it('renders without crashing', () => {
    const { props } = option();
    mount(<SearchBar {...props} />);
  });
  it('will contain empty initial input value', () => {
    const { searchBar } = option();
    expect(searchBar.find('input').text()).toEqual('');
  });
});
