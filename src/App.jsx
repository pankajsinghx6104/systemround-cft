import React, { useContext } from 'react'
import { PostContext, PostProvider } from './context/PostContext'
import PostGrid from './components/PostGrid';
import Pagination from './components/Pagination';

const AppContent = () => {
  const { loading } = useContext(PostContext);

  if(loading){
    return(
      <div className='flex justify-center items-center h-screen w-screen'>
        <span className='text-2xl font-bold'>Loading...</span>
      </div>
    );
  }
  return (
    <div>
      <PostGrid />
      <Pagination />
    </div>
  );
};

export default function App(){
  return(
    <PostProvider>
      <AppContent />
    </PostProvider>
  );
};
