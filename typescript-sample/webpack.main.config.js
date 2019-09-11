module.exports = {
  // Changes based on https://github.com/TypeStrong/ts-loader#configuration
  mode: "development",
  devtool: "inline-source-map",
  // From Template (Start)
  entry: "./src/main.ts",
  // From Template (End)
  // Changes based on https://github.com/TypeStrong/ts-loader#configuration
  output: {
    filename: "./.webpack/main.ts"
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  // From Template (Start): Put your normal webpack config below here
  module: {
    rules: require("./webpack.rules")
  },
  // From Template (End)
};
