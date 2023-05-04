const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { AngularWebpackPlugin } = require('@ngtools/webpack');
const meteorExternals = require('webpack-meteor-externals');

const projectPath = path.resolve('.').split(path.sep + '.meteor')[0];

const clientConfig = {
    entry: './client/main.ts',
    devtool: 'nosources-source-map',
    module: {
        rules: [{
                test: /\.(?:html|css)$/,
                loader: "raw-loader"
            },
            {
                test: /\.(?:ngfactoryjs|ngstylejs|js|ts)$/,
                loader: '@ngtools/webpack'
            }
        ]
    },
    plugins: [
        new AngularWebpackPlugin({
            tsConfigPath: path.join(projectPath, './tsconfig.json'),
            mainPath: path.join(projectPath, './client/index.ts'),
            entryModule: path.join(projectPath, './client/app/app.module#AppModule'),
            sourceMap: true,
            skipCodeGeneration: process.env.NODE_ENV !== 'production'
        }),
        new HtmlWebpackPlugin({
            template: './client/main.html'
        }),
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
    entry: './server/main.ts',
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
