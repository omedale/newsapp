
import { JSDOM } from 'jsdom';
require('babel-register');

const exposedProperties = ['window', 'navigator', 'document'];
const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');
//const win = dom.defaultView;

global.window = dom.window;
global.document = dom.window.document;

Object.keys(global.document.defaultView).forEach(property => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = global.document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js',
};