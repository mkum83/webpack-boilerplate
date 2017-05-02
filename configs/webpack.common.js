var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
//to extract scss file into css
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//to copy the static assests
var CopyWebpackPlugin  = require("copy-webpack-plugin");

module.exports= {
  entry: './src/js/script.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/planner.bundle.js',
      pathinfo: false
  },
    devtool: 'eval',
    bail:false,
    module: {       
        rules: [{
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                      fallback: "style-loader",
                      use: [{loader:"css-loader"},{loader:"sass-loader"}]
                    })
            },{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }]
    },
    plugins: [
        new HtmlWebpackPlugin({template:'./src/home.htm'}),
        new ExtractTextPlugin("css/style.css"),
        new CopyWebpackPlugin([{from:'./src/assets',to:'assets'}]),
        new CopyWebpackPlugin([{from:'./src/favicon.png',to:''}])
    ]
};