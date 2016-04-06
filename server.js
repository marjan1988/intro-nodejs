//NODE JS module
var express = require('express');
//Reguire Middlewares
var bodyParser = require('body-parser');

//Server app
var app = express();

exports.start = function(){
	
	//MIDDLEWARE
	app.use(bodyParser.urlencoded());
	app.use(bodyParser.json());
	
	console.log('Server started');
	
};

exports.stop = function(){
	
	console.log('Server stopped');
	
};