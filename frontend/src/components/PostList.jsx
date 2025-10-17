import React from "react";
import { useState, useEffect } from "react";
import PostCard from "./PostCard";

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch("http://127.0.0.1:8000/blog")
            const data = await response.json();
            setPosts(data);
            setLoading(false)
        }
        fetchPosts();
    }, [])

    if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-xl font-semibold text-gray-500">Loading posts...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 4. MAPPING: Iterasi array 'posts' dan render PostCard untuk setiap post */}
        {posts.map(post => (
          // Meneruskan setiap 'post' sebagai props ke PostCard
          <PostCard key={post.id} post={post} /> 
        ))}
      </div>
    </div>
  );
}

export default PostList;