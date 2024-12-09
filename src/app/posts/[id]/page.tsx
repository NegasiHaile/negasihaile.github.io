import { posts } from "@/data/posts";
import React from "react";

const Post = async ({ params }: { params: { id: number } }) => {
  const post_detail = posts.filter((item) => item.id == params.id);
  const post = post_detail[0];

  return (
    <div className="space-y-5">
      <div className="justify-between space-y-5">
        <p className="text-4xl md:text-5xl font-bold w-full">{post.title}</p>

        <div
          className=" w-full h-fit min-h-96 justify-center items-center rounded bg-cover bg-center"
          style={{
            backgroundImage: `url(${post.thumbnail})`,
          }}
        ></div>

        <div className="space-y-14">
          {post.sections.map((section, sec_i) => {
            return (
              <div key={sec_i} className="space-y-5">
                <p className=" text-2xl md:text-3xl font-bold">
                  {section.title}
                </p>
                <div className="text-xl leading-8 text-justify">
                  {section.description}
                </div>
                {section.images.length > 0 &&
                  section.images.map((image, image_i) => {
                    return (
                      <div
                        key={`section_${sec_i}_image_${image_i}`}
                        className=" w-full h-fit min-h-96 justify-center items-center rounded bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${image})`,
                        }}
                      ></div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Post;
