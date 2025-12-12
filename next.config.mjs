/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ["better-sqlite3", "@prisma/adapter-better-sqlite3"],
    outputFileTracingIncludes: {
      "/api/auth/**": ["./dev.db"],
      "/api/user/**": ["./dev.db"]
    },
  },
};

export default nextConfig;
