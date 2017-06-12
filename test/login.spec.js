
import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Login from '../src/component/Login';

require('./test_helper.js');

describe('Login Component :', () => {
  it('will render Welcome to NewsApp ', () => {
    const login = shallow(<Login />);
    expect(login.find('h2').text()).toEqual('Welcome to NewsApp');
  });
  it('will render Welcome to NewsApp ', () => {
    const login = shallow(<Login />);
    expect(login.find('span').text()).toEqual('Login with Google');
  });
  it('should have state.authenticated = false', () => {
    const login = shallow(<Login />);
    expect(login.state('authenticated')).toEqual(false);
  });
  it('renders two row', () => {
    const login = shallow(<Login />);
    expect(login.find('.row').length).toEqual(2);
  });
  it('should contain 7 div', () => {
    const login = shallow(<Login />);
    expect(login.find('div').length).toEqual(7);
  });
});
