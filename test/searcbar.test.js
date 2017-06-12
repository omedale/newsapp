import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import SearchBar from '../src/component/SearchBar';

require('./test_helper.js');

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
  it('will contain input ', () => {
    const { searchBar } = option();
    expect(searchBar.find('input').text()).toEqual('');
  });
});
