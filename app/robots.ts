import type { MetadataRoute } from "next";
import { PREVIEW_MODE } from "@/lib/content";

// While in preview, ask every search engine not to crawl the site.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: PREVIEW_MODE ? { userAgent: "*", disallow: "/" } : { userAgent: "*", allow: "/" },
  };
}
