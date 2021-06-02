const path = require('path')
const slsw = require('serverless-webpack')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const nodeExternals = require('webpack-node-externals')
const serverlessEnv = slsw.lib.serverless.service.provider.stage || {}
const entries = {}

Object.keys(slsw.lib.entries).forEach((key) => (entries[key] = ['./source-map-install.js', slsw.lib.entries[key]]))

module.exports = {
    mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
    entry: slsw.lib.entries,
    resolve: {
        extensions: ['.json', '.ts'],
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, '.webpack'),
        filename: '[name].js',
    },
    externals: [nodeExternals()],
    target: 'node',
    optimization: {
        // We no not want to minimize our code.
        minimize: false,
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    plugins: [
			    "babel-plugin-transform-typescript-metadata",
                        '@babel/plugin-proposal-async-generator-functions',
                        ['@babel/plugin-proposal-decorators', { legacy: true }],
                        '@babel/proposal-class-properties',
                        'transform-modern-regexp',
                    ],
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                useBuiltIns: 'usage',
                                corejs: '2',
                                shippedProposals: true,
                                targets: {
                                    node: 'current',
                                },
                                modules: 'commonjs',
                            },
                        ],
                        '@babel/typescript',
                    ],
                },
            },
        ],
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin()
    ],
}
