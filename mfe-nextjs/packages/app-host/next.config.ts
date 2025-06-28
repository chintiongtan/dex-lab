import type { NextConfig } from "next";

const { APP_SHOP_URL } = process.env;

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      /**
       * @NOTE dlb_2-step_2: rewrites for [multi-zones](https://nextjs.org/docs/app/guides/multi-zones)
       */
      {
        source: '/shop/:path*',
        destination: `${APP_SHOP_URL}/:path*`,
      },
      {
        source: '/shop-static/:path*',
        destination: `${APP_SHOP_URL}/shop-static/:path*`,
      },
    ]
  },
};

export default nextConfig;
