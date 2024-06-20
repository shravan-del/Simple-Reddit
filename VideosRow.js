import React from 'react';
import './VideosRow.css';

const VideosRow = ({ type, label, videos, channel }) => {
  const renderRowLabel = () => {
    if (type === 'normal') {
      return <h3 className="videos-row-label">{label}</h3>;
    }

    if (type === 'channel') {
      return (
        <div className="videos-row-label-channel">
          <div className="left">
            <img src={channel.image} className="avatar" alt="Channel Avatar" />
            <h3 className="video-row-label">{channel.name}</h3>
            <span className="small-text">Recommended channel for you</span>
          </div>
          <div className="right">
            <button className="subscribe-btn">
              Subscribe
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="videos-row-container">
      <div className="row">
        <div className="videos-label-container">
          {renderRowLabel()}
        </div>
        <div className="videos-row-item">
          {videos.map(video => (
            <div key={video.id} className="video">
              <img src={video.thumbnail} alt={video.title} />
              <h4>{video.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideosRow;
