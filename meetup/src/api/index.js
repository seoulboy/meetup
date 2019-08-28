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
        Authorization: 'Bearer 298a0543a595bb80e462d876863d507c',
      },
    }
  );
};

export const fetchEventHostData = (urlName, eventId) => {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const baseUrl = 'https://api.meetup.com/';
  return axios.get(`${proxyUrl + baseUrl}/${urlName}/events/${eventId}/hosts`, {
    headers: {
      Authorization: 'Bearer 298a0543a595bb80e462d876863d507c',
    },
  });
};

// export const refreshToken = () => {
//   const proxyurl = 'https://cors-anywhere.herokuapp.com/';
//   const API_KEY = '60sv8vovkslbbbiv6fst4c9171';
//   const baseUrl = 'https://secure.meetup.com/oauth2/access';
//   const CLIENT_SECRET = 'kcf6ccii75quroa1utm3qkfb3d';
//   const refreshTokenFromAccess = '0ebfe6bd59c1d61407abbaf2810cbfc0';

//   return axios(
//     `${proxyurl +
//       baseUrl}?client_id=${API_KEY}&client_secret=${CLIENT_SECRET}&grant_type=refresh_token&refresh_token=${refreshTokenFromAccess}`,
//     { method: 'POST' }
//   );
// };
