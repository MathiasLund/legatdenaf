var path = require('path');
var webpack = require('webpack');
module.exports = {
 entry: './app/client.js',
 output: { path: __dirname + '/public/js/build', filename: 'main.build.js' },
 module: {
   loaders: [
   {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    },
   {
     test: /.jsx?$/,
     loader: 'babel',
     exclude: /node_modules/,
     query: {presets: ['react', 'es2015']}
   }]
 },
};
