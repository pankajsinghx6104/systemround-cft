import { createContext, useEffect, useState } from "react";

export const PostContext = createContext();

const POSTS_PER_PAGE = 6;

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
      setLoading(false);
    }, 5000);
  }, []);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const removePost = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        currentPosts,
        currentPage,
        setCurrentPage,
        removePost,
        loading,
        POSTS_PER_PAGE,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
