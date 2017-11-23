// const path = require('path');
// const htmlWebpackPlugin = require('html-webpack-plugin');
// const cleanWebpackPlugin = require('clean-webpack-plugin');
// const webpack = require('webpack');


// module.exports = {
//     devtool: 'inline-source-map',
//     entry : {
//         app : __dirname  + '/src/index.js',
//         // print : __dirname  + '/src/print.js'
//     },
//     output :　{
//         path : path.resolve(__dirname,'dist'),
//         filename : '[name].build.js'
//     },
//     devServer : {
//         contentBase : '/dist',
//         port  : 9012,
//         hot : true
//     },
//     plugins : [
//         new htmlWebpackPlugin({
//             title : 'htmlwebpack test'
//         }),
//         new cleanWebpackPlugin(
//             ['dist'],
//             {
//                 root : __dirname,
//                 verbose : true,
//                 dry : false,
//                 exclude : ['test']
//             }
//         ),
//         new webpack.HotModuleReplacementPlugin(),
//         // new webpack.optimize.UglifyJsPlugin(options => {
//         //     sourceMap: options.devtool && (options.devtool.indexOf("sourcemap") >= 0 || options.devtool.indexOf("source-map") >= 0)
//         // })
//         new webpack.DefinePlugin({
//             'process.env.NODE_ENV' : JSON.stringify('production')
//         })
//     ],
//     module : {
//         rules : [
//             {
                
//                 test: /\.css$/,
//                 use: [
//                 'style-loader',
//                 'css-loader'
//                 ]            
//             },
//             {
//                 test: /\.(png|svg|jpg|gif)$/,
//                 use: [
//                 'file-loader'
//                 ]
//             }
//         ]
//     }
// }



module.exports = function (env) {
    console.log(env);
    return require(`./webpack.pro.js`);
}