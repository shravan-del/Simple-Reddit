import React, { useState } from 'react';
import Header from './Main/Header';
import Content from './Main/Content';
import Profile from './Main/Profile';
import './App.css';

const App = () => {
  const [subredditId, setSubredditId] = useState('1'); // Example subreddit ID
  const [userId] = useState('1'); // Example user ID

  return (
    <div className="app">
      <Header />
      <Content subredditId={subredditId} />
      <Profile userId={userId} />
    </div>
  );
};

export default App;
