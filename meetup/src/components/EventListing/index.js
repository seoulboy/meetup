import React, { useState } from 'react';
import './index.css';
import { Icon } from 'antd';

const EventListing = ({
  meetUpData,
  FavoriteEvents,
  handleDeleteFavorite,
}) => {
  const [showFavorites, setShowFavorites] = useState(false);

  const renderedMeetUpList = meetUpData.map((meetUpInfo, index) => {
    if (meetUpInfo.venue && meetUpInfo.description && meetUpInfo.name) {
      return (
        <li className='event-list-item' key={`id${index}`}>
          <h2>
            <a href={meetUpInfo.link} target='_blank' rel='noopener noreferrer'>
              {meetUpInfo.name}
            </a>
          </h2>
          <p>{`${meetUpInfo.local_date} ${meetUpInfo.local_time}`}</p>
          <p className='group-name'>{meetUpInfo.group.name}</p>
        </li>
      );
    }
  });

  const renderedFavoriteList = Object.values(FavoriteEvents).map(
    (favMeetUpInfo, index) => {
      return (
        <li className='event-list-item' key={`id${index}`}>
          <Icon
            type='star'
            onClick={() => {
              handleDeleteFavorite({
                ...favMeetUpInfo,
                google: null,
                map: null,
                onClick: null,
              });
            }}
            style={{ fontSize: '20px' }}
            spin='true'
            theme='twoTone'
            twoToneColor='#fad400'
          />
          <h2>
            <a
              href={favMeetUpInfo.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              {favMeetUpInfo.name}
            </a>
          </h2>
          <p>{`${favMeetUpInfo.eventTime.date} ${favMeetUpInfo.eventTime.time}`}</p>
          <p>{favMeetUpInfo.groupName}</p>
        </li>
      );
    }
  );

  const toggleEventList = () => {
    showFavorites ? setShowFavorites(false) : setShowFavorites(true);
  };

  if (!showFavorites) {
    return (
      <div className='event-list-container'>
        <h2>
          <button onClick={toggleEventList}>
            {showFavorites ? 'Favorite' : 'Nearby'} Meetup!
          </button>
        </h2>
        <div className='list-div'>
          <ol>{renderedMeetUpList}</ol>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className='favorites-container'>
          <h2>
            <button onClick={toggleEventList}>
              {showFavorites ? 'Favorite' : 'Nearby'} Meetup!
            </button>
          </h2>
          <div className='list-div'>
            <ol>{renderedFavoriteList}</ol>
          </div>
        </div>
      </>
    );
  }
};

export default EventListing;
