/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // static export -> ./out
  images: { unoptimized: true },
  trailingSlash: true,
};
module.exports = nextConfig;
