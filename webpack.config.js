const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"], //表示在import 文件时文件后缀名可以不写
    alias: {
      src: path.join(__dirname, "src"),
      //表示设置路径别名这样在import的文件在src下的时候可以直接 @/component/...
    },
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "swc-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              singleton: true, // 单独的style
            },
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // 清除dist文件夹
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      title: "最爱和奶茶",
      filename: "index.html",
      favicon: path.resolve(__dirname, "src", "public", "logo.svg"),
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 4000,
    hot: true,
    open: true,
  },
};
