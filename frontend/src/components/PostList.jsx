import React from "react";
import { usePosts } from "../hooks/usePosts";
import PostCard from "./PostCard";

const PostList = () => {
  const { posts, loading } = usePosts();

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
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostList;