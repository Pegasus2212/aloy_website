const HtmlWebPackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const path = require("path")
const merge = require("webpack-merge")
const Dotenv = require("dotenv-webpack")
const common = require("./webpack.common.js")

const plugins = [
  new Dotenv(),
  new HtmlWebPackPlugin({
    template: path.join(__dirname, "src", "index.html"),
    title: 'Aloy Web',
    favicon: "./src/assets/images/Favicon.svg",
    filename: "./index.html",
  }),
  new webpack.DefinePlugin({
    
  }),
]

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-eval-source-map",
  performance: {
    hints: false,
  },
  plugins: plugins,
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    hot: true,
    historyApiFallback: {
      disableDotRule: true
    }
  },
})
