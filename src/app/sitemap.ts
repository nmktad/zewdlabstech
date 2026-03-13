import env from "@/env.config";
import type { MetadataRoute } from "next";

const addPathToBaseURL = (path: string) => `${env.NEXT_PUBLIC_BASE_URL}${path}`;

// This allows us to generate a `sitemap.xml` file dynamically based on the needs of the Node.js Website
// Next.js Sitemap Generation doesn't support `alternate` refs yet
// @see https://github.com/vercel/next.js/discussions/55646
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: addPathToBaseURL("/"),
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: addPathToBaseURL("/contact"),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}

// Enforces that this route is used as static rendering
// @see https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
export const dynamic = "error";
