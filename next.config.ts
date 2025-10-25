import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

// Use default locations: next-intl.config.ts and src/i18n/request.ts
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);
