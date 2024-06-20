export const getSubredditPosts = async (subredditId) => {
    // Fetch posts for a given subreddit
    // Replace with actual API endpoint
    return [
      {
        id: 1,
        title: 'First Post',
        content: 'This is the first post',
        upvotes: 10,
        comments: []
      },
      {
        id: 2,
        title: 'Second Post',
        content: 'This is the second post',
        upvotes: 5,
        comments: []
      }
    ];
  };
  
  export const getUserProfile = async (userId) => {
    // Fetch user profile details
    // Replace with actual API endpoint
    return {
      username: 'Shravan',
      subscribedSubreddits: [
        { id: 1, name: 'Subreddit 1' },
        { id: 2, name: 'Subreddit 2' }
      ],
      upvotesReceived: 25
    };
  };
  