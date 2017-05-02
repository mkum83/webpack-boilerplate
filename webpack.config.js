var webpack = require('webpack');
module.exports = function(env) {
  return require('./configs/webpack.' + env +'.js')
}