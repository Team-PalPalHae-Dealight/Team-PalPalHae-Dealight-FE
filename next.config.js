/** @type {import('next').NextConfig} */

module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    domains: [
      'team-08-bucket.s3.ap-northeast-2.amazonaws.com',
      'picsum.photos',
    ],
  },
};
