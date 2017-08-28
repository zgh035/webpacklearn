
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    entry : {
        app : __dirname  + '/src/index.js',
        // print : __dirname  + '/src/print.js'
    },
    output :　{
        path : path.resolve(__dirname,'dist'),
        filename : '[name].build.js',
        sourceMapFilename: '[name].map'
    },
    module : {
        rules : [
            {
                
                test: /\.css$/,
                use: [
                'style-loader',
                'css-loader'
                ]            
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                'file-loader'
                ]
            }
        ]
    }
}