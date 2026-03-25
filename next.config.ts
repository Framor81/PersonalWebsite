import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    const museumBaseUrl =
      process.env.MUSEUM_APP_URL ||
      "https://museum.franciscomoralespuente.com";

    return [
      {
        source: "/projects/3dmuseum",
        destination: museumBaseUrl,
        permanent: false,
      },
      {
        source: "/projects/3dmuseum/:path*",
        destination: `${museumBaseUrl}/:path*`,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
