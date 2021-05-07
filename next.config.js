module.exports = {
  async rewrites() {
    return {
      fallback: [
        {
          source: "/:makeSlug/:modelSlug",
          destination: "/overview/:makeSlug/:modelSlug",
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
};
