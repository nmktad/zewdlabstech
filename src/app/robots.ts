import type { MetadataRoute } from "next";
import env from "@/env.config";

// This allows us to generate a `robots.txt` file dynamically based on the needs of the Node.js Website
// @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
export default function robots(): MetadataRoute.Robots {
  return {
    host: env.NEXT_PUBLIC_BASE_URL,
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: `${env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  };
}

// Enforces that this route is used as static rendering
// @see https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
export const dynamic = "error";
