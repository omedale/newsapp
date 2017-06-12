
import expect from 'expect';
import NewsStore from '../src/stores/newsStore';

require('./test_helper.js');

describe('AuthActions  :', () => {
  it('contain funtion emitChange', () => {
    expect(NewsStore.emitChange()).toEqual(undefined);
  });
  it('contain funtion addChangeListener', () => {
    function callback() {
      return 'tt';
    }
    expect(NewsStore.addChangeListener(callback)).toEqual(undefined);
  });
  it('contain funtion removeChangeListener', () => {
    function callback() {
      return 'tt';
    }
    expect(NewsStore.removeChangeListener(callback)).toEqual(undefined);
  });
});
