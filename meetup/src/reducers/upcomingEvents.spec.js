import upcomingEventsReducer from './upcomingEvents';
import * as types from '../constants/ActionTypes';

describe('upcomingEventsReducer', () => {
  it('should handle initial state', () => {
    expect(upcomingEventsReducer(undefined, {})).toEqual({
      data: { events: [{ local_date: '', local_time: '' }] },
    });
  });

  it('should handle INITIALIZATION', () => {
    expect(
      upcomingEventsReducer([], {
        type: types.INITIALIZATION,
        initData: {
          config: { timeout: 0, method: 'get' },
          data: {},
          headers: {},
          request: {},
          timeout: 0,
          status: 200,
          statusText: 'OK',
        },
      })
    ).toEqual({
      config: { timeout: 0, method: 'get' },
      data: {},
      headers: {},
      request: {},
      timeout: 0,
      status: 200,
      statusText: 'OK',
    });
  });

  it('should handle UPDATE_MEETUP_DATA', () => {
    expect(
      upcomingEventsReducer([], {
        type: types.UPDATE_MEETUP_DATA,
        newData: {
          config: { timeout: 0, method: 'get' },
          data: {},
          headers: {},
          request: {},
          timeout: 0,
          status: 200,
          statusText: 'OK',
        },
      })
    ).toEqual({
      config: { timeout: 0, method: 'get' },
      data: {},
      headers: {},
      request: {},
      timeout: 0,
      status: 200,
      statusText: 'OK',
    });
  });
});
