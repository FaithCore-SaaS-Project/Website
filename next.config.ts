import type { NextConfig } from "next";
import { exec } from "child_process";

// This project uses the Next.js App Router exclusively (src/app/).
// The src/pages directory is kept as an empty placeholder to prevent
// the dev-mode file watcher from throwing ENOENT errors.

// Guard flag — ensures the browser only opens once per dev server start,
// not on every webpack compilation (Next.js runs webpack for both server
// and client bundles, which previously caused two tabs to open).
let browserOpened = false;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // සර්වර් එක මුලින්ම ලෝඩ් වෙද්දී බ්‍රව්සර් එක ඔටෝ ඕපන් කරන ලොජික් එක
  webpack: (config, { isServer }) => {
    if (isServer && process.env.NODE_ENV === "development" && !browserOpened) {
      browserOpened = true;
      // ඩෑෂ්බෝඩ් එකම ඕනේ නම් http://localhost:3005/dashboard කියලා වෙනස් කරන්න.
      exec("start http://localhost:3005");
    }
    return config;
  },
};

export default nextConfig;