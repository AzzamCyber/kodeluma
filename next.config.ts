import type { NextConfig } from 'next';

// Keep production output separate from the live dev server. A build in .next
// removes dev-only CSS chunks while next dev is still serving pages.
const isolatedBuild = process.env.KODELUMA_ISOLATED_BUILD
  || (process.env.NODE_ENV === 'production' ? 'build' : undefined);
const distDir = isolatedBuild && /^[a-z0-9-]{1,32}$/i.test(isolatedBuild)
  ? `.next-${isolatedBuild}`
  : '.next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  distDir,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-bootstrap'],
  },
  devIndicators: {
    position: 'bottom-right',
  },
  async headers() {
    return [
      {
        source: '/(tech|brand|topics|animations)/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
