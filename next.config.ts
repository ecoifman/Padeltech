import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "127.0.0.1",
    "localhost",
    "0.0.0.0",
    "172.30.0.2",
    "*.cursor.com",
    "*.cursor.sh",
    "*.cursorusercontent.com",
  ],
  async redirects() {
    return [
      {
        source: "/:locale(he|en)/club",
        destination: "/:locale/padel",
        permanent: false,
      },
      {
        source: "/:locale(he|en)/network",
        destination: "/:locale/clubs",
        permanent: false,
      },
      {
        source: "/:locale(he|en)/membership",
        destination: "/:locale",
        permanent: false,
      },
      {
        source: "/:locale(he|en)/contact",
        destination: "/:locale",
        permanent: false,
      },
    ]
  },
}

export default nextConfig
