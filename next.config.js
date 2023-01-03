// dodane typu z TS, by kliknac alt+klik
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // by byly '/ ' na koncu url'u
  // trailingSlash: true,
};

module.exports = nextConfig;
