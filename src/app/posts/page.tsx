import PostCard from "@/components/post-card";
import { posts } from "@/data/posts";
import React from "react";

const Posts = () => {
  return (
    <div className="w-full">
      {posts.length > 0 ? (
        <div className="space-y-10">
          {posts.map((post, i) => {
            if (post.display === false) return null;
            return <PostCard index={i} post={post} />;
          })}
        </div>
      ) : (
        <p className="text-xl "> No results found!</p>
      )}
    </div>
  );
};

export default Posts;
