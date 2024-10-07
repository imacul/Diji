import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.prismic.io',
        pathname: '/diji/**', // Replace with your Prismic repo name
      },
    ],
  },
};

export default nextConfig;
