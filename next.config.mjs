/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: process.env.NODE_ENV === "production"
    ? "/jcsuplementos"
    : "",

  assetPrefix: process.env.NODE_ENV === "production"
    ? "/jcsuplementos/"
    : "",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
