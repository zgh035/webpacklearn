
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    // devtool: 'inline-source-map',
    entry : {
        app : __dirname  + '/src/index.js',
        // print : __dirname  + '/src/print.js'
        // vender : [
        //     'lodash'
        // ]
    },
    externals: {
        "lodash": {
            commonjs: "lodash",
            commonjs2: "lodash",
            amd: "lodash",
            root: "_"
        }
    },
    output :　{
        path : path.resolve(__dirname,'dist'),
        filename: '[name].[chunkhash].js',
        sourceMapFilename: '[name].map',
        library: 'webpackNumbers',
        libraryTarget: 'umd'
        // chunkFilename: '[name].bundle.js',
    },
    plugins : [
        //  new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery'
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor'
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'runtime'
        // }),
        // new webpack.HashedModuleIdsPlugin(),
        // new webpack.ProvidePlugin({
        //     url : 'url'
        // })
    ],
    module : {
        rules : [
            {
                test: require.resolve('jquery'),
                loader: 'expose?jQuery!expose?$'
            },
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
    },
    //  resolve: {
    //     alias: {
    //         jquery: "jquery/src/jquery",
    //         cookie : "cookie/index.js",
    //         test : 'url/url.js'
    //     }
    // }
}