import React from "react";

const PostCard = ({ post }) => {
    const { id, title, content} = post;

    return (
        
        <div className="bg-white shadow-lg rounded-xl p-6 mb-4 border border-gray-100">
            <h1><b>Title: { title }</b></h1>
            <p>Content: { content }</p>
        </div>
    );
}

export default PostCard;