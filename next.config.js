module.exports = {
  async rewrites() {
    return {
      beforeFiles: [
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
