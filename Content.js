import React, { useState, useEffect } from 'react';
import './Content.css';
import Post from '../Main/Post';
import { getSubredditPosts } from '../api';

const Content = ({ subredditId }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getSubredditPosts(subredditId)
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, [subredditId]);

  return (
    <div className="content">
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Content;
