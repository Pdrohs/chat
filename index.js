/**
 * CHAT
 */
/// <reference path="typings/node/node.d.ts"/>
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var express = require('express');

app.use('/scripts', express.static(__dirname + '/node_modules/jScrollPane/'));
app.use('/images', express.static(__dirname + '/images/'));

app.get('/', function(req, res){
  	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	
  socket.on('message', function(msg, nome, hora){
    io.emit('message', msg, nome, hora);
  });
});

http.listen(3000, function(){
	console.log('Servidor ouvindo na porta 3000');
});