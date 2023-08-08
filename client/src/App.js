import React from 'react';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';

function App() {
  return (
    <div className="App">
      <h1>Personal Blog</h1>
      <CreatePost />
      <hr />
      <PostList />
    </div>
  );
}

export default App;
