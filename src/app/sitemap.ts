import type { MetadataRoute } from "next";
import { getIndexableBlogs } from "@/app/blogs/fetchers";
import { SITE_URL } from "@/lib/seo";
import { BLOGS_PUBLIC } from "@/lib/site-config";

export const dynamic = "force-static";

const STATIC_ROUTES = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/resume/", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/projects/", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/publications/", priority: 0.9, changeFrequency: "monthly" as const },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  const routes = BLOGS_PUBLIC
    ? [
        ...STATIC_ROUTES,
        {
          path: "/blogs/",
          priority: 0.8,
          changeFrequency: "weekly" as const,
        },
      ]
    : STATIC_ROUTES;

  const staticEntries = routes.map((route) => ({
    url: `${SITE_URL}${route.path === "/" ? "/" : route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  if (!BLOGS_PUBLIC) {
    return staticEntries;
  }

  const indexableBlogs = await getIndexableBlogs();
  const blogEntries = indexableBlogs.map((blog) => ({
    url: `${SITE_URL}/blogs/${blog.slug}/`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
