import { fileURLToPath } from "node:url";
import createJiti from "jiti";
import { withContentlayer } from "next-contentlayer";
import { withSentryConfig } from "@sentry/nextjs";

const jiti = createJiti(fileURLToPath(import.meta.url));

// Import env here to validate during build. Using jiti we can import .ts files :)
jiti("./src/env/client.ts");
jiti("./src/env/server.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // TODO: Turn this off when it becomes stable
  experimental: {
    instrumentationHook: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zewdlabs.co",
      },
    ],
  },
  output: "standalone",
};

export default withSentryConfig(
  withContentlayer(nextConfig),
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,

    org: "zewdlabs",
    project: "zewdlabs",
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: false,

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,
  },
);
