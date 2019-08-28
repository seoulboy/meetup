import { connect } from 'react-redux';
import App from '../components/App/';
import { fetchUpComingMeetUpData } from '../api';
import {
  initialize,
  updateMeetUpData,
  addFavoriteEvent,
  deleteFavoriteEvent,
} from '../actions';

const mapStateToProps = state => {
  return {
    upcomingEventsData: state.upcomingEventsData.data.events,
    FavoriteEvents: state.favoriteEventsList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad() {
      fetchUpComingMeetUpData()
        .then(data => {
          dispatch(initialize(data));
        })
        .catch(error => {
          console.error(error);
          alert('Failed to fetch upcoming meetup data on load!');
        });
    },
    onchangeCenter(newCenter) {
      fetchUpComingMeetUpData(newCenter)
        .then(data => {
          dispatch(updateMeetUpData(data));
        })
        .catch(error => {
          console.error(error);
          alert('Failed to fetch upcoming meetup data on center change!');
        });
    },
    addToFavorite(eventInfo) {
      dispatch(addFavoriteEvent(eventInfo));
    },
    deleteFavorite(eventInfo) {
      dispatch(deleteFavoriteEvent(eventInfo));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
