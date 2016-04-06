//NODE JS module
var express = require('express');

//Server app
var app = express();

exports.start = function(){
	
	console.log('Server started');
	
};

exports.stop = function(){
	
	console.log('Server stopped');
	
};