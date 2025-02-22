import type { MetadataRoute } from "next";

// TODO: Get the url from the environment variable
const addPathToBaseURL = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/${path}`;

// This allows us to generate a `sitemap.xml` file dynamically based on the needs of the Node.js Website
// Next.js Sitemap Generation doesn't support `alternate` refs yet
// @see https://github.com/vercel/next.js/discussions/55646
export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = ["/", "/contact"].map((route) => ({
    url: addPathToBaseURL(route),
    lastModified: new Date(),
    changeFrequency: "always",
    priority: 1,
  }));

  return [...routes];
}

// Enforces that this route is used as static rendering
// @see https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
export const dynamic = "error";
