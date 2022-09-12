const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let NODE_ENV;

module.exports = {
  mode: NODE_ENV,
  entry: path.join(__dirname, "client", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.css/i,
          use: [
            "style-loader",
            "css-loader"
          ]
        }
      ]
    },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
}