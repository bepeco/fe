const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const Webpack = require("webpack");

const distPath = "dist";

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    chunkFilename: "[name].bundle.js",
    path: path.resolve(__dirname, distPath)
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, distPath),
    port: 9000,
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin([distPath]),
    new HtmlWebpackPlugin({
      template: "public/index.html"
    }),
    new Webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js"]
  }
};
