import type { MetadataRoute } from 'next';

// This allows us to generate a `robots.txt` file dynamically based on the needs of the Node.js Website
// @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
export default function robots(): MetadataRoute.Robots {
  return {
    host: process.env.NEXT_PUBLIC_BASE_URL,
    rules: {
      userAgent: '*',
      allow: ['/', '/works', '/contact'],
      disallow: ['/_next/', '/api/'],
    },
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  };
}

// Enforces that this route is used as static rendering
// @see https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
export const dynamic = 'error';
