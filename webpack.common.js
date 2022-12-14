const path = require("path")

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
          },
        },
      },
    ],
  },
  output: {
    publicPath: "/",
    filename: "bundle.js",
  },
  resolve: {
    extensions: ["*", ".js", ".json", ".svg", "jpg", "png"],
    alias: {
      assets: path.resolve(__dirname, "src/assets"),
      config: path.resolve(__dirname, "src/config"),
      containers: path.resolve(__dirname, "src/components/containers"),
      routes: path.resolve(__dirname, "src/routes"),
      presentational: path.resolve(__dirname, "src/components/presentational"),
      src: path.resolve(__dirname, "src"),
      store: path.resolve(__dirname, "src/store"),
      utils: path.resolve(__dirname, "src/utils"),
    },
  },
}
