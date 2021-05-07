module.exports = {
  async rewrites() {
    return {
      fallback: [
        {
          source: "/:makeSlug/:modelSlug",
          destination: "/overview/feature1challenger/:makeSlug/:modelSlug",
          has: [
            {
              type: "cookie",
              key: "critical_flags",
              value: "feature1challenger",
            },
          ],
        },
        {
          source: "/:makeSlug/:modelSlug",
          destination: "/overview/feature1control/:makeSlug/:modelSlug",
          has: [
            {
              type: "cookie",
              key: "critical_flags",
              value: "feature1control",
            },
          ],
        },
        {
          source: "/learn/:doc",
          destination: "/learn/variantB/:doc",
          has: [
            {
              type: "cookie",
              key: "critical_flags",
              value: "feature1challenger",
            },
          ],
        },
        {
          source: "/learn/:doc",
          destination: "/learn/variantA/:doc",
        },
      ],
    };
  },
  i18n: {
    locales: ["truecar", "pnc"],
    domains: [
      {
        domain: "pnc.local.truecardev.com",
        defaultLocale: "pnc",
      },
      {
        domain: "www.local.truecardev.com",
        defaultLocale: "truecar",
      },
    ],
    defaultLocale: "truecar",
    localeDetection: false,
  },
  typescript: {
    // Do not block local builds on TS errors
    ignoreDevErrors: true,
    // Check for TS errors in CI instead of blocking the production build
    ignoreBuildErrors: true,
  },
};
