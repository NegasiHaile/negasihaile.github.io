import Link from "next/link";
import { getBlogs } from "./fetchers";

export default async function BlogsPage() {
  const blogs = await getBlogs();
  return (
    <div className="w-full">
      {blogs.length > 0 ? (
        <div className="space-y-5">
          {blogs.map((blog, i) => {
            if (blog.frontmatter.publicVisible === false) return null;
            return (
              <div key={i} className="space-y-2">
                <div className="space-y-0">
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="font-bold text-lg text-blue-500 dark:text-blue-400 hover:underline my-0"
                  >
                    {blog.frontmatter.title}
                  </Link>
                  <p className="opacity-50">{blog.frontmatter.publishDate}</p>
                </div>

                {blog.frontmatter.overview && (
                  <div className="block lg:flex justify-between w-full space-y-3 lg:space-y-0 lg:space-x-5">
                    <p className="text-justify line-clamp-2">
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
  );
}
