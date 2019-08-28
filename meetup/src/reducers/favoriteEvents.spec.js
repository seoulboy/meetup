import favoriteEventsReducer from './favoriteEvents';
import * as types from '../constants/ActionTypes';

describe('favoriteEventsReducer', () => {
  it('should handle initial state', () => {
    expect(favoriteEventsReducer(undefined, {})).toEqual({});
  });

  it('should handle ADD_FAVORITE_EVENT', () => {
    expect(
      favoriteEventsReducer(
        {
          '12345': {
            id: '12345',
            eventTime: { date: '2019-08-28', time: '12:00' },
          },
        },
        {
          type: types.ADD_FAVORITE_EVENT,
          eventInfo: {
            id: '56789',
            eventTime: { date: '2019-09-01', time: '15:00' },
          },
        }
      )
    ).toEqual({
      '12345': {
        id: '12345',
        eventTime: { date: '2019-08-28', time: '12:00' },
      },
      '56789': {
        id: '56789',
        eventTime: { date: '2019-09-01', time: '15:00' },
      },
    });
  });

  it('should handle DELETE_FAVORITE_EVENT', () => {
    expect(
      favoriteEventsReducer(
        {
          '12345': {
            id: '12345',
            eventTime: { date: '2019-08-28', time: '12:00' },
          },
          '56789': {
            id: '56789',
            eventTime: { date: '2019-09-01', time: '15:00' },
          },
        },
        {
          type: types.DELETE_FAVORITE_EVENT,
          eventInfo: {
            id: '56789',
            eventTime: { date: '2019-09-01', time: '15:00' },
          },
        }
      )
    ).toEqual({
      '12345': {
        id: '12345',
        eventTime: { date: '2019-08-28', time: '12:00' },
      },
    });
  });
});
