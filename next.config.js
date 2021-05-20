module.exports = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/:makeSlug(acura|honda)",
          destination: "/:host/overview/:makeSlug/challenger",
          has: [
            {
              type: "host",
              value: "(?<host>.*)",
            },
            {
              type: "cookie",
              key: "critical_flags",
              value: "feature1challenger",
            },
          ],
        },
        {
          source: "/:makeSlug(acura|honda)",
          destination: "/:host/overview/:makeSlug/control",
          has: [
            {
              type: "host",
              value: "(?<host>.*)",
            },
            {
              type: "cookie",
              key: "critical_flags",
              value: "feature1control",
            },
          ],
        },
        {
          source: "/:condition(new|used)-cars-for-sale",
          destination: "/:host/marketplace/:condition",
          has: [
            {
              type: "host",
              value: "(?<host>.*)",
            },
          ],
        },
        {
          source: "/:car-:paymentType(loan|lease)-calculator",
          destination: "/:host/calculator/:paymentType",
          has: [
            {
              type: "host",
              value: "(?<host>.*)",
            },
          ],
        },
        {
          source: "/",
          destination: "/:host/home/default",
          has: [
            {
              type: "host",
              value: "(?<host>.*)",
            },
          ],
        },
      ],
      afterFiles: [
        {
          source: "/:path*",
          destination: "/:host/:path*",
          has: [
            {
              type: "host",
              value: "(?<host>.*)",
            },
          ],
        },
      ],
    };
  },
  typescript: {
    // Do not block local builds on TS errors
    ignoreDevErrors: true,
    // Check for TS errors in CI instead of blocking the production build
    ignoreBuildErrors: true,
  },
};
