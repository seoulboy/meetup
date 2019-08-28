import { removeByKey } from '../utils'

const initialState = {
  favoriteEventsList: {},
}

const favoriteEventsReducer = (
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

export default favoriteEventsReducer;