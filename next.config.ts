import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    turbo: {
      rules: {
        // https://github.com/sass/dart-sass/issues/2352#issuecomment-2360899608
        // Use modern sass loader instead of deprecated sass legacy js API
        '*.scss': {
          loaders: ['sass-loader'],
          as: '*.css',
        },
      },
    },
  },
};

export default nextConfig;
