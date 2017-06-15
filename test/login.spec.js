
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import Login from '../src/component/Login';

require('./test_helper.js');

 localStorage.removeItem('omedale_profile');
 localStorage.removeItem('omedale_id_token');
 localStorage.removeItem('omedale_profile_name');
 localStorage.removeItem('omedale_profile_email');

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

