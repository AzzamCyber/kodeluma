import type { MetadataRoute } from 'next';

const BASE_URL = 'https://kodeluma.azzamcodex.id';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/courses',
          '/courses/*',
          '/learning-paths',
          '/about',
          '/verify',
          '/verify/*',
          '/api/og*',
        ],
        disallow: [
          '/admin',
          '/admin/*',
          '/api/*',
          '/classroom/*',
          '/quests/*',
          '/profile/*',
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
