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
  // Static HTML for uPress: no Node server, so no API routes, proxy or redirects.
  // Retired player pages get redirect stubs from scripts/export-upress.mjs.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
}

export default nextConfig
