const path = require("path");
const CracoLessPlugin = require("craco-less");

const resolve = (pathname) => path.resolve(__dirname, pathname);

module.exports = {
  // less
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  //webpack
  webpack: {
    // 配置别名
    alias: {
      "@": resolve("src"),
      "utils": resolve("src/utils"),
      "components": resolve("src/components"),
    },
  },
};
