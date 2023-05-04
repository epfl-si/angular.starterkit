const path = require('path');
const webpack = require('webpack');
const meteorExternals = require('webpack-meteor-externals');

const projectPath = path.resolve('.').split(path.sep + '.meteor')[0];

const clientConfig = {
    entry: './client/main.js',
    devtool: 'nosources-source-map',
    module: {
        rules: [{
                test: /\.(?:html|css)$/,
                loader: "raw-loader"
            },
            {
                test: /\.(?:ngfactoryjs|ngstylejs|ts)$/,
                loader: 'ts-loader'
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin()
    ],
    externals: [
        meteorExternals()
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
};
const serverConfig = {
    entry: './server/main.js',
    target: 'node',
    module: {
        rules: [{
            test: /\.(?:js|ts)$/,
            loader: 'ts-loader',
            options: {
                transpileOnly: true,
                happyPackMode: true
            },
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new webpack.ProgressPlugin()
    ],
    externals: [
        meteorExternals()
    ]
}
module.exports = [clientConfig, serverConfig];
