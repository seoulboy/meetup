import axios from 'axios';

export const fetchUpComingMeetUpData = (
  center = {
    lon: -118.243683,
    lat: 34.052235,
  }
) => {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const API_KEY = '60sv8vovkslbbbiv6fst4c9171';
  const baseUrl = 'https://api.meetup.com/';
  const upcomingEventsUrl = '/find/upcoming_events';

  return axios.get(
    `${proxyUrl +
      baseUrl +
      upcomingEventsUrl}?key=${API_KEY}&sign=true&photo-host=public&page=20&lon=${
      center.lon
    }&lat=${center.lat}&radius=1`,
    {
      headers: {
        Authorization: 'Bearer 3538f2e1276054c8d0873ebcfc20e92e',
      },
    }
  );
};

export const fetchEventHostData = (urlName, eventId) => {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const baseUrl = 'https://api.meetup.com/';
  return axios.get(`${proxyUrl + baseUrl}/${urlName}/events/${eventId}/hosts`, {
    headers: {
      Authorization: 'Bearer 3538f2e1276054c8d0873ebcfc20e92e',
    },
  });
};
