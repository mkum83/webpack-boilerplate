const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
//merging the common config with dev configs..
module.exports = Merge(CommonConfig,{
    
});