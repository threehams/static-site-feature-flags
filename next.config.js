module.exports = {
  async rewrites() {
    return {
      afterFiles: [
        {
          source: "/:condition(new|used)-cars-for-sale",
          destination: "/marketplace/:condition",
        },
        {
          source: "/:car-:paymentType(loan|lease)-calculator",
          destination: "/calculator/:paymentType",
        },
        {
          source: "/",
          destination: "/home/default/",
        },
        {
          source: "/",
          destination: "/home/truecar/",
          has: [
            {
              type: "host",
              value: "www.local.truecardev.com",
            },
          ],
        },
        {
          source: "/",
          destination: "/home/default/",
        },
      ],
      fallback: [
        {
          source: "/:makeSlug",
          destination: "/overview/:makeSlug/challenger",
          has: [
            {
              type: "cookie",
              key: "critical_flags",
              value: "feature1challenger",
            },
          ],
        },
        {
          source: "/:makeSlug",
          destination: "/overview/:makeSlug/control",
          has: [
            {
              type: "cookie",
              key: "critical_flags",
              value: "feature1control",
            },
          ],
        },
        {
          source: "/:makeSlug/:modelSlug",
          destination: "/overview/:makeSlug/:modelSlug/challenger",
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
          destination: "/overview/:makeSlug/:modelSlug/control",
          has: [
            {
              type: "cookie",
              key: "critical_flags",
              value: "feature1control",
            },
          ],
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
