import { posts } from "@/data/posts";
import React from "react";

const Post = async ({ params }: { params: { id: number } }) => {
  const post_detail = posts.filter((item) => item.id == params.id);
  const post = post_detail[0];

  return (
    <div className="space-y-5">
      <div className="justify-between space-y-5">
        <p className="text-3xl md:text-5xl font-bold w-full">{post.title}</p>

        <div
          className=" w-full h-fit min-h-96 justify-center items-center rounded bg-cover bg-center"
          style={{
            backgroundImage: `url(${post.thumbnail})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Post;
