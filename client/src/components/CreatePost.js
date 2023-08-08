import React, { useState } from 'react';
import axios from 'axios';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = event => {
    setTitle(event.target.value);
  };

  const handleContentChange = event => {
    setContent(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newPost = { title, content };

    axios.post('http://localhost:5000/api/posts', newPost) // Replace with your backend API endpoint
      .then(response => {
        console.log('New post created:', response.data);
        // Reset form fields after successful creation
        setTitle('');
        setContent('');
      })
      .catch(error => {
        console.error('Error creating post:', error);
      });
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={handleTitleChange} />
        <label>Content:</label>
        <textarea value={content} onChange={handleContentChange}></textarea>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
