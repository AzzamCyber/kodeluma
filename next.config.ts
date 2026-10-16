import type { NextConfig } from 'next';

// Keep production output in standard '.next' directory for Vercel and production deployments.
// Only use a custom isolated directory if explicitly requested via KODELUMA_ISOLATED_BUILD.
const isolatedBuild = process.env.KODELUMA_ISOLATED_BUILD;
const distDir = isolatedBuild && /^[a-z0-9-]{1,32}$/i.test(isolatedBuild)
  ? `.next-${isolatedBuild}`
  : undefined;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  ...(distDir ? { distDir } : {}),
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
