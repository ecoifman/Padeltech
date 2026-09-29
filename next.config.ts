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
    // Player pages were retired when the site became business-first.
    const retired = "club|clubs|padel|wellness|groups|story|book|network|membership"
    return [
      { source: `/:locale(he|en)/:page(${retired})`, destination: "/:locale", permanent: true },
      { source: "/:locale(he|en)/clubs/:id", destination: "/:locale", permanent: true },
    ]
  },
}

export default nextConfig
