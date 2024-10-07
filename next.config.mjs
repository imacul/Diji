const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.prismic.io',
        pathname: '/diji/**',
      },
    ],
  },
};

export default nextConfig;
