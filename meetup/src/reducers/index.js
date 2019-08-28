import { combineReducers } from 'redux';
import { removeByKey } from '../utils';

const initialState = {
  upcomingEventsData: {
    data: { events: [{ local_date: '', local_time: '' }] },
  },
  favoriteEventsList: {},
};

export const upcomingEventsReducer = (
  state = initialState.upcomingEventsData,
  action
) => {
  switch (action.type) {
    case 'INITIALIZATION':
      return action.initData;
    case 'UPDATE_MEETUP_DATA':
      return action.newData;
    default:
      return state;
  }
};

export const favoriteEventsReducer = (
  state = initialState.favoriteEventsList,
  action
) => {
  switch (action.type) {
    case 'ADD_FAVORITE_EVENT':
      if (action.eventInfo.id) {
        return { ...state, [action.eventInfo.id]: action.eventInfo };
      } else {
        return { ...state, ...action.eventInfo };
      }
    case 'DELETE_FAVORITE_EVENT':
      return removeByKey(state, action.eventInfo.id);
    default:
      return state;
  }
};

export default combineReducers({
  upcomingEventsData: upcomingEventsReducer,
  favoriteEventsList: favoriteEventsReducer,
});
