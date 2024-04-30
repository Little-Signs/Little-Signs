const path = require("path");
const webpack = require("webpack");
const BundleTracker = require("webpack-bundle-tracker");

module.exports = {
  context: __dirname,
  entry: "./index",
  output: {
    path: path.resolve(__dirname, "bundles/"),
    publicPath: "auto", // necessary for CDNs/S3/blob storages
    filename: "[name]-[contenthash].js",
  },
  plugins: [
    new BundleTracker({ path: path.resolve(__dirname, "bundles/"), filename: "webpack-stats.json" }),
  ],
};