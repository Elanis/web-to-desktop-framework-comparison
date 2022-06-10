const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: process.NODE_ENV || "development",
  entry: "./src",
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: { publicPath: "dist" }
          }
        ]
      },
      {
        test: /\.node$/,
        use: [
          {
            loader: "native-addon-loader",
            options: { name: "[name]-[hash].[ext]" }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"]
  },
  plugins: [new CleanWebpackPlugin()]
};
