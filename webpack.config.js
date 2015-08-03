var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'dist');
var mainPath = path.resolve(__dirname, 'app', 'app.js');

var config = {
    devtool: 'eval', //helps with error debugging
    entry: {
        app: mainPath,
        vendor: ['angular', 'oclazyload', 'angular-ui-router']
    },
    output: {
        path: buildPath,
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    debug: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: [nodeModulesPath]
            },

            {
                test: /\.css$/,
                loader: 'style!css'
            }

        ]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            path: buildPath,
            filename: 'vendor.bundle.js'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;