import Link from "next/link";
import { getBlogs } from "./fetchers";

export default async function BlogsPage() {
  const blogs = await getBlogs();
  return (
    <div className="w-full">
      {blogs.length > 0 ? (
        <div className="space-y-10">
          {blogs.map((blog, i) => {
            if (blog.frontmatter.publicVisible === false) return null;
            return (
              <div key={i} className="space-y-2">
                <div className="space-y-0">
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="font-bold text-3xl text-blue-500 dark:text-blue-400 hover:underline my-0"
                  >
                    {blog.frontmatter.title}
                  </Link>
                  <p className="opacity-50">{blog.frontmatter.publishDate}</p>
                </div>

                {blog.frontmatter.overview && (
                  <div className="block lg:flex justify-between w-full space-y-3 lg:space-y-0 lg:space-x-5">
                    <p className=" text-justify text-lg leading-7">
                      {blog.frontmatter.overview}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-xl "> No results found!</p>
      )}
    </div>

    // <main>
    //   {blogs.map((blog, i) => (
    //     <article key={i} className="grid grid-cols-4 text-3xl">
    //       <h1>{blog.frontmatter.title}</h1>
    //       <p>{blog.frontmatter.author}</p>
    //       <p>{blog.frontmatter.publishDate}</p>
    //       <Link href={`/blogs/${blog.slug}`}>Read More</Link>
    //     </article>
    //   ))}
    // </main>
  );
}
