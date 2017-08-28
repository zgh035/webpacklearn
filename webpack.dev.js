const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const Merge = require('webpack-merge');

const webpackBase = require('./webpack.base.js');


module.exports = Merge(webpackBase,{
    devServer : {
        contentBase : '/dist',
        port  : 9012,
        hot : true
    },
    plugins : [
        new htmlWebpackPlugin({
            title : 'htmlwebpack test'
        }),
        new cleanWebpackPlugin(
            ['dist'],
            {
                root : __dirname,
                verbose : true,
                dry : false,
                exclude : ['test']
            }
        ),
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.optimize.UglifyJsPlugin(options => {
        //     sourceMap: options.devtool && (options.devtool.indexOf("sourcemap") >= 0 || options.devtool.indexOf("source-map") >= 0)
        // })
        new webpack.DefinePlugin({
            'process.env.NODE_ENV' : JSON.stringify('production')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name : 'common'
        })
    ]
})