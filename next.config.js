const githubPath = "/Elden-Ring-Checklist";
const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: githubPath,
  reactStrictMode: true,
  assetPrefix: isProd ? githubPath : "",
};

module.exports = nextConfig;
