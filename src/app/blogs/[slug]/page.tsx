import type { Metadata } from "next";
import { getBlogBySlug, getAllBlogSlug, isBlogIndexable } from "../fetchers";
import StructuredData from "@/components/structured-data";
import {
  createPageMetadata,
  getBreadcrumbSchema,
  PERSON,
  SITE_URL,
} from "@/lib/seo";
import { BLOGS_PUBLIC } from "@/lib/site-config";

export async function generateStaticParams() {
  return getAllBlogSlug();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  const indexable =
    BLOGS_PUBLIC && isBlogIndexable(slug, blog.frontmatter.publicVisible);

  if (!indexable) {
    return createPageMetadata({
      title: `${blog.frontmatter.title} | Negasi Haile Abadi`,
      description: blog.frontmatter.overview || "Blog post.",
      path: `/blogs/${slug}/`,
      noIndex: true,
    });
  }

  const description =
    blog.frontmatter.overview ||
    `Article by ${PERSON.fullName} about ${blog.frontmatter.title}.`;

  return createPageMetadata({
    title: `${blog.frontmatter.title} | Negasi Haile Abadi`,
    description,
    path: `/blogs/${slug}/`,
    type: "article",
    keywords: [blog.frontmatter.title, "Negasi Haile blog"],
  });
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const this_params = await params;
  const blog = await getBlogBySlug(this_params.slug);
  const showStructuredData =
    BLOGS_PUBLIC &&
    isBlogIndexable(this_params.slug, blog.frontmatter.publicVisible);

  return (
    <div className="prose dark:prose-invert max-w-none">
      {showStructuredData && (
        <StructuredData
          data={[
            getBreadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blogs/" },
              {
                name: blog.frontmatter.title,
                path: `/blogs/${this_params.slug}/`,
              },
            ]),
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: blog.frontmatter.title,
              description: blog.frontmatter.overview,
              datePublished: blog.frontmatter.publishDate,
              author: {
                "@type": "Person",
                name: PERSON.fullName,
                alternateName: PERSON.alternateNames,
                url: SITE_URL,
              },
              publisher: {
                "@type": "Person",
                name: PERSON.fullName,
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `${SITE_URL}/blogs/${this_params.slug}/`,
              },
            },
          ]}
        />
      )}
      <article className="w-full">{blog.content}</article>
    </div>
  );
}
