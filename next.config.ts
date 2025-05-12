import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/__/auth",
        destination: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com/__/auth`,
      },
      {
        source: "/__/auth/:path*",
        destination: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com/__/auth/:path*`,
      },
      {
        source: "/__/firebase/init.json",
        destination: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com/__/firebase/init.json`,
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
