import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { fetchEventHostData } from '../../api';
import { Icon } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

export const MapContainer = ({
  google,
  meetUpData,
  onchangeCenter,
  handleFavorite,
  handleDeleteFavorite,
  FavoriteEvents,
}) => {
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({ time: new Date() });
  const mapEl = useRef(null);

  const handleMarkerClick = (props, marker, e) => {
    fetchEventHostData(
      props.toGetHostData.urlName,
      props.toGetHostData.eventId
    ).then(res => {
      if (res.data[0].photo && res.data[0].name) {
        setSelectedPlace({
          ...props,
          hostName: res.data[0].name || ' ',
          hostImageUrl: res.data[0].photo.thumb_link || ' ',
        });
      }
      setActiveMarker(marker);
      setShowingInfoWindow(true);
    });
  };

  const getCenter = (mapProps, map) => {
    onchangeCenter({ lat: map.center.lat(), lon: map.center.lng() });
  };

  const renderedMarker = meetUpData.map((meetUpInfo, index) => {
    return (
      meetUpInfo.venue &&
      meetUpInfo.description &&
      meetUpInfo.name && (
        <Marker
          key={`Marker${index}`}
          name={meetUpInfo.name}
          url={meetUpInfo.link}
          eventTime={{
            date: meetUpInfo.local_date,
            time: meetUpInfo.local_time,
          }}
          id={meetUpInfo.id}
          groupName={meetUpInfo.group.name}
          position={{ lat: meetUpInfo.venue.lat, lng: meetUpInfo.venue.lon }}
          onClick={handleMarkerClick}
          toGetHostData={{
            urlName: meetUpInfo.group.urlname,
            eventId: meetUpInfo.id,
          }}
        />
      )
    );
  });

  const onInfoWindowOpen = () => {
    const button = (
      <Icon
        type='star'
        onClick={() => {
          FavoriteEvents[selectedPlace.id]
            ? handleDeleteFavorite({
                ...selectedPlace,
                google: null,
                map: null,
                onClick: null,
              })
            : handleFavorite({
                ...selectedPlace,
                google: null,
                map: null,
                onClick: null,
              });
        }}
        style={{ fontSize: '20px' }}
        spin={FavoriteEvents[selectedPlace.id] ? true : false}
        theme={FavoriteEvents[selectedPlace.id] ? 'twoTone' : 'outlined'}
        twoToneColor={FavoriteEvents[selectedPlace.id] ? '#fad400' : '#83857b'}
      />
    );
    ReactDOM.render(
      React.Children.only(button),
      document.getElementById('iwc')
    );
  };

  return (
    <Map
      className='map-elem'
      google={google}
      zoom={14}
      initialCenter={{ lat: 34.052235, lng: -118.243683 }}
      onDragend={getCenter}
      ref={mapEl}
    >
      {renderedMarker}

      <InfoWindow
        marker={activeMarker}
        visible={showingInfoWindow}
        onOpen={e => {
          onInfoWindowOpen(e);
        }}
      >
        <div className='google_map_infoWindow'>
          <div id='iwc' className='star-icon' />
          <div className='infoWindow-content'>
            <h3>
              <a
                href={selectedPlace.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                {selectedPlace.name}
              </a>
            </h3>
            <h4>
              {selectedPlace.eventTime
                ? `${selectedPlace.eventTime.date} ${selectedPlace.eventTime.time}`
                : ''}
            </h4>
            <h4>Group {selectedPlace.groupName}</h4>
          </div>
          <div className='infoWindow-content'>
            <img src={selectedPlace.hostImageUrl} alt='host_thumbnail'></img>
            <h4>Host: {selectedPlace.hostName}</h4>
          </div>
        </div>
      </InfoWindow>
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC3kqVCB8cyTwmcv8-uFP9agzm-HKavf5M',
})(MapContainer);
