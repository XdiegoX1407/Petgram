const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  output: {
    filename: "app.bundle.js",
    publicPath: "/",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new WebpackPwaManifestPlugin({
      name: "Petgram - Tu app de fotos de mascotas",
      shortname: "Petgram 🐶",
      description:
        "Con Petgram puedes encontrar fotos de animales domésticos muy fácilmente",
      background_color: "#fff",
      theme_color: "#b1a",
      icons: [
        {
          src: path.resolve("public/assets/icon.png"),
          sizes: [96, 128, 192, 256, 384, 512],
          purpose: "maskable any",
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      maximumFileSizeToCacheInBytes: 5000000,
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            "https://(res.cloudinay.com|images.unsplash.com)"
          ),
          handler: "CacheFirst",
          options: {
            cacheName: "images",
          },
        },
        {
          urlPattern: new RegExp(
            "https://petgram-xdiegox1407-i6i9deisq-xdiegox1407.vercel.app/"
          ),
          handler: "NetworkFirst",
          options: {
            cacheName: "api",
          },
        },
      ],
    }),
  ],
};
