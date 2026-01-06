
import React, { useContext } from 'react'
import { PostContext } from '../context/PostContext'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';

const Pagination = () => {
    const { posts, POSTS_PER_PAGE, currentPage, setCurrentPage } = useContext(PostContext);
    const totalPages = Math.ceil(posts.length/POSTS_PER_PAGE);
  return (
    <div>
      <button 
      disabled={currentPage===1}
      onClick={() => setCurrentPage((p)=>p-1)}
      className='px-3 py-1 rounded bg-gray-200 disabled:opacity-50'>
        <ChevronLeftIcon className='w-5 h-5'/>
      </button>

      {[...Array(totalPages)].map((_, i)=>(
        <button 
        key={i}
        onClick={()=> setCurrentPage(i+1)}
        className={'px-3 py-1 rounded-full ${currentPage === i+1 ? "bg-gray-800 text-white" : "bg-gray-200}'}>
            {i+1}
        </button>
      ))}

      <button
      disabled={currentPage===totalPages}
      onClick={()=> setCurrentPage((p)=>p+1)}
      className='ps-3 py-1 rounded bg-gray-200 disabled:opacity-50'>
        <ChevronRightIcon className='w-5 h-5'/>
      </button>
    </div>
  );
;}

export default Pagination;
