var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, '.', 'dist');
var mainPath = path.resolve(__dirname, 'app', 'app.js');

var config = {
    devtool: 'source-map', //normal source mapping
    entry: {
        app: mainPath,
        vendor: ['angular', 'oclazyload', 'angular-ui-router']
    },
    output: {
        path: buildPath,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: [nodeModulesPath]
        },{
            test: /\.css$/,
            loader: 'style!css'
        }]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            path: buildPath,
            filename: 'vendor.bundle.js'
        }),
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                mangle: false
            }
        })
    ]
};

module.exports = config;