const HtmlWebPackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const path = require("path")
const merge = require("webpack-merge")
const Dotenv = require("dotenv-webpack")
const common = require("./webpack.common.js")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const plugins = [
    new Dotenv(),
    new CleanWebpackPlugin(),
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
    mode: "production",
    devtool: "source-map",
    performance: {
        hints: false,
    },
    plugins: plugins
})
