/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.imagin.studio"],
    unoptimized: true,
  },

  output: "export",
  // Optional: Change the output directory `out` -> `dist`
  distDir: "dist",
};

module.exports = nextConfig;
