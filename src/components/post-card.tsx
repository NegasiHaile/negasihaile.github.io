import { PostTypes } from "@/types";
import Link from "next/link";
import React from "react";

type PostCardProps = {
  index: number | string;
  post: PostTypes;
};

const PostCard = ({ index, post }: PostCardProps) => {
  return (
    <div key={index} className="space-y-2">
      <div className="space-y-0">
        <Link
          href={`posts/${post.id}`}
          className="font-bold text-3xl text-blue-400 my-0"
        >
          {post.title}
        </Link>
        <p className="opacity-50">{post.date}</p>
      </div>

      <div className="block justify-between w-full space-y-3">
        <p className=" text-justify">{post.sub_title}</p>
        {post.thumbnail && (
          // <Image
          //   src={post.thumbnail}
          //   alt={post.title}
          //   width={400}
          //   height={120}
          // />

          <div
            className=" w-full h-48  md:flex justify-center items-center rounded bg-cover bg-center"
            style={{
              backgroundImage: `url(${post.thumbnail})`,
            }}
          ></div>
        )}
      </div>

      {/* {post.sections.map((section, sub_i) => {
                  return (
                    <div className=" space-y-5" key={`${i}_${sub_i}`}>
                      <p>{section.description}</p>
                    </div>
                  );
                })} */}
    </div>
  );
};

export default PostCard;
