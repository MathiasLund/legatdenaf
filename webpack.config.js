var ExtractTextPlugin = require('extract-text-webpack-plugin');

function getDevTool() {
    if (process.env.NODE_ENV !== 'production') {
        return 'source-map'; //enables source map
    }

    return false;
}

module.exports = {
    entry: {
        main: './app/client.js'
    },
    output: {
        filename: './public/dist/[name].js'
    },
    devtool: getDevTool(),
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'react-hot'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.s?css$/,
                loader: ExtractTextPlugin.extract(
                  'style',
                  'css?modules&localIdentName=[path][name]---[local]---[hash:base64:5]!postcss-loader'
                )
          }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./public/dist/main.css', {
            allChunks: true
        })
    ]
};
