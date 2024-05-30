module.exports = {
  output: "export",
  reactStrictMode: false,
  trailingSlash: false,
  exportPathMap: function () {
      return {
          '/': { page: '/' }
      };
  }
};