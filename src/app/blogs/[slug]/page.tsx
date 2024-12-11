import { getBlogBySlug, getAllBlogSlug } from "../fetchers";

export async function generateStaticParams() {
  return getAllBlogSlug();
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const this_params = await params;
  const blog = await getBlogBySlug(this_params.slug);

  return (
    <div className="prose dark:prose-invert max-w-none">
      <article className="w-full">{blog.content}</article>
    </div>
  );
}
