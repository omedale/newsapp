
import expect from 'expect';
import NewsActions from '../src/actions/NewsActions';

require('./test_helper.js');

describe('AuthActions  :', () => {
  it('contain funtion addtofavorite', () => {
    expect(NewsActions.addFavorite('favorite')).toEqual(undefined);
  });
  it('contain funtion recieveSources', () => {
    expect(NewsActions.recieveSources()).toEqual(undefined);
  });
  it('contain funtion getFilterNewsSource', () => {
    expect(NewsActions.getFilterNewsSource()).toEqual(undefined);
  });
});
