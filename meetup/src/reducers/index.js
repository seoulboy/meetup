import { combineReducers } from 'redux';
import upcomingEventsReducer from './upcomingEvents'
import favoriteEventsReducer from './favoriteEvents'

export default combineReducers({
  upcomingEventsData: upcomingEventsReducer,
  favoriteEventsList: favoriteEventsReducer,
});
