var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './app/client.js',
    output: {
    path: __dirname + '/public/js/build', filename: 'main.build.js' },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                  "style",
                  "css!sass")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('abe.css')
    ]
};
