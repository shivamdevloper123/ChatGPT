import React, { useState } from 'react';

const BlogWebsite = () => {
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: 'First Blog Post',
      author: 'John Doe',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '2023-07-01',
    },
    {
      id: 2,
      title: 'Second Blog Post',
      author: 'Jane Smith',
      content: 'Nullam eget metus at nisi malesuada aliquam.',
      date: '2023-07-05',
    },
  ]);

  return (
    <div>
      <h1>Blog Website</h1>
      {blogPosts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>
            <strong>Author:</strong> {post.author}
          </p>
          <p>{post.content}</p>
          <p>
            <strong>Date:</strong> {post.date}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BlogWebsite;
