// test/server.test.js
import React from 'react';
import {shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import expect from 'expect';
import Login from '../src/common/Login.jsx';
const request = require('supertest-as-promised');
const exec = require('mz/child_process').exec;
const app = require('../index');
require('./setup.js');

describe('builds application', function () {
  it('builds to "build" directory', function () {
    // Disable mocha time-out because this takes a lot of time
    this.timeout(0);
    return exec('npm run build');
  });
});



describe('Login Component Test :', () => {
  it('Login page will render Welcome to NewsApp ', () => {
    const welcome = shallow(<Login />);
    expect(welcome.find('h2').text()).toEqual('Welcome to NewsApp');
  });

  it('Should contain a login text Login with Google', function() {
    expect(shallow(<Login />).contains(<span> Login with Google</span>)).toEqual(true);
  });

  it('reverses the comments on the button click', () => {
    const wrapper = mount(<Login />);

    wrapper.setState({ comments: ['hello'] });
    wrapper.find('GoogleLogin').simulate('click');
    expect(wrapper.state().comments[0].toEqual('olleh'));
  });

});
