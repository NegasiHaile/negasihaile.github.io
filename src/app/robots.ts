import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { BLOGS_PUBLIC } from "@/lib/site-config";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const blogDisallows = BLOGS_PUBLIC
    ? ["/*_draft/", "/blogs/*_draft/"]
    : ["/blogs/", "/*_draft/", "/blogs/*_draft/"];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: blogDisallows,
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
