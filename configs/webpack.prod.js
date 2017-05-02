const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

//merging the common config with prod configs..
module.exports = Merge(CommonConfig,{  
    devtool: 'source-map',
    bail:false,
    module: {       
        rules: []
    },
    plugins: [
        //html template with mifiy options...
        new HtmlWebpackPlugin({
            template:'./src/home.htm',
            chunksSortMode: 'none',
            minify: {
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
                // removeTagWhitespace: false,
                removeRedundantAttributes: false,
                removeEmptyAttributes: false,
                removeScriptTypeAttributes: false,
                removeStyleLinkTypeAttributes: false
              }}),        
        //uglify the js, also css files too
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        })
    ]
});