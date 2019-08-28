import favoriteEventsReducer from './favoriteEvents';
import * as types from '../constants/ActionTypes';

describe('favoriteEventsReducer', () => {
  it('should handle initial state', () => {
    expect(favoriteEventsReducer(undefined, {})).toEqual({});
  });
});
