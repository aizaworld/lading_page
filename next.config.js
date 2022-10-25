/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'imgix',
    path: 'https://aiza-fac34.web.app/',
  },
  swcMinify: true,
};

module.exports = nextConfig;
