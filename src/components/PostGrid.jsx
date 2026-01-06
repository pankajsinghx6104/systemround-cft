import React, { useContext } from 'react'
import { PostContext } from '../context/PostContext'
import PostCard from './PostCard';

const PostGrid = () => {
    const { currentPosts, removePost} =useContext(PostContext);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {currentPosts.map((post)=>(
        <PostCard key={post.id} post={post} onRemove={removePost} />
      ))}
    </div>
  );
};

export default PostGrid;
