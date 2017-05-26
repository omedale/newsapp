// test/server.test.js
import React from 'react';
import renderer from 'react-test-renderer';
const exec = require('mz/child_process').exec;
import {mount, shallow } from 'enzyme';
const request = require('supertest-as-promised');
import expect from 'expect';
import About from '../src/common/about.component.jsx'

const app = require('../index');

describe('builds application', function () {
  it('builds to "build" directory', function () {
    // Disable mocha time-out because this takes a lot of time
    this.timeout(0);
    return exec('npm run build');
  });
});



describe('About', () => {
  it('Welcome renders About Page', () => {
    const welcome = shallow(<About />);
    expect(welcome.find('h1').text()).toEqual('About Page');
  });
});
