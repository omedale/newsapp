
import React from 'react';
import { shallow, mount } from 'enzyme';
import expect from 'expect';
import sinon from 'sinon';
import Sources from '../../src/component/Sources';
import mockData from '../../mock/mock';

require('../../mock/test_helper.js');

describe('Sources Component :', () => {

  let props;
  beforeEach(() => {
    props = {
      location: { pathname: '/articles/abc-news-au/top' },
      history: { action: 'POP', push: (path, state) => { return state; } },
      match: { params: { id: 'abc-news-au' },
        isExact: true, path: '/sortedNews/:id', url: '/sortedNews/abc-news-au' },
      filterurl: '',
      filterText: '',
    };
  });
  it('renders without crashing', () => {
    mount(<Sources {...props} />);
  });
  it('calls componentWillUnmount', () => {
    const wrapper = mount(<Sources{...props} />);
    const spy = sinon
    .spy(Sources.prototype, 'componentWillUnmount');
    wrapper.unmount();
    expect(spy.calledOnce).toBeTruthy();
  });
  it('should render 2 soources', () => {
    const sources = shallow(<Sources{...props} />);
    sources.setState({ sources: mockData.sources });
    expect(sources.find('li').length).toEqual(2);
  });
});