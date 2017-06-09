
import { JSDOM } from 'jsdom';

require('babel-register');

const exposedProperties = ['window', 'navigator', 'document'];
const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');

global.document = dom.window.document;
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js',
};

documentRef = document;