const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');
const mearge = require('webpack-merge');
const webpack = require('webpack');

const configBase = require('./webpack.base.js');

module.exports = mearge(configBase,{
    devtool : 'cheap-module-source-map',
    devServer : {
        port : '9999',
        contentBase : '/dist'
    },
    plugins : [
        new htmlWebpackPlugin(),
        new cleanWebpackPlugin(
            ['dist'],
            {
                root : __dirname,
                verbose : true,
                dry : false,
                exclude : ['test']
            }
        ),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV' : JSON.stringify('production')
        }),
        // new
        new WebpackShellPlugin(
            {
                onBuildStart:['git pull'], 
                onBuildEnd:['echo "Webpack End"']
            }
        )
    ]
});