// dodane typu z TS, by kliknac alt+klik
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["fakestoreapi.com"],
    //dodane lepsze formaty zdj niz jpg i png dla przegladarek ktore rozumieja e formaty zamiast jpg i png
    formats: ["image/avif", "image/webp"],
    // https://nextjs.org/docs/messages/next-image-unconfigured-host
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "fakestoreapi.com",
    //     port: "",
    //     pathname: "/img/**",
    //   },
    // ],
  },
  // by byly '/ ' na koncu url'u
  // trailingSlash: true,
};

module.exports = nextConfig;
