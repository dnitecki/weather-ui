const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    hot: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      showErrors: true,
    }),
    new ReactRefreshWebpackPlugin(),
    // Define new env variables
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("development"),
    }),
  ],
};
