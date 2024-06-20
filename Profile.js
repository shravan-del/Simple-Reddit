import React, { useState, useEffect } from 'react';
import './Profile.css';
import { getUserProfile } from '../api';

const Profile = ({ userId }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getUserProfile(userId)
      .then(data => setProfile(data))
      .catch(error => console.error('Error fetching profile:', error));
  }, [userId]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile">
      <h2>{profile.username}'s Profile</h2>
      <div className="profile-details">
        <h3>Subscribed Subreddits</h3>
        <ul>
          {profile.subscribedSubreddits.map(subreddit => (
            <li key={subreddit.id}>{subreddit.name}</li>
          ))}
        </ul>
        <h3>Total Upvotes Received</h3>
        <p>{profile.upvotesReceived}</p>
      </div>
    </div>
  );
};

export default Profile;
