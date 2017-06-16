import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import SortHeading from '../src/component/SortHeading';

require('./test_helper.js');

function option() {
  const props = {
    filterurl: '',
    sortType: ['top', 'latest', 'popular']
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

  it('should have initial state.sortType = []', () => {
    const { header } = option();
    expect(header.state('sortedArticle')).toEqual(undefined);
  });

  it('contain headerline class', () => {
    const { header } = option();
    expect(header.find('.headerline').length).toEqual(1);
  });
});