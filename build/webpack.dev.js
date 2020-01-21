const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "inline-source-map",
  entry: {
    app: path.resolve(__dirname, "../src/index.tsx")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle-[hash:20].js",
    publicPath: "/"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    historyApiFallback: true,
    host: "localhost",
    port: 9003
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src/components"),
      "@services": path.resolve(__dirname, "../src/services")
    },
    extensions: [".tsx", ".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader?cacheDirectory=true",
        options: {
          presets: ["@babel/preset-react"]
        }
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      inject: true
    })
  ]
};
