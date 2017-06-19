
import React from 'react';
import { shallow, mount } from 'enzyme';
import Login from '../src/component/Login';

import mockData from './mock/mock';

require('./mock/test_helper.js');

 localStorage.removeItem('omedale_profile');
 localStorage.removeItem('omedale_id_token');
 localStorage.removeItem('omedale_profile_name');
 localStorage.removeItem('omedale_profile_email');

describe('Login Component :', () => {
  const props = {
    location: { pathname: '/articles/abc-news-au/top' },
    history: [{ action: 'POP', push: (path, state) => { return state; } }],
    match: { params: { id: 'abc-news-au' }, isExact: true, path: '/sortedNews/:id', url: '/sortedNews/abc-news-au' },
    filterurl: '',
    filterText: '',
  };
  it('will render Welcome to NewsApp ', () => {
    const login = shallow(<Login{...props} />);
    expect(login.find('h2').text()).toEqual('Welcome to NewsApp');
  });
  it('will render Welcome to NewsApp ', () => {
    const login = shallow(<Login{...props} />);
    expect(login.find('span').text()).toEqual('Login with Google');
  });
  it('renders two row', () => {
    const login = shallow(<Login{...props} />);
    expect(login.find('.row').length).toEqual(2);
  });
  it('should contain 7 div', () => {
    const login = shallow(<Login{...props} />);
    expect(login.find('div').length).toEqual(7);
  });
});

