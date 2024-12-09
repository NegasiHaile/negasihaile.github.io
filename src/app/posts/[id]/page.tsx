import { posts } from "@/data/posts";
import Link from "next/link";
import React from "react";

const Post = async ({ params }: { params: Promise<{ id: string }> }) => {
  const rwo_params = await params;
  const post_detail = posts.filter(
    (item) => item.id.toString() === rwo_params.id
  );
  const post = post_detail.length > 0 ? post_detail[0] : false;

  return (
    <div className="space-y-5">
      {post ? (
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
      ) : (
        <div className="w-full h-full space-y-6 mt-20">
          <p className="text-4xl text-center">Oops! Post doesn’t exist</p>
          <div className="w-full flex justify-center">
            <Link
              href={"/posts"}
              className="border rounded px-6 py-2 hover:opacity-60"
            >
              Find other posts
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
