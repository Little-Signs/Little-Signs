const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");
const BundleTracker = require("webpack-bundle-tracker");

const resolve = path.resolve.bind(path, __dirname);

module.exports = (env, argv) => {
  let output;
  let extractCssPlugin;
  let fileLoaderName;

  switch (env) {
    case "prod":
      publicPath = "https://www.littlesigns.co.zw/static/bundles/prod/";
      outputPath = resolve("bundles/prod");
      break;
    case "stg":
      publicPath = "https://www.staging.littlesigns.co.zw/static/bundles/stg/";
      outputPath = resolve("bundles/stg");
      break;
    case "dev":
      publicPath = "http://127.0.0.1:8000/static/bundles/dev/";
      outputPath = resolve("bundles/dev");
      break;
  }

  switch (argv.mode) {
    case "production":
      output = {
        path: outputPath,
        filename: "[chunkhash]/[name].js",
        chunkFilename: "[chunkhash]/[name].[id].js",
        publicPath: publicPath
      };
      extractCssPlugin = new MiniCssExtractPlugin({
        filename: "[chunkhash]/[name].css",
        chunkFilename: "[chunkhash]/[name].[id].css"
      });
      fileLoaderName = "[path][name].[contenthash].[ext]";
      break;

    case "development":
      output = {
        path: outputPath,
        filename: "[name].js",
        chunkFilename: "[name].js",
        publicPath: publicPath
      };
      extractCssPlugin = new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[name].[id].css"
      });
      fileLoaderName = "[path][name].[ext]";
      break;
    default:
      break;
  }

  return {
    mode: argv.mode,
    entry: "./index.js",
    output,
    module: {
      rules: [
        // Scripts
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        // Styles
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        },
        // Fonts
        {
          test: /\.(eot|otf|ttf|woff|woff2)(\?v=[0-9.]+)?$/,
          loader: "file-loader",
          options: {
            outputPath: "fonts",
            name: fileLoaderName
          }
        },
        // Images
        {
          test: /\.(png|svg|jpg|gif)(\?v=[0-9.]+)?$/,
          loader: "file-loader",
          options: {
            outputPath: "images",
            name: fileLoaderName
          }
        },
        // html
        {
          test: /\.html$/,
          loader: "file-loader",
          options: {
            outputPath: "html",
            name: fileLoaderName
          }
        },
        {test: /modernizr/, loader: 'imports-loader?this=>window!exports-loader?window.Modernizr'},
        // Jquery
        // {
        //   test: require.resolve('jquery'),
        //   use: [
        //     {
        //       loader: 'expose-loader',
        //       options: 'jQuery'
        //     },
        //     {
        //       loader: 'expose-loader',
        //       options: '$'
        //     }
        //   ]
        // }
      ]
    },
    plugins: [
      new BundleTracker({
        path: resolve("bundles/"),
        filename: `webpack-bundle.${env}.json`
      }),
      extractCssPlugin,
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    ],
    devtool: "source-map"
  };
};
