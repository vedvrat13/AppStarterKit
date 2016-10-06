var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var SplitByPathPlugin = require('webpack-split-by-path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ["./app/index.js"]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/",
        filename: '[name]-[hash].js',
        chunkFilename: '[name]-[hash].js'
    },
    resolve: {
        extensions: ['', '.js', '.css']
    },
    devtool: 'eval-source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.json$/,
            loader: "json-loader"
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }, {
            test: /\.html$/,
            loader: 'file?name=[name].[ext]'
        }]
    },
    plugins: [
        new ExtractTextPlugin("styles.css", {
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: './template/index.ejs',
            title: 'AppStarterKit',
            appMountIds: ['root', 'devtools']
        }),
        new SplitByPathPlugin([{
            name: 'vendor',
            path: path.resolve(__dirname, 'node_modules')
        }])
    ]
}
