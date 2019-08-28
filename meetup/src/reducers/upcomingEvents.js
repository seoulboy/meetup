const initialState = {
  upcomingEventsData: {
    data: { events: [{ local_date: '', local_time: '' }] },
  }
};

const upcomingEventsReducer = (
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

export default upcomingEventsReducer;