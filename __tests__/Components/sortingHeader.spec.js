import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import expect from 'expect';
import SortHeading from '../../src/component/SortHeading';

require('../../mock/test_helper.js');

localStorage.setItem('omedale_sort_value', JSON.stringify({ name: 'ABC', sortAvailable: ['top', 'latest'] }));

function option() {
  const props = {
    filterurl: '',
    sortType: ['top', 'latest', 'popular'],
    sourceName: '',
  };
  const header = shallow(<SortHeading{...props} />);
  return {
    props,
    header,
  };
}

describe('Search Component :', () => {
  it('should contain 6 div', () => {
    const { header } = option();
    expect(header.find('div').length).toEqual(3);
  });
  it('contain headerline class', () => {
    const { header } = option();
    expect(header.find('.headerline').length).toEqual(1);
  });
});
