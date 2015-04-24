var stylus = require('stylus'),
    nodes  = stylus.nodes,
    utils  = stylus.utils;

//exports = module.exports;

exports.saludar = function(text){
	console.log(text);
	utils.assertString(text)
	//return text;
	return text;
}