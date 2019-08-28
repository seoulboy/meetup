import * as types from '../constants/ActionTypes';

export const initialize = initData => ({
  type: types.INITIALIZATION,
  initData,
});

export const updateMeetUpData = newData => ({
  type: types.UPDATE_MEETUP_DATA,
  newData,
});

export const addFavoriteEvent = eventInfo => ({
  type: types.ADD_FAVORITE_EVENT,
  eventInfo,
});

export const deleteFavoriteEvent = eventInfo => ({
  type: types.DELETE_FAVORITE_EVENT,
  eventInfo,
});
