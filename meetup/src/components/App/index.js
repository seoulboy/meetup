import React, { useEffect } from 'react';
import './index.css';
import MapContainer from '../MapContainer';
import EventListing from '../EventListing';

const App = ({
  onLoad,
  upcomingEventsData,
  onchangeCenter,
  addToFavorite,
  deleteFavorite,
  FavoriteEvents,
}) => {
  useEffect(() => {
    onLoad();
    let localStorageFavorites = JSON.parse(
      localStorage.getItem('favoriteMeetups')
    );

    if (localStorageFavorites !== null) {
      addToFavorite(localStorageFavorites);
    }
  }, []);

  useEffect(() => {
    if (JSON.parse(
      localStorage.getItem('favoriteMeetups')
    ) !== FavoriteEvents) {
      localStorage.setItem('favoriteMeetups', JSON.stringify(FavoriteEvents));
    }
  });

  return (
    <div className='App'>
      <header className='App-header'>
        <span className='header-text'></span>
        <img
          className='meetup-logo'
          alt='meetuplogo'
          src='https://www.pinclipart.com/picdir/big/143-1433994_meetup-meetup-logo-png-clipart.png'
        ></img>
      </header>
      <EventListing
        meetUpData={upcomingEventsData}
        FavoriteEvents={FavoriteEvents}
        handleFavorite={addToFavorite}
        handleDeleteFavorite={deleteFavorite}
      />
      <div className='map-div'>
        <MapContainer
          meetUpData={upcomingEventsData}
          onchangeCenter={onchangeCenter}
          className='map-container'
          handleFavorite={addToFavorite}
          handleDeleteFavorite={deleteFavorite}
          FavoriteEvents={FavoriteEvents}
        />
      </div>
    </div>
  );
};

export default App;
