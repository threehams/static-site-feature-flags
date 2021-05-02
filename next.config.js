module.exports = {
  async rewrites() {
    return [
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
    ];
  },
  // future: {
  //   webpack5: true,
  // },
};
