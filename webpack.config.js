const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: { 
    editor: path.resolve(__dirname, "src/editor.js"),
    style: path.resolve(__dirname, "src/style.js"),
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: '[name].js',
    clean: true
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ],
  },
};