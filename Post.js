import React, { useState } from 'react';
import './Post.css';

const Post = ({ post }) => {
  const [upvotes, setUpvotes] = useState(post.upvotes);
  const [commentsVisible, setCommentsVisible] = useState(false);

  const handleUpvote = () => {
    setUpvotes(upvotes + 1);
  };

  const handleDownvote = () => {
    setUpvotes(upvotes - 1);
  };

  const toggleComments = () => {
    setCommentsVisible(!commentsVisible);
  };

  return (
    <div className="post">
      <div className="post-header">
        <h2>{post.title}</h2>
        <div>
          <button className="vote-btn" onClick={handleUpvote}>▲</button>
          <span>{upvotes}</span>
          <button className="vote-btn" onClick={handleDownvote}>▼</button>
        </div>
      </div>
      <p>{post.content}</p>
      <div className="post-footer">
        <button className="comment-btn" onClick={toggleComments}>
          {commentsVisible ? 'Hide Comments' : 'Show Comments'}
        </button>
      </div>
      {commentsVisible && (
        <div className="comments">
          {post.comments.map((comment, index) => (
            <div key={index} className="comment">
              {comment}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Post;
