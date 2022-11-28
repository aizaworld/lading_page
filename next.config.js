/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'imgix',
    path: 'https://ino.aizaworld.com/',
  },
  swcMinify: true,
};

module.exports = nextConfig;
