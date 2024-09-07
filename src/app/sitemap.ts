import type { MetadataRoute } from "next";

const addPathToBaseURL = (path: string) => `https://zewdlabs.co${path}`;

// This allows us to generate a `sitemap.xml` file dynamically based on the needs of the Node.js Website
// Next.js Sitemap Generation doesn't support `alternate` refs yet
// @see https://github.com/vercel/next.js/discussions/55646
export default function sitemap(): MetadataRoute.Sitemap {

  const routes: MetadataRoute.Sitemap = [
    "/",
    "/about",
    "/blog",
    "/oss-friends",
  ].map((route) => ({
    url: addPathToBaseURL(route),
    lastModified: new Date(),
    changeFrequency: "always",
    priority: 1,
  }));

  // TODO: When the blogs are implemented, we can use the following code to generate the sitemap
  // const blogs: MetadataRoute.Sitemap = allPosts.map((post) => ({
  //   url: `https://zewdlabs.co/blog/${post.slug}`,
  //   lastModified: post.publishedAt, // date format should be YYYY-MM-DD
  //   changeFrequency: "never",
  //   priority: 1,
  // }));

  return [
    ...routes,
  ];
}

// Enforces that this route is used as static rendering
// @see https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
export const dynamic = "error";
