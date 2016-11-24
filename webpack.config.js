var path = require('path');

var config = {
    entry: './source/main.js',
    output: {
        path:'./public',
        filename: 'js/main.js',
        publicPath: '/'
    },

    devServer: {
        contentBase: "./public",
        port: 8888,
        historyApiFallback: true,
        publicPath: '/'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',

                query: {
                    presets: ['es2015', 'react']
                }

            }
        ]
    }
};

module.exports = config;