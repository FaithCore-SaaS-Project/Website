import type { NextConfig } from "next";
import { exec } from "child_process";

// This project uses the Next.js App Router exclusively (src/app/).
// The src/pages directory is kept as an empty placeholder to prevent
// the dev-mode file watcher from throwing ENOENT errors.
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
    if (isServer && process.env.NODE_ENV === "development") {
      // ඔයාගේ පෝට් එක 3005 නිසා කෙලින්ම හෝම් පේජ් එක බ්‍රව්සර් එකෙන් ඕපන් වේ.
      // ඩෑෂ්බෝඩ් එකම ඕනේ නම් http://localhost:3005/dashboard කියලා වෙනස් කරන්න මචං.
      exec("start http://localhost:3005");
    }
    return config;
  },
};

export default nextConfig;