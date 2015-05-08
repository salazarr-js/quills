var stylus = require('stylus');
var path   = require('path');
var nodes  = stylus.nodes;
var utils  = stylus.utils;

exports = module.exports = plugin;

try {
  var test = require('./nodes/test');
} catch (err) {
  // ignore
}

exports.version = require(path.join(__dirname, '../package.json')).version;

exports.path = __dirname;

function plugin() {
  return function(style){
    style.include(__dirname);

    // quill definitions
    style.define('saysomething', test.saludar);
  };
}