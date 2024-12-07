import { PostTypes } from "@/types";
import Image from "next/image";
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
          className="font-bold text-3xl text-blue-500 dark:text-blue-400 hover:underline my-0"
        >
          {post.title}
        </Link>
        <p className="opacity-50">{post.date}</p>
      </div>

      <div className="block lg:flex justify-between w-full space-y-3 lg:space-y-0 lg:space-x-5">
        <p className=" text-justify">{post.sub_title}</p>
        {post.thumbnail && (
          <Image
            src={post.thumbnail}
            alt={post.title}
            width={350}
            height={120}
            className="w-fit lg:max-w-96 max-h-56 rounded"
          />

          // <div
          //   className=" w-full h-full min-h-56 md:h-48  md:flex justify-center items-center rounded bg-cover bg-center"
          //   style={{
          //     backgroundImage: `url(${post.thumbnail})`,
          //   }}
          // ></div>
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
