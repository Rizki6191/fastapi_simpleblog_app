import { useState, useEffect } from "react";

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://127.0.0.1:8000/blog");
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  return { posts, loading };
};