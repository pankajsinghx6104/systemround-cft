import { XMarkIcon } from '@heroicons/react/16/solid';
import React from 'react'

const PostCard = ({post, onRemove}) => {
  return (
    <div className='relative bg-white shadow-md rounded-lg p-4'>
      <button
      className='absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-red-100 transition-colors'
      onClick={()=>onRemove(post.id)}
      ><XMarkIcon className='w-5 h-5 text-red-500' /></button>
      <h3 className='font-semibold text-gray-800 mb-2'>{post.title}</h3>
      <p className='text-gray-600 text-sm mb-3'>{post.body}</p>
      <img src={`https://picsum.photos/300/200?random=${post.id}`}
      alt="post"
      className='rounded-lg w-full h-40 object-cover' />
    </div>
  );
};

export default PostCard;
