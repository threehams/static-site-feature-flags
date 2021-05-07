module.exports = {
  async rewrites() {
    return {
      fallback: [
        {
          source: "/:makeSlug/:modelSlug",
          destination: "/:host/overview/:makeSlug/:modelSlug",
          has: [
            {
              type: "host",
              value: "(?<host>.*)",
            },
          ],
        },
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
        {
          source: "/",
          destination: "/:host",
          has: [
            {
              type: "host",
              value: "(?<host>.*)",
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
  // future: {
  //   webpack5: true,
  // },
};
